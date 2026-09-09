"use client";

import React, { useState } from "react";
import {
  Search,
  Filter,
  GraduationCap,
  MapPin,
  Calendar,
  Building,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { Container, SectionHeading, Badge, Button } from "@/components/ui";

interface InstitutionItem {
  id: string;
  name: string;
  country: string;
  flag: string;
  level: string;
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
    popularFields: ["Computer Science", "Business", "Engineering"],
    intakes: ["September", "January"],
  },
  {
    id: "2",
    name: "University of Manchester",
    country: "United Kingdom",
    flag: "🇬🇧",
    level: "1-Yr Master's & Bachelor's",
    popularFields: ["Management", "Data Science", "Biomedical"],
    intakes: ["September", "January"],
  },
  {
    id: "3",
    name: "Monash University",
    country: "Australia",
    flag: "🇦🇺",
    level: "Undergraduate & Postgraduate",
    popularFields: ["Information Technology", "Banking", "Health"],
    intakes: ["February", "July"],
  },
  {
    id: "4",
    name: "University of Auckland",
    country: "New Zealand",
    flag: "🇳🇿",
    level: "Diplomas, Degrees & Master's",
    popularFields: ["Civil Engineering", "Finance", "Environmental"],
    intakes: ["February", "July"],
  },
  {
    id: "5",
    name: "Northeastern University",
    country: "United States",
    flag: "🇺🇸",
    level: "Master's with STEM Co-op",
    popularFields: ["Software Engineering", "Analytics", "Project Mgmt"],
    intakes: ["Fall", "Spring"],
  },
  {
    id: "6",
    name: "Technical University of Munich",
    country: "Germany",
    flag: "🇩🇪",
    level: "English-Taught Master's",
    popularFields: ["Automotive Engineering", "Informatics", "Robotics"],
    intakes: ["Winter", "Summer"],
  },
  {
    id: "7",
    name: "Trinity College Dublin",
    country: "Ireland",
    flag: "🇮🇪",
    level: "1-Yr Master's & Bachelor's",
    popularFields: ["Digital Marketing", "Computer Science", "Pharma"],
    intakes: ["September"],
  },
];

export function UniversitiesSection() {
  const [selectedCountry, setSelectedCountry] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const countries = ["All", "Canada", "United Kingdom", "Australia", "New Zealand", "United States", "Germany", "Ireland"];

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
    <section id="universities" className="py-20 lg:py-28 bg-white border-b border-border-subtle">
      <Container>
        <SectionHeading
          kicker="Institution Discovery"
          title="Find the Right Institution."
          subtitle="Explore international colleges and universities according to country, course area, study level, academic profile, and target intake."
        />

        {/* Discovery Filter Controls */}
        <div className="p-6 rounded-xl bg-surface-gray border border-border-subtle mb-10 shadow-subtle">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by university name or course (e.g. Data Science, Engineering)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 text-sm bg-white outline-none focus:ring-2 focus:ring-royal-500/30 focus:border-royal-600"
              />
            </div>

            {/* Country Selector Filter */}
            <div className="md:col-span-6 flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-semibold text-charcoal-700 mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Country:
              </span>
              {countries.slice(0, 5).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setSelectedCountry(c)}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                    selectedCountry === c
                      ? "bg-navy-900 text-white font-bold"
                      : "bg-white border border-slate-200 text-charcoal-700 hover:border-slate-300"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Institution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {filteredInstitutions.map((inst) => (
            <div
              key={inst.id}
              className="p-6 rounded-lg border border-border-subtle bg-white hover:border-slate-300 hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{inst.flag}</span>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {inst.country}
                    </span>
                  </div>
                  <span className="text-[11px] text-royal-600 bg-royal-50 px-2 py-0.5 rounded font-semibold">
                    {inst.level}
                  </span>
                </div>

                <h3 className="text-base font-bold text-navy-950 mb-3">
                  {inst.name}
                </h3>

                <div className="space-y-2 mb-4 text-xs text-charcoal-600">
                  <div className="flex items-start gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-charcoal-800">Popular Fields:</strong>{" "}
                      {inst.popularFields.join(", ")}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>
                      <strong className="text-charcoal-800">Intakes:</strong>{" "}
                      {inst.intakes.join(", ")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">Eligibility Evaluation</span>
                <a
                  href="#inquiry"
                  className="font-bold text-royal-700 hover:text-royal-800 flex items-center gap-1"
                >
                  <span>Check Criteria</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Guidance Callout */}
        <div className="p-5 rounded-lg bg-surface-gray border border-border-subtle text-xs text-charcoal-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="max-w-2xl">
            <strong>Note on Admission Guidance:</strong> We assist with program selection
            across recognized universities based strictly on academic profile,
            budget, and admission criteria. We never make unverified partner claims.
          </p>
          <Button variant="outline" size="sm" href="#inquiry" className="shrink-0">
            Request University Shortlist
          </Button>
        </div>
      </Container>
    </section>
  );
}
