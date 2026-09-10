import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  HeartHandshake,
  FileCheck,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Clock,
  Building2,
  Users,
  CalendarCheck,
  AlertCircle,
} from "lucide-react";

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { CtaSection } from "@/components/layout/CtaSection";
import { Container, Badge, Button, SectionHeading } from "@/components/ui";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Dependent & Spouse Visa Assistance in Rohtak | Guruji Overseas",
  description:
    "Expert spouse and dependent visa filing for Canada, UK, Australia, New Zealand, USA, and Germany. Comprehensive marriage documentation review, financial maintenance audit, and consular filing from Rohtak.",
  keywords: [
    "Spouse Visa Consultant Rohtak",
    "Dependent Visa Assistance Rohtak",
    "Canada Spousal Open Work Permit Rohtak",
    "Australia Dependent Student Visa Rohtak",
    "UK Dependant Visa Rohtak",
    "Guruji Overseas Rohtak",
  ],
};

const dependentCountryPolicies = [
  {
    country: "Canada",
    flag: "🇨🇦",
    category: "Spousal Open Work Permit (SOWP) / Visitor",
    policy: "Under updated IRCC regulations, spouses of international students in eligible Master's, Doctoral, or designated professional degree programs are eligible to apply for a Spousal Open Work Permit.",
    requirements: "Official Marriage Certificate, student's Master's enrollment verification, accommodation proof, joint photos, financial maintenance.",
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    category: "Subclass 500 Subsequent Entrant / Concurrent",
    policy: "Spouses of primary international students can be included concurrently or apply subsequently, with permitted work entitlements aligned to the student's study level.",
    requirements: "Registered Marriage Certificate, evidence of genuine ongoing relationship, additional living cost evidence (approx. AUD 10,394/yr), OSHC couple cover.",
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    category: "Student Route Dependant Visa",
    policy: "International students enrolled in postgraduate research programs (PhD / research-based Master's) or government-sponsored courses can bring accompanying dependants.",
    requirements: "Marriage Certificate, tuberculosis test certificate, relationship history proof, £6,120 living maintenance proof held for 28 days.",
  },
  {
    country: "New Zealand",
    flag: "🇳🇿",
    category: "Partner of a Student Work Visa",
    policy: "Spouses of students enrolled in recognized Level 9 Master's, Level 10 Doctoral degrees, or specified Green List qualifications are eligible for open work rights.",
    requirements: "Genuine and stable partnership proof, joint financial records, police clearance certificate, medicals.",
  },
  {
    country: "United States",
    flag: "🇺🇸",
    category: "F-2 Dependent Visa",
    policy: "Spouses and unmarried minor children of F-1 students can reside in the USA for the duration of the primary student's study tenure.",
    requirements: "Dependent Form I-20, Marriage Certificate, primary F-1 student's visa and transcript records, sufficient liquid financial sponsorship.",
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    category: "Family Reunification Visa",
    policy: "Spouses can join students with adequate living space (Wohnung) and sufficient financial sustenance proof without relying on public funds.",
    requirements: "A1 German language certificate for spouse (where applicable), marriage certificate, rental contract, Blocked Account / salary proof.",
  },
];

