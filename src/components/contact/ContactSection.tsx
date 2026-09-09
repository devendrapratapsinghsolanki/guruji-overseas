import React from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  Navigation,
} from "lucide-react";
import { Container, SectionHeading, Badge } from "@/components/ui";
import { COMPANY_INFO } from "@/data/company";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white border-b border-border-subtle">
      <Container>
        <SectionHeading
          kicker="Visit or Reach Out"
          title="Contact Guruji Overseas in Rohtak"
          subtitle="Our counselors and language trainers are available at our Sheetal Lifestyle Mall office for in-person advisory and phone consultations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* Phone Channel */}
            <div className="p-6 rounded-xl border border-border-subtle bg-surface-gray flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-navy-50 text-navy-900 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                  Direct Phone / Helpline
                </span>
                <a
                  href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, "")}`}
                  className="text-lg font-bold text-navy-950 hover:text-royal-600 transition-colors block"
                >
                  {COMPANY_INFO.contact.displayPhone}
                </a>
                <p className="text-xs text-charcoal-600 mt-1">
                  Call for appointments, batch schedules, and admission queries.
                </p>
              </div>
            </div>

            {/* WhatsApp Channel */}
            <div className="p-6 rounded-xl border border-emerald-200 bg-emerald-50/50 flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-0.5">
                  WhatsApp Advisory
                </span>
                <a
                  href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-emerald-950 hover:text-emerald-800 transition-colors block"
                >
                  Chat on WhatsApp: {COMPANY_INFO.contact.displayPhone}
                </a>
                <p className="text-xs text-emerald-800 mt-1">
                  Instant response during working hours for quick doubts.
                </p>
              </div>
            </div>

            {/* Office Timings & Physical Details */}
            <div className="p-6 rounded-xl border border-border-subtle bg-white flex items-start gap-4 shadow-subtle">
              <div className="w-11 h-11 rounded-lg bg-navy-50 text-navy-900 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                  Working Hours
                </span>
                <div className="text-sm font-bold text-navy-950">
                  {COMPANY_INFO.contact.officeHours}
                </div>
                <p className="text-xs text-charcoal-600 mt-1">
                  Sunday: Closed (Available via prior appointment for working professionals).
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Physical Office Location & Map Interface */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-xl border border-border-subtle bg-surface-gray p-6 sm:p-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <Badge variant="navy" size="sm">
                  Physical Office
                </Badge>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-royal-600" /> Opposite D-Park
                </span>
              </div>

              <h3 className="text-xl font-bold text-navy-950 mb-2">
                {COMPANY_INFO.legalName}
              </h3>

              <div className="text-sm text-charcoal-700 leading-relaxed mb-6 space-y-1">
                <p className="font-semibold text-navy-900">
                  {COMPANY_INFO.location.addressLine1}
                </p>
                <p>{COMPANY_INFO.location.addressLine2}</p>
                <p>{COMPANY_INFO.location.cityStateZip}</p>
              </div>
            </div>

            {/* Google Maps Architectural Component */}
            <div className="rounded-lg border border-slate-300 bg-white p-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-navy-50 border border-navy-100 flex items-center justify-center mx-auto text-navy-800">
                <Navigation className="w-6 h-6 text-royal-600" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-navy-950">
                  Google Maps Location
                </h4>
                <p className="text-xs text-charcoal-600 max-w-sm mx-auto mt-1">
                  Located conveniently in Sheetal Lifestyle Mall, directly opposite
                  the landmark D-Park in Rohtak.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="https://www.google.com/maps/search/Sheetal+Lifestyle+Mall+Rohtak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-navy-900 text-white text-xs font-semibold hover:bg-navy-850 transition-colors"
                >
                  <span>Open Directions in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
