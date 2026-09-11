"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, ArrowRight, ShieldCheck, Loader2, AlertCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function AdminLoginPage() {
  const router = useRouter();
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!passcode.trim()) {
      setError("Please enter the admin passcode.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passcode }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        if (typeof window !== "undefined") {
          sessionStorage.setItem("guruji_admin_auth", "true");
        }
        router.push("/admin");
        router.refresh();
      } else {
        setError(data.message || "Invalid admin passcode.");
      }
    } catch {
      setError("Network error. Could not authenticate.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-navy-950 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        <div className="text-center space-y-2 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-navy-950 text-amber-400 flex items-center justify-center mx-auto shadow-md">
            <Lock className="w-7 h-7" />
          </div>
          <h1 className="text-xl font-bold text-navy-950">
            {COMPANY_INFO.brandName} Portal
          </h1>
          <p className="text-xs text-slate-500">
            Authorized admin &amp; counsellor access only (Rohtak HQ)
          </p>
        </div>

        {error && (
          <div
            role="alert"
            className="p-3 mb-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2"
          >
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="admin-passcode"
              className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1"
            >
              Master Admin Passcode
            </label>
            <input
              id="admin-passcode"
              type="password"
              placeholder="Enter admin passcode"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 bg-surface-gray/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-royal-500 focus:border-royal-500 transition-all"
              autoFocus
              required
            />
            {/* <span className="text-[11px] text-slate-400 block mt-1">
              Default passcode: <strong className="text-navy-950">guruji@2026</strong> or configured in <code className="bg-slate-100 px-1 py-0.5 rounded text-[10px]">ADMIN_PASSWORD</code>
            </span> */}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 rounded-xl bg-navy-950 hover:bg-royal-700 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Verifying...</span>
              </>
            ) : (
              <>
                <span>Unlock Admin Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <Link href="/" className="hover:text-royal-600 flex items-center gap-1 font-semibold">
            <span>← Return to Public Site</span>
          </Link>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Secure SSL</span>
          </span>
        </div>
      </div>
    </div>
  );
}
