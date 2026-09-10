"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mic,
  Headphones,
  BookOpen,
  PenTool,
  CheckCircle2,
  ArrowRight,
  Computer,
  Sparkles,
  Award,
} from "lucide-react";
import { Container } from "@/components/ui";

const testTracks = {
  ielts: {
    name: "IELTS Masterclass (Academic & General)",
    badge: "IDP & British Council Curriculum",
    targetScore: "Band 7.0 - 8.5 Target",
    description:
      "Comprehensive classroom coaching focused on lexical resource, natural speaking fluency, and rigorous essay structure for university admissions and PR pathways.",
    modules: [
      { name: "1-on-1 Daily Speaking", desc: "Individual mock interviews with cue card drills and instant pronunciation corrections." },
      { name: "Writing Task 1 & 2 Audits", desc: "Detailed line-by-line feedback on coherence, cohesion, grammar, and vocabulary." },
      { name: "Reading Strategy Drills", desc: "Skimming, scanning, True/False/Not Given mastery under strict time limits." },
      { name: "Audio Listening Lab", desc: "Multi-accent practice covering British, Australian, and North American audio tracks." },
    ],
    features: [
      "Small batch size (max 15 students)",
      "Daily individual speaking evaluation",
      "Full-length weekly diagnostic mock tests",
      "Comprehensive printed study material",
    ],
  },
  pte: {
    name: "PTE Academic Computer Lab",
    badge: "Pearson AI Software Exam Practice",
    targetScore: "Score 65 - 79+ Target",
    description:
      "Specialized computer lab training designed around Pearson's automated scoring algorithms — focusing on oral fluency, pronunciation pitch, and repeat sentence precision.",
    modules: [
      { name: "AI Speech Scoring Practice", desc: "Real-time acoustic analysis ensuring optimal microphone positioning and rhythm." },
      { name: "Write From Dictation", desc: "Targeted memory retention techniques and high-frequency exam question banks." },
      { name: "Read Aloud & Repeat Sentence", desc: "Fluency without unnatural pauses to maximize speaking and reading sub-scores." },
      { name: "Full Computerized Mocks", desc: "Identical software interface to the official Pearson test center." },
    ],
    features: [
      "Dedicated computer terminal per student",
      "Daily Pearson software lab access",
      "High-frequency predicted exam question sets",
      "Fluency & template mastery coaching",
    ],
  },
};

export function TestPrepSection() {
  const [activeTab, setActiveTab] = useState<"ielts" | "pte">("ielts");
  const track = testTracks[activeTab];

  return (
    <section id="test-prep" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-700 mb-2">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>Language &amp; Testing Academy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-[1.12]">
            Targeted IELTS &amp; PTE Masterclasses in Rohtak
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Language scores determine your university eligibility and visa success. We combine experienced faculty with daily computer lab mock evaluations.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-3 mb-10 border-b border-slate-200 pb-4">
          <button
            onClick={() => setActiveTab("ielts")}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "ielts"
                ? "bg-slate-950 text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            IELTS Academic &amp; General
          </button>
          <button
            onClick={() => setActiveTab("pte")}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "pte"
                ? "bg-slate-950 text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            PTE Academic Lab
          </button>
        </div>

        {/* Split Workshop Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Modules & Curriculum */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FBFBF9] border border-slate-200 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full uppercase tracking-wider">
                  {track.badge}
                </span>
                <span className="text-xs font-black text-slate-900 bg-white border border-slate-200 px-3 py-1 rounded-full">
                  {track.targetScore}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-950">
                {track.name}
              </h3>
              
              <p className="text-sm text-slate-600 leading-relaxed">
                {track.description}
              </p>

              {/* 4 Core Module Tiles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
                {track.modules.map((mod, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs"
                  >
                    <h4 className="text-xs font-bold text-slate-950 mb-1">
                      {mod.name}
                    </h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {mod.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Action */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-slate-950 text-white">
              <div>
                <h4 className="text-sm font-bold text-white">
                  Join a Free Demo Class in Rohtak
                </h4>
                <p className="text-xs text-slate-400">
                  Batches starting every Monday at Sheetal Lifestyle Mall.
                </p>
              </div>
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-all shrink-0"
              >
                Book Free Trial Class
              </Link>
            </div>
          </div>

          {/* Right Column: Lab Photo & Features Ledger */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-sm">
              <Image
                src="/images/ielts-pte-lab.jpg"
                alt="Guruji Overseas Rohtak IELTS & PTE Computer Lab"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] font-extrabold uppercase text-amber-300">
                  On-Campus Facility
                </span>
                <p className="text-sm font-bold text-white">
                  Modern Computer Lab with Pearson Practice Software
                </p>
              </div>
            </div>

            {/* Features Checklist */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                What Every Student Receives:
              </h4>
              {track.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
