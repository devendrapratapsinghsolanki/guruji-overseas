import {
  PreferredCountry,
  HighestQualification,
  LanguageTestStatus,
  WorkExperienceRange,
  PreferredIntake,
  EnquiryFormType,
} from "./enquiry";

/**
 * Guruji Overseas CRM & Admin Data Architecture
 * Defines the complete lifecycle, fields, and access models for lead management.
 */

export type LeadStatus =
  | "NEW"
  | "CONTACTED"
  | "COUNSELLING"
  | "DOCUMENTS"
  | "APPLICATION"
  | "VISA_PROCESSING"
  | "APPROVED"
  | "CLOSED";

export type LeadPriority = "LOW" | "MEDIUM" | "HIGH" | "URGENT";

export interface Counsellor {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "SENIOR_COUNSELLOR" | "ADMISSIONS_OFFICER" | "VISA_SPECIALIST" | "BRANCH_MANAGER";
  branchLocation: string; // e.g., "Rohtak HQ - Sheetal Lifestyle Mall"
  isActive: boolean;
}

export interface LeadNote {
  id: string;
  leadId: string;
  authorId: string;
  authorName: string;
  content: string;
  isPrivate: boolean; // Internal team only
  createdAt: string;
}

export interface LeadActivityLog {
  id: string;
  leadId: string;
  performedBy: string; // Counsellor or System
  action:
    | "STATUS_CHANGED"
    | "COUNSELLOR_ASSIGNED"
    | "NOTE_ADDED"
    | "EMAIL_SENT"
    | "WHATSAPP_CONTACTED"
    | "CALL_LOGGED"
    | "DOCUMENT_UPLOADED";
  fromStatus?: LeadStatus;
  toStatus?: LeadStatus;
  description: string;
  timestamp: string;
}

export interface LeadRecord {
  id: string; // e.g. "GO-ENQ-2026-XXXX" or UUID
  name: string;
  phone: string;
  email: string;
  qualification: HighestQualification | string;
  percentage: string; // Academic score e.g., "74%" or "7.8 CGPA"
  country: PreferredCountry | string;
  course: string;
  test: LanguageTestStatus | string;
  testScore: string;
  workExperience: WorkExperienceRange | string;
  intake: PreferredIntake | string;
  message: string;
  city?: string;
  sourceContext?: string; // e.g., "Contact Page", "University Details: Seneca", "Homepage Modal"
  formType: EnquiryFormType;
  
  // CRM Lifecycle & Assignment
  status: LeadStatus;
  priority: LeadPriority;
  assignedCounsellorId?: string;
  assignedCounsellor?: Counsellor;
  
  // Notes & Activity History
  notes?: LeadNote[];
  activityLogs?: LeadActivityLog[];
  
  // Auditing Timestamps
  createdAt: string;
  updatedAt: string;
  lastContactedAt?: string;
}

/**
 * Public Safe DTO (Stripped of internal notes, direct tracking identifiers, and counselor data)
 */
export interface PublicLeadAcknowledgement {
  id: string;
  status: "RECEIVED";
  message: string;
  createdAt: string;
}

/**
 * CRM Query Filters for Admin Dashboard Listing
 */
export interface LeadFilterQuery {
  status?: LeadStatus | "ALL";
  country?: string | "ALL";
  counsellorId?: string | "ALL";
  intake?: string | "ALL";
  searchQuery?: string; // searches name, phone, email, course
  startDate?: string;
  endDate?: string;
  page?: number;
  pageSize?: number;
  sortBy?: "createdAt" | "updatedAt" | "name" | "status";
  sortOrder?: "asc" | "desc";
}

/**
 * Aggregated Statistics for Admin Dashboard
 */
export interface LeadStatsSummary {
  totalLeads: number;
  newLeads: number;
  inCounselling: number;
  applicationsSubmitted: number;
  visasInProcessing: number;
  visasApproved: number;
  closedLeads: number;
  conversionRate: number; // Percentage
}
