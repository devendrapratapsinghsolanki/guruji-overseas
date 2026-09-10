import { NextRequest, NextResponse } from "next/server";
import { LeadService } from "@/lib/services/leadService";
import { LeadFilterQuery, LeadStatus } from "@/types/crm";

/**
 * Protected Admin / CRM Leads API Endpoint
 * Provides JSON API for future custom mobile CRM apps or web admin dashboards.
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const filters: LeadFilterQuery = {
      status: (searchParams.get("status") as LeadStatus) || "ALL",
      country: searchParams.get("country") || "ALL",
      counsellorId: searchParams.get("counsellorId") || "ALL",
      searchQuery: searchParams.get("q") || "",
      page: parseInt(searchParams.get("page") || "1", 10),
      pageSize: parseInt(searchParams.get("pageSize") || "20", 10),
    };

    const data = await LeadService.listLeads(filters);
    const stats = await LeadService.getStatsSummary();

    return NextResponse.json(
      {
        success: true,
        data: data.leads,
        pagination: {
          total: data.total,
          page: data.page,
          pageSize: data.pageSize,
          totalPages: Math.ceil(data.total / data.pageSize),
        },
        stats,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Admin Leads Fetch Error]:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch CRM leads" },
      { status: 500 }
    );
  }
}
