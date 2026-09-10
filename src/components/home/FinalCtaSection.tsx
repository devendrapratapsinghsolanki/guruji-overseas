import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, MapPin, Sparkles, ShieldCheck } from "lucide-react";
import { Container, Button } from "@/components/ui";
import { COMPANY_INFO } from "@/data/company";

export function FinalCtaSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#0B132B] text-white relative overflow-hidden border-b border-slate-800">
      <Container>
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-12 lg:p-16 relative z-10 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-bold uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Begin Your Global Education</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] mb-5 text-white">
                Take the First Step with Genuine, Honest Counsel.
              </h2>

              <p className="text-base text-slate-300 leading-relaxed mb-8 max-w-xl">
                Visit our official Rohtak branch or speak with an experienced admissions advisor. 
                Get your academic profile evaluated, choose the right course, and start your visa filing with total confidence.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8 w-full sm:w-auto">
                <Button
                  variant="royal"
                  size="lg"
                  href="/contact"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 border-none shadow-lg shadow-amber-500/10"
                >
                  Book Free In-Person Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, "")}`}
                  leftIcon={<Phone className="w-4 h-4" />}
                  className="text-slate-200 border-slate-700 hover:border-slate-500 hover:bg-white/5"
                >
                  Call Rohtak Desk
                </Button>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  Office: Sheetal Lifestyle Mall, Opposite D-Park, Model Town, Rohtak
                </span>
              </div>
            </div>

            {/* Right Photo Composition */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-800 p-2.5 shadow-xl">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900">
                  <Image
                    src="/images/international-graduates.jpg"
                    alt="International graduates celebrating at university convocation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                    <span className="text-[10px] font-extrabold uppercase text-amber-300">
                      Canada • UK • Australia • USA • Germany • NZ
                    </span>
                    <span className="text-sm font-bold text-white">
                      100% Impartial Admissions Advisory
                    </span>
                  </div>
                </div>

                <div className="p-3 text-xs text-slate-300 flex items-center justify-between">
                  <span>Opposite D-Park, Rohtak</span>
                  <span className="text-amber-400 font-semibold">Government Registered</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
