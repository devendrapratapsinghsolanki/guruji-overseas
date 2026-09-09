import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, Calendar, MapPin } from "lucide-react";
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
    ctaText: "Explore Canada",
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
    ctaText: "Explore UK",
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
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    flag: "🇳🇿",
    tagline: "Hands-on Practical Education & Unmatched Quality of Life",
    description:
      "A peaceful and supportive study environment with eight state-funded universities, strong industry linkages, and stay-back rights.",
    intakes: "Feb, Jul",
    workRights: "Up to 3 Years Post-Study",
    size: "medium",
    ctaText: "Explore New Zealand",
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
  },
];

export function DestinationsSection() {
  const largeDestinations = destinations.filter((d) => d.size === "large");
  const mediumDestinations = destinations.filter((d) => d.size === "medium");

  return (
    <section id="destinations" className="py-20 lg:py-28 bg-surface-gray/50 border-b border-border-subtle">
      <Container>
        <SectionHeading
          kicker="Study Destinations"
          title="Choose Your Destination"
          subtitle="Explore the seven major international destinations we advise on from our Rohtak office, each offering distinct academic advantages and post-study opportunities."
        />

        {/* Top Asymmetric Row: 2 Major Featured Countries (Canada & UK) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {largeDestinations.map((dest, idx) => (
            <div
              key={dest.id}
              className={cn(
                "rounded-xl border border-border-subtle bg-white p-7 lg:p-9 flex flex-col justify-between hover:border-slate-300 hover:shadow-card transition-all duration-200",
                idx === 0 ? "lg:col-span-6" : "lg:col-span-6"
              )}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{dest.flag}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-navy-950">
                        {dest.name}
                      </h3>
                      <span className="text-xs font-semibold text-royal-600">
                        {dest.workRights}
                      </span>
                    </div>
                  </div>
                  <Badge variant="navy" size="sm">
                    Major Intake: {dest.intakes.split(",")[0]}
                  </Badge>
                </div>

                <p className="text-xs font-bold text-charcoal-700 mb-2 uppercase tracking-wider">
                  {dest.tagline}
                </p>
                <p className="text-sm text-charcoal-600 leading-relaxed mb-6">
                  {dest.description}
                </p>

                <div className="grid grid-cols-2 gap-3 py-3 px-4 rounded-lg bg-surface-gray text-xs text-charcoal-700 mb-6">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Primary Intakes:</span>
                    <span className="font-semibold text-navy-900">{dest.intakes}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Stayback Rights:</span>
                    <span className="font-semibold text-navy-900">{dest.workRights}</span>
                  </div>
                </div>
              </div>

              <Link
                href="#inquiry"
                className="inline-flex items-center gap-2 text-sm font-bold text-royal-700 hover:text-royal-800 transition-colors group"
              >
                <span>{dest.ctaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Row: 5 Medium Destinations (Australia, NZ, USA, Germany, Ireland) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {mediumDestinations.map((dest) => (
            <div
              key={dest.id}
              className="rounded-lg border border-border-subtle bg-white p-5 flex flex-col justify-between hover:border-slate-300 hover:shadow-card transition-all duration-200"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-2xl">{dest.flag}</span>
                  <h4 className="text-base font-bold text-navy-950">
                    {dest.name}
                  </h4>
                </div>

                <p className="text-xs text-charcoal-600 leading-relaxed mb-4 line-clamp-4">
                  {dest.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="text-[11px] text-slate-500 mb-3">
                  <span className="font-semibold text-charcoal-700">Intakes:</span>{" "}
                  {dest.intakes}
                </div>
                <Link
                  href="#inquiry"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-royal-700 hover:text-royal-800 transition-colors group"
                >
                  <span>{dest.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
