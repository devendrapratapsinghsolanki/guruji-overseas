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
} from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";

const journeySteps = [
  {
    step: "01",
    title: "Profile Assessment",
    desc: "Detailed evaluation of academic scores, gaps, and financial parameters.",
    icon: UserCheck,
  },
  {
    step: "02",
    title: "Course & Country Selection",
    desc: "Aligning your interests with countries that offer suitable post-study pathways.",
    icon: Compass,
  },
  {
    step: "03",
    title: "University Shortlisting",
    desc: "Selecting recognized institutions that match your credentials and budget.",
    icon: Building2,
  },
  {
    step: "04",
    title: "Application Submission",
    desc: "Preparing error-free admission dossiers and statement of purpose reviews.",
    icon: FileCheck2,
  },
  {
    step: "05",
    title: "Offer & Documentation",
    desc: "Securing offer letters, deposit management, and financial verification.",
    icon: Award,
  },
  {
    step: "06",
    title: "Visa Assistance",
    desc: "Meticulous visa file structuring, fee payment, and interview preparation.",
    icon: ShieldCheck,
  },
  {
    step: "07",
    title: "Pre-Departure Guidance",
    desc: "Forex, packing checklists, student accommodation advice, and travel briefing.",
    icon: PlaneTakeoff,
  },
];

export function JourneySection() {
  return (
    <section className="py-20 lg:py-28 bg-navy-950 text-white border-b border-navy-900 relative overflow-hidden">
      {/* Subtle architectural background texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          kicker="Step-by-Step Roadmap"
          kickerVariant="royal"
          title="The Study Abroad Journey"
          subtitle="A transparent, seven-stage process guiding you smoothly from your first consultation in Rohtak to arriving at your foreign campus."
          theme="dark"
        />

        {/* Desktop Horizontal Timeline (Visible on lg screens and up) */}
        <div className="hidden lg:block relative mt-16 mb-12">
          {/* Horizontal Line connecting all steps */}
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-navy-800 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-7 gap-3 relative z-10">
            {journeySteps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Number Badge */}
                  <span className="text-[11px] font-mono font-bold text-amber-400 bg-navy-900 border border-navy-700 px-2 py-0.5 rounded mb-3">
                    {item.step}
                  </span>

                  {/* Circular Node */}
                  <div className="w-12 h-12 rounded-full bg-navy-900 border-2 border-navy-700 group-hover:border-royal-500 group-hover:bg-royal-600 transition-colors flex items-center justify-center text-white mb-4 shadow-subtle">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Text Details */}
                  <h4 className="text-xs font-bold text-white mb-1.5 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed max-w-[140px]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline (Visible below lg) */}
        <div className="lg:hidden space-y-6 relative pl-6 border-l-2 border-navy-800 ml-3 mt-8">
          {journeySteps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="relative group">
                {/* Node on line */}
                <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-full bg-navy-900 border-2 border-royal-600 flex items-center justify-center text-white text-xs">
                  <Icon className="w-3.5 h-3.5 text-royal-400" />
                </div>

                <div className="bg-navy-900/80 p-4 rounded-lg border border-navy-800">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-bold text-white">
                      {item.title}
                    </h4>
                    <span className="text-[11px] font-mono font-bold text-amber-400">
                      Step {item.step}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
