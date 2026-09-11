"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Users,
  Inbox,
  Award,
  BookOpen,
  ArrowRight,
  Sparkles,
  Phone,
  Clock,
  CheckCircle2,
  CalendarCheck,
  TrendingUp,
  RotateCw,
} from "lucide-react";
import { DashboardStats } from "@/components/admin/DashboardStats";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { InquiryRecord, InquiryStatsSummary } from "@/types/inquiry";

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<InquiryStatsSummary | null>(null);
  const [recentInquiries, setRecentInquiries] = useState<InquiryRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDashboardData = async () => {
    setIsLoading(true);
    try {
      const [statsRes, inqRes] = await Promise.all([
        fetch("/api/admin/stats"),
        fetch("/api/admin/inquiries?pageSize=5"),
      ]);

      if (statsRes.ok) {
        const statsData = await statsRes.json();
        if (statsData.stats) setStats(statsData.stats);
      }

      if (inqRes.ok) {
        const inqData = await inqRes.json();
        if (inqData.inquiries) setRecentInquiries(inqData.inquiries);
      }
    } catch (err) {
      console.error("Failed to load dashboard data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div className="space-y-8 max-w-7xl mx-auto animate-fade-in">
      {/* Top Welcome Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-navy-950 text-white p-6 sm:p-8 rounded-3xl border border-navy-900 shadow-card">
        <div>
          <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
            Guruji Overseas Admin Console
          </span>
          <h1 className="text-xl sm:text-2xl font-bold">
            Rohtak Office Operations &amp; Lead Management
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Real-time management for incoming website inquiries, admissions counselling pipeline, and student visa results.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={fetchDashboardData}
            title="Refresh Data"
            className="p-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white border border-navy-800 transition-colors cursor-pointer"
          >
            <RotateCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
          </button>
          <Link
            href="/admin/inquiries"
            className="px-4 py-2.5 rounded-xl bg-royal-600 hover:bg-royal-700 text-white font-bold text-xs shadow-sm transition-all flex items-center gap-1.5 shrink-0"
          >
            <span>View All Inquiries</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Real Statistics from Database */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Inquiry Pipeline Metrics (Live PostgreSQL)
          </h2>
          {stats && (
            <span className="text-[11px] text-slate-400">
              Last 7 Days: <strong className="text-navy-950">{stats.last7DaysCount}</strong> • Last 30 Days: <strong className="text-navy-950">{stats.last30DaysCount}</strong>
            </span>
          )}
        </div>
        <DashboardStats stats={stats} isLoading={isLoading} />
      </div>

      {/* Quick Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/admin/inquiries"
          className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-royal-300 hover:shadow-card transition-all group"
        >
          <div className="w-10 h-10 rounded-xl bg-royal-50 text-royal-700 flex items-center justify-center mb-4 group-hover:bg-royal-600 group-hover:text-white transition-colors">
            <Inbox className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-navy-950 group-hover:text-royal-600 transition-colors mb-1">
            Website Inquiries (CRM)
          </h3>
          <p className="text-xs text-charcoal-600 leading-relaxed mb-4">
            Filter, search, review student interests, change lifecycle status, add staff notes, and export to CSV.
          </p>
          <span className="text-xs font-bold text-royal-600 flex items-center gap-1">
            <span>Manage Inquiries</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </Link>

        <Link
          href="/admin/results"
          className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-card transition-all group"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 group-hover:bg-navy-950 group-hover:text-amber-300 transition-colors">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-navy-950 group-hover:text-royal-600 transition-colors mb-1">
            Visa Results Manager
          </h3>
          <p className="text-xs text-charcoal-600 leading-relaxed mb-4">
            Upload new student visa approvals across Canada, UK, Australia, USA, and Germany for the live website.
          </p>
          <span className="text-xs font-bold text-royal-600 flex items-center gap-1">
            <span>Manage Results</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </Link>

        <Link
          href="/admin/blogs"
          className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-royal-300 hover:shadow-card transition-all group"
        >
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-navy-950 group-hover:text-royal-600 transition-colors mb-1">
            Publish Blog &amp; Study Guides
          </h3>
          <p className="text-xs text-charcoal-600 leading-relaxed mb-4">
            Draft and post new articles on IRCC updates, UK master&apos;s guides, and IELTS/PTE preparation tips.
          </p>
          <span className="text-xs font-bold text-royal-600 flex items-center gap-1">
            <span>Manage Blogs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </Link>
      </div>

      {/* Recent Inquiries List */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-subtle space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h3 className="text-base font-bold text-navy-950">Recent Website Inquiries</h3>
            <p className="text-xs text-slate-500">Live stream of incoming candidate submissions</p>
          </div>
          <Link
            href="/admin/inquiries"
            className="text-xs font-bold text-royal-600 hover:text-royal-700 flex items-center gap-1"
          >
            <span>View All ({stats?.total ?? 0})</span>
            <span>→</span>
          </Link>
        </div>

        {isLoading ? (
          <div className="py-8 text-center text-xs text-slate-400">Loading recent inquiries...</div>
        ) : recentInquiries.length === 0 ? (
          <div className="text-center py-12 text-xs text-slate-400">
            No inquiries recorded in database yet. Submit an enquiry on the website to see it appear here immediately!
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {recentInquiries.map((inq) => (
              <div key={inq.id} className="py-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-navy-950">{inq.name}</span>
                    <StatusBadge status={inq.status} size="sm" />
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {inq.phone} • {inq.email}
                  </div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {inq.services.map((s) => (
                      <span key={s} className="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-slate-100 text-slate-600">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-auto">
                  <span className="text-[11px] text-slate-400">
                    {new Date(inq.createdAt).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })}
                  </span>
                  <Link
                    href={`/admin/inquiries/${inq.id}`}
                    className="px-3 py-1.5 rounded-lg bg-surface-gray hover:bg-royal-50 hover:text-royal-700 text-charcoal-700 text-xs font-bold transition-colors"
                  >
                    View →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
