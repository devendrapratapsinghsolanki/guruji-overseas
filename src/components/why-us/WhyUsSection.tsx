import React from "react";
import {
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Award,
  BookOpen,
  Compass,
  FileCheck2,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui";

const standardsComparison = [
  {
    parameter: "University & Course Selection",
    guruji: "Selected purely on your academic background, career trajectory, and genuine post-study work rights.",
    agents: "Pushed to partner colleges offering the highest agent commission regardless of student fit.",
  },
  {
    parameter: "Statement of Purpose (SOP)",
    guruji: "Custom-drafted with the student highlighting genuine academic intent and clear ties to home country.",
    agents: "Copied, generic AI templates leading to high refusal rates under immigration scrutiny.",
  },
  {
    parameter: "Financial & Fund Transparency",
    guruji: "Clear audit of legitimate family savings, education loans, and verified banking documentation.",
    agents: "Encouraging high-risk informal fund arrangements resulting in 5-year visa bans.",
  },
  {
    parameter: "IELTS & PTE Test Coaching",
    guruji: "Daily in-person speaking drills, computer lab testing, and structured diagnostic score feedback.",
    agents: "Outsourced coaching with no diagnostic tracking or computer lab facilities.",
  },
];

const pillars = [
  {
    num: "01",
    title: "1-on-1 Personalized Roadmaps",
    desc: "We analyze your 10th, 12th, graduation marks, study gaps, and budget before recommending a single program.",
  },
  {
    num: "02",
    title: "Meticulous High Commission File Prep",
    desc: "Every visa file undergoes a multi-layer audit conforming to latest IRCC, UKVI, and Department of Home Affairs rules.",
  },
  {
    num: "03",
    title: "Dedicated Rohtak Classroom & Lab",
    desc: "Walk in daily for interactive language practice, computer mock tests, and face-to-face progress reviews.",
  },
  {
    num: "04",
    title: "Full Post-Visa Onboarding",
    desc: "Assistance with accommodation booking, student forex cards, air tickets, and departure checklists.",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FBFBF9] border-b border-slate-200">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-700 mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            <span>Ethical Advisory Standard</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-[1.12]">
            Why Guruji Overseas Sets the Benchmark in Rohtak
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            In an industry crowded with superficial promises, we operate on procedural rigor, absolute fee transparency, and relentless student advocacy.
          </p>
        </div>

        {/* 4 Pillars Horizontal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-black text-amber-600 font-mono block mb-3">
                  {p.num}
                </span>
                <h3 className="text-base font-bold text-slate-950 mb-2">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Standards Comparison Ledger Table */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Ethical Audit
              </span>
              <h3 className="text-lg font-bold text-white">
                How We Protect Your Study Abroad Investment
              </h3>
            </div>
            <span className="text-xs text-slate-400">
              Verified Rohtak Advisory Protocols
            </span>
          </div>

          <div className="divide-y divide-slate-100">
            {standardsComparison.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-6 hover:bg-slate-50/60 transition-colors items-center"
              >
                <div className="lg:col-span-4">
                  <h4 className="text-sm font-bold text-slate-950">
                    {row.parameter}
                  </h4>
                </div>

                <div className="lg:col-span-4 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">
                      The Guruji Overseas Way
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed mt-0.5">
                      {row.guruji}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-4 flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 block">
                      Common Agent Pitfalls
                    </span>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                      {row.agents}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
