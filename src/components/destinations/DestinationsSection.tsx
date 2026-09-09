import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass, Calendar, MapPin, Sparkles, Clock, ShieldCheck } from "lucide-react";
import { Container, Badge, SectionHeading } from "@/components/ui";
import { cn } from "@/lib/utils";

interface DestinationCardData {
  id: string;
  name: string;
  flag: string;
  tagline: string;
  description: string;
  intakes: string;
  workRights: string;
  size: "large" | "medium";
  ctaText: string;
  image: string;
}

const destinations: DestinationCardData[] = [
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦",
    tagline: "World-Class Colleges & Post-Graduation Work Permits",
    description:
      "Renowned for practical diploma and degree programs, high student safety, multicultural campuses, and clear Post-Graduation Work Permit (PGWP) pathways.",
    intakes: "Jan, May, Sep",
    workRights: "Up to 3 Years PGWP",
    size: "large",
    ctaText: "Explore Canada Admissions",
    image: "/images/campus-life.jpg",
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    tagline: "Prestigious 1-Year Master's & Graduate Route",
    description:
      "Home to historic Russell Group and modern technical universities. Accelerated 1-year postgraduate degrees and 2-year post-study Graduate Route visas.",
    intakes: "Jan, May, Sep",
    workRights: "2-Year Graduate Route",
    size: "large",
    ctaText: "Explore UK Admissions",
    image: "/images/global-university-campus.jpg",
  },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    tagline: "Group of Eight & Dynamic Regional Opportunities",
    description:
      "Globally recognized education standards across major metros like Melbourne and Sydney as well as high-growth regional university centers.",
    intakes: "Feb, Jul, Nov",
    workRights: "2-4 Years Post-Study Work",
    size: "medium",
    ctaText: "Explore Australia",
    image: "/images/foreign-students-campus.jpg",
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    flag: "🇳🇿",
    tagline: "Hands-on Practical Education & High Quality of Life",
    description:
      "A peaceful and supportive study environment with eight state-funded universities, strong industry linkages, and stay-back rights.",
    intakes: "Feb, Jul",
    workRights: "Up to 3 Years Stayback",
    size: "medium",
    ctaText: "Explore New Zealand",
    image: "/images/campus-life.jpg",
  },
  {
    id: "usa",
    name: "United States",
    flag: "🇺🇸",
    tagline: "Extensive Program Choice & 3-Year STEM OPT",
    description:
      "The world's largest higher education ecosystem with diverse institutions, cutting-edge labs, and extended 3-year Optional Practical Training for STEM fields.",
    intakes: "Fall (Aug/Sep), Spring (Jan)",
    workRights: "1-3 Years OPT / STEM",
    size: "medium",
    ctaText: "Explore USA",
    image: "/images/international-graduates.jpg",
  },
  {
    id: "germany",
    name: "Germany",
    flag: "🇩🇪",
    tagline: "Engineering Excellence with Nominal Tuition",
    description:
      "Renowned for technological universities and automotive engineering. Most public universities offer tuition-free or nominal-fee Master's courses.",
    intakes: "Winter (Sep/Oct), Summer (Mar/Apr)",
    workRights: "18-Month Jobseeker Visa",
    size: "medium",
    ctaText: "Explore Germany",
    image: "/images/global-university-campus.jpg",
  },
  {
    id: "ireland",
    name: "Ireland",
    flag: "🇮🇪",
    tagline: "European Tech & Pharma Hub with 2-Year Stayback",
    description:
      "The English-speaking European headquarters for global tech and biotech giants, offering excellent post-study employment prospects in Dublin, Cork, and Galway.",
    intakes: "Jan, Sep",
    workRights: "2-Year Third Level Scheme",
    size: "medium",
    ctaText: "Explore Ireland",
    image: "/images/foreign-students-campus.jpg",
  },
];

export function DestinationsSection() {
  const largeDestinations = destinations.filter((d) => d.size === "large");
  const mediumDestinations = destinations.filter((d) => d.size === "medium");

  return (
    <section id="destinations" className="py-20 lg:py-28 bg-surface-gray/50 border-b border-border-subtle relative overflow-hidden">
      <Container>
        <SectionHeading
          kicker="Study Destinations"
          title="Choose Your Study Abroad Destination"
          subtitle="Explore the seven major international destinations we advise on from our Rohtak office, each offering distinct academic advantages, post-study work rights, and global career pathways."
        />

        {/* Top Asymmetric Row: 2 Major Featured Countries (Canada & UK) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {largeDestinations.map((dest, idx) => (
            <div
              key={dest.id}
              className={cn(
                "group rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col justify-between hover:border-royal-300 hover:shadow-card-hover transition-all duration-300",
                idx === 0 ? "lg:col-span-6" : "lg:col-span-6"
              )}
            >
              <div>
                {/* Visual Image Header */}
                <div className="relative aspect-[16/8] sm:aspect-[16/7] w-full overflow-hidden bg-navy-950">
                  <Image
                    src={dest.image}
                    alt={`${dest.name} Study Abroad Campuses`}
                    fill
                    className="object-cover img-zoom group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />

                  {/* Badges on image */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                    <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                      <span className="text-xl">{dest.flag}</span>
                      <span className="text-xs font-extrabold text-navy-950">
                        {dest.name}
                      </span>
                    </div>
                    <Badge variant="navy" size="sm" className="bg-navy-900/90 text-white border-white/20">
                      Major Intake: {dest.intakes.split(",")[0]}
                    </Badge>
                  </div>

                  <div className="absolute bottom-3 inset-x-4 z-10">
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                      {dest.workRights}
                    </span>
                    <h3 className="text-xl font-bold text-white drop-shadow-sm">
                      Study in {dest.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <p className="text-xs font-bold text-royal-700 mb-2 uppercase tracking-wider">
                    {dest.tagline}
                  </p>
                  <p className="text-sm text-charcoal-600 leading-relaxed mb-6">
                    {dest.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 py-3 px-4 rounded-xl bg-surface-gray text-xs text-charcoal-700 mb-2">
                    <div>
                      <span className="text-slate-400 block text-[11px] font-medium">Primary Intakes:</span>
                      <span className="font-bold text-navy-900">{dest.intakes}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px] font-medium">Stayback Rights:</span>
                      <span className="font-bold text-navy-900">{dest.workRights}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0">
                <Link
                  href="#inquiry"
                  className="inline-flex items-center gap-2 text-sm font-bold text-royal-600 hover:text-royal-800 transition-colors group/link"
                >
                  <span>{dest.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row: 5 Medium Destinations (Australia, NZ, USA, Germany, Ireland) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {mediumDestinations.map((dest) => (
            <div
              key={dest.id}
              className="group rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col justify-between hover:border-royal-300 hover:shadow-card-hover transition-all duration-300"
            >
              <div>
                {/* Mini Image Banner */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover img-zoom group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                    <span className="text-xl">{dest.flag}</span>
                    <span className="text-[11px] font-bold text-amber-300">
                      {dest.workRights}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h4 className="text-base font-bold text-navy-950 mb-1.5 group-hover:text-royal-600 transition-colors">
                    {dest.name}
                  </h4>
                  <p className="text-xs text-charcoal-600 leading-relaxed line-clamp-3 mb-4">
                    {dest.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-[11px] text-slate-500">
                    <span className="font-semibold text-charcoal-700">Intakes:</span>{" "}
                    {dest.intakes.split(",")[0]}
                  </div>
                  <Link
                    href="#inquiry"
                    className="inline-flex items-center gap-1 text-xs font-bold text-royal-600 hover:text-royal-800 transition-colors group/arrow"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-arrow:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
