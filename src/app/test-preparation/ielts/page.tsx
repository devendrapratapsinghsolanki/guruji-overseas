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
  Award,
  HelpCircle,
  ShieldCheck,
  CalendarCheck,
  FileCheck,
} from "lucide-react";

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { CtaSection } from "@/components/layout/CtaSection";
import { Container, Badge, Button, SectionHeading } from "@/components/ui";
import { COMPANY_INFO } from "@/data/company";

import { constructMetadata, getCourseSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "IELTS Preparation & Coaching in Rohtak | Academic & General Training",
  description:
    "Join the best IELTS preparation institute in Rohtak, Haryana. Comprehensive IELTS Academic & General Training with 1-on-1 daily speaking cabin drills, writing correction, and weekly mock exams.",
  path: "/test-preparation/ielts",
  keywords: [
    "IELTS preparation",
    "IELTS coaching Rohtak",
    "IELTS Academic Training Rohtak",
    "IELTS General Coaching Rohtak",
    "IELTS Speaking Practice Rohtak",
    "IELTS Band 7 Coaching Haryana",
    "Guruji Overseas",
  ],
});

const ieltsSections = [
  {
    icon: Mic,
    title: "Speaking Module",
    duration: "11 - 14 Minutes",
    format: "1-on-1 Face-to-Face Interview with an Examiner",
    desc: "Assesses spoken English fluency, grammatical accuracy, lexical resource (vocabulary), and natural pronunciation across 3 distinct parts.",
    parts: [
      {
        name: "Part 1: Introduction & Everyday Topics",
        detail: "4-5 minutes answering general questions about yourself, your hometown, studies, hobbies, and work.",
      },
      {
        name: "Part 2: Individual Long Turn (Cue Card)",
        detail: "1 minute preparation time followed by 2 minutes of continuous presentation on a structured topic card.",
      },
      {
        name: "Part 3: Two-Way In-Depth Discussion",
        detail: "4-5 minutes answering abstract and analytical questions linked thematically to the Part 2 cue card.",
      },
    ],
    ourApproach: "Daily 1-on-1 speaking drills in sound-isolated cabins with certified trainers, live cue-card ideation drills, and instant feedback.",
  },
  {
    icon: PenTool,
    title: "Writing Module",
    duration: "60 Minutes",
    format: "2 Mandatory Written Tasks (Paper or Computer)",
    desc: "Evaluates Task Achievement, Coherence & Cohesion, Lexical Resource, and Grammatical Range & Accuracy.",
    parts: [
      {
        name: "Task 1 (Academic vs General)",
        detail: "Academic: 150-word report describing a graph, chart, map, or process. General: 150-word formal, semi-formal, or personal letter.",
      },
      {
        name: "Task 2 (Discursive Essay - Academic & General)",
        detail: "250-word formal essay responding to an argument, problem-solution, advantage-disadvantage, or opinion prompt.",
      },
    ],
    ourApproach: "Paragraph-by-paragraph structuring blueprints, complex sentence formation drills, high-band vocabulary substitution, and daily essay evaluation.",
  },
  {
    icon: BookOpen,
    title: "Reading Module",
    duration: "60 Minutes",
    format: "40 Questions based on 3 Long Academic / General Passages",
    desc: "Tests ability to read for gist, main ideas, detail, skimming, scanning, logical argument, and recognizing writer's attitudes and opinions.",
    parts: [
      {
        name: "Question Types",
        detail: "True / False / Not Given, Yes / No / Not Given, Heading Matching, Summary Completion, Multiple Choice, Diagram Labeling.",
      },
      {
        name: "Academic vs General Content",
        detail: "Academic passages sourced from journals, books, and science magazines; General passages drawn from workplace notices and timetables.",
      },
    ],
    ourApproach: "Timed skimming and scanning drills, keyword identification techniques, elimination strategies for True/False/Not Given questions.",
  },
  {
    icon: Headphones,
    title: "Listening Module",
    duration: "30 Minutes (+ 10 mins transfer time on paper)",
    format: "40 Questions based on 4 Audio Recordings",
    desc: "Measures ability to understand main ideas, detailed factual information, opinions, and follow development of an argument with international accents.",
    parts: [
      {
        name: "Recordings 1 & 2: Social Context",
        detail: "Section 1: A conversation between two speakers in an everyday social context. Section 2: A monologue set in an everyday context (e.g. speech about local facilities).",
      },
      {
        name: "Recordings 3 & 4: Educational Context",
        detail: "Section 3: A conversation between up to four people in an academic training context. Section 4: A university academic lecture monologue.",
      },
    ],
    ourApproach: "Acoustic headphone lab sessions, accent familiarization drills (British, Australian, American, Canadian), spelling accuracy audits, and speed prediction tactics.",
  },
];

