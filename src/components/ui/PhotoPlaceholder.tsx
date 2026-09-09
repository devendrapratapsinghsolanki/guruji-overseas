import React from "react";
import Image from "next/image";
import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";

interface PhotoPlaceholderProps {
  src?: string;
  alt: string;
  label?: string;
  category?: "classroom" | "office" | "students" | "team" | "signage" | "counseling";
  aspectRatio?: "16/9" | "4/3" | "3/2" | "1/1" | "21/9";
  className?: string;
  priority?: boolean;
}

const categoryLabels: Record<string, string> = {
  classroom: "Classroom & Study Environment",
  office: "Office Interior & Reception",
  students: "Student Group & Activity",
  team: "Counseling Team & Advisors",
  signage: "Office Exterior Signage (Sheetal Lifestyle Mall)",
  counseling: "One-on-One Counseling Desk",
};

/**
 * PhotoPlaceholder
 * Designed specifically for Guruji Overseas to prioritize authentic company photography.
 * - When `src` is present, it renders an optimized Next.js Image.
 * - When `src` is pending, it displays a clean, architectural placeholder with the exact intended subject label.
 * - Zero AI-generated fake people or fabricated stock faces.
 */
export function PhotoPlaceholder({
  src,
  alt,
  label,
  category = "office",
  aspectRatio = "16/9",
  className,
  priority = false,
}: PhotoPlaceholderProps) {
  const aspectClass = {
    "16/9": "aspect-[16/9]",
    "4/3": "aspect-[4/3]",
    "3/2": "aspect-[3/2]",
    "1/1": "aspect-square",
    "21/9": "aspect-[21/9]",
  }[aspectRatio];

  if (src) {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-lg bg-slate-100 border border-slate-200",
          aspectClass,
          className
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    );
  }

  const displayLabel = label || categoryLabels[category] || "Real Company Photograph";

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center p-6 text-center rounded-lg",
        "bg-surface-gray border border-dashed border-slate-300 text-charcoal-600 transition-colors",
        aspectClass,
        className
      )}
      aria-label={alt}
    >
      <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-navy-800 mb-3 shadow-subtle">
        <Camera className="w-5 h-5 text-slate-500" />
      </div>
      <p className="text-xs font-semibold text-charcoal-700 max-w-[240px]">
        {displayLabel}
      </p>
      <span className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">
        Real Company Photography Area
      </span>
    </div>
  );
}
