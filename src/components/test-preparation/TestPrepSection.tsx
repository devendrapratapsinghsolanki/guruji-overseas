"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  BookOpen,
  Headphones,
  PenTool,
  Mic,
  FileCheck,
  CheckCircle,
  Clock,
  ArrowRight,
  Computer,
  Sparkles,
} from "lucide-react";
import { Container, Button, Badge, PhotoPlaceholder } from "@/components/ui";
import { COMPANY_INFO } from "@/data/company";

const modules = [
  {
    icon: Mic,
    name: "Speaking",
    desc: "1-on-1 interview practice drills to eliminate hesitation and build natural fluency.",
  },
  {
    icon: Headphones,
    name: "Listening",
    desc: "Accents comprehension training with audio practice covering British, Australian, and American dialects.",
  },
  {
    icon: BookOpen,
    name: "Reading",
    desc: "Skimming, scanning, and time-management strategies for complex academic texts.",
  },
  {
    icon: PenTool,
    name: "Writing",
    desc: "Task 1 & Task 2 structure guidelines, essay evaluations, and grammar corrections.",
  },
  {
    icon: Computer,
    name: "Mock Tests",
    desc: "Full-length timed computer exams simulating real test center conditions.",
  },
  {
    icon: FileCheck,
    name: "Feedback",
    desc: "Regular score diagnostics identifying exact weak points for targeted band improvement.",
  },
];

export function TestPrepSection() {
  const [activeTab, setActiveTab] = useState<"ielts" | "pte" | "other">("ielts");

  return (
    <section id="test-prep" className="py-20 lg:py-28 bg-white border-b border-border-subtle">
      <Container>
        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Comprehensive Coaching Details & Tabbed View */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <Badge variant="navy" size="sm" className="mb-4">
              Language &amp; Test Coaching
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight mb-5">
              Prepare With Confidence.
            </h2>

            <p className="text-base text-charcoal-600 leading-relaxed mb-6 font-normal">
              Meeting university and visa language benchmarks requires focused,
              systematic practice. At Guruji Overseas Rohtak, our classroom coaching
              combines structured daily lessons, individual speaking assessments, and
              simulated computer lab testing.
            </p>

            {/* Test Selection Tabs */}
            <div className="flex items-center gap-2 p-1 rounded-lg bg-surface-gray border border-border-subtle mb-8 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setActiveTab("ielts")}
                className={`px-4 py-2 rounded text-xs font-bold transition-colors ${
                  activeTab === "ielts"
                    ? "bg-navy-900 text-white shadow-subtle"
                    : "text-charcoal-600 hover:text-navy-900"
                }`}
              >
                IELTS (Academic &amp; GT)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("pte")}
                className={`px-4 py-2 rounded text-xs font-bold transition-colors ${
                  activeTab === "pte"
                    ? "bg-navy-900 text-white shadow-subtle"
                    : "text-charcoal-600 hover:text-navy-900"
                }`}
              >
                PTE Academic
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("other")}
                className={`px-4 py-2 rounded text-xs font-bold transition-colors ${
                  activeTab === "other"
                    ? "bg-navy-900 text-white shadow-subtle"
                    : "text-charcoal-600 hover:text-navy-900"
                }`}
              >
                Spoken English &amp; Other Tests
              </button>
            </div>

            {/* Tab Descriptions */}
            {activeTab === "ielts" && (
              <div className="mb-8 p-5 rounded-lg bg-surface-gray/50 border border-border-subtle w-full">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-navy-950">
                    IELTS Coaching Curriculum
                  </h3>
                  <span className="text-xs font-semibold text-royal-600">
                    Morning &amp; Evening Batches
                  </span>
                </div>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  Comprehensive coverage of British Council / IDP test formats.
                  Students receive daily vocabulary drills, authentic practice
                  materials, and one-on-one speaking mock tests.
                </p>
              </div>
            )}

            {activeTab === "pte" && (
              <div className="mb-8 p-5 rounded-lg bg-surface-gray/50 border border-border-subtle w-full">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-navy-950">
                    PTE Academic Fast-Track Training
                  </h3>
                  <span className="text-xs font-semibold text-royal-600">
                    Computer Lab Practice
                  </span>
                </div>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  Dedicated computer practice with automated scoring insights.
                  Covers Repeat Sentence, Describe Image, and Read Aloud techniques
                  required for Canada, Australia, and UK admissions.
                </p>
              </div>
            )}

            {activeTab === "other" && (
              <div className="mb-8 p-5 rounded-lg bg-surface-gray/50 border border-border-subtle w-full">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-navy-950">
                    Spoken English, TOEFL &amp; Duolingo
                  </h3>
                  <span className="text-xs font-semibold text-royal-600">
                    Interview Readiness
                  </span>
                </div>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  Foundational grammar, accent clarity, and day-to-day conversational
                  fluency. We also guide candidates preparing for TOEFL iBT and the
                  Duolingo English Test (DET) where applicable.
                </p>
              </div>
            )}

            {/* 6 Key Skill & Practice Modules Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full mb-8">
              {modules.map((m, idx) => {
                const Icon = m.icon;
                return (
                  <div
                    key={idx}
                    className="p-3 rounded-md bg-white border border-border-subtle flex flex-col"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-3.5 h-3.5 text-royal-600" />
                      <span className="text-xs font-bold text-navy-950">
                        {m.name}
                      </span>
                    </div>
                    <p className="text-[11px] text-charcoal-600 leading-tight">
                      {m.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Primary CTA */}
            <div className="flex flex-wrap items-center gap-3">
              <Button
                variant="royal"
                size="lg"
                href="#inquiry"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Test Preparation
              </Button>
              <a
                href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, "")}`}
                className="px-4 py-2.5 rounded text-xs font-bold text-charcoal-700 hover:text-navy-900 transition-colors"
              >
                Inquire Batch Timings
              </a>
            </div>
          </div>

          {/* Right Column: Split-Screen Real Photography Composition */}
          <div className="lg:col-span-5 space-y-4">
            <div className="group rounded-2xl overflow-hidden border border-slate-200 bg-white p-2.5 shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-navy-950">
                <Image
                  src="/images/ielts-pte-lab.jpg"
                  alt="Guruji Overseas IELTS & PTE Computer Lab Classroom"
                  fill
                  className="object-cover img-zoom group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                    Official Training Setup
                  </span>
                  <span className="text-sm font-bold">
                    Computer Headset Stations &amp; Speaking Cubicles
                  </span>
                </div>
              </div>
              <div className="p-3 text-xs text-charcoal-700 flex items-center justify-between">
                <span className="font-semibold text-navy-950">
                  Daily Interactive Sessions
                </span>
                <span className="text-amber-500 font-semibold">Rohtak Classroom Center</span>
              </div>
            </div>

            <div className="rounded-lg border border-border-subtle bg-surface-gray/70 p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy-950">
                    Individual Doubt Resolution
                  </h4>
                  <p className="text-[11px] text-charcoal-600">
                    Faculty support after each lecture to review essays and answers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
