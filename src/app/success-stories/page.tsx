"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Star,
  Quote,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Building2,
} from "lucide-react";

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { CtaSection } from "@/components/layout/CtaSection";
import { Container, Badge, Button, SectionHeading } from "@/components/ui";
import { COMPANY_INFO } from "@/data/company";
import { ReviewsAndVisaMarqueeSection } from "@/components/testimonials";

interface StoryItem {
  id: string;
  name: string;
  location: string;
  category: "Canada Visa" | "UK Visa" | "Australia Visa" | "USA Visa" | "IELTS 7.5+" | "PTE 79+";
  badge: string;
  flag: string;
  institution: string;
  course: string;
  scoreOrVisa: string;
  reviewQuote: string;
  date: string;
}

const STORIES: StoryItem[] = [
  {
    id: "1",
    name: "Rohan Dahiya",
    location: "Rohtak, Haryana",
    category: "Canada Visa",
    badge: "Canada Study Permit",
    flag: "🇨🇦",
    institution: "Seneca Polytechnic, Toronto",
    course: "Post-Graduate Certificate in Project Management",
    scoreOrVisa: "Canada SDS Visa Approved",
    reviewQuote:
      "Guruji Overseas in Rohtak made my Canada visa journey so simple and transparent. After completing my B.Tech, I had a 1.5 year gap which other agents said was difficult. The team here audited my work experience documents and drafted an incredible SOP. Received my visa within 4 weeks!",
    date: "Intake: Fall 2024",
  },
  {
    id: "2",
    name: "Pooja Sharma",
    location: "Sonipat, Haryana",
    category: "IELTS 7.5+",
    badge: "IELTS Academic",
    flag: "🇬🇧",
    institution: "University of Birmingham, UK",
    course: "MSc International Business",
    scoreOrVisa: "IELTS Overall 8.0 Band (L: 8.5, R: 8.0, W: 7.5, S: 7.5)",
    reviewQuote:
      "I was stuck at Band 6.5 in Speaking for two attempts. When I joined Guruji Overseas coaching lab at Sheetal Lifestyle Mall, the daily 1-on-1 cabin interview practice completely transformed my confidence. Scored an overall 8.0 Band and got admission into Birmingham!",
    date: "IELTS Exam Batch",
  },
  {
    id: "3",
    name: "Aman Malik",
    location: "Jhajjar, Haryana",
    category: "Australia Visa",
    badge: "Subclass 500 Visa",
    flag: "🇦🇺",
    institution: "Deakin University, Melbourne",
    course: "Master of Applied Artificial Intelligence",
    scoreOrVisa: "Australia Student Visa Granted",
    reviewQuote:
      "Genuine Student (GS) assessment for Australia requires solid academic justification. Guruji Overseas advisors guided me step-by-step through university compliance and financial documentation. Highly recommended for students across Haryana!",
    date: "Intake: July 2024",
  },
  {
    id: "4",
    name: "Vikas Hooda",
    location: "Rohtak, Haryana",
    category: "PTE 79+",
    badge: "PTE Academic",
    flag: "🇦🇺",
    institution: "University of Wollongong",
    course: "Master of Information Technology",
    scoreOrVisa: "PTE Overall 84 / 90 (Speaking: 90, Listening: 82)",
    reviewQuote:
      "The computer lab at Guruji Overseas Rohtak is top notch. The headphones, software mock test analytics, and repeat sentence / dictation question banks helped me jump from 62 to 84 in just 5 weeks of rigorous lab training.",
    date: "PTE Exam Batch",
  },
  {
    id: "5",
    name: "Simran Kaur",
    location: "Panipat, Haryana",
    category: "UK Visa",
    badge: "UK Student Route",
    flag: "🇬🇧",
    institution: "Coventry University, UK",
    course: "MSc Global Business & Supply Chain",
    scoreOrVisa: "UK CAS & Visa Granted",
    reviewQuote:
      "They helped me secure my UK admission with an IELTS waiver based on my 12th English score of 78%. Their pre-CAS interview coaching was identical to the actual university interview. 100% genuine and honest consultancy.",
    date: "Intake: Jan 2025",
  },
  {
    id: "6",
    name: "Deepak Saini",
    location: "Rohtak, Haryana",
    category: "USA Visa",
    badge: "US F-1 Visa",
    flag: "🇺🇸",
    institution: "Arizona State University, Phoenix",
    course: "MS in Computer Science (STEM Designated)",
    scoreOrVisa: "US F-1 Visa Approved at Delhi Embassy",
    reviewQuote:
      "The F-1 consular interview is the most nerve-wracking part of studying in the US. Guruji Overseas conducted 5 intensive 1-on-1 mock interviews at their Rohtak office, grilling me on my course, funding, and career goals. The actual consular interview was effortless!",
    date: "Intake: Fall 2024",
  },
];

