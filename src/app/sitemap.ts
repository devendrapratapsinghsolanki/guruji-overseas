import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    // Core Homepage & Discovery
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/study-abroad", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/universities", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },

    // Primary Country Hubs
    { path: "/study-abroad/canada", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/study-abroad/uk", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/study-abroad/australia", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/study-abroad/new-zealand", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/study-abroad/usa", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/study-abroad/germany", priority: 0.85, changeFrequency: "monthly" as const },

    // Test Preparation Hubs
    { path: "/test-preparation", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/test-preparation/ielts", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/test-preparation/pte", priority: 0.85, changeFrequency: "monthly" as const },

    // Visa Guidance Hubs
    { path: "/visa-services", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/visa-services/student-visa", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/visa-services/visitor-visa", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/visa-services/dependent-visa", priority: 0.75, changeFrequency: "monthly" as const },

    // Institutional & Trust Pages
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/success-stories", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/blog", priority: 0.75, changeFrequency: "weekly" as const },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
