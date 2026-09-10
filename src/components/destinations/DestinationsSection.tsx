import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, Calendar, Clock, Sparkles, Building2, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui";

interface DestinationItem {
  id: string;
  name: string;
  flag: string;
  headline: string;
  description: string;
  intakes: string;
  workRights: string;
  avgTuition: string;
  topPrograms: string[];
  image: string;
  featured?: boolean;
}

const destinations: DestinationItem[] = [
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦",
    headline: "Public Colleges, Diplomas & Post-Graduation Work Permits",
    description:
      "The top choice for practical diploma and degree programs. Offers clear PGWP stay-back pathways (up to 3 years) and high multicultural student safety across Ontario, BC, and Alberta.",
    intakes: "Jan (Winter), May (Summer), Sep (Fall)",
    workRights: "Up to 3-Year PGWP",
    avgTuition: "CAD $16,000 - $22,000 / year",
    topPrograms: ["Post-Graduate Diplomas", "Cloud Architecture", "Project Management", "Data Analytics"],
    image: "/images/campus-life.jpg",
    featured: true,
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    headline: "Fast-Track 1-Year Master's & 2-Year Graduate Route",
    description:
      "Accelerated 1-year postgraduate degrees saving substantial tuition and living costs. Features historic Russell Group institutions, London business hubs, and the 2-year post-study Graduate Route.",
    intakes: "Sep / Oct (Major), Jan / Feb (Secondary)",
    workRights: "2-Year Graduate Route Visa",
    avgTuition: "£13,000 - £18,000 / year",
    topPrograms: ["1-Yr Master's in Business", "Computer Science / AI", "International Law", "Healthcare"],
    image: "/images/global-university-campus.jpg",
    featured: true,
  },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    headline: "Group of Eight & Dynamic Regional Work Incentives",
    description:
      "High global university rankings with extensive regional post-study work extensions. Renowned for engineering, IT, nursing, and hospitality programs.",
    intakes: "Feb (Semester 1), Jul (Semester 2), Nov",
    workRights: "2 to 4 Years Post-Study Work",
    avgTuition: "AUD $24,000 - $34,000 / year",
    topPrograms: ["Master of Cyber Security", "Data Science", "Civil Engineering", "Nursing"],
    image: "/images/foreign-students-campus.jpg",
  },
  {
    id: "usa",
    name: "United States",
    flag: "🇺🇸",
    headline: "World-Ranked Research Hubs & 3-Year STEM OPT",
    description:
      "Unrivaled academic breadth across Ivy League and state universities. STEM programs offer 36 months of Optional Practical Training (OPT) in major tech hubs.",
    intakes: "Fall (August), Spring (January)",
    workRights: "Up to 3-Year STEM OPT",
    avgTuition: "USD $22,000 - $35,000 / year",
    topPrograms: ["MS Computer Science", "MS Information Systems", "Finance", "Biotechnology"],
    image: "/images/international-graduates.jpg",
  },
  {
    id: "germany",
    name: "Germany",
    flag: "🇩🇪",
    headline: "Tuition-Free Public Master's & Industrial Innovation",
    description:
      "Renowned technological institutes and automotive engineering powerhouses. Public universities offer English-taught master's degrees with zero or nominal tuition fees.",
    intakes: "Winter (Sep/Oct), Summer (Mar/Apr)",
    workRights: "18-Month Jobseeker Visa",
    avgTuition: "€0 - €1,500 / year (Nominal Admin Fee)",
    topPrograms: ["Automotive & Mechanical Eng", "Renewable Energy", "Robotics & AI", "Applied Physics"],
    image: "/images/campus-life.jpg",
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    flag: "🇳🇿",
    headline: "High Quality of Life, Industry Links & Stay-Back Rights",
    description:
      "Peaceful, supportive study ecosystem across 8 state-funded universities and Te Pūkenga institutes. Direct pathways for specialized IT and agricultural science.",
    intakes: "Feb (Major), Jul (Semester 2)",
    workRights: "Up to 3-Year Post-Study Visa",
    avgTuition: "NZD $22,000 - $30,000 / year",
    topPrograms: ["IT Solutions", "Environmental Science", "Construction Management", "Business"],
    image: "/images/global-university-campus.jpg",
  },
];

export function DestinationsSection() {
  const featured = destinations.filter((d) => d.featured);
  const others = destinations.filter((d) => !d.featured);

  return (
    <section id="destinations" className="py-20 lg:py-28 bg-[#FBFBF9] border-b border-slate-200">
      <Container>
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-700 mb-2">
            <Globe className="w-3.5 h-3.5 text-amber-600" />
            <span>Global Education Desks</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-[1.12]">
            Targeted Country Pathways
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Every destination has distinct visa policies, post-study work permits, and tuition models. 
            We provide impartial, file-accurate advisory for the six major study destinations.
          </p>
        </div>

        {/* Asymmetric Spotlight: Canada & UK (The Two Most In-Demand Countries for Haryana Students) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {featured.map((dest) => (
            <div
              key={dest.id}
              className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Visual Header */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={dest.image}
                    alt={`${dest.name} Universities`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                    <span className="text-2xl">{dest.flag}</span>
                    <span className="text-sm font-black text-slate-950">Study in {dest.name}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block mb-1">
                      {dest.workRights}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                      {dest.headline}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 space-y-5">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {dest.description}
                  </p>

                  {/* Fact Ledger */}
                  <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[11px] font-semibold uppercase">Major Intakes:</span>
                      <span className="font-bold text-slate-900 mt-0.5 block">{dest.intakes}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px] font-semibold uppercase">Avg Tuition:</span>
                      <span className="font-bold text-slate-900 mt-0.5 block">{dest.avgTuition}</span>
                    </div>
                  </div>

                  {/* In-Demand Courses */}
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      High Visa Success Disciplines:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {dest.topPrograms.map((prog, pidx) => (
                        <span
                          key={pidx}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200"
                        >
                          {prog}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                <Link
                  href={`/study-abroad/${dest.id}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors"
                >
                  <span>Explore Complete {dest.name} Admissions Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary 4 Destinations (Australia, USA, Germany, New Zealand) in an Editorial Ledger Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {others.map((dest) => (
            <div
              key={dest.id}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{dest.flag}</span>
                    <h4 className="text-base font-bold text-slate-950">{dest.name}</h4>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                    {dest.workRights.split(" ")[0]} {dest.workRights.split(" ")[1]}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  {dest.description}
                </p>

                <div className="space-y-2 py-3 border-y border-slate-100 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span className="text-slate-400">Intakes:</span>
                    <span className="font-semibold text-slate-900 truncate max-w-[140px] text-right">
                      {dest.intakes.split("(")[0]}
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span className="text-slate-400">Tuition:</span>
                    <span className="font-semibold text-slate-900 truncate max-w-[140px] text-right">
                      {dest.avgTuition.split("/")[0]}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-2">
                <Link
                  href={`/study-abroad/${dest.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-amber-600 transition-colors"
                >
                  <span>View Requirements &amp; Visas</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
