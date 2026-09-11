export const COMPANY_INFO = {
  brandName: "GURUJI OVERSEAS",
  legalName: "GURUJI OVERSEAS IMMIGRATION PRIVATE LIMITED",
  tagline: "Overseas Education & Visa Assistance Consultancy",
  establishedYear: 2022,

  contact: {
    primaryPhone: "+91 7056 544 009",
    secondaryPhone: "+91 79884 29392",
    displayPhone: "+91 7056 544 009 / +91 79884 29392",
    whatsappNumber: "917056544009",
    secondaryWhatsappNumber: "917988429392",
    email: "gurujioverseasrtk@gmail.com",
    officeHours: "Monday - Saturday: 9:30 AM - 6:30 PM",
  },

  location: {
    city: "Rohtak",
    state: "Haryana",
    country: "India",
    addressLine1: "Shop No. 125, First Floor, Sheetal Lifestyle Mall",
    addressLine2: "Opposite D-Park, Model Town / Dariyao Nagar Area",
    cityStateZip: "Rohtak, Haryana 124001",
    landmark: "Opposite D-Park",
    note: "Official physical office located in Rohtak, Haryana.",
  },

  reputation: {
    source: "Justdial Verified Listing",
    rating: "5.0",
    maxRating: "5.0",
    reviewCount: "300+",
    listingStatus: "Claimed & Verified Business",
  },

  // Core Services strictly as defined by the company (Work Visa removed)
  coreServices: [
    {
      id: "ielts-prep",
      title: "IELTS Preparation",
      shortDesc: "Academic & General Training coaching with structured curriculum, module tests, and individual doubt resolution.",
      category: "Test Preparation",
    },
    {
      id: "pte-prep",
      title: "PTE Preparation",
      shortDesc: "Computer-based Pearson Test of English practice with scored mock tests and targeted score-building strategies.",
      category: "Test Preparation",
    },
    {
      id: "spoken-english",
      title: "English Language / Spoken English",
      shortDesc: "Fluency development, grammar refinement, and everyday confidence building for academic and visa interviews.",
      category: "Test Preparation",
    },
    {
      id: "study-abroad-counselling",
      title: "Study Abroad Counselling",
      shortDesc: "One-on-one personalized career counseling based on your academic background, career goals, and financial planning.",
      category: "Admissions",
    },
    {
      id: "university-selection",
      title: "University & Institution Selection",
      shortDesc: "Impartial guidance on choosing recognized universities, colleges, and courses that align with your profile.",
      category: "Admissions",
    },
    {
      id: "student-visa",
      title: "Student Visa Assistance",
      shortDesc: "Complete visa application filing, document scrutiny, checklist verification, and interview readiness.",
      category: "Visa Services",
    },
    {
      id: "visitor-visa",
      title: "Visitor / Travel Visa Guidance",
      shortDesc: "Tourist and visitor visa application processing for family visits, convocation ceremonies, and travel.",
      category: "Visa Services",
    },
    {
      id: "dependent-visa",
      title: "Dependent / Spouse Visa Guidance",
      shortDesc: "Assistance for spouses and dependent family members wishing to join students overseas.",
      category: "Visa Services",
    },
    {
      id: "documentation-assistance",
      title: "Application & Documentation Assistance",
      shortDesc: "Thorough review of academic transcripts, financial documents, affidavits, and application paperwork.",
      category: "Admissions",
    },
  ],

  // 6 Primary Study Destinations
  primaryDestinations: [
    {
      id: "canada",
      name: "Canada",
      flag: "🇨🇦",
      highlight: "Popular for diplomas, degrees, and post-graduation work permit (PGWP) opportunities.",
      popularIntakes: ["January", "May", "September"],
    },
    {
      id: "uk",
      name: "United Kingdom",
      flag: "🇬🇧",
      highlight: "Renowned 1-year Master's programs and Graduate Route post-study work opportunities.",
      popularIntakes: ["January / February", "September / October"],
    },
    {
      id: "australia",
      name: "Australia",
      flag: "🇦🇺",
      highlight: "World-class education framework with post-study work rights across major and regional cities.",
      popularIntakes: ["February", "July", "November"],
    },
    {
      id: "new-zealand",
      name: "New Zealand",
      flag: "🇳🇿",
      highlight: "Safe study environment with practical learning, high quality of life, and post-study work rights.",
      popularIntakes: ["February", "July"],
    },
    {
      id: "usa",
      name: "United States",
      flag: "🇺🇸",
      highlight: "Diverse university system, extensive STEM OPT opportunities, and research facilities.",
      popularIntakes: ["Fall (August/September)", "Spring (January)"],
    },
    {
      id: "germany",
      name: "Germany",
      flag: "🇩🇪",
      highlight: "High-ranking engineering and technical education with low or nominal tuition fees.",
      popularIntakes: ["Winter (September/October)", "Summer (March/April)"],
    },
    {
      id: "europe",
      name: "Europe",
      flag: "🇪🇺",
      highlight: "Affordable higher education across Schengen countries, Ireland, and Italy with stay-back options.",
      popularIntakes: ["Fall (September/October)", "Spring (February/March)"],
    },
  ],
} as const;
