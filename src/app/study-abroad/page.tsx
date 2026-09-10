import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  DollarSign,
  Briefcase,
  GraduationCap,
  Globe2,
  Sparkles,
  ShieldCheck,
  Building2,
  Compass,
  FileCheck,
} from "lucide-react";

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { CtaSection } from "@/components/layout/CtaSection";
import { Container, Badge, Button, SectionHeading } from "@/components/ui";
import { COUNTRIES_DATA } from "@/data/destinationsData";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Study Abroad Consultancy in Rohtak | Canada, UK, Australia, NZ, USA, Germany | Guruji Overseas",
  description:
    "Explore 6 major study destinations with Guruji Overseas Rohtak. Compare top universities, tuition fees, post-study work rights, intake cycles, and get complete student visa guidance.",
  keywords: [
    "Study Abroad Rohtak",
    "Overseas Education Consultant Rohtak",
    "Study in Canada Rohtak",
    "Study in UK Rohtak",
    "Study in Australia Rohtak",
    "Study in USA Rohtak",
    "Study in Germany Rohtak",
  ],
};

const intakeCycles = [
  {
    intake: "Fall Intake (Sep - Oct)",
    tag: "Primary & Largest Intake",
    description: "Maximum course options, widest scholarship eligibility, and primary campus recruitment across Canada, UK, USA, and Germany.",
    deadlines: "Apply by March - June",
    popularIn: "Canada, UK, USA, Germany",
  },
  {
    intake: "Spring / Winter Intake (Jan - Feb)",
    tag: "Major Secondary Intake",
    description: "Ideal for students who completed their degrees in summer or required extra time for IELTS/PTE preparation.",
    deadlines: "Apply by August - November",
    popularIn: "Canada, UK, USA, Australia, New Zealand",
  },
  {
    intake: "Summer / Mid-Year Intake (May - Jul)",
    tag: "Targeted Intake",
    description: "Primary intake for Australia and New Zealand (July semester); selective programs in Canada and UK.",
    deadlines: "Apply by January - April",
    popularIn: "Australia, New Zealand, Canada",
  },
];

