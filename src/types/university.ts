import { StudyDestination } from "@/types";

export type StudyLevel =
  | "Undergraduate / Bachelor's"
  | "Postgraduate / Master's"
  | "Post-Graduate Diploma"
  | "Diploma / Certificate"
  | "Doctorate (PhD)";

export type CourseDiscipline =
  | "Computer Science & IT"
  | "Business & Management"
  | "Engineering & Tech"
  | "Healthcare & Nursing"
  | "Applied Sciences & Biotech"
  | "Hospitality & Tourism"
  | "Arts & Humanities";

export type BudgetTier =
  | "nominal" // e.g. Germany €0-€3,000 (~ Under ₹5 Lakhs)
  | "moderate" // ~ ₹10 - 18 Lakhs / yr
  | "premium"; // ~ ₹18 Lakhs+ / yr

export interface UniversityCourse {
  title: string;
  level: StudyLevel;
  duration: string;
  discipline: CourseDiscipline;
}

export interface University {
  id: string;
  name: string;
  country: "Canada" | "United Kingdom" | "Australia" | "New Zealand" | "United States" | "Germany";
  countrySlug: "canada" | "uk" | "australia" | "new-zealand" | "usa" | "germany";
  city: string;
  stateOrProvince?: string;
  logo?: string;
  coverImage: string;
  description: string;
  institutionType: "Public University" | "State Research University" | "Polytechnic / DLI College" | "Technical University (TU9)";
  studyLevels: StudyLevel[];
  popularCourses: string[];
  courseDetails?: UniversityCourse[];
  tuitionFee: {
    min: number;
    max: number;
    currency: string;
    formatted: string;
    budgetTier: BudgetTier;
  };
  intakes: string[];
  entryRequirements: {
    minimumAcademicScore: string;
    ieltsRequirement: string;
    pteRequirement: string;
    workExperienceRequired?: boolean;
    greGmatRequired?: boolean;
  };
  website?: string;
  applicationUrl?: string;
  featured: boolean;
  isDemoSample: boolean; // Flag to indicate database reference sample data
}

export interface UniversityFilterState {
  country: string; // "All" or country name
  studyLevel: string; // "All" or StudyLevel
  courseDiscipline: string; // "All" or CourseDiscipline
  budgetTier: string; // "All" | "nominal" | "moderate" | "premium"
  intake: string; // "All" | "Fall / Sep" | "Spring / Jan" | "Summer / May-Jul"
  searchQuery: string;
}
