/**
 * Centralized Service & Destination Configuration for Guruji Overseas
 * Easy to maintain and update without modifying multiple components.
 */

export interface ServiceCategory {
  id: string;
  title: string;
  description?: string;
  services: string[];
}

export const INQUIRY_SERVICES: ServiceCategory[] = [
  {
    id: "exam-preparation",
    title: "Exam / Test Preparation",
    description: "Certified coaching with high band score guarantees and mock drills",
    services: [
      "IELTS",
      "PTE",
      "TOEFL",
      "Duolingo English Test",
      "Spoken English",
      "Other Test Preparation",
    ],
  },
  {
    id: "visa-assistance",
    title: "Visa / Immigration Assistance",
    description: "Expert file preparation, SOP structuring, and embassy lodging",
    services: [
      "Study Visa",
      "Visitor Visa",
      "Dependent / Spouse Visa",
      "Other Visa Assistance",
    ],
  },
  {
    id: "study-abroad",
    title: "Study Abroad Counselling",
    description: "Free profile evaluation, course mapping, and university admissions",
    services: [
      "Study Abroad Counselling",
      "University / Course Selection",
      "Application Assistance",
    ],
  },
];

export const ALL_SERVICE_OPTIONS: string[] = INQUIRY_SERVICES.flatMap(
  (category) => category.services
);

export const STUDY_DESTINATIONS = [
  { id: "canada", name: "Canada", flag: "🇨🇦", code: "CA" },
  { id: "uk", name: "United Kingdom", flag: "🇬🇧", code: "UK" },
  { id: "australia", name: "Australia", flag: "🇦🇺", code: "AU" },
  { id: "new-zealand", name: "New Zealand", flag: "🇳🇿", code: "NZ" },
  { id: "usa", name: "United States", flag: "🇺🇸", code: "US" },
  { id: "germany", name: "Germany", flag: "🇩🇪", code: "DE" },
  { id: "europe", name: "Europe (Schengen / Ireland / Italy)", flag: "🇪🇺", code: "EU" },
  { id: "undecided", name: "Undecided / Flexible", flag: "🌍", code: "UN" },
];

export const INQUIRY_STATUSES = [
  { value: "NEW", label: "New", color: "blue", bg: "bg-blue-50 text-blue-700 border-blue-200" },
  { value: "CONTACTED", label: "Contacted", color: "purple", bg: "bg-purple-50 text-purple-700 border-purple-200" },
  { value: "COUNSELLING", label: "Counselling", color: "amber", bg: "bg-amber-50 text-amber-800 border-amber-200" },
  { value: "DOCUMENTS", label: "Documents", color: "indigo", bg: "bg-indigo-50 text-indigo-700 border-indigo-200" },
  { value: "APPLICATION", label: "Application", color: "orange", bg: "bg-orange-50 text-orange-800 border-orange-200" },
  { value: "VISA_PROCESSING", label: "Visa Processing", color: "sky", bg: "bg-sky-50 text-sky-700 border-sky-200" },
  { value: "APPROVED", label: "Approved", color: "emerald", bg: "bg-emerald-50 text-emerald-800 border-emerald-300 font-bold" },
  { value: "CLOSED", label: "Closed", color: "slate", bg: "bg-slate-100 text-slate-600 border-slate-200" },
] as const;

export type InquiryStatusValue = (typeof INQUIRY_STATUSES)[number]["value"];
