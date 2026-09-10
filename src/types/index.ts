export type StudyDestination =
  | "canada"
  | "uk"
  | "australia"
  | "new-zealand"
  | "usa"
  | "germany";

export interface DestinationItem {
  id: StudyDestination;
  name: string;
  flag: string;
  highlight: string;
  popularIntakes: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  category: "Test Preparation" | "Admissions" | "Visa Services";
}

export interface ConsultationRequest {
  fullName: string;
  phoneNumber: string;
  city?: string;
  preferredDestination?: StudyDestination | "undecided";
  serviceNeeded?: string;
  message?: string;
}

// Re-export CRM and Domain Models
export * from "./enquiry";
export * from "./crm";
export * from "./university";
