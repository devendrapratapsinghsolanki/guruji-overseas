import React from "react";
import {
  UserCheck,
  Compass,
  Building2,
  FileCheck2,
  Award,
  ShieldCheck,
  PlaneTakeoff,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui";

const journeySteps = [
  {
    step: "01",
    phase: "Evaluation",
    title: "Profile Assessment",
    desc: "Detailed audit of your academics, English proficiency, study gaps, and financial parameters.",
    deliverable: "Personalized Eligibility Report",
  },
  {
    step: "02",
    phase: "Strategy",
    title: "Country & Course Selection",
    desc: "Matching your career goals with countries offering favorable post-study work and PR avenues.",
    deliverable: "Curated Course Roadmap",
  },
  {
    step: "03",
    phase: "Admissions",
    title: "University Shortlisting",
    desc: "Selecting recognized institutions with optimal tuition, high visa acceptance, and timely intakes.",
    deliverable: "Official Admission Submissions",
  },
  {
    step: "04",
    phase: "Documentation",
    title: "SOP & File Structuring",
    desc: "Drafting rigorous Statement of Purpose (SOP), recommendation letters, and financial affidavits.",
    deliverable: "Audited Application Dossier",
  },
  {
    step: "05",
    phase: "Acceptance",
    title: "Offer Letter & Fee Payment",
    desc: "Receiving conditional/unconditional offers, CAS, I-20, or LOA and processing international tuition transfers.",
    deliverable: "Confirmed University Acceptance",
  },
  {
    step: "06",
    phase: "Visa Filing",
    title: "Embassy Visa Lodgement",
    desc: "Final visa file compilation, biometric scheduling, and 1-on-1 embassy interview drills.",
    deliverable: "High Commission Visa Submission",
  },
  {
    step: "07",
    phase: "Departure",
    title: "Pre-Departure & Flying",
    desc: "Accommodation shortlisting, student forex card issuance, flight ticketing, and campus arrival briefing.",
    deliverable: "Smooth Relocation & Campus Arrival",
  },
];

export function JourneySection() {
  return (
    <section className="py-20 lg:py-28 bg-[#0B132B] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-300 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured 7-Stage Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.12]">
            Your Journey from Rohtak to Your Foreign University
          </h2>
          <p className="text-base text-slate-300 mt-3 leading-relaxed">
            Every step is governed by strict documentation checks and transparent milestones so you never face last-minute surprises.
          </p>
        </div>

        {/* Milestone Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
          {journeySteps.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-amber-400/40 transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-black text-amber-400 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {item.phase}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white mb-2 leading-snug group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 text-[10px] font-semibold text-slate-400">
                <span className="text-amber-400/80 block">Milestone:</span>
                <span className="text-slate-200">{item.deliverable}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
