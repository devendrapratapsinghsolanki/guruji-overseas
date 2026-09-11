import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import {
  InquiryRecord,
  InquiryStatus,
  InquiryFilterQuery,
  InquiryListResponse,
  InquiryStatsSummary,
} from "@/types/inquiry";

// In-memory fallback buffer for when PostgreSQL is not yet connected in local environment
let inMemoryInquiries: InquiryRecord[] = [];

/**
 * Checks whether PostgreSQL Prisma Client is reachable
 */
async function isDatabaseReachable(): Promise<boolean> {
  if (!process.env.DATABASE_URL || process.env.DATABASE_URL.includes("postgresql://username:password")) {
    return false;
  }
  try {
    await prisma.$queryRaw`SELECT 1`;
    return true;
  } catch {
    return false;
  }
}

export class InquiryService {
  /**
   * Create and persist a new inquiry
   */
  static async createInquiry(data: {
    name: string;
    email: string;
    phone: string;
    services: string[];
    message?: string;
    consent: boolean;
    source?: string;
  }): Promise<InquiryRecord> {
    const dbAvailable = await isDatabaseReachable();

    if (dbAvailable) {
      const created = await prisma.inquiry.create({
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          services: data.services,
          message: data.message || null,
          consent: data.consent,
          status: "NEW",
          source: data.source || "Website Inquiry",
        },
      });

      return {
        id: created.id,
        name: created.name,
        email: created.email,
        phone: created.phone,
        services: created.services,
        message: created.message,
        consent: created.consent,
        status: created.status as InquiryStatus,
        source: created.source,
        notes: created.notes,
        assignedTo: created.assignedTo,
        createdAt: created.createdAt.toISOString(),
        updatedAt: created.updatedAt.toISOString(),
      };
    }

    // Fallback store
    const now = new Date().toISOString();
    const mockId = `inq_${Date.now().toString(36)}_${Math.random().toString(36).substring(2, 6)}`;
    const newInquiry: InquiryRecord = {
      id: mockId,
      name: data.name,
      email: data.email,
      phone: data.phone,
      services: data.services,
      message: data.message || null,
      consent: data.consent,
      status: "NEW",
      source: data.source || "Website Inquiry",
      notes: null,
      assignedTo: null,
      createdAt: now,
      updatedAt: now,
    };

