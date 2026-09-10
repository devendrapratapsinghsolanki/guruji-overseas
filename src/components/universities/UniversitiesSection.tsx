"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Search,
  Filter,
  GraduationCap,
  MapPin,
  Calendar,
  Building,
  ArrowRight,
  BookOpen,
  Award,
  Sparkles,
} from "lucide-react";
import { Container, SectionHeading, Badge, Button } from "@/components/ui";

interface InstitutionItem {
  id: string;
  name: string;
  country: string;
  flag: string;
  level: string;
  ranking: string;
  image: string;
  popularFields: string[];
  intakes: string[];
}

const sampleInstitutions: InstitutionItem[] = [
  {
    id: "1",
    name: "University of Toronto",
    country: "Canada",
    flag: "🇨🇦",
    level: "Undergraduate & Postgraduate",
    ranking: "QS Rank #21 • Canada #1",
    image: "/images/global-university-campus.jpg",
    popularFields: ["Computer Science", "Business", "Engineering"],
    intakes: ["September", "January"],
  },
  {
    id: "2",
    name: "University of Manchester",
    country: "United Kingdom",
    flag: "🇬🇧",
    level: "1-Yr Master's & Bachelor's",
    ranking: "Russell Group • World Top 35",
    image: "/images/university-library.jpg",
    popularFields: ["Management", "Data Science", "Biomedical"],
    intakes: ["September", "January"],
  },
  {
    id: "3",
    name: "Monash University",
    country: "Australia",
    flag: "🇦🇺",
    level: "Undergraduate & Postgraduate",
    ranking: "Group of Eight • World Top 40",
    image: "/images/foreign-students-campus.jpg",
    popularFields: ["Information Technology", "Banking", "Health"],
    intakes: ["February", "July"],
  },
  {
    id: "4",
    name: "University of Auckland",
    country: "New Zealand",
    flag: "🇳🇿",
    level: "Diplomas, Degrees & Master's",
    ranking: "New Zealand #1 • World Top 70",
    image: "/images/campus-life.jpg",
    popularFields: ["Civil Engineering", "Finance", "Environmental"],
    intakes: ["February", "July"],
  },
  {
    id: "5",
    name: "Northeastern University",
    country: "United States",
    flag: "🇺🇸",
    level: "Master's with STEM Co-op",
    ranking: "Top Tier Research • 3-Yr OPT",
    image: "/images/international-graduates.jpg",
    popularFields: ["Software Engineering", "Analytics", "Project Mgmt"],
    intakes: ["Fall", "Spring"],
  },
  {
    id: "6",
    name: "Technical University of Munich",
    country: "Germany",
    flag: "🇩🇪",
    level: "English-Taught Master's",
    ranking: "TUM Excellence • Low Tuition",
    image: "/images/global-university-campus.jpg",
    popularFields: ["Automotive Engineering", "Informatics", "Robotics"],
    intakes: ["Winter", "Summer"],
  },
  {
    id: "7",
    name: "RWTH Aachen University",
    country: "Germany",
    flag: "🇩🇪",
    level: "English-Taught M.Sc.",
    ranking: "TU9 • World Leading Engineering",
    image: "/images/foreign-students-campus.jpg",
    popularFields: ["Mechanical Engineering", "Production", "Automotive"],
    intakes: ["Winter"],
  },
  {
    id: "8",
    name: "University of British Columbia",
    country: "Canada",
    flag: "🇨🇦",
    level: "Degrees & Diplomas",
    ranking: "Global Top 40 • PGWP Eligible",
    image: "/images/campus-life.jpg",
    popularFields: ["AI & Data", "Biotechnology", "Commerce"],
    intakes: ["September", "January"],
  },
  {
    id: "9",
    name: "University of Sydney",
    country: "Australia",
    flag: "🇦🇺",
    level: "Undergrad & Postgrad",
    ranking: "Group of Eight • Sydney Hub",
    image: "/images/university-library.jpg",
    popularFields: ["Cyber Security", "Finance", "Public Health"],
    intakes: ["February", "July"],
  },
];

