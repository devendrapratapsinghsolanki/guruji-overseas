"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Lock,
  Phone,
  Sparkles,
  Loader2,
  AlertCircle,
  FileCheck,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";

import {
  EnquiryFormData,
  EnquiryFormErrors,
  EnquirySubmissionResponse,
} from "@/types/enquiry";
import { validateEnquiryForm } from "@/lib/validation/enquiry";
import { submitEnquiry } from "@/lib/api/enquiry";
import { COMPANY_INFO } from "@/data/company";

interface ProfileAssessmentFormProps {
  initialCountry?: EnquiryFormData["preferredCountry"];
  onSuccess?: (res: EnquirySubmissionResponse) => void;
  className?: string;
}

export function ProfileAssessmentForm({
  initialCountry = "canada",
  onSuccess,
  className = "",
}: ProfileAssessmentFormProps) {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: "",
    phone: "",
    email: "",
    highestQualification: "bachelors",
    academicScore: "",
    preferredCountry: initialCountry,
    interestedCourse: "",
    testStatus: "planning",
    testScore: "",
    workExperience: "none",
    preferredIntake: "fall-upcoming",
    message: "",
    city: "",
    consent: true,
    formType: "profile-assessment",
  });

  const [errors, setErrors] = useState<EnquiryFormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submissionResult, setSubmissionResult] =
    useState<EnquirySubmissionResponse | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hello Guruji Overseas, I have submitted a Profile Assessment request on your website (Name: ${formData.fullName || "Candidate"}).`
  )}`;

  const handleChange = (
    field: keyof EnquiryFormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    const { isValid, errors: valErrors } = validateEnquiryForm(formData);
    if (!isValid) {
      setErrors(valErrors);
      return;
    }

    setIsLoading(true);
    try {
      const response = await submitEnquiry(formData);
      setSubmissionResult(response);
      if (onSuccess) {
        onSuccess(response);
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to submit assessment";
      setServerError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  if (submissionResult?.success) {
    return (
      <div className={`p-8 sm:p-12 rounded-2xl bg-white border border-slate-200 text-center space-y-5 animate-in fade-in duration-300 shadow-card ${className}`}>
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-extrabold text-navy-950">
            Profile Received for Assessment!
          </h3>
          <p className="text-sm text-charcoal-600 max-w-md mx-auto leading-relaxed">
            {submissionResult.message}
          </p>
        </div>

        {submissionResult.enquiryId && (
          <div className="inline-block p-3 rounded-xl bg-surface-gray border border-slate-200 text-xs">
            <span className="text-slate-400 font-medium">Tracking Number: </span>
            <span className="font-bold text-navy-950">
              {submissionResult.enquiryId}
            </span>
          </div>
        )}

        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors shadow-sm w-full sm:w-auto justify-center"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat with Rohtak Counsellor on WhatsApp</span>
          </a>

          <a
            href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-950 text-white font-semibold text-xs transition-colors shadow-sm w-full sm:w-auto justify-center"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Call {COMPANY_INFO.contact.displayPhone}</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`p-6 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-card ${className}`}>
      <div className="mb-6 pb-4 border-b border-slate-100">
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <div className="flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-royal-600" />
            <h3 className="text-xl font-bold text-navy-950">
              Free Overseas Profile Assessment
            </h3>
          </div>
          <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
            Free Evaluation
          </span>
        </div>
        <p className="text-xs text-charcoal-600 leading-relaxed">
          Provide your academic background, test status, and destination preference to receive a customized institutional roadmap from our Rohtak office.
        </p>
      </div>

      {serverError && (
        <div className="p-3.5 mb-5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
          <span>{serverError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
        {/* Step 1: Personal & Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-charcoal-800 mb-1">
              Full Name <span className="text-rose-600">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Vikas Kundu"
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              className={`w-full px-3.5 py-2.5 text-xs rounded-xl border transition-all ${
                errors.fullName
                  ? "border-rose-400 bg-rose-50/30 focus:ring-2 focus:ring-rose-300"
                  : "border-slate-200 bg-surface-gray/40 focus:border-royal-500 focus:bg-white focus:ring-2 focus:ring-royal-100"
              }`}
            />
            {errors.fullName && (
              <p className="text-[11px] text-rose-600 mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-charcoal-800 mb-1">
              Mobile / WhatsApp Number <span className="text-rose-600">*</span>
            </label>
            <input
              type="tel"
              placeholder="+91 7056 544 009"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className={`w-full px-3.5 py-2.5 text-xs rounded-xl border transition-all ${
                errors.phone
                  ? "border-rose-400 bg-rose-50/30 focus:ring-2 focus:ring-rose-300"
                  : "border-slate-200 bg-surface-gray/40 focus:border-royal-500 focus:bg-white focus:ring-2 focus:ring-royal-100"
              }`}
            />
            {errors.phone && (
              <p className="text-[11px] text-rose-600 mt-1">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Step 2: Email & City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-charcoal-800 mb-1">
              Email Address <span className="text-rose-600">*</span>
            </label>
            <input
              type="email"
              placeholder="applicant@gmail.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={`w-full px-3.5 py-2.5 text-xs rounded-xl border transition-all ${
                errors.email
                  ? "border-rose-400 bg-rose-50/30 focus:ring-2 focus:ring-rose-300"
                  : "border-slate-200 bg-surface-gray/40 focus:border-royal-500 focus:bg-white focus:ring-2 focus:ring-royal-100"
              }`}
            />
            {errors.email && (
              <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-charcoal-800 mb-1">
              Current City / District
            </label>
            <input
              type="text"
              placeholder="e.g. Rohtak / Sonipat / Jhajjar / Panipat"
              value={formData.city}
              onChange={(e) => handleChange("city", e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-surface-gray/40 focus:border-royal-500 focus:bg-white focus:ring-2 focus:ring-royal-100 transition-all"
            />
          </div>
        </div>

        {/* Step 3: Qualification & Score */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-charcoal-800 mb-1">
              Current / Highest Qualification <span className="text-rose-600">*</span>
            </label>
            <select
              value={formData.highestQualification}
              onChange={(e) =>
                handleChange("highestQualification", e.target.value)
              }
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-surface-gray/40 focus:border-royal-500 focus:bg-white focus:ring-2 focus:ring-royal-100 transition-all"
            >
              <option value="12th">12th Standard / Higher Secondary</option>
              <option value="diploma">Polytechnic / Diploma</option>
              <option value="bachelors">Bachelor&apos;s Degree (B.Tech / B.Sc / BBA / B.Com / BCA)</option>
              <option value="masters">Master&apos;s Degree (M.Tech / MBA / MCA / M.Sc)</option>
              <option value="doctorate">Doctorate / PhD</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-charcoal-800 mb-1">
              Academic Percentage / CGPA <span className="text-rose-600">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. 76% or 8.1 CGPA"
              value={formData.academicScore}
              onChange={(e) => handleChange("academicScore", e.target.value)}
              className={`w-full px-3.5 py-2.5 text-xs rounded-xl border transition-all ${
                errors.academicScore
                  ? "border-rose-400 bg-rose-50/30 focus:ring-2 focus:ring-rose-300"
                  : "border-slate-200 bg-surface-gray/40 focus:border-royal-500 focus:bg-white focus:ring-2 focus:ring-royal-100"
              }`}
            />
            {errors.academicScore && (
              <p className="text-[11px] text-rose-600 mt-1">{errors.academicScore}</p>
            )}
          </div>
        </div>

        {/* Step 4: Destination & Course */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-charcoal-800 mb-1">
              Preferred Study Destination <span className="text-rose-600">*</span>
            </label>
            <select
              value={formData.preferredCountry}
              onChange={(e) => handleChange("preferredCountry", e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-surface-gray/40 focus:border-royal-500 focus:bg-white focus:ring-2 focus:ring-royal-100 transition-all"
            >
              <option value="canada">🇨🇦 Canada (Colleges, Universities &amp; PGWP)</option>
              <option value="uk">🇬🇧 United Kingdom (1-Year Master&apos;s &amp; Graduate Route)</option>
              <option value="australia">🇦🇺 Australia (Group of Eight &amp; Regional)</option>
              <option value="new-zealand">🇳🇿 New Zealand (8 State Universities &amp; Stayback)</option>
              <option value="usa">🇺🇸 United States (STEM OPT &amp; Top Research)</option>
              <option value="germany">🇩🇪 Germany (Tuition-Free Public Universities)</option>
              <option value="undecided">🌍 Undecided (Need Comparative Guidance)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-charcoal-800 mb-1">
              Interested Course / Stream <span className="text-rose-600">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Artificial Intelligence / Cloud / Supply Chain / MBA"
              value={formData.interestedCourse}
              onChange={(e) => handleChange("interestedCourse", e.target.value)}
              className={`w-full px-3.5 py-2.5 text-xs rounded-xl border transition-all ${
                errors.interestedCourse
                  ? "border-rose-400 bg-rose-50/30 focus:ring-2 focus:ring-rose-300"
                  : "border-slate-200 bg-surface-gray/40 focus:border-royal-500 focus:bg-white focus:ring-2 focus:ring-royal-100"
              }`}
            />
            {errors.interestedCourse && (
              <p className="text-[11px] text-rose-600 mt-1">{errors.interestedCourse}</p>
            )}
          </div>
        </div>

        {/* Step 5: IELTS/PTE Status & Score */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-charcoal-800 mb-1">
              IELTS / PTE Status <span className="text-rose-600">*</span>
            </label>
            <select
              value={formData.testStatus}
              onChange={(e) => handleChange("testStatus", e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-surface-gray/40 focus:border-royal-500 focus:bg-white focus:ring-2 focus:ring-royal-100 transition-all"
            >
              <option value="planning">Planning to give exam (Need Rohtak lab coaching)</option>
              <option value="not-taken">Not taken yet</option>
              <option value="appeared">Already given (Have score)</option>
              <option value="exempted">Seeking IELTS waiver (12th English Marks)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-charcoal-800 mb-1">
              IELTS / PTE Score (If Appeared)
            </label>
            <input
              type="text"
              placeholder="e.g. IELTS 6.5 or PTE 64 (Optional)"
              value={formData.testScore || ""}
              onChange={(e) => handleChange("testScore", e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-surface-gray/40 focus:border-royal-500 focus:bg-white focus:ring-2 focus:ring-royal-100 transition-all"
            />
          </div>
        </div>

        {/* Step 6: Work Exp & Intake */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-charcoal-800 mb-1">
              Relevant Work Experience <span className="text-rose-600">*</span>
            </label>
            <select
              value={formData.workExperience}
              onChange={(e) => handleChange("workExperience", e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-surface-gray/40 focus:border-royal-500 focus:bg-white focus:ring-2 focus:ring-royal-100 transition-all"
            >
              <option value="none">Fresher (Zero Years)</option>
              <option value="less-than-1-year">Less than 1 Year</option>
              <option value="1-3-years">1 to 3 Years</option>
              <option value="3-5-years">3 to 5 Years</option>
              <option value="5-plus-years">5+ Years</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-charcoal-800 mb-1">
              Target Admission Intake <span className="text-rose-600">*</span>
            </label>
            <select
              value={formData.preferredIntake}
              onChange={(e) => handleChange("preferredIntake", e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-surface-gray/40 focus:border-royal-500 focus:bg-white focus:ring-2 focus:ring-royal-100 transition-all"
            >
              <option value="fall-upcoming">Upcoming Fall (Sep / Oct)</option>
              <option value="spring-upcoming">Upcoming Spring (Jan / Feb)</option>
              <option value="summer-upcoming">Upcoming Summer / Mid-Year (May / Jul)</option>
              <option value="flexible">Flexible / Exploring for Next Year</option>
            </select>
          </div>
        </div>

        {/* Step 7: Remarks */}
        <div>
          <label className="block text-xs font-bold text-charcoal-800 mb-1">
            Specific Academic Queries / Notes (Optional)
          </label>
          <textarea
            rows={2}
            placeholder="Share details regarding gap years, budget constraints, or preferred colleges..."
            value={formData.message || ""}
            onChange={(e) => handleChange("message", e.target.value)}
            className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 bg-surface-gray/40 focus:border-royal-500 focus:bg-white focus:ring-2 focus:ring-royal-100 transition-all resize-none"
          />
        </div>

        {/* Consent Checkbox */}
        <div className="pt-1">
          <label className="flex items-start gap-2.5 text-xs text-charcoal-700 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={formData.consent}
              onChange={(e) => handleChange("consent", e.target.checked)}
              className="mt-0.5 rounded border-slate-300 text-royal-600 focus:ring-royal-500 shrink-0"
            />
            <span>
              I agree to receive free profile evaluation and admission updates from Guruji Overseas. Data is strictly confidential.
            </span>
          </label>
          {errors.consent && (
            <p className="text-[11px] text-rose-600 mt-1">{errors.consent}</p>
          )}
        </div>

        {/* CTA Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 px-6 rounded-xl bg-royal-600 hover:bg-royal-700 text-white font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-[0.99] disabled:opacity-75 cursor-pointer"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Analyzing Your Profile...</span>
            </>
          ) : (
            <>
              <span>Request Free Counselling</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500 pt-3 border-t border-slate-100">
          <span className="flex items-center gap-1">
            <Lock className="w-3.5 h-3.5 text-slate-400" />
            <span>Strict Confidentiality Policy</span>
          </span>
          <span className="font-medium text-navy-900">
            Rohtak Physical Office: Sheetal Lifestyle Mall
          </span>
        </div>
      </form>
    </div>
  );
}
