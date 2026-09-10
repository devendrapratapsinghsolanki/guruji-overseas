import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { QuickTrustStrip } from "@/components/home/QuickTrustStrip";
import { DestinationsSection } from "@/components/destinations/DestinationsSection";
import { AboutSection } from "@/components/about/AboutSection";
import { WhyUsSection } from "@/components/why-us/WhyUsSection";
import { TestPrepSection } from "@/components/test-preparation/TestPrepSection";
import { JourneySection } from "@/components/journey/JourneySection";
import { UniversitiesSection } from "@/components/universities/UniversitiesSection";
import { VisaServicesSection } from "@/components/visa/VisaServicesSection";
import { ProfileAssessmentSection } from "@/components/forms/ProfileAssessmentSection";
import { ReviewsAndVisaMarqueeSection } from "@/components/testimonials";
import { BlogSection } from "@/components/blog/BlogSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/footer/Footer";

/**
 * Guruji Overseas Homepage
 * Narrative Storyline:
 * DISCOVER (Hero)
 * → TRUST (Quick Services & Trust Strip)
 * → EXPLORE (Destinations & Universities)
 * → UNDERSTAND (About Us, Why Us, Test Prep, 7-Step Journey)
 * → PROVE (Visa Services, Reviews & Visa Approvals Marquee, Blog)
 * → CONVERT (Profile Assessment, Final CTA, Direct Contact)
 */
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Sticky Responsive Navbar with Mobile Drawer */}
      <Navbar />

      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: Quick Services & Trust Strip */}
      <QuickTrustStrip />

      {/* Section 3: Study Destinations */}
      <DestinationsSection />

      {/* Section 4: About Guruji Overseas */}
      <AboutSection />

      {/* Section 5: Why Guruji Overseas */}
      <WhyUsSection />

      {/* Section 6: IELTS & PTE Preparation */}
      <TestPrepSection />

      {/* Section 7: Study Abroad Journey */}
      <JourneySection />

      {/* Section 8: Institution Discovery & Search */}
      <UniversitiesSection />

      {/* Section 9: Visa Services */}
      <VisaServicesSection />

      {/* Section 10: Profile Assessment Form */}
      <ProfileAssessmentSection />

      {/* Section 11: Real Student Reviews (L-to-R) & Placed Visa Students (R-to-L) Marquee */}
      <ReviewsAndVisaMarqueeSection />

      {/* Section 12: Editorial Blog & Guides */}
      <BlogSection />

      {/* Section 13: Final Call to Action */}
      <FinalCtaSection />

      {/* Section 14: Contact & Office Location */}
      <ContactSection />

      {/* Institutional Footer */}
      <Footer />
    </div>
  );
}
