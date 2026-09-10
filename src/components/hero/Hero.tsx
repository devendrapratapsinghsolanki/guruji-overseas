import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  MapPin,
  GraduationCap,
  BookOpen,
  Plane,
  Building2,
  ShieldCheck,
  Award,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { Container, Button } from "@/components/ui";

const featuredDestinations = [
  { name: "Canada", flag: "🇨🇦", note: "PGWP & Diplomas" },
  { name: "United Kingdom", flag: "🇬🇧", note: "1-Yr Master's" },
  { name: "Australia", flag: "🇦🇺", note: "Subclass 500" },
  { name: "United States", flag: "🇺🇸", note: "3-Yr STEM OPT" },
  { name: "Germany", flag: "🇩🇪", note: "No Tuition Fees" },
  { name: "New Zealand", flag: "🇳🇿", note: "Post-Study Work" },
];

export function Hero() {
  return (
    <section className="relative bg-[#0B132B] text-white overflow-hidden border-b border-slate-800">
      {/* Refined subtle architectural grid */}
      <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Subtle warm ambient lighting (editorial, not rainbow) */}
      <div className="absolute -top-32 left-1/3 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Authoritative Editorial Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Institution Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-[11px] font-bold uppercase tracking-widest text-amber-300 mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Guruji Overseas • Immigration &amp; Education Advisory</span>
            </div>

            {/* Headline with High Typographic Contrast */}
            <h1 className="text-4xl sm:text-6xl lg:text-[4rem] font-black tracking-tight leading-[1.08] mb-6 text-white">
              Study Abroad With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400">
                Absolute Clarity.
              </span>
            </h1>

            {/* Editorial Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              Premier study abroad consultancy and certified IELTS/PTE preparation institute in Rohtak. 
              We provide transparent university admissions, rigorous language masterclasses, and meticulous student visa filing for top global destinations.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10 w-full sm:w-auto">
              <Button
                variant="royal"
                size="lg"
                href="/contact"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 border-none shadow-lg shadow-amber-500/10"
              >
                Book Free In-Person Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#destinations"
                className="text-slate-200 border-slate-700 hover:border-slate-500 hover:bg-white/5"
              >
                Explore 6 Destination Countries
              </Button>
            </div>

            {/* Grounded Metadata Strip */}
            <div className="w-full pt-6 border-t border-slate-800/90 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">D-Park, Rohtak</p>
                  <p className="text-[11px] text-slate-400">Sheetal Lifestyle Mall</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Certified Trainers</p>
                  <p className="text-[11px] text-slate-400">IDP &amp; Pearson Prep Lab</p>
                </div>
              </div>
              <div className="flex items-start gap-2 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Zero Hidden Charges</p>
                  <p className="text-[11px] text-slate-400">100% Ethical Filings</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Grounded Editorial Photo Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900/60 p-3 shadow-2xl backdrop-blur-sm">
              <div className="relative aspect-[4/4.8] sm:aspect-[4/4.5] rounded-xl overflow-hidden bg-slate-800">
                <Image
                  src="/images/owner.jpg"
                  alt="Founder & Managing Director - Guruji Overseas Rohtak"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
                
                {/* Refined Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent opacity-90" />

                {/* Grounded Caption Card */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-400/20 text-amber-300 border border-amber-400/40 text-[10px] font-extrabold uppercase tracking-wider mb-2">
                    Direct Leadership Guidance
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    Guruji Overseas Rohtak
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    &ldquo;Our promise to Haryana students is simple: honest evaluation, no false promises, and thorough visa filing.&rdquo;
                  </p>
                </div>
              </div>

              {/* Sub-strip with Key Country Accreditations */}
              <div className="mt-3 pt-3 border-t border-slate-800/80 px-2 flex items-center justify-between text-[11px] text-slate-400">
                <span className="font-semibold text-slate-300">Intakes: Jan / May / Sep 2026-27</span>
                <span className="text-amber-400 font-medium">Free Profile Review</span>
              </div>
            </div>
          </div>

        </div>

        {/* Destination Quick Selector Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
            <span>Core Country Desks:</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 w-full md:w-auto">
            {featuredDestinations.map((dest, idx) => (
              <Link
                key={idx}
                href={`/study-abroad/${dest.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-amber-400/40 transition-all text-xs text-slate-200 group"
              >
                <span className="text-base">{dest.flag}</span>
                <div className="text-left">
                  <span className="font-bold block text-white group-hover:text-amber-300 transition-colors">
                    {dest.name}
                  </span>
                  <span className="text-[10px] text-slate-400 block truncate">
                    {dest.note}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
