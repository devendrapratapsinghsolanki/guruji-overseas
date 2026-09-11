import { NextRequest, NextResponse } from "next/server";
import { getAdminSessionFromRequest } from "@/lib/auth";
import { InquiryService } from "@/lib/services/inquiryService";

export async function GET(request: NextRequest) {
  try {
    const session = await getAdminSessionFromRequest(request);
    if (!session) {
      return NextResponse.json(
        { success: false, message: "Unauthorized." },
        { status: 401 }
      );
    }

    const stats = await InquiryService.getStats();
    return NextResponse.json({ success: true, stats }, { status: 200 });
  } catch (err: unknown) {
    console.error("[GET /api/admin/stats Error]:", err);
    return NextResponse.json(
      { success: false, message: "Failed to fetch dashboard statistics." },
      { status: 500 }
    );
  }
}
