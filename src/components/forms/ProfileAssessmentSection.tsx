"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Lock,
  Phone,
  Send,
  HelpCircle,
} from "lucide-react";
import { Container, Button, Badge, Input, Select } from "@/components/ui";
import { COMPANY_INFO } from "@/data/company";

export function ProfileAssessmentSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="inquiry" className="py-20 lg:py-28 bg-white border-b border-border-subtle">
      <Container size="narrow">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Badge variant="amber" size="sm" className="mb-3">
            Free Evaluation
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight leading-tight mb-4">
            Not Sure Where Your Journey Should Begin?
          </h2>
          <p className="text-base text-charcoal-600 leading-relaxed">
            Share your education background, goals and preferred destination and get
            guidance on the next steps from our Rohtak advisory team.
          </p>
        </div>

        <div className="rounded-2xl border border-border-subtle bg-surface-gray p-6 sm:p-10 shadow-card">
          {submitted ? (
            <div className="text-center py-10 space-y-4 animate-in fade-in">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy-950">
                Inquiry Received Successfully
              </h3>
              <p className="text-sm text-charcoal-600 max-w-md mx-auto leading-relaxed">
                Thank you. Our counselor will review your profile and contact you directly
                at your provided number within 24 working hours.
              </p>
              <div className="pt-4">
                <a
                  href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-royal-700 hover:text-royal-800"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Need urgent advice? Call us directly: {COMPANY_INFO.contact.displayPhone}</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input
                  label="Full Name *"
                  placeholder="e.g. Amit Kumar"
                  required
                />
                <Input
                  label="Mobile / WhatsApp Number *"
                  type="tel"
                  placeholder="+91 7056 544 009"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Select
                  label="Highest / Current Qualification"
                  options={[
                    { value: "12th", label: "12th Standard / Higher Secondary" },
                    { value: "diploma", label: "Polytechnic / Diploma" },
                    { value: "bachelors", label: "Bachelor's Degree (Ongoing or Completed)" },
                    { value: "masters", label: "Master's Degree" },
                  ]}
                />
                <Select
                  label="Preferred Study Destination"
                  options={[
                    { value: "canada", label: "Canada" },
                    { value: "uk", label: "United Kingdom" },
                    { value: "australia", label: "Australia" },
                    { value: "new-zealand", label: "New Zealand" },
                    { value: "usa", label: "United States" },
                    { value: "germany", label: "Germany" },
                    { value: "undecided", label: "Need advice to choose" },
                  ]}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Select
                  label="Primary Service Needed"
                  options={[
                    { value: "study-abroad", label: "Study Abroad Admissions" },
                    { value: "ielts-coaching", label: "IELTS Classroom Coaching" },
                    { value: "pte-coaching", label: "PTE Academic Coaching" },
                    { value: "spoken-english", label: "Spoken English Classes" },
                    { value: "student-visa", label: "Student Visa Filing" },
                    { value: "visitor-visa", label: "Visitor / Tourist Visa" },
                    { value: "dependent-visa", label: "Dependent / Spouse Visa" },
                  ]}
                />
                <Input
                  label="Your City / District"
                  placeholder="e.g. Rohtak / Sonipat / Panipat"
                />
              </div>

              <Button
                variant="royal"
                size="lg"
                type="submit"
                className="w-full mt-2"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Get Free Profile Assessment
              </Button>

              <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500 pt-2 border-t border-slate-200">
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                  Your information is strictly confidential.
                </span>
                <span>
                  Office: Sheetal Lifestyle Mall, Opp. D-Park, Rohtak
                </span>
              </div>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
