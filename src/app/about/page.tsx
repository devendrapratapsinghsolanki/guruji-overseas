import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  MapPin,
  Clock,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Award,
  Users,
  Target,
  Sparkles,
  ArrowRight,
  BookOpen,
  GraduationCap,
} from "lucide-react";

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { CtaSection } from "@/components/layout/CtaSection";
import { Container, Badge, Button, SectionHeading } from "@/components/ui";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us | Guruji Overseas Immigration Private Limited | Rohtak, Haryana",
  description:
    "Learn about Guruji Overseas Immigration Private Limited. Established in 2022 in Rohtak, Haryana, we are a premier overseas education and visa assistance consultancy with a 5.0-star Justdial verified rating.",
  keywords: [
    "About Guruji Overseas",
    "Guruji Overseas Immigration Private Limited",
    "Study Abroad Consultant Rohtak Haryana",
    "Best Visa Consultant Rohtak",
    "Sheetal Lifestyle Mall Rohtak",
  ],
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <PageHero
        breadcrumbs={[{ label: "About Us" }]}
        badge={`Established ${COMPANY_INFO.establishedYear}`}
        title="About Guruji Overseas Immigration Private Limited"
        subtitle="Founded in 2022 in Rohtak, Haryana, Guruji Overseas is an overseas education, IELTS/PTE test preparation, and visa assistance consultancy committed to ethical guidance and transparent student counselling."
        stats={[
          { label: "Incorporation Year", value: "2022" },
          { label: "Justdial Rating", value: "5.0 ★ (300+ Reviews)" },
          { label: "Physical Location", value: "Rohtak, Haryana" },
          { label: "Advisory Standard", value: "100% Ethical Policy" },
        ]}
        primaryCtaText="Visit Our Rohtak Office"
        primaryCtaHref="/contact"
      />

      {/* Real Company Overview & Office Story */}
      <section className="py-16 sm:py-24 bg-white border-b border-border-subtle">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="navy" size="md">
                Our Authentic Story
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight leading-tight">
                Dedicated to Serving Haryana Students with Honesty &amp; Transparency
              </h2>
              <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
                <strong className="text-navy-950">{COMPANY_INFO.legalName}</strong> was established in {COMPANY_INFO.establishedYear} with a singular founding mission: to eliminate the ambiguity, false promises, and misinformation often associated with overseas education consultancy in North India.
              </p>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Operating from our physical office at <strong>Sheetal Lifestyle Mall, Opposite D-Park in Rohtak</strong>, our team has counselled hundreds of ambitious students from Rohtak, Sonipat, Jhajjar, Panipat, Bhiwani, and across Haryana. We provide end-to-end guidance spanning IELTS &amp; PTE preparation, course and university selection, and meticulous visa filing for Canada, the United Kingdom, Australia, New Zealand, the United States, and Germany.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-surface-gray border border-slate-200">
                  <h4 className="text-xs font-bold text-navy-950 mb-1">Physical Rohtak Presence</h4>
                  <p className="text-[11px] text-charcoal-600">
                    Walk-in office at Sheetal Lifestyle Mall with active student counselling cabins and a dedicated computer lab.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-surface-gray border border-slate-200">
                  <h4 className="text-xs font-bold text-navy-950 mb-1">5.0 Star Verified Rating</h4>
                  <p className="text-[11px] text-charcoal-600">
                    Over 300+ authentic, verified candidate reviews on Justdial reflecting our commitment to honest advisory.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Visual Image Showcase */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-navy-950">
                <Image
                  src="/images/owner.jpg"
                  alt="Guruji Overseas Leadership & Rohtak Office"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-navy-950/90 backdrop-blur-md p-3.5 rounded-xl border border-white/10 text-xs">
                  <div className="font-bold text-amber-300">{COMPANY_INFO.legalName}</div>
                  <div className="text-slate-300 text-[11px]">Leadership &amp; Certified Advisory Team in Rohtak</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-navy-50 border border-navy-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span className="font-semibold text-navy-950">Justdial Verified Listing</span>
                </div>
                <span className="font-bold text-royal-700">5.0 / 5.0 (300+ Reviews)</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission, Vision & Core Values */}
      <section className="py-16 sm:py-20 bg-surface-gray/50 border-b border-border-subtle">
        <Container>
          <SectionHeading
            kicker="Our Core Philosophy"
            title="Mission, Vision &amp; Ethical Principles"
            subtitle="The foundational values that guide our advisory services every single day."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center mb-4">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-navy-950 mb-2">Our Mission</h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  To provide candidates from Haryana with transparent, evidence-based overseas education counselling, empowering students to secure admission into accredited global institutions and build thriving international careers.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-royal-50 text-royal-700 flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-navy-950 mb-2">Our Vision</h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  To be North India's most trusted, ethical, and respected overseas education consultancy, recognized for academic excellence, authentic documentation, and student-first service.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-navy-950 mb-2">Ethical Integrity</h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  Zero false guarantees, zero fake documentation, and complete transparency on admission criteria, tuition expenses, living costs, and official immigration policies.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Complete Official Information Card */}
      <section className="py-16 sm:py-20 bg-white border-b border-border-subtle">
        <Container>
          <div className="max-w-4xl mx-auto rounded-2xl border border-slate-200 bg-surface-gray p-8 sm:p-10 shadow-sm">
            <h3 className="text-xl font-bold text-navy-950 mb-6 pb-4 border-b border-slate-200">
              Official Corporate Identification &amp; Office Credentials
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-charcoal-700">
              <div>
                <span className="text-slate-400 font-bold uppercase text-[11px] block mb-1">
                  Registered Legal Entity:
                </span>
                <span className="font-bold text-navy-950">{COMPANY_INFO.legalName}</span>
              </div>

              <div>
                <span className="text-slate-400 font-bold uppercase text-[11px] block mb-1">
                  Brand Name &amp; Trade Style:
                </span>
                <span className="font-bold text-navy-950">{COMPANY_INFO.brandName}</span>
              </div>

              <div>
                <span className="text-slate-400 font-bold uppercase text-[11px] block mb-1">
                  Incorporation / Established:
                </span>
                <span className="font-semibold text-charcoal-800">Year {COMPANY_INFO.establishedYear}</span>
              </div>

              <div>
                <span className="text-slate-400 font-bold uppercase text-[11px] block mb-1">
                  Verified Reputation:
                </span>
                <span className="font-semibold text-amber-700">{COMPANY_INFO.reputation.rating} / 5.0 ({COMPANY_INFO.reputation.reviewCount} Justdial Reviews)</span>
              </div>

              <div className="sm:col-span-2">
                <span className="text-slate-400 font-bold uppercase text-[11px] block mb-1">
                  Physical Office Address:
                </span>
                <span className="font-semibold text-charcoal-800">
                  {COMPANY_INFO.location.addressLine1}, {COMPANY_INFO.location.addressLine2}, {COMPANY_INFO.location.cityStateZip} (Landmark: {COMPANY_INFO.location.landmark})
                </span>
              </div>

              <div>
                <span className="text-slate-400 font-bold uppercase text-[11px] block mb-1">
                  Direct Office Phone:
                </span>
                <a href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, "")}`} className="font-bold text-royal-700 hover:underline">
                  {COMPANY_INFO.contact.displayPhone}
                </a>
              </div>

              <div>
                <span className="text-slate-400 font-bold uppercase text-[11px] block mb-1">
                  Official Working Hours:
                </span>
                <span className="font-semibold text-charcoal-800">{COMPANY_INFO.contact.officeHours}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <CtaSection
        badge="Rohtak Physical Office Advisory"
        title="Meet Our Counsellors in Rohtak"
        subtitle="Visit Guruji Overseas at Sheetal Lifestyle Mall, Opposite D-Park, Rohtak for an honest, confidential discussion about your overseas education goals."
        primaryButtonText="Book In-Person Counselling"
        primaryButtonHref="/contact"
      />

      <Footer />
    </div>
  );
}
