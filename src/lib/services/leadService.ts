import {
  LeadRecord,
  LeadStatus,
  LeadFilterQuery,
  LeadStatsSummary,
  Counsellor,
  LeadNote,
  LeadActivityLog,
} from "@/types/crm";
import { EnquiryFormData } from "@/types/enquiry";

/**
 * Lead Lifecycle State Transition Rules
 * Enforces valid progression through the Guruji Overseas counselling & visa pipeline.
 */
export const VALID_STATUS_TRANSITIONS: Record<LeadStatus, LeadStatus[]> = {
  NEW: ["CONTACTED", "COUNSELLING", "CLOSED"],
  CONTACTED: ["COUNSELLING", "DOCUMENTS", "CLOSED"],
  COUNSELLING: ["DOCUMENTS", "APPLICATION", "CLOSED"],
  DOCUMENTS: ["APPLICATION", "COUNSELLING", "CLOSED"],
  APPLICATION: ["VISA_PROCESSING", "DOCUMENTS", "CLOSED"],
  VISA_PROCESSING: ["APPROVED", "CLOSED"],
  APPROVED: ["CLOSED"],
  CLOSED: ["NEW", "COUNSELLING"], // Can be reopened if candidate resumes abroad plans
};

/**
 * Simulated In-Memory Database Store
 * Ready to be swapped with `prisma.lead.*` queries when PostgreSQL is connected.
 */
let inMemoryLeads: LeadRecord[] = [];

/**
 * Lead Service Business Logic
 * Keeps CRM business logic strictly decoupled from API endpoints and UI presentation.
 */
export class LeadService {
  /**
   * Convert public website enquiry into a structured CRM lead
   */
  static async createLeadFromWebsiteEnquiry(
    formData: EnquiryFormData,
    metadata?: { sourceContext?: string; trackingId?: string }
  ): Promise<LeadRecord> {
    const timestamp = new Date().toISOString();
    const leadId =
      metadata?.trackingId ||
      `GO-ENQ-${Date.now().toString(36).toUpperCase()}-${Math.random()
        .toString(36)
        .substring(2, 6)
        .toUpperCase()}`;

    const newLead: LeadRecord = {
      id: leadId,
      name: formData.fullName.trim(),
      phone: formData.phone.trim(),
      email: formData.email ? formData.email.trim().toLowerCase() : "",
      city: formData.city || "",
      qualification: formData.highestQualification,
      percentage: formData.academicScore,
      country: formData.preferredCountry,
      course: formData.interestedCourse,
      test: formData.testStatus,
      testScore: formData.testScore || "",
      workExperience: formData.workExperience || "none",
      intake: formData.preferredIntake,
      message: formData.message || "",
      sourceContext: metadata?.sourceContext || "Website General",
      formType: formData.formType,

      // Initial State in Lifecycle
      status: "NEW",
      priority: "MEDIUM",

      notes: [],
      activityLogs: [
        {
          id: `act-${Date.now()}`,
          leadId,
          performedBy: "System (Website Form)",
          action: "STATUS_CHANGED",
          toStatus: "NEW",
          description: `Initial enquiry submitted via ${formData.formType}. Target: ${formData.preferredCountry.toUpperCase()} (${formData.interestedCourse}).`,
          timestamp,
        },
      ],

      createdAt: timestamp,
      updatedAt: timestamp,
    };

    inMemoryLeads.unshift(newLead);
    return newLead;
  }

  /**
   * Validate if a status transition is permitted
   */
  static canTransition(current: LeadStatus, next: LeadStatus): boolean {
    if (current === next) return true;
    const allowed = VALID_STATUS_TRANSITIONS[current] || [];
    return allowed.includes(next);
  }

  /**
   * Update lead lifecycle status with audit logging
   */
  static async updateLeadStatus(
    leadId: string,
    newStatus: LeadStatus,
    performedBy: string,
    reason?: string
  ): Promise<LeadRecord> {
    const lead = inMemoryLeads.find((l) => l.id === leadId);
    if (!lead) {
      throw new Error(`Lead with ID "${leadId}" not found.`);
    }

    if (!this.canTransition(lead.status, newStatus)) {
      throw new Error(
        `Invalid lifecycle transition from ${lead.status} to ${newStatus}.`
      );
    }

    const previousStatus = lead.status;
    const timestamp = new Date().toISOString();

    lead.status = newStatus;
    lead.updatedAt = timestamp;

    const logEntry: LeadActivityLog = {
      id: `act-${Date.now()}`,
      leadId,
      performedBy,
      action: "STATUS_CHANGED",
      fromStatus: previousStatus,
      toStatus: newStatus,
      description: reason || `Status transitioned from ${previousStatus} to ${newStatus}.`,
      timestamp,
    };

    lead.activityLogs = lead.activityLogs || [];
    lead.activityLogs.push(logEntry);

    return lead;
  }

