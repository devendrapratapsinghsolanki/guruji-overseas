"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Tag,
  ChevronRight,
  ShieldCheck,
  Building2,
} from "lucide-react";

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { CtaSection } from "@/components/layout/CtaSection";
import { Container, Badge, Button, SectionHeading } from "@/components/ui";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: "Study Abroad Guides" | "Visa Policy Updates" | "IELTS & PTE Tips" | "Cost & Finance";
  summary: string;
  readTime: string;
  date: string;
  image: string;
  targetLink: string;
  tags: string[];
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "canada-study-permit-pal-guide",
    title: "Understanding Canada's Provincial Attestation Letter (PAL) & PGWP Rules",
    category: "Visa Policy Updates",
    summary:
      "A complete breakdown of IRCC's latest international student cap regulations, how provincial attestation letters are allocated across provinces, and post-graduation work permit eligibility.",
    readTime: "6 min read",
    date: "Updated for 2025/2026 Admissions",
    image: "/images/campus-life.jpg",
    targetLink: "/study-abroad/canada",
    tags: ["Canada Visa", "PAL", "PGWP", "IRCC Guidelines"],
  },
  {
    id: "2",
    slug: "ielts-speaking-band-8-strategy",
    title: "How to Score Band 7.5+ in IELTS Speaking: Proven Cue Card Strategies",
    category: "IELTS & PTE Tips",
    summary:
      "Learn how to master Part 2 cue cards without memorizing scripts, expand your lexical resource naturally, and maintain fluent speech cadence during the examiner interview.",
    readTime: "5 min read",
    date: "Test Prep Guide",
    image: "/images/ielts-pte-lab.jpg",
    targetLink: "/test-preparation/ielts",
    tags: ["IELTS Academic", "Speaking Drills", "Band 8.0"],
  },
  {
    id: "3",
    slug: "uk-1-year-masters-cost-roi-analysis",
    title: "UK 1-Year Master's vs 2-Year Degrees: Total Cost & Career ROI Comparison",
    category: "Study Abroad Guides",
    summary:
      "Why accelerated 12-month UK master's programs save candidates up to 40% in living expenses while providing 2 full years of Graduate Route stayback work rights.",
    readTime: "7 min read",
    date: "UK Admissions",
    image: "/images/global-university-campus.jpg",
    targetLink: "/study-abroad/uk",
    tags: ["Study in UK", "Graduate Route", "ROI Analysis"],
  },
  {
    id: "4",
    slug: "pte-write-from-dictation-high-score-bank",
    title: "PTE Write from Dictation & Repeat Sentence: The Secret to Scoring 79+",
    category: "IELTS & PTE Tips",
    summary:
      "Granular breakdown of Pearson AI scoring algorithms, memory chunking tactics, and high-frequency question patterns for maximum listening and writing points.",
    readTime: "5 min read",
    date: "PTE Lab Guide",
    image: "/images/ielts-pte-lab.jpg",
    targetLink: "/test-preparation/pte",
    tags: ["PTE Academic", "AI Scoring", "Dictation"],
  },
  {
    id: "5",
    slug: "study-in-germany-free-tuition-aps",
    title: "Studying in Germany with Zero Tuition: The Complete Step-by-Step Roadmap",
    category: "Cost & Finance",
    summary:
      "How to obtain your mandatory APS certificate from New Delhi, shortlist English-taught M.Sc. degrees at public universities, and setup a German Blocked Account.",
    readTime: "8 min read",
    date: "Germany Guide",
    image: "/images/foreign-students-campus.jpg",
    targetLink: "/study-abroad/germany",
    tags: ["Germany Tuition Free", "APS Certificate", "TU9"],
  },
  {
    id: "6",
    slug: "australia-genuine-student-gs-financials",
    title: "Cracking Australia's Genuine Student (GS) Assessment & Subclass 500 Visa",
    category: "Visa Policy Updates",
    summary:
      "Navigating Home Affairs Genuine Student criteria, annual AUD 29,710 living cost evidence, and university credibility interview requirements.",
    readTime: "6 min read",
    date: "Australia Visa",
    image: "/images/international-graduates.jpg",
    targetLink: "/study-abroad/australia",
    tags: ["Australia Visa", "Subclass 500", "Genuine Student"],
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return BLOG_POSTS;
    return BLOG_POSTS.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <PageHero
        breadcrumbs={[{ label: "Blog & Study Guides" }]}
        badge="Editorial Insights"
        title="Study Abroad Guides, Visa Updates &amp; Test Preparation Tips"
        subtitle="Stay updated with the latest international immigration policy shifts, university intake deadlines, IELTS &amp; PTE scoring tactics, and cost comparison analyses published by Guruji Overseas advisors."
        stats={[
          { label: "Articles Published", value: "Curated Guides" },
          { label: "Policy Updates", value: "Real-Time Tracking" },
          { label: "Target Scope", value: "6 Major Nations" },
          { label: "Authored By", value: "Certified Advisors" },
        ]}
        primaryCtaText="Book Personalised Consultation"
        primaryCtaHref="/contact"
      />

      {/* Filter Tabs & Articles Grid */}
      <section className="py-16 sm:py-24 bg-surface-gray/50 border-b border-border-subtle">
        <Container>
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10">
            {["All", "Study Abroad Guides", "Visa Policy Updates", "IELTS & PTE Tips", "Cost & Finance"].map((cat) => (
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

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col justify-between hover:border-royal-300 hover:shadow-card-hover transition-all duration-300"
              >
                <div>
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-navy-950">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover img-zoom group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <Badge variant="navy" size="sm" className="bg-navy-900/90 text-white border-white/20">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-amber-500" />
                        <span>{post.date}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-navy-950 mb-2.5 leading-snug group-hover:text-royal-600 transition-colors">
                      <Link href={post.targetLink}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-charcoal-600 leading-relaxed line-clamp-3 mb-4">
                      {post.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {post.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-medium bg-slate-100 text-charcoal-700 px-2 py-0.5 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={post.targetLink}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-royal-700 hover:text-royal-800"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <CtaSection
        badge="Have Questions About Overseas Education?"
        title="Speak Directly with Our Certified Counsellors in Rohtak"
        subtitle="Visit Guruji Overseas at Sheetal Lifestyle Mall, Opposite D-Park, Rohtak for up-to-date, honest advice regarding intakes, costs, and visa filing."
        primaryButtonText="Book Free Consultation"
        primaryButtonHref="/contact"
      />

      <Footer />
    </div>
  );
}
