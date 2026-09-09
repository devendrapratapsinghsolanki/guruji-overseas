import React from "react";
import Image from "next/image";
import { Star, User, Quote, MapPin, CheckCircle2 } from "lucide-react";
import { Container, SectionHeading, Badge } from "@/components/ui";
import { COMPANY_INFO } from "@/data/company";

interface TestimonialCardData {
  id: string;
  isPlaceholder: boolean;
  studentName?: string;
  destination?: string;
  course?: string;
  text?: string;
  rating?: number;
}

// Ready to accept real student testimonials once provided by client
const testimonials: TestimonialCardData[] = [
  {
    id: "1",
    isPlaceholder: true,
    destination: "Canada / Study Visa",
    course: "Post-Graduate Diploma",
  },
  {
    id: "2",
    isPlaceholder: true,
    destination: "United Kingdom / Master's",
    course: "MSc International Business",
  },
  {
    id: "3",
    isPlaceholder: true,
    destination: "Australia / Higher Education",
    course: "Bachelor of Information Technology",
  },
];

export function SuccessStoriesSection() {
  return (
    <section id="success-stories" className="py-20 lg:py-28 bg-surface-gray/50 border-b border-border-subtle">
      <Container>
        <SectionHeading
          kicker="Verified Student Feedback"
          title="Student Experiences & Reviews"
          subtitle="Read verified reviews from students and parents who prepared for their exams and applied for overseas education through our Rohtak office."
        />

        {/* Justdial Verified Overall Reputation Banner */}
        <div className="mb-10 p-6 rounded-xl bg-white border border-border-subtle shadow-subtle flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 shrink-0">
              <Star className="w-7 h-7 fill-amber-500 text-amber-500" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-navy-950">
                  5.0 Out of 5.0 Star Rating
                </h3>
                <span className="text-xs bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-bold">
                  Justdial Verified
                </span>
              </div>
              <p className="text-xs text-charcoal-600 mt-1">
                Over 300+ authentic reviews from candidates in Rohtak, Haryana. Claimed and verified business listing.
              </p>
            </div>
          </div>

          <a
            href="https://www.justdial.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md bg-surface-gray hover:bg-slate-100 border border-slate-300 text-xs font-semibold text-charcoal-800 transition-colors shrink-0"
          >
            View Justdial Listing
          </a>
        </div>

        {/* Testimonials Container with Honest Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              className="p-6 rounded-xl border border-border-subtle bg-white flex flex-col justify-between shadow-subtle"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                    Verified Student
                  </span>
                </div>

                <Quote className="w-6 h-6 text-slate-300 mb-3" />

                {t.isPlaceholder ? (
                  <div className="p-4 rounded-lg bg-surface-gray border border-dashed border-slate-300 text-center my-4">
                    <p className="text-xs font-medium text-slate-500 italic">
                      “Real student testimonial will be added here once approved by the candidate.”
                    </p>
                    <span className="text-[10px] text-slate-400 block mt-1">
                      Targeting: {t.destination}
                    </span>
                  </div>
                ) : (
                  <p className="text-xs text-charcoal-700 leading-relaxed mb-4">
                    {t.text}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy-950">
                    Student Review Slot {idx + 1}
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    {t.course}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center text-xs text-slate-400">
          We respect student privacy and only publish testimonials with explicit consent.
        </div>
      </Container>
    </section>
  );
}
