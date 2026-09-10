import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  Briefcase,
  Plane,
  HeartHandshake,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  FileCheck,
} from "lucide-react";
import { Container, SectionHeading, Button } from "@/components/ui";

const visaCategories = [
  {
    id: "student-visa",
    icon: GraduationCap,
    title: "Student Visa Guidance",
    badge: "Primary Service",
    href: "/visa-services/student-visa",
    desc: "Complete filing assistance for higher education study permits in Canada, UK, Australia, New Zealand, USA, and Germany.",
    focusAreas: [
      "Letter of Acceptance (LOA / CAS / I-20 / CoE) verification",
      "Financial documentation and proof of funds audit",
      "Statement of Purpose (SOP) academic justification",
      "Mock interview sessions for embassy evaluation",
    ],
  },
  {
    id: "visitor-visa",
    icon: Plane,
    title: "Visitor & Travel Visa",
    badge: "Family & Tourism",
    href: "/visa-services/visitor-visa",
    desc: "Application assistance for parents attending university convocation ceremonies, family visits, and general tourism.",
    focusAreas: [
      "Sponsorship and invitation letter structuring",
      "Strong home-country ties and leave justification",
      "Travel itinerary and financial evidence checks",
      "Biometrics appointment booking and tracking",
    ],
  },
  {
    id: "dependent-visa",
    icon: HeartHandshake,
    title: "Dependent / Spouse Visa",
    badge: "Family Reunification",
    href: "/visa-services/dependent-visa",
    desc: "Support for spouses and children accompanying primary international students overseas.",
    focusAreas: [
      "Genuine relationship proof and marriage documentation",
      "Primary applicant student visa and accommodation verification",
      "Dependent living expense and financial maintenance proof",
      "Consular submission and interview readiness",
    ],
  },
  {
    id: "documentation-review",
    icon: FileCheck,
    title: "Document Scrutiny & Mock Interviews",
    badge: "Quality Assurance",
    href: "/visa-services",
    desc: "Meticulous multi-tier verification of all academic certificates, bank statements, affidavits, and embassy interview drills.",
    focusAreas: [
      "Bank statement & source of funds verification",
      "Gap justification and work experience affidavits",
      "1-on-1 embassy mock interview simulation",
      "Refusal case review and reapplication strategy",
    ],
  },
];

export function VisaServicesSection() {
  return (
    <section id="visa-services" className="py-20 lg:py-28 bg-surface-gray/50 border-b border-border-subtle">
      <Container>
        <SectionHeading
          kicker="Visa Assistance"
          title="Thorough Visa Guidance & Documentation"
          subtitle="Navigating student and visitor visa regulations requires rigorous accuracy. We assist candidates with document scrutiny, financial alignment, and interview preparation conforming strictly to high commission guidelines."
        />

        {/* 4 Visa Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {visaCategories.map((visa) => {
            const Icon = visa.icon;
            return (
              <div
                key={visa.id}
                className="rounded-xl border border-border-subtle bg-white p-7 flex flex-col justify-between hover:border-slate-300 hover:shadow-card transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-lg bg-navy-50 text-navy-900 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-royal-700 bg-royal-50 px-2.5 py-0.5 rounded border border-blue-100">
                      {visa.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy-950 mb-2">
                    {visa.title}
                  </h3>
                  <p className="text-sm text-charcoal-600 leading-relaxed mb-6">
                    {visa.desc}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    <span className="text-xs font-bold text-charcoal-800 uppercase tracking-wider block">
                      Key Procedural Focus:
                    </span>
                    {visa.focusAreas.map((point, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-charcoal-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-royal-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Process scrutiny &amp; review
                  </span>
                  <Link
                    href={visa.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-royal-700 hover:text-royal-800"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ethical Transparency Disclaimer */}
        <div className="p-6 rounded-xl bg-white border border-border-subtle shadow-subtle flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-3.5 max-w-3xl">
            <ShieldCheck className="w-6 h-6 text-royal-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-navy-950 mb-1">
                Our Ethical Visa Policy
              </h4>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Visa decisions rest solely with the respective government embassies
                and high commissions. Guruji Overseas guarantees rigorous file preparation,
                procedural compliance, and mock interview coaching — we never make
                fraudulent guarantees or claim unverified success rates.
              </p>
            </div>
          </div>
          <Button variant="royal" size="md" href="/contact" className="shrink-0">
            Book File Review
          </Button>
        </div>
      </Container>
    </section>
  );
}
