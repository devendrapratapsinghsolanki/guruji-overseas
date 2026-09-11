import { NextRequest, NextResponse } from "next/server";
import { EnquiryFormData, EnquirySubmissionResponse } from "@/types/enquiry";
import { validateEnquiryForm } from "@/lib/validation/enquiry";
import { COMPANY_INFO } from "@/data/company";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body: EnquiryFormData = await request.json();

    // Server-side validation
    const { isValid, errors } = validateEnquiryForm(body);

    if (!isValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Form validation failed. Please review the highlighted fields.",
          errors,
        },
        { status: 400 }
      );
    }

    // Generate a unique tracking reference ID
    const timestamp = Date.now().toString(36).toUpperCase();
    const randomCode = Math.random().toString(36).substring(2, 6).toUpperCase();
    const enquiryId = `GO-ENQ-${timestamp}-${randomCode}`;

    // Record into CRM Data Architecture (Decoupled Service)
    const { LeadService } = await import("@/lib/services/leadService");
    const { InquiryService } = await import("@/lib/services/inquiryService");
    const { sendAdminInquiryNotification, sendVisitorAcknowledgement } = await import("@/lib/email/inquiryEmail");

    await LeadService.createLeadFromWebsiteEnquiry(body, {
      trackingId: enquiryId,
      sourceContext: body.formType,
    });

    const inquiryRecord = await InquiryService.createInquiry({
      name: body.fullName,
      email: body.email || `${body.phone}@student.inquiry`,
      phone: body.phone,
      services: [
        `Study in ${body.preferredCountry.toUpperCase()}`,
        body.interestedCourse,
        body.testStatus !== "exempted" ? `Test: ${body.testStatus}` : "Test Exempted",
      ],
      message: body.message || `Qualification: ${body.highestQualification} (${body.academicScore}). Intake: ${body.preferredIntake}`,
      consent: true,
      source: body.formType || "Profile Assessment",
    });

    // Send emails non-blocking
    if (body.email && body.email.includes("@")) {
      sendVisitorAcknowledgement(inquiryRecord).catch(() => {});
    }
    sendAdminInquiryNotification(inquiryRecord).catch(() => {});

    // Notification summary for Email (gurujioverseasrtk@gmail.com) and Phone (7988429392)
    const notificationPayload = {
      enquiryId,
      notificationEmailTarget: COMPANY_INFO.contact.email, // gurujioverseasrtk@gmail.com
      notificationPhoneTarget: COMPANY_INFO.contact.primaryPhone, // +91 79884 29392
      submittedAt: new Date().toISOString(),
      student: {
        fullName: body.fullName,
        phone: body.phone,
        email: body.email || "Not provided",
        city: body.city || "Not provided",
        qualification: body.highestQualification,
        academicScore: body.academicScore,
        preferredCountry: body.preferredCountry,
        interestedCourse: body.interestedCourse,
        testStatus: body.testStatus,
        testScore: body.testScore || "Not taken yet",
        workExperience: body.workExperience,
        preferredIntake: body.preferredIntake,
        message: body.message || "None",
      },
    };

    console.log("==================================================");
    console.log("📧 [LEAD NOTIFICATION DISPATCH]");
    console.log(`To Email: ${notificationPayload.notificationEmailTarget}`);
    console.log(`To Phone/SMS/WhatsApp: ${notificationPayload.notificationPhoneTarget}`);
    console.log("Details:", JSON.stringify(notificationPayload, null, 2));
    console.log("==================================================");

    // Format WhatsApp instant lead escalation URL
    const waText = encodeURIComponent(
      `*New Website Enquiry (${enquiryId})*\n` +
      `👤 *Name:* ${body.fullName}\n` +
      `📞 *Phone:* ${body.phone}\n` +
      `📧 *Email:* ${body.email || "N/A"}\n` +
      `🌍 *Target Country:* ${body.preferredCountry.toUpperCase()}\n` +
      `🎓 *Course:* ${body.interestedCourse}\n` +
      `📜 *Qualification:* ${body.highestQualification} (${body.academicScore})\n` +
      `🎯 *IELTS/PTE:* ${body.testStatus} (${body.testScore || "N/A"})\n` +
      `🗓️ *Target Intake:* ${body.preferredIntake}\n` +
      `📍 *Location:* ${body.city || "Haryana"}`
    );
    const instantWhatsAppUrl = `https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=${waText}`;

    const responseData: EnquirySubmissionResponse = {
      success: true,
      message:
        `Thank you ${body.fullName}! Your enquiry (Ref: ${enquiryId}) has been received. Our team will contact you from +91 79884 29392 or via email at ${COMPANY_INFO.contact.email} within 24 working hours.`,
      enquiryId,
      isDemoSubmission: false,
    };

    return NextResponse.json(
      {
        ...responseData,
        instantWhatsAppUrl,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Enquiry Submission Error]:", error);
    return NextResponse.json(
      {
        success: false,
        message: `An unexpected server error occurred. Please contact our Rohtak helpline at ${COMPANY_INFO.contact.displayPhone} directly.`,
      },
      { status: 500 }
    );
  }
}
