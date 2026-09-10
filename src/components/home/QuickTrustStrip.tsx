import React from "react";
import Link from "next/link";
import {
  BookOpen,
  Award,
  Globe,
  GraduationCap,
  FileCheck2,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui";

const quickServices = [
  {
    icon: BookOpen,
    title: "IELTS Preparation",
    desc: "Targeted band strategies & speaking drills",
    href: "/test-preparation/ielts",
    tag: "Exam Prep",
  },
  {
    icon: Award,
    title: "PTE Preparation",
    desc: "Computer lab practice & scored mock tests",
    href: "/test-preparation/pte",
    tag: "Exam Prep",
  },
  {
    icon: Globe,
    title: "Study Abroad",
    desc: "Guidance for 6 top international destinations",
    href: "/study-abroad",
    tag: "Admissions",
  },
  {
    icon: GraduationCap,
    title: "University Admissions",
    desc: "Course shortlisting & application support",
    href: "/universities",
    tag: "Admissions",
  },
  {
    icon: FileCheck2,
    title: "Visa Assistance",
    desc: "Rigorous document audits & interview prep",
    href: "/visa-services",
    tag: "Visa Filing",
  },
];

const marqueeItems = [
  { label: "University of Toronto", country: "Canada 🇨🇦" },
  { label: "University of Manchester", country: "UK 🇬🇧" },
  { label: "Monash University", country: "Australia 🇦🇺" },
  { label: "Northeastern University", country: "USA 🇺🇸" },
  { label: "University of Auckland", country: "New Zealand 🇳🇿" },
  { label: "Technical University of Munich", country: "Germany 🇩🇪" },
  { label: "RWTH Aachen University", country: "Germany 🇩🇪" },
  { label: "University of British Columbia", country: "Canada 🇨🇦" },
  { label: "University of Sydney", country: "Australia 🇦🇺" },
  { label: "McGill University", country: "Canada 🇨🇦" },
];

export function QuickTrustStrip() {
  return (
    <section className="bg-surface-white border-b border-border-subtle relative z-20">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-border-subtle">
          {quickServices.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.href}
                className="group p-5 lg:p-6 flex flex-col justify-between hover:bg-slate-50/80 transition-all duration-150"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-md bg-navy-50 text-navy-900 flex items-center justify-center group-hover:bg-royal-600 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider group-hover:text-royal-600">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-navy-950 group-hover:text-royal-600 transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-3 mt-2 flex items-center gap-1 text-[11px] font-semibold text-royal-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Explore service</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </Link>
            );
          })}
        </div>
      </Container>

      {/* Infinite Animated University Ticker Bar */}
      <div className="border-t border-slate-200 bg-navy-950 text-white py-2.5 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-navy-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-navy-950 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-8 text-xs">
          {[...marqueeItems, ...marqueeItems].map((uni, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 whitespace-nowrap text-slate-300 font-medium"
            >
              <span className="text-amber-400">★</span>
              <span className="text-white font-semibold">{uni.label}</span>
              <span className="text-slate-400 text-[11px]">({uni.country})</span>
              <span className="text-slate-600">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
