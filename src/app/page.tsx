import React from "react";
import Link from "next/link";
import {
  BookOpen,
  GraduationCap,
  FileText,
  Compass,
  Plane,
  Briefcase,
  Users,
  HeartHandshake,
  CheckCircle,
  Phone,
  MapPin,
  Clock,
  Star,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import { COMPANY_INFO } from "@/data/company";
import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Logo } from "@/components/navigation/Logo";
import {
  Container,
  Button,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  SectionHeading,
  Input,
  Select,
  PhotoPlaceholder,
} from "@/components/ui";

const serviceIcons: Record<string, React.ElementType> = {
  "ielts-prep": BookOpen,
  "pte-prep": BookOpen,
  "spoken-english": Users,
  "study-abroad-counselling": Compass,
  "university-selection": GraduationCap,
  "student-visa": Plane,
  "work-visa": Briefcase,
  "visitor-visa": Plane,
  "dependent-visa": HeartHandshake,
  "documentation-assistance": FileText,
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Production Responsive Navbar */}
      <Navbar />

      {/* Production Hero Section */}
      <Hero />

      {/* Verified Core Services Section */}
      <section id="services" className="py-20 bg-surface-warm border-b border-slate-200">
        <Container>
          <SectionHeading
            kicker="Our Core Services"
            title="Comprehensive Education & Visa Services"
            subtitle="Full-spectrum overseas advisory delivered directly by our team in Rohtak — from initial language testing to foreign admissions and visa filing."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.coreServices.map((service) => {
              const Icon = serviceIcons[service.id] || Compass;
              return (
                <Card
                  key={service.id}
                  variant="default"
                  className="p-6 flex flex-col justify-between hover:border-slate-300 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-md bg-navy-50 text-navy-900 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <Badge variant="neutral" size="sm">
                        {service.category}
                      </Badge>
                    </div>
                    <h3 className="text-base font-bold text-navy-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-charcoal-600 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-royal-600">
                      Inquire for this service
                    </span>
                    <ArrowRight className="w-4 h-4 text-royal-600" />
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Primary Study Destinations */}
      <section id="destinations" className="py-20 bg-white border-b border-slate-200">
        <Container>
          <SectionHeading
            kicker="Primary Destinations"
            title="Countries We Assist With"
            subtitle="Guidance on admissions criteria, post-study work rights, and student visa processes across major international education destinations."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.primaryDestinations.map((dest) => (
              <Card
                key={dest.id}
                variant="default"
                className="p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{dest.flag}</span>
                    <h3 className="text-lg font-bold text-navy-900">
                      {dest.name}
                    </h3>
                  </div>
                  <p className="text-xs text-charcoal-600 leading-relaxed mb-4">
                    {dest.highlight}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[11px] text-charcoal-500">
                  <span className="font-semibold text-charcoal-700">Intakes: </span>
                  {dest.popularIntakes.join(", ")}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Test Preparation Spotlight */}
      <section id="test-prep" className="py-20 bg-surface-warm border-b border-slate-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <Badge variant="navy" size="sm" className="mb-3">
                Classroom & Test Coaching
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight mb-4">
                Structured IELTS & PTE Preparation in Rohtak
              </h2>
              <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed mb-6">
                Achieve your required language scores with structured daily classroom
                practice, module-wise test series, and dedicated speaking drills in
                our Rohtak center.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "IELTS (Academic & General)",
                    desc: "Listening, Reading, Writing, and 1-on-1 Speaking practice with authentic evaluation.",
                  },
                  {
                    title: "PTE Academic Coaching",
                    desc: "Computer lab practice, question types analysis, and software-guided scoring practice.",
                  },
                  {
                    title: "Spoken English & Interview Prep",
                    desc: "Vocabulary development and confidence building for visa officer interviews.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-royal-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-bold text-navy-900">
                        {item.title}
                      </h4>
                      <p className="text-xs text-charcoal-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                variant="royal"
                size="md"
                href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, "")}`}
              >
                Inquire for New Batch Timings
              </Button>
            </div>

            <div className="lg:col-span-6">
              <PhotoPlaceholder
                alt="Guruji Overseas Classroom and Learning Environment"
                category="classroom"
                label="Classroom & Practice Lab Environment"
                aspectRatio="16/9"
                className="shadow-card"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* About the Business & Office Location */}
      <section id="about" className="py-20 bg-white border-b border-slate-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <PhotoPlaceholder
                alt="Guruji Overseas Team and Student Interaction"
                category="students"
                label="Team & Student Interaction at Rohtak Office"
                aspectRatio="16/9"
              />
            </div>

            <div className="lg:col-span-6">
              <Badge variant="amber" size="sm" className="mb-3">
                About the Company
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight mb-4">
                {COMPANY_INFO.legalName}
              </h2>
              <p className="text-sm text-charcoal-600 leading-relaxed mb-4">
                Operating in Rohtak, Haryana since 2022, Guruji Overseas provides
                transparent, student-focused consultation. We guide candidates
                through every stage of foreign education — course selection,
                language preparation, documentation, and visa filing.
              </p>
              <p className="text-sm text-charcoal-600 leading-relaxed mb-6">
                Our claimed and verified Justdial profile with a 5.0 rating across
                300+ reviews reflects our ongoing commitment to authentic service
                and honest guidance for Haryana students.
              </p>

              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2 text-xs text-charcoal-700">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-navy-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-navy-900">
                      Physical Office Address:
                    </span>
                    <span>{COMPANY_INFO.location.addressLine1},</span><br />
                    <span>{COMPANY_INFO.location.addressLine2},</span><br />
                    <span>{COMPANY_INFO.location.cityStateZip}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-2 border-t border-slate-200">
                  <Phone className="w-4 h-4 text-navy-800 shrink-0" />
                  <span>Contact: {COMPANY_INFO.contact.primaryPhone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-navy-800 shrink-0" />
                  <span>Working Hours: {COMPANY_INFO.contact.officeHours}</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Inquiry Form Section */}
      <section id="inquiry" className="py-20 bg-surface-warm border-b border-slate-200">
        <Container size="narrow">
          <SectionHeading
            kicker="Direct Inquiry"
            title="Connect with Guruji Overseas"
            subtitle="Reach out to discuss your overseas education or visa inquiries. Visit our Rohtak office or submit your details below."
          />

          <Card variant="default" className="p-6 sm:p-8">
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="Full Name" placeholder="Your Name" />
                <Input
                  label="Mobile Number"
                  type="tel"
                  placeholder="+91 7056 544 009"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Select
                  label="Service Required"
                  options={[
                    { value: "ielts", label: "IELTS Preparation" },
                    { value: "pte", label: "PTE Preparation" },
                    { value: "spoken-english", label: "Spoken English" },
                    { value: "study-visa", label: "Study Abroad & Student Visa" },
                    { value: "visitor-visa", label: "Visitor / Travel Visa" },
                    { value: "work-visa", label: "Work Visa Guidance" },
                    { value: "other", label: "General Inquiry" },
                  ]}
                />
                <Select
                  label="Target Destination"
                  options={[
                    { value: "canada", label: "Canada" },
                    { value: "uk", label: "United Kingdom" },
                    { value: "australia", label: "Australia" },
                    { value: "new-zealand", label: "New Zealand" },
                    { value: "usa", label: "United States" },
                    { value: "germany", label: "Germany" },
                    { value: "ireland", label: "Ireland" },
                    { value: "undecided", label: "Not decided yet" },
                  ]}
                />
              </div>

              <Button
                variant="royal"
                size="lg"
                type="button"
                className="w-full"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Submit Inquiry
              </Button>

              <div className="text-center pt-2">
                <a
                  href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, "")}`}
                  className="text-xs text-charcoal-600 hover:text-navy-900 font-medium inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-royal-600" />
                  Or call directly: <span className="font-bold text-navy-900">{COMPANY_INFO.contact.displayPhone}</span>
                </a>
              </div>
            </form>
          </Card>
        </Container>
      </section>

      {/* Clean Institutional Footer */}
      <footer id="contact" className="bg-navy-950 text-slate-400 py-16 border-t border-navy-900">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Column 1: Brand & Registration */}
            <div className="space-y-3">
              <Logo theme="dark" />
              <p className="text-xs text-slate-400 leading-relaxed mt-2">
                {COMPANY_INFO.legalName}
              </p>
              <p className="text-xs text-slate-400">
                Established in {COMPANY_INFO.establishedYear}. Dedicated overseas education
                consultancy and language test training center in Rohtak, Haryana.
              </p>
            </div>

            {/* Column 2: Core Services */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                Core Services
              </h4>
              <ul className="space-y-2 text-xs">
                <li>IELTS & PTE Preparation</li>
                <li>Spoken English Classes</li>
                <li>Study Abroad Counselling</li>
                <li>University & Course Selection</li>
                <li>Student Visa Assistance</li>
                <li>Visitor & Spouse Visa Guidance</li>
              </ul>
            </div>

            {/* Column 3: Study Destinations */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                Destinations
              </h4>
              <ul className="space-y-2 text-xs">
                <li>Canada Study & Visa</li>
                <li>United Kingdom Admissions</li>
                <li>Australia Education</li>
                <li>New Zealand Study</li>
                <li>United States Admissions</li>
                <li>Germany & Ireland Pathways</li>
              </ul>
            </div>

            {/* Column 4: Location & Contact */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                Office & Contact
              </h4>
              <div className="space-y-2 text-xs text-slate-400">
                <p>
                  <strong className="text-slate-200">Address:</strong><br />
                  {COMPANY_INFO.location.addressLine1},<br />
                  {COMPANY_INFO.location.addressLine2},<br />
                  {COMPANY_INFO.location.cityStateZip}
                </p>
                <p>
                  <strong className="text-slate-200">Direct Phone:</strong><br />
                  <a
                    href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, "")}`}
                    className="text-amber-400 hover:underline font-semibold"
                  >
                    {COMPANY_INFO.contact.displayPhone}
                  </a>
                </p>
                <p>
                  <strong className="text-slate-200">Hours:</strong><br />
                  {COMPANY_INFO.contact.officeHours}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-navy-900 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>
              © {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved.
            </p>
            <p className="text-slate-400 text-[11px]">
              Rohtak, Haryana, India
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
