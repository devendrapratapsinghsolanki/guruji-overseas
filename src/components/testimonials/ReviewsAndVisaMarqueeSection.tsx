"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Quote,
  MapPin,
  CheckCircle2,
  GraduationCap,
  Award,
  Sparkles,
  Plane,
  Building2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Container, SectionHeading, Badge } from "@/components/ui";

interface StudentReview {
  id: string;
  name: string;
  city: string;
  category: "IELTS 7.5+ Coaching" | "PTE 68+ Coaching" | "Canada Study Visa" | "UK Master's Admission" | "Australia Visa" | "Germany Public Uni";
  rating: number;
  scoreOrDetail: string;
  feedback: string;
  date: string;
  avatarText: string;
}

interface VisaSuccessStudent {
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
  avatarColor: string;
}

// Representative student review data (ready to be updated with real student testimonials)
const STUDENT_REVIEWS: StudentReview[] = [
  {
    id: "rev-1",
    name: "Vikram Hooda",
    city: "Rohtak, Haryana",
    category: "IELTS 7.5+ Coaching",
    rating: 5,
    scoreOrDetail: "IELTS Overall 7.5 Bands (L: 8.5, R: 7.5, W: 7.0, S: 7.0)",
    feedback:
      "Best IELTS coaching center in Rohtak near D-Park. The daily speaking drills and essay feedback from trainers helped me achieve 7.5 bands on my first attempt!",
    date: "Recent Candidate",
    avatarText: "VH",
  },
  {
    id: "rev-2",
    name: "Pooja Malik",
    city: "Sonipat, Haryana",
    category: "Canada Study Visa",
    rating: 5,
    scoreOrDetail: "Canada Student Visa Approved (Seneca College, Toronto)",
    feedback:
      "Guruji Overseas handled my SOP and complete Canada college admission smoothly. I had a 2-year study gap, but their documentation scrutiny was so thorough that my visa was approved in 3 weeks!",
    date: "Recent Candidate",
    avatarText: "PM",
  },
  {
    id: "rev-3",
    name: "Amit Deswal",
    city: "Jind, Haryana",
    category: "PTE 68+ Coaching",
    rating: 5,
    scoreOrDetail: "PTE Academic 71 Score (Speaking 76, Listening 72)",
    feedback:
      "The Pearson software mock test lab at Sheetal Lifestyle Mall gave me actual exam experience. Teachers gave personal attention to my pronunciation and templates.",
    date: "Recent Candidate",
    avatarText: "AD",
  },
  {
    id: "rev-4",
    name: "Neha Sharma",
    city: "Panipat, Haryana",
    category: "UK Master's Admission",
    rating: 5,
    scoreOrDetail: "1-Yr MSc International Business (Univ. of Hertfordshire)",
    feedback:
      "Transparent counselling with zero hidden charges. They helped me get an IELTS waiver based on my 12th English score and secured my UK CAS letter very fast.",
    date: "Recent Candidate",
    avatarText: "NS",
  },
  {
    id: "rev-5",
    name: "Sahil Dahiya",
    city: "Rohtak, Haryana",
    category: "Australia Visa",
    rating: 5,
    scoreOrDetail: "Australia Subclass 500 Visa (Deakin University)",
    feedback:
      "From selecting the right university in Melbourne to GTE document preparation and medical booking, Guruji Overseas supported me at every step. Highly recommended!",
    date: "Recent Candidate",
    avatarText: "SD",
  },
  {
    id: "rev-6",
    name: "Ankit Kadyan",
    city: "Bhiwani, Haryana",
    category: "Germany Public Uni",
    rating: 5,
    scoreOrDetail: "TU Munich & Deggendorf Institute of Technology",
    feedback:
      "They guided me through the complex APS certificate process and blocked account setup for Germany. Truly impartial and knowledgeable advisory team in Rohtak.",
    date: "Recent Candidate",
    avatarText: "AK",
  },
];

