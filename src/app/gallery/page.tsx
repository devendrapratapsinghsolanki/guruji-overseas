"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  MapPin,
  Building2,
  Users,
  Camera,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { CtaSection } from "@/components/layout/CtaSection";
import { Container, Badge, Button, SectionHeading } from "@/components/ui";
import { COMPANY_INFO } from "@/data/company";

interface GalleryItem {
  id: string;
  title: string;
  category: "Office & Infrastructure" | "Language Coaching Labs" | "Student Counselling" | "Global Campuses";
  image: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "1",
    title: "Rohtak Headquarters & Advisory Leadership",
    category: "Office & Infrastructure",
    image: "/images/owner.jpg",
    description: "Our primary office at Sheetal Lifestyle Mall, Opposite D-Park, Rohtak, Haryana.",
  },
  {
    id: "2",
    title: "IELTS & PTE Audio-Visual Computer Lab",
    category: "Language Coaching Labs",
    image: "/images/ielts-pte-lab.jpg",
    description: "Dedicated PC lab terminals equipped with noise-canceling headsets for PTE and listening practice.",
  },
  {
    id: "3",
    title: "One-on-One Student Career Counselling",
    category: "Student Counselling",
    image: "/images/student-counseling.jpg",
    description: "Certified counsellors reviewing academic records, gap years, and financial eligibility.",
  },
  {
    id: "4",
    title: "International Campus Life & Student Community",
    category: "Global Campuses",
    image: "/images/campus-life.jpg",
    description: "Our enrolled students enjoying multicultural campus environments across Canada and Australia.",
  },
  {
    id: "5",
    title: "Global University Research Libraries & Infrastructure",
    category: "Global Campuses",
    image: "/images/university-library.jpg",
    description: "Modern academic libraries and technical research centers at partner institutions.",
  },
  {
    id: "6",
    title: "International Graduates & Convocation Celebrations",
    category: "Global Campuses",
    image: "/images/international-graduates.jpg",
    description: "Celebrating successful degree completions and post-study career transitions overseas.",
  },
  {
    id: "7",
    title: "Multicultural Student Study Groups",
    category: "Global Campuses",
    image: "/images/foreign-students-campus.jpg",
    description: "Collaborative learning environments across leading UK and New Zealand universities.",
  },
  {
    id: "8",
    title: "Historic Global University Campuses",
    category: "Global Campuses",
    image: "/images/global-university-campus.jpg",
    description: "Prestigious higher education architecture and research facilities in the UK and USA.",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <PageHero
        breadcrumbs={[{ label: "Gallery" }]}
        badge="Life at Guruji Overseas"
        title="Photo Gallery &amp; Office Moments"
        subtitle="Take a visual tour of our modern coaching classrooms, dedicated PTE computer lab, one-on-one counselling cabins at Sheetal Lifestyle Mall Rohtak, and our students' global campus journeys."
        stats={[
          { label: "Campus Facility", value: "Sheetal Lifestyle Mall" },
          { label: "Lab Stations", value: "Dedicated Audio PCs" },
          { label: "Counselling Cabins", value: "1-on-1 Private Setup" },
          { label: "Established Year", value: "2022 in Rohtak" },
        ]}
        primaryCtaText="Visit Rohtak Office in Person"
        primaryCtaHref="/contact"
      />

      {/* Gallery Filter & Grid */}
      <section className="py-16 sm:py-24 bg-surface-gray/50 border-b border-border-subtle">
        <Container>
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10">
            {["All", "Office & Infrastructure", "Language Coaching Labs", "Student Counselling", "Global Campuses"].map((cat) => (
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

          {/* Masonry / Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col justify-between hover:border-royal-300 hover:shadow-card-hover transition-all duration-300"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy-950">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover img-zoom group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <Badge variant="navy" size="sm" className="bg-navy-900/90 text-white border-white/20">
                        {item.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-bold text-navy-950 mb-1.5 leading-snug group-hover:text-royal-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-charcoal-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Visit Us Banner */}
      <section className="py-16 sm:py-20 bg-white border-b border-border-subtle">
        <Container>
          <div className="p-8 sm:p-10 rounded-2xl bg-surface-gray border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <Badge variant="amber" size="sm">
                Open Monday to Saturday
              </Badge>
              <h3 className="text-xl font-bold text-navy-950">
                Experience Our Infrastructure First-Hand
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 max-w-xl leading-relaxed">
                Visit Shop No. 125, Sheetal Lifestyle Mall, Opposite D-Park, Rohtak to view our classroom facilities and experience a live mock test demo.
              </p>
            </div>
            <Button variant="royal" size="lg" href="/contact" className="shrink-0 font-semibold">
              Get Directions &amp; Book Visit
            </Button>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <CtaSection
        badge="Rohtak Office Advisory"
        title="Ready to Begin Your Overseas Education Journey?"
        subtitle="Visit Guruji Overseas at Sheetal Lifestyle Mall, Opposite D-Park, Rohtak for personalized course selection, IELTS/PTE preparation, and visa guidance."
        primaryButtonText="Book Free Profile Evaluation"
        primaryButtonHref="/contact"
      />

      <Footer />
    </div>
  );
}
