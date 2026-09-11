import React from "react";
import {
  Users,
  Inbox,
  PhoneCall,
  CalendarCheck,
  PlaneTakeoff,
  CheckCircle2,
  Calendar,
  Sparkles,
} from "lucide-react";
import { InquiryStatsSummary } from "@/types/inquiry";

interface DashboardStatsProps {
  stats: InquiryStatsSummary | null;
  isLoading?: boolean;
}

export function DashboardStats({ stats, isLoading }: DashboardStatsProps) {
  const cards = [
    {
      label: "Total Inquiries",
      value: stats?.total ?? 0,
      icon: Users,
      color: "text-royal-600 bg-royal-50 border-royal-100",
      description: "Lifetime received from website",
    },
    {
      label: "New Inquiries",
      value: stats?.newCount ?? 0,
      icon: Inbox,
      color: "text-blue-600 bg-blue-50 border-blue-100",
      description: "Pending first contact",
      highlight: true,
    },
    {
      label: "Contacted",
      value: stats?.contactedCount ?? 0,
      icon: PhoneCall,
      color: "text-purple-600 bg-purple-50 border-purple-100",
      description: "Initial discussion done",
    },
    {
      label: "In Counselling",
      value: stats?.counsellingCount ?? 0,
      icon: CalendarCheck,
      color: "text-amber-600 bg-amber-50 border-amber-100",
      description: "Active profile assessment",
    },
    {
      label: "Visa Processing",
      value: stats?.visaProcessingCount ?? 0,
      icon: PlaneTakeoff,
      color: "text-sky-600 bg-sky-50 border-sky-100",
      description: "Embassy file lodged",
    },
    {
      label: "Closed / Completed",
      value: stats?.closedCount ?? 0,
      icon: CheckCircle2,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
      description: "Enrolment finalized / archived",
    },
  ];

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="p-4 rounded-2xl bg-white border border-slate-200 shadow-subtle animate-pulse space-y-3"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-100" />
            <div className="h-6 w-16 bg-slate-100 rounded" />
            <div className="h-3 w-24 bg-slate-100 rounded" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.label}
            className={`p-4 rounded-2xl bg-white border transition-all ${
              card.highlight
                ? "border-blue-300 shadow-sm ring-1 ring-blue-100"
                : "border-slate-200 shadow-subtle"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider truncate">
                {card.label}
              </span>
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold border ${card.color}`}
              >
                <Icon className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="text-2xl font-extrabold text-navy-950">
              {card.value}
            </div>
            <p className="text-[10px] text-slate-500 mt-1 line-clamp-1">
              {card.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
