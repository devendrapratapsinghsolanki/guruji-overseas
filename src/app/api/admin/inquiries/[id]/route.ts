import { NextRequest, NextResponse } from "next/server";
import { getAdminSessionFromRequest } from "@/lib/auth";
import { InquiryService } from "@/lib/services/inquiryService";
import { InquiryStatus } from "@/types/inquiry";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await getAdminSessionFromRequest(request);
    if (!session) {
      return NextResponse.json(
        { success: false, message: "Unauthorized." },
        { status: 401 }
      );
    }

    const { id } = await params;
    const inquiry = await InquiryService.getInquiryById(id);

    if (!inquiry) {
      return NextResponse.json(
        { success: false, message: `Inquiry with ID "${id}" not found.` },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, inquiry }, { status: 200 });
  } catch (err: unknown) {
    console.error("[GET /api/admin/inquiries/[id] Error]:", err);
    return NextResponse.json(
      { success: false, message: "Failed to fetch inquiry details." },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await getAdminSessionFromRequest(request);
    if (!session) {
      return NextResponse.json(
        { success: false, message: "Unauthorized." },
        { status: 401 }
      );
    }

    const { id } = await params;
    const body = await request.json();
    const { status, notes } = body;

    let updated = null;

    if (status) {
      updated = await InquiryService.updateStatus(id, status as InquiryStatus);
    }

    if (notes !== undefined) {
      updated = await InquiryService.updateNotes(id, notes);
    }

    if (!updated) {
      const existing = await InquiryService.getInquiryById(id);
      if (!existing) {
        return NextResponse.json(
          { success: false, message: "Inquiry not found." },
          { status: 404 }
        );
      }
      updated = existing;
    }

    return NextResponse.json({
      success: true,
      message: "Inquiry updated successfully.",
      inquiry: updated,
    });
  } catch (err: unknown) {
    console.error("[PATCH /api/admin/inquiries/[id] Error]:", err);
    return NextResponse.json(
      { success: false, message: "Failed to update inquiry." },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await getAdminSessionFromRequest(request);
    if (!session) {
      return NextResponse.json(
        { success: false, message: "Unauthorized." },
        { status: 401 }
      );
    }

    const { id } = await params;
    const deleted = await InquiryService.deleteInquiry(id);

    return NextResponse.json({
      success: true,
      message: `Inquiry "${id}" deleted successfully.`,
      deleted,
    });
  } catch (err: unknown) {
    console.error("[DELETE /api/admin/inquiries/[id] Error]:", err);
    return NextResponse.json(
      { success: false, message: "Failed to delete inquiry." },
      { status: 500 }
    );
  }
}
