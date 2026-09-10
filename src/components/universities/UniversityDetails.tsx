"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  MapPin,
  Globe,
  GraduationCap,
  Calendar,
  DollarSign,
  Award,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  Info,
  Sparkles,
} from "lucide-react";
import { University } from "@/types/university";
import { Badge, Button } from "@/components/ui";
import { BookFreeCounsellingForm } from "@/components/forms/BookFreeCounsellingForm";

interface UniversityDetailsProps {
  university: University | null;
  isOpen: boolean;
  onClose: () => void;
}

const COUNTRY_FLAGS: Record<string, string> = {
  Canada: "🇨🇦",
  "United Kingdom": "🇬🇧",
  Australia: "🇦🇺",
  "New Zealand": "🇳🇿",
  "United States": "🇺🇸",
  Germany: "🇩🇪",
};

export function UniversityDetails({
  university,
  isOpen,
  onClose,
}: UniversityDetailsProps) {
  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !university) return null;

  const flag = COUNTRY_FLAGS[university.country] || "🌍";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/75 backdrop-blur-sm animate-fade-in overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-university-title"
    >
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Top Sticky Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-5 py-3.5 bg-white border-b border-slate-100 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="text-xl">{flag}</span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {university.country} Institution Profile
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-navy-950 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
          {/* Header Banner */}
          <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-surface-gray">
            <div className="relative h-44 sm:h-52 w-full">
              <Image
                src={university.coverImage}
                alt={`${university.name} campus cover`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 750px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent" />

              {/* Badges on Top */}
              <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                {university.featured && (
                  <Badge variant="amber" size="sm" className="shadow-sm">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Featured Destination
                  </Badge>
                )}
                {university.isDemoSample && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white/90 text-slate-700 backdrop-blur-xs">
                    Curated Profile
                  </span>
                )}
              </div>

              {/* Title & Location Over Image */}
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <div className="flex items-center gap-1.5 text-xs text-amber-300 font-semibold mb-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>
                    {university.city}
                    {university.stateOrProvince ? `, ${university.stateOrProvince}` : ""},{" "}
                    {university.country}
                  </span>
                </div>
                <h2
                  id="modal-university-title"
                  className="text-lg sm:text-2xl font-bold leading-snug"
                >
                  {university.name}
                </h2>
              </div>
            </div>
          </div>

          {/* Institutional Type & Overview */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-bold text-royal-700 bg-royal-50 px-2.5 py-1 rounded-md border border-royal-100">
                {university.institutionType}
              </span>
              {university.studyLevels.map((lvl) => (
                <span
                  key={lvl}
                  className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
                >
                  {lvl}
                </span>
              ))}
            </div>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
              {university.description}
            </p>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-surface-gray p-4 rounded-xl border border-slate-200">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Estimated Tuition
              </span>
              <span className="text-xs sm:text-sm font-bold text-navy-950 block mt-0.5">
                {university.tuitionFee.formatted}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Major Intakes
              </span>
              <span className="text-xs sm:text-sm font-bold text-navy-950 block mt-0.5">
                {university.intakes.join(", ")}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Language Test
              </span>
              <span className="text-xs sm:text-sm font-bold text-royal-700 block mt-0.5">
                {university.entryRequirements.ieltsRequirement}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Min. Academic Score
              </span>
              <span className="text-xs sm:text-sm font-bold text-navy-950 block mt-0.5">
                {university.entryRequirements.minimumAcademicScore}
              </span>
            </div>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-xs font-bold text-navy-950 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-royal-600" />
              <span>In-Demand Programs &amp; Specializations</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {university.popularCourses.map((course, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-navy-950"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Important Institutional Disclaimer */}
          <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200/80 text-[11px] text-amber-900 flex items-start gap-2">
            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="leading-normal">
              <strong>Advisory Notice:</strong> Guruji Overseas provides student guidance, application review, SOP assistance, and visa filing support. Tuition fees and admission requirements are subject to university guidelines. Verify directly with the official university catalog or consult our Rohtak counselors.
            </p>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 border-t border-slate-100">
            {university.website && (
              <a
                href={university.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-charcoal-700 hover:bg-slate-100 transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                <span>Visit Official Website</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            )}
            <Link
              href={`/study-abroad/${university.countrySlug}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-royal-200 text-xs font-bold text-royal-700 bg-royal-50 hover:bg-royal-100 transition-colors"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{university.country} Visa &amp; Guide</span>
            </Link>
          </div>

          {/* Embedded Quick Counselling Form */}
          <div className="mt-6 pt-6 border-t border-slate-200 bg-surface-gray -mx-5 -mb-5 sm:-mx-7 sm:-mb-7 p-5 sm:p-7">
            <div className="mb-4 text-center sm:text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-royal-700 block">
                Direct Application Assistance
              </span>
              <h3 className="text-base font-bold text-navy-950">
                Apply to {university.name} with Guruji Overseas
              </h3>
              <p className="text-xs text-charcoal-600 mt-0.5">
                Submit your profile for a free eligibility evaluation and offer letter timeline check.
              </p>
            </div>
            <BookFreeCounsellingForm
              defaultCountry={
                university.country === "United Kingdom"
                  ? "UK"
                  : university.country === "United States"
                  ? "USA"
                  : (university.country as any)
              }
              defaultCourse={university.popularCourses[0]}
              sourceContext={`University Detail: ${university.name}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
