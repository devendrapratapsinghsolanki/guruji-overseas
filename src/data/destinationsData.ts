export interface CountryDetail {
  slug: string;
  name: string;
  officialName: string;
  flag: string;
  heroBadge: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  overview: string;
  image: string;
  quickStats: {
    label: string;
    value: string;
  }[];
  whyStudyHere: {
    title: string;
    description: string;
    icon?: string;
  }[];
  popularStudyAreas: {
    field: string;
    popularCourses: string[];
    description: string;
  }[];
  whoMayConsider: {
    category: string;
    criteria: string;
    recommendedPath: string;
  }[];
  applicationJourney: {
    stepNumber: number;
    title: string;
    description: string;
    timeline: string;
  }[];
  documentsOverview: {
    category: string;
    items: string[];
  }[];
  importantConsiderations: {
    heading: string;
    details: string;
    highlight?: string;
  }[];
  costBreakdown: {
    tuitionRange: string;
    livingExpenses: string;
    partTimeRights: string;
    postStudyWork: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  popularInstitutions: string[];
}

export const COUNTRIES_DATA: Record<string, CountryDetail> = {
  canada: {
    slug: "canada",
    name: "Canada",
    officialName: "Canada Higher Education & Study Permit",
    flag: "🇨🇦",
    heroBadge: "High Student Popularity",
    metaTitle: "Study in Canada | Colleges, Universities & PGWP Guidance | Guruji Overseas Rohtak",
    metaDescription:
      "Complete study in Canada counselling from Guruji Overseas Rohtak. Explore top DLI colleges, universities, PGWP stayback rights, SDS admission requirements, and visa filing guidance.",
    h1: "Study in Canada: Admissions, Top Institutions & Visa Guidance",
    tagline: "World-Class Practical Education with Clear Post-Graduation Work Pathways",
    overview:
      "Canada remains one of the world's most favored overseas education destinations for Indian students. With publicly funded colleges, polytechnics, and globally acclaimed universities, Canada provides affordable high-quality education, multicultural campus environments, and structured Post-Graduation Work Permit (PGWP) pathways across Ontario, British Columbia, Alberta, and Atlantic provinces.",
    image: "/images/campus-life.jpg",
    quickStats: [
      { label: "Top Intakes", value: "Sep (Fall) & Jan (Winter)" },
      { label: "Average Tuition", value: "CAD 15,000 - 32,000 / yr" },
      { label: "PGWP Work Rights", value: "Up to 3 Years" },
      { label: "Part-Time Work", value: "Up to 24 hrs / week" },
    ],
    whyStudyHere: [
      {
        title: "Internationally Recognized DLIs",
        description:
          "Study at designated learning institutions (DLIs) offering diplomas, advanced diplomas, bachelor's degrees, and post-graduate certificates aligned with industry standards.",
      },
      {
        title: "Post-Graduation Work Permit (PGWP)",
        description:
          "Eligible programs of 8 months to 2+ years duration offer open post-graduation work permits enabling students to gain valuable Canadian industry work experience.",
      },
      {
        title: "Co-op & Applied Learning",
        description:
          "Many Canadian diploma and degree programs integrate paid co-op semesters, allowing international students to earn practical skills and build professional networks.",
      },
      {
        title: "Safe & Welcoming Society",
        description:
          "Canada consistently ranks among the world's safest and most peaceful nations with excellent healthcare, public infrastructure, and multicultural diversity.",
      },
    ],
    popularStudyAreas: [
      {
        field: "Information Technology & Computer Science",
        popularCourses: ["Software Engineering", "Cloud Computing", "Data Analytics", "Cybersecurity", "Artificial Intelligence"],
        description: "High demand across technology hubs in Toronto, Vancouver, Montreal, and Ottawa.",
      },
      {
        field: "Business Administration & Management",
        popularCourses: ["Supply Chain & Logistics", "International Business", "Financial Planning", "Project Management", "Marketing Management"],
        description: "Specialized postgraduate certificates and master's degrees for career acceleration.",
      },
      {
        field: "Engineering & Applied Sciences",
        popularCourses: ["Mechanical Engineering", "Civil & Construction Technology", "Electrical Engineering", "Robotics & Automation"],
        description: "Hands-on lab training and technical certifications.",
      },
      {
        field: "Healthcare & Community Services",
        popularCourses: ["Healthcare Administration", "Practical Nursing", "Early Childhood Education", "Biotechnology"],
        description: "Programs addressing vital public health and community needs.",
      },
    ],
    whoMayConsider: [
      {
        category: "12th Pass Students (CBSE / HBSE / ICSE)",
        criteria: "55%+ in 12th standard with IELTS 6.0 (no band < 6.0) or PTE 60+",
        recommendedPath: "2-year Diploma or 3-4 year Bachelor's degree at accredited DLI colleges and universities.",
      },
      {
        category: "Bachelor's Graduates (3 or 4 Year Degrees)",
        criteria: "55%+ in Graduation with IELTS 6.5 (no band < 6.0) or PTE 60+",
        recommendedPath: "1-2 year Post-Graduate Certificate (PG Certificate) or Master's Degree.",
      },
      {
        category: "Working Professionals Seeking Upskilling",
        criteria: "Bachelor's degree with 1-5 years documented work experience",
        recommendedPath: "Applied Master's or Fast-Track Post-Graduate Diploma with Co-op placement.",
      },
    ],
    applicationJourney: [
      {
        stepNumber: 1,
        title: "Academic Profiling & Course Shortlisting",
        description: "Evaluate your past academic marks, gap years, and budget to shortlist approved DLI colleges & universities.",
        timeline: "Week 1",
      },
      {
        stepNumber: 2,
        title: "Language Test Preparation (IELTS / PTE)",
        description: "Target required overall band score (6.0 - 6.5) with coaching at Guruji Overseas Rohtak lab.",
        timeline: "Weeks 2 - 6",
      },
      {
        stepNumber: 3,
        title: "Application Submission & Offer Letter",
        description: "Submit transcripts and SOP to secure Letter of Acceptance (LOA) and Provincial Attestation Letter (PAL).",
        timeline: "Weeks 4 - 8",
      },
      {
        stepNumber: 4,
        title: "Tuition Fee Payment & GIC Account",
        description: "Pay 1st year tuition fee directly to the institution and open Guaranteed Investment Certificate (GIC) account.",
        timeline: "Weeks 8 - 10",
      },
      {
        stepNumber: 5,
        title: "Study Permit Application & Biometrics",
        description: "Submit online visa file to IRCC with audited financial documentation, SOP, upfront medicals, and biometrics.",
        timeline: "Weeks 10 - 14",
      },
      {
        stepNumber: 6,
        title: "Visa Approval & Pre-Departure Briefing",
        description: "Receive passport dispatch, book flights, arrange initial accommodation, and attend pre-departure orientation.",
        timeline: "Prior to Departure",
      },
    ],
    documentsOverview: [
      {
        category: "Academic Records",
        items: [
          "10th and 12th Marksheets & Passing Certificates",
          "Bachelor's Degree Transcripts & Degree Certificate (if applicable)",
          "Backlog certificate / Consolidated marksheet",
        ],
      },
      {
        category: "Test Scores & Identification",
        items: [
          "Valid International Passport (minimum 18 months validity)",
          "Official IELTS Academic or PTE Academic Scorecard",
          "Aadhaar Card and National ID proofs",
        ],
      },
      {
        category: "Institution & Financial Proofs",
        items: [
          "Official Letter of Acceptance (LOA) from Canadian DLI",
          "Provincial Attestation Letter (PAL) where applicable",
          "1st Year Tuition Fee Receipt from Canadian Institution",
          "GIC (Guaranteed Investment Certificate) Confirmation Certificate (CAD 20,635+)",
          "Sponsor Income Tax Returns (ITRs) and bank balance statements",
        ],
      },
      {
        category: "Statements & Medicals",
        items: [
          "Academic Statement of Purpose (SOP) detailing study rationale & home ties",
          "Upfront Medical Examination Sheet from empaneled doctor",
          "Police Clearance Certificate (PCC) if requested",
        ],
      },
    ],
    importantConsiderations: [
      {
        heading: "Provincial Attestation Letter (PAL) Requirement",
        details: "Under latest IRCC regulations, most undergraduate study permit applicants require a Provincial Attestation Letter (PAL) issued through their chosen province.",
        highlight: "Mandatory Compliance",
      },
      {
        heading: "PGWP Eligibility Rules",
        details: "Ensure your selected program and institution are eligible for Post-Graduation Work Permits before accepting an offer.",
        highlight: "Program Scrutiny",
      },
      {
        heading: "Genuine Temporary Resident (GTR) Intent",
        details: "Your SOP must clearly demonstrate strong ties to your home country India and clear career justification for the chosen course.",
        highlight: "Critical Visa Factor",
      },
    ],
    costBreakdown: {
      tuitionRange: "CAD $14,000 - $32,000 / year (Colleges vs Universities)",
      livingExpenses: "CAD $20,635 / year (official IRCC baseline GIC requirement)",
      partTimeRights: "Up to 24 hours per week during academic sessions",
      postStudyWork: "1 to 3 years PGWP based on program duration",
    },
    faqs: [
      {
        question: "Can I apply for Canada study permit with study gaps after 12th or graduation?",
        answer:
          "Yes, study gaps are acceptable if substantiated with valid proof such as formal employment certificates, salary slips, bank credits, or recognized skill development diplomas. Guruji Overseas Rohtak helps structure appropriate gap justification affidavits.",
      },
      {
        question: "What is the minimum IELTS / PTE requirement for Canada SDS visa?",
        answer:
          "For undergraduate diploma programs, institutions generally require IELTS 6.0 overall with no band below 6.0 (or PTE 60+). For master's degrees and postgraduate certificates, IELTS 6.5 with no band below 6.0 is commonly standard.",
      },
      {
        question: "What is the role of GIC in Canada student visa?",
        answer:
          "The Guaranteed Investment Certificate (GIC) is a Canadian bank deposit that demonstrates you have sufficient funds to cover your first year's living expenses in Canada. The funds are disbursed back to you in monthly installments once you arrive.",
      },
      {
        question: "Does Guruji Overseas guarantee visa approval for Canada?",
        answer:
          "No ethical consultant can guarantee visa approval, as all decisions rest strictly with IRCC visa officers. We guarantee exhaustive document scrutiny, financial audit, and professional SOP structuring adhering to high commission guidelines.",
      },
    ],
    popularInstitutions: [
      "Seneca Polytechnic, Toronto",
      "Humber College, Toronto",
      "Conestoga College, Kitchener/Waterloo",
      "George Brown College, Toronto",
      "Centennial College, Toronto",
      "Douglas College, Vancouver",
      "University of Windsor, Ontario",
      "Memorial University of Newfoundland",
      "University of Manitoba, Winnipeg",
    ],
  },

  uk: {
    slug: "uk",
    name: "United Kingdom",
    officialName: "United Kingdom Higher Education & Student Route",
    flag: "🇬🇧",
    heroBadge: "1-Year Master's Programs",
    metaTitle: "Study in UK | 1-Year Master's, Russell Group & Graduate Route | Guruji Overseas Rohtak",
    metaDescription:
      "Expert UK study abroad counselling from Guruji Overseas Rohtak. Explore top Russell Group universities, 1-year Master's degrees, 2-year Graduate Route stayback, and CAS visa guidance.",
    h1: "Study in the United Kingdom: Universities, Courses & Visa Guidance",
    tagline: "World-Renowned Academic Excellence & Time-Efficient 1-Year Master's",
    overview:
      "The United Kingdom is a global educational powerhouse renowned for its historic universities, rigorous academic standards, and accelerated degree structures. With 1-year Master's degrees and 3-year Bachelor's programs, students save significant time and living costs while earning globally prestigious qualifications recognized by employers worldwide.",
    image: "/images/global-university-campus.jpg",
    quickStats: [
      { label: "Major Intakes", value: "Sep/Oct & Jan/Feb" },
      { label: "Avg Master's Tuition", value: "£13,000 - £26,000 / yr" },
      { label: "Graduate Route", value: "2 Years Stayback" },
      { label: "Course Duration", value: "1-Yr Masters, 3-Yr Bachelors" },
    ],
    whyStudyHere: [
      {
        title: "Fast-Track 1-Year Master's Degrees",
        description:
          "Complete your postgraduate degree in just 12 calendar months, entering the global workforce a full year ahead of peers studying in 2-year jurisdictions.",
      },
      {
        title: "2-Year Post-Study Graduate Route",
        description:
          "International graduates holding a UK degree can work or look for work in the UK at any skill level for 2 years without requiring direct employer sponsorship.",
      },
      {
        title: "Prestigious Russell Group & Modern Tech Universities",
        description:
          "Access world top-ranked research institutions and modern technical universities with cutting-edge industry partnerships.",
      },
      {
        title: "Rich Cultural & Professional Heritage",
        description:
          "Live in a dynamic global financial and cultural center with strong connectivity to Europe and global markets.",
      },
    ],
    popularStudyAreas: [
      {
        field: "Business, Finance & Management",
        popularCourses: ["MBA / International Business", "FinTech & Financial Analysis", "Marketing Strategy", "Supply Chain Management"],
        description: "Direct ties to London's global financial district and European commercial hubs.",
      },
      {
        field: "Computer Science & Artificial Intelligence",
        popularCourses: ["Data Science & Big Data", "Cyber Security", "Machine Learning & AI", "Cloud Computing"],
        description: "Pioneering research facilities and strong corporate recruitment.",
      },
      {
        field: "Engineering & Renewable Technology",
        popularCourses: ["Advanced Mechanical Engineering", "Civil Engineering", "Renewable Energy Systems", "Automotive Design"],
        description: "Accredited by the Engineering Council (UK) and international bodies.",
      },
      {
        field: "Health Sciences & Public Health",
        popularCourses: ["Public Health (MPH)", "Biomedical Sciences", "Health Informatics", "Pharmaceutical Sciences"],
        description: "World-class laboratory exposure and health systems research.",
      },
    ],
    whoMayConsider: [
      {
        category: "Bachelor's Graduates Seeking Fast ROI",
        criteria: "55%+ in Bachelor's degree (3-year or 4-year recognized Indian degree)",
        recommendedPath: "1-Year Master's Degree (MSc / MA / MBA) with 2-year Graduate Route visa.",
      },
      {
        category: "12th Standard Students",
        criteria: "65%+ in 12th Standard with good English marks in 12th (70%+ often waives IELTS)",
        recommendedPath: "3-Year Bachelor's (BSc / BEng / BA) or 1-year Foundation + 3-year Degree.",
      },
      {
        category: "Mid-Career Professionals",
        criteria: "Graduation with relevant industry work experience",
        recommendedPath: "Executive MBA or Specialized MSc with industry consulting project.",
      },
    ],
    applicationJourney: [
      {
        stepNumber: 1,
        title: "University & Course Selection",
        description: "Match your academic scores, career goals, and budget to select 3-5 suitable UK universities.",
        timeline: "Week 1",
      },
      {
        stepNumber: 2,
        title: "Application & English Language Evaluation",
        description: "Submit application with SOP and LORs; evaluate IELTS requirement or 12th English score waiver.",
        timeline: "Weeks 2 - 4",
      },
      {
        stepNumber: 3,
        title: "Conditional / Unconditional Offer",
        description: "Receive offer letter and fulfill conditions (tuition deposit, academic verification).",
        timeline: "Weeks 4 - 8",
      },
      {
        stepNumber: 4,
        title: "Pre-CAS Interview & CAS Issuance",
        description: "Attend university credibility interview and receive Confirmation of Acceptance for Studies (CAS).",
        timeline: "Weeks 8 - 10",
      },
      {
        stepNumber: 5,
        title: "Financial Maintenance & Student Visa Filing",
        description: "Maintain required 28-day funds in approved bank account and submit Student Route visa application.",
        timeline: "Weeks 10 - 13",
      },
      {
        stepNumber: 6,
        title: "Biometrics, Decision & Travel",
        description: "Attend VFS Global biometrics appointment, collect BRP decision letter, and book flights.",
        timeline: "Weeks 13 - 15",
      },
    ],
    documentsOverview: [
      {
        category: "Academic Credentials",
        items: [
          "Class 10th & 12th Marksheets and Certificates",
          "Bachelor's Degree Marksheets (All Semesters) & Degree Certificate / Provisional",
          "Academic Letters of Recommendation (LORs) from professors/employers",
        ],
      },
      {
        category: "Identification & CAS",
        items: [
          "Valid Passport",
          "Official CAS (Confirmation of Acceptance for Studies) statement",
          "IELTS Academic / PTE Academic Scorecard (or 12th English waiver documentation)",
        ],
      },
      {
        category: "Financial Proofs (28-Day Rule)",
        items: [
          "Bank statement showing tuition balance + living expenses held for 28 consecutive days",
          "Education loan sanction letter from approved nationalized/private bank",
          "Sponsorship declaration affidavit if supported by parents",
        ],
      },
      {
        category: "Statements & Health",
        items: [
          "Well-drafted Academic Statement of Purpose (SOP)",
          "UK Tuberculosis (TB) Test Certificate from approved IOM clinic",
          "Immigration Health Surcharge (IHS) payment confirmation",
        ],
      },
    ],
    importantConsiderations: [
      {
        heading: "Strict 28-Day Financial Rule",
        details: "Funds covering the remaining tuition fee plus official living expenses (£9,207 outside London / £12,006 inside London) must be held for 28 consecutive days before visa submission.",
        highlight: "Zero Tolerance Policy",
      },
      {
        heading: "University Credibility Interviews",
        details: "Most UK universities and UKVI conduct credibility interviews to assess genuine student intent, course knowledge, and future plans.",
        highlight: "Mock Drills Available at Rohtak Lab",
      },
      {
        heading: "Immigration Health Surcharge (IHS)",
        details: "International students must pay the mandatory IHS fee to access the UK National Health Service (NHS) throughout their study tenure.",
        highlight: "Mandatory Fee",
      },
    ],
    costBreakdown: {
      tuitionRange: "£13,000 - £26,000 / year (depending on institution and course)",
      livingExpenses: "£9,207 / 9 months (Outside London) | £12,006 / 9 months (Inside London)",
      partTimeRights: "Up to 20 hours per week during term time",
      postStudyWork: "2-year Graduate Route visa upon successful degree completion",
    },
    faqs: [
      {
        question: "Can I study in the UK without giving IELTS?",
        answer:
          "Many UK universities waive the IELTS requirement for Indian students if they achieved 70%+ in English in Class 12th (CBSE / ICSE / state board). Alternatively, Pearson PTE Academic is universally accepted across all UK institutions.",
      },
      {
        question: "Is a 1-year Master's degree from the UK recognized in India?",
        answer:
          "Yes, UK Master's degrees from accredited universities are globally recognized by employers, multinational corporations, and academic bodies worldwide.",
      },
      {
        question: "What is the UK CAS letter and how do I receive it?",
        answer:
          "The Confirmation of Acceptance for Studies (CAS) is an electronic reference number generated by the university after you accept your unconditional offer, pay the initial deposit, and pass the credibility interview.",
      },
      {
        question: "How does the 2-Year Graduate Route work?",
        answer:
          "Upon successfully completing your degree, you can apply for the Graduate Route visa, granting 2 years of open work authorization across the UK without requiring an employer sponsor.",
      },
    ],
    popularInstitutions: [
      "University of Manchester",
      "University of Birmingham",
      "University of Leeds",
      "Queen Mary University of London",
      "University of Sheffield",
      "Coventry University",
      "Nottingham Trent University",
      "University of Hertfordshire",
      "Middlesex University London",
    ],
  },

  australia: {
    slug: "australia",
    name: "Australia",
    officialName: "Australia Higher Education & Subclass 500 Visa",
    flag: "🇦🇺",
    heroBadge: "Group of Eight Excellence",
    metaTitle: "Study in Australia | Subclass 500 Visa, Universities & Work Rights | Guruji Overseas",
    metaDescription:
      "Complete Australia study abroad counselling from Guruji Overseas Rohtak. Explore Group of Eight universities, Genuine Student (GS) criteria, Subclass 500 visa filing, and post-study work rights.",
    h1: "Study in Australia: Group of Eight, Regional Universities & Visa Guidance",
    tagline: "World-Class Academic Standards, High Quality of Life & Post-Study Work",
    overview:
      "Australia is celebrated globally for its world-ranking universities, progressive research output, and high standard of living. With iconic Group of Eight (Go8) research universities and vibrant regional campus networks in cities like Melbourne, Sydney, Brisbane, Adelaide, and Perth, Australia offers diverse degrees with structured post-study work rights under Subclass 485.",
    image: "/images/foreign-students-campus.jpg",
    quickStats: [
      { label: "Major Intakes", value: "Feb/Mar & Jul/Aug (Nov minor)" },
      { label: "Avg Tuition", value: "AUD 24,000 - 45,000 / yr" },
      { label: "Post-Study Work", value: "2 - 4 Years (PSW)" },
      { label: "Part-Time Work", value: "48 hrs / fortnight" },
    ],
    whyStudyHere: [
      {
        title: "World Top-Ranked Institutions",
        description:
          "Home to prestigious Group of Eight universities consistently ranked among the world's top 100 higher education institutions.",
      },
      {
        title: "Robust Post-Study Work Rights",
        description:
          "Graduates can access Temporary Graduate Subclass 485 visas providing valuable years of full-time Australian workplace experience.",
      },
      {
        title: "Regional Study Incentives",
        description:
          "Studying at regional campuses (Perth, Adelaide, Gold Coast, Wollongong) provides additional post-study stayback years and lifestyle perks.",
      },
      {
        title: "High Safety & Multicultural Living",
        description:
          "Australian cities consistently rank among the most liveable in the world with superior climate, health infrastructure, and student support.",
      },
    ],
    popularStudyAreas: [
      {
        field: "Information Technology & Cybersecurity",
        popularCourses: ["Master of Information Technology", "Cyber Security", "Data Science", "Artificial Intelligence & Cloud Systems"],
        description: "Accredited by the Australian Computer Society (ACS).",
      },
      {
        field: "Engineering & Mining Technology",
        popularCourses: ["Civil & Infrastructure Engineering", "Mechanical Engineering", "Mining & Renewable Energy", "Mechatronics"],
        description: "Accredited under Engineers Australia Washington Accord.",
      },
      {
        field: "Business, Analytics & Finance",
        popularCourses: ["Master of Professional Accounting", "Business Analytics", "Supply Chain & Logistics", "MBA"],
        description: "Strong corporate connections across Australian commercial centers.",
      },
      {
        field: "Nursing & Public Health",
        popularCourses: ["Bachelor of Nursing", "Master of Public Health", "Health Administration", "Social Work"],
        description: "Hands-on clinical rotations and high industry demand.",
      },
    ],
    whoMayConsider: [
      {
        category: "12th Standard Science / Commerce / Arts",
        criteria: "65%+ in 12th standard with IELTS 6.0 - 6.5 or PTE 58 - 64",
        recommendedPath: "3-year Bachelor's degree or Diploma leading to Bachelor's degree.",
      },
      {
        category: "Bachelor's Degree Graduates",
        criteria: "55%+ in graduation with IELTS 6.5 (no band < 6.0) or PTE 65+",
        recommendedPath: "2-year Master's by Coursework with 2-3 years post-study work visa.",
      },
      {
        category: "Healthcare & Engineering Aspirants",
        criteria: "Relevant academic background with competitive language score",
        recommendedPath: "Professional accredited bachelor's or master's programs with clinical/practical attachments.",
      },
    ],
    applicationJourney: [
      {
        stepNumber: 1,
        title: "Profile Assessment & University Selection",
        description: "Evaluate scores, gap years, and financial capacity for Level 1 / Level 2 universities.",
        timeline: "Week 1",
      },
      {
        stepNumber: 2,
        title: "IELTS / PTE Exam & Application",
        description: "Appear for test and submit documentation for conditional offer letter.",
        timeline: "Weeks 2 - 4",
      },
      {
        stepNumber: 3,
        title: "Genuine Student (GS) & Financial Audit",
        description: "Complete university Genuine Student (GS) questionnaire and submit audited source of funds.",
        timeline: "Weeks 4 - 8",
      },
      {
        stepNumber: 4,
        title: "Fee Payment & Confirmation of Enrolment (CoE)",
        description: "Pay initial semester tuition fee and purchase Overseas Student Health Cover (OSHC) to obtain CoE.",
        timeline: "Weeks 8 - 10",
      },
      {
        stepNumber: 5,
        title: "Subclass 500 Student Visa Submission",
        description: "Submit online visa file via ImmiAccount with GS statement, biometric scheduling, and medical exam.",
        timeline: "Weeks 10 - 14",
      },
      {
        stepNumber: 6,
        title: "Visa Grant & Travel Preparation",
        description: "Receive Subclass 500 visa grant notice, arrange accommodation, and attend pre-departure briefing.",
        timeline: "Pre-Departure",
      },
    ],
    documentsOverview: [
      {
        category: "Academic Transcripts",
        items: [
          "Class 10th & 12th Marksheets and Certificates",
          "Bachelor's Degree Transcripts & Degree Certificate (if applicable)",
          "Proof of any relevant employment (offer letter, salary slips, bank statements)",
        ],
      },
      {
        category: "Identity & Test Score",
        items: [
          "Valid Passport (clear color scanned copy)",
          "Official IELTS Academic or PTE Academic Scorecard",
          "Aadhaar card & identity proofs",
        ],
      },
      {
        category: "Enrolment & Health",
        items: [
          "Electronic Confirmation of Enrolment (eCoE) from Australian university",
          "Overseas Student Health Cover (OSHC) policy document",
          "HAP ID Medical examination receipt from approved panel clinic",
        ],
      },
      {
        category: "Financials & Genuine Student (GS)",
        items: [
          "Bank balance and education loan sanction documentation covering 1 year tuition + AUD 29,710 living costs",
          "Sponsor ITRs, Form 16, and annual income proof",
          "Genuine Student (GS) Statement addressing career plans and ties to India",
        ],
      },
    ],
    importantConsiderations: [
      {
        heading: "Genuine Student (GS) Assessment",
        details: "The Australian Department of Home Affairs rigorously assesses the applicant's study intent, background, future career prospects in India, and financial capacity.",
        highlight: "Strict Assessment",
      },
      {
        heading: "Updated Living Cost Requirement",
        details: "The baseline annual living expense requirement for primary student applicants is AUD 29,710.",
        highlight: "Official Financial Threshold",
      },
      {
        heading: "Overseas Student Health Cover (OSHC)",
        details: "Continuous OSHC health insurance is mandatory for the entire duration of your stay in Australia.",
        highlight: "Mandatory Requirement",
      },
    ],
    costBreakdown: {
      tuitionRange: "AUD $24,000 - $45,000 / year (depending on university tier and program)",
      livingExpenses: "AUD $29,710 / year (official Home Affairs living cost baseline)",
      partTimeRights: "Up to 48 hours per fortnight during study terms",
      postStudyWork: "2 to 4 years under Subclass 485 Temporary Graduate visa",
    },
    faqs: [
      {
        question: "What is the Genuine Student (GS) requirement for Australia?",
        answer:
          "The Genuine Student (GS) criterion evaluates whether the applicant's circumstances demonstrate genuine intent to obtain a quality education in Australia and how the course aligns with their realistic career trajectory back home.",
      },
      {
        question: "Can I take my spouse on an Australian student visa?",
        answer:
          "Yes, dependent spouses can be included on a Subclass 500 visa application, subject to meeting financial maintenance proof and relationship authenticity requirements.",
      },
      {
        question: "What are the advantages of studying in regional Australia?",
        answer:
          "Studying in designated regional locations (such as Adelaide, Perth, Wollongong, Newcastle) offers additional post-study work rights (up to an extra 1-2 years) and lower living costs.",
      },
      {
        question: "How much funds are required to show for an Australia student visa?",
        answer:
          "You must demonstrate access to funds covering 1st year tuition fees, 1 year of living costs (AUD 29,710), and return travel allowance (approx. AUD 2,000), supported by clear source-of-funds evidence.",
      },
    ],
    popularInstitutions: [
      "University of Melbourne",
      "University of Sydney",
      "University of New South Wales (UNSW)",
      "Monash University, Melbourne",
      "University of Queensland (UQ)",
      "Deakin University, Melbourne",
      "RMIT University, Melbourne",
      "University of Wollongong",
      "La Trobe University, Melbourne",
    ],
  },

  "new-zealand": {
    slug: "new-zealand",
    name: "New Zealand",
    officialName: "New Zealand Higher Education & Fee Paying Student Visa",
    flag: "🇳🇿",
    heroBadge: "High Quality of Life & Safety",
    metaTitle: "Study in New Zealand | 8 State Universities & Post-Study Work | Guruji Overseas",
    metaDescription:
      "Expert New Zealand study abroad guidance from Guruji Overseas Rohtak. Explore all 8 state-funded NZ universities, Te Pūkenga institutes, post-study work rights, and visa filing.",
    h1: "Study in New Zealand: Universities, Institutes & Visa Guidance",
    tagline: "World-Class Practical Learning in One of the Safest, Most Scenic Nations",
    overview:
      "New Zealand offers a progressive, highly supportive education ecosystem. All eight of New Zealand's state-funded universities rank in the top 3% worldwide (QS World Rankings). Alongside Te Pūkenga (New Zealand Institute of Skills and Technology), the country provides cutting-edge research, hands-on learning, and generous post-study work visas.",
    image: "/images/campus-life.jpg",
    quickStats: [
      { label: "Major Intakes", value: "February & July" },
      { label: "Avg Tuition", value: "NZD 20,000 - 36,000 / yr" },
      { label: "Stayback Rights", value: "Up to 3 Years" },
      { label: "Part-Time Work", value: "20 hrs / week" },
    ],
    whyStudyHere: [
      {
        title: "All 8 Universities Top Ranked Globally",
        description:
          "Every single state university in New Zealand is internationally ranked in the QS Global Top 500.",
      },
      {
        title: "Up to 3-Year Post-Study Work Visas",
        description:
          "Degree graduates can access up to 3 years of post-study open work rights depending on study level and qualification.",
      },
      {
        title: "Peaceful, Transparent & Safe Country",
        description:
          "Ranked among the top 3 most peaceful and least corrupt countries globally on the Global Peace Index.",
      },
      {
        title: "Practical & Applied Skill Focus",
        description:
          "Curricula emphasize critical thinking, practical workshops, and direct industry integration.",
      },
    ],
    popularStudyAreas: [
      {
        field: "Information Technology & Software Development",
        popularCourses: ["Master of Applied Technologies", "Software Engineering", "Data Analytics", "Cloud Computing"],
        description: "Thriving tech sectors in Auckland, Wellington, and Christchurch.",
      },
      {
        field: "Agri-Business, Environmental & Food Science",
        popularCourses: ["Sustainable Agriculture", "Food Technology", "Environmental Management", "Viticulture"],
        description: "Global leadership in sustainable farming and ecological science.",
      },
      {
        field: "Business, Finance & Supply Chain",
        popularCourses: ["Master of Management", "International Business", "Supply Chain Management", "Professional Accounting"],
        description: "Accredited by AACSB, EQUIS, and AMBA.",
      },
      {
        field: "Construction Management & Civil Engineering",
        popularCourses: ["Construction Project Management", "Structural Engineering", "Quantity Surveying"],
        description: "Critical demand in New Zealand's infrastructure development.",
      },
    ],
    whoMayConsider: [
      {
        category: "12th Pass Students",
        criteria: "65%+ in 12th standard with IELTS 6.0 or PTE 58+",
        recommendedPath: "3-year Bachelor's degree or 2-year Diploma with university pathway.",
      },
      {
        category: "Bachelor's Graduates (3 or 4 Year)",
        criteria: "55%+ in Graduation with IELTS 6.5 (no band < 6.0) or PTE 65+",
        recommendedPath: "1-2 year Master's Degree (Level 9) or Postgraduate Diploma (Level 8).",
      },
      {
        category: "Professionals Seeking Practical Tech/Management Degrees",
        criteria: "Degree with relevant work background",
        recommendedPath: "Applied Master's at Te Pūkenga or State Universities.",
      },
    ],
    applicationJourney: [
      {
        stepNumber: 1,
        title: "Course Selection & Academic Audit",
        description: "Select appropriate Level 7, Level 8, or Level 9 program matching your background.",
        timeline: "Week 1",
      },
      {
        stepNumber: 2,
        title: "Language Test & Application Submission",
        description: "Submit transcripts and SOP to secure Offer of Place from New Zealand institution.",
        timeline: "Weeks 2 - 4",
      },
      {
        stepNumber: 3,
        title: "Visa Application Submission (AIP Stage)",
        description: "Submit Fee Paying Student Visa file to Immigration New Zealand (INZ) for Approval in Principle (AIP).",
        timeline: "Weeks 4 - 8",
      },
      {
        stepNumber: 4,
        title: "Tuition Fee Transfer & Medicals",
        description: "Upon receiving AIP, transfer 1st year tuition fees directly to the university via Telegraphic Transfer (TT).",
        timeline: "Weeks 8 - 10",
      },
      {
        stepNumber: 5,
        title: "Final Visa Grant & Pre-Departure",
        description: "Receive official eVisa label from INZ, book flights, and attend Rohtak office briefing.",
        timeline: "Weeks 10 - 12",
      },
    ],
    documentsOverview: [
      {
        category: "Academic & Identification",
        items: [
          "All Academic marksheets from Class 10th onward",
          "Degree / Diploma certificates and transcripts",
          "Valid Passport and national ID cards",
          "IELTS Academic or PTE Academic Scorecard",
        ],
      },
      {
        category: "Offer & Financials",
        items: [
          "Official Offer of Place from NZ university/institute",
          "Proof of funds covering tuition fee + NZD 20,000 living costs (6 months old savings / approved education loan)",
          "Fund Transfer Scheme (FTS) documentation through ANZ Bank if applicable",
          "Sponsor income documents, ITRs, and relationship affidavit",
        ],
      },
      {
        category: "Health & Character",
        items: [
          "E-Medical chest X-ray and general medical certificate from panel clinic",
          "Police Clearance Certificate (PCC) issued by Regional Passport Office",
          "Statement of Purpose detailing genuine study intent",
        ],
      },
    ],
    importantConsiderations: [
      {
        heading: "Approval in Principle (AIP) Visa System",
        details: "Under INZ protocol, you do not pay tuition fees upfront. You only pay tuition after INZ assesses your application and grants Approval in Principle (AIP).",
        highlight: "High Financial Security",
      },
      {
        heading: "Funds Transfer Scheme (FTS)",
        details: "Indian students can utilize the FTS mechanism via ANZ Bank to transparently demonstrate living funds to Immigration New Zealand.",
        highlight: "Smooth Processing",
      },
      {
        heading: "Spouse Work Visa for Master's Students",
        details: "Students enrolled in eligible Level 9 Master's programs may support an open work visa for their accompanying spouse.",
        highlight: "Family Benefit",
      },
    ],
    costBreakdown: {
      tuitionRange: "NZD $20,000 - $36,000 / year",
      livingExpenses: "NZD $20,000 / year (official INZ living cost requirement)",
      partTimeRights: "Up to 20 hours per week during term time",
      postStudyWork: "Up to 3 years post-study work visa for degree graduates",
    },
    faqs: [
      {
        question: "How does the New Zealand AIP (Approval in Principle) process work?",
        answer:
          "You submit your student visa application with financial documentation first. Once INZ reviews and provisionally approves your file, they issue an AIP letter. You then pay your tuition fee and receive your final eVisa.",
      },
      {
        question: "What is the Funds Transfer Scheme (FTS)?",
        answer:
          "The FTS is a secure financial arrangement with ANZ Bank in New Zealand, where living funds (NZD 20,000) are transferred to a locked account and released monthly after arrival.",
      },
      {
        question: "Can my spouse work full-time while I study in New Zealand?",
        answer:
          "If you are enrolled in a recognized Level 9 Master's degree (or specified Level 8 qualifications on the Green List), your spouse may be eligible for an open work visa.",
      },
      {
        question: "Are all New Zealand universities government-owned?",
        answer:
          "Yes, all 8 universities in New Zealand are state-funded, ensuring consistently rigorous academic governance and internationally accredited degrees.",
      },
    ],
    popularInstitutions: [
      "University of Auckland",
      "University of Otago, Dunedin",
      "Victoria University of Wellington",
      "University of Canterbury, Christchurch",
      "Massey University, Palmerston North/Auckland",
      "University of Waikato, Hamilton",
      "Lincoln University, Christchurch",
      "Auckland University of Technology (AUT)",
      "Te Pūkenga (NZIST)",
    ],
  },

  usa: {
    slug: "usa",
    name: "United States",
    officialName: "United States Higher Education & F-1 Student Visa",
    flag: "🇺🇸",
    heroBadge: "World #1 Education Destination",
    metaTitle: "Study in USA | F-1 Visa, STEM OPT & Universities | Guruji Overseas Rohtak",
    metaDescription:
      "Expert USA study abroad counselling from Guruji Overseas Rohtak. Explore top US universities, STEM OPT 3-year stayback, I-20 documentation, and F-1 visa interview prep.",
    h1: "Study in the United States: Universities, STEM OPT & F-1 Visa Guidance",
    tagline: "Unrivaled Program Diversity, Cutting-Edge Research & 3-Year STEM OPT",
    overview:
      "The United States is home to the world's most comprehensive higher education system, encompassing Ivy League universities, top public research flagships, and dynamic private institutions. With flexible course curricula, extensive scholarship opportunities, and up to 3 years of Optional Practical Training (OPT) for STEM graduates, the US offers unmatched career potential.",
    image: "/images/international-graduates.jpg",
    quickStats: [
      { label: "Major Intakes", value: "Fall (August) & Spring (January)" },
      { label: "Avg Tuition", value: "$18,000 - $48,000 / yr" },
      { label: "STEM OPT", value: "3 Years Practical Training" },
      { label: "Campus Work", value: "20 hrs / week on-campus" },
    ],
    whyStudyHere: [
      {
        title: "3-Year STEM OPT Work Rights",
        description:
          "Graduates in Science, Technology, Engineering, and Mathematics (STEM) fields qualify for a 24-month OPT extension, providing a total of 36 months of US work authorization.",
      },
      {
        title: "World's Top Research Infrastructure",
        description:
          "Access multi-billion dollar research facilities, corporate incubators, and faculty leaders at the forefront of global technological innovation.",
      },
      {
        title: "Flexible Academic Curricula",
        description:
          "Customize your major and minor specializations, transfer credits, and gain interdisciplinary exposure across technology, business, and liberal arts.",
      },
      {
        title: "Generous Scholarships & Assistantships",
        description:
          "Merit-based scholarships, Graduate Teaching Assistantships (GTA), and Research Assistantships (GRA) can significantly reduce study expenses.",
      },
    ],
    popularStudyAreas: [
      {
        field: "Computer Science, AI & Data Analytics (STEM)",
        popularCourses: ["Master of Science in Computer Science", "Data Science", "Cybersecurity", "Artificial Intelligence & Robotics"],
        description: "Recruitment hubs across Silicon Valley, Seattle, Austin, and New York.",
      },
      {
        field: "Engineering & Applied Sciences (STEM)",
        popularCourses: ["Mechanical Engineering", "Electrical & Computer Engineering", "Biomedical Engineering", "Industrial Engineering"],
        description: "Hands-on laboratory research and industry capstone projects.",
      },
      {
        field: "Business & Management (STEM MBA)",
        popularCourses: ["STEM-Designated MBA", "Business Analytics", "Quantitative Finance", "Supply Chain Management"],
        description: "Qualifies for 3-year STEM OPT with global leadership training.",
      },
      {
        field: "Biotechnology & Healthcare (STEM)",
        popularCourses: ["Biotechnology", "Bioinformatics", "Public Health (MPH)", "Pharmaceutical Chemistry"],
        description: "Direct ties to global pharmaceutical and clinical research corridors.",
      },
    ],
    whoMayConsider: [
      {
        category: "B.Tech / BCA / B.Sc Graduates (STEM)",
        criteria: "60%+ in Bachelor's degree with IELTS 6.5+ or PTE 65+ (GRE optional at many universities)",
        recommendedPath: "2-year Master of Science (MS) in STEM field with 3-year OPT.",
      },
      {
        category: "12th Standard Students (Undergraduate)",
        criteria: "65%+ in 12th standard with IELTS 6.0 - 6.5 (SAT optional)",
        recommendedPath: "4-year Bachelor of Science (BS) / Bachelor of Business Administration (BBA).",
      },
      {
        category: "Business & Analytics Aspirants",
        criteria: "Graduation in any discipline with quantitative aptitude",
        recommendedPath: "STEM MBA or MS in Business Analytics / Information Systems.",
      },
    ],
    applicationJourney: [
      {
        stepNumber: 1,
        title: "University Shortlisting & Profile Building",
        description: "Select 4-6 US universities matching your GPA, budget, location preferences, and STEM designation.",
        timeline: "Month 1",
      },
      {
        stepNumber: 2,
        title: "IELTS / PTE / GRE & Documentation",
        description: "Appear for language exams, finalize SOP, Letters of Recommendation (LORs), and resume.",
        timeline: "Months 2 - 3",
      },
      {
        stepNumber: 3,
        title: "Application Submission & I-20 Issuance",
        description: "Submit online university applications, provide financial affidavits, and receive Form I-20.",
        timeline: "Months 4 - 6",
      },
      {
        stepNumber: 4,
        title: "SEVIS Fee & DS-160 Filing",
        description: "Pay I-901 SEVIS fee ($350) and submit DS-160 online visa application form.",
        timeline: "Month 6",
      },
      {
        stepNumber: 5,
        title: "OFC Biometrics & Consular Mock Drills",
        description: "Book visa interview slots; undergo intensive 1-on-1 embassy mock interview coaching at Rohtak office.",
        timeline: "Month 7",
      },
      {
        stepNumber: 6,
        title: "F-1 Consular Interview & Visa Grant",
        description: "Appear for in-person consular interview, receive F-1 visa approval, and complete pre-departure setup.",
        timeline: "Pre-Departure",
      },
    ],
    documentsOverview: [
      {
        category: "Academic Records",
        items: [
          "Class 10th & 12th Marksheets and Passing Certificates",
          "Bachelor's Degree Transcripts (all semesters) & Degree Certificate",
          "Official IELTS Academic / PTE Academic / GRE Scorecards (if applicable)",
          "3 Academic / Professional Letters of Recommendation (LORs)",
        ],
      },
      {
        category: "Immigration & Institution Documents",
        items: [
          "Form I-20 Certificate of Eligibility from SEVP-approved US university",
          "DS-160 Visa Application Confirmation Barcode Page",
          "I-901 SEVIS Fee Payment Confirmation Receipt",
          "Valid Passport (minimum 6 months beyond intended stay)",
        ],
      },
      {
        category: "Financial Evidence",
        items: [
          "Official Bank Account Statement showing funds covering at least 1st year total cost as per I-20",
          "Approved Education Loan Sanction Letter from recognized bank",
          "Affidavit of Financial Support from sponsors + Sponsor ITRs (3 years)",
        ],
      },
    ],
    importantConsiderations: [
      {
        heading: "In-Person Consular Visa Interview",
        details: "The US F-1 visa decision hinges on a 2-3 minute in-person interview with a US consular officer assessing your academic purpose, funding, and non-immigrant intent.",
        highlight: "Exhaustive Mock Drills at Rohtak Lab",
      },
      {
        heading: "STEM OPT 36-Month Period",
        details: "To qualify for the 24-month OPT extension (total 36 months), verify that your degree program has an approved CIP code on the DHS STEM Designated Degree Program List.",
        highlight: "Program Code Verification",
      },
      {
        heading: "Form I-20 Financial Accuracy",
        details: "You must demonstrate liquid funds matching or exceeding the estimated annual total cost listed in Section 7 of your official Form I-20.",
        highlight: "Mandatory Financial Threshold",
      },
    ],
    costBreakdown: {
      tuitionRange: "$18,000 - $48,000 / year (Public vs Private Universities)",
      livingExpenses: "$12,000 - $20,000 / year (depending on state and campus living)",
      partTimeRights: "Up to 20 hours per week on-campus during academic terms",
      postStudyWork: "12 months standard OPT + 24 months STEM extension (36 months total)",
    },
    faqs: [
      {
        question: "What is STEM OPT and who is eligible?",
        answer:
          "STEM OPT allows international students with qualifying degrees in Science, Technology, Engineering, or Math to extend their initial 12-month Optional Practical Training by an additional 24 months, enabling 3 full years of US workplace experience.",
      },
      {
        question: "How important is the F-1 visa interview?",
        answer:
          "The visa interview is the decisive step for a US study permit. Consular officers evaluate your course rationale, university selection, financial sponsorship, and non-immigrant intent. Guruji Overseas conducts intensive 1-on-1 mock interview drills.",
      },
      {
        question: "Can I study in the USA without GRE?",
        answer:
          "Yes, hundreds of accredited US universities have waived the GRE requirement or made it completely optional for many master's programs in Computer Science, Data Analytics, and Management.",
      },
      {
        question: "What is Form I-20 and how do I receive it?",
        answer:
          "Form I-20 is the official government document issued by a SEVP-certified US university confirming your admission, program details, and estimated expenses. You need the I-20 to pay your SEVIS fee and schedule your visa appointment.",
      },
    ],
    popularInstitutions: [
      "Arizona State University, Phoenix",
      "Northeastern University, Boston",
      "University of Texas at Arlington",
      "University of Illinois Chicago",
      "George Mason University, Virginia",
      "San Jose State University, California",
      "State University of New York (SUNY Buffalo)",
      "University of North Texas, Denton",
      "University of South Florida, Tampa",
    ],
  },

  germany: {
    slug: "germany",
    name: "Germany",
    officialName: "Germany Higher Education & National Student Visa",
    flag: "🇩🇪",
    heroBadge: "Low / Nominal Tuition Public Universities",
    metaTitle: "Study in Germany | Public Universities & English-Taught Master's | Guruji Overseas",
    metaDescription:
      "Expert Germany study abroad counselling from Guruji Overseas Rohtak. Explore top TU9 public universities with nominal tuition, APS certificate, Blocked Account, and 18-month stayback.",
    h1: "Study in Germany: Public Universities, Low Tuition & Visa Guidance",
    tagline: "Engineering Excellence, Free/Nominal Tuition & Robust Industrial Core",
    overview:
      "Germany is Europe's economic and technological powerhouse, internationally celebrated for its world-class engineering, automotive innovation, and scientific research. Most public universities in Germany charge zero tuition or nominal administrative fees (approx. €200 - €350 / semester), making it one of the most cost-effective premium education destinations globally for Indian graduates.",
    image: "/images/global-university-campus.jpg",
    quickStats: [
      { label: "Major Intakes", value: "Winter (Oct) & Summer (Apr)" },
      { label: "Public Tuition", value: "€0 - €3,000 / yr (Nominal)" },
      { label: "Stayback Rights", value: "18 Months Jobseeker Visa" },
      { label: "Part-Time Work", value: "140 full / 280 half days / yr" },
    ],
    whyStudyHere: [
      {
        title: "Nominal / Zero Tuition at Public Universities",
        description:
          "Public universities across 15 of Germany's 16 federal states charge zero tuition fees for international students, requiring only a small semester contribution covering public transit.",
      },
      {
        title: "18-Month Post-Study Jobseeker Visa",
        description:
          "Graduates receive an 18-month residence permit to seek qualified employment in Germany, with direct pathways to the EU Blue Card.",
      },
      {
        title: "Global Leadership in Engineering & Automotive",
        description:
          "Home to engineering icons like BMW, Mercedes-Benz, Siemens, Bosch, and SAP, with deep university-industry research partnerships.",
      },
      {
        title: "Hundreds of English-Taught Master's Programs",
        description:
          "Extensive selection of international Master of Science (M.Sc.) programs taught 100% in English across engineering, IT, data science, and renewable energy.",
      },
    ],
    popularStudyAreas: [
      {
        field: "Mechanical, Automotive & Mechatronics Engineering",
        popularCourses: ["Automotive Engineering", "Robotics & Automation", "Computational Mechanics", "Renewable Energy Systems"],
        description: "Direct ties to Germany's world-leading manufacturing and automotive sectors.",
      },
      {
        field: "Computer Science, AI & Data Engineering",
        popularCourses: ["Informatics / Computer Science", "Data Science", "Artificial Intelligence", "Autonomous Systems"],
        description: "Huge demand across tech hubs in Berlin, Munich, Frankfurt, and Stuttgart.",
      },
      {
        field: "Electrical, Electronics & Embedded Systems",
        popularCourses: ["Electrical Engineering", "Embedded Systems", "Power Engineering", "Telecommunications"],
        description: "Hands-on laboratory research and industry thesis collaborations.",
      },
      {
        field: "Management, Economics & Industrial Engineering (Wi-Ing)",
        popularCourses: ["Industrial Engineering & Management", "International Management", "Supply Chain Management"],
        description: "Combining technical engineering rigor with business administration.",
      },
    ],
    whoMayConsider: [
      {
        category: "B.Tech / B.E. / BCA / B.Sc Graduates",
        criteria: "65%+ in 4-year Bachelor's degree with IELTS 6.5+ or PTE 65+ and APS Certificate",
        recommendedPath: "2-year Master of Science (M.Sc.) at public or state-recognized technical universities.",
      },
      {
        category: "Budget-Conscious High Academic Achievers",
        criteria: "Strong academic record seeking top-tier European education without massive tuition loans",
        recommendedPath: "Tuition-free English-taught Master's program at public German universities.",
      },
      {
        category: "12th Pass Students (Undergraduate)",
        criteria: "12th standard + 1 year Studienkolleg / 1 year Indian bachelor's + German language",
        recommendedPath: "Studienkolleg T-Course leading to Bachelor of Science (B.Sc.).",
      },
    ],
    applicationJourney: [
      {
        stepNumber: 1,
        title: "Academic Profiling & APS Certificate Application",
        description: "Submit academic transcripts to APS India (Academic Evaluation Centre) for mandatory document verification.",
        timeline: "Months 1 - 2",
      },
      {
        stepNumber: 2,
        title: "Language Test & Course Shortlisting",
        description: "Score IELTS 6.5+ or PTE 65+ and shortlist Uni-Assist / Direct university programs.",
        timeline: "Months 2 - 3",
      },
      {
        stepNumber: 3,
        title: "Uni-Assist / Direct Application Submission",
        description: "Submit certified applications with VPD (Vorprüfungsdokumentation) before intake deadlines (Jan 15 / July 15).",
        timeline: "Months 3 - 5",
      },
      {
        stepNumber: 4,
        title: "Admission Letter & Blocked Account Setup",
        description: "Receive university admission letter and open German Blocked Account (Sperrkonto) with €11,904.",
        timeline: "Months 5 - 6",
      },
      {
        stepNumber: 5,
        title: "German National Student Visa (Category D) Filing",
        description: "Book VFS German visa slot, submit APS certificate, blocked account confirmation, and statutory health insurance.",
        timeline: "Months 6 - 7",
      },
      {
        stepNumber: 6,
        title: "Visa Grant & Departure",
        description: "Collect national visa, arrange accommodation (WG/Studentenwerk), and attend pre-departure briefing.",
        timeline: "Pre-Departure",
      },
    ],
    documentsOverview: [
      {
        category: "Mandatory APS & Academics",
        items: [
          "Original APS Certificate (Akademische Prüfstelle India)",
          "10th, 12th, and Bachelor's Degree Transcripts and Degree Certificate",
          "Course curriculum / syllabus copy (ECTS credit alignment)",
          "IELTS Academic or PTE Academic Scorecard",
        ],
      },
      {
        category: "Admission & Financial Proof",
        items: [
          "Official Admission Letter (Zulassungsbescheid) from German university",
          "Blocked Account Confirmation (Sperrkonto) with €11,904 deposited through Coracle / Expatrio / Fintiba",
          "German Statutory Health Insurance (TK / Barmer / DAK) confirmation",
        ],
      },
      {
        category: "Statements & Identification",
        items: [
          "Curriculum Vitae (Europass format CV)",
          "Academic Motivation Letter / Statement of Purpose (SOP)",
          "Valid Passport and biometric passport photos",
        ],
      },
    ],
    importantConsiderations: [
      {
        heading: "Mandatory APS Certificate",
        details: "All Indian applicants must obtain an official APS verification certificate from the German Embassy New Delhi before applying for student visas.",
        highlight: "Prerequisite Document",
      },
      {
        heading: "Blocked Account (Sperrkonto) Requirement",
        details: "International students must deposit €11,904 (official annual living cost threshold) into an approved German blocked account prior to visa submission.",
        highlight: "Official Financial Requirement",
      },
      {
        heading: "Language & ECTS Credit Matching",
        details: "German public universities strictly match your previous Bachelor's coursework credits (ECTS) with their master's prerequisites.",
        highlight: "Course Matching Scrutiny",
      },
    ],
    costBreakdown: {
      tuitionRange: "€0 - €3,000 / year (Free at public universities; €200-€350/sem semester ticket)",
      livingExpenses: "€11,904 / year (€992 / month Blocked Account baseline)",
      partTimeRights: "140 full days or 280 half days per calendar year",
      postStudyWork: "18-month Jobseeker Residence Permit upon graduation",
    },
    faqs: [
      {
        question: "Is education really free in German public universities?",
        answer:
          "Yes. In 15 out of 16 German federal states, public universities do not charge tuition fees for undergraduate or consecutive master's degrees. Students pay only a nominal semester fee (€200-€350) which includes free public transportation.",
      },
      {
        question: "What is an APS Certificate and why is it needed?",
        answer:
          "The APS (Akademische Prüfstelle) certificate is a mandatory verification of Indian academic documents issued by the German Embassy. It confirms the authenticity and German equivalency of your degrees.",
      },
      {
        question: "Can I study in Germany in English without knowing German?",
        answer:
          "Yes, hundreds of master's programs are taught entirely in English. However, learning basic conversational German (A1/A2 level) is strongly recommended for daily living, part-time jobs, and networking.",
      },
      {
        question: "What is a German Blocked Account (Sperrkonto)?",
        answer:
          "A Blocked Account is a specialized bank account where you deposit €11,904 to prove you have sufficient living funds. After arriving in Germany, you withdraw €992 each month for your living expenses.",
      },
    ],
    popularInstitutions: [
      "Technical University of Munich (TUM)",
      "RWTH Aachen University",
      "Technical University of Berlin (TU Berlin)",
      "Karlsruhe Institute of Technology (KIT)",
      "University of Stuttgart",
      "TU Dresden",
      "FAU Erlangen-Nuremberg",
      "Deggendorf Institute of Technology",
      "Frankfurt University of Applied Sciences",
    ],
  },
};
