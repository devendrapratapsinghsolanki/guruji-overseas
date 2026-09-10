import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Plane,
  HeartHandshake,
  FileCheck,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Clock,
  Building2,
  CalendarCheck,
  AlertCircle,
} from "lucide-react";

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { CtaSection } from "@/components/layout/CtaSection";
import { Container, Badge, Button, SectionHeading } from "@/components/ui";
import { COMPANY_INFO } from "@/data/company";

import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Student Visa Guidance & Immigration Services in Rohtak",
  description:
    "Transparent visa assistance from Guruji Overseas Rohtak. Specialized guidance for Student Visas, Visitor Visas, and Dependent/Spouse Visas for Canada, UK, Australia, New Zealand, USA, and Germany.",
  path: "/visa-services",
  keywords: [
    "Student visa guidance",
    "Student Visa Consultant Rohtak",
    "Visitor Visa Assistance Rohtak",
    "Spouse Visa Consultant Rohtak",
    "Canada Study Permit Rohtak",
    "UK Student Visa Guidance Rohtak",
    "Overseas education consultancy",
    "Guruji Overseas",
  ],
});

const visaCategories = [
  {
    id: "student-visa",
    icon: GraduationCap,
    title: "Student Visa Assistance",
    badge: "Primary Service",
    href: "/visa-services/student-visa",
    desc: "Complete filing assistance for higher education study permits across Canada (SDS/Non-SDS), UK (Student Route), Australia (Subclass 500), New Zealand, USA (F-1), and Germany (National Visa).",
    highlights: [
      "Verification of official Letter of Acceptance / CAS / I-20 / CoE",
      "Financial proof audit, bank balance checks & education loan vetting",
      "Academic Statement of Purpose (SOP) drafting with home-tie justification",
      "1-on-1 embassy mock interview preparation drills",
    ],
  },
  {
    id: "visitor-visa",
    icon: Plane,
    title: "Visitor & Travel Visa Guidance",
    badge: "Family & Tourism",
    href: "/visa-services/visitor-visa",
    desc: "Application guidance for parents attending university convocation ceremonies, family reunions, exploratory visits, and tourist travel across North America, Europe, and Australasia.",
    highlights: [
      "Invitation & sponsorship letter structuring and alignment",
      "Strong home-country ties and leave justification documentation",
      "Detailed travel itinerary and financial maintenance scrutiny",
      "Biometrics appointment scheduling and document tracking",
    ],
  },
  {
    id: "dependent-visa",
    icon: HeartHandshake,
    title: "Dependent / Spouse Visa Guidance",
    badge: "Family Reunification",
    href: "/visa-services/dependent-visa",
    desc: "Support for spouses and minor dependent children seeking to accompany or join primary international students studying overseas.",
    highlights: [
      "Genuine relationship evidence and marriage documentation audit",
      "Primary student applicant enrollment and accommodation proof",
      "Living cost maintenance and source of funds verification",
      "Consular interview readiness and submission compliance",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Profile & Document Scrutiny",
    desc: "Thorough review of academic transcripts, admission letters, gap years, and passport validity.",
  },
  {
    step: "02",
    title: "Financial Audit & Source of Funds",
    desc: "Verifying liquid bank deposits, GIC / Blocked Accounts, loan sanctions, and sponsor ITR records.",
  },
  {
    step: "03",
    title: "SOP & Cover Letter Structuring",
    desc: "Drafting personalized academic Statements of Purpose establishing genuine intent and strong ties to India.",
  },
  {
    step: "04",
    title: "Medical & Biometrics Scheduling",
    desc: "Coordinating upfront medical examinations at empaneled clinics and VFS Global biometrics slots.",
  },
  {
    step: "05",
    title: "Consular Mock Interview Drills",
    desc: "Rigorous 1-on-1 mock interviews simulating high commission questions for USA, UK, and Australia.",
  },
  {
    step: "06",
    title: "Application Lodging & Tracking",
    desc: "Accurate online portal submission, tracking application status, and managing pre-departure arrangements.",
  },
];

export default function VisaServicesOverviewPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <PageHero
        breadcrumbs={[{ label: "Visa Services" }]}
        badge="Accurate & Compliant Guidance"
        title="Comprehensive Visa Guidance & Document Scrutiny"
        subtitle="Navigating international visa regulations requires rigorous accuracy. Guruji Overseas provides meticulous file preparation, financial verification, and interview readiness conforming strictly to high commission guidelines."
        stats={[
          { label: "Visa Categories", value: "Student, Visitor, Spouse" },
          { label: "Country Coverage", value: "6 Major Nations" },
          { label: "Interview Prep", value: "1-on-1 Mock Drills" },
          { label: "Ethical Policy", value: "100% Genuine Files" },
        ]}
        primaryCtaText="Book Free Visa Consultation"
        primaryCtaHref="/contact"
      />

      {/* 3 Core Visa Categories */}
      <section className="py-16 sm:py-24 bg-surface-gray/50 border-b border-border-subtle">
        <Container>
          <SectionHeading
            kicker="Visa Assistance Categories"
            title="Specialized Visa Guidance Services"
            subtitle="Explore our structured advisory solutions for prospective international students, accompanying families, and visitor applicants."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visaCategories.map((visa) => {
              const Icon = visa.icon;
              return (
                <div
                  key={visa.id}
                  className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8 flex flex-col justify-between hover:border-royal-300 hover:shadow-card-hover transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <Badge variant="navy" size="sm">
                        {visa.badge}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold text-navy-950 mb-3">
                      {visa.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6">
                      {visa.desc}
                    </p>

                    <div className="space-y-2.5 mb-6">
                      <span className="text-[11px] font-bold text-charcoal-800 uppercase tracking-wider block">
                        Key Advisory Focus:
                      </span>
                      {visa.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-charcoal-700">
                          <CheckCircle2 className="w-4 h-4 text-royal-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500">Procedural review</span>
                    <Link
                      href={visa.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-royal-700 hover:text-royal-800"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 6-Stage Visa Application Workflow */}
      <section className="py-16 sm:py-20 bg-navy-950 text-white border-b border-navy-900">
        <Container>
          <div className="max-w-3xl mb-12">
            <Badge variant="amber" size="sm" className="mb-3 bg-amber-500/20 text-amber-300 border-amber-400/30">
              Structured Compliance
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Our 6-Stage Visa Filing Methodology
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              A multi-tier verification process designed to ensure complete accuracy, eliminate paperwork errors, and present a compelling genuine case.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((st) => (
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

      {/* Ethical Transparency Policy Notice */}
      <section className="py-16 sm:py-20 bg-white border-b border-border-subtle">
        <Container>
          <div className="p-8 rounded-2xl bg-surface-gray border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4 max-w-3xl">
              <ShieldCheck className="w-8 h-8 text-royal-600 shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-navy-950 mb-2">
                  Our Ethical Visa Transparency Policy
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  Visa decisions are made strictly and solely by official consular officers representing respective government high commissions and embassies. Guruji Overseas guarantees thorough document scrutiny, financial audit, and professional mock interview preparation. We strictly prohibit fraudulent paperwork and never make false guarantees.
                </p>
              </div>
            </div>
            <Button variant="royal" size="md" href="/contact" className="shrink-0 font-semibold">
              Book File Review
            </Button>
          </div>
        </Container>
      </section>

      {/* Visa FAQs */}
      <section className="py-16 sm:py-20 bg-surface-gray/50 border-b border-border-subtle">
        <Container size="narrow">
          <SectionHeading
            kicker="FAQ"
            title="Frequently Asked Questions on Visa Guidance"
            subtitle="Understand common questions regarding visas, documentation, and processing timelines."
          />

          <div className="space-y-4">
            {[
              {
                q: "What should I do if my previous student visa was refused?",
                a: "A refusal is not the end of the road. We review your official refusal letter and previously submitted file (or ATIP notes for Canada) to identify gaps in home ties, financial justification, or SOP rationale, and structure a compliant reapplication.",
              },
              {
                q: "How early should I begin preparing my student visa file?",
                a: "We recommend initiating visa documentation 3 to 4 months prior to your program start date to allow ample time for medical examinations, financial seasoning, biometrics, and consular processing.",
              },
              {
                q: "Do parents need a separate visa to attend their child's graduation abroad?",
                a: "Yes, parents require a Visitor / Temporary Resident Visa. We assist with convocation invitation letters, university verification, accommodation evidence, and financial sponsorship structuring.",
              },
              {
                q: "Does Guruji Overseas charge upfront assessment fees?",
                a: "Initial profile assessment and eligibility evaluation are conducted free of charge at our Rohtak office.",
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
        badge="Direct Rohtak Office Advisory"
        title="Get Your Visa Documentation Audited by Experts"
        subtitle="Visit Guruji Overseas at Sheetal Lifestyle Mall, Opposite D-Park, Rohtak for an honest, confidential document evaluation."
        primaryButtonText="Book In-Person File Review"
        primaryButtonHref="/contact"
      />

      <Footer />
    </div>
  );
}
