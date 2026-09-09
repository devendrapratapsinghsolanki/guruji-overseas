import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, BookOpen } from "lucide-react";
import { Container, SectionHeading, Badge } from "@/components/ui";

interface BlogPostItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
}

const articles: BlogPostItem[] = [
  {
    id: "1",
    title: "IELTS vs PTE: Which Test Should You Choose?",
    category: "Test Preparation",
    readTime: "5 min read",
    date: "Latest Guide",
    excerpt:
      "A practical comparison of computer-based PTE Academic versus IELTS paper/computer tests — examining scoring methods, speaking modules, and university acceptance.",
  },
  {
    id: "2",
    title: "How to Choose the Right Study Abroad Destination",
    category: "Study Abroad",
    readTime: "6 min read",
    date: "Educational Advisory",
    excerpt:
      "Balancing tuition expenses, post-study work rights, climate, and permanent migration potential across Canada, the UK, Australia, and European destinations.",
  },
  {
    id: "3",
    title: "What to Consider Before Applying Abroad",
    category: "Admissions",
    readTime: "4 min read",
    date: "Preparation Checklist",
    excerpt:
      "Critical considerations including academic prerequisites, budget justification, English language cut-offs, and intake application deadlines.",
  },
  {
    id: "4",
    title: "Understanding the Study Abroad Application Process",
    category: "University Guides",
    readTime: "7 min read",
    date: "Process Explainer",
    excerpt:
      "A step-by-step breakdown of university conditional offers, CAS/LOA issuance, medical exams, and preparing genuine student statements.",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-20 lg:py-28 bg-surface-gray/50 border-b border-border-subtle">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <Badge variant="navy" size="sm" className="mb-3">
              Editorial Insights
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
              Knowledge &amp; Study Abroad Guides
            </h2>
            <p className="text-sm text-charcoal-600 mt-2 max-w-xl">
              Informative articles to help students and parents make informed
              decisions regarding exam preparation, university choices, and visas.
            </p>
          </div>

          <Link
            href="#inquiry"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-royal-700 hover:text-royal-800 shrink-0"
          >
            <span>View All Guides</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4 Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              className="rounded-xl border border-border-subtle bg-white p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-card transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-[11px] text-slate-400">
                  <span className="font-semibold text-royal-600 bg-royal-50 px-2 py-0.5 rounded">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-base font-bold text-navy-950 mb-3 leading-snug hover:text-royal-600 transition-colors cursor-pointer">
                  {article.title}
                </h3>

                <p className="text-xs text-charcoal-600 leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-royal-700">
                <span>Read Full Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