export default function StudyAbroadOverviewPage() {
  const countries = Object.values(COUNTRIES_DATA);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <PageHero
        breadcrumbs={[{ label: "Study Abroad" }]}
        badge="6 Global Destinations"
        title="Global Study Abroad Opportunities & Admissions Advisory"
        subtitle="Make an informed decision for your international career. Explore accredited universities, affordable tuition structures, and post-study work pathways across 6 premier global education hubs."
        stats={[
          { label: "Destinations Advised", value: "6 Major Countries" },
          { label: "Partner Institutions", value: "500+ Global DLIs" },
          { label: "Justdial Verified Rating", value: "5.0 ★ (300+ Reviews)" },
          { label: "Rohtak Physical Office", value: "Established 2022" },
        ]}
        primaryCtaText="Book Free Profile Evaluation"
        primaryCtaHref="/contact"
      />

      {/* 6 Country Hub Cards */}
      <section className="py-16 sm:py-24 bg-surface-gray/50 border-b border-border-subtle">
        <Container>
          <SectionHeading
            kicker="Primary Destinations"
            title="Explore Premier Global Study Destinations"
            subtitle="Select a country to explore detailed admission requirements, top-ranked institutions, cost estimates, and visa filing criteria."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {countries.map((country) => (
              <div
                key={country.slug}
                className="group rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col justify-between hover:border-royal-300 hover:shadow-card-hover transition-all duration-300"
              >
                <div>
                  {/* Card Image Banner */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-navy-950">
                    <Image
                      src={country.image}
                      alt={`Study in ${country.name}`}
                      fill
                      className="object-cover img-zoom group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />

                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                      <div className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                        <span className="text-xl">{country.flag}</span>
                        <span className="text-xs font-extrabold text-navy-950">{country.name}</span>
                      </div>
                      <Badge variant="navy" size="sm" className="bg-navy-900/90 text-white border-white/20">
                        {country.heroBadge}
                      </Badge>
                    </div>

                    <div className="absolute bottom-3 left-3.5 right-3.5 z-10">
                      <div className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                        {country.costBreakdown.postStudyWork}
                      </div>
                      <h3 className="text-lg font-bold text-white">Study in {country.name}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-semibold text-royal-700 mb-2 uppercase tracking-wider">
                      {country.tagline}
                    </p>
                    <p className="text-xs text-charcoal-600 leading-relaxed line-clamp-3 mb-5">
                      {country.overview}
                    </p>

                    <div className="space-y-2 py-3 px-3.5 rounded-xl bg-surface-gray text-xs border border-slate-100 mb-2">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Intakes:</span>
                        <span className="font-bold text-navy-900">{country.quickStats[0].value}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Avg Tuition:</span>
                        <span className="font-bold text-navy-900">{country.costBreakdown.tuitionRange.split("(")[0]}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/study-abroad/${country.slug}`}
                    className="inline-flex items-center justify-between w-full p-2.5 rounded-lg bg-royal-50 hover:bg-royal-100 text-royal-700 font-bold text-xs transition-colors"
                  >
                    <span>Explore {country.name} Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Global Intake Cycles */}
      <section className="py-16 sm:py-20 bg-white border-b border-border-subtle">
        <Container>
          <SectionHeading
            kicker="Admission Calendar"
            title="Global Study Abroad Intake Cycles"
            subtitle="Plan your test preparation and application timeline according to key international intake windows."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {intakeCycles.map((cycle, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 bg-surface-gray flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-royal-700 bg-royal-50 px-2 py-0.5 rounded border border-blue-100 inline-block mb-3">
                    {cycle.tag}
                  </span>
                  <h3 className="text-base font-bold text-navy-950 mb-2">{cycle.intake}</h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed mb-4">{cycle.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Application Deadline:</span>
                    <span className="font-bold text-charcoal-800">{cycle.deadlines}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Key Countries:</span>
                    <span className="font-bold text-navy-950">{cycle.popularIn}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Profile Readiness & Step-by-Step Guidance */}
      <section className="py-16 sm:py-20 bg-navy-950 text-white border-b border-navy-900">
        <Container>
          <div className="max-w-3xl mb-12">
            <Badge variant="amber" size="sm" className="mb-3 bg-amber-500/20 text-amber-300 border-amber-400/30">
              End-to-End Methodology
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              How Guruji Overseas Guides Your Admission
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Our 6-step structured counselling workflow ensures every student from Haryana receives transparent advice, tailored university shortlists, and rigorous visa compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Personalized Career Counselling",
                desc: "Evaluating past academic scores, financial budget, career goals, and country suitability.",
              },
              {
                step: "02",
                title: "Language Coaching (IELTS / PTE)",
                desc: "Structured classroom & computer lab coaching at Sheetal Lifestyle Mall Rohtak to hit required band targets.",
              },
              {
                step: "03",
                title: "Course & Institution Shortlisting",
                desc: "Impartial selection of recognized DLI colleges and top universities with clear stayback entitlements.",
              },
              {
                step: "04",
                title: "Application & Documentation",
                desc: "Assistance with academic transcripts, Statements of Purpose (SOP), LORs, and offer letter tracking.",
              },
              {
                step: "05",
                title: "Financial Audit & Visa Filing",
                desc: "Exhaustive review of bank statements, GIC/Blocked Accounts/loans, and embassy application lodging.",
              },
              {
                step: "06",
                title: "Pre-Departure & Accommodation",
                desc: "Briefing on student life, health insurance, airport arrival, foreign exchange, and initial accommodation.",
              },
            ].map((st) => (
              <div
                key={st.step}
                className="p-6 rounded-2xl bg-navy-900/70 border border-navy-800 flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-black text-amber-400 mb-2">{st.step}</div>
                  <h3 className="text-base font-bold text-white mb-2">{st.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <CtaSection
        badge="Rohtak Physical Office Advisory"
        title="Start Your International Education Journey Today"
        subtitle="Visit our office at Sheetal Lifestyle Mall, Opposite D-Park, Rohtak for one-on-one consultation with certified overseas education advisors."
        primaryButtonText="Book Free Profile Evaluation"
        primaryButtonHref="/contact"
      />

      <Footer />
    </div>
  );
}
