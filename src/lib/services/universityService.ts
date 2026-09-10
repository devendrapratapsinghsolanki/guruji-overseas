import { University, UniversityFilterState } from "@/types/university";
import { UNIVERSITIES_DATABASE } from "@/data/universitiesData";

/**
 * University Data Service
 *
 * Designed to separate data access logic from UI presentation.
 * Supports synchronous memory querying now and can be upgraded to async REST / GraphQL / Prisma DB fetching.
 */

export async function fetchAllUniversities(): Promise<University[]> {
  // Simulating async data resolution for DB compatibility
  return Promise.resolve(UNIVERSITIES_DATABASE);
}

export async function fetchUniversityById(
  id: string
): Promise<University | undefined> {
  const university = UNIVERSITIES_DATABASE.find((u) => u.id === id);
  return Promise.resolve(university);
}

export async function fetchFeaturedUniversities(): Promise<University[]> {
  const featured = UNIVERSITIES_DATABASE.filter((u) => u.featured);
  return Promise.resolve(featured);
}

export function filterUniversitiesInMemory(
  universities: University[],
  filters: UniversityFilterState
): University[] {
  return universities.filter((uni) => {
    // 1. Country Filter
    if (filters.country && filters.country !== "All") {
      if (
        uni.country.toLowerCase() !== filters.country.toLowerCase() &&
        uni.countrySlug.toLowerCase() !== filters.country.toLowerCase()
      ) {
        return false;
      }
    }

    // 2. Study Level Filter
    if (filters.studyLevel && filters.studyLevel !== "All") {
      const hasLevel = uni.studyLevels.some((lvl) =>
        lvl.toLowerCase().includes(filters.studyLevel.toLowerCase())
      );
      if (!hasLevel) return false;
    }

    // 3. Budget Tier Filter
    if (filters.budgetTier && filters.budgetTier !== "All") {
      if (uni.tuitionFee.budgetTier !== filters.budgetTier) {
        return false;
      }
    }

    // 4. Intake Filter
    if (filters.intake && filters.intake !== "All") {
      const hasIntake = uni.intakes.some((intk) =>
        intk.toLowerCase().includes(filters.intake.toLowerCase())
      );
      if (!hasIntake) return false;
    }

    // 5. Keyword Search Query (Name, City, Courses, State)
    if (filters.searchQuery && filters.searchQuery.trim().length > 0) {
      const q = filters.searchQuery.toLowerCase().trim();
      const matchName = uni.name.toLowerCase().includes(q);
      const matchCity = uni.city.toLowerCase().includes(q);
      const matchCountry = uni.country.toLowerCase().includes(q);
      const matchCourse = uni.popularCourses.some((c) =>
        c.toLowerCase().includes(q)
      );
      const matchType = uni.institutionType.toLowerCase().includes(q);

      if (!matchName && !matchCity && !matchCountry && !matchCourse && !matchType) {
        return false;
      }
    }

    return true;
  });
}
