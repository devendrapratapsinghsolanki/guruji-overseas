import { Metadata } from "next";
import { COMPANY_INFO } from "@/data/company";

export const SITE_URL = "https://www.gurujioverseas.com";
export const SITE_NAME = "Guruji Overseas";
export const DEFAULT_OG_IMAGE = "/images/og-image.jpg";

interface MetadataProps {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
}

/**
 * Scalable Next.js Metadata Constructor
 * Generates OpenGraph, Twitter Cards, Canonical URLs, and Robots configuration.
 */
export function constructMetadata({
  title = "Guruji Overseas | Study Abroad, IELTS, PTE & Visa Guidance",
  description = "GURUJI OVERSEAS IMMIGRATION PRIVATE LIMITED - Leading overseas education consultancy in Rohtak, Haryana. Certified IELTS & PTE coaching, university admissions, and student visa guidance for Canada, UK, Australia, New Zealand, USA, and Germany.",
  path = "",
  keywords = [
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
  image = DEFAULT_OG_IMAGE,
  noIndex = false,
}: MetadataProps = {}): Metadata {
  const url = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const isHome = path === "" || path === "/";

  return {
    title: isHome
      ? "Guruji Overseas | Study Abroad, IELTS, PTE & Visa Guidance"
      : {
          default: title,
          template: `%s | ${SITE_NAME}`,
        },
    description,
    keywords,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: image.startsWith("http") ? image : `${SITE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} - Overseas Education Consultancy`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.startsWith("http") ? image : `${SITE_URL}${image}`],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    icons: {
      icon: [
        { url: "/icon.svg", type: "image/svg+xml" },
        { url: "/favicon.svg", type: "image/svg+xml" },
      ],
      apple: "/icon.svg",
    },
  };
}

/**
 * Factual LocalBusiness / EducationalOrganization JSON-LD Schema
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    name: COMPANY_INFO.legalName,
    alternateName: COMPANY_INFO.brandName,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    image: `${SITE_URL}/images/og-image.jpg`,
    description:
      "Overseas education consultancy and test preparation center offering IELTS coaching, PTE training, and student visa guidance in Rohtak, Haryana.",
    telephone: COMPANY_INFO.contact.primaryPhone,
    email: COMPANY_INFO.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${COMPANY_INFO.location.addressLine1}, ${COMPANY_INFO.location.addressLine2}`,
      addressLocality: COMPANY_INFO.location.city,
      addressRegion: COMPANY_INFO.location.state,
      postalCode: "124001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.89245,
      longitude: 76.59365,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:30",
        closes: "18:30",
      },
    ],
    priceRange: "₹₹",
    areaServed: [
      { "@type": "City", name: "Rohtak" },
      { "@type": "City", name: "Sonipat" },
      { "@type": "City", name: "Panipat" },
      { "@type": "City", name: "Jind" },
      { "@type": "City", name: "Jhajjar" },
      { "@type": "City", name: "Hisar" },
      { "@type": "State", name: "Haryana" },
    ],
    sameAs: [
      `https://wa.me/${COMPANY_INFO.contact.whatsappNumber}`,
      "https://www.justdial.com",
    ],
  };
}

/**
 * Structured Data for IELTS / PTE Coaching Courses
 */
export function getCourseSchema(course: {
  name: string;
  description: string;
  courseCode: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    courseCode: course.courseCode,
    provider: {
      "@type": "EducationalOrganization",
      name: COMPANY_INFO.legalName,
      url: SITE_URL,
    },
    educationalCredentialAwarded: "Test Readiness & Official Score Target",
    occupationalCredentialAwarded: "English Language Proficiency",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Onsite Classroom & Computer Lab",
      location: `${COMPANY_INFO.location.addressLine1}, ${COMPANY_INFO.location.cityStateZip}`,
    },
  };
}

/**
 * Breadcrumbs Schema Generator
 */
export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}
