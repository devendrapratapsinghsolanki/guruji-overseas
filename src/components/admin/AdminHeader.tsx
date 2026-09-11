"use client";

import React from "react";
import Link from "next/link";
import { Menu, User, Shield, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

interface AdminHeaderProps {
  onOpenSidebar: () => void;
  title?: string;
  subtitle?: string;
}

export function AdminHeader({
  onOpenSidebar,
  title = "Dashboard",
  subtitle = "Rohtak Operations Hub",
}: AdminHeaderProps) {
  return (
    <header className="bg-white border-b border-slate-200 px-4 sm:px-8 py-4 sticky top-0 z-30 flex items-center justify-between shadow-xs">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenSidebar}
          className="md:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-950 transition-colors"
          aria-label="Open Navigation Menu"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-lg font-extrabold text-navy-950">{title}</h1>
          <p className="text-[11px] text-slate-400 hidden sm:block">{subtitle}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold text-navy-950">Rohtak HQ Live</span>
        </div>
      </div>
    </header>
  );
}
