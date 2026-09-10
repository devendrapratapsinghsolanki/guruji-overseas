"use client";

import React from "react";
import { Building2, SearchX, RotateCcw, AlertCircle } from "lucide-react";
import { University } from "@/types/university";
import { UniversityCard } from "@/components/universities/UniversityCard";

interface UniversityGridProps {
  universities: University[];
  isLoading?: boolean;
  onSelectDetails?: (university: University) => void;
  onResetFilters?: () => void;
  onEnquire?: (university: University) => void;
}

export function UniversityGrid({
  universities,
  isLoading = false,
  onSelectDetails,
  onResetFilters,
  onEnquire,
}: UniversityGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4"
          >
            <div className="aspect-[16/9] w-full bg-slate-200 rounded-xl" />
            <div className="h-4 bg-slate-200 rounded w-3/4" />
            <div className="h-3 bg-slate-100 rounded w-full" />
            <div className="h-12 bg-slate-100 rounded-xl" />
          </div>
        ))}
      </div>
    );
  }

  if (universities.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center space-y-4">
        <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
          <SearchX className="w-7 h-7" />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-navy-950">
            No Institutions Match Your Filter Criteria
          </h3>
          <p className="text-xs text-charcoal-600 max-w-md mx-auto leading-relaxed">
            Try adjusting your country selection, budget tier, study level, or clear your search term.
          </p>
        </div>

        {onResetFilters && (
          <div className="pt-2">
            <button
              type="button"
              onClick={onResetFilters}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-royal-600 hover:bg-royal-700 text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear All Filters</span>
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {universities.map((uni) => (
          <UniversityCard
            key={uni.id}
            university={uni}
            onSelectDetails={onSelectDetails}
            onEnquire={onEnquire}
          />
        ))}
      </div>

      {/* Database Sample Disclaimer Note */}
      <div className="p-4 rounded-xl bg-surface-gray border border-slate-200 text-[11px] text-slate-500 flex items-start gap-2.5">
        <AlertCircle className="w-4 h-4 text-royal-600 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-navy-950">Directory Data Note: </span>
          <span>
            Institutional entry requirements, tuition fees, and course lists are maintained as directory reference data for guidance purposes. Final fee schedules and admission thresholds are confirmed directly by respective university admissions offices upon formal file submission.
          </span>
        </div>
      </div>
    </div>
  );
}
