"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Building2,
  MapPin,
  GraduationCap,
  Calendar,
  DollarSign,
  ArrowRight,
  Filter,
  CheckCircle2,
  Sparkles,
  Award,
  Globe2,
} from "lucide-react";

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { CtaSection } from "@/components/layout/CtaSection";
import { Container, Badge, Button, SectionHeading, Input } from "@/components/ui";

interface UniversityItem {
  id: string;
  name: string;
  country: "Canada" | "UK" | "Australia" | "New Zealand" | "USA" | "Germany";
  countrySlug: string;
  flag: string;
  city: string;
  type: "Public University" | "Polytechnic / DLI College" | "State Research University" | "Technical University (TU9)";
  popularCourses: string[];
  intakes: string;
  tuitionRange: string;
  ieltsRequirement: string;
  featuredBadge?: string;
}

const UNIVERSITIES_LIST: UniversityItem[] = [
  // Canada
  {
    id: "seneca",
    name: "Seneca Polytechnic",
    country: "Canada",
    countrySlug: "canada",
    flag: "🇨🇦",
    city: "Toronto, Ontario",
    type: "Polytechnic / DLI College",
    popularCourses: ["Computer Programming", "International Business", "Project Management", "Biotechnology"],
    intakes: "Jan, May, Sep",
    tuitionRange: "CAD $16,000 - $22,000 / yr",
    ieltsRequirement: "IELTS 6.0 / PTE 60+",
    featuredBadge: "High PGWP Demand",
  },
  {
    id: "humber",
    name: "Humber College Institute of Technology",
    country: "Canada",
    countrySlug: "canada",
    flag: "🇨🇦",
    city: "Toronto, Ontario",
    type: "Polytechnic / DLI College",
    popularCourses: ["Information Technology Solutions", "Global Business Management", "Supply Chain", "Cloud Computing"],
    intakes: "Jan, May, Sep",
    tuitionRange: "CAD $17,000 - $24,000 / yr",
    ieltsRequirement: "IELTS 6.0 - 6.5 / PTE 60+",
  },
  {
    id: "conestoga",
    name: "Conestoga College",
    country: "Canada",
    countrySlug: "canada",
    flag: "🇨🇦",
    city: "Kitchener-Waterloo, Ontario",
    type: "Polytechnic / DLI College",
    popularCourses: ["Applied Computer Science", "Robotics & Automation", "Construction Management", "Software Engineering"],
    intakes: "Jan, May, Sep",
    tuitionRange: "CAD $15,500 - $21,000 / yr",
    ieltsRequirement: "IELTS 6.0 / PTE 58+",
  },
  {
    id: "windsor",
    name: "University of Windsor",
    country: "Canada",
    countrySlug: "canada",
    flag: "🇨🇦",
    city: "Windsor, Ontario",
    type: "Public University",
    popularCourses: ["Master of Applied Computing", "Master of Engineering (MEng)", "MBA", "Medical Biotechnology"],
    intakes: "Jan, May, Sep",
    tuitionRange: "CAD $26,000 - $34,000 / yr",
    ieltsRequirement: "IELTS 6.5 (6.0) / PTE 65+",
  },

  // UK
  {
    id: "manchester",
    name: "University of Manchester",
    country: "UK",
    countrySlug: "uk",
    flag: "🇬🇧",
    city: "Manchester, England",
    type: "State Research University",
    popularCourses: ["MSc Data Science", "MSc Advanced Computer Science", "MSc International Business", "MSc Mechanical Engineering"],
    intakes: "Sep / Oct",
    tuitionRange: "£26,000 - £35,000 / yr",
    ieltsRequirement: "IELTS 6.5 - 7.0 / PTE 65+",
    featuredBadge: "Russell Group Global Top 35",
  },
  {
    id: "birmingham",
    name: "University of Birmingham",
    country: "UK",
    countrySlug: "uk",
    flag: "🇬🇧",
    city: "Birmingham, England",
    type: "State Research University",
    popularCourses: ["MSc Artificial Intelligence", "MSc Finance & Investment", "MSc Public Health", "MSc Engineering Management"],
    intakes: "Sep / Oct & Jan",
    tuitionRange: "£22,000 - £30,000 / yr",
    ieltsRequirement: "IELTS 6.5 / PTE 65+",
  },
  {
    id: "coventry",
    name: "Coventry University",
    country: "UK",
    countrySlug: "uk",
    flag: "🇬🇧",
    city: "Coventry / London, England",
    type: "Public University",
    popularCourses: ["MSc Global Business", "MSc Automotive Engineering", "MSc Cyber Security", "MSc Project Management"],
    intakes: "Jan, May, Sep",
    tuitionRange: "£16,000 - £20,500 / yr",
    ieltsRequirement: "IELTS 6.5 / PTE 60+ (12th English Waiver)",
  },
  {
    id: "hertfordshire",
    name: "University of Hertfordshire",
    country: "UK",
    countrySlug: "uk",
    flag: "🇬🇧",
    city: "Hatfield, Greater London",
    type: "Public University",
    popularCourses: ["MSc Computer Science with Placement", "MSc International Business", "MSc Aerospace Engineering"],
    intakes: "Jan & Sep",
    tuitionRange: "£15,500 - £18,500 / yr",
    ieltsRequirement: "IELTS 6.0 - 6.5 / PTE 58+",
  },

  // Australia
  {
    id: "melbourne",
    name: "University of Melbourne",
    country: "Australia",
    countrySlug: "australia",
    flag: "🇦🇺",
    city: "Melbourne, Victoria",
    type: "State Research University",
    popularCourses: ["Master of Information Technology", "Master of Management", "Master of Data Science", "Master of Engineering"],
    intakes: "Feb & Jul",
    tuitionRange: "AUD $38,000 - $52,000 / yr",
    ieltsRequirement: "IELTS 6.5 - 7.0 / PTE 65+",
    featuredBadge: "Group of Eight (Go8)",
  },
  {
    id: "deakin",
    name: "Deakin University",
    country: "Australia",
    countrySlug: "australia",
    flag: "🇦🇺",
    city: "Melbourne & Geelong, Victoria",
    type: "Public University",
    popularCourses: ["Master of Applied AI", "Master of Cyber Security", "Master of Business Analytics", "Bachelor of Nursing"],
    intakes: "Mar, Jul, Nov",
    tuitionRange: "AUD $32,000 - $41,000 / yr",
    ieltsRequirement: "IELTS 6.5 / PTE 60+",
  },
  {
    id: "wollongong",
    name: "University of Wollongong",
    country: "Australia",
    countrySlug: "australia",
    flag: "🇦🇺",
    city: "Wollongong & Sydney, NSW",
    type: "Public University",
    popularCourses: ["Master of Computer Science", "Master of Engineering", "Master of Professional Accounting"],
    intakes: "Feb & Jul",
    tuitionRange: "AUD $31,000 - $39,000 / yr",
    ieltsRequirement: "IELTS 6.5 / PTE 60+",
    featuredBadge: "Regional Stayback Benefits",
  },

  // New Zealand
  {
    id: "auckland",
    name: "University of Auckland",
    country: "New Zealand",
    countrySlug: "new-zealand",
    flag: "🇳🇿",
    city: "Auckland",
    type: "State Research University",
    popularCourses: ["Master of Information Technology", "Master of Management", "Master of Engineering Studies", "Master of Data Science"],
    intakes: "Feb & Jul",
    tuitionRange: "NZD $34,000 - $46,000 / yr",
    ieltsRequirement: "IELTS 6.5 / PTE 65+",
    featuredBadge: "NZ #1 Ranked University",
  },
  {
    id: "otago",
    name: "University of Otago",
    country: "New Zealand",
    countrySlug: "new-zealand",
    flag: "🇳🇿",
    city: "Dunedin",
    type: "State Research University",
    popularCourses: ["Master of International Business", "Master of Public Health", "Master of Applied Science"],
    intakes: "Feb & Jul",
    tuitionRange: "NZD $31,000 - $42,000 / yr",
    ieltsRequirement: "IELTS 6.5 / PTE 60+",
  },
  {
    id: "te-pukenga",
    name: "Te Pūkenga (NZIST)",
    country: "New Zealand",
    countrySlug: "new-zealand",
    flag: "🇳🇿",
    city: "Nationwide Campuses",
    type: "Polytechnic / DLI College",
    popularCourses: ["Postgraduate Diploma in Applied Tech", "Bachelor of Engineering Technology", "Graduate Diploma in IT"],
    intakes: "Feb & Jul",
    tuitionRange: "NZD $20,000 - $28,000 / yr",
    ieltsRequirement: "IELTS 6.0 - 6.5 / PTE 58+",
  },

  // USA
  {
    id: "asu",
    name: "Arizona State University",
    country: "USA",
    countrySlug: "usa",
    flag: "🇺🇸",
    city: "Phoenix, Arizona",
    type: "State Research University",
    popularCourses: ["MS Computer Science (STEM)", "MS Business Analytics (STEM)", "MS Software Engineering", "STEM MBA"],
    intakes: "Fall (Aug) & Spring (Jan)",
    tuitionRange: "$28,000 - $38,000 / yr",
    ieltsRequirement: "IELTS 6.5 / PTE 60+ (GRE Optional)",
    featuredBadge: "#1 in Innovation",
  },
  {
    id: "northeastern",
    name: "Northeastern University",
    country: "USA",
    countrySlug: "usa",
    flag: "🇺🇸",
    city: "Boston, Massachusetts",
    type: "State Research University",
    popularCourses: ["MS Information Systems (STEM)", "MS Computer Science (STEM)", "MS Data Analytics", "MS Project Management"],
    intakes: "Fall & Spring",
    tuitionRange: "$32,000 - $44,000 / yr",
    ieltsRequirement: "IELTS 6.5 - 7.0 / PTE 65+",
  },
  {
    id: "uta",
    name: "University of Texas at Arlington",
    country: "USA",
    countrySlug: "usa",
    flag: "🇺🇸",
    city: "Arlington (Dallas), Texas",
    type: "State Research University",
    popularCourses: ["MS Computer Science (STEM)", "MS Mechanical Engineering (STEM)", "MS Information Systems"],
    intakes: "Fall & Spring",
    tuitionRange: "$20,000 - $29,000 / yr",
    ieltsRequirement: "IELTS 6.5 / PTE 60+",
    featuredBadge: "High STEM OPT ROI",
  },

  // Germany
  {
    id: "tum",
    name: "Technical University of Munich (TUM)",
    country: "Germany",
    countrySlug: "germany",
    flag: "🇩🇪",
    city: "Munich, Bavaria",
    type: "Technical University (TU9)",
    popularCourses: ["M.Sc. Informatics", "M.Sc. Data Engineering & Analytics", "M.Sc. Automotive Engineering", "M.Sc. Robotics"],
    intakes: "Winter (Oct) & Summer (Apr)",
    tuitionRange: "€0 / yr (Nominal Semester Fee ~€150)",
    ieltsRequirement: "IELTS 6.5+ & APS Certificate",
    featuredBadge: "TU9 Global Top 40",
  },
  {
    id: "rwth",
    name: "RWTH Aachen University",
    country: "Germany",
    countrySlug: "germany",
    flag: "🇩🇪",
    city: "Aachen, North Rhine-Westphalia",
    type: "Technical University (TU9)",
    popularCourses: ["M.Sc. Mechanical Engineering", "M.Sc. Automotive Systems", "M.Sc. Production Engineering"],
    intakes: "Winter (Oct)",
    tuitionRange: "€0 / yr (Nominal Semester Fee ~€300)",
    ieltsRequirement: "IELTS 6.5+ & APS Certificate",
    featuredBadge: "Germany #1 Engineering",
  },
  {
    id: "deggendorf",
    name: "Deggendorf Institute of Technology",
    country: "Germany",
    countrySlug: "germany",
    flag: "🇩🇪",
    city: "Deggendorf & Cham, Bavaria",
    type: "Public University",
    popularCourses: ["M.Sc. Applied Computer Science", "M.Sc. Artificial Intelligence & Data Science", "M.Sc. Mechatronic & Cyber-Physical Systems"],
    intakes: "Winter & Summer",
    tuitionRange: "€0 / yr (Nominal Fee ~€100)",
    ieltsRequirement: "IELTS 6.0 - 6.5 & APS Certificate",
  },
];

