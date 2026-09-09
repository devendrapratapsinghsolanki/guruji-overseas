import React from "react";
import Image from "next/image";
import { ArrowRight, Phone, MessageSquare, MapPin, Sparkles, GraduationCap } from "lucide-react";
import { Container, Button, Badge } from "@/components/ui";
import { COMPANY_INFO } from "@/data/company";

export function FinalCtaSection() {
  return (
    <section className="py-20 lg:py-28 bg-navy-900 text-white relative overflow-hidden border-b border-navy-800">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-royal-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="rounded-3xl bg-navy-950 border border-navy-800 p-8 sm:p-12 lg:p-16 relative z-10 shadow-card overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <Badge variant="amber" size="sm" className="mb-4">
                Begin Your Global Journey
              </Badge>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-5 text-white">
                Your International Dream Starts With Honest Direction.
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
                Visit our Rohtak center or schedule a personalized consultation today. We evaluate your academic background, provide dedicated IELTS &amp; PTE training, and manage foreign university applications with complete transparency.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
                <Button
                  variant="royal"
                  size="lg"
                  href="#inquiry"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto shadow-card"
                >
                  Book Free In-Person Counselling
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, "")}`}
                  leftIcon={<Phone className="w-4 h-4" />}
                  className="w-full sm:w-auto text-white border-slate-700 hover:border-white hover:bg-white/10"
                >
                  Call Rohtak Office
                </Button>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  Center: {COMPANY_INFO.location.addressLine1}, {COMPANY_INFO.location.landmark}, {COMPANY_INFO.location.city}
                </span>
              </div>
            </div>

            {/* Right Image Composition */}
            <div className="lg:col-span-5 relative">
              {/* Floating Top Badge */}
              <div className="hidden sm:flex absolute -top-4 -right-4 z-20 animate-float items-center gap-2 px-3.5 py-1.5 rounded-xl glass-navy border border-white/20 shadow-card">
                <GraduationCap className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-white">Global University Grads</span>
              </div>

              <div className="group rounded-2xl overflow-hidden border border-navy-800 bg-navy-900 p-2.5 shadow-card hover:border-slate-600 transition-all duration-300">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-navy-950">
                  <Image
                    src="/images/international-graduates.jpg"
                    alt="International graduates celebrating at university convocation"
                    fill
                    className="object-cover img-zoom group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                      Study • Graduate • Settle
                    </span>
                    <span className="text-sm font-bold">
                      Your Success Is Our Mission
                    </span>
                  </div>
                </div>

                <div className="p-3 text-xs text-slate-300 flex items-center justify-between">
                  <span>Opposite D-Park, Rohtak</span>
                  <span className="text-amber-400 font-semibold">Established {COMPANY_INFO.establishedYear}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
