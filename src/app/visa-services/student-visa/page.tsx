import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  FileCheck,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Clock,
  Building2,
  DollarSign,
  AlertCircle,
  FileText,
  Users,
} from "lucide-react";

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { CtaSection } from "@/components/layout/CtaSection";
import { Container, Badge, Button, SectionHeading } from "@/components/ui";
import { COMPANY_INFO } from "@/data/company";

import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Student Visa Guidance in Rohtak | Canada, UK, Australia, USA, Germany",
  description:
    "End-to-end student visa guidance from Guruji Overseas Rohtak. Meticulous document scrutiny, SOP drafting, financial verification, GIC/Blocked Accounts, and 1-on-1 embassy mock interview preparation.",
  path: "/visa-services/student-visa",
  keywords: [
    "Student visa guidance",
    "Student Visa Consultant Rohtak",
    "Study Visa Rohtak Haryana",
    "Canada Study Permit Filing Rohtak",
    "UK Student Route Visa Rohtak",
    "USA F1 Visa Interview Rohtak",
    "Australia Subclass 500 Visa Rohtak",
    "Guruji Overseas",
  ],
});

const countryVisaHighlights = [
  {
    country: "Canada",
    flag: "🇨🇦",
    permit: "Study Permit (SDS & Non-SDS)",
    keyDoc: "Letter of Acceptance (LOA), Provincial Attestation Letter (PAL), GIC Certificate (CAD 20,635+), 1st Year Tuition Receipt, Upfront Medicals.",
    focus: "Strict GTR justification, program relevancy, PAL compliance.",
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    permit: "Student Route Visa",
    keyDoc: "Confirmation of Acceptance for Studies (CAS), 28-day financial maintenance evidence (£9,207 / £12,006), TB clearance certificate.",
    focus: "Pre-CAS credibility interview, genuine student intention.",
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    permit: "Student Visa Subclass 500",
    keyDoc: "Electronic Confirmation of Enrolment (eCoE), Overseas Student Health Cover (OSHC), AUD 29,710 living cost evidence.",
    focus: "Genuine Student (GS) assessment, financial source audit.",
  },
  {
    country: "New Zealand",
    flag: "🇳🇿",
    permit: "Fee Paying Student Visa",
    keyDoc: "Offer of Place, NZD 20,000 living expense proof, Funds Transfer Scheme (FTS), Approval in Principle (AIP) system.",
    focus: "Pay tuition only after AIP is granted by INZ.",
  },
  {
    country: "United States",
    flag: "🇺🇸",
    permit: "F-1 Student Visa",
    keyDoc: "Form I-20, DS-160 confirmation, I-901 SEVIS fee receipt ($350), 1st year financial liquid funds.",
    focus: "In-person Consular Mock Interview drills & non-immigrant intent.",
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    permit: "National Visa (Category D)",
    keyDoc: "Original APS Certificate, University Admission Letter (Zulassung), Blocked Account (€11,904), Statutory Health Insurance.",
    focus: "Mandatory APS verification and ECTS coursework matching.",
  },
];

