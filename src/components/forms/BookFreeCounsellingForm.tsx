"use client";

import React from "react";
import { InquiryForm } from "@/components/forms/InquiryForm";

interface BookFreeCounsellingFormProps {
  defaultCountry?: string;
  defaultCourse?: string;
  sourceContext?: string;
  onSuccess?: () => void;
  className?: string;
  variant?: "card" | "plain";
}

export function BookFreeCounsellingForm({
  sourceContext = "Free Counselling Booking",
  onSuccess,
  className = "",
  variant = "card",
}: BookFreeCounsellingFormProps) {
  if (variant === "plain") {
    return (
      <div className={className}>
        <InquiryForm sourceContext={sourceContext} onSuccess={onSuccess} />
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card ${className}`}>
      <InquiryForm sourceContext={sourceContext} onSuccess={onSuccess} />
    </div>
  );
}
