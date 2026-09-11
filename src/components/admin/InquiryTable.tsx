"use client";

import React from "react";
import Link from "next/link";
import {
  Inbox,
  Phone,
  Mail,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import { InquiryRecord } from "@/types/inquiry";
import { StatusBadge } from "@/components/admin/StatusBadge";

interface InquiryTableProps {
  inquiries: InquiryRecord[];
  isLoading: boolean;
  page: number;
  totalPages: number;
  totalCount: number;
  pageSize: number;
  onPageChange: (newPage: number) => void;
  onSelectInquiry: (inquiry: InquiryRecord) => void;
}

export function InquiryTable({
  inquiries,
  isLoading,
  page,
  totalPages,
  totalCount,
  pageSize,
  onPageChange,
  onSelectInquiry,
}: InquiryTableProps) {
  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 shadow-subtle p-6 space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="animate-pulse flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
            <div className="space-y-2">
              <div className="h-4 w-40 bg-slate-100 rounded" />
              <div className="h-3 w-60 bg-slate-100 rounded" />
            </div>
            <div className="h-6 w-24 bg-slate-100 rounded" />
          </div>
        ))}
      </div>
    );
  }

  if (inquiries.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 shadow-subtle text-center py-16 px-4 space-y-3">
        <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
          <Inbox className="w-6 h-6" />
        </div>
        <h3 className="text-sm font-bold text-navy-950">No inquiries found.</h3>
        <p className="text-xs text-slate-500 max-w-sm mx-auto">
          No inquiries match your current search filters or date range. Try clearing your filters.
        </p>
      </div>
    );
  }

  const startRecord = (page - 1) * pageSize + 1;
  const endRecord = Math.min(page * pageSize, totalCount);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-subtle overflow-hidden space-y-0">
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-surface-gray border-b border-slate-200 text-slate-500 uppercase text-[10px] font-bold tracking-wider">
            <tr>
              <th className="py-3 px-4">Candidate / Lead</th>
              <th className="py-3 px-4">Contact Details</th>
              <th className="py-3 px-4">Services / Interests</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Date Received</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {inquiries.map((inq) => (
              <tr
                key={inq.id}
                onClick={() => onSelectInquiry(inq)}
                className="hover:bg-slate-50/70 transition-colors cursor-pointer group"
              >
                {/* Candidate Name */}
                <td className="py-3.5 px-4">
                  <div className="font-bold text-navy-950 group-hover:text-royal-600 transition-colors">
                    {inq.name}
                  </div>
                  <span className="text-[10px] text-slate-400">Ref: {inq.id}</span>
                </td>

                {/* Contact Info */}
                <td className="py-3.5 px-4 space-y-0.5">
                  <div className="flex items-center gap-1.5 font-semibold text-charcoal-800">
                    <Phone className="w-3 h-3 text-royal-600" />
                    <span>{inq.phone}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                    <Mail className="w-3 h-3 text-slate-400" />
                    <span className="truncate max-w-[170px]">{inq.email}</span>
                  </div>
                </td>

                {/* Services */}
                <td className="py-3.5 px-4">
                  <div className="flex flex-wrap gap-1 max-w-xs">
                    {inq.services.slice(0, 2).map((srv) => (
                      <span
                        key={srv}
                        className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700 truncate max-w-[130px]"
                      >
                        {srv}
                      </span>
                    ))}
                    {inq.services.length > 2 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-royal-50 text-royal-700">
                        +{inq.services.length - 2}
                      </span>
                    )}
                  </div>
                </td>

                {/* Status Badge */}
                <td className="py-3.5 px-4">
                  <StatusBadge status={inq.status} />
                </td>

                {/* Date */}
                <td className="py-3.5 px-4 text-slate-500 text-[11px]">
                  <div>{new Date(inq.createdAt).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}</div>
                  <div className="text-[10px] text-slate-400">{new Date(inq.createdAt).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}</div>
                </td>

                {/* Actions */}
                <td className="py-3.5 px-4 text-right">
                  <Link
                    href={`/admin/inquiries/${inq.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-gray hover:bg-royal-600 hover:text-white text-navy-950 text-xs font-bold transition-all cursor-pointer shadow-xs"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden divide-y divide-slate-100">
        {inquiries.map((inq) => (
          <div
            key={inq.id}
            onClick={() => onSelectInquiry(inq)}
            className="p-4 space-y-3 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <h4 className="font-bold text-navy-950 text-sm">{inq.name}</h4>
                <span className="text-[10px] text-slate-400">Ref: {inq.id}</span>
              </div>
              <StatusBadge status={inq.status} size="sm" />
            </div>

            <div className="text-xs space-y-1 text-slate-600">
              <div className="flex items-center gap-1.5">
                <Phone className="w-3 h-3 text-royal-600" />
                <a href={`tel:${inq.phone}`} onClick={(e) => e.stopPropagation()} className="font-semibold text-royal-700 hover:underline">
                  {inq.phone}
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3 h-3 text-slate-400" />
                <a href={`mailto:${inq.email}`} onClick={(e) => e.stopPropagation()} className="truncate text-slate-700 hover:underline">
                  {inq.email}
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-1">
              {inq.services.map((srv) => (
                <span
                  key={srv}
                  className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700"
                >
                  {srv}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px] text-slate-400">
              <span>{new Date(inq.createdAt).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}</span>
              <Link
                href={`/admin/inquiries/${inq.id}`}
                onClick={(e) => e.stopPropagation()}
                className="font-bold text-royal-600 flex items-center gap-0.5"
              >
                <span>Manage</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Footer */}
      <div className="p-4 bg-surface-gray/50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <div>
          Showing <strong className="text-navy-950">{startRecord}</strong> to{" "}
          <strong className="text-navy-950">{endRecord}</strong> of{" "}
          <strong className="text-navy-950">{totalCount}</strong> inquiries
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled={page <= 1}
            onClick={() => onPageChange(page - 1)}
            className="p-1.5 rounded-lg border border-slate-200 bg-white text-charcoal-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            aria-label="Previous Page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="px-3 py-1 font-semibold text-navy-950">
            Page {page} of {totalPages}
          </span>

          <button
            type="button"
            disabled={page >= totalPages}
            onClick={() => onPageChange(page + 1)}
            className="p-1.5 rounded-lg border border-slate-200 bg-white text-charcoal-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            aria-label="Next Page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
