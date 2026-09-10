"use client";

import React, { useState, useEffect } from "react";
import {
  MessageCircle,
  Phone,
  CalendarCheck,
  X,
  Sparkles,
  ArrowUp,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { BookFreeCounsellingForm } from "@/components/forms/BookFreeCounsellingForm";

export function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (window.scrollY > 600) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello Guruji Overseas, I would like to enquire about Study Abroad admissions and IELTS/PTE coaching."
  )}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Action Bar - Bottom Right */}
      <div className="fixed bottom-5 right-4 sm:right-6 z-40 flex flex-col items-end gap-2.5 animate-in fade-in slide-in-from-bottom-4 duration-300">
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full bg-white text-navy-950 border border-slate-200 shadow-md hover:bg-slate-50 flex items-center justify-center transition-transform hover:scale-105 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4 text-slate-600" />
          </button>
        )}

        {/* Quick Free Counselling / Enquiry Button */}
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="group flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-navy-950 text-white border border-navy-800 shadow-xl hover:bg-navy-900 transition-all hover:scale-105 cursor-pointer"
        >
          <div className="w-7 h-7 rounded-full bg-royal-600 text-amber-300 flex items-center justify-center shrink-0">
            <CalendarCheck className="w-4 h-4" />
          </div>
          <div className="text-left pr-1.5 hidden sm:block">
            <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block leading-none">
              Free Advisory
            </span>
            <span className="text-xs font-extrabold text-white leading-tight">
              Quick Enquiry
            </span>
          </div>
        </button>

        {/* Floating WhatsApp Action Button with Pulse Effect */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-600 text-white shadow-2xl hover:bg-emerald-500 transition-all hover:scale-105 cursor-pointer"
        >
          {/* Animated ping ring */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white"></span>
          </span>

          <div className="w-7 h-7 flex items-center justify-center shrink-0">
            <svg
              className="w-6 h-6 fill-current text-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.952 3.71 1.453 5.711 1.454h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
          <div className="text-left pr-1.5 hidden sm:block">
            <span className="text-[10px] font-bold text-emerald-100 uppercase tracking-wider block leading-none">
              Instant Chat
            </span>
            <span className="text-xs font-extrabold text-white leading-tight">
              WhatsApp Help
            </span>
          </div>
        </a>
      </div>

      {/* Quick Enquiry Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/75 backdrop-blur-sm animate-fade-in overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[90vh] flex flex-col">
            <div className="sticky top-0 z-20 flex items-center justify-between px-5 py-3.5 bg-white border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-navy-950 uppercase tracking-wider">
                  Request Free Counselling (Rohtak Office)
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close modal"
                className="p-1 rounded-lg text-slate-400 hover:text-navy-950 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto p-5 sm:p-7">
              <BookFreeCounsellingForm
                sourceContext="Floating Quick Enquiry Button"
                onSuccess={() => {
                  setTimeout(() => setIsModalOpen(false), 4000);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
