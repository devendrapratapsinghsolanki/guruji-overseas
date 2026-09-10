import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Study Abroad Guides, Visa Updates & IELTS/PTE Tips | Guruji Overseas Blog",
  description:
    "Expert articles and guides on international university admissions, IRCC visa rules, Australian Genuine Student tests, 1-year UK Master's degrees, and high band IELTS/PTE preparation tips.",
  path: "/blog",
  keywords: [
    "Study Abroad Guides",
    "Visa Policy Updates",
    "IELTS Preparation Tips",
    "PTE Exam Tips",
    "Canada Study Permit Guide",
    "Australia Student Visa Guide",
    "Guruji Overseas Blog",
  ],
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