export default function StudentVisaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Visa Services", href: "/visa-services" },
          { label: "Student Visa Guidance" },
        ]}
        badge="Higher Education Study Permits"
        title="Student Visa Guidance & Document Scrutiny"
        subtitle="Expert study permit filing for Canada, UK, Australia, New Zealand, USA, and Germany. We ensure complete documentation compliance, financial seasoning verification, and personalized mock interview drills."
        stats={[
          { label: "Destination Reach", value: "6 Major Nations" },
          { label: "SOP Customization", value: "100% Unique Drafts" },
          { label: "Interview Coaching", value: "1-on-1 Mock Drills" },
          { label: "Ethical Policy", value: "Zero False Guarantees" },
        ]}
        primaryCtaText="Book Free Visa Profile Assessment"
        primaryCtaHref="/contact"
      />

      {/* Overview & Core Offerings */}
      <section className="py-16 sm:py-20 bg-white border-b border-border-subtle">
        <Container>
          <SectionHeading
            kicker="Our Value Proposition"
            title="Why File Your Student Visa Through Guruji Overseas?"
            subtitle="The difference between a visa approval and a refusal often comes down to documentation precision, clarity of purpose, and financial authenticity."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FileCheck,
                title: "Exhaustive Document Audit",
                desc: "Every academic certificate, backlog proof, work experience letter, and identity card is verified for absolute accuracy before lodging.",
              },
              {
                icon: DollarSign,
                title: "Financial Audit & Source Scrutiny",
                desc: "Assisting with GIC, Blocked Accounts, loan sanctions, bank seasoning, and sponsor ITRs adhering strictly to high commission guidelines.",
              },
              {
                icon: FileText,
                title: "Academic SOP Structuring",
                desc: "Personalized Statements of Purpose written from scratch detailing academic justification, career trajectory, and strong home ties.",
              },
              {
                icon: Users,
                title: "Consular Mock Interview Drills",
                desc: "Intensive 1-on-1 mock interviews simulating real embassy questions to build poise, clarity, and confidence for USA, UK, and Australia.",
              },
            ].map((col, idx) => {
              const Icon = col.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-slate-200 bg-surface-gray flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-navy-950 text-amber-400 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-navy-950 mb-2">{col.title}</h3>
                    <p className="text-xs text-charcoal-600 leading-relaxed">{col.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Country-Specific Student Visa Protocols */}
      <section className="py-16 sm:py-24 bg-surface-gray/50 border-b border-border-subtle">
        <Container>
          <SectionHeading
            kicker="Country Protocols"
            title="Country-Wise Student Visa Requirements"
            subtitle="Key procedural prerequisites and compliance mandates across our 6 core destination countries."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countryVisaHighlights.map((cv, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 bg-white flex flex-col justify-between hover:border-royal-300 hover:shadow-card transition-all"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="text-2xl">{cv.flag}</span>
                    <div>
                      <h3 className="text-base font-bold text-navy-950">{cv.country}</h3>
                      <div className="text-xs text-royal-700 font-semibold">{cv.permit}</div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4 text-xs">
                    <div>
                      <span className="font-bold text-slate-400 block mb-0.5">Critical Documentation:</span>
                      <span className="text-charcoal-700 leading-relaxed">{cv.keyDoc}</span>
                    </div>
                    <div>
                      <span className="font-bold text-amber-700 block mb-0.5">Key Scrutiny Factor:</span>
                      <span className="text-charcoal-800 font-medium leading-relaxed">{cv.focus}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <Link
                    href={`/study-abroad/${cv.country.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-royal-700 hover:text-royal-800"
                  >
                    <span>View {cv.country} Admission Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Refusal Case Analysis */}
      <section className="py-16 sm:py-20 bg-navy-950 text-white border-b border-navy-900">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <Badge variant="amber" size="sm" className="bg-amber-500/20 text-amber-300 border-amber-400/30">
                Specialized Support
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Previous Visa Refusal? We Provide Systematic Case Review
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                A previous study permit refusal does not mean your international education dreams are over. Most refusals occur due to generic SOPs, mismatched course progression, or inadequate source-of-funds clarity.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Detailed audit of official refusal letters and previously submitted visa files",
                  "Ordering and analyzing official GCMS / ATIP notes for Canada visa refusals",
                  "Resolving program relevancy questions and course progression gaps",
                  "Restructuring financial evidence and strengthening home-country ties",
                  "Filing a well-substantiated reapplication addressing every consular concern",
                ].map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 p-7 rounded-2xl bg-navy-900/80 border border-navy-800 text-center space-y-4">
              <ShieldCheck className="w-12 h-12 text-amber-400 mx-auto" />
              <h3 className="text-lg font-bold text-white">Book a Confidential Refusal File Review</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Bring your refusal letter and original application file to our Rohtak office for an honest, transparent appraisal.
              </p>
              <Button variant="royal" size="md" href="/contact" className="w-full font-semibold">
                Schedule Refusal Review
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Transparency Disclaimer */}
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
                  Guruji Overseas strictly adheres to all international embassy and high commission regulations. We do not provide immigration guarantees or legal promises. All visa decisions rest solely with authorized government consular officers.
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
        title="Ready to Lodge Your Student Visa File?"
        subtitle="Visit Guruji Overseas at Sheetal Lifestyle Mall, Opposite D-Park, Rohtak for complete student visa assistance and interview coaching."
        primaryButtonText="Book Student Visa Consultation"
        primaryButtonHref="/contact"
      />

      <Footer />
    </div>
  );
}
