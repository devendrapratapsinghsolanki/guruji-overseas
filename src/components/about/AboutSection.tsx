import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  BookOpen,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { Container } from "@/components/ui";

const corePillars = [
  {
    num: "01",
    title: "Zero False Promises",
    desc: "We never market unrealistic visa guarantees. Every profile is evaluated based on genuine academic merit, genuine funds, and realistic embassy acceptance criteria.",
  },
  {
    num: "02",
    title: "Direct University Representation",
    desc: "We work directly with recognized colleges and world-ranked universities across Canada, UK, Australia, USA, Germany, and New Zealand.",
  },
  {
    num: "03",
    title: "Certified IELTS & PTE Testing Lab",
    desc: "In-house Pearson-style computer testing lab and British Council/IDP certified trainers located right at Sheetal Lifestyle Mall, D-Park, Rohtak.",
  },
  {
    num: "04",
    title: "Complete Pre & Post Landing Support",
    desc: "From initial SOP drafting to visa stamping, flight booking, forex card guidance, and airport arrival assistance.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Photography Grid */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#FBFBF9] border border-slate-200 rounded-2xl p-3 shadow-sm">
              <div className="relative aspect-[4/4.5] rounded-xl overflow-hidden bg-slate-900">
                <Image
                  src="/images/owner.jpg"
                  alt="Managing Director & Founder - Guruji Overseas Rohtak"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-300 mb-1">
                    Leadership Commitment
                  </span>
                  <p className="text-sm font-semibold italic text-slate-100 leading-snug">
                    &ldquo;Every student walking into our Rohtak office gets transparent advice as if they were our own family.&rdquo;
                  </p>
                  <p className="text-xs text-slate-300 mt-2 font-bold">
                    — Founder &amp; Managing Director
                  </p>
                </div>
              </div>

              <div className="pt-3 px-2 flex items-center justify-between text-xs text-slate-600">
                <span className="font-bold text-slate-950">Guruji Overseas Immigration</span>
                <span className="text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-600" /> D-Park, Rohtak
                </span>
              </div>
            </div>

            {/* Sub-gallery of actual facility */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 bg-slate-900">
                <Image
                  src="/images/ielts-pte-lab.jpg"
                  alt="Rohtak IELTS and PTE Lab"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute bottom-2 left-2 right-2 text-white text-[11px] font-bold bg-slate-950/80 backdrop-blur-sm px-2 py-1 rounded">
                  💻 Daily Computer Lab
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 bg-slate-900">
                <Image
                  src="/images/student-counseling.jpg"
                  alt="1-on-1 Student Admissions Advisory"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute bottom-2 left-2 right-2 text-white text-[11px] font-bold bg-slate-950/80 backdrop-blur-sm px-2 py-1 rounded">
                  🤝 1-on-1 Visa Desk
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Institutional Pillars */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-700 mb-3">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>Institutional Integrity</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.12] mb-5">
              Empowering Haryana Students with Transparent Global Education.
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-6 font-normal">
              Based in the heart of Rohtak at Sheetal Lifestyle Mall, Guruji Overseas was founded to eliminate ambiguity in the study abroad sector. 
              We bridge the gap between ambitious students across Haryana and accredited institutions across Canada, UK, Australia, USA, Germany, and New Zealand.
            </p>

            {/* 4 Core Pillars */}
            <div className="space-y-4 w-full mb-8">
              {corePillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-4 hover:border-slate-200 transition-colors"
                >
                  <span className="text-sm font-black text-amber-600 font-mono shrink-0 mt-0.5">
                    {pillar.num}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-950 mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Verified Center Info Box */}
            <div className="w-full p-5 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block mb-0.5">
                  Walk-In Consultations Available
                </span>
                <p className="text-xs text-slate-300">
                  Monday to Saturday: 9:00 AM – 6:00 PM • Sheetal Lifestyle Mall, Rohtak
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-lg transition-colors shrink-0"
              >
                <span>Get Directions &amp; Contact</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