export default function SuccessStoriesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredStories = useMemo(() => {
    if (activeCategory === "All") return STORIES;
    return STORIES.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <PageHero
        breadcrumbs={[{ label: "Success Stories" }]}
        badge="Real Student Experiences"
        title="Student Success Stories &amp; Verified Reviews"
        subtitle="Read authentic experiences from candidates across Rohtak, Sonipat, Jhajjar, and Haryana who achieved their study abroad and high band score goals with Guruji Overseas."
        stats={[
          { label: "Justdial Reviews", value: "300+ Verified" },
          { label: "Aggregate Rating", value: "5.0 ★ / 5.0" },
          { label: "IELTS 7.5+ Band", value: "Hundreds Trained" },
          { label: "Destination Reach", value: "6 Major Nations" },
        ]}
        primaryCtaText="Start Your Success Story"
        primaryCtaHref="/contact"
      />

      {/* Live Animated Reviews & Placed Visa Students Dual Marquee */}
      <ReviewsAndVisaMarqueeSection />

      {/* Filter Tabs & Stories Grid */}
      <section className="py-16 sm:py-24 bg-surface-gray/50 border-b border-border-subtle">
        <Container>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-navy-950">
              Detailed Case Studies &amp; Candid Feedback
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
              Select a category to view specific student visa approvals and coaching test scores.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10">
            {["All", "Canada Visa", "UK Visa", "Australia Visa", "USA Visa", "IELTS 7.5+", "PTE 79+"].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-navy-950 text-amber-300 shadow-sm"
                    : "bg-white text-charcoal-700 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStories.map((story) => (
              <div
                key={story.id}
                className="p-7 rounded-2xl border border-slate-200 bg-white flex flex-col justify-between hover:border-royal-300 hover:shadow-card transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{story.flag}</span>
                    <Badge variant="amber" size="sm">
                      {story.badge}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed italic mb-6">
                    &ldquo;{story.reviewQuote}&rdquo;
                  </p>

                  <div className="p-3.5 rounded-xl bg-surface-gray border border-slate-100 space-y-1 text-xs mb-4">
                    <div className="font-bold text-navy-950">{story.institution}</div>
                    <div className="text-charcoal-600 text-[11px]">{story.course}</div>
                    <div className="text-royal-700 font-semibold text-[11px] pt-1">
                      {story.scoreOrVisa}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-navy-950">{story.name}</h4>
                    <div className="text-[11px] text-slate-400">{story.location}</div>
                  </div>
                  <span className="text-[10px] text-slate-400">{story.date}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <CtaSection
        badge="Join Our Achievers"
        title="Ready to Write Your Own Success Story?"
        subtitle="Visit Guruji Overseas at Sheetal Lifestyle Mall, Opposite D-Park, Rohtak for an honest profile assessment."
        primaryButtonText="Book Free Profile Evaluation"
        primaryButtonHref="/contact"
      />

      <Footer />
    </div>
  );
}
