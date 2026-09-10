import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Plane,
  FileCheck,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Clock,
  Building2,
  Users,
  CalendarCheck,
} from "lucide-react";

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { CtaSection } from "@/components/layout/CtaSection";
import { Container, Badge, Button, SectionHeading } from "@/components/ui";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Visitor & Tourist Visa Assistance in Rohtak | Guruji Overseas",
  description:
    "Expert visitor visa filing for Canada, UK, Australia, USA, New Zealand, and Schengen Europe. Guidance for parents attending convocations, family visits, and tourism from our Rohtak office.",
  keywords: [
    "Visitor Visa Consultant Rohtak",
    "Tourist Visa Consultant Rohtak",
    "Canada Tourist Visa Rohtak",
    "UK Visitor Visa Rohtak",
    "US B1/B2 Visa Rohtak",
    "Australia Tourist Visa Rohtak",
    "Guruji Overseas Rohtak",
  ],
};

const visitorPurposes = [
  {
    title: "University Convocation / Graduation Visit",
    desc: "For parents and siblings traveling to attend their child's official degree conferral ceremony abroad.",
    requirements: "Official University Convocation Letter, student's valid study permit/visa copy, student's accommodation proof, parent financial statements.",
  },
  {
    title: "Family Visit & Reunion",
    desc: "For parents, spouses, and relatives visiting family members studying or residing overseas.",
    requirements: "Formal Invitation Letter from host, host's residence & employment proofs, relationship proof, visitor's bank balance & ITRs.",
  },
  {
    title: "Tourism & Leisure Travel",
    desc: "For individuals and families planning holidays, sightseeing, and international vacation trips.",
    requirements: "Detailed day-wise travel itinerary, confirmed hotel bookings, flight reservations, home-country employment/property ties.",
  },
  {
    title: "Business & Conference Visits",
    desc: "For corporate professionals attending trade exhibitions, business meetings, or international symposiums.",
    requirements: "Official Business Invitation, company sponsorship letter, conference registration confirmation, company registration docs.",
  },
];

export default function VisitorVisaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Visa Services", href: "/visa-services" },
          { label: "Visitor & Travel Visa" },
        ]}
        badge="Family Visits & Tourism"
        title="Visitor & Travel Visa Guidance in Rohtak"
        subtitle="Accurate application processing for parents attending university convocations, family reunions, and tourism across Canada, UK, Australia, USA, New Zealand, and Europe."
        stats={[
          { label: "Core Categories", value: "Convocation & Tourism" },
          { label: "Home Ties Audit", value: "100% Case Alignment" },
          { label: "Appointment Help", value: "Biometrics & VFS Slots" },
          { label: "Transparency", value: "Zero False Guarantees" },
        ]}
        primaryCtaText="Book Visitor Visa Consultation"
        primaryCtaHref="/contact"
      />

      {/* Core Visitor Visa Categories */}
      <section className="py-16 sm:py-20 bg-white border-b border-border-subtle">
        <Container>
          <SectionHeading
            kicker="Travel Purposes"
            title="Visitor &amp; Temporary Resident Visa Categories"
            subtitle="Explore our specialized documentation assistance tailored to your specific travel objective."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visitorPurposes.map((purp, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-surface-gray flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-royal-50 text-royal-700 flex items-center justify-center font-bold text-sm">
                      0{idx + 1}
                    </div>
                    <h3 className="text-base font-bold text-navy-950">{purp.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-4">
                    {purp.desc}
                  </p>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs">
                    <span className="font-bold text-royal-700 block mb-1">Key Documentation Focus:</span>
                    <span className="text-charcoal-700 leading-relaxed">{purp.requirements}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 mt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-royal-700 hover:text-royal-800"
                  >
                    <span>Enquire for this Category</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Document Checklist & Home Ties Justification */}
      <section className="py-16 sm:py-24 bg-surface-gray/50 border-b border-border-subtle">
        <Container>
          <SectionHeading
            kicker="Documentation Blueprint"
            title="Essential Visitor Visa Checklist &amp; Home Ties Evidence"
            subtitle="The fundamental criterion for visitor visas is proving you are a genuine temporary visitor who will return to India upon trip completion."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-7 rounded-2xl bg-white border border-slate-200">
              <h3 className="text-lg font-bold text-navy-950 mb-4 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-royal-600" />
                <span>Applicant Personal &amp; Financial Records</span>
              </h3>
              <ul className="space-y-3 text-xs text-charcoal-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Valid International Passport (minimum 6 months validity)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Bank account statements (last 6 months) with sufficient liquid funds</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Income Tax Returns (ITRs) for the last 2 to 3 financial years</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Employment proof / business registration &amp; approved leave sanction letter</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Property valuation / land ownership records demonstrating strong ties to India</span>
                </li>
              </ul>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200">
              <h3 className="text-lg font-bold text-navy-950 mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-royal-600" />
                <span>Host &amp; Travel Logistics Documentation</span>
              </h3>
              <ul className="space-y-3 text-xs text-charcoal-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Formal Invitation Letter stating purpose, duration, and accommodation details</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Host's valid passport, visa / study permit / PR status document</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>University letter (for convocation / student graduation visits)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Proof of accommodation (tenancy lease, host utility bill, or hotel booking)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Tentative flight itinerary and comprehensive travel medical insurance</span>
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
                  Ethical Visa Advisory Policy
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  Visitor visa decisions are made independently by consular officers at respective embassies and high commissions. Guruji Overseas ensures thorough file preparation, genuine documentation, and compliant presentation — we never make fraudulent claims or guarantee visa approval.
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
        title="Need Assistance with Your Visitor Visa Application?"
        subtitle="Visit Guruji Overseas at Sheetal Lifestyle Mall, Opposite D-Park, Rohtak for complete visitor and tourist visa filing assistance."
        primaryButtonText="Book Visitor Visa Consultation"
        primaryButtonHref="/contact"
      />

      <Footer />
    </div>
  );
}