export default function DependentVisaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Visa Services", href: "/visa-services" },
          { label: "Dependent & Spouse Visa" },
        ]}
        badge="Family Reunification"
        title="Dependent &amp; Spouse Visa Guidance in Rohtak"
        subtitle="Assisting spouses and dependent children with comprehensive relationship documentation, financial maintenance audits, and compliant visa filing for Canada, Australia, UK, New Zealand, USA, and Germany."
        stats={[
          { label: "Core Focus", value: "Spouse & Child Visas" },
          { label: "Document Audit", value: "Multi-Tier Scrutiny" },
          { label: "Country Guidance", value: "6 Major Nations" },
          { label: "Ethical Policy", value: "100% Genuine Files" },
        ]}
        primaryCtaText="Book Spouse Visa Consultation"
        primaryCtaHref="/contact"
      />

      {/* Country Policy Matrix */}
      <section className="py-16 sm:py-20 bg-white border-b border-border-subtle">
        <Container>
          <SectionHeading
            kicker="Immigration Policies"
            title="Country-Wise Dependent &amp; Spouse Visa Regulations"
            subtitle="Understanding current government criteria for accompanying spouses across major international study hubs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dependentCountryPolicies.map((dp, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 bg-surface-gray flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="text-2xl">{dp.flag}</span>
                    <div>
                      <h3 className="text-base font-bold text-navy-950">{dp.country}</h3>
                      <div className="text-xs text-royal-700 font-semibold">{dp.category}</div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4 text-xs">
                    <div>
                      <span className="font-bold text-slate-400 block mb-0.5">Policy Framework:</span>
                      <p className="text-charcoal-700 leading-relaxed">{dp.policy}</p>
                    </div>
                    <div>
                      <span className="font-bold text-amber-700 block mb-0.5">Key Document Checklist:</span>
                      <p className="text-charcoal-800 leading-relaxed font-medium">{dp.requirements}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-royal-700 hover:text-royal-800"
                  >
                    <span>Enquire for {dp.country} Spouse Visa</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Essential Genuine Relationship Evidence */}
      <section className="py-16 sm:py-24 bg-surface-gray/50 border-b border-border-subtle">
        <Container>
          <SectionHeading
            kicker="Document Scrutiny"
            title="Essential Relationship &amp; Financial Evidence"
            subtitle="High commissions scrutinize spouse visa files for relationship authenticity and financial stability."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-7 rounded-2xl bg-white border border-slate-200">
              <h3 className="text-lg font-bold text-navy-950 mb-4 flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-royal-600" />
                <span>Relationship Authenticity Evidence</span>
              </h3>
              <ul className="space-y-3 text-xs text-charcoal-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Government Registered Marriage Certificate (duly apostilled / attested)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Comprehensive wedding album and ceremony photographs with family</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Joint bank accounts, insurance policies, or shared tenancy agreements</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Continuous communication records (chat logs, video call records, money transfers)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Passport endorsement with spouse name updated</span>
                </li>
              </ul>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200">
              <h3 className="text-lg font-bold text-navy-950 mb-4 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-royal-600" />
                <span>Primary Student Status &amp; Financials</span>
              </h3>
              <ul className="space-y-3 text-xs text-charcoal-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Primary student's valid passport, study permit/visa copy, and university enrollment letter</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Primary student's academic transcripts and ongoing attendance records</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Adequate residential accommodation lease proving suitable living space for couples</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Financial maintenance proof covering spouse living expenses for the required duration</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Spouse upfront medical examination and police clearance certificate (PCC)</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Ethical Transparency Disclaimer */}
      <section className="py-16 sm:py-20 bg-white border-b border-border-subtle">
        <Container>
          <div className="p-8 rounded-2xl bg-surface-gray border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4 max-w-3xl">
              <ShieldCheck className="w-8 h-8 text-royal-600 shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-navy-950 mb-2">
                  Ethical Guidance Commitment
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  Guruji Overseas guarantees meticulous document audit, genuine presentation, and compliant application filing. We strictly prohibit fake paperwork and do not guarantee visa approvals, as decisions rest solely with government immigration authorities.
                </p>
              </div>
            </div>
            <Button variant="royal" size="md" href="/contact" className="shrink-0 font-semibold">
              Book File Review
            </Button>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <CtaSection
        badge="Direct Rohtak Office Advisory"
        title="Begin Your Dependent / Spouse Visa Application"
        subtitle="Visit Guruji Overseas at Sheetal Lifestyle Mall, Opposite D-Park, Rohtak for personalized spouse visa documentation review."
        primaryButtonText="Book Spouse Visa Consultation"
        primaryButtonHref="/contact"
      />

      <Footer />
    </div>
  );
}
