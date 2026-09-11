import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { QuickTrustStrip } from "@/components/home/QuickTrustStrip";
import { DestinationsSection } from "@/components/destinations/DestinationsSection";
import { AboutSection } from "@/components/about/AboutSection";
import { WhyUsSection } from "@/components/why-us/WhyUsSection";
import { TestPrepSection } from "@/components/test-preparation/TestPrepSection";
import { UniversitiesSection } from "@/components/universities/UniversitiesSection";
import { ProfileAssessmentSection } from "@/components/forms/ProfileAssessmentSection";
import { ReviewsAndVisaMarqueeSection } from "@/components/testimonials";
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

      {/* Section 1: Hero with Direct Highlights */}
      <Hero />

      {/* Section 2: Quick Services & Trust Strip */}
      <QuickTrustStrip />

      {/* Section 3: Study Abroad Destinations (Canada, UK, Aus, NZ, USA, Germany, Europe) */}
      <DestinationsSection />

      {/* Section 4: About Guruji Overseas & Rohtak Office */}
      <AboutSection />

      {/* Section 5: Why Choose Guruji Overseas */}
      <WhyUsSection />

      {/* Section 6: IELTS & PTE Test Preparation */}
      <TestPrepSection />

      {/* Section 7: Partner Universities & Discovery */}
      <UniversitiesSection />

      {/* Section 8: Verified Student Reviews & Visa Approval Marquee */}
      <ReviewsAndVisaMarqueeSection />

      {/* Section 9: Streamlined Free Counselling & Inquiry Form */}
      <ProfileAssessmentSection />

      {/* Section 10: Office Location, Map & Direct Contact */}
      <ContactSection />

      {/* Institutional Footer */}
      <Footer />
    </div>
  );
}
