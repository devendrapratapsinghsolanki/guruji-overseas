import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Headphones,
  Mic,
  PenTool,
  Clock,
  Sparkles,
  Users,
  Award,
  ShieldCheck,
  Building2,
  CalendarCheck,
  FileQuestion,
} from "lucide-react";

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { CtaSection } from "@/components/layout/CtaSection";
import { Container, Badge, Button, SectionHeading } from "@/components/ui";
import { COMPANY_INFO } from "@/data/company";

import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "IELTS & PTE Preparation in Rohtak | Certified Coaching Lab",
  description:
    "Top-rated IELTS and PTE preparation center in Rohtak, Haryana. Comprehensive classroom coaching, dedicated PTE computer lab, daily 1-on-1 speaking drills, and scored mock tests at Sheetal Lifestyle Mall.",
  path: "/test-preparation",
  keywords: [
    "IELTS preparation",
    "IELTS coaching Rohtak",
    "PTE preparation",
    "PTE coaching Rohtak",
    "Best IELTS Institute in Rohtak",
    "PTE Computer Lab Rohtak",
    "Spoken English Classes Rohtak",
    "Guruji Overseas",
  ],
});

const comparisonData = [
  {
    feature: "Test Format",
    ielts: "Paper-based or Computer-delivered (Human-evaluated speaking & writing)",
    pte: "100% Computer-based (AI Automated scoring across all 4 skills)",
  },
  {
    feature: "Test Duration",
    ielts: "Approx. 2 hours 45 minutes (Speaking may be on a separate day)",
    pte: "Approx. 2 hours (Single uninterrupted sitting)",
  },
  {
    feature: "Scoring Scale",
    ielts: "Band Scores 0 to 9.0 (0.5 band increments)",
    pte: "Score Scale 10 to 90 points (Granular point scale)",
  },
  {
    feature: "Result Turnaround",
    ielts: "3 to 5 days (Computer) / 13 days (Paper)",
    pte: "Fast: Typically within 24 to 48 hours",
  },
  {
    feature: "Global Acceptance",
    ielts: "Accepted by 12,000+ organizations in UK, Canada, Australia, USA, NZ",
    pte: "Accepted by 3,500+ universities & governments worldwide (Canada SDS, Australia, UK, NZ)",
  },
  {
    feature: "Guruji Overseas Lab",
    ielts: "Daily 1-on-1 speaking interview cabin drills + writing evaluations",
    pte: "Individual high-speed PC terminals + AI software simulated scoring",
  },
];

