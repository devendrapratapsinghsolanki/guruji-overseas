export type PreferredCountry =
  | "canada"
  | "uk"
  | "australia"
  | "new-zealand"
  | "usa"
  | "germany"
  | "undecided";

export type HighestQualification =
  | "10th"
  | "12th"
  | "diploma"
  | "bachelors"
  | "masters"
  | "doctorate";

export type LanguageTestStatus =
  | "not-taken"
  | "planning"
  | "appeared"
  | "exempted";

export type WorkExperienceRange =
  | "none"
  | "less-than-1-year"
  | "1-3-years"
  | "3-5-years"
  | "5-plus-years";

export type PreferredIntake =
  | "fall-upcoming"
  | "spring-upcoming"
  | "summer-upcoming"
  | "flexible";

export type EnquiryFormType =
  | "book-counselling"
  | "profile-assessment"
  | "general-contact";

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  highestQualification: HighestQualification | "";
  academicScore: string; // Percentage or CGPA e.g. "78%" or "8.2 CGPA"
  preferredCountry: PreferredCountry | "";
  interestedCourse: string; // e.g. "MSc Data Science", "BBA", "Project Management"
  testStatus: LanguageTestStatus | "";
  testScore?: string; // e.g. "IELTS 7.0" or "PTE 65" or empty
  workExperience: WorkExperienceRange | "";
  preferredIntake: PreferredIntake | "";
  message?: string;
  city?: string;
  consent: boolean;
  formType: EnquiryFormType;
}

export type EnquiryFormErrors = Partial<Record<keyof EnquiryFormData, string>>;

export interface EnquirySubmissionResponse {
  success: boolean;
  message: string;
  enquiryId?: string;
  isDemoSubmission?: boolean;
}
