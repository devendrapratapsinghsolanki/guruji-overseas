"use server";

import { LeadService } from "@/lib/services/leadService";
import { LeadStatus, LeadFilterQuery } from "@/types/crm";

/**
 * Server Actions for Future Admin / CRM Dashboard
 * Decoupled from UI so they can be invoked from any React Server Component or Client Form.
 */

// Simulated authorization check (Ready to plug with NextAuth / Clerk / JWT)
async function verifyAdminAuth() {
  // In future production: check session/role
  const isAuthenticated = true;
  if (!isAuthenticated) {
    throw new Error("Unauthorized: Admin access required.");
  }
  return { id: "counsellor-admin-1", name: "Senior Advisor (Rohtak HQ)" };
}

/**
 * Server Action: Update Lead Lifecycle Status
 */
export async function updateLeadStatusAction(
  leadId: string,
  newStatus: LeadStatus,
  reason?: string
) {
  try {
    const admin = await verifyAdminAuth();
    const updatedLead = await LeadService.updateLeadStatus(
      leadId,
      newStatus,
      admin.name,
      reason
    );
    return { success: true, lead: updatedLead };
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Failed to update lead status";
    return { success: false, error: msg };
  }
}

/**
 * Server Action: Add Private Internal Note
 */
export async function addLeadNoteAction(leadId: string, noteContent: string) {
  try {
    const admin = await verifyAdminAuth();
    const note = await LeadService.addLeadNote(leadId, noteContent, {
      id: admin.id,
      name: admin.name,
    });
    return { success: true, note };
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Failed to add note";
    return { success: false, error: msg };
  }
}

/**
 * Server Action: Get Leads for Admin Table
 */
export async function getLeadsForAdminAction(filters?: LeadFilterQuery) {
  try {
    await verifyAdminAuth();
    const data = await LeadService.listLeads(filters);
    return { success: true, ...data };
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Failed to retrieve leads";
    return { success: false, error: msg };
  }
}

/**
 * Server Action: Get CRM Stats Summary
 */
export async function getCrmStatsSummaryAction() {
  try {
    await verifyAdminAuth();
    const stats = await LeadService.getStatsSummary();
    return { success: true, stats };
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Failed to retrieve CRM statistics";
    return { success: false, error: msg };
  }
}
