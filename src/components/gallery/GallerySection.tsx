"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Camera, MapPin, Tag, X, ZoomIn, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Container, SectionHeading, Badge, Button } from "@/components/ui";

interface GalleryItem {
  id: string;
  title: string;
  category: "Universities" | "Foreign Students" | "Coaching" | "Admissions" | "Leadership";
  image: string;
  aspectRatio: "16/9" | "4/3" | "1/1" | "3/2";
  caption: string;
  tag: string;
  colSpan?: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "International Foreign Students on Global Campus",
    category: "Foreign Students",
    image: "/images/foreign-students-campus.jpg",
    aspectRatio: "16/9",
    caption: "Prestigious World-Class University Campus",
    tag: "Campus Life",
    colSpan: "lg:col-span-8",
    description: "Diverse international students walking together at top-ranked universities across Canada, the UK, Australia, and the US.",
  },
  {
    id: "g2",
    title: "Founder & Center Leadership Guidance",
    category: "Leadership",
    image: "/images/owner.jpg",
    aspectRatio: "4/3",
    caption: "Sheetal Lifestyle Mall, 1st Floor, Rohtak",
    tag: "Rohtak Leadership",
    colSpan: "lg:col-span-4",
    description: "Personalized, face-to-face academic counseling with Guruji Overseas leadership to choose the best destination and course.",
  },
  {
    id: "g3",
    title: "Prestigious International University Architecture",
    category: "Universities",
    image: "/images/global-university-campus.jpg",
    aspectRatio: "4/3",
    caption: "Historic & Modern Academic Centers",
    tag: "World Campuses",
    colSpan: "lg:col-span-4",
    description: "Experience education at world-renowned institutions featuring state-of-the-art research laboratories and historic lecture halls.",
  },
  {
    id: "g4",
    title: "IELTS & PTE Smart Computer Practice Lab",
    category: "Coaching",
    image: "/images/ielts-pte-lab.jpg",
    aspectRatio: "16/9",
    caption: "Interactive Daily Classroom Coaching",
    tag: "Language Lab",
    colSpan: "lg:col-span-8",
    description: "Modern language lab simulating actual Pearson PTE & British Council exam conditions with headset drills and mentor reviews.",
  },
  {
    id: "g5",
    title: "International Convocation & Successful Alumni",
    category: "Foreign Students",
    image: "/images/international-graduates.jpg",
    aspectRatio: "16/9",
    caption: "Global Degree Award & Post-Study Work",
    tag: "Alumni Success",
    colSpan: "lg:col-span-7",
    description: "Proud moments of our guided scholars graduating from accredited international universities and securing global post-study work permits.",
  },
  {
    id: "g6",
    title: "One-on-One Admissions & Visa Advisory Desk",
    category: "Admissions",
    image: "/images/student-counseling.jpg",
    aspectRatio: "4/3",
    caption: "Transparent University Shortlisting",
    tag: "Advisory Desk",
    colSpan: "lg:col-span-5",
    description: "In-depth counseling with students and parents to align budgets, academic credentials, SOP writing, and visa filing.",
  },
  {
    id: "g7",
    title: "Grand Historic University Library & Study Commons",
    category: "Universities",
    image: "/images/university-library.jpg",
    aspectRatio: "16/9",
    caption: "Scholarly Research & Academic Excellence",
    tag: "Library & Commons",
    colSpan: "lg:col-span-6",
    description: "Access world-class digital repositories, expansive archival collections, and 24/7 collaborative learning environments.",
  },
  {
    id: "g8",
    title: "Multicultural Student Peer Discussions & Campus Life",
    category: "Foreign Students",
    image: "/images/campus-life.jpg",
    aspectRatio: "16/9",
    caption: "Sunny Outdoor Campus Study Groups",
    tag: "Student Community",
    colSpan: "lg:col-span-6",
    description: "Building lifelong connections and collaborative study circles with peers from over 50 nations across the globe.",
  },
];

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = [
    "All",
    "Foreign Students",
    "Universities",
    "Coaching",
    "Admissions",
    "Leadership",
  ];

  const filteredItems = galleryItems.filter((item) => {
    return activeCategory === "All" || item.category === activeCategory;
  });

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-surface-gray/40 border-b border-border-subtle relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-royal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          kicker="Life &amp; Academics at Guruji Overseas"
          title="Foreign Universities &amp; Student Life Gallery"
          subtitle="Explore international campus life, prestigious world universities, high-scoring coaching labs, and genuine student counseling sessions."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? galleryItems.length
                : galleryItems.filter((item) => item.category === cat).length;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-navy-900 text-white shadow-card scale-105"
                    : "bg-white text-charcoal-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? "bg-amber-400 text-navy-950 font-extrabold" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Masonry / Editorial Composition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`${
                item.colSpan || "lg:col-span-6"
              } group cursor-pointer rounded-2xl overflow-hidden border border-slate-200 bg-white p-2.5 shadow-card hover:shadow-card-hover hover:border-royal-400 transition-all duration-300 flex flex-col justify-between`}
            >
              {/* Image Container with Dynamic Hover */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center img-zoom transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                {/* Top Badge Tag */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-navy-900/80 text-white backdrop-blur-md border border-white/20 shadow-sm">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    {item.tag}
                  </span>
                </div>

                {/* Quick Zoom Trigger Icon */}
                <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-0 inset-x-0 p-4 text-white z-10">
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                    {item.caption}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-3 px-1.5 pb-1 flex items-center justify-between text-xs text-charcoal-600">
                <span className="text-[11px] font-medium text-slate-500">
                  {item.category}
                </span>
                <span className="font-semibold text-royal-600 group-hover:text-royal-700 inline-flex items-center gap-1 text-[11px]">
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal / Lightbox for detailed view */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-navy-900/70 hover:bg-navy-900 text-white flex items-center justify-center backdrop-blur transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] w-full bg-navy-950">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-navy-950">
                    {selectedItem.tag}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-navy-950">
                    {selectedItem.title}
                  </h3>
                  <Badge variant="navy" size="sm">
                    {selectedItem.category}
                  </Badge>
                </div>
                <p className="text-sm text-slate-500 mb-4 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-royal-600 shrink-0" />
                  <span>{selectedItem.caption}</span>
                </p>
                <p className="text-sm text-charcoal-700 leading-relaxed mb-6">
                  {selectedItem.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                  <div className="text-xs text-slate-500">
                    Guruji Overseas • Established 2022 • Rohtak, Haryana
                  </div>
                  <Button
                    variant="royal"
                    size="sm"
                    href="#inquiry"
                    onClick={() => setSelectedItem(null)}
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Inquire About This Destination
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Authentic Center Callout */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500">
            Official Center: Guruji Overseas Immigration Private Limited • Shop 125, Sheetal Lifestyle Mall, Rohtak, Haryana
          </p>
        </div>
      </Container>
    </section>
  );
}
