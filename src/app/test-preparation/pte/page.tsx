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
  Monitor,
  Cpu,
} from "lucide-react";

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { CtaSection } from "@/components/layout/CtaSection";
import { Container, Badge, Button, SectionHeading } from "@/components/ui";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "PTE Academic Coaching in Rohtak | Computer Lab & AI Mock Tests | Guruji Overseas",
  description:
    "Top PTE Academic coaching institute in Rohtak with a dedicated computer lab. Master Speaking, Writing, Reading & Listening with proven high-scoring templates, AI software scoring, and weekly mock exams.",
  keywords: [
    "PTE Coaching Rohtak",
    "PTE Academic Classes Rohtak",
    "PTE Lab Rohtak Haryana",
    "PTE 79 Score Coaching",
    "Pearson Test of English Rohtak",
    "Guruji Overseas Rohtak",
  ],
};

const pteSections = [
  {
    icon: Mic,
    title: "Speaking & Writing (Integrated)",
    duration: "54 - 67 Minutes",
    format: "Computer Terminal with Headset & AI Automated Evaluation",
    desc: "Combines oral fluency, pronunciation accuracy, content coverage, and written grammar in a fast-paced interactive series.",
    tasks: [
      {
        name: "Read Aloud",
        desc: "Read a short 60-word academic passage aloud into the microphone. Key criteria: Oral Fluency & Pronunciation.",
      },
      {
        name: "Repeat Sentence",
        desc: "Listen to a 3-9 second audio sentence and repeat it exactly. Tests short-term listening memory and natural cadence.",
      },
      {
        name: "Describe Image",
        desc: "Speak for 40 seconds analyzing a graph, bar chart, map, or process flowchart using structured templates.",
      },
      {
        name: "Re-tell Lecture",
        desc: "Listen to a 60-90 second academic lecture and summarize the key ideas into the microphone within 40 seconds.",
      },
      {
        name: "Summarize Written Text",
        desc: "Read a 300-word passage and summarize it into a single grammatical sentence of 5-75 words within 10 minutes.",
      },
      {
        name: "Write Essay",
        desc: "Write a 200-300 word formal argumentative essay in 20 minutes adhering to clear structure and vocabulary.",
      },
    ],
  },
  {
    icon: BookOpen,
    title: "Reading Module",
    duration: "29 - 30 Minutes",
    format: "Academic Texts & Collocation Tests",
    desc: "Evaluates contextual vocabulary, grammar rules, collocations, and paragraph cohesion.",
    tasks: [
      {
        name: "Reading & Writing: Fill in the Blanks",
        desc: "Select the most appropriate word from dropdown lists within a passage. Crucial for both reading and writing scores.",
      },
      {
        name: "Re-order Paragraphs",
        desc: "Drag and drop shuffled sentences into correct logical chronological and discursive order.",
      },
      {
        name: "Reading: Fill in the Blanks (Drag & Drop)",
        desc: "Drag words from a bottom bank to fill blank spaces in a passage.",
      },
      {
        name: "Multiple Choice (Single & Multiple Answers)",
        desc: "Analyze passage intent, tone, and specific factual assertions.",
      },
    ],
  },
  {
    icon: Headphones,
    title: "Listening Module",
    duration: "30 - 43 Minutes",
    format: "Integrated Audio & Typing Tasks",
    desc: "Tests ability to extract key details, spell accurately, and synthesize spoken language.",
    tasks: [
      {
        name: "Summarize Spoken Text",
        desc: "Listen to a 60-90 second audio track and write a 50-70 word summary in 10 minutes.",
      },
      {
        name: "Write from Dictation (High Weightage)",
        desc: "Listen to a short sentence and type it exactly with zero spelling or grammatical errors. Crucial for 79+ scores.",
      },
      {
        name: "Highlight Incorrect Words",
        desc: "Read a transcript while listening to audio and click words that differ from the spoken text.",
      },
      {
        name: "Fill in the Blanks (Listening)",
        desc: "Type missing words directly into blanks while listening to an audio recording.",
      },
    ],
  },
];

