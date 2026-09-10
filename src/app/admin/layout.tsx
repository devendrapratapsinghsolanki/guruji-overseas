"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Users,
  Award,
  BookOpen,
  LayoutDashboard,
  LogOut,
  Globe,
  Lock,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Phone,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

const ADMIN_PASSCODE = "guruji@2026"; // Default Master Admin Key (Can be changed in production config)

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [passcode, setPasscode] = useState("");
  const [authError, setAuthError] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    try {
      const auth = sessionStorage.getItem("guruji_admin_auth");
      if (auth === "true") {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === ADMIN_PASSCODE || passcode.trim() === "admin123") {
      sessionStorage.setItem("guruji_admin_auth", "true");
      setIsAuthenticated(true);
      setAuthError("");
    } else {
      setAuthError("Incorrect admin passcode. Please enter the valid key.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("guruji_admin_auth");
    setIsAuthenticated(false);
  };

  // Initial loading state while reading sessionStorage
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-navy-950 flex items-center justify-center text-white text-sm">
        Verifying admin session...
      </div>
    );
  }

  // Authentication Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-navy-950 flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
          <div className="text-center space-y-2 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-navy-950 text-amber-400 flex items-center justify-center mx-auto shadow-md">
              <Lock className="w-7 h-7" />
            </div>
            <h1 className="text-xl font-bold text-navy-950">
              Guruji Overseas CRM Portal
            </h1>
            <p className="text-xs text-slate-500">
              Authorized staff &amp; counselor access only (Rohtak HQ)
            </p>
          </div>

          {authError && (
            <div className="p-3 mb-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700">
              {authError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                Admin Master Passcode
              </label>
              <input
                type="password"
                placeholder="Enter passcode (e.g. guruji@2026)"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 bg-surface-gray/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-royal-500 focus:border-royal-500 transition-all"
                autoFocus
              />
              <span className="text-[11px] text-slate-400 block mt-1">
                Default Master PIN: <strong className="text-navy-950">guruji@2026</strong> or <strong className="text-navy-950">admin123</strong>
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-royal-600 hover:bg-royal-700 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Unlock Admin Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <Link href="/" className="hover:text-royal-600 flex items-center gap-1 font-semibold">
              <span>← Return to Public Site</span>
            </Link>
            <span>Rohtak Office</span>
          </div>
        </div>
      </div>
    );
  }

  const navLinks = [
    { label: "Dashboard Overview", href: "/admin", icon: LayoutDashboard },
    { label: "Website Leads", href: "/admin/leads", icon: Users },
    { label: "Visa Results Manager", href: "/admin/results", icon: Award },
    { label: "Study Blog Manager", href: "/admin/blogs", icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-surface-gray flex flex-col md:flex-row">
      {/* Mobile Top Header */}
      <div className="md:hidden bg-navy-950 text-white px-4 py-3 flex items-center justify-between z-30 sticky top-0">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-bold text-xs uppercase tracking-wider">Guruji Admin</span>
        </div>
        <button
          type="button"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-1.5 rounded-lg bg-navy-900 text-slate-300"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed md:sticky top-0 left-0 z-40 w-64 h-screen bg-navy-950 text-slate-300 flex flex-col justify-between p-4 border-r border-navy-900 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="space-y-6">
          {/* Logo / Badge */}
          <div className="px-2 pt-2">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>CRM &amp; Portal Hub</span>
            </div>
            <h2 className="text-base font-extrabold text-white tracking-tight">
              {COMPANY_INFO.brandName}
            </h2>
            <p className="text-[11px] text-slate-400">Rohtak Operational Headquarters</p>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-royal-600 text-white shadow-sm font-bold"
                      : "text-slate-400 hover:text-white hover:bg-navy-900"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-amber-300" : "text-slate-400"}`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-navy-900 space-y-2">
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between px-3.5 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:bg-navy-900 transition-colors"
          >
            <span className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-royal-400" />
              <span>View Live Website</span>
            </span>
            <span>↗</span>
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-rose-400 hover:text-rose-300 hover:bg-rose-950/30 transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Logout Session</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 p-4 sm:p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
