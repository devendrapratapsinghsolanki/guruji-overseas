"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { InquiryDetails } from "@/components/admin/InquiryDetails";
import { InquiryRecord } from "@/types/inquiry";
import { Loader2, AlertCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function InquiryDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const [inquiry, setInquiry] = useState<InquiryRecord | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadInquiry() {
      if (!id) return;
      setIsLoading(true);
      setError("");

      try {
        const res = await fetch(`/api/admin/inquiries/${id}`);
        if (res.ok) {
          const data = await res.json();
          if (data.inquiry) {
            setInquiry(data.inquiry);
          } else {
            setError(`Inquiry "${id}" not found.`);
          }
        } else {
          setError(`Inquiry with ID "${id}" could not be found.`);
        }
      } catch {
        setError("Network error while loading inquiry.");
      } finally {
        setIsLoading(false);
      }
    }

    loadInquiry();
  }, [id]);

  if (isLoading) {
    return (
      <div className="py-24 text-center space-y-3">
        <Loader2 className="w-8 h-8 animate-spin text-royal-600 mx-auto" />
        <p className="text-xs text-slate-500">Loading inquiry details...</p>
      </div>
    );
  }

  if (error || !inquiry) {
    return (
      <div className="max-w-md mx-auto py-24 text-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto">
          <AlertCircle className="w-6 h-6" />
        </div>
        <h2 className="text-lg font-bold text-navy-950">Inquiry Not Found</h2>
        <p className="text-xs text-slate-500">{error || "The requested inquiry does not exist."}</p>
        <Link
          href="/admin/inquiries"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-navy-950 text-white text-xs font-bold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Inquiries</span>
        </Link>
      </div>
    );
  }

  return <InquiryDetails inquiry={inquiry} />;
}
