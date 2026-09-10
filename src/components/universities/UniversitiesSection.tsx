"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Container, SectionHeading, Button } from "@/components/ui";
import { UNIVERSITIES_DATABASE } from "@/data/universitiesData";
import { UniversityCard } from "./UniversityCard";
import { UniversityDetails } from "./UniversityDetails";
import { University } from "@/types/university";

export function UniversitiesSection() {
  const [selectedCountry, setSelectedCountry] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("" );
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const countries = [
    "All",
    "Canada",
    "United Kingdom",
    "Australia",
    "New Zealand",
    "United States",
    "Germany",
  ];

  const filteredInstitutions = useMemo(() => {
    return UNIVERSITIES_DATABASE.filter((item) => {
      const matchesCountry =
        selectedCountry === "All" || item.country === selectedCountry;
      const matchesSearch =
        searchQuery === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.popularCourses.some((c) =>
          c.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCountry && matchesSearch;
    }).slice(0, 6); // Top 6 preview on homepage
  }, [selectedCountry, searchQuery]);

  const handleOpenDetails = (uni: University) => {
    setSelectedUniversity(uni);
    setIsDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
    setSelectedUniversity(null);
  };

  return (
    <section
      id="universities"
      className="py-20 lg:py-28 bg-white border-b border-border-subtle relative overflow-hidden"
    >
      <Container>
        <SectionHeading
          kicker="Institution Discovery"
          title="Explore Global Universities &amp; College Admissions"
          subtitle="Explore recognized international colleges and universities across Canada, the UK, Australia, New Zealand, the USA, and Germany. Filter by country, tuition budget, intakes, and academic credentials."
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
                placeholder="Search university, course, or city (e.g., Computer Science, Toronto)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white outline-none focus:ring-2 focus:ring-royal-500/30 focus:border-royal-600 transition-all shadow-xs"
              />
            </div>

            {/* Country Selector Filter */}
            <div className="md:col-span-6 flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-semibold text-charcoal-700 mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-royal-600" /> Country:
              </span>
              {countries.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setSelectedCountry(c)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedCountry === c
                      ? "bg-navy-950 text-amber-300 shadow-sm"
                      : "bg-white border border-slate-200 text-charcoal-700 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {c === "United Kingdom" ? "UK" : c === "United States" ? "USA" : c}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Institution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredInstitutions.map((uni) => (
            <UniversityCard
              key={uni.id}
              university={uni}
              onSelectDetails={handleOpenDetails}
            />
          ))}
        </div>

        {/* View All Directory Link */}
        <div className="text-center mb-12">
          <Link
            href="/universities"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-950 text-white font-bold text-xs sm:text-sm hover:bg-navy-900 transition-colors shadow-md hover:shadow-lg"
          >
            <span>Browse Full University Directory ({UNIVERSITIES_DATABASE.length}+ Institutions)</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>

        {/* Global Partner Banner */}
        <div className="p-6 rounded-2xl bg-navy-950 text-white border border-navy-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-card">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Personalized Institutional Shortlisting</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              We evaluate course curriculum, budget, IELTS/PTE bands, and post-study work permits before recommending any university. Transparent advisory with zero biased claims.
            </p>
          </div>
          <Button
            variant="royal"
            size="md"
            href="/contact"
            className="shrink-0 shadow-sm"
          >
            Request Free Counselling
          </Button>
        </div>
      </Container>

      {/* University Details Modal */}
      <UniversityDetails
        university={selectedUniversity}
        isOpen={isDetailsOpen}
        onClose={handleCloseDetails}
      />
    </section>
  );
}
