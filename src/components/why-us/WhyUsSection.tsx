import React from "react";
import {
  UserCheck,
  BookOpenCheck,
  Compass,
  FileCheck2,
  ShieldCheck,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";
import { Container, SectionHeading, Badge } from "@/components/ui";

const principles = [
  {
    id: "personal",
    num: "01",
    icon: UserCheck,
    title: "Personalised Guidance",
    summary:
      "No mass counseling or generic advice. We sit down with each candidate and their family to understand academic history, financial planning, and long-term career intent.",
    details: [
      "In-depth academic profile evaluation",
      "Realistic discussion on budget and living costs",
      "Direct 1-on-1 advisor accessibility",
    ],
    highlight: "Individualized roadmaps tailored to your genuine potential.",
    featured: true,
  },
  {
    id: "exam",
    num: "02",
    icon: BookOpenCheck,
    title: "Exam Preparation",
    summary:
      "In-house classroom coaching for IELTS & PTE with computer practice labs and continuous mock evaluations so students achieve required test cut-offs without guesswork.",
    details: ["Daily speaking practice", "Diagnostic score tracking"],
    featured: false,
  },
  {
    id: "course-uni",
    num: "03",
    icon: Compass,
    title: "Course & University Guidance",
    summary:
      "Objective shortlisting based on genuine university recognition, post-study work regulations, and employability rather than arbitrary promotional lists.",
    details: ["Accredited colleges & universities", "Intake deadline tracking"],
    featured: false,
  },
  {
    id: "application",
    num: "04",
    icon: FileCheck2,
    title: "Application Support",
    summary:
      "Systematic submission management ensuring academic transcripts, application fee submissions, and university follow-ups are completed punctually.",
    details: ["Error-free submission reviews", "Direct institution communication"],
    featured: false,
  },
  {
    id: "documentation",
    num: "05",
    icon: ShieldCheck,
    title: "Documentation Assistance",
    summary:
      "Meticulous verification of statements of purpose (SOP), letters of recommendation, affidavits, and financial justification proofs.",
    details: ["Strict compliance standards", "Proofreading & integrity checks"],
    featured: false,
  },
  {
    id: "visa",
    num: "06",
    icon: HeartHandshake,
    title: "Visa Guidance",
    summary:
      "Step-by-step guidance conforming to current high commission rules. Mock interview drills prepare students for visa officer questions with calm confidence.",
    details: [
      "Detailed file audits prior to submission",
      "Embassy interview preparation sessions",
      "Biometric and medical appointment assistance",
    ],
    highlight: "Thorough procedural rigor without making false promises or guarantees.",
    featured: true,
  },
];

export function WhyUsSection() {
  const featuredPrinciples = principles.filter((p) => p.featured);
  const standardPrinciples = principles.filter((p) => !p.featured);

  return (
    <section className="py-20 lg:py-28 bg-surface-gray/60 border-b border-border-subtle">
      <Container>
        <SectionHeading
          kicker="Our Core Approach"
          title="Why Students & Parents Trust Guruji Overseas"
          subtitle="Our six foundational pillars reflect an uncompromising commitment to thoroughness, ethical advisory, and practical support from Rohtak."
        />

        {/* Asymmetric Layout:
            Row 1: Two Featured Comprehensive Pillars (Personalised Guidance & Visa Guidance)
            Row 2: Four Precision Pillars (Exam, University, Application, Documentation)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {featuredPrinciples.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="lg:col-span-6 rounded-xl border border-border-subtle bg-white p-7 lg:p-8 flex flex-col justify-between shadow-subtle hover:border-slate-300 hover:shadow-card transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-royal-600 bg-royal-50 px-2.5 py-1 rounded">
                      Principle {item.num}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-navy-50 text-navy-900 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-navy-950 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal-600 leading-relaxed mb-6">
                    {item.summary}
                  </p>

                  <div className="space-y-2 mb-6">
                    {item.details.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-charcoal-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-royal-600 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-surface-gray border border-border-subtle text-xs text-navy-900 font-medium">
                  {item.highlight}
                </div>
              </div>
            );
          })}
        </div>

        {/* Row 2: 4 Supporting Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {standardPrinciples.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="rounded-lg border border-border-subtle bg-white p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-card transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-bold text-slate-400">
                      {item.num}
                    </span>
                    <div className="w-8 h-8 rounded bg-surface-gray text-navy-900 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-navy-950 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-charcoal-600 leading-relaxed mb-4">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-1">
                  {item.details.map((d, i) => (
                    <div key={i} className="text-[11px] text-slate-500 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-royal-600 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
