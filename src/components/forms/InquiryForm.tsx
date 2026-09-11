"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Lock,
  Sparkles,
} from "lucide-react";
import { ALL_SERVICE_OPTIONS } from "@/data/services";

interface InquiryFormProps {
  className?: string;
  sourceContext?: string;
  defaultServices?: string[];
  onSuccess?: () => void;
  compact?: boolean;
}

// Streamlined top inquiry options
const POPULAR_INQUIRY_SERVICES = [
  "Study Visa Guidance",
  "IELTS / PTE Coaching",
  "Study Abroad Counselling",
  "University & Course Selection",
  "Visitor / Tourist Visa",
  "Dependent / Spouse Visa",
];

export function InquiryForm({
  className = "",
  sourceContext = "Website Inquiry",
  defaultServices = [],
  onSuccess,
  compact = false,
}: InquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: defaultServices.length > 0 ? defaultServices : ["Study Visa Guidance"],
    consent: true,
    honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const validateClient = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    const cleanPhone = formData.phone.replace(/[^\d+]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = "Please enter a valid 10-digit phone number.";
    }

    if (formData.services.length === 0) {
      errs.services = "Please select at least one service.";
    }

    if (!formData.consent) {
      errs.consent = "Please agree to be contacted to submit.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleCheckboxToggle = (serviceName: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(serviceName);
      const updated = exists
        ? prev.services.filter((s) => s !== serviceName)
        : [...prev.services, serviceName];

      if (updated.length > 0 && errors.services) {
        setErrors((e) => {
          const { services: _, ...rest } = e;
          return rest;
        });
      }

      return { ...prev, services: updated };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");

    if (!validateClient()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          services: formData.services,
          message: `Inquiry via ${sourceContext}`,
          consent: formData.consent,
          honeypot: formData.honeypot,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        if (onSuccess) onSuccess();
      } else {
        if (data.errors) {
          setErrors(data.errors);
        }
        setServerError(
          data.message || "Something went wrong while submitting your enquiry."
        );
      }
    } catch {
      setServerError("Network error. Please call our Rohtak office directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-navy-950">Thank You!</h3>
        <p className="text-xs sm:text-sm text-charcoal-700 max-w-sm mx-auto leading-relaxed">
          Thank you for contacting Guruji Overseas. Our counselling team will get in touch with you shortly.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                services: ["Study Visa Guidance"],
                consent: true,
                honeypot: "",
              });
            }}
            className="px-4 py-2 rounded-xl bg-navy-950 hover:bg-navy-900 text-white text-xs font-bold transition-colors cursor-pointer"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`space-y-4 ${className}`}
      aria-label="Guruji Overseas Admission & Counselling Enquiry Form"
    >
      {/* Honeypot anti-spam field */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="website_url"
          tabIndex={-1}
          autoComplete="off"
          value={formData.honeypot}
          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        />
      </div>

      {serverError && (
        <div
          role="alert"
          className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold flex items-center gap-2"
        >
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Full Name */}
      <div className="space-y-1">
        <label
          htmlFor="inquiry-name"
          className="block text-xs font-bold text-navy-950 uppercase tracking-wider"
        >
          Full Name <span className="text-rose-500">*</span>
        </label>
        <input
          id="inquiry-name"
          type="text"
          required
          placeholder="e.g. Rahul Sharma"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
            if (errors.name) setErrors({ ...errors, name: "" });
          }}
          className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm bg-surface-gray/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
            errors.name
              ? "border-rose-400 focus:ring-rose-400"
              : "border-slate-300 focus:ring-royal-500"
          }`}
        />
        {errors.name && (
          <p className="text-[11px] text-rose-600 font-medium">{errors.name}</p>
        )}
      </div>

      {/* Grid: Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Email */}
        <div className="space-y-1">
          <label
            htmlFor="inquiry-email"
            className="block text-xs font-bold text-navy-950 uppercase tracking-wider"
          >
            Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            id="inquiry-email"
            type="email"
            required
            placeholder="rahul@example.com"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: "" });
            }}
            className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm bg-surface-gray/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.email
                ? "border-rose-400 focus:ring-rose-400"
                : "border-slate-300 focus:ring-royal-500"
            }`}
          />
          {errors.email && (
            <p className="text-[11px] text-rose-600 font-medium">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-1">
          <label
            htmlFor="inquiry-phone"
            className="block text-xs font-bold text-navy-950 uppercase tracking-wider"
          >
            Phone Number <span className="text-rose-500">*</span>
          </label>
          <input
            id="inquiry-phone"
            type="tel"
            required
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              if (errors.phone) setErrors({ ...errors, phone: "" });
            }}
            className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm bg-surface-gray/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.phone
                ? "border-rose-400 focus:ring-rose-400"
                : "border-slate-300 focus:ring-royal-500"
            }`}
          />
          {errors.phone && (
            <p className="text-[11px] text-rose-600 font-medium">{errors.phone}</p>
          )}
        </div>
      </div>

      {/* Inquiry For / Service Interest Checkboxes */}
      <div className="space-y-2 pt-1">
        <label className="block text-xs font-bold text-navy-950 uppercase tracking-wider">
          Inquiry For / Service Interest <span className="text-rose-500">*</span>
        </label>

        {errors.services && (
          <p className="text-[11px] text-rose-600 font-medium">{errors.services}</p>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {POPULAR_INQUIRY_SERVICES.map((serviceName) => {
            const isChecked = formData.services.includes(serviceName);
            return (
              <label
                key={serviceName}
                className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-medium cursor-pointer select-none transition-all ${
                  isChecked
                    ? "bg-royal-50 border-royal-400 text-royal-950 font-bold shadow-xs"
                    : "bg-white border-slate-200 text-charcoal-700 hover:border-slate-300"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleCheckboxToggle(serviceName)}
                  className="w-4 h-4 rounded border-slate-300 text-royal-600 focus:ring-royal-500 cursor-pointer accent-royal-600 shrink-0"
                />
                <span className="truncate">{serviceName}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Consent Checkbox */}
      <div className="pt-1">
        <label className="flex items-center gap-2.5 cursor-pointer select-none">
          <input
            type="checkbox"
            required
            checked={formData.consent}
            onChange={(e) => {
              setFormData({ ...formData, consent: e.target.checked });
              if (errors.consent) setErrors({ ...errors, consent: "" });
            }}
            className="w-4 h-4 rounded border-slate-300 text-royal-600 focus:ring-royal-500 cursor-pointer accent-royal-600 shrink-0"
          />
          <span className="text-xs text-charcoal-700">
            I agree to be contacted by Guruji Overseas regarding my enquiry.
          </span>
        </label>
        {errors.consent && (
          <p className="text-[11px] text-rose-600 font-medium pl-6">{errors.consent}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-white shadow-md flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
          isSubmitting
            ? "bg-slate-400 cursor-not-allowed opacity-80"
            : "bg-navy-950 hover:bg-royal-700 hover:shadow-lg active:scale-[0.99]"
        }`}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Submitting...</span>
          </>
        ) : (
          <>
            <span>Submit Enquiry</span>
            <Send className="w-3.5 h-3.5" />
          </>
        )}
      </button>
    </form>
  );
}
