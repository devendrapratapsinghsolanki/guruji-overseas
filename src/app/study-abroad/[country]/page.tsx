import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  Briefcase,
  FileCheck,
  ShieldCheck,
  Building2,
  GraduationCap,
  Sparkles,
  AlertCircle,
  HelpCircle,
  Plane,
  Compass,
  DollarSign,
  Award,
} from "lucide-react";

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { CtaSection } from "@/components/layout/CtaSection";
import { Container, Badge, Button, SectionHeading } from "@/components/ui";
import { COUNTRIES_DATA, CountryDetail } from "@/data/destinationsData";
import { COMPANY_INFO } from "@/data/company";

interface Props {
  params: Promise<{
    country: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(COUNTRIES_DATA).map((country) => ({
    country,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  const data = COUNTRIES_DATA[country];

  if (!data) {
    return {
      title: "Country Not Found | Guruji Overseas",
    };
  }

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: [
      `Study in ${data.name}`,
      `${data.name} Student Visa Rohtak`,
      `${data.name} universities`,
      `${data.name} intake admission`,
      "Guruji Overseas Rohtak",
    ],
  };
}

export default async function CountryPage({ params }: Props) {
  const { country } = await params;
  const data = COUNTRIES_DATA[country];

  if (!data) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* 1. Hero Section with Breadcrumbs & Quick Highlights */}
      <PageHero
        breadcrumbs={[
          { label: "Study Abroad", href: "/study-abroad" },
          { label: data.name },
        ]}
        badge={data.heroBadge}
        accentFlag={data.flag}
        title={data.h1}
        subtitle={data.overview}
        stats={data.quickStats}
        primaryCtaText={`Book Free ${data.name} Counselling`}
        primaryCtaHref="/contact"
      />

      {/* 2. Key Facts Strip */}
      <section className="bg-surface-gray py-6 border-b border-border-subtle">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-royal-50 text-royal-700 flex items-center justify-center shrink-0">
                <DollarSign className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase">Tuition Range</div>
                <div className="text-xs font-bold text-navy-950">{data.costBreakdown.tuitionRange}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase">Living Costs</div>
                <div className="text-xs font-bold text-navy-950">{data.costBreakdown.livingExpenses}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase">Part-Time Work</div>
                <div className="text-xs font-bold text-navy-950">{data.costBreakdown.partTimeRights}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-navy-50 text-navy-900 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase">Stayback Rights</div>
                <div className="text-xs font-bold text-navy-950">{data.costBreakdown.postStudyWork}</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Why Study Here Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-border-subtle">
        <Container>
          <SectionHeading
            kicker="Academic Advantages"
            title={`Why Choose ${data.name} for Your Higher Education?`}
            subtitle={`Explore the core educational, professional, and lifestyle benefits that make ${data.name} an outstanding destination for Indian students.`}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.whyStudyHere.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white hover:border-royal-300 hover:shadow-card transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-royal-100 text-royal-700 font-bold flex items-center justify-center text-sm">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-navy-950">{item.title}</h3>
                </div>
                <p className="text-sm text-charcoal-600 leading-relaxed pl-11">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Popular Study Areas */}
      <section className="py-16 sm:py-20 bg-surface-gray/50 border-b border-border-subtle">
        <Container>
          <SectionHeading
            kicker="In-Demand Disciplines"
            title={`Popular Study Areas in ${data.name}`}
            subtitle="Top course streams with high industry demand, career growth, and recognized qualifications."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.popularStudyAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-subtle transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <h3 className="text-base font-bold text-navy-950">{area.field}</h3>
                </div>
                <p className="text-xs text-slate-500 mb-4">{area.description}</p>

                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-charcoal-700 mb-1">
                    Top Specializations:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {area.popularCourses.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-xs font-medium bg-slate-100 text-charcoal-800 px-2.5 py-1 rounded-md border border-slate-200"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Who May Consider This Destination */}
      <section className="py-16 sm:py-20 bg-white border-b border-border-subtle">
        <Container>
          <SectionHeading
            kicker="Profile Eligibility"
            title={`Who May Consider Studying in ${data.name}?`}
            subtitle="Understand how your educational background aligns with program levels and admission benchmarks."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {data.whoMayConsider.map((prof, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 bg-surface-gray flex flex-col justify-between"
              >
                <div>
                  <Badge variant="navy" size="sm" className="mb-3">
                    Target Profile
                  </Badge>
                  <h3 className="text-base font-bold text-navy-950 mb-3">{prof.category}</h3>

                  <div className="space-y-3 mb-4 text-xs">
                    <div>
                      <span className="font-bold text-slate-400 block mb-0.5">Eligibility Benchmark:</span>
                      <span className="text-charcoal-700 font-medium">{prof.criteria}</span>
                    </div>
                    <div>
                      <span className="font-bold text-royal-700 block mb-0.5">Recommended Program:</span>
                      <span className="text-navy-950 font-semibold">{prof.recommendedPath}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-royal-700 hover:text-royal-800"
                  >
                    <span>Assess Your Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Application Journey */}
      <section className="py-16 sm:py-20 bg-navy-950 text-white border-b border-navy-900">
        <Container>
          <div className="max-w-3xl mb-12">
            <Badge variant="amber" size="sm" className="mb-3 bg-amber-500/20 text-amber-300 border-amber-400/30">
              Admission Roadmap
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Your Application Journey to {data.name}
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              A transparent, step-by-step advisory timeline managed end-to-end by Guruji Overseas certified counsellors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.applicationJourney.map((step) => (
              <div
                key={step.stepNumber}
                className="p-6 rounded-2xl bg-navy-900/70 border border-navy-800 hover:border-royal-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-xl bg-royal-600/30 text-royal-400 font-extrabold flex items-center justify-center text-sm border border-royal-500/30">
                      0{step.stepNumber}
                    </span>
                    <span className="text-[11px] font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                      {step.timeline}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Documents Overview */}
      <section className="py-16 sm:py-20 bg-white border-b border-border-subtle">
        <Container>
          <SectionHeading
            kicker="Documentation Checklist"
            title={`Required Documents for ${data.name} Admissions & Visa`}
            subtitle="Thorough paperwork is essential for seamless institutional admission and high commission visa compliance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.documentsOverview.map((docGroup, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-surface-gray/50"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <FileCheck className="w-5 h-5 text-royal-600" />
                  <h3 className="text-base font-bold text-navy-950">{docGroup.category}</h3>
                </div>

                <ul className="space-y-2.5">
                  {docGroup.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2.5 text-xs text-charcoal-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. Important Considerations & Compliance */}
      <section className="py-16 sm:py-20 bg-surface-gray border-b border-border-subtle">
        <Container>
          <SectionHeading
            kicker="Vital Advisory"
            title={`Important Considerations for ${data.name}`}
            subtitle="Key regulatory, financial, and procedural rules you must be aware of prior to lodging your application."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {data.importantConsiderations.map((note, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  {note.highlight && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 inline-block mb-3">
                      {note.highlight}
                    </span>
                  )}
                  <h3 className="text-base font-bold text-navy-950 mb-2">{note.heading}</h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed">{note.details}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Ethical Legal Disclaimer */}
          <div className="p-6 rounded-2xl bg-white border border-amber-200 shadow-sm flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-royal-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-navy-950 mb-1">
                Ethical Advisory &amp; Transparency Notice
              </h4>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Guruji Overseas does not make immigration guarantees, work permit promises, or legal guarantees.
                All student visa grants rest exclusively with respective government immigration authorities.
                Our advisory ensures 100% genuine documentation, academic suitability, and procedural compliance.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 9. Popular Institutions Preview */}
      <section className="py-16 sm:py-20 bg-white border-b border-border-subtle">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <Badge variant="navy" size="sm" className="mb-2">
                Institutions
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
                Top Institutions in {data.name}
              </h2>
            </div>
            <Link
              href="/universities"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-royal-700 hover:text-royal-800"
            >
              <span>Explore All Global Universities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.popularInstitutions.map((inst, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-200 bg-surface-gray flex items-center gap-3"
              >
                <Building2 className="w-4 h-4 text-royal-600 shrink-0" />
                <span className="text-xs font-semibold text-charcoal-800">{inst}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 10. Country Specific FAQs */}
      <section className="py-16 sm:py-20 bg-surface-gray/50 border-b border-border-subtle">
        <Container size="narrow">
          <SectionHeading
            kicker="FAQ"
            title={`Frequently Asked Questions: Study in ${data.name}`}
            subtitle="Clear answers to common questions about eligibility, intakes, tests, and costs."
          />

          <div className="space-y-4">
            {data.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle"
              >
                <h3 className="text-sm sm:text-base font-bold text-navy-950 mb-2 flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-royal-600 shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed pl-6.5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 11. Final CTA Section */}
      <CtaSection
        badge={`Direct ${data.name} Advisory in Rohtak`}
        title={`Ready to Apply for Your ${data.name} Higher Education?`}
        subtitle={`Visit Guruji Overseas at Sheetal Lifestyle Mall, Opposite D-Park, Rohtak for personalized course selection, IELTS/PTE preparation, and compliant visa filing assistance.`}
        primaryButtonText={`Book Free ${data.name} Counselling`}
        primaryButtonHref="/contact"
      />

      <Footer />
    </div>
  );
}
