"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { CtaSection } from "@/components/layout/CtaSection";
import { Container, SectionHeading } from "@/components/ui";
import {
  UniversitySearch,
  UniversityFilters,
  UniversityGrid,
  UniversityDetails,
} from "@/components/universities";
import {
  University,
  UniversityFilterState,
} from "@/types/university";
import {
  fetchAllUniversities,
  filterUniversitiesInMemory,
} from "@/lib/services/universityService";

const INITIAL_FILTERS: UniversityFilterState = {
  country: "All",
  studyLevel: "All",
  courseDiscipline: "All",
  budgetTier: "All",
  intake: "All",
  searchQuery: "",
};

export default function UniversitiesDirectoryPage() {
  const [allUniversities, setAllUniversities] = useState<University[]>([]);
  const [filters, setFilters] = useState<UniversityFilterState>(INITIAL_FILTERS);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  // Load initial universities data from data service
  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      try {
        const data = await fetchAllUniversities();
        setAllUniversities(data);
      } catch (err) {
        console.error("Failed to fetch universities:", err);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  // Real-time filtered university list
  const filteredUniversities = useMemo(() => {
    return filterUniversitiesInMemory(allUniversities, filters);
  }, [allUniversities, filters]);

  const handleOpenDetails = (uni: University) => {
    setSelectedUniversity(uni);
    setIsDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
    setSelectedUniversity(null);
  };

  const handleResetFilters = () => {
    setFilters(INITIAL_FILTERS);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <PageHero
        breadcrumbs={[{ label: "Universities Directory" }]}
        badge="Global Partner Institutions"
        title="Explore Global Universities &amp; College Admissions"
        subtitle="Search top-tier recognized universities, public polytechnics, and research institutions across Canada, the UK, Australia, New Zealand, the USA, and Germany."
        stats={[
          { label: "Partner Institutions", value: "500+ Global DLIs" },
          { label: "Country Filters", value: "6 Major Nations" },
          { label: "Admission Guidance", value: "End-to-End Support" },
          { label: "Rohtak Counselling", value: "Free Evaluation" },
        ]}
        primaryCtaText="Get University Selection Counselling"
        primaryCtaHref="/contact"
      />

      {/* Main Directory Area */}
      <section className="py-12 sm:py-16 bg-surface-gray/50 border-b border-border-subtle min-h-[600px]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Sidebar Filter Column */}
            <div className="lg:col-span-4 sticky top-24 z-20">
              <div className="space-y-4">
                <UniversitySearch
                  value={filters.searchQuery}
                  onChange={(val) =>
                    setFilters((prev) => ({ ...prev, searchQuery: val }))
                  }
                  placeholder="Search university, city, or course..."
                />

                <UniversityFilters
                  filters={filters}
                  onChange={setFilters}
                  onReset={handleResetFilters}
                  totalCount={allUniversities.length}
                  filteredCount={filteredUniversities.length}
                />
              </div>
            </div>

            {/* Right Main Grid Column */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200">
                <div>
                  <h2 className="text-sm sm:text-base font-bold text-navy-950">
                    Showing {filteredUniversities.length} of {allUniversities.length} Institutions
                  </h2>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Verified degree-granting colleges &amp; universities for international students
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-royal-700 bg-royal-50 hover:bg-royal-100 px-3 py-1.5 rounded-lg border border-royal-200 transition-colors"
                >
                  <span>Need Shortlisting Help?</span>
                </Link>
              </div>

              <UniversityGrid
                universities={filteredUniversities}
                isLoading={isLoading}
                onSelectDetails={handleOpenDetails}
                onResetFilters={handleResetFilters}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* University Selection Counselling Process */}
      <section className="py-16 sm:py-20 bg-white border-b border-border-subtle">
        <Container>
          <SectionHeading
            kicker="Impartial Advisory"
            title="How We Help You Choose the Right University"
            subtitle="Selecting a university involves balancing academic ranking, tuition budget, living expenses, post-study work opportunities, and scholarship availability."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Profile & Academic Evaluation",
                desc: "We analyze your 10th, 12th, and bachelor's percentage, backlogs, study gaps, and IELTS/PTE scores to match minimum entry requirements.",
              },
              {
                title: "Budget & ROI Alignment",
                desc: "We provide realistic estimates of total tuition, living costs, and post-study earning potential to avoid unexpected financial burdens.",
              },
              {
                title: "Scholarship & Application Tracking",
                desc: "We identify international merit scholarships, fee waivers, and ensure complete application submission before institutional deadlines.",
              },
            ].map((p, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-slate-200 bg-surface-gray">
                <div className="w-9 h-9 rounded-xl bg-navy-950 text-amber-400 font-bold flex items-center justify-center text-sm mb-3">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-navy-950 mb-2">{p.title}</h3>
                <p className="text-xs text-charcoal-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* University Details Modal Dialog */}
      <UniversityDetails
        university={selectedUniversity}
        isOpen={isDetailsOpen}
        onClose={handleCloseDetails}
      />

      {/* Final CTA */}
      <CtaSection
        badge="Rohtak Office Consultation"
        title="Find Your Ideal University &amp; Course with Guruji Overseas"
        subtitle="Visit our office at Sheetal Lifestyle Mall, Opposite D-Park, Rohtak for personalized university shortlisting and application assistance."
        primaryButtonText="Book University Shortlisting Session"
        primaryButtonHref="/contact"
      />

      <Footer />
    </div>
  );
}
