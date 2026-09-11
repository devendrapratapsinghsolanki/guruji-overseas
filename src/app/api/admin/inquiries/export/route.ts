import { NextRequest, NextResponse } from "next/server";
import { getAdminSessionFromRequest } from "@/lib/auth";
import { InquiryService } from "@/lib/services/inquiryService";
import { InquiryStatus } from "@/types/inquiry";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const session = await getAdminSessionFromRequest(request);
    if (!session) {
      return NextResponse.json(
        { success: false, message: "Unauthorized." },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const status = (searchParams.get("status") as InquiryStatus | "ALL") || "ALL";
    const service = searchParams.get("service") || "ALL";
    const dateRange = (searchParams.get("dateRange") as any) || "all";
    const searchQuery = searchParams.get("search") || "";

    const csvContent = await InquiryService.exportCsv({
      status,
      service,
      dateRange,
      searchQuery,
    });

    const timestamp = new Date().toISOString().split("T")[0];
    const filename = `guruji-inquiries-export-${timestamp}.csv`;

    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });
  } catch (err: unknown) {
    console.error("[GET /api/admin/inquiries/export Error]:", err);
    return NextResponse.json(
      { success: false, message: "Failed to export CSV." },
      { status: 500 }
    );
  }
}
