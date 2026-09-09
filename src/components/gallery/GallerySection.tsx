"use client";

import React, { useState } from "react";
import { Camera, MapPin, Tag } from "lucide-react";
import { Container, SectionHeading, PhotoPlaceholder } from "@/components/ui";

interface GalleryItem {
  id: string;
  title: string;
  category: "Office" | "Students" | "Classes" | "Team" | "Events";
  aspectRatio: "16/9" | "4/3" | "1/1" | "3/2";
  caption: string;
  colSpan?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Office Interior & Counseling Cubicles",
    category: "Office",
    aspectRatio: "16/9",
    caption: "Sheetal Lifestyle Mall, 1st Floor, Rohtak",
    colSpan: "lg:col-span-7",
  },
  {
    id: "g2",
    title: "Classroom Training Session",
    category: "Classes",
    aspectRatio: "4/3",
    caption: "IELTS & PTE interactive lecture",
    colSpan: "lg:col-span-5",
  },
  {
    id: "g3",
    title: "Student Group & Activity",
    category: "Students",
    aspectRatio: "4/3",
    caption: "Peer speaking discussion group",
    colSpan: "lg:col-span-4",
  },
  {
    id: "g4",
    title: "Counseling Team & Advisors",
    category: "Team",
    aspectRatio: "4/3",
    caption: "Certified overseas education advisors",
    colSpan: "lg:col-span-4",
  },
  {
    id: "g5",
    title: "Exterior Office Signage",
    category: "Office",
    aspectRatio: "4/3",
    caption: "Opposite D-Park, Model Town / Dariyao Nagar",
    colSpan: "lg:col-span-4",
  },
];

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Office", "Classes", "Students", "Team", "Events"];

  const filteredItems = galleryItems.filter((item) => {
    return activeCategory === "All" || item.category === activeCategory;
  });

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white border-b border-border-subtle">
      <Container>
        <SectionHeading
          kicker="Life at Guruji Overseas"
          title="Real Company Gallery"
          subtitle="Explore our Rohtak center, classroom environments, student counseling sessions, and team activities."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                activeCategory === cat
                  ? "bg-navy-900 text-white shadow-subtle"
                  : "bg-surface-gray text-charcoal-700 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Editorial Composition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`${item.colSpan || "lg:col-span-6"} rounded-xl overflow-hidden border border-border-subtle bg-surface-gray p-2 shadow-card flex flex-col justify-between`}
            >
              <PhotoPlaceholder
                alt={item.title}
                category="office"
                label={item.title}
                aspectRatio={item.aspectRatio}
              />
              <div className="p-3 flex items-center justify-between text-xs text-charcoal-600">
                <span className="font-semibold text-navy-950 truncate max-w-[200px]">
                  {item.title}
                </span>
                <span className="text-[11px] text-slate-400">
                  {item.caption}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500">
            All photos represent genuine activities at Guruji Overseas, Shop 125, Sheetal Lifestyle Mall, Rohtak.
          </p>
        </div>
      </Container>
    </section>
  );
}
