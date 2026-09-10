"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  GraduationCap,
  BookOpen,
  Plane,
  Building2,
  Users,
  Award,
  Sparkles,
  ExternalLink,
  MessageCircle,
  HelpCircle,
  CalendarCheck,
  FileQuestion,
  Compass,
} from "lucide-react";

import { COMPANY_INFO } from "@/data/company";
import { Logo } from "@/components/navigation/Logo";
import { Container, Button, Badge } from "@/components/ui";
import { cn } from "@/lib/utils";

interface DropdownItem {
  title: string;
  description: string;
  href: string;
  flag?: string;
  badge?: string;
}

const studyAbroadDestinations: DropdownItem[] = [
  {
    title: "Study in Canada",
    description: "PGWP work rights, colleges & universities",
    href: "/study-abroad/canada",
    flag: "🇨🇦",
  },
  {
    title: "Study in United Kingdom",
    description: "1-year Master's & 2-year Graduate Route",
    href: "/study-abroad/uk",
    flag: "🇬🇧",
  },
  {
    title: "Study in Australia",
    description: "Group of Eight, top regional opportunities",
    href: "/study-abroad/australia",
    flag: "🇦🇺",
  },
  {
    title: "Study in New Zealand",
    description: "High quality of life & practical learning",
    href: "/study-abroad/new-zealand",
    flag: "🇳🇿",
  },
  {
    title: "Study in United States",
    description: "Extensive STEM OPT & research programs",
    href: "/study-abroad/usa",
    flag: "🇺🇸",
  },
  {
    title: "Study in Germany",
    description: "Low / zero tuition public universities",
    href: "/study-abroad/germany",
    flag: "🇩🇪",
  },
];

const testPrepItems: DropdownItem[] = [
  {
    title: "IELTS Coaching",
    description: "Academic & General Training with daily speaking drills",
    href: "/test-preparation/ielts",
    badge: "Top Rated",
  },
  {
    title: "PTE Academic Coaching",
    description: "Computer lab practice & software-guided mock tests",
    href: "/test-preparation/pte",
    badge: "Fast Results",
  },
  {
    title: "All Test Prep Programs",
    description: "Compare IELTS vs PTE, view batch timings & fees",
    href: "/test-preparation",
  },
];

