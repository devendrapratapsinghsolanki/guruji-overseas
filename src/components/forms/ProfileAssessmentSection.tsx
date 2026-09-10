import React from "react";
import { Container, Badge } from "@/components/ui";
import { ProfileAssessmentForm } from "@/components/forms/ProfileAssessmentForm";

export function ProfileAssessmentSection() {
  return (
    <section id="inquiry" className="py-20 lg:py-28 bg-white border-b border-border-subtle">
      <Container size="narrow">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Badge variant="amber" size="sm" className="mb-3">
            Free Evaluation
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight leading-tight mb-4">
            Not Sure Where Your Journey Should Begin?
          </h2>
          <p className="text-base text-charcoal-600 leading-relaxed">
            Share your academic background, test status, and destination preference to receive a structured assessment from our Rohtak advisory team.
          </p>
        </div>

        <ProfileAssessmentForm />
      </Container>
    </section>
  );
}
