import React from "react";
import { Container, Badge } from "@/components/ui";
import { InquiryForm } from "@/components/forms/InquiryForm";

export function ProfileAssessmentSection() {
  return (
    <section id="inquiry" className="py-20 lg:py-24 bg-white border-b border-border-subtle">
      <Container size="narrow">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Badge variant="amber" size="sm" className="mb-3">
            Free Counselling &amp; Evaluation
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight leading-tight mb-4">
            Book Free Counselling &amp; Visa Assessment
          </h2>
          <p className="text-base text-charcoal-600 leading-relaxed">
            Fill in your contact details and select your areas of interest to receive expert advisory from our Rohtak team.
          </p>
        </div>

        <div className="bg-slate-50/70 p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-subtle max-w-2xl mx-auto">
          <InquiryForm sourceContext="Homepage Profile Assessment" />
        </div>
      </Container>
    </section>
  );
}
