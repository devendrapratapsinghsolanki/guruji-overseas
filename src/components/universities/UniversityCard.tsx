"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Building2,
  Calendar,
  DollarSign,
  ArrowRight,
  GraduationCap,
  ExternalLink,
  Info,
} from "lucide-react";
import { University } from "@/types/university";
import { Badge } from "@/components/ui";

interface UniversityCardProps {
  university: University;
  onSelectDetails?: (university: University) => void;
  onEnquire?: (university: University) => void;
}

const COUNTRY_FLAGS: Record<string, string> = {
  Canada: "🇨🇦",
  "United Kingdom": "🇬🇧",
  Australia: "🇦🇺",
  "New Zealand": "🇳🇿",
  "United States": "🇺🇸",
  Germany: "🇩🇪",
};

export function UniversityCard({
  university,
  onSelectDetails,
  onEnquire,
}: UniversityCardProps) {
  const flag = COUNTRY_FLAGS[university.country] || "🌍";

  return (
    <div className="group rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col justify-between hover:border-royal-300 hover:shadow-card-hover transition-all duration-300">
      <div>
        {/* Cover Image Banner */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-navy-950">
          <Image
            src={university.coverImage}
            alt={`${university.name} Campus`}
            fill
            className="object-cover img-zoom group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />

          {/* Badges on Banner */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
            <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm text-xs font-bold text-navy-950">
              <span>{flag}</span>
              <span>{university.country}</span>
            </div>

            {university.featured && (
              <Badge variant="amber" size="sm" className="bg-amber-500 text-navy-950 font-extrabold border-none shadow-sm">
                Featured
              </Badge>
            )}
          </div>

          <div className="absolute bottom-2.5 left-3 right-3 z-10">
            <span className="text-[11px] font-semibold text-amber-300 block mb-0.5">
              {university.institutionType}
            </span>
            <h3 className="text-base font-bold text-white leading-tight drop-shadow-sm line-clamp-1">
              {university.name}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
            <MapPin className="w-3.5 h-3.5 text-royal-600 shrink-0" />
            <span className="truncate">
              {university.city}
              {university.stateOrProvince ? `, ${university.stateOrProvince}` : ""}
            </span>
          </div>

          <p className="text-xs text-charcoal-600 leading-relaxed line-clamp-2 mb-4">
            {university.description}
          </p>

          {/* Quick Metrics */}
          <div className="space-y-1.5 py-2.5 px-3 rounded-xl bg-surface-gray text-xs border border-slate-100 mb-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-400 font-medium text-[11px]">Tuition Est:</span>
              <span className="font-bold text-navy-950 text-[11px]">
                {university.tuitionFee.formatted}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400 font-medium text-[11px]">Intakes:</span>
              <span className="font-semibold text-charcoal-700 text-[11px]">
                {university.intakes[0]}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400 font-medium text-[11px]">Min. Score:</span>
              <span className="font-semibold text-royal-700 text-[11px]">
                {university.entryRequirements.ieltsRequirement}
              </span>
            </div>
          </div>

          {/* Popular Courses Pills */}
          <div className="space-y-1 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Popular Programs:
            </span>
            <div className="flex flex-wrap gap-1">
              {university.popularCourses.slice(0, 3).map((course, idx) => (
                <span
                  key={idx}
                  className="text-[10px] bg-slate-100 text-charcoal-800 px-2 py-0.5 rounded border border-slate-200 truncate max-w-[200px]"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-5 pt-0">
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          {onSelectDetails ? (
            <button
              type="button"
              onClick={() => onSelectDetails(university)}
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-navy-950 cursor-pointer"
            >
              <Info className="w-3.5 h-3.5" />
              <span>Full Details</span>
            </button>
          ) : (
            <Link
              href={`/study-abroad/${university.countrySlug}`}
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-navy-950"
            >
              <span>{university.country} Guide</span>
            </Link>
          )}

          <Link
            href="/contact"
            className="inline-flex items-center gap-1 text-xs font-bold text-royal-600 hover:text-royal-800 transition-colors"
          >
            <span>Apply / Enquire</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