const bandDescriptorScale = [
  { band: "Band 9.0", level: "Expert User", desc: "Full operational command; fluent, accurate, and completely articulate." },
  { band: "Band 8.0 - 8.5", level: "Very Good User", desc: "Occasional unsystematic inaccuracies; handles complex detailed argumentation well." },
  { band: "Band 7.0 - 7.5", level: "Good User (Target)", desc: "Generally handles complex language well and understands detailed reasoning." },
  { band: "Band 6.0 - 6.5", level: "Competent User (Minimum SDS)", desc: "Generally effective command with some inaccuracies; understands fairly complex language." },
  { band: "Band 5.0 - 5.5", level: "Modest User", desc: "Partial command; likely to make mistakes in complex situations." },
];

export default function IeltsPreparationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Test Preparation", href: "/test-preparation" },
          { label: "IELTS Coaching" },
        ]}
        badge="Official IDP / British Council Aligned"
        title="Comprehensive IELTS Coaching in Rohtak"
        subtitle="Master the International English Language Testing System (IELTS) with structured modular curriculum, 1-on-1 speaking interview cabins, and rigorous weekly mock tests at Guruji Overseas Rohtak."
        stats={[
          { label: "Modules Covered", value: "All 4 Modules" },
          { label: "Speaking Drills", value: "Daily 1-on-1 Cabins" },
          { label: "Target Band", value: "Band 7.0 - 8.0+" },
          { label: "Mock Tests", value: "Weekly Full Mocks" },
        ]}
        primaryCtaText="Book Free IELTS Demo Class"
        primaryCtaHref="/contact"
      />

      {/* Academic vs General Training Overview */}
      <section className="py-16 sm:py-20 bg-white border-b border-border-subtle">
        <Container>
          <SectionHeading
            kicker="Choose Your Module"
            title="IELTS Academic vs IELTS General Training"
            subtitle="Understand which version of the exam aligns with your overseas education or immigration goals."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-7 sm:p-8 rounded-2xl border border-slate-200 bg-surface-gray flex flex-col justify-between">
              <div>
                <Badge variant="royal" size="sm" className="mb-3">
                  Study Abroad Track
                </Badge>
                <h3 className="text-xl font-bold text-navy-950 mb-3">
                  IELTS Academic
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6">
                  Required for students applying for undergraduate, postgraduate, diploma, or doctorate degrees at universities and colleges in Canada, UK, Australia, New Zealand, USA, and Germany.
                </p>

                <div className="space-y-2.5 text-xs text-charcoal-700 mb-6">
                  <div className="font-bold text-navy-950">Key Distinctive Features:</div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-royal-600 shrink-0 mt-0.5" />
                    <span>Writing Task 1: Academic data/graph report or process diagram</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-royal-600 shrink-0 mt-0.5" />
                    <span>Reading: 3 long scientific, historical, or analytical texts</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-royal-600 shrink-0 mt-0.5" />
                    <span>Standard benchmark: Overall 6.5 with no band less than 6.0</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-royal-700 hover:text-royal-800"
                >
                  <span>Enquire for Academic Batch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="p-7 sm:p-8 rounded-2xl border border-slate-200 bg-surface-gray flex flex-col justify-between">
              <div>
                <Badge variant="navy" size="sm" className="mb-3">
                  Work &amp; Migration Track
                </Badge>
                <h3 className="text-xl font-bold text-navy-950 mb-3">
                  IELTS General Training
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6">
                  Required for professionals applying for immigration, permanent residency (Canada Express Entry / Australia PR), secondary education, and employment-linked visas overseas.
                </p>

                <div className="space-y-2.5 text-xs text-charcoal-700 mb-6">
                  <div className="font-bold text-navy-950">Key Distinctive Features:</div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Writing Task 1: Formal, semi-formal, or personal correspondence letter</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Reading: Workplace notices, brochures, and short commercial articles</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Target CLB 9: Listening 8.0, Reading 7.0, Writing 7.0, Speaking 7.0</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-royal-700 hover:text-royal-800"
                >
                  <span>Enquire for General Batch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4 In-Depth Sections Breakdown */}
      <section className="py-16 sm:py-24 bg-surface-gray/50 border-b border-border-subtle">
        <Container>
          <SectionHeading
            kicker="Exam Breakdown"
            title="The 4 IELTS Exam Modules &amp; Guruji Overseas Coaching Methodology"
            subtitle="Every module is addressed through deliberate practice, diagnostic scoring, and targeted error correction."
          />

          <div className="space-y-8">
            {ieltsSections.map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-subtle hover:border-royal-200 transition-all"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-slate-100 mb-6">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-navy-950">{sec.title}</h3>
                        <div className="text-xs text-slate-500">{sec.format}</div>
                      </div>
                    </div>
                    <Badge variant="amber" size="md">
                      Duration: {sec.duration}
                    </Badge>
                  </div>

                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6">
                    {sec.desc}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {sec.parts.map((p, pIdx) => (
                      <div key={pIdx} className="p-4 rounded-xl bg-surface-gray text-xs border border-slate-100">
                        <div className="font-bold text-navy-950 mb-1">{p.name}</div>
                        <div className="text-charcoal-600 leading-relaxed">{p.detail}</div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-royal-50/70 border border-royal-100 text-xs text-charcoal-800 flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-royal-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-royal-900">Guruji Overseas Coaching Strategy: </span>
                      <span>{sec.ourApproach}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Preparation Approach & Mock Tests */}
      <section className="py-16 sm:py-20 bg-navy-950 text-white border-b border-navy-900">
        <Container>
          <div className="max-w-3xl mb-12">
            <Badge variant="amber" size="sm" className="mb-3 bg-amber-500/20 text-amber-300 border-amber-400/30">
              Coaching Methodology
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Our 4-Stage IELTS Score Building Approach
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Designed to take candidates from baseline proficiency to band 7.0+ within 4 to 8 weeks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "Stage 1",
                title: "Diagnostic Baseline Assessment",
                desc: "Full baseline test to identify specific weaknesses across vocabulary, listening speed, grammar, or speaking fluency.",
              },
              {
                step: "Stage 2",
                title: "Conceptual Skill Building",
                desc: "Deep-dive into sentence variety, complex connectors, essay templates, skimming techniques, and phonetic pronunciation.",
              },
              {
                step: "Stage 3",
                title: "Daily Speaking & Writing Drills",
                desc: "1-on-1 speaking interview cabin practice with live feedback and detailed line-by-line writing essay corrections.",
              },
              {
                step: "Stage 4",
                title: "Full-Length Exam Simulation",
                desc: "Timed weekly mock tests under strict exam conditions to eliminate exam day anxiety and optimize time management.",
              },
            ].map((st, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-navy-900/70 border border-navy-800 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">{st.step}</div>
                  <h3 className="text-base font-bold text-white mb-2">{st.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Band Score Scale Reference */}
      <section className="py-16 sm:py-20 bg-white border-b border-border-subtle">
        <Container>
          <SectionHeading
            kicker="Scoring Guide"
            title="IELTS 9-Band Scale &amp; Performance Descriptors"
            subtitle="How official IELTS examiners evaluate your language performance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bandDescriptorScale.map((b, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-slate-200 bg-surface-gray flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base font-black text-royal-700">{b.band}</span>
                    <span className="text-[11px] font-bold text-slate-500 uppercase">{b.level}</span>
                  </div>
                  <p className="text-xs text-charcoal-600 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* IELTS FAQs */}
      <section className="py-16 sm:py-20 bg-surface-gray/50 border-b border-border-subtle">
        <Container size="narrow">
          <SectionHeading
            kicker="FAQ"
            title="Frequently Asked Questions about IELTS"
            subtitle="Common questions asked by students preparing for IELTS in Rohtak."
          />

          <div className="space-y-4">
            {[
              {
                q: "What is the difference between Paper-based and Computer-delivered IELTS?",
                a: "Both tests feature the exact same question types, difficulty level, and scoring. In computer-delivered IELTS, you type your writing tasks and enter reading/listening answers on a computer, receiving results within 3-5 days. Speaking remains a face-to-face interview for both.",
              },
              {
                q: "How long is an IELTS scorecard valid?",
                a: "An official IELTS scorecard is valid for 2 years from the date of the examination for both study permits and immigration applications.",
              },
              {
                q: "How often can I retake the IELTS exam if I don't achieve my desired band?",
                a: "There are no restrictions on how often you can take IELTS. You can register for the next available test date whenever you feel prepared. You can also take One Skill Retake (OSR) for a single module in computer-delivered IELTS.",
              },
              {
                q: "What is the typical batch duration at Guruji Overseas Rohtak?",
                a: "Our standard IELTS preparation programs run for 4 weeks (Fast-Track) to 8 weeks (Comprehensive), with morning, afternoon, and evening batches to suit students and working professionals.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle">
                <h3 className="text-sm sm:text-base font-bold text-navy-950 mb-2 flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-royal-600 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed pl-6.5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <CtaSection
        badge="Rohtak Classroom & Cabin Coaching"
        title="Achieve Your Target IELTS Band with Guruji Overseas"
        subtitle="Visit our coaching center at Sheetal Lifestyle Mall, Opposite D-Park, Rohtak for a free diagnostic test and trial class."
        primaryButtonText="Book Free IELTS Trial Class"
        primaryButtonHref="/contact"
      />

      <Footer />
    </div>
  );
}
