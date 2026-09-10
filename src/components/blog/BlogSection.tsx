import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Calendar, BookOpen, Sparkles } from "lucide-react";
import { Container } from "@/components/ui";

interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  summary: string;
  image?: string;
  featured?: boolean;
}

const articles: BlogPostItem[] = [
  {
    id: "1",
    slug: "canada-study-permit-pal-guide",
    title: "Understanding Canada's Provincial Attestation Letter (PAL) & PGWP Rules in 2026",
    category: "Visa Policy Updates",
    readTime: "6 min read",
    date: "March 2026",
    author: "Guruji Overseas Editorial Team",
    summary:
      "A complete breakdown of IRCC's international student allocation rules, how provincial attestation letters are issued across Ontario and BC, and post-graduation work permit eligibility.",
    image: "/images/foreign-students-campus.jpg",
    featured: true,
  },
  {
    id: "2",
    slug: "uk-1-year-masters-cost-roi",
    title: "Why UK 1-Year Master's Degrees Offer Higher ROI for Haryana Students",
    category: "Study Abroad Guides",
    readTime: "5 min read",
    date: "March 2026",
    author: "Senior Admissions Counsellor",
    summary:
      "Analyzing tuition savings, accelerated graduation timelines, 2-year Graduate Route post-study work visa rights, and living budget.",
  },
  {
    id: "3",
    slug: "ielts-speaking-band-8-strategy",
    title: "5 Speaking Habits That Jumped Our Rohtak Students from Band 6 to 7.5+",
    category: "IELTS & PTE Tips",
    readTime: "7 min read",
    date: "February 2026",
    author: "Head IELTS Trainer",
    summary:
      "Practical speaking routines, lexical resource expansion, handling Part 2 cue cards naturally without robotic memorized templates.",
  },
  {
    id: "4",
    slug: "australia-genuine-student-test",
    title: "How to Clear Australia's Genuine Student (GS) Requirement Smoothly",
    category: "Visa Guidelines",
    readTime: "5 min read",
    date: "February 2026",
    author: "Visa Compliance Desk",
    summary:
      "Essential points to address in your GS answers regarding course relevance, past qualifications, and future career plans in India.",
  },
];

export function BlogSection() {
  const featuredArticle = articles.find((a) => a.featured) || articles[0];
  const sideArticles = articles.filter((a) => a.id !== featuredArticle.id);

  return (
    <section id="blog" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-700 mb-2">
              <BookOpen className="w-3.5 h-3.5 text-amber-600" />
              <span>Editorial Publication</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-[1.12]">
              Study Abroad Guides &amp; Policy Updates
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-xl">
              Impartial analysis, visa regulation briefings, and practical language test advice from our Rohtak counselors.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-950 hover:text-amber-600 shrink-0 transition-colors"
          >
            <span>View All Guides</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Magazine Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Featured Lead Story (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-[#FBFBF9] border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm">
            <div>
              {featuredArticle.image && (
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded bg-amber-500 text-slate-950 inline-block mb-2">
                      Featured Guide
                    </span>
                    <span className="text-xs text-slate-300 block">
                      {featuredArticle.category} • {featuredArticle.readTime}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6 sm:p-8 space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 leading-snug">
                  {featuredArticle.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {featuredArticle.summary}
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0 border-t border-slate-200/60 mt-4 flex items-center justify-between text-xs">
              <span className="text-slate-400">{featuredArticle.author}</span>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 font-bold text-slate-900 hover:text-amber-600 transition-colors"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Secondary Editorial Stories Column (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {sideArticles.map((article) => (
              <div
                key={article.id}
                className="p-6 rounded-2xl bg-[#FBFBF9] border border-slate-200 flex-1 flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                    <span className="font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-950 mb-2 leading-snug">
                    {article.title}
                  </h4>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 mt-3 flex items-center justify-between text-xs">
                  <span className="text-slate-400 text-[11px]">{article.date}</span>
                  <Link
                    href="/blog"
                    className="font-bold text-slate-900 hover:text-amber-600 transition-colors flex items-center gap-1"
                  >
                    <span>Read guide</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
