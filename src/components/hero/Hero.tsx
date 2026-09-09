import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Phone,
  CheckCircle,
  Star,
  MapPin,
  GraduationCap,
  BookOpen,
  Plane,
  Building2,
  Calendar,
} from "lucide-react";

import { COMPANY_INFO } from "@/data/company";
import { Container, Button, Badge, PhotoPlaceholder } from "@/components/ui";

const corePillars = [
  {
    icon: BookOpen,
    label: "IELTS & PTE Coaching",
    desc: "Classroom practice & computer mock tests",
  },
  {
    icon: GraduationCap,
    label: "Study Abroad Admissions",
    desc: "Direct guidance for 7 major destinations",
  },
  {
    icon: Plane,
    label: "Visa Guidance & Filing",
    desc: "Student, visitor, work & spouse visas",
  },
];

const featuredDestinations = [
  { name: "Canada", flag: "🇨🇦" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "New Zealand", flag: "🇳🇿" },
  { name: "USA", flag: "🇺🇸" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "Ireland", flag: "🇮🇪" },
];

export function Hero() {
  return (
    <section className="relative bg-navy-900 text-white overflow-hidden border-b border-navy-800">
      {/* Subtle architectural background texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <Container className="relative z-10 py-14 sm:py-18 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Core Message, Intent & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Context Badge: Location & Verified Status */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                2026 - 2027 Intakes Open
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Established {COMPANY_INFO.establishedYear}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded text-xs font-medium bg-navy-800 text-slate-300 border border-navy-700">
                <MapPin className="w-3 h-3 text-slate-400" />
                Rohtak, Haryana
              </span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.14] mb-5 font-sans">
              Your Global Journey{" "}
              <span className="text-royal-500">Starts Here.</span>
            </h1>

            {/* Supporting Message */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              Expert guidance for IELTS &amp; PTE preparation, overseas education,
              university admissions and visa assistance. Based in Rohtak, we guide
              students and professionals toward accredited programs across Canada,
              UK, Australia, New Zealand, USA, Germany, and Europe.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <Button
                variant="royal"
                size="lg"
                href="#inquiry"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto shadow-card"
              >
                Book Free Counselling
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#destinations"
                className="w-full sm:w-auto text-white border-slate-600 hover:border-white hover:bg-white/10"
              >
                Explore Destinations
              </Button>
            </div>

            {/* Primary Destinations Quick Strip */}
            <div className="w-full pt-6 border-t border-navy-800/80">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-2">
                <span>Primary Study Destinations:</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {featuredDestinations.map((dest, idx) => (
                  <Link
                    key={idx}
                    href="#destinations"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-navy-850 hover:bg-navy-800 border border-navy-700 text-xs font-medium text-slate-200 transition-colors"
                  >
                    <span>{dest.flag}</span>
                    <span>{dest.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Multi-Frame Real Photography Composition with Floating Animated Badges */}
          <div className="lg:col-span-5 relative flex flex-col gap-4">
            {/* Ambient subtle glow */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-royal-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Floating Top Badge: 500+ Universities */}
            <div className="hidden sm:flex absolute -top-4 -left-6 z-20 animate-float items-center gap-2.5 px-3.5 py-2 rounded-xl glass-navy shadow-dropdown border border-white/20">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
                🎓
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-white leading-tight">500+ Global Universities</p>
                <p className="text-[10px] text-slate-300">Canada, UK, Aus, USA &amp; EU</p>
              </div>
            </div>

            {/* Main Featured Photo Frame: Real Leadership & Center */}
            <div className="group relative rounded-xl overflow-hidden bg-navy-850 border border-navy-800 p-2 shadow-card hover:border-slate-600 transition-all duration-300">
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-navy-950">
                <Image
                  src="/images/owner.jpg"
                  alt="Founder & Managing Director - Guruji Overseas"
                  fill
                  className="object-cover object-top img-zoom"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/30 to-transparent flex flex-col justify-end p-4 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-amber-500 text-navy-950 px-2 py-0.5 rounded uppercase tracking-wider">
                      ★ Senior Leadership
                    </span>
                    <span className="text-[10px] text-slate-300">
                      Direct Counseling
                    </span>
                  </div>
                  <span className="text-sm sm:text-base font-bold text-white leading-tight">
                    Visit Our Rohtak Office for Face-to-Face Guidance
                  </span>
                </div>
              </div>
              <div className="pt-2.5 pb-1 px-2 flex items-center justify-between text-xs text-slate-300">
                <span className="font-semibold text-white">
                  Sheetal Lifestyle Mall (Opp. D-Park)
                </span>
                <span className="text-amber-400 text-[11px] font-medium">Rohtak Center</span>
              </div>
            </div>

            {/* Two Complementary Photography Frames: Foreign Students & Prestigious University */}
            <div className="grid grid-cols-2 gap-3.5">
              {/* Foreign Students on Campus */}
              <div className="group rounded-xl overflow-hidden bg-navy-850 border border-navy-800 p-2 shadow-card hover:border-slate-600 transition-all duration-300">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-navy-950">
                  <Image
                    src="/images/foreign-students-campus.jpg"
                    alt="Foreign university students studying abroad on campus"
                    fill
                    className="object-cover img-zoom"
                    sizes="(max-width: 1024px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent flex flex-col justify-end p-2.5">
                    <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider">
                      Study Abroad
                    </span>
                    <span className="text-xs font-semibold text-white truncate">
                      Global Campus Life
                    </span>
                  </div>
                </div>
                <div className="pt-2 text-[11px] font-medium text-slate-300 text-center flex items-center justify-center gap-1">
                  <span>Top Ranked Campuses</span>
                </div>
              </div>

              {/* Prestigious Global University Campus */}
              <div className="group rounded-xl overflow-hidden bg-navy-850 border border-navy-800 p-2 shadow-card hover:border-slate-600 transition-all duration-300">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-navy-950">
                  <Image
                    src="/images/global-university-campus.jpg"
                    alt="Prestigious international university architecture"
                    fill
                    className="object-cover img-zoom"
                    sizes="(max-width: 1024px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent flex flex-col justify-end p-2.5">
                    <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider">
                      Admissions
                    </span>
                    <span className="text-xs font-semibold text-white truncate">
                      World Class Degrees
                    </span>
                  </div>
                </div>
                <div className="pt-2 text-[11px] font-medium text-slate-300 text-center flex items-center justify-center gap-1">
                  <span>Accredited Programs</span>
                </div>
              </div>
            </div>

            {/* Floating Bottom Badge: 100% Visa Support */}
            <div className="hidden sm:flex absolute -bottom-3 -right-4 z-20 animate-float-delayed items-center gap-2.5 px-3.5 py-2 rounded-xl glass-navy shadow-dropdown border border-white/20">
              <div className="w-8 h-8 rounded-lg bg-royal-500/20 text-royal-400 flex items-center justify-center font-bold text-xs">
                ✈️
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-white leading-tight">100% Visa Filing &amp; SOP</p>
                <p className="text-[10px] text-slate-300">Expert Embassy Preparation</p>
              </div>
            </div>

            {/* Verified Reputation Card: Honest attribution to Justdial */}
            <div className="p-3.5 rounded-xl bg-navy-850/95 border border-navy-700/80 flex items-center justify-between hover:border-navy-600 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Star className="w-5 h-5 fill-amber-400 animate-pulse-subtle" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>5.0 Rating (300+ Reviews)</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Justdial Claimed &amp; Verified Business Listing
                  </div>
                </div>
              </div>
              <a
                href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, "")}`}
                className="text-xs font-semibold text-royal-400 hover:text-royal-300 flex items-center gap-1 group/btn"
              >
                <Phone className="w-3.5 h-3.5 group-hover/btn:rotate-12 transition-transform" />
                <span>Call Office</span>
              </a>
            </div>
          </div>
        </div>

        {/* 3 Core Service Pillars Strip directly under Hero */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 pt-8 border-t border-navy-800">
          {corePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-4 rounded-lg bg-navy-850/50 border border-navy-800 hover:border-navy-700 transition-colors"
              >
                <div className="w-10 h-10 rounded bg-navy-800 border border-navy-700 flex items-center justify-center text-royal-400 shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-0.5">
                    {pillar.label}
                  </h3>
                  <p className="text-xs text-slate-400 leading-normal">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