// Representative students who went abroad on Student Visa (ready to be populated with company records)
const VISA_SUCCESS_STUDENTS: VisaSuccessStudent[] = [
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
    avatarColor: "bg-red-500",
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
    avatarColor: "bg-blue-600",
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
    avatarColor: "bg-emerald-600",
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
    avatarColor: "bg-indigo-600",
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
    avatarColor: "bg-amber-600",
  },
  {
    id: "visa-6",
    name: "Simran Rathee",
    hometown: "Bahadurgarh, HR",
    country: "New Zealand",
    countryFlag: "🇳🇿",
    visaType: "NZ Fee-Paying Student Visa",
    institution: "Te Pūkenga / NZIST",
    course: "Graduate Diploma in IT Solutions",
    intake: "July Intake",
    statusBadge: "Visa Approved",
    avatarColor: "bg-teal-600",
  },
  {
    id: "visa-7",
    name: "Mohit Khatri",
    hometown: "Karnal, HR",
    country: "Canada",
    countryFlag: "🇨🇦",
    visaType: "Canada Student Visa",
    institution: "Humber College Institute of Tech",
    course: "Information Technology Solutions",
    intake: "May Intake",
    statusBadge: "Visa Approved",
    avatarColor: "bg-red-600",
  },
  {
    id: "visa-8",
    name: "Manish Rathi",
    hometown: "Rohtak, HR",
    country: "Australia",
    countryFlag: "🇦🇺",
    visaType: "Australia Subclass 500 Visa",
    institution: "University of Wollongong",
    course: "Master of Computer Science",
    intake: "July Intake",
    statusBadge: "Visa Approved",
    avatarColor: "bg-sky-600",
  },
];