export function UniversitiesSection() {
  const [selectedCountry, setSelectedCountry] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const countries = [
    "All",
    "Canada",
    "United Kingdom",
    "Australia",
    "New Zealand",
    "United States",
    "Germany",
  ];

  const filteredInstitutions = sampleInstitutions.filter((item) => {
    const matchesCountry =
      selectedCountry === "All" || item.country === selectedCountry;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.popularFields.some((f) =>
        f.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCountry && matchesSearch;
  });

  return (
    <section id="universities" className="py-20 lg:py-28 bg-white border-b border-border-subtle relative overflow-hidden">
      <Container>
        <SectionHeading
          kicker="Institution Discovery"
          title="Find the Right Global Institution."
          subtitle="Explore international colleges and universities across Canada, UK, Australia, USA, NZ, and Europe. Filter by country, course area, intakes, and academic credentials."
        />

        {/* Discovery Filter Controls */}
        <div className="p-5 sm:p-6 rounded-2xl bg-surface-gray border border-border-subtle mb-10 shadow-subtle">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by university or program (e.g. Toronto, Computer Science)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-white outline-none focus:ring-2 focus:ring-royal-500/30 focus:border-royal-600 transition-all shadow-sm"
              />
            </div>

            {/* Country Selector Filter */}
            <div className="md:col-span-6 flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-semibold text-charcoal-700 mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Country:
              </span>
              {countries.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setSelectedCountry(c)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    selectedCountry === c
                      ? "bg-navy-900 text-white font-bold shadow-sm scale-105"
                      : "bg-white border border-slate-200 text-charcoal-700 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Institution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredInstitutions.map((inst) => (
            <div
              key={inst.id}
              className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-royal-300 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Header Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={inst.image}
                    alt={inst.name}
                    fill
                    className="object-cover img-zoom group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent" />

                  {/* Country Flag & Ranking Pill */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-navy-950 shadow-sm">
                      <span className="text-base">{inst.flag}</span>
                      <span>{inst.country}</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-amber-400 text-navy-950 text-[11px] font-extrabold shadow-sm">
                      {inst.level.includes("1-Yr") ? "1-Yr Master's" : "Undergrad & Postgrad"}
                    </span>
                  </div>

                  {/* University Name inside bottom header */}
                  <div className="absolute bottom-3 inset-x-3">
                    <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors drop-shadow-sm">
                      {inst.name}
                    </h3>
                    <p className="text-[11px] text-slate-200 font-medium flex items-center gap-1 mt-0.5">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>{inst.ranking}</span>
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <div className="space-y-2.5 mb-2 text-xs text-charcoal-600">
                    <div className="flex items-start gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-royal-600 mt-0.5 shrink-0" />
                      <span>
                        <strong className="text-navy-950">Key Programs:</strong>{" "}
                        {inst.popularFields.join(", ")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-royal-600 shrink-0" />
                      <span>
                        <strong className="text-navy-950">Main Intakes:</strong>{" "}
                        {inst.intakes.join(", ")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs bg-slate-50/50">
                <span className="text-slate-500 font-medium">Profile Match Evaluation</span>
                <a
                  href="#inquiry"
                  className="font-bold text-royal-600 hover:text-royal-800 flex items-center gap-1 group/link"
                >
                  <span>Check Eligibility</span>
                  <ArrowRight className="w-3.5 h-3.5 group-link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Global Partner Banner */}
        <div className="p-6 rounded-2xl bg-navy-900 text-white border border-navy-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-card">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Personalized Institutional Shortlisting</span>
            </div>
            <p className="text-sm text-slate-300 max-w-2xl">
              We evaluate course curriculum, budget, IELTS/PTE bands, and post-study work permits before recommending any university. Zero hidden affiliations.
            </p>
          </div>
          <Button variant="royal" size="md" href="#inquiry" className="shrink-0 shadow-sm">
            Get Free Shortlist
          </Button>
        </div>
      </Container>
    </section>
  );
}
