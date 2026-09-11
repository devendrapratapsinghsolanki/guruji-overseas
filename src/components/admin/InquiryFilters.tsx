"use client";

import React from "react";
import { Search, Filter, Download, RotateCcw, Calendar } from "lucide-react";
import { ALL_SERVICE_OPTIONS, INQUIRY_STATUSES } from "@/data/services";
import { InquiryStatus } from "@/types/inquiry";

interface InquiryFiltersProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  statusFilter: InquiryStatus | "ALL";
  onStatusChange: (val: InquiryStatus | "ALL") => void;
  serviceFilter: string | "ALL";
  onServiceChange: (val: string | "ALL") => void;
  dateRange: "all" | "today" | "7days" | "30days";
  onDateRangeChange: (val: "all" | "today" | "7days" | "30days") => void;
  onExportCsv: () => void;
  isExporting?: boolean;
  onReset: () => void;
}

export function InquiryFilters({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusChange,
  serviceFilter,
  onServiceChange,
  dateRange,
  onDateRangeChange,
  onExportCsv,
  isExporting,
  onReset,
}: InquiryFiltersProps) {
  return (
    <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-subtle space-y-4">
      {/* Top Row: Search & Export */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by student name, email, or phone number..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 bg-surface-gray/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-royal-500"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 self-end md:self-auto">
          <button
            type="button"
            onClick={onReset}
            title="Reset Filters"
            className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-charcoal-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>

          <button
            type="button"
            onClick={onExportCsv}
            disabled={isExporting}
            className="px-4 py-2 rounded-xl bg-navy-950 hover:bg-royal-700 text-white text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-xs disabled:opacity-50"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isExporting ? "Exporting..." : "Export CSV"}</span>
          </button>
        </div>
      </div>

      {/* Filter Selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-100 text-xs">
        {/* Status Dropdown */}
        <div>
          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            Status Stage
          </label>
          <select
            value={statusFilter}
            onChange={(e) => onStatusChange(e.target.value as InquiryStatus | "ALL")}
            className="w-full p-2 rounded-xl border border-slate-200 bg-white font-medium text-navy-950 focus:ring-2 focus:ring-royal-500 cursor-pointer"
          >
            <option value="ALL">All Statuses</option>
            {INQUIRY_STATUSES.map((st) => (
              <option key={st.value} value={st.value}>
                {st.label}
              </option>
            ))}
          </select>
        </div>

        {/* Service Filter */}
        <div>
          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            Service Interest
          </label>
          <select
            value={serviceFilter}
            onChange={(e) => onServiceChange(e.target.value)}
            className="w-full p-2 rounded-xl border border-slate-200 bg-white font-medium text-navy-950 focus:ring-2 focus:ring-royal-500 cursor-pointer"
          >
            <option value="ALL">All Services</option>
            {ALL_SERVICE_OPTIONS.map((srv) => (
              <option key={srv} value={srv}>
                {srv}
              </option>
            ))}
          </select>
        </div>

        {/* Date Range Filter */}
        <div>
          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            Date Received
          </label>
          <select
            value={dateRange}
            onChange={(e) =>
              onDateRangeChange(e.target.value as "all" | "today" | "7days" | "30days")
            }
            className="w-full p-2 rounded-xl border border-slate-200 bg-white font-medium text-navy-950 focus:ring-2 focus:ring-royal-500 cursor-pointer"
          >
            <option value="all">All Time</option>
            <option value="today">Today Only</option>
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>
          </select>
        </div>
      </div>
    </div>
  );
}
