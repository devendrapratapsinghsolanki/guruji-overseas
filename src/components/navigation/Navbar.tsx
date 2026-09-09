"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Clock,
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
    href: "#destinations",
    flag: "🇨🇦",
  },
  {
    title: "Study in United Kingdom",
    description: "1-year Master's & 2-year Graduate Route",
    href: "#destinations",
    flag: "🇬🇧",
  },
  {
    title: "Study in Australia",
    description: "Group of Eight, top regional opportunities",
    href: "#destinations",
    flag: "🇦🇺",
  },
  {
    title: "Study in New Zealand",
    description: "High quality of life & practical learning",
    href: "#destinations",
    flag: "🇳🇿",
  },
  {
    title: "Study in United States",
    description: "Extensive STEM OPT & research programs",
    href: "#destinations",
    flag: "🇺🇸",
  },
  {
    title: "Study in Germany",
    description: "Low / zero tuition public universities",
    href: "#destinations",
    flag: "🇩🇪",
  },
  {
    title: "Study in Ireland",
    description: "European tech hub with 2-year stayback",
    href: "#destinations",
    flag: "🇮🇪",
  },
];

const testPrepItems: DropdownItem[] = [
  {
    title: "IELTS Preparation",
    description: "Academic & General Training with daily speaking drills",
    href: "#test-prep",
    badge: "Most Popular",
  },
  {
    title: "PTE Academic Coaching",
    description: "Computer lab practice & software-guided mock tests",
    href: "#test-prep",
  },
  {
    title: "English Language / Spoken English",
    description: "Grammar, fluency, and visa interview readiness",
    href: "#test-prep",
  },
];