    inMemoryInquiries.unshift(newInquiry);
    return newInquiry;
  }

  /**
   * List inquiries with filtering, search, and pagination
   */
  static async listInquiries(
    filters?: InquiryFilterQuery
  ): Promise<InquiryListResponse> {
    const page = Math.max(1, filters?.page || 1);
    const pageSize = Math.max(1, Math.min(100, filters?.pageSize || 20));
    const skip = (page - 1) * pageSize;

    const dbAvailable = await isDatabaseReachable();

    if (dbAvailable) {
      // Build Prisma where clause
      const where: Prisma.InquiryWhereInput = {};

      if (filters?.status && filters.status !== "ALL") {
        where.status = filters.status;
      }

      if (filters?.service && filters.service !== "ALL") {
        where.services = {
          has: filters.service,
        };
      }

      if (filters?.searchQuery && filters.searchQuery.trim().length > 0) {
        const query = filters.searchQuery.trim();
        where.OR = [
          { name: { contains: query, mode: "insensitive" } },
          { email: { contains: query, mode: "insensitive" } },
          { phone: { contains: query } },
        ];
      }

      if (filters?.dateRange && filters.dateRange !== "all") {
        const now = new Date();
        if (filters.dateRange === "today") {
          const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
          where.createdAt = { gte: startOfToday };
        } else if (filters.dateRange === "7days") {
          const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
          where.createdAt = { gte: sevenDaysAgo };
        } else if (filters.dateRange === "30days") {
          const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
          where.createdAt = { gte: thirtyDaysAgo };
        }
      }

      const [total, inquiries] = await Promise.all([
        prisma.inquiry.count({ where }),
        prisma.inquiry.findMany({
          where,
          orderBy: { createdAt: "desc" },
          skip,
          take: pageSize,
        }),
      ]);

      return {
        success: true,
        inquiries: inquiries.map((inq) => ({
          ...inq,
          status: inq.status as InquiryStatus,
          createdAt: inq.createdAt.toISOString(),
          updatedAt: inq.updatedAt.toISOString(),
        })),
        total,
        page,
        pageSize,
        totalPages: Math.ceil(total / pageSize) || 1,
      };
    }

    // In-memory fallback
    let filtered = [...inMemoryInquiries];

    if (filters?.status && filters.status !== "ALL") {
      filtered = filtered.filter((i) => i.status === filters.status);
    }

    if (filters?.service && filters.service !== "ALL") {
      filtered = filtered.filter((i) => i.services.includes(filters.service!));
    }

    if (filters?.searchQuery && filters.searchQuery.trim().length > 0) {
      const q = filters.searchQuery.toLowerCase().trim();
      filtered = filtered.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.email.toLowerCase().includes(q) ||
          i.phone.includes(q)
      );
    }

    if (filters?.dateRange && filters.dateRange !== "all") {
      const now = new Date().getTime();
      if (filters.dateRange === "today") {
        const today = new Date().setHours(0, 0, 0, 0);
        filtered = filtered.filter((i) => new Date(i.createdAt).getTime() >= today);
      } else if (filters.dateRange === "7days") {
        const limit = now - 7 * 24 * 60 * 60 * 1000;
        filtered = filtered.filter((i) => new Date(i.createdAt).getTime() >= limit);
      } else if (filters.dateRange === "30days") {
        const limit = now - 30 * 24 * 60 * 60 * 1000;
        filtered = filtered.filter((i) => new Date(i.createdAt).getTime() >= limit);
      }
    }

    const total = filtered.length;
    const paginated = filtered.slice(skip, skip + pageSize);

    return {
      success: true,
      inquiries: paginated,
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize) || 1,
    };
  }

  /**
   * Get single inquiry by ID
   */
  static async getInquiryById(id: string): Promise<InquiryRecord | null> {
    const dbAvailable = await isDatabaseReachable();

    if (dbAvailable) {
      const inq = await prisma.inquiry.findUnique({
        where: { id },
      });
      if (!inq) return null;
      return {
        ...inq,
        status: inq.status as InquiryStatus,
        createdAt: inq.createdAt.toISOString(),
        updatedAt: inq.updatedAt.toISOString(),
      };
    }

    const found = inMemoryInquiries.find((i) => i.id === id);
    return found || null;
  }

  /**
   * Update status of an inquiry
   */
  static async updateStatus(id: string, status: InquiryStatus): Promise<InquiryRecord> {
    const dbAvailable = await isDatabaseReachable();

    if (dbAvailable) {
      const updated = await prisma.inquiry.update({
        where: { id },
        data: { status },
      });
      return {
        ...updated,
        status: updated.status as InquiryStatus,
        createdAt: updated.createdAt.toISOString(),
        updatedAt: updated.updatedAt.toISOString(),
      };
    }

    const index = inMemoryInquiries.findIndex((i) => i.id === id);
    if (index === -1) {
      throw new Error(`Inquiry with ID "${id}" not found.`);
    }
    inMemoryInquiries[index].status = status;
    inMemoryInquiries[index].updatedAt = new Date().toISOString();
    return inMemoryInquiries[index];
  }

  /**
   * Update internal staff notes on an inquiry
   */
  static async updateNotes(id: string, notes: string): Promise<InquiryRecord> {
    const dbAvailable = await isDatabaseReachable();

    if (dbAvailable) {
      const updated = await prisma.inquiry.update({
        where: { id },
        data: { notes },
      });
      return {
        ...updated,
        status: updated.status as InquiryStatus,
        createdAt: updated.createdAt.toISOString(),
        updatedAt: updated.updatedAt.toISOString(),
      };
    }

    const index = inMemoryInquiries.findIndex((i) => i.id === id);
    if (index === -1) {
      throw new Error(`Inquiry with ID "${id}" not found.`);
    }
    inMemoryInquiries[index].notes = notes;
    inMemoryInquiries[index].updatedAt = new Date().toISOString();
    return inMemoryInquiries[index];
  }

  /**
   * Delete an inquiry
   */
  static async deleteInquiry(id: string): Promise<boolean> {
    const dbAvailable = await isDatabaseReachable();

    if (dbAvailable) {
      await prisma.inquiry.delete({
        where: { id },
      });
      return true;
    }

    const before = inMemoryInquiries.length;
    inMemoryInquiries = inMemoryInquiries.filter((i) => i.id !== id);
    return inMemoryInquiries.length < before;
  }

  /**
   * Calculate database-backed dashboard statistics
   */
  static async getStats(): Promise<InquiryStatsSummary> {
    const dbAvailable = await isDatabaseReachable();

    if (dbAvailable) {
      const now = new Date();
      const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

      const [
        total,
        newCount,
        contactedCount,
        counsellingCount,
        visaProcessingCount,
        closedCount,
        last7DaysCount,
        last30DaysCount,
      ] = await Promise.all([
        prisma.inquiry.count(),
        prisma.inquiry.count({ where: { status: "NEW" } }),
        prisma.inquiry.count({ where: { status: "CONTACTED" } }),
        prisma.inquiry.count({ where: { status: "COUNSELLING" } }),
        prisma.inquiry.count({ where: { status: "VISA_PROCESSING" } }),
        prisma.inquiry.count({ where: { status: "CLOSED" } }),
        prisma.inquiry.count({ where: { createdAt: { gte: sevenDaysAgo } } }),
        prisma.inquiry.count({ where: { createdAt: { gte: thirtyDaysAgo } } }),
      ]);

      return {
        total,
        newCount,
        contactedCount,
        counsellingCount,
        visaProcessingCount,
        closedCount,
        last7DaysCount,
        last30DaysCount,
      };
    }

    const now = new Date().getTime();
    const sevenDaysAgo = now - 7 * 24 * 60 * 60 * 1000;
    const thirtyDaysAgo = now - 30 * 24 * 60 * 60 * 1000;

    return {
      total: inMemoryInquiries.length,
      newCount: inMemoryInquiries.filter((i) => i.status === "NEW").length,
      contactedCount: inMemoryInquiries.filter((i) => i.status === "CONTACTED").length,
      counsellingCount: inMemoryInquiries.filter((i) => i.status === "COUNSELLING").length,
      visaProcessingCount: inMemoryInquiries.filter((i) => i.status === "VISA_PROCESSING").length,
      closedCount: inMemoryInquiries.filter((i) => i.status === "CLOSED").length,
      last7DaysCount: inMemoryInquiries.filter((i) => new Date(i.createdAt).getTime() >= sevenDaysAgo).length,
      last30DaysCount: inMemoryInquiries.filter((i) => new Date(i.createdAt).getTime() >= thirtyDaysAgo).length,
    };
  }

  /**
   * Generate CSV format for export
   */
  static async exportCsv(filters?: InquiryFilterQuery): Promise<string> {
    const { inquiries } = await this.listInquiries({ ...filters, page: 1, pageSize: 1000 });

    const headers = [
      "ID",
      "Name",
      "Email",
      "Phone",
      "Services",
      "Status",
      "Message",
      "Notes",
      "Created At",
    ];

    const rows = inquiries.map((inq) => [
      `"${inq.id}"`,
      `"${inq.name.replace(/"/g, '""')}"`,
      `"${inq.email.replace(/"/g, '""')}"`,
      `"${inq.phone}"`,
      `"${inq.services.join(", ").replace(/"/g, '""')}"`,
      `"${inq.status}"`,
      `"${(inq.message || "").replace(/"/g, '""')}"`,
      `"${(inq.notes || "").replace(/"/g, '""')}"`,
      `"${new Date(inq.createdAt).toISOString()}"`,
    ]);

    return [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
  }
}
