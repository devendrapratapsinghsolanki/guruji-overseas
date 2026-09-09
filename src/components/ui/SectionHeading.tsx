import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

export interface SectionHeadingProps {
  kicker?: string;
  kickerVariant?: "navy" | "royal" | "amber" | "neutral";
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  kicker,
  kickerVariant = "navy",
  title,
  subtitle,
  align = "center",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col max-w-3xl mb-12",
        isCenter ? "text-center items-center mx-auto" : "text-left items-start",
        className
      )}
    >
      {kicker && (
        <div className="mb-3">
          <Badge
            variant={theme === "dark" ? "royal" : kickerVariant}
            size="sm"
          >
            {kicker}
          </Badge>
        </div>
      )}

      <h2
        className={cn(
          "text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-3 font-sans",
          theme === "light" ? "text-navy-900" : "text-white"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed font-normal",
            theme === "light" ? "text-charcoal-600" : "text-slate-300"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