export default function UniversitiesDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string>("All");

  const filteredUniversities = useMemo(() => {
    return UNIVERSITIES_LIST.filter((uni) => {
      const matchesCountry =
        selectedCountry === "All" || uni.country === selectedCountry;
      const matchesSearch =
        searchQuery === "" ||
        uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.popularCourses.some((c) =>
          c.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCountry && matchesSearch;
    });
  }, [searchQuery, selectedCountry]);

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

      {/* Interactive Search & Filter Toolbar */}
      <section className="py-8 bg-surface-gray border-b border-border-subtle sticky top-[60px] z-30 bg-white/95 backdrop-blur-md">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search university, city, or course..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-royal-500"
              />
            </div>

            {/* Country Filter Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 sm:pb-0">
              {["All", "Canada", "UK", "Australia", "New Zealand", "USA", "Germany"].map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setSelectedCountry(c)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCountry === c
                      ? "bg-navy-950 text-amber-300 shadow-sm"
                      : "bg-surface-gray text-charcoal-700 hover:bg-slate-200"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* University Cards Grid */}
      <section className="py-16 sm:py-24 bg-surface-gray/50 border-b border-border-subtle">
        <Container>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-navy-950">
              Showing {filteredUniversities.length} Institutions
            </h2>
            <span className="text-xs text-slate-500">
              Filter: {selectedCountry} | Showing verified institutions
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUniversities.map((uni) => (
              <div
                key={uni.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col justify-between hover:border-royal-300 hover:shadow-card-hover transition-all"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{uni.flag}</span>
                      <div>
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                          {uni.country}
                        </span>
                        <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-royal-600 shrink-0" />
                          <span>{uni.city}</span>
                        </span>
                      </div>
                    </div>
                    {uni.featuredBadge && (
                      <Badge variant="amber" size="sm" className="text-[10px]">
                        {uni.featuredBadge}
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-navy-950 mb-1 leading-snug">
                    {uni.name}
                  </h3>
                  <div className="text-[11px] font-medium text-royal-700 mb-4">{uni.type}</div>

                  {/* Fact Badges */}
                  <div className="space-y-2 py-3 px-3.5 rounded-xl bg-surface-gray text-xs border border-slate-100 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 font-medium">Intakes:</span>
                      <span className="font-bold text-navy-950">{uni.intakes}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 font-medium">Approx Tuition:</span>
                      <span className="font-bold text-navy-950">{uni.tuitionRange}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 font-medium">Test Target:</span>
                      <span className="font-semibold text-royal-700">{uni.ieltsRequirement}</span>
                    </div>
                  </div>

                  {/* Popular Specializations */}
                  <div className="space-y-1.5 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-700 block">
                      Popular Programs:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {uni.popularCourses.map((c, cIdx) => (
                        <span
                          key={cIdx}
                          className="text-[11px] bg-slate-100 text-charcoal-800 px-2 py-0.5 rounded border border-slate-200"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/study-abroad/${uni.countrySlug}`}
                    className="text-xs text-slate-500 hover:text-royal-700 font-semibold"
                  >
                    Country Guide
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-xs font-bold text-royal-700 hover:text-royal-800"
                  >
                    <span>Check Eligibility</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
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
