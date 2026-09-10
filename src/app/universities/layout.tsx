import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Global Universities & Colleges Directory | Canada, UK, Australia, USA, NZ, Germany",
  description:
    "Explore recognized universities, public polytechnics, and research institutions across 6 major countries. Filter by tuition budget, intake cycles, IELTS/PTE cutoffs, and programs with Guruji Overseas.",
  path: "/universities",
  keywords: [
    "Global universities directory",
    "Study in Canada universities",
    "Study in UK universities",
    "Study in Australia universities",
    "Study in New Zealand universities",
    "Study in USA universities",
    "Study in Germany universities",
    "Overseas education consultancy",
    "Guruji Overseas",
  ],
});

export default function UniversitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