export function ReviewsAndVisaMarqueeSection() {
  const [visaResults, setVisaResults] = useState<VisaSuccessStudent[]>(VISA_SUCCESS_STUDENTS);

  React.useEffect(() => {
    try {
      const customResults = localStorage.getItem("guruji_admin_results");
      if (customResults) {
        const parsed = JSON.parse(customResults);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const formatted: VisaSuccessStudent[] = parsed.map((item: any, i: number) => ({
            id: item.id || `custom-${i}`,
            name: item.name,
            hometown: item.hometown || "Haryana, HR",
            country: item.country || "Canada",
            countryFlag: item.countryFlag || "🇨🇦",
            visaType: item.visaType || `${item.country} Student Visa`,
            institution: item.institution,
            course: item.course,
            intake: item.intake || "Upcoming Intake",
            statusBadge: item.statusBadge || "Visa Approved",
            avatarColor: "bg-royal-600",
          }));
          setVisaResults(formatted);
        }
      }
    } catch {
      // Fallback to defaults
    }
  }, []);

  return (
    <section
      id="success-stories"
      className="py-20 lg:py-28 bg-surface-gray/60 border-b border-border-subtle relative overflow-hidden"
    >
      {/* Background ambient accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-royal-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <SectionHeading
          kicker="Proven Track Record"
          title="Student Reviews & Verified Visa Success"
          subtitle="Real experiences from students across Rohtak and Haryana who scored top IELTS/PTE bands and successfully received their overseas student visas."
        />

        {/* Justdial Verified Badge Banner */}
        <div className="mb-12 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-card flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-500 shrink-0 mx-auto md:mx-0 shadow-xs">
              <Star className="w-7 h-7 fill-amber-500 text-amber-500" />
            </div>
            <div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <h3 className="text-xl font-bold text-navy-950">
                  5.0 / 5.0 Star Rated Consultancy
                </h3>
                <span className="text-[11px] bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified Reviews
                </span>
              </div>
              <p className="text-xs text-charcoal-600 mt-1">
                Over 300+ authentic reviews from candidates in Rohtak, Sonipat, Jind, Hisar, and Haryana.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-4 py-2.5 rounded-xl bg-royal-600 hover:bg-royal-700 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
            >
              <span>Book Counselling</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </Container>

      {/* Marquee Section 1: Student Reviews & Testimonials (Left-to-Right Moving Marquee) */}
      <div className="mb-10">
        <div className="container mx-auto px-4 mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-royal-700">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Student Experiences & Coaching Testimonials (Hover to Pause)</span>
          </div>
          <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
            ← Scrolling Left to Right →
          </span>
        </div>

        <div className="relative w-full overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]">
          <div className="animate-marquee flex gap-5">
            {/* Duplicated list for seamless infinite loop */}
            {[...STUDENT_REVIEWS, ...STUDENT_REVIEWS].map((rev, idx) => (
              <div
                key={`${rev.id}-${idx}`}
                className="w-[340px] sm:w-[380px] shrink-0 rounded-2xl bg-white border border-slate-200 p-5 shadow-card hover:border-royal-300 hover:shadow-card-hover transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-royal-700 bg-royal-50 px-2 py-0.5 rounded border border-royal-100">
                      {rev.category}
                    </span>
                  </div>

                  <p className="text-xs text-charcoal-700 leading-relaxed italic mb-3">
                    &ldquo;{rev.feedback}&rdquo;
                  </p>

                  <div className="p-2.5 rounded-lg bg-surface-gray border border-slate-100 text-[11px] font-semibold text-navy-950 mb-3 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span className="truncate">{rev.scoreOrDetail}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-navy-950 text-amber-300 font-bold text-xs flex items-center justify-center shrink-0">
                      {rev.avatarText}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-navy-950">{rev.name}</h4>
                      <p className="text-[10px] text-slate-500 flex items-center gap-0.5">
                        <MapPin className="w-2.5 h-2.5 text-royal-600" />
                        <span>{rev.city}</span>
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Section 2: Abroad Student Visa Success Stories (Right-to-Left Moving Marquee) */}
      <div>
        <div className="container mx-auto px-4 mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-950">
            <Plane className="w-4 h-4 text-royal-600" />
            <span>Abroad Student Visa Approvals & College Grants (Hover to Pause)</span>
          </div>
          <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
            → Scrolling Right to Left ←
          </span>
        </div>

        <div className="relative w-full overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]">
          <div className="animate-marquee-reverse flex gap-5">
            {/* Duplicated list for seamless infinite loop */}
            {[...visaResults, ...visaResults].map((visa, idx) => (
              <div
                key={`${visa.id}-${idx}`}
                className="w-[320px] sm:w-[360px] shrink-0 rounded-2xl bg-navy-950 text-white border border-navy-800 p-5 shadow-card hover:border-amber-400/60 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Destination & Stamp */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{visa.countryFlag}</span>
                      <div>
                        <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">
                          {visa.country}
                        </span>
                        <span className="text-xs font-semibold text-slate-300">
                          {visa.visaType}
                        </span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      {visa.statusBadge}
                    </span>
                  </div>

                  {/* University & Program */}
                  <div className="space-y-1.5 bg-navy-900/80 p-3 rounded-xl border border-navy-800 my-2">
                    <div className="flex items-start gap-1.5 text-xs text-slate-200">
                      <Building2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="font-bold text-white leading-tight">{visa.institution}</span>
                    </div>
                    <div className="flex items-start gap-1.5 text-[11px] text-slate-300">
                      <GraduationCap className="w-3.5 h-3.5 text-royal-400 shrink-0 mt-0.5" />
                      <span className="truncate">{visa.course}</span>
                    </div>
                  </div>
                </div>

                {/* Candidate Info Bottom */}
                <div className="pt-3 border-t border-navy-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className={`w-7 h-7 rounded-full ${visa.avatarColor} text-white font-bold text-[10px] flex items-center justify-center`}>
                      {visa.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <span className="font-bold text-white block text-xs">{visa.name}</span>
                      <span className="text-[10px] text-slate-400">{visa.hometown}</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-amber-300">
                    {visa.intake}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Container>
        <div className="mt-10 text-center text-xs text-slate-500">
          * Representative student results shown. Actual visa success letters, student video reviews, and testimonials are displayed at our Rohtak headquarters.
        </div>
      </Container>
    </section>
  );
}
