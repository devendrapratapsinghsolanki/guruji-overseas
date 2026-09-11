"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Users,
  Award,
  BookOpen,
  ArrowRight,
  Sparkles,
  Phone,
  Clock,
  CheckCircle2,
  AlertCircle,
  CalendarCheck,
  TrendingUp,
  FileCheck,
} from "lucide-react";
import { LeadService } from "@/lib/services/leadService";
import { LeadRecord, LeadStatsSummary } from "@/types/crm";
import { DEFAULT_STUDENT_RESULTS, DEFAULT_BLOG_POSTS } from "@/lib/services/adminStore";
import { COMPANY_INFO } from "@/data/company";

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<LeadStatsSummary | null>(null);
  const [recentLeads, setRecentLeads] = useState<LeadRecord[]>([]);

  const [resultsCount, setResultsCount] = useState<number>(DEFAULT_STUDENT_RESULTS.length);
  const [blogsCount, setBlogsCount] = useState<number>(DEFAULT_BLOG_POSTS.length);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const summary = await LeadService.getStatsSummary();
        const leadsData = await LeadService.listLeads({ pageSize: 5 });
        let allLeads = [...leadsData.leads];

        if (typeof window !== "undefined") {
          const stored = localStorage.getItem("guruji_admin_leads");
          if (stored) {
            try {
              const parsed = JSON.parse(stored);
              if (Array.isArray(parsed)) {
                const ids = new Set(allLeads.map((l) => l.id));
                parsed.forEach((item) => {
                  if (!ids.has(item.id)) {
                    allLeads.unshift(item);
                    ids.add(item.id);
                  }
                });
              }
            } catch {
              // Ignore
            }
          }

          const storedRes = localStorage.getItem("guruji_admin_results");
          if (storedRes) {
            try {
              const p = JSON.parse(storedRes);
              if (Array.isArray(p)) setResultsCount(p.length);
            } catch {}
          }

          const storedBlogs = localStorage.getItem("guruji_admin_blogs");
          if (storedBlogs) {
            try {
              const b = JSON.parse(storedBlogs);
              if (Array.isArray(b)) setBlogsCount(b.length);
            } catch {}
          }
        }

        const newCount = allLeads.filter((l) => l.status === "NEW").length;
        const inCounsellingCount = allLeads.filter((l) => l.status === "COUNSELLING").length;
        const appCount = allLeads.filter((l) => l.status === "APPLICATION").length;
        const processingCount = allLeads.filter((l) => l.status === "VISA_PROCESSING").length;
        const approvedCount = allLeads.filter((l) => l.status === "APPROVED").length;
        const closedCount = allLeads.filter((l) => l.status === "CLOSED").length;
        const total = allLeads.length;
        const conversion = total > 0 ? Math.round((approvedCount / total) * 100) : 0;

        setStats({
          totalLeads: total,
          newLeads: newCount,
          inCounselling: inCounsellingCount,
          applicationsSubmitted: appCount,
          visasInProcessing: processingCount,
          visasApproved: approvedCount,
          closedLeads: closedCount,
          conversionRate: conversion,
        });
        setRecentLeads(allLeads.slice(0, 5));
      } catch {
        // Fallback
      }
    }
    loadDashboard();
  }, []);

  return (
    <div className="space-y-8 max-w-7xl mx-auto animate-fade-in">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-navy-950 text-white p-6 sm:p-8 rounded-3xl border border-navy-900 shadow-card">
        <div>
          <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
            Guruji Overseas Admin Console
          </span>
          <h1 className="text-xl sm:text-2xl font-bold">
            Welcome to the Rohtak Office Lead &amp; Operations Hub
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Manage incoming website enquiries, update lead stages across the 8-step lifecycle, publish new student visa results, and manage editorial guides.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/admin/leads"
            className="px-4 py-2.5 rounded-xl bg-royal-600 hover:bg-royal-700 text-white font-bold text-xs shadow-sm transition-all flex items-center gap-1.5 shrink-0"
          >
            <span>View All Leads</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Total Inquiries
            </span>
            <div className="w-8 h-8 rounded-lg bg-royal-50 text-royal-700 flex items-center justify-center font-bold">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-navy-950">
            {stats?.totalLeads || 0}
          </div>
          <span className="text-[11px] text-emerald-600 font-semibold mt-1 block">
            {stats?.newLeads || 0} Unassigned / New
          </span>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Active Counselling
            </span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <CalendarCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-navy-950">
            {stats?.inCounselling || 0}
          </div>
          <span className="text-[11px] text-slate-500 font-medium mt-1 block">
            Profile evaluation in progress
          </span>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Placed Visa Students
            </span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-navy-950">
            {resultsCount}
          </div>
          <span className="text-[11px] text-emerald-600 font-semibold mt-1 block">
            Live on website marquee
          </span>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Published Guides
            </span>
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-navy-950">
            {blogsCount}
          </div>
          <span className="text-[11px] text-slate-500 font-medium mt-1 block">
            SEO study abroad articles
          </span>
        </div>
      </div>

      {/* Quick Access Action Hub */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/admin/leads"
          className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-royal-300 hover:shadow-card transition-all group"
        >
          <div className="w-10 h-10 rounded-xl bg-royal-50 text-royal-700 flex items-center justify-center mb-4 group-hover:bg-royal-600 group-hover:text-white transition-colors">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-navy-950 group-hover:text-royal-600 transition-colors mb-1">
            Manage Website Inquiries
          </h3>
          <p className="text-xs text-charcoal-600 leading-relaxed mb-4">
            Review student qualifications, test bands, preferred destinations, change lead status, and send WhatsApp messages.
          </p>
          <span className="text-xs font-bold text-royal-600 flex items-center gap-1">
            <span>Open Leads Pipeline</span>
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
            Add Student Visa Results
          </h3>
          <p className="text-xs text-charcoal-600 leading-relaxed mb-4">
            Upload new student visa approvals (Canada, UK, Aus, USA, Germany, NZ) so they appear on the homepage marquee instantly.
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
            Draft and post new articles on IRCC updates, UK 1-year Master&apos;s guides, and IELTS/PTE preparation tips.
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
            <p className="text-xs text-slate-500">Live feed from booking forms &amp; profile assessment</p>
          </div>
          <Link
            href="/admin/leads"
            className="text-xs font-bold text-royal-600 hover:text-royal-700"
          >
            View All →
          </Link>
        </div>

        {recentLeads.length === 0 ? (
          <div className="text-center py-8 text-xs text-slate-400">
            No inquiries recorded in memory yet. Fill out any website form to see it pop up here immediately!
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {recentLeads.map((lead) => (
              <div key={lead.id} className="py-3.5 flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-navy-950">{lead.name}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-royal-50 text-royal-700">
                      {lead.status}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {lead.phone} • Target: {lead.country.toUpperCase()} ({lead.course})
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-[11px] text-slate-400 block">{lead.city || "Haryana"}</span>
                  <a
                    href={`https://wa.me/91${lead.phone.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-emerald-600 hover:underline"
                  >
                    WhatsApp Lead
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