const concordanceTable = [
  { pte: "PTE 79 - 90", ielts: "IELTS Band 8.0 - 9.0", desc: "Superior English (Maximum PR points / Ivy League / Top Masters)" },
  { pte: "PTE 65 - 78", ielts: "IELTS Band 7.0 - 7.5", desc: "Proficient English (Top Global University Master's Degrees)" },
  { pte: "PTE 58 - 64", ielts: "IELTS Band 6.5", desc: "Competent English (Canada SDS / UK / Australia Bachelors & Masters)" },
  { pte: "PTE 50 - 57", ielts: "IELTS Band 6.0", desc: "Standard Undergraduate / Diploma Entry Requirement" },
  { pte: "PTE 42 - 49", ielts: "IELTS Band 5.5", desc: "Foundation / Pathway Entry" },
];

export default function PtePreparationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Test Preparation", href: "/test-preparation" },
          { label: "PTE Academic" },
        ]}
        badge="Pearson Certified Lab Coaching"
        title="PTE Academic Coaching in Rohtak"
        subtitle="Master the 2-hour Pearson Test of English with state-of-the-art computer lab terminals, proven AI-scoring templates, repeat sentence drills, and dictation banks at Guruji Overseas Rohtak."
        stats={[
          { label: "Lab System", value: "Dedicated PC Lab" },
          { label: "Scoring Engine", value: "AI Scoring Aligned" },
          { label: "Exam Duration", value: "Fast 2-Hour Format" },
          { label: "Result Speed", value: "24 - 48 Hours" },
        ]}
        primaryCtaText="Book Free PTE Lab Demo"
        primaryCtaHref="/contact"
      />

      {/* PTE Overview & Unique Advantages */}
      <section className="py-16 sm:py-20 bg-white border-b border-border-subtle">
        <Container>
          <SectionHeading
            kicker="The 2-Hour AI Test"
            title="Why Students Choose PTE Academic"
            subtitle="Explore the key structural advantages that make PTE a top choice for study abroad and migration applicants."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Cpu,
                title: "100% Objective AI Scoring",
                desc: "No human bias. Evaluated by Pearson's patented automated scoring algorithm for unbiased fairness.",
              },
              {
                icon: Clock,
                title: "Fast 2-Hour Sitting",
                desc: "Complete all 4 skills in one seamless 2-hour session without waiting for a separate speaking interview day.",
              },
              {
                icon: Sparkles,
                title: "Rapid Result Delivery",
                desc: "Results are typically available online within 24 to 48 hours of completing the test.",
              },
              {
                icon: Monitor,
                title: "Universal Global Acceptance",
                desc: "Accepted by 100% of Australian & NZ universities/visas, UK universities, Canada SDS, and top US colleges.",
              },
            ].map((adv, idx) => {
              const Icon = adv.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-slate-200 bg-surface-gray flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-navy-950 text-amber-400 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-navy-950 mb-2">{adv.title}</h3>
                    <p className="text-xs text-charcoal-600 leading-relaxed">{adv.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Comprehensive PTE Sections Breakdown */}
      <section className="py-16 sm:py-24 bg-surface-gray/50 border-b border-border-subtle">
        <Container>
          <SectionHeading
            kicker="Exam Blueprint"
            title="PTE Academic Structure &amp; High-Score Tactics"
            subtitle="A granular breakdown of all 20 question types and proven strategies taught at our Rohtak center."
          />

          <div className="space-y-8">
            {pteSections.map((sec, idx) => {
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
                    <Badge variant="navy" size="md">
                      Duration: {sec.duration}
                    </Badge>
                  </div>

                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6">
                    {sec.desc}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sec.tasks.map((task, tIdx) => (
                      <div key={tIdx} className="p-4 rounded-xl bg-surface-gray text-xs border border-slate-100 flex flex-col justify-between">
                        <div>
                          <div className="font-bold text-navy-950 mb-1">{task.name}</div>
                          <div className="text-charcoal-600 leading-relaxed">{task.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Rohtak Computer Lab & Software Practice */}
      <section className="py-16 sm:py-20 bg-navy-950 text-white border-b border-navy-900">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <Badge variant="amber" size="sm" className="bg-amber-500/20 text-amber-300 border-amber-400/30">
                Hi-Tech Computer Lab
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Train on Real Pearson-Simulated Software
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                PTE success requires regular typing practice, microphone familiarity, and software mock simulations. At Guruji Overseas Rohtak, every student trains in our dedicated computer lab with individual PC terminals.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Official Pearson mock test software with automated AI scorecards",
                  "Noise-canceling gaming headsets matching official test center hardware",
                  "High-frequency Write from Dictation and Repeat Sentence question banks",
                  "Template mastery for Describe Image and Re-tell Lecture to maximize oral fluency",
                  "Daily typing speed improvement drills for Writing and Dictation sections",
                ].map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden border border-navy-800 shadow-2xl">
              <Image
                src="/images/ielts-pte-lab.jpg"
                alt="PTE Computer Lab at Guruji Overseas Rohtak"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-navy-950/90 backdrop-blur-md p-3.5 rounded-xl border border-white/10 text-xs">
                <div className="font-bold text-amber-300">Dedicated PTE Terminals</div>
                <div className="text-slate-300 text-[11px]">Sheetal Lifestyle Mall, Opp. D-Park, Rohtak</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PTE vs IELTS Concordance Chart */}
      <section className="py-16 sm:py-20 bg-white border-b border-border-subtle">
        <Container>
          <SectionHeading
            kicker="Score Concordance"
            title="PTE Score vs IELTS Band Concordance Chart"
            subtitle="Official Pearson concordance alignment for university admissions and visa thresholds."
          />

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-navy-950 text-white">
                  <th className="p-4 font-bold uppercase tracking-wider text-[11px] text-amber-300">PTE Score (10-90)</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-[11px] text-royal-300">IELTS Band Equivalent</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-[11px]">Academic &amp; Visa Benchmark</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {concordanceTable.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-surface-gray/50"}>
                    <td className="p-4 font-bold text-navy-950">{row.pte}</td>
                    <td className="p-4 font-semibold text-royal-700">{row.ielts}</td>
                    <td className="p-4 text-charcoal-700 leading-relaxed">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* PTE FAQs */}
      <section className="py-16 sm:py-20 bg-surface-gray/50 border-b border-border-subtle">
        <Container size="narrow">
          <SectionHeading
            kicker="FAQ"
            title="Frequently Asked Questions about PTE"
            subtitle="Everything you need to know about preparing for and booking your PTE exam."
          />

          <div className="space-y-4">
            {[
              {
                q: "Is PTE accepted for Canada Student Direct Stream (SDS) visa?",
                a: "Yes! Immigration, Refugees and Citizenship Canada (IRCC) officially accepts PTE Academic for the Student Direct Stream (SDS) study permit applications with a minimum score of 60.",
              },
              {
                q: "How fast do PTE exam results come out?",
                a: "PTE Academic results are remarkably fast, typically delivered within 24 to 48 hours of exam completion directly to your Pearson portal.",
              },
              {
                q: "What is the secret to scoring 79+ in PTE Speaking?",
                a: "Maintaining consistent oral fluency (uninterrupted speech rate) and clear acoustic pronunciation into the microphone is critical. At Guruji Overseas Rohtak, we drill template structures that maximize algorithm fluency scores.",
              },
              {
                q: "Can I practice on computer terminals at Guruji Overseas Rohtak?",
                a: "Yes, our coaching program includes unlimited lab practice hours on dedicated PC terminals with official Pearson mock tests and software question banks.",
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
        badge="Rohtak PTE Lab Practice"
        title="Score 65+ or 79+ in PTE with Guruji Overseas"
        subtitle="Visit our computer lab at Sheetal Lifestyle Mall, Opposite D-Park, Rohtak for a free diagnostic mock test and lab demonstration."
        primaryButtonText="Book Free PTE Lab Demo"
        primaryButtonHref="/contact"
      />

      <Footer />
    </div>
  );
}
