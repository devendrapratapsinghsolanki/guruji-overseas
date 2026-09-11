"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { InquiryFilters } from "@/components/admin/InquiryFilters";
import { InquiryTable } from "@/components/admin/InquiryTable";
import { InquiryRecord, InquiryStatus } from "@/types/inquiry";

export default function AdminInquiriesPage() {
  const router = useRouter();
  const [inquiries, setInquiries] = useState<InquiryRecord[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(20);
  const [isLoading, setIsLoading] = useState(true);
  const [isExporting, setIsExporting] = useState(false);

  // Filters State
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<InquiryStatus | "ALL">("ALL");
  const [serviceFilter, setServiceFilter] = useState<string | "ALL">("ALL");
  const [dateRange, setDateRange] = useState<"all" | "today" | "7days" | "30days">("all");

  const fetchInquiries = useCallback(async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams();
      params.set("page", page.toString());
      params.set("pageSize", pageSize.toString());

      if (statusFilter !== "ALL") params.set("status", statusFilter);
      if (serviceFilter !== "ALL") params.set("service", serviceFilter);
      if (dateRange !== "all") params.set("dateRange", dateRange);
      if (searchQuery.trim()) params.set("search", searchQuery.trim());

      const res = await fetch(`/api/admin/inquiries?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        setInquiries(data.inquiries || []);
        setTotalCount(data.total || 0);
        setTotalPages(data.totalPages || 1);
      }
    } catch (err) {
      console.error("Failed to fetch inquiries:", err);
    } finally {
      setIsLoading(false);
    }
  }, [page, pageSize, statusFilter, serviceFilter, dateRange, searchQuery]);

  useEffect(() => {
    const handler = setTimeout(() => {
      fetchInquiries();
    }, 250);

    return () => clearTimeout(handler);
  }, [fetchInquiries]);

  const handleExportCsv = async () => {
    setIsExporting(true);
    try {
      const params = new URLSearchParams();
      if (statusFilter !== "ALL") params.set("status", statusFilter);
      if (serviceFilter !== "ALL") params.set("service", serviceFilter);
      if (dateRange !== "all") params.set("dateRange", dateRange);
      if (searchQuery.trim()) params.set("search", searchQuery.trim());

      const res = await fetch(`/api/admin/inquiries/export?${params.toString()}`);
      if (res.ok) {
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `guruji-inquiries-${new Date().toISOString().split("T")[0]}.csv`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      } else {
        alert("Failed to export inquiries CSV.");
      }
    } catch {
      alert("Error occurred while generating CSV.");
    } finally {
      setIsExporting(false);
    }
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setStatusFilter("ALL");
    setServiceFilter("ALL");
    setDateRange("all");
    setPage(1);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-navy-950">Website Inquiries (CRM)</h1>
        <p className="text-xs text-slate-500">
          Manage, filter, search, and update incoming prospective student enquiries.
        </p>
      </div>

      {/* Filters Toolbar */}
      <InquiryFilters
        searchQuery={searchQuery}
        onSearchChange={(val) => {
          setSearchQuery(val);
          setPage(1);
        }}
        statusFilter={statusFilter}
        onStatusChange={(val) => {
          setStatusFilter(val);
          setPage(1);
        }}
        serviceFilter={serviceFilter}
        onServiceChange={(val) => {
          setServiceFilter(val);
          setPage(1);
        }}
        dateRange={dateRange}
        onDateRangeChange={(val) => {
          setDateRange(val);
          setPage(1);
        }}
        onExportCsv={handleExportCsv}
        isExporting={isExporting}
        onReset={handleResetFilters}
      />

      {/* Inquiry Data Table */}
      <InquiryTable
        inquiries={inquiries}
        isLoading={isLoading}
        page={page}
        totalPages={totalPages}
        totalCount={totalCount}
        pageSize={pageSize}
        onPageChange={(p) => setPage(p)}
        onSelectInquiry={(inq) => router.push(`/admin/inquiries/${inq.id}`)}
      />
    </div>
  );
}
