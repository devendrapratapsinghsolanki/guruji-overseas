"use client";

import React from "react";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Navigation,
} from "lucide-react";

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { Container, Badge, SectionHeading } from "@/components/ui";
import { COMPANY_INFO } from "@/data/company";
import { BookFreeCounsellingForm } from "@/components/forms/BookFreeCounsellingForm";

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello Guruji Overseas, I would like to book a free in-person counselling session at your Rohtak office."
  )}`;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <PageHero
        breadcrumbs={[{ label: "Contact Us" }]}
        badge="Rohtak Physical Headquarters"
        title="Contact Guruji Overseas in Rohtak, Haryana"
        subtitle="Visit our official office at Sheetal Lifestyle Mall, Opposite D-Park, Rohtak for personalized study abroad counselling, IELTS/PTE batch registration, and visa file review."
        stats={[
          { label: "Direct Phone", value: COMPANY_INFO.contact.displayPhone },
          { label: "WhatsApp Support", value: "Available Daily" },
          { label: "Working Hours", value: "Mon - Sat: 9:30 AM - 6:30 PM" },
          { label: "Location", value: "Opp. D-Park, Rohtak" },
        ]}
        primaryCtaText="Chat on WhatsApp"
        primaryCtaHref={whatsappUrl}
      />

      {/* Main Contact Grid: Info Cards + Reusable Booking Form */}
      <section className="py-16 sm:py-24 bg-surface-gray/50 border-b border-border-subtle">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Contact Cards & Office Details */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <Badge variant="navy" size="md" className="mb-2">
                  Get in Touch
                </Badge>
                <h2 className="text-2xl font-extrabold text-navy-950 tracking-tight">
                  Reach Our Advisory Team
                </h2>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mt-1">
                  We welcome walk-in visits, telephonic enquiries, and WhatsApp messages from prospective students and parents across Haryana.
                </p>
              </div>

              {/* Direct Call & WhatsApp Action Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
                {/* Phone Call Card 1 */}
                <a
                  href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, "")}`}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-royal-300 hover:shadow-card transition-all flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-navy-50 text-navy-900 group-hover:bg-navy-950 group-hover:text-amber-400 transition-colors flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Primary Advisory Helpline
                    </div>
                    <div className="text-sm font-extrabold text-navy-950 group-hover:text-royal-700 transition-colors">
                      {COMPANY_INFO.contact.primaryPhone}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">IELTS/PTE Coaching &amp; General Inquiries</div>
                  </div>
                </a>

                {/* Phone Call Card 2 */}
                <a
                  href={`tel:${COMPANY_INFO.contact.secondaryPhone.replace(/\s+/g, "")}`}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-royal-300 hover:shadow-card transition-all flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-royal-50 text-royal-700 group-hover:bg-royal-700 group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Admissions &amp; Visa Helpline
                    </div>
                    <div className="text-sm font-extrabold text-navy-950 group-hover:text-royal-700 transition-colors">
                      {COMPANY_INFO.contact.secondaryPhone}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">University Admissions &amp; Visa Processing</div>
                  </div>
                </a>

                {/* WhatsApp Chat Card */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-card transition-all flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.952 3.71 1.453 5.711 1.454h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Instant WhatsApp
                    </div>
                    <div className="text-sm font-extrabold text-navy-950 group-hover:text-emerald-700 transition-colors">
                      {COMPANY_INFO.contact.primaryPhone}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Direct chat with counsellor</div>
                  </div>
                </a>

                {/* Email Support Card */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-royal-50 text-royal-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Official Email
                    </div>
                    <a
                      href={`mailto:${COMPANY_INFO.contact.email}`}
                      className="text-sm font-bold text-navy-950 hover:text-royal-700"
                    >
                      {COMPANY_INFO.contact.email}
                    </a>
                    <div className="text-[11px] text-slate-500 mt-0.5">Inquiries &amp; transcripts</div>
                  </div>
                </div>

                {/* Office Address Card */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-navy-950 mb-0.5">
                        {COMPANY_INFO.legalName}
                      </div>
                      <div className="text-xs text-charcoal-700 leading-relaxed">
                        {COMPANY_INFO.location.addressLine1}
                      </div>
                      <div className="text-xs text-charcoal-700">
                        {COMPANY_INFO.location.addressLine2}
                      </div>
                      <div className="text-xs font-semibold text-navy-900 mt-1">
                        {COMPANY_INFO.location.cityStateZip} (Opp. D-Park)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-slate-100 text-xs text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-royal-600 shrink-0" />
                    <span>{COMPANY_INFO.contact.officeHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Reusable Book Free Counselling Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-card">
                <div className="mb-6">
                  <Badge variant="amber" size="sm" className="mb-1.5">
                    Zero Obligation Evaluation
                  </Badge>
                  <h3 className="text-xl sm:text-2xl font-bold text-navy-950">
                    Book Free Counselling Session
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
                    Fill in your academic and study goals below. Our senior advisor in Rohtak will review your eligibility and reach out within 24 hours.
                  </p>
                </div>

                <BookFreeCounsellingForm sourceContext="Contact Page Inquiry" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Interactive Map & Directions from Key Landmarks */}
      <section className="py-16 sm:py-20 bg-white border-b border-border-subtle">
        <Container>
          <SectionHeading
            kicker="Find Our Office"
            title="Location &amp; Directions in Rohtak"
            subtitle="Conveniently situated in the commercial heart of Rohtak opposite D-Park on Delhi Road."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Directions Box */}
            <div className="lg:col-span-5 p-7 rounded-2xl bg-surface-gray border border-slate-200 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-base font-bold text-navy-950 mb-3 flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-royal-600" />
                  <span>How to Reach Us:</span>
                </h3>

                <div className="space-y-3.5 text-xs text-charcoal-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="font-bold text-navy-950 block mb-0.5">From Rohtak New Bus Stand:</span>
                    <span>Approx. 2.5 km (7-10 minutes by auto-rickshaw or e-rickshaw towards D-Park / Model Town).</span>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="font-bold text-navy-950 block mb-0.5">From Rohtak Railway Junction:</span>
                    <span>Approx. 3.2 km via Delhi Road. Landmark: Opposite D-Park inside Sheetal Lifestyle Mall on the 1st Floor (Shop 125).</span>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="font-bold text-navy-950 block mb-0.5">From Sonipat / Delhi via Highway:</span>
                    <span>Direct access via Rohtak Delhi Road into Model Town area with ample parking in Sheetal Lifestyle Mall.</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    "Sheetal Lifestyle Mall, Opposite D-Park, Model Town, Rohtak, Haryana 124001"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-royal-700 hover:text-royal-800"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open in Google Maps Application →</span>
                </a>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-200 shadow-sm min-h-[350px] relative bg-slate-100">
              <iframe
                title="Guruji Overseas Office Location in Rohtak"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.565863836371!2d76.59365!3d28.89245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d851604a88f57%3A0x6a2c2626e38b34ec!2sSheetal%20Lifestyle%20Mall!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
