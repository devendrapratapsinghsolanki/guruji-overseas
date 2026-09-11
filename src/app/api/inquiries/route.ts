import { NextRequest, NextResponse } from "next/server";
import { inquiryFormSchema } from "@/lib/validation/inquiry";
import { InquiryService } from "@/lib/services/inquiryService";
import {
  sendAdminInquiryNotification,
  sendVisitorAcknowledgement,
} from "@/lib/email/inquiryEmail";

// Simple in-memory sliding rate limiter per IP: max 5 requests per 60 seconds
const ipRequestHistory = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000;
  const maxRequests = 5;

  const timestamps = ipRequestHistory.get(ip) || [];
  const validTimestamps = timestamps.filter((t) => now - t < windowMs);

  if (validTimestamps.length >= maxRequests) {
    return true;
  }

  validTimestamps.push(now);
  ipRequestHistory.set(ip, validTimestamps);
  return false;
}

export async function POST(request: NextRequest) {
  try {
    // 1. Extract IP for rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "anonymous";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many submissions. Please wait a minute before submitting again.",
        },
        { status: 429 }
      );
    }

    // 2. Parse JSON body
    let rawBody: unknown;
    try {
      rawBody = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request payload format.",
        },
        { status: 400 }
      );
    }

    // 3. Validate with Zod
    const parseResult = inquiryFormSchema.safeParse(rawBody);

    if (!parseResult.success) {
      const fieldErrors: Record<string, string> = {};
      parseResult.error.issues.forEach((issue) => {
        const path = issue.path[0];
        if (path) {
          fieldErrors[path.toString()] = issue.message;
        }
      });

      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please review the highlighted fields.",
          errors: fieldErrors,
        },
        { status: 422 }
      );
    }

    const { name, email, phone, services, message, consent, honeypot } =
      parseResult.data;

    // 4. Honeypot check (Spam bot detection)
    if (honeypot && honeypot.trim().length > 0) {
      console.warn(`[Spam honeypot triggered from IP ${ip}]`);
      // Return 201 so bots believe it succeeded without polluting database
      return NextResponse.json(
        {
          success: true,
          message: "Inquiry submitted successfully.",
        },
        { status: 201 }
      );
    }

    // 5. Store inquiry in PostgreSQL database
    const inquiry = await InquiryService.createInquiry({
      name,
      email,
      phone,
      services,
      message,
      consent,
      source: "Website Inquiry Form",
    });

    console.log(`✅ [New Inquiry Created]: ${inquiry.id} (${inquiry.name}, ${inquiry.phone})`);

    // 6. Send email notifications asynchronously (non-blocking)
    // Even if email fails, inquiry is safely stored in DB
    Promise.allSettled([
      sendAdminInquiryNotification(inquiry),
      sendVisitorAcknowledgement(inquiry),
    ]).catch((err) => {
      console.error("[Email Notification Dispatch Failure]:", err);
    });

    // 7. Return clean success response
    return NextResponse.json(
      {
        success: true,
        message: "Inquiry submitted successfully.",
        inquiryId: inquiry.id,
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    console.error("[POST /api/inquiries Server Error]:", err);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while processing your inquiry. Please try again later.",
      },
      { status: 500 }
    );
  }
}
