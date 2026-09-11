export type InquiryStatus =
  | "NEW"
  | "CONTACTED"
  | "COUNSELLING"
  | "DOCUMENTS"
  | "APPLICATION"
  | "VISA_PROCESSING"
  | "APPROVED"
  | "CLOSED";

export interface InquiryRecord {
  id: string;
  name: string;
  email: string;
  phone: string;
  services: string[];
  message: string | null;
  consent: boolean;
  status: InquiryStatus;
  source: string | null;
  notes: string | null;
  assignedTo: string | null;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  services: string[];
  message?: string;
  consent: boolean;
  honeypot?: string; // Hidden spam prevention field
}

export interface InquiryFilterQuery {
  status?: InquiryStatus | "ALL";
  service?: string | "ALL";
  dateRange?: "today" | "7days" | "30days" | "all";
  searchQuery?: string;
  page?: number;
  pageSize?: number;
}

export interface InquiryListResponse {
  success: boolean;
  inquiries: InquiryRecord[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface InquiryStatsSummary {
  total: number;
  newCount: number;
  contactedCount: number;
  counsellingCount: number;
  visaProcessingCount: number;
  closedCount: number;
  last7DaysCount: number;
  last30DaysCount: number;
}
