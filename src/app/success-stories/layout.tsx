import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Student Success Stories & Verified Visa Results | Guruji Overseas Rohtak",
  description:
    "Read authentic reviews and explore verified student visa approvals from candidates across Rohtak, Sonipat, Jind, and Haryana. 5.0-star Justdial verified consultancy rating.",
  path: "/success-stories",
  keywords: [
    "Student visa success stories",
    "Study abroad reviews Rohtak",
    "IELTS success stories",
    "PTE high score reviews",
    "Canada visa success Haryana",
    "Australia visa approval Rohtak",
    "Guruji Overseas",
  ],
});

export default function SuccessStoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
