"use client";

import React from "react";
import { Filter, RotateCcw, Globe, GraduationCap, DollarSign, Calendar } from "lucide-react";
import { UniversityFilterState } from "@/types/university";

interface UniversityFiltersProps {
  filters: UniversityFilterState;
  onChange: (updatedFilters: UniversityFilterState) => void;
  onReset: () => void;
  totalCount: number;
  filteredCount: number;
}

const COUNTRIES = [
  "All",
  "Canada",
  "United Kingdom",
  "Australia",
  "New Zealand",
  "United States",
  "Germany",
];

const STUDY_LEVELS = [
  { label: "All Study Levels", value: "All" },
  { label: "Bachelor's / Undergrad", value: "Undergraduate" },
  { label: "Master's / Postgrad", value: "Postgraduate" },
  { label: "Post-Graduate Diploma", value: "Post-Graduate" },
  { label: "Polytechnic / Diploma", value: "Diploma" },
];

const BUDGET_TIERS = [
  { label: "All Tuition Budgets", value: "All" },
  { label: "🇩🇪 Nominal / Free (Under ₹5L)", value: "nominal" },
  { label: "Moderate (₹10L - ₹18L / yr)", value: "moderate" },
  { label: "Premium (₹18L+ / yr)", value: "premium" },
];

const INTAKES = [
  { label: "All Intakes", value: "All" },
  { label: "Fall (Sep / Oct)", value: "September" },
  { label: "Spring / Winter (Jan / Feb)", value: "January" },
  { label: "Summer / Mid-Year (May / Jul)", value: "July" },
];

export function UniversityFilters({
  filters,
  onChange,
  onReset,
  totalCount,
  filteredCount,
}: UniversityFiltersProps) {
  const isFiltered =
    filters.country !== "All" ||
    filters.studyLevel !== "All" ||
    filters.budgetTier !== "All" ||
    filters.intake !== "All" ||
    filters.searchQuery.trim().length > 0;

  const handleFieldChange = (
    key: keyof UniversityFilterState,
    val: string
  ) => {
    onChange({ ...filters, [key]: val });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-5 shadow-subtle">
      {/* Header with Reset */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-royal-600" />
          <h3 className="text-xs font-bold text-navy-950 uppercase tracking-wider">
            Filter Institutions
          </h3>
        </div>

        {isFiltered && (
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-600 hover:text-rose-700 cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset All</span>
          </button>
        )}
      </div>

      {/* 1. Country Selection */}
      <div className="space-y-2">
        <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          Study Destination
        </label>
        <div className="grid grid-cols-2 gap-1.5">
          {COUNTRIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => handleFieldChange("country", c)}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold text-left truncate transition-all cursor-pointer ${
                filters.country === c
                  ? "bg-navy-950 text-amber-300 font-bold shadow-sm"
                  : "bg-surface-gray text-charcoal-700 hover:bg-slate-200"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Study Level */}
      <div className="space-y-2">
        <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          Program Level
        </label>
        <select
          value={filters.studyLevel}
          onChange={(e) => handleFieldChange("studyLevel", e.target.value)}
          className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-surface-gray/50 focus:border-royal-500 focus:bg-white focus:outline-none cursor-pointer"
        >
          {STUDY_LEVELS.map((lvl) => (
            <option key={lvl.value} value={lvl.value}>
              {lvl.label}
            </option>
          ))}
        </select>
      </div>

      {/* 3. Budget Tier */}
      <div className="space-y-2">
        <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          Tuition Budget
        </label>
        <select
          value={filters.budgetTier}
          onChange={(e) => handleFieldChange("budgetTier", e.target.value)}
          className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-surface-gray/50 focus:border-royal-500 focus:bg-white focus:outline-none cursor-pointer"
        >
          {BUDGET_TIERS.map((b) => (
            <option key={b.value} value={b.value}>
              {b.label}
            </option>
          ))}
        </select>
      </div>

      {/* 4. Intake */}
      <div className="space-y-2">
        <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          Admission Intake
        </label>
        <select
          value={filters.intake}
          onChange={(e) => handleFieldChange("intake", e.target.value)}
          className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-surface-gray/50 focus:border-royal-500 focus:bg-white focus:outline-none cursor-pointer"
        >
          {INTAKES.map((i) => (
            <option key={i.value} value={i.value}>
              {i.label}
            </option>
          ))}
        </select>
      </div>

      {/* Showing count indicator */}
      <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
        <span>Matching Results:</span>
        <span className="font-bold text-navy-950">
          {filteredCount} of {totalCount}
        </span>
      </div>
    </div>
  );
}