const visaServiceItems: DropdownItem[] = [
  {
    title: "Student Visa Assistance",
    description: "Complete filing, document scrutiny & mock interview drills",
    href: "/visa-services/student-visa",
  },
  {
    title: "Visitor & Travel Visa",
    description: "Tourist, convocation ceremony & family visit applications",
    href: "/visa-services/visitor-visa",
  },
  {
    title: "Dependent / Spouse Visa",
    description: "Filing assistance for accompanying spouses & families",
    href: "/visa-services/dependent-visa",
  },
  {
    title: "All Visa Services & Policy",
    description: "Scrutiny process, embassy mock drills & ethical guidelines",
    href: "/visa-services",
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello Guruji Overseas, I would like to inquire about study abroad counselling, IELTS/PTE coaching, and visa services."
  )}`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const closeAllMenus = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Utility / Contact Bar */}
      <div className="bg-navy-950 text-slate-300 text-xs py-1 sm:py-1.5 border-b border-navy-900 select-none overflow-hidden">
        <Container className="flex items-center justify-between gap-4 whitespace-nowrap">
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-amber-400 font-semibold flex items-center gap-1">
              Established {COMPANY_INFO.establishedYear}
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="hidden sm:inline text-slate-300">
              Rohtak, Haryana
            </span>
            <span className="text-slate-600 hidden md:inline">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <span className="text-amber-400 font-bold">5.0 ★</span>
              <span className="text-slate-400">Justdial (300+ Reviews)</span>
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Opp. D-Park, Model Town</span>
            </div>
            <a
              href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 font-semibold text-white hover:text-amber-400 transition-colors cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 cursor-pointer" />
              <span className="cursor-pointer">{COMPANY_INFO.contact.displayPhone}</span>
            </a>
          </div>
        </Container>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-200 bg-white",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-card border-b border-slate-200/90 py-1.5"
            : "bg-white border-b border-slate-200 py-2 sm:py-2.5"
        )}
      >
        <Container className="flex items-center justify-between gap-3">
          {/* Logo */}
          <Logo isScrolled={isScrolled} />

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 text-sm font-medium text-charcoal-700 whitespace-nowrap">
            {/* 1. Study Abroad Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("study-abroad")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/study-abroad"
                className={cn(
                  "px-3 py-2 rounded-md transition-colors flex items-center gap-1 text-charcoal-700 hover:text-navy-900 hover:bg-slate-50 cursor-pointer",
                  activeDropdown === "study-abroad" && "text-navy-900 bg-slate-50"
                )}
              >
                <span>Study Abroad</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 transition-transform duration-200" />
              </Link>

              {activeDropdown === "study-abroad" && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-white rounded-lg shadow-dropdown border border-slate-200 p-2 text-left">
                    <div className="flex items-center justify-between px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                      <span>Primary Destinations</span>
                      <Link href="/study-abroad" className="text-royal-600 hover:underline normal-case font-medium">
                        View All
                      </Link>
                    </div>
                    {studyAbroadDestinations.map((dest, idx) => (
                      <Link
                        key={idx}
                        href={dest.href}
                        onClick={closeAllMenus}
                        className="flex items-start gap-2.5 p-2 rounded hover:bg-slate-50 transition-colors group cursor-pointer"
                      >
                        <span className="text-xl shrink-0 mt-0.5">{dest.flag}</span>
                        <div>
                          <div className="font-semibold text-charcoal-800 text-xs group-hover:text-navy-900 flex items-center gap-1.5">
                            {dest.title}
                          </div>
                          <div className="text-[11px] text-slate-500 leading-tight">
                            {dest.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 2. Test Preparation Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("test-prep")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/test-preparation"
                className={cn(
                  "px-3 py-2 rounded-md transition-colors flex items-center gap-1 text-charcoal-700 hover:text-navy-900 hover:bg-slate-50 cursor-pointer",
                  activeDropdown === "test-prep" && "text-navy-900 bg-slate-50"
                )}
              >
                <span>Test Prep</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </Link>

              {activeDropdown === "test-prep" && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-white rounded-lg shadow-dropdown border border-slate-200 p-2 text-left">
                    <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                      Coaching Programs
                    </div>
                    {testPrepItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={closeAllMenus}
                        className="flex flex-col p-2.5 rounded hover:bg-slate-50 transition-colors group cursor-pointer"
                      >
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="font-semibold text-charcoal-800 text-xs group-hover:text-navy-900">
                            {item.title}
                          </span>
                          {item.badge && (
                            <span className="text-[10px] bg-amber-50 text-amber-800 font-bold px-1.5 py-0.2 rounded border border-amber-200">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-slate-500 leading-tight">
                          {item.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 3. Visa Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("visa-services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/visa-services"
                className={cn(
                  "px-3 py-2 rounded-md transition-colors flex items-center gap-1 text-charcoal-700 hover:text-navy-900 hover:bg-slate-50 cursor-pointer",
                  activeDropdown === "visa-services" && "text-navy-900 bg-slate-50"
                )}
              >
                <span>Visa Services</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </Link>

              {activeDropdown === "visa-services" && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-white rounded-lg shadow-dropdown border border-slate-200 p-2 text-left">
                    <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                      Visa Guidance
                    </div>
                    {visaServiceItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={closeAllMenus}
                        className="flex flex-col p-2.5 rounded hover:bg-slate-50 transition-colors group cursor-pointer"
                      >
                        <span className="font-semibold text-charcoal-800 text-xs group-hover:text-navy-900 mb-0.5">
                          {item.title}
                        </span>
                        <span className="text-[11px] text-slate-500 leading-tight">
                          {item.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 4. Universities */}
            <Link
              href="/universities"
              className="px-3 py-2 rounded-md hover:text-navy-900 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Universities
            </Link>

            {/* 5. Success Stories */}
            <Link
              href="/success-stories"
              className="px-3 py-2 rounded-md hover:text-navy-900 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Success Stories
            </Link>

            {/* 6. About Us */}
            <Link
              href="/about"
              className="px-3 py-2 rounded-md hover:text-navy-900 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              About
            </Link>

            {/* 7. Blog */}
            <Link
              href="/blog"
              className="px-3 py-2 rounded-md hover:text-navy-900 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Blog
            </Link>

            {/* 8. Contact */}
            <Link
              href="/contact"
              className="px-3 py-2 rounded-md hover:text-navy-900 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Contact
            </Link>
          </div>

          {/* Right Action Buttons & Mobile Icons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Mobile Header Quick Actions: WhatsApp & Inquiry Icons */}
            <div className="flex lg:hidden items-center gap-1.5">
              {/* WhatsApp Redirect Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-sm transition-all active:scale-95 cursor-pointer"
                aria-label="Chat with Guruji Overseas on WhatsApp"
                title="Chat on WhatsApp"
              >
                {/* SVG WhatsApp Icon */}
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.952 3.71 1.453 5.711 1.454h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>

              {/* Inquiry Icon Button */}
              <Link
                href="/contact"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-royal-50 text-royal-700 border border-royal-200 hover:bg-royal-100 transition-all active:scale-95 cursor-pointer"
                aria-label="Enquiry & Consultation"
                title="Send Enquiry"
              >
                <CalendarCheck className="w-5 h-5 text-royal-700" />
              </Link>
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden sm:flex items-center">
              <Button
                variant="royal"
                size="md"
                href="/contact"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="cursor-pointer text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 font-semibold rounded-lg shadow-card hover:shadow-card-hover"
              >
                Book Free Counselling
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-charcoal-700 hover:bg-slate-100 hover:text-navy-900 transition-colors focus:outline-none cursor-pointer ml-1"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 cursor-pointer" />
              ) : (
                <Menu className="w-6 h-6 cursor-pointer" />
              )}
            </button>
          </div>
        </Container>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[115px] bottom-0 bg-white z-50 overflow-y-auto border-t border-slate-200 animate-in slide-in-from-top-2 duration-200">
            <div className="p-4 sm:p-5 space-y-5 pb-28 text-left">
              {/* Quick Action Banner in Drawer: Direct WhatsApp & Call */}
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center gap-2 shadow-sm font-semibold text-xs"
                >
                  <svg
                    className="w-4 h-4 fill-current shrink-0"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.952 3.71 1.453 5.711 1.454h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, "")}`}
                  className="p-3 rounded-xl bg-navy-900 hover:bg-navy-950 text-white flex items-center justify-center gap-2 shadow-sm font-semibold text-xs"
                >
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Call Advisor</span>
                </a>
              </div>

              {/* Clean Mobile Nav Links */}
              <div className="space-y-1">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1">
                  Main Pages
                </div>

                <Link
                  href="/study-abroad"
                  onClick={closeAllMenus}
                  className="flex items-center justify-between p-2.5 rounded-lg text-sm font-semibold text-charcoal-800 hover:bg-slate-50 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-royal-600" />
                    <span>Study Abroad</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>

                <Link
                  href="/test-preparation"
                  onClick={closeAllMenus}
                  className="flex items-center justify-between p-2.5 rounded-lg text-sm font-semibold text-charcoal-800 hover:bg-slate-50 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-royal-600" />
                    <span>Test Preparation (IELTS / PTE)</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>

                <Link
                  href="/visa-services"
                  onClick={closeAllMenus}
                  className="flex items-center justify-between p-2.5 rounded-lg text-sm font-semibold text-charcoal-800 hover:bg-slate-50 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Plane className="w-4 h-4 text-royal-600" />
                    <span>Visa Guidance Services</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>

                <Link
                  href="/universities"
                  onClick={closeAllMenus}
                  className="flex items-center justify-between p-2.5 rounded-lg text-sm font-semibold text-charcoal-800 hover:bg-slate-50 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-royal-600" />
                    <span>Universities &amp; Colleges</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>

                <Link
                  href="/about"
                  onClick={closeAllMenus}
                  className="flex items-center justify-between p-2.5 rounded-lg text-sm font-semibold text-charcoal-800 hover:bg-slate-50 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-royal-600" />
                    <span>About Guruji Overseas</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>

                <Link
                  href="/success-stories"
                  onClick={closeAllMenus}
                  className="flex items-center justify-between p-2.5 rounded-lg text-sm font-semibold text-charcoal-800 hover:bg-slate-50 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span>Success Stories &amp; Reviews</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>

                <Link
                  href="/gallery"
                  onClick={closeAllMenus}
                  className="flex items-center justify-between p-2.5 rounded-lg text-sm font-semibold text-charcoal-800 hover:bg-slate-50 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-royal-600" />
                    <span>Photo Gallery</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>

                <Link
                  href="/blog"
                  onClick={closeAllMenus}
                  className="flex items-center justify-between p-2.5 rounded-lg text-sm font-semibold text-charcoal-800 hover:bg-slate-50 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-royal-600" />
                    <span>Blog &amp; Study Guides</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>

                <Link
                  href="/contact"
                  onClick={closeAllMenus}
                  className="flex items-center justify-between p-2.5 rounded-lg text-sm font-semibold text-charcoal-800 hover:bg-slate-50 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-royal-600" />
                    <span>Contact &amp; Rohtak Office</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>
              </div>

              {/* Mobile Main CTA Button */}
              <div className="pt-2">
                <Button
                  variant="royal"
                  size="lg"
                  href="/contact"
                  onClick={closeAllMenus}
                  className="w-full cursor-pointer font-semibold shadow-md py-3"
                  rightIcon={<CalendarCheck className="w-4 h-4" />}
                >
                  Book Free In-Person Counselling
                </Button>
              </div>

              {/* Office Location info in Drawer */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-charcoal-600 space-y-1.5">
                <div className="font-semibold text-navy-900">
                  {COMPANY_INFO.legalName}
                </div>
                <div>{COMPANY_INFO.location.addressLine1}</div>
                <div>{COMPANY_INFO.location.addressLine2}</div>
                <div>{COMPANY_INFO.location.cityStateZip}</div>
                <div className="text-[11px] text-slate-500 pt-1">
                  Hours: {COMPANY_INFO.contact.officeHours}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
