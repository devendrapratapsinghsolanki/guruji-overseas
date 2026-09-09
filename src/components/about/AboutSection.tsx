import React from "react";
import Image from "next/image";
import {
  CheckCircle,
  MapPin,
  Clock,
  Shield,
  Award,
  Users,
  Building,
  GraduationCap,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { Container, Badge, PhotoPlaceholder } from "@/components/ui";

const guidancePillars = [
  {
    title: "Language Preparation",
    desc: "IELTS & PTE coaching with realistic feedback and targeted scoring strategies.",
  },
  {
    title: "Country Selection",
    desc: "Matching destination policies, post-study work rights, and living costs with your profile.",
  },
  {
    title: "Course Selection",
    desc: "Aligning your prior academics with future career trajectories and industry demand.",
  },
  {
    title: "University Selection",
    desc: "Unbiased institutional shortlisting across recognized colleges and universities.",
  },
  {
    title: "Applications",
    desc: "Accurate submission management respecting intake deadlines and academic prerequisites.",
  },
  {
    title: "Documentation",
    desc: "Thorough review of academic transcripts, statements, and financial proofs.",
  },
  {
    title: "Visa Process",
    desc: "Adhering strictly to high commission criteria and preparing candidates for embassy scrutiny.",
  },
  {
    title: "Pre-Departure Preparation",
    desc: "Guidance on accommodation, currency, travel documents, and initial arrival logistics.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-border-subtle">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Photography Composition */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-xl overflow-hidden border border-border-subtle bg-white p-2.5 shadow-card">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-slate-100">
                <Image
                  src="/images/owner.jpg"
                  alt="Managing Director & Founder - Guruji Overseas Immigration Pvt. Ltd."
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded bg-amber-500 text-navy-950 text-[11px] font-bold uppercase tracking-wider">
                      Managing Director
                    </span>
                    <span className="text-xs text-slate-300">
                      Established 2022
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    Guruji Overseas Leadership
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 max-w-md">
                    Direct, honest, and expert overseas education advisory for students across Haryana.
                  </p>
                </div>
              </div>
              <div className="pt-3 px-2 flex items-center justify-between text-xs text-charcoal-700">
                <span className="font-semibold text-navy-950">
                  {COMPANY_INFO.legalName}
                </span>
                <span className="text-slate-500">Sheetal Lifestyle Mall, Rohtak</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden border border-border-subtle p-2 bg-surface-gray">
                <PhotoPlaceholder
                  alt="Guruji Overseas Classroom Sessions"
                  category="classroom"
                  label="Classroom Training Environment"
                  aspectRatio="4/3"
                />
              </div>
              <div className="rounded-lg overflow-hidden border border-border-subtle p-2 bg-surface-gray">
                <PhotoPlaceholder
                  alt="Guruji Overseas Office Signage at Sheetal Mall"
                  category="signage"
                  label="Mall Entrance & Signage"
                  aspectRatio="4/3"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <Badge variant="amber" size="sm" className="mb-4">
              About Guruji Overseas
            </Badge>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-950 tracking-tight leading-tight mb-5">
              Guidance That Goes Beyond the Application.
            </h2>

            <p className="text-base text-charcoal-600 leading-relaxed mb-6 font-normal">
              Founded in 2022 in Rohtak, Haryana,{" "}
              <strong className="text-navy-950 font-semibold">
                {COMPANY_INFO.legalName}
              </strong>{" "}
              was established to provide honest, transparent, and step-by-step
              counseling for families and students investing in foreign education.
            </p>

            <p className="text-sm text-charcoal-600 leading-relaxed mb-8">
              We understand that studying abroad is not just an application form —
              it is a life-defining transition. Our advisors work closely with
              each student through every critical phase:
            </p>

            {/* 8 Step Support Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-8">
              {guidancePillars.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-md bg-surface-gray/60 border border-border-subtle flex flex-col justify-start"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-royal-600 shrink-0" />
                    <h4 className="text-xs font-bold text-navy-950">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-charcoal-600 pl-6 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Verified Location & Contact Bar */}
            <div className="w-full p-4 rounded-lg bg-navy-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-xs">
                <div className="font-bold text-amber-400 mb-0.5">
                  Visit Our Official Rohtak Center
                </div>
                <div className="text-slate-300">
                  Shop No. 125, 1st Floor, Sheetal Lifestyle Mall (Opp. D-Park)
                </div>
              </div>
              <a
                href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, "")}`}
                className="px-4 py-2 rounded bg-royal-600 hover:bg-royal-700 text-white text-xs font-semibold shrink-0 transition-colors"
              >
                Call {COMPANY_INFO.contact.displayPhone}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
