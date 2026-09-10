"use client";

import React, { useState, useEffect } from "react";
import { X, Sparkles, GraduationCap, Phone, ShieldCheck } from "lucide-react";
import { BookFreeCounsellingForm } from "@/components/forms/BookFreeCounsellingForm";
import { COMPANY_INFO } from "@/data/company";

export function AutoWelcomeEnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen or closed the modal in this session
    try {
      const hasSeen = sessionStorage.getItem("hasSeenWelcomeEnquiry_v1");
      if (!hasSeen) {
        const timer = setTimeout(() => {
          setIsOpen(true);
          sessionStorage.setItem("hasSeenWelcomeEnquiry_v1", "true");
        }, 3500); // Trigger gently after 3.5 seconds
        return () => clearTimeout(timer);
      }
    } catch {
      // Ignore sessionStorage exceptions in private mode
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-navy-950/80 backdrop-blur-sm animate-fade-in overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-300">
        {/* Top Header Banner */}
        <div className="relative bg-gradient-to-r from-navy-950 via-navy-900 to-royal-900 text-white p-5 sm:p-6">
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close welcome inquiry modal"
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Welcome to {COMPANY_INFO.brandName}</span>
          </div>

          <h2
            id="welcome-modal-title"
            className="text-lg sm:text-2xl font-extrabold leading-snug"
          >
            Planning to Study Abroad or Need IELTS/PTE Coaching?
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-lg leading-relaxed">
            Get your academic profile evaluated by certified advisors at our Rohtak office. Direct admissions, scholarship guidance &amp; visa file review.
          </p>
        </div>

        {/* Scrollable Form Body */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-4">
          <BookFreeCounsellingForm
            sourceContext="Auto Welcome Popup"
            variant="plain"
            onSuccess={() => {
              setTimeout(() => {
                setIsOpen(false);
              }, 4000);
            }}
          />
        </div>
      </div>
    </div>
  );
}
