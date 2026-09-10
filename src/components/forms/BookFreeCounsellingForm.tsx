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
  CalendarCheck,
  Building2,
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

interface BookFreeCounsellingFormProps {
  defaultCountry?: EnquiryFormData["preferredCountry"];
  defaultCourse?: string;
  sourceContext?: string;
  onSuccess?: (response: EnquirySubmissionResponse) => void;
  className?: string;
  variant?: "card" | "plain";
}

export function BookFreeCounsellingForm({
  defaultCountry = "canada",
  defaultCourse = "",
  sourceContext,
  onSuccess,
  className = "",
  variant = "card",
}: BookFreeCounsellingFormProps) {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: "",
    phone: "",
    email: "",
    highestQualification: "bachelors",
    academicScore: "",
    preferredCountry: defaultCountry,
    interestedCourse: defaultCourse,
    testStatus: "planning",
    testScore: "",
    workExperience: "none",
    preferredIntake: "fall-upcoming",
    message: "",
    city: "",
    consent: true,
    formType: "book-counselling",
  });

  const [errors, setErrors] = useState<EnquiryFormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submissionResult, setSubmissionResult] =
    useState<EnquirySubmissionResponse | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hello Guruji Overseas, I have submitted a counselling booking on your website (Name: ${formData.fullName || "Prospective Student"}).`
  )}`;

  const handleChange = (
    field: keyof EnquiryFormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for that field as user types
    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    const { isValid, errors: validationErrors } = validateEnquiryForm(formData);
    if (!isValid) {
      setErrors(validationErrors);
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
      const msg = err instanceof Error ? err.message : "Failed to submit enquiry";
      setServerError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  if (submissionResult?.success) {
    return (
      <div
        className={`p-6 sm:p-10 rounded-2xl bg-white border border-slate-200 text-center space-y-5 animate-in fade-in duration-300 shadow-card ${className}`}
      >
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-extrabold text-navy-950">
            Counselling Session Requested!
          </h3>
          <p className="text-sm text-charcoal-600 max-w-md mx-auto leading-relaxed">
            {submissionResult.message}
          </p>
        </div>

        {submissionResult.enquiryId && (
          <div className="inline-block p-3 rounded-xl bg-surface-gray border border-slate-200 text-xs">
            <span className="text-slate-400 font-medium">Reference Tracking ID: </span>
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
            <span>Connect on WhatsApp for Instant Slot</span>
          </a>

          <a
            href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-950 text-white font-semibold text-xs transition-colors shadow-sm w-full sm:w-auto justify-center"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Call Rohtak Office</span>
          </a>
        </div>

        <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-100">
          Office: {COMPANY_INFO.location.addressLine1}, {COMPANY_INFO.location.addressLine2}, Rohtak
        </div>
      </div>
    );
  }

  const containerClasses =
    variant === "card"
      ? `p-6 sm:p-9 rounded-2xl bg-white border border-slate-200 shadow-card ${className}`
      : `p-0 ${className}`;

  return (
    <div className={containerClasses}>
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1.5">
          <CalendarCheck className="w-5 h-5 text-royal-600" />
          <h3 className="text-xl font-bold text-navy-950">
            Book Your Free 1-on-1 Counselling
          </h3>
        </div>
        <p className="text-xs text-charcoal-600 leading-relaxed">
          Get transparent guidance from our certified Rohtak advisors. Zero false promises, 100% genuine advisory.
        </p>
      </div>

      {serverError && (
        <div className="p-3.5 mb-5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
          <span>{serverError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Row 1: Full Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-charcoal-800 mb-1">
              Full Name <span className="text-rose-600">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Aman Sharma"
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
              placeholder="+91 98765 43210"
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

        {/* Row 2: Email & City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-charcoal-800 mb-1">
              Email Address <span className="text-rose-600">*</span>
            </label>
            <input
              type="email"
              placeholder="name@example.com"
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
              City / Location in Haryana / NCR
            </label>
            <input
              type="text"
              placeholder="e.g. Rohtak / Sonipat / Panipat"
              value={formData.city}
              onChange={(e) => handleChange("city", e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-surface-gray/40 focus:border-royal-500 focus:bg-white focus:ring-2 focus:ring-royal-100 transition-all"
            />
          </div>
        </div>

        {/* Row 3: Highest Qualification & Percentage */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-charcoal-800 mb-1">
              Highest Qualification <span className="text-rose-600">*</span>
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
              <option value="bachelors">Bachelor&apos;s Degree (B.Tech / BCA / BBA / B.Com)</option>
              <option value="masters">Master&apos;s Degree (M.Tech / MBA / MCA)</option>
              <option value="doctorate">Doctorate / PhD</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-charcoal-800 mb-1">
              Academic Percentage / CGPA <span className="text-rose-600">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. 74% or 7.8 CGPA"
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

        {/* Row 4: Preferred Country & Interested Course */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-charcoal-800 mb-1">
              Preferred Country <span className="text-rose-600">*</span>
            </label>
            <select
              value={formData.preferredCountry}
              onChange={(e) => handleChange("preferredCountry", e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-surface-gray/40 focus:border-royal-500 focus:bg-white focus:ring-2 focus:ring-royal-100 transition-all"
            >
              <option value="canada">🇨🇦 Canada (Colleges &amp; Universities)</option>
              <option value="uk">🇬🇧 United Kingdom (1-Yr Master&apos;s)</option>
              <option value="australia">🇦🇺 Australia (Group of Eight &amp; Regional)</option>
              <option value="new-zealand">🇳🇿 New Zealand (Practical Learning)</option>
              <option value="usa">🇺🇸 United States (STEM OPT)</option>
              <option value="germany">🇩🇪 Germany (Low / Nominal Tuition)</option>
              <option value="undecided">🌍 Undecided (Need Counsellor Advice)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-charcoal-800 mb-1">
              Interested Course / Area <span className="text-rose-600">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Data Science / MBA / Cyber Security"
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

        {/* Row 5: IELTS/PTE Status & Score */}
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
              <option value="planning">Planning to take IELTS / PTE (Need Coaching)</option>
              <option value="not-taken">Not taken yet</option>
              <option value="appeared">Already appeared (Have score)</option>
              <option value="exempted">Seeking IELTS waiver (12th English Marks)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-charcoal-800 mb-1">
              IELTS / PTE Score (If Taken)
            </label>
            <input
              type="text"
              placeholder="e.g. IELTS 6.5 or PTE 62 (Optional)"
              value={formData.testScore || ""}
              onChange={(e) => handleChange("testScore", e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-surface-gray/40 focus:border-royal-500 focus:bg-white focus:ring-2 focus:ring-royal-100 transition-all"
            />
          </div>
        </div>

        {/* Row 6: Work Experience & Target Intake */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-charcoal-800 mb-1">
              Work Experience <span className="text-rose-600">*</span>
            </label>
            <select
              value={formData.workExperience}
              onChange={(e) => handleChange("workExperience", e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-surface-gray/40 focus:border-royal-500 focus:bg-white focus:ring-2 focus:ring-royal-100 transition-all"
            >
              <option value="none">Fresher / None</option>
              <option value="less-than-1-year">Less than 1 Year</option>
              <option value="1-3-years">1 to 3 Years</option>
              <option value="3-5-years">3 to 5 Years</option>
              <option value="5-plus-years">5+ Years</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-charcoal-800 mb-1">
              Target Intake <span className="text-rose-600">*</span>
            </label>
            <select
              value={formData.preferredIntake}
              onChange={(e) => handleChange("preferredIntake", e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-surface-gray/40 focus:border-royal-500 focus:bg-white focus:ring-2 focus:ring-royal-100 transition-all"
            >
              <option value="fall-upcoming">Upcoming Fall (September / October)</option>
              <option value="spring-upcoming">Upcoming Spring (January / February)</option>
              <option value="summer-upcoming">Upcoming Summer / Mid-Year (May / July)</option>
              <option value="flexible">Flexible / Planning for Next Year</option>
            </select>
          </div>
        </div>

        {/* Row 7: Remarks / Message */}
        <div>
          <label className="block text-xs font-bold text-charcoal-800 mb-1">
            Questions / Academic Background Notes (Optional)
          </label>
          <textarea
            rows={2}
            placeholder="Mention any study gaps, backlogs, specific university queries, or preferences..."
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
              I agree to receive personalized study abroad counselling calls and WhatsApp updates from Guruji Overseas. Data is strictly confidential.
            </span>
          </label>
          {errors.consent && (
            <p className="text-[11px] text-rose-600 mt-1">{errors.consent}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 px-6 rounded-xl bg-royal-600 hover:bg-royal-700 text-white font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-[0.99] disabled:opacity-75 cursor-pointer"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Submitting Your Profile...</span>
            </>
          ) : (
            <>
              <span>Request Free Counselling</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500 pt-3 border-t border-slate-100">
          <span className="flex items-center gap-1">
            <Lock className="w-3.5 h-3.5 text-slate-400" />
            <span>256-Bit SSL Encrypted &amp; Spam-Free</span>
          </span>
          <span className="font-medium text-navy-900">
            Rohtak Office: Sheetal Lifestyle Mall
          </span>
        </div>
      </form>
    </div>
  );
}
