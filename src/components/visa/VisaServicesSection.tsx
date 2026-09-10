import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  Plane,
  HeartHandshake,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  FileCheck2,
} from "lucide-react";
import { Container } from "@/components/ui";

const visaTypes = [
  {
    id: "student-visa",
    title: "Student Visa Guidance",
    badge: "Core Service",
    href: "/visa-services/student-visa",
    summary:
      "Full documentation and filing for higher education study permits across Canada (SDS/Non-SDS), UK (Student Route), Australia (Subclass 500), USA (F-1), Germany, and NZ.",
    checklist: [
      "LOA / CAS / I-20 / CoE Verification",
      "SOP & Genuine Student (GS) Intent Drafting",
      "Financial Proof & Bank Solvency Audit",
      "Embassy Mock Interview Sessions",
    ],
  },
  {
    id: "visitor-visa",
    title: "Visitor & Convocation Visas",
    badge: "Parents & Families",
    href: "/visa-services/visitor-visa",
    summary:
      "Comprehensive assistance for parents attending overseas university convocation ceremonies, visiting enrolled children, or general tourism.",
    checklist: [
      "Sponsorship & University Invitation Letters",
      "Strong Home Ties & Employment Proof",
      "Travel Itinerary & Medical Insurance",
      "Biometrics & Appointment Scheduling",
    ],
  },
  {
    id: "dependent-visa",
    title: "Spouse & Dependent Visas",
    badge: "Family Reunification",
    href: "/visa-services/dependent-visa",
    summary:
      "Filing support for spouses and children accompanying primary international students under applicable country stay regulations.",
    checklist: [
      "Genuine Relationship & Marriage Evidence",
      "Primary Student Enrolment Proof",
      "Sufficient Financial Maintenance Audit",
      "High Commission Submission Compliance",
    ],
  },
  {
    id: "refusal-audit",
    title: "Visa Refusal & Case Review",
    badge: "Specialized Advisory",
    href: "/visa-services",
    summary:
      "Expert scrutiny of past refusal letters (GCMS notes for Canada, UK refusal notices). We identify root deficiencies and restructure your application for success.",
    checklist: [
      "GCMS / Refusal Reason Extraction",
      "SOP Restructuring & Gap Justification",
      "Financial Source Clarification Affidavits",
      "Fresh Stronger Re-lodgement Strategy",
    ],
  },
];

export function VisaServicesSection() {
  return (
    <section id="visa-services" className="py-20 lg:py-28 bg-[#FBFBF9] border-b border-slate-200">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-700 mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            <span>High Commission Advisory</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-[1.12]">
            Rigorous Visa Documentation &amp; Filing
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Visa regulations change frequently. We ensure that every financial statement, academic document, and SOP complies precisely with embassy guidelines.
          </p>
        </div>

        {/* 4 Visa Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {visaTypes.map((visa) => (
            <div
              key={visa.id}
              className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                    {visa.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-950 mb-2">
                  {visa.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {visa.summary}
                </p>

                {/* Checklist */}
                <div className="space-y-2.5 py-4 border-t border-slate-100 mb-4">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Key Scrutiny Areas:
                  </span>
                  {visa.checklist.map((item, cidx) => (
                    <div key={cidx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={visa.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-amber-600 transition-colors"
                >
                  <span>Read Detailed Visa Guidelines</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Document Audit Assurance Banner */}
        <div className="p-6 rounded-2xl bg-slate-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Have a Complex Profile or Past Visa Refusal?
              </h4>
              <p className="text-xs text-slate-400">
                Book a confidential 1-on-1 document review with our senior visa counsellor in Rohtak.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-colors shrink-0"
          >
            Schedule Profile Audit
          </Link>
        </div>
      </Container>
    </section>
  );
}
