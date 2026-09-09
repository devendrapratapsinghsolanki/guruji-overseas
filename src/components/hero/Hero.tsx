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
              the UK, Australia, New Zealand, USA, Germany, and Ireland.
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

          {/* Right Column: Architectural Multi-Frame Real Photography Composition */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Main Featured Photo Frame: Real Leadership & Office */}
            <div className="relative rounded-lg overflow-hidden bg-navy-850 border border-navy-800 p-2 shadow-card">
              <div className="relative aspect-[16/10] rounded overflow-hidden bg-navy-950">
                <Image
                  src="/images/owner.jpg"
                  alt="Founder & Managing Director - Guruji Overseas"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/25 to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                    Direct Leadership Guidance
                  </span>
                  <span className="text-sm font-bold text-white">
                    Meet Directly With Senior Leadership in Rohtak
                  </span>
                </div>
              </div>
              <div className="pt-2.5 pb-1 px-2 flex items-center justify-between text-xs text-slate-300">
                <span className="font-semibold text-white">
                  Sheetal Lifestyle Mall (Opp. D-Park)
                </span>
                <span className="text-slate-400 text-[11px]">Rohtak Center</span>
              </div>
            </div>

            {/* Two Complementary Real Photography Frames (Classroom & Exterior Signage) */}
            <div className="grid grid-cols-2 gap-3.5">
              <div className="rounded-lg overflow-hidden bg-navy-850 border border-navy-800 p-2 shadow-card">
                <PhotoPlaceholder
                  alt="Guruji Overseas Classroom and Test Preparation Environment"
                  category="classroom"
                  label="IELTS & PTE Classroom Lab"
                  aspectRatio="4/3"
                />
                <div className="pt-2 text-[11px] font-medium text-slate-300 text-center">
                  Daily Batch Practice
                </div>
              </div>

              <div className="rounded-lg overflow-hidden bg-navy-850 border border-navy-800 p-2 shadow-card">
                <PhotoPlaceholder
                  alt="Guruji Overseas Exterior Mall Signage"
                  category="signage"
                  label="Mall Exterior Signage"
                  aspectRatio="4/3"
                />
                <div className="pt-2 text-[11px] font-medium text-slate-300 text-center">
                  Easily Accessible Location
                </div>
              </div>
            </div>

            {/* Verified Reputation Card: Honest attribution to Justdial */}
            <div className="p-3.5 rounded-lg bg-navy-850/90 border border-navy-700/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>5.0 Rating (300+ Reviews)</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Justdial Claimed &amp; Verified Business Listing
                  </div>
                </div>
              </div>
              <a
                href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, "")}`}
                className="text-xs font-semibold text-royal-400 hover:text-royal-300 flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" />
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
