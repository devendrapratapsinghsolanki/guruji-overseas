import { NextRequest, NextResponse } from "next/server";
import {
  validateAdminCredentials,
  signAdminToken,
  setAdminCookie,
} from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { passcode, email } = body;

    if (!passcode || typeof passcode !== "string") {
      return NextResponse.json(
        { success: false, message: "Admin passcode is required." },
        { status: 400 }
      );
    }

    const isValid = validateAdminCredentials(passcode);
    if (!isValid) {
      return NextResponse.json(
        { success: false, message: "Invalid admin passcode." },
        { status: 401 }
      );
    }

    const adminEmail = email || process.env.ADMIN_EMAIL || "gurujioverseasrtk@gmail.com";
    const token = await signAdminToken(adminEmail);

    const response = NextResponse.json({
      success: true,
      message: "Admin authenticated successfully.",
      user: { email: adminEmail, role: "admin" },
    });

    setAdminCookie(response, token);
    return response;
  } catch (err: unknown) {
    console.error("[Admin Login Error]:", err);
    return NextResponse.json(
      { success: false, message: "An error occurred during authentication." },
      { status: 500 }
    );
  }
}
