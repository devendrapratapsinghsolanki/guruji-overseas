import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Contact Guruji Overseas in Rohtak | Office Address, Phone & Map",
  description:
    "Visit Guruji Overseas at Sheetal Lifestyle Mall, Opposite D-Park, Rohtak, Haryana. Call +91 79884 29392 / +91 7056 544 009 or WhatsApp for free 1-on-1 study abroad and IELTS/PTE counselling.",
  path: "/contact",
  keywords: [
    "Contact Guruji Overseas",
    "Study abroad consultant Rohtak address",
    "IELTS institute Rohtak contact",
    "Sheetal Lifestyle Mall Rohtak",
    "Guruji Overseas phone number",
    "Overseas education consultancy",
  ],
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
