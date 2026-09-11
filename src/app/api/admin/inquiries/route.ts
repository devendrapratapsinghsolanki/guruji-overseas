import { NextRequest, NextResponse } from "next/server";
import { getAdminSessionFromRequest } from "@/lib/auth";
import { InquiryService } from "@/lib/services/inquiryService";
import { InquiryStatus } from "@/types/inquiry";

export async function GET(request: NextRequest) {
  try {
    // 1. Verify admin authorization
    const session = await getAdminSessionFromRequest(request);
    if (!session) {
      return NextResponse.json(
        { success: false, message: "Unauthorized admin access." },
        { status: 401 }
      );
    }

    // 2. Parse query parameters
    const { searchParams } = new URL(request.url);
    const status = (searchParams.get("status") as InquiryStatus | "ALL") || "ALL";
    const service = searchParams.get("service") || "ALL";
    const dateRange = (searchParams.get("dateRange") as any) || "all";
    const searchQuery = searchParams.get("search") || "";
    const page = parseInt(searchParams.get("page") || "1", 10);
    const pageSize = parseInt(searchParams.get("pageSize") || "20", 10);

    const result = await InquiryService.listInquiries({
      status,
      service,
      dateRange,
      searchQuery,
      page,
      pageSize,
    });

    return NextResponse.json(result, { status: 200 });
  } catch (err: unknown) {
    console.error("[GET /api/admin/inquiries Error]:", err);
    return NextResponse.json(
      { success: false, message: "Failed to fetch inquiries." },
      { status: 500 }
    );
  }
}
