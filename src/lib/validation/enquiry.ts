import { EnquiryFormData, EnquiryFormErrors } from "@/types/enquiry";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,15}$/;

export function validateEnquiryForm(data: EnquiryFormData): {
  isValid: boolean;
  errors: EnquiryFormErrors;
} {
  const errors: EnquiryFormErrors = {};

  // 1. Full Name
  if (!data.fullName || data.fullName.trim().length === 0) {
    errors.fullName = "Please enter your full name.";
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = "Full name must be at least 2 characters.";
  } else if (data.fullName.trim().length > 80) {
    errors.fullName = "Full name must be under 80 characters.";
  }

  // 2. Phone Number
  const cleanPhone = data.phone ? data.phone.replace(/[\s-]/g, "") : "";
  if (!cleanPhone || cleanPhone.length === 0) {
    errors.phone = "Please provide your active phone / WhatsApp number.";
  } else if (!PHONE_REGEX.test(cleanPhone) || cleanPhone.length < 9) {
    errors.phone = "Please enter a valid 10-digit mobile number.";
  }

  // 3. Email Address
  if (!data.email || data.email.trim().length === 0) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_REGEX.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  // 4. Highest Qualification
  if (!data.highestQualification) {
    errors.highestQualification = "Please select your current / highest qualification.";
  }

  // 5. Academic Percentage / CGPA
  if (!data.academicScore || data.academicScore.trim().length === 0) {
    errors.academicScore = "Please enter your academic percentage or CGPA (e.g. 75% or 8.2 CGPA).";
  } else if (data.academicScore.trim().length > 30) {
    errors.academicScore = "Score entry must be under 30 characters.";
  }

  // 6. Preferred Country
  if (!data.preferredCountry) {
    errors.preferredCountry = "Please select your preferred study destination.";
  }

  // 7. Interested Course
  if (!data.interestedCourse || data.interestedCourse.trim().length === 0) {
    errors.interestedCourse = "Please specify the field or course you are interested in.";
  }

  // 8. IELTS / PTE Status
  if (!data.testStatus) {
    errors.testStatus = "Please select your IELTS / PTE test status.";
  }

  // 9. Work Experience
  if (!data.workExperience) {
    errors.workExperience = "Please select your work experience range.";
  }

  // 10. Preferred Intake
  if (!data.preferredIntake) {
    errors.preferredIntake = "Please select your target admission intake.";
  }

  // 11. Message Length
  if (data.message && data.message.length > 500) {
    errors.message = "Message must be 500 characters or fewer.";
  }

  // 12. Mandatory Consent
  if (!data.consent) {
    errors.consent = "You must agree to receive free counselling advisory.";
  }

  const isValid = Object.keys(errors).length === 0;

  return { isValid, errors };
}
