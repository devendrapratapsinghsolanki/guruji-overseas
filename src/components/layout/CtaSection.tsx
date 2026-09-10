import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, MessageCircle, MapPin, CheckCircle2, Shield } from "lucide-react";
import { Container, Button, Badge } from "@/components/ui";
import { COMPANY_INFO } from "@/data/company";

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  badge?: string;
}

export function CtaSection({
  title = "Ready to Begin Your Global Study Journey?",
  subtitle = "Visit our official office at Sheetal Lifestyle Mall, Opposite D-Park, Rohtak for an honest, comprehensive profile assessment and course selection counselling.",
  primaryButtonText = "Book Free In-Person Counselling",
  primaryButtonHref = "/contact",
  badge = "Direct Rohtak Advisory",
}: CtaSectionProps) {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello Guruji Overseas, I would like to book a free counselling session."
  )}`;

  return (
    <section className="py-16 sm:py-20 bg-navy-950 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-royal-700/20 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="amber" size="sm" className="mb-4 bg-amber-500/20 text-amber-300 border-amber-400/30">
            {badge}
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-8">
            <Button
              variant="royal"
              size="lg"
              href={primaryButtonHref}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="font-bold shadow-lg"
            >
              {primaryButtonText}
            </Button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-sm"
            >
              <svg
                className="w-4 h-4 fill-current shrink-0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.952 3.71 1.453 5.711 1.454h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp Us</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-navy-900 hover:bg-navy-850 text-slate-200 border border-slate-700 text-sm font-semibold transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{COMPANY_INFO.contact.displayPhone}</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 pt-6 border-t border-navy-900">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Sheetal Lifestyle Mall, Opp. D-Park, Rohtak</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Genuine Guidance | No Fake Promises</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
