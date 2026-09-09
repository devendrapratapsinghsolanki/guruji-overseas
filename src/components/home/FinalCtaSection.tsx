import React from "react";
import { ArrowRight, Phone, MessageSquare, MapPin } from "lucide-react";
import { Container, Button, Badge, PhotoPlaceholder } from "@/components/ui";
import { COMPANY_INFO } from "@/data/company";

export function FinalCtaSection() {
  return (
    <section className="py-20 lg:py-28 bg-navy-900 text-white relative overflow-hidden border-b border-navy-800">
      <Container>
        <div className="rounded-2xl bg-navy-950 border border-navy-800 p-8 sm:p-12 lg:p-16 relative z-10 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <Badge variant="amber" size="sm" className="mb-4">
                Begin Your Journey
              </Badge>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-5 text-white">
                Your International Journey Starts With the Right Guidance.
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
                Visit our Rohtak office or schedule a call with our experienced
                counselors today. We evaluate your profile, guide your test preparation,
                and navigate foreign admissions with genuine transparency.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
                <Button
                  variant="royal"
                  size="lg"
                  href="#inquiry"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto shadow-subtle"
                >
                  Book Free Counselling
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, "")}`}
                  leftIcon={<Phone className="w-4 h-4" />}
                  className="w-full sm:w-auto text-white border-slate-700 hover:border-white hover:bg-white/10"
                >
                  Talk to an Expert
                </Button>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  Office: {COMPANY_INFO.location.addressLine1}, {COMPANY_INFO.location.city}
                </span>
              </div>
            </div>

            {/* Right Image Composition */}
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-navy-800 bg-navy-900 p-2 shadow-card">
                <PhotoPlaceholder
                  alt="Guruji Overseas Rohtak Office and Team"
                  category="counseling"
                  label="Office Reception & Advisory Desk"
                  aspectRatio="4/3"
                />
                <div className="p-3 text-xs text-slate-400 flex items-center justify-between">
                  <span>Opposite D-Park, Rohtak</span>
                  <span className="text-amber-400 font-semibold">Established 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