export default function TestPreparationHubPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <PageHero
        breadcrumbs={[{ label: "Test Preparation" }]}
        badge="Classroom & Computer Lab"
        title="IELTS & PTE Preparation Coaching in Rohtak"
        subtitle="Achieve your target language band scores with expert faculty, individualized cabin speaking drills, software-guided PTE mock tests, and structured diagnostic feedback at our Sheetal Lifestyle Mall coaching center."
        stats={[
          { label: "Lab Infrastructure", value: "Dedicated PC Lab" },
          { label: "Speaking Practice", value: "Daily 1-on-1 Drills" },
          { label: "Mock Test Frequency", value: "Weekly Full Mocks" },
          { label: "Faculty Experience", value: "Certified Trainers" },
        ]}
        primaryCtaText="Book Free Demo Class in Rohtak"
        primaryCtaHref="/contact"
      />

      {/* Overview Cards for IELTS and PTE */}
      <section className="py-16 sm:py-24 bg-surface-gray/50 border-b border-border-subtle">
        <Container>
          <SectionHeading
            kicker="Coaching Modules"
            title="Choose Your Language Proficiency Program"
            subtitle="Explore our specialized training methodologies for IELTS Academic / General and Pearson Test of English (PTE) Academic."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* IELTS Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8 flex flex-col justify-between hover:border-royal-300 hover:shadow-card-hover transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="royal" size="md">
                    IELTS Coaching
                  </Badge>
                  <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                    Band 7.0+ Target
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-navy-950 mb-3">
                  IELTS Preparation (Academic &amp; General)
                </h3>
                <p className="text-sm text-charcoal-600 leading-relaxed mb-6">
                  Comprehensive mastery of Reading, Listening, Writing, and Speaking modules with daily vocabulary expansion, grammar correction, and individual cabin interviews.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "Separate batches for Academic (Study Abroad) & General Training (Immigration)",
                    "1-on-1 daily speaking interview simulation with personalized error notes",
                    "Task 1 report/letter & Task 2 essay structure analysis with band descriptor breakdown",
                    "Weekly full-length mock tests under real examination conditions",
                  ].map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-charcoal-700">
                      <CheckCircle2 className="w-4 h-4 text-royal-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">Morning &amp; Evening Batches</span>
                <Link
                  href="/test-preparation/ielts"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-royal-700 hover:text-royal-800"
                >
                  <span>Explore IELTS Modules</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* PTE Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8 flex flex-col justify-between hover:border-royal-300 hover:shadow-card-hover transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="navy" size="md">
                    PTE Academic
                  </Badge>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                    Score 65+ / 79+ Target
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-navy-950 mb-3">
                  PTE Academic Lab Coaching
                </h3>
                <p className="text-sm text-charcoal-600 leading-relaxed mb-6">
                  High-tech computer lab coaching with AI-scored software practice, proven speaking templates, repeat sentence drills, and dictation banks.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "Individual dedicated computer terminals equipped with noise-canceling headsets",
                    "Official AI scoring algorithm alignment for Speaking oral fluency & pronunciation",
                    "Structured high-scoring templates for Describe Image, Re-tell Lecture & Essays",
                    "Extensive question bank practice: Write from Dictation & Fill in the Blanks",
                  ].map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-charcoal-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">Fast 4 to 6 Week Score Building</span>
                <Link
                  href="/test-preparation/pte"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-royal-700 hover:text-royal-800"
                >
                  <span>Explore PTE Lab</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* IELTS vs PTE Comparison Matrix */}
      <section className="py-16 sm:py-20 bg-white border-b border-border-subtle">
        <Container>
          <SectionHeading
            kicker="Comparative Analysis"
            title="IELTS vs PTE: Which Test Should You Take?"
            subtitle="Understanding key differences in test delivery, evaluation methods, and timeline to make the right choice for your profile."
          />

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-navy-950 text-white">
                  <th className="p-4 font-bold uppercase tracking-wider text-[11px] w-1/4">Key Feature</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-[11px] w-3/8 text-amber-300">IELTS (Academic / General)</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-[11px] w-3/8 text-royal-300">PTE Academic</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-surface-gray/50"}>
                    <td className="p-4 font-bold text-navy-950">{row.feature}</td>
                    <td className="p-4 text-charcoal-700 leading-relaxed">{row.ielts}</td>
                    <td className="p-4 text-charcoal-700 leading-relaxed">{row.pte}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Classroom & Lab Infrastructure in Rohtak */}
      <section className="py-16 sm:py-20 bg-navy-950 text-white border-b border-navy-900">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <Badge variant="amber" size="sm" className="bg-amber-500/20 text-amber-300 border-amber-400/30">
                Rohtak Campus Infrastructure
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Modern Coaching Infrastructure at Sheetal Lifestyle Mall
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Located opposite D-Park in Model Town / Dariyao Nagar area, Rohtak, our state-of-the-art facility features air-conditioned multimedia classrooms, dedicated speaking interview booths, and a high-speed computer testing lab.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-navy-900/80 border border-navy-800">
                  <Headphones className="w-5 h-5 text-amber-400 mb-2" />
                  <h4 className="text-xs font-bold text-white mb-1">Acoustic Audio Lab</h4>
                  <p className="text-[11px] text-slate-400">Headset listening practice with diverse international accents.</p>
                </div>
                <div className="p-4 rounded-xl bg-navy-900/80 border border-navy-800">
                  <Mic className="w-5 h-5 text-royal-400 mb-2" />
                  <h4 className="text-xs font-bold text-white mb-1">Speaking Cabins</h4>
                  <p className="text-[11px] text-slate-400">Private 1-on-1 interview cabins to remove hesitation.</p>
                </div>
                <div className="p-4 rounded-xl bg-navy-900/80 border border-navy-800">
                  <BookOpen className="w-5 h-5 text-emerald-400 mb-2" />
                  <h4 className="text-xs font-bold text-white mb-1">Updated Material</h4>
                  <p className="text-[11px] text-slate-400">Official Cambridge &amp; Pearson question banks and mock tests.</p>
                </div>
                <div className="p-4 rounded-xl bg-navy-900/80 border border-navy-800">
                  <Users className="w-5 h-5 text-purple-400 mb-2" />
                  <h4 className="text-xs font-bold text-white mb-1">Small Batch Sizes</h4>
                  <p className="text-[11px] text-slate-400">Personalized attention with individual doubt clearing sessions.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden border border-navy-800 shadow-2xl">
              <Image
                src="/images/ielts-pte-lab.jpg"
                alt="IELTS & PTE Lab at Guruji Overseas Rohtak"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-navy-950/90 backdrop-blur-md p-3.5 rounded-xl border border-white/10 text-xs">
                <div className="font-bold text-amber-300">Live Lab Sessions: 9:30 AM - 6:30 PM</div>
                <div className="text-slate-300 text-[11px]">Daily guided practice at Sheetal Lifestyle Mall, Rohtak</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <CtaSection
        badge="Start Your Preparation"
        title="Book a Free Diagnostic Assessment & Demo Class"
        subtitle="Visit our Rohtak center today to evaluate your baseline English score and get a customized study schedule designed for your target band."
        primaryButtonText="Book Free Rohtak Demo Class"
        primaryButtonHref="/contact"
      />

      <Footer />
    </div>
  );
}