  /**
   * Assign lead to a designated counselor
   */
  static async assignCounsellor(
    leadId: string,
    counsellor: Counsellor,
    assignedBy: string
  ): Promise<LeadRecord> {
    const lead = inMemoryLeads.find((l) => l.id === leadId);
    if (!lead) {
      throw new Error(`Lead with ID "${leadId}" not found.`);
    }

    const timestamp = new Date().toISOString();
    lead.assignedCounsellorId = counsellor.id;
    lead.assignedCounsellor = counsellor;
    lead.updatedAt = timestamp;

    const logEntry: LeadActivityLog = {
      id: `act-${Date.now()}`,
      leadId,
      performedBy: assignedBy,
      action: "COUNSELLOR_ASSIGNED",
      description: `Lead assigned to ${counsellor.name} (${counsellor.role}).`,
      timestamp,
    };

    lead.activityLogs = lead.activityLogs || [];
    lead.activityLogs.push(logEntry);

    return lead;
  }

  /**
   * Add internal staff note to a lead
   */
  static async addLeadNote(
    leadId: string,
    content: string,
    author: { id: string; name: string }
  ): Promise<LeadNote> {
    const lead = inMemoryLeads.find((l) => l.id === leadId);
    if (!lead) {
      throw new Error(`Lead with ID "${leadId}" not found.`);
    }

    const timestamp = new Date().toISOString();
    const note: LeadNote = {
      id: `note-${Date.now()}`,
      leadId,
      authorId: author.id,
      authorName: author.name,
      content: content.trim(),
      isPrivate: true,
      createdAt: timestamp,
    };

    lead.notes = lead.notes || [];
    lead.notes.push(note);
    lead.updatedAt = timestamp;

    return note;
  }

  /**
   * List and filter leads for admin dashboard
   */
  static async listLeads(
    filters?: LeadFilterQuery
  ): Promise<{ leads: LeadRecord[]; total: number; page: number; pageSize: number }> {
    let result = [...inMemoryLeads];

    if (filters) {
      if (filters.status && filters.status !== "ALL") {
        result = result.filter((l) => l.status === filters.status);
      }
      if (filters.country && filters.country !== "ALL") {
        result = result.filter(
          (l) => l.country.toLowerCase() === filters.country!.toLowerCase()
        );
      }
      if (filters.counsellorId && filters.counsellorId !== "ALL") {
        result = result.filter(
          (l) => l.assignedCounsellorId === filters.counsellorId
        );
      }
      if (filters.searchQuery && filters.searchQuery.trim().length > 0) {
        const q = filters.searchQuery.toLowerCase().trim();
        result = result.filter(
          (l) =>
            l.name.toLowerCase().includes(q) ||
            l.phone.includes(q) ||
            l.email.toLowerCase().includes(q) ||
            l.course.toLowerCase().includes(q) ||
            l.id.toLowerCase().includes(q)
        );
      }
    }

    const total = result.length;
    const page = filters?.page || 1;
    const pageSize = filters?.pageSize || 20;
    const paginatedLeads = result.slice((page - 1) * pageSize, page * pageSize);

    return {
      leads: paginatedLeads,
      total,
      page,
      pageSize,
    };
  }

  /**
   * Get CRM Lead pipeline stats
   */
  static async getStatsSummary(): Promise<LeadStatsSummary> {
    const totalLeads = inMemoryLeads.length;
    const newLeads = inMemoryLeads.filter((l) => l.status === "NEW").length;
    const inCounselling = inMemoryLeads.filter(
      (l) => l.status === "COUNSELLING" || l.status === "CONTACTED"
    ).length;
    const applicationsSubmitted = inMemoryLeads.filter(
      (l) => l.status === "APPLICATION" || l.status === "DOCUMENTS"
    ).length;
    const visasInProcessing = inMemoryLeads.filter(
      (l) => l.status === "VISA_PROCESSING"
    ).length;
    const visasApproved = inMemoryLeads.filter(
      (l) => l.status === "APPROVED"
    ).length;
    const closedLeads = inMemoryLeads.filter((l) => l.status === "CLOSED").length;

    const conversionRate =
      totalLeads > 0 ? Math.round((visasApproved / totalLeads) * 100) : 0;

    return {
      totalLeads,
      newLeads,
      inCounselling,
      applicationsSubmitted,
      visasInProcessing,
      visasApproved,
      closedLeads,
      conversionRate,
    };
  }
}
