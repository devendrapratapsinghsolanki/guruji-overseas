import React from "react";
import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui";
import { Logo } from "@/components/navigation/Logo";
import { COMPANY_INFO } from "@/data/company";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400 border-t border-navy-900 pt-16 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Column 1: Brand & Office Information */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="footer" theme="dark" />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mt-3">
              {COMPANY_INFO.legalName} is an overseas education and immigration
              consultancy established in {COMPANY_INFO.establishedYear} in Rohtak,
              Haryana, offering comprehensive study abroad counseling, IELTS/PTE
              preparation, and visa assistance.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.location.addressLine1}, {COMPANY_INFO.location.addressLine2}, {COMPANY_INFO.location.cityStateZip}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, "")}`}
                  className="hover:text-white font-semibold text-slate-300"
                >
                  {COMPANY_INFO.contact.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{COMPANY_INFO.contact.officeHours}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Study Abroad Destinations */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Destinations
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/study-abroad/canada" className="hover:text-amber-400 transition-colors">
                  Study in Canada
                </Link>
              </li>
              <li>
                <Link href="/study-abroad/uk" className="hover:text-amber-400 transition-colors">
                  Study in United Kingdom
                </Link>
              </li>
              <li>
                <Link href="/study-abroad/australia" className="hover:text-amber-400 transition-colors">
                  Study in Australia
                </Link>
              </li>
              <li>
                <Link href="/study-abroad/new-zealand" className="hover:text-amber-400 transition-colors">
                  Study in New Zealand
                </Link>
              </li>
              <li>
                <Link href="/study-abroad/usa" className="hover:text-amber-400 transition-colors">
                  Study in United States
                </Link>
              </li>
              <li>
                <Link href="/study-abroad/germany" className="hover:text-amber-400 transition-colors">
                  Study in Germany
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/study-abroad" className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1">
                  <span>View All Destinations</span>
                  <span>→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Test Preparation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Test Preparation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/test-preparation/ielts" className="hover:text-amber-400 transition-colors">
                  IELTS Academic Coaching
                </Link>
              </li>
              <li>
                <Link href="/test-preparation/ielts" className="hover:text-amber-400 transition-colors">
                  IELTS General Training
                </Link>
              </li>
              <li>
                <Link href="/test-preparation/pte" className="hover:text-amber-400 transition-colors">
                  PTE Academic Lab Coaching
                </Link>
              </li>
              <li>
                <Link href="/test-preparation" className="hover:text-amber-400 transition-colors">
                  English Language &amp; Spoken Drills
                </Link>
              </li>
              <li>
                <Link href="/test-preparation" className="hover:text-amber-400 transition-colors">
                  Full-Length Mock Tests
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/test-preparation" className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1">
                  <span>Compare IELTS vs PTE</span>
                  <span>→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Services & Company */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  About Our Office
                </Link>
              </li>
              <li>
                <Link href="/visa-services" className="hover:text-amber-400 transition-colors">
                  Visa Guidance Services
                </Link>
              </li>
              <li>
                <Link href="/universities" className="hover:text-amber-400 transition-colors">
                  University Directory
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="hover:text-amber-400 transition-colors">
                  Success Stories &amp; Visa Results
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-amber-400 transition-colors">
                  Study Guides &amp; Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  Contact &amp; Rohtak Map
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-navy-900 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#inquiry" className="hover:text-slate-300">
              Privacy Policy
            </Link>
            <Link href="#inquiry" className="hover:text-slate-300">
              Terms &amp; Conditions
            </Link>
            <Link href="#inquiry" className="hover:text-slate-300">
              Legal Disclaimer
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
