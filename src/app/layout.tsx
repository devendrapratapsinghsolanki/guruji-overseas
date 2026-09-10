import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { FloatingActions, AutoWelcomeEnquiryModal } from "@/components/common";
import { constructMetadata, getLocalBusinessSchema } from "@/lib/seo";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = constructMetadata({
  title: "Guruji Overseas | Study Abroad, IELTS, PTE & Visa Guidance",
  description:
    "GURUJI OVERSEAS IMMIGRATION PRIVATE LIMITED - Leading overseas education consultancy in Rohtak, Haryana. Certified IELTS & PTE coaching, university admissions, and student visa guidance for Canada, UK, Australia, New Zealand, USA, and Germany.",
  path: "/",
  keywords: [
    "Study abroad consultants",
    "Study abroad consultant Rohtak",
    "IELTS preparation",
    "IELTS coaching Rohtak",
    "PTE preparation",
    "PTE coaching Rohtak",
    "Study in Canada",
    "Study in UK",
    "Study in Australia",
    "Study in New Zealand",
    "Study in USA",
    "Study in Germany",
    "Student visa guidance",
    "Overseas education consultancy",
    "Guruji Overseas",
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} scroll-smooth antialiased`}
    >
      <head>
        {/* Structured Data: LocalBusiness & EducationalOrganization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900 flex flex-col font-sans">
        {children}
        {/* Scroll-aware floating WhatsApp & Quick Enquiry Widget */}
        <FloatingActions />
        {/* Welcome Enquiry Popup Modal on Initial Visit */}
        <AutoWelcomeEnquiryModal />
      </body>
    </html>
  );
}
