import { LeadRecord } from "@/types/crm";

export interface StudentResultItem {
  id: string;
  name: string;
  hometown: string;
  country: "Canada" | "United Kingdom" | "Australia" | "United States" | "Germany" | "New Zealand";
  countryFlag: string;
  visaType: string;
  institution: string;
  course: string;
  intake: string;
  statusBadge: "Visa Approved" | "Offer Letter Received" | "100% Visa Success";
  createdAt: string;
}

export interface AdminBlogPost {
  id: string;
  slug: string;
  title: string;
  category: "Study Abroad Guides" | "Visa Policy Updates" | "IELTS & PTE Tips" | "Cost & Finance";
  summary: string;
  readTime: string;
  date: string;
  author: string;
  published: boolean;
}

// Default Seed Visa Results
export const DEFAULT_STUDENT_RESULTS: StudentResultItem[] = [
  {
    id: "visa-1",
    name: "Rohan Sehrawat",
    hometown: "Rohtak, HR",
    country: "Canada",
    countryFlag: "🇨🇦",
    visaType: "Canada Student Visa (PGWP Eligible)",
    institution: "Seneca Polytechnic, Toronto",
    course: "Post-Graduate Cloud Architecture",
    intake: "Fall Intake",
    statusBadge: "Visa Approved",
    createdAt: "2026-01-15",
  },
  {
    id: "visa-2",
    name: "Komal Nain",
    hometown: "Sonipat, HR",
    country: "United Kingdom",
    countryFlag: "🇬🇧",
    visaType: "UK Student Route Visa",
    institution: "Coventry University, England",
    course: "MSc Global Business Management",
    intake: "January Intake",
    statusBadge: "Visa Approved",
    createdAt: "2026-02-10",
  },
  {
    id: "visa-3",
    name: "Deepak Sangwan",
    hometown: "Charkhi Dadri, HR",
    country: "Australia",
    countryFlag: "🇦🇺",
    visaType: "Australia Subclass 500 Student Visa",
    institution: "Deakin University, Melbourne",
    course: "Master of Cyber Security",
    intake: "February Intake",
    statusBadge: "Visa Approved",
    createdAt: "2026-02-18",
  },
  {
    id: "visa-4",
    name: "Anjali Punia",
    hometown: "Hisar, HR",
    country: "United States",
    countryFlag: "🇺🇸",
    visaType: "US F-1 Student Visa (3-Yr STEM OPT)",
    institution: "Northeastern University, Boston",
    course: "MS Information Systems",
    intake: "Fall Intake",
    statusBadge: "Visa Approved",
    createdAt: "2026-02-25",
  },
  {
    id: "visa-5",
    name: "Pardeep Gill",
    hometown: "Jind, HR",
    country: "Germany",
    countryFlag: "🇩🇪",
    visaType: "Germany National Student Visa",
    institution: "Deggendorf Institute of Technology",
    course: "M.Sc. Artificial Intelligence",
    intake: "Winter Intake",
    statusBadge: "Visa Approved",
    createdAt: "2026-03-01",
  },
];

// Default Seed Blog Posts
export const DEFAULT_BLOG_POSTS: AdminBlogPost[] = [
  {
    id: "blog-1",
    slug: "canada-study-permit-pal-guide",
    title: "Understanding Canada's Provincial Attestation Letter (PAL) & PGWP Rules",
    category: "Visa Policy Updates",
    summary:
      "A complete breakdown of IRCC's latest international student cap regulations, how provincial attestation letters are allocated across provinces, and post-graduation work permit eligibility.",
    readTime: "6 min read",
    date: "March 2026",
    author: "Guruji Overseas Editorial Team",
    published: true,
  },
  {
    id: "blog-2",
    slug: "uk-1-year-masters-cost-roi",
    title: "Why UK 1-Year Master's Degrees Offer Higher ROI for Haryana Students",
    category: "Study Abroad Guides",
    summary:
      "Analyzing the tuition savings, faster graduation timelines, 2-year Graduate Route post-study work visa rights, and total living budget for UK master's programs.",
    readTime: "5 min read",
    date: "March 2026",
    author: "Senior Admissions Counsellor",
    published: true,
  },
  {
    id: "blog-3",
    slug: "ielts-speaking-band-8-strategy",
    title: "5 Speaking Habits that Jumped Our Rohtak Students from Band 6 to 7.5+",
    category: "IELTS & PTE Tips",
    summary:
      "Practical daily speaking strategies, lexical resource techniques, tackling Part 2 cue cards naturally, and avoiding memorized templates in the official IDP exam.",
    readTime: "7 min read",
    date: "February 2026",
    author: "Head IELTS Trainer (Rohtak Lab)",
    published: true,
  },
];
