"use client";

import React from "react";
import { InquiryForm } from "@/components/forms/InquiryForm";

interface ProfileAssessmentFormProps {
  initialCountry?: string;
  onSuccess?: () => void;
  className?: string;
}

export function ProfileAssessmentForm({
  onSuccess,
  className = "",
}: ProfileAssessmentFormProps) {
  return (
    <div className={`bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card ${className}`}>
      <InquiryForm sourceContext="Profile Assessment" onSuccess={onSuccess} />
    </div>
  );
}