const visaServiceItems: DropdownItem[] = [
  {
    title: "Student Visa Assistance",
    description: "Complete filing, document scrutiny & mock interview drills",
    href: "#services",
  },
  {
    title: "Work Visa Guidance",
    description: "Post-study work permits & employment-linked visa support",
    href: "#services",
  },
  {
    title: "Visitor / Travel Visa",
    description: "Tourist and family visit visas for parents and travelers",
    href: "#services",
  },
  {
    title: "Dependent / Spouse Visa",
    description: "Filing assistance for accompanying spouses & families",
    href: "#services",
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
      <div className="bg-navy-950 text-slate-300 text-xs py-2 border-b border-navy-900 select-none overflow-hidden">
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
              <span>Opp. D-Park</span>
            </div>
            <a
              href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 font-semibold text-white hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_INFO.contact.displayPhone}</span>
            </a>
          </div>
        </Container>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-200 bg-white",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-card border-b border-slate-200/90 py-2.5"
            : "bg-white border-b border-slate-200 py-3.5"
        )}
      >
        <Container className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Logo />

          {/* Clean Streamlined Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 text-sm font-medium text-charcoal-700 whitespace-nowrap">
            {/* 1. Study Abroad Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("study-abroad")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className={cn(
                  "px-3 py-2 rounded-md transition-colors flex items-center gap-1 text-charcoal-700 hover:text-navy-900 hover:bg-slate-50",
                  activeDropdown === "study-abroad" && "text-navy-900 bg-slate-50"
                )}
              >
                <span>Study Abroad</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 transition-transform duration-200" />
              </button>

              {activeDropdown === "study-abroad" && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-white rounded-lg shadow-dropdown border border-slate-200 p-2 text-left">
                    <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                      Primary Destinations
                    </div>
                    {studyAbroadDestinations.map((dest, idx) => (
                      <Link
                        key={idx}
                        href={dest.href}
                        onClick={closeAllMenus}
                        className="flex items-start gap-2.5 p-2 rounded hover:bg-slate-50 transition-colors group"
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
              <button
                type="button"
                className={cn(
                  "px-3 py-2 rounded-md transition-colors flex items-center gap-1 text-charcoal-700 hover:text-navy-900 hover:bg-slate-50",
                  activeDropdown === "test-prep" && "text-navy-900 bg-slate-50"
                )}
              >
                <span>Test Preparation</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

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
                        className="flex flex-col p-2.5 rounded hover:bg-slate-50 transition-colors group"
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
              <button
                type="button"
                className={cn(
                  "px-3 py-2 rounded-md transition-colors flex items-center gap-1 text-charcoal-700 hover:text-navy-900 hover:bg-slate-50",
                  activeDropdown === "visa-services" && "text-navy-900 bg-slate-50"
                )}
              >
                <span>Visa Services</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

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
                        className="flex flex-col p-2.5 rounded hover:bg-slate-50 transition-colors group"
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

            {/* 4. About Us */}
            <Link
              href="#about"
              className="px-3 py-2 rounded-md hover:text-navy-900 hover:bg-slate-50 transition-colors"
            >
              About Us
            </Link>

            {/* 5. Contact */}
            <Link
              href="#contact"
              className="px-3 py-2 rounded-md hover:text-navy-900 hover:bg-slate-50 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Right Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center">
              <Button
                variant="royal"
                size="md"
                href="#inquiry"
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Book Free Counselling
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-charcoal-700 hover:bg-slate-100 hover:text-navy-900 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </Container>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[120px] bottom-0 bg-white z-50 overflow-y-auto border-t border-slate-200 animate-in slide-in-from-top-2 duration-200">
            <div className="p-5 space-y-6 pb-24 text-left">
              {/* Quick Call Header in Drawer */}
              <div className="p-3.5 rounded-lg bg-navy-50 border border-navy-100 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-bold text-navy-900 uppercase tracking-wider">
                    Direct Rohtak Helpline
                  </div>
                  <div className="text-sm font-bold text-royal-700">
                    {COMPANY_INFO.contact.displayPhone}
                  </div>
                </div>
                <a
                  href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, "")}`}
                  className="px-3 py-1.5 rounded bg-royal-600 text-white text-xs font-semibold"
                >
                  Call Now
                </a>
              </div>

              {/* Mobile Nav Links */}
              <div className="space-y-1">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 py-1">
                  Main Navigation
                </div>

                <Link
                  href="#destinations"
                  onClick={closeAllMenus}
                  className="flex items-center justify-between p-2.5 rounded-md text-sm font-semibold text-charcoal-800 hover:bg-slate-50"
                >
                  <span>Study Abroad (7 Countries)</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>

                <Link
                  href="#test-prep"
                  onClick={closeAllMenus}
                  className="flex items-center justify-between p-2.5 rounded-md text-sm font-semibold text-charcoal-800 hover:bg-slate-50"
                >
                  <span>Test Preparation (IELTS / PTE)</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>

                <Link
                  href="#services"
                  onClick={closeAllMenus}
                  className="flex items-center justify-between p-2.5 rounded-md text-sm font-semibold text-charcoal-800 hover:bg-slate-50"
                >
                  <span>Visa Services</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>

                <Link
                  href="#destinations"
                  onClick={closeAllMenus}
                  className="flex items-center justify-between p-2.5 rounded-md text-sm font-semibold text-charcoal-800 hover:bg-slate-50"
                >
                  <span>Universities</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>

                <Link
                  href="#about"
                  onClick={closeAllMenus}
                  className="flex items-center justify-between p-2.5 rounded-md text-sm font-semibold text-charcoal-800 hover:bg-slate-50"
                >
                  <span>About Us</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>

                <Link
                  href="#success-stories"
                  onClick={closeAllMenus}
                  className="flex items-center justify-between p-2.5 rounded-md text-sm font-semibold text-charcoal-800 hover:bg-slate-50"
                >
                  <span>Success Stories</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>

                <Link
                  href="#blog"
                  onClick={closeAllMenus}
                  className="flex items-center justify-between p-2.5 rounded-md text-sm font-semibold text-charcoal-800 hover:bg-slate-50"
                >
                  <span>Blog & Updates</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>
              </div>

              {/* Mobile CTA */}
              <div className="pt-2">
                <Button
                  variant="royal"
                  size="lg"
                  href="#inquiry"
                  onClick={closeAllMenus}
                  className="w-full"
                >
                  Book Free Counselling
                </Button>
              </div>

              {/* Office Location info */}
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-charcoal-600 space-y-1.5">
                <div className="font-semibold text-navy-900">
                  {COMPANY_INFO.legalName}
                </div>
                <div>{COMPANY_INFO.location.addressLine1}</div>
                <div>{COMPANY_INFO.location.addressLine2}</div>
                <div>{COMPANY_INFO.location.cityStateZip}</div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
