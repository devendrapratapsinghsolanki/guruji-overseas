import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  theme?: "light" | "dark";
  showTagline?: boolean;
}

/**
 * Guruji Overseas Brand Logo Component
 * Faithfully preserves the existing company logo identity:
 * - Prominent Letter 'G'
 * - Stylized ascending airplane visual
 * - Multicolor circular/arc graphic element (blue, red/coral, yellow/amber, green)
 * - "Guruji Overseas Pvt. Ltd." typography
 */
export function Logo({
  className,
  theme = "light",
  showTagline = true,
}: LogoProps) {
  const isDark = theme === "dark";

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-3 select-none group", className)}
    >
      {/* Existing Logo Mark: Graphic circle with multicolor arcs, Letter G and ascending airplane */}
      <div className="relative w-11 h-11 shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Multicolor Circular Graphic Element */}
          {/* Arc 1: Royal Blue */}
          <path
            d="M 50 8 A 42 42 0 0 1 92 50"
            stroke="#1D4ED8"
            strokeWidth="6"
            strokeLinecap="round"
          />
          {/* Arc 2: Amber / Warm Gold */}
          <path
            d="M 92 50 A 42 42 0 0 1 50 92"
            stroke="#F59E0B"
            strokeWidth="6"
            strokeLinecap="round"
          />
          {/* Arc 3: Emerald Green */}
          <path
            d="M 50 92 A 42 42 0 0 1 8 50"
            stroke="#10B981"
            strokeWidth="6"
            strokeLinecap="round"
          />
          {/* Arc 4: Coral / Red */}
          <path
            d="M 8 50 A 42 42 0 0 1 50 8"
            stroke="#EF4444"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Letter G - Bold Navy */}
          <path
            d="M 64 36 C 60 28 42 27 34 35 C 25 44 26 60 35 67 C 45 74 61 71 63 60 L 48 60"
            stroke={isDark ? "#FFFFFF" : "#0B1B3D"}
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Ascending Airplane Symbol */}
          <path
            d="M 54 22 L 68 28 L 62 33 L 73 37 L 71 39 L 60 37 L 54 44 L 52 43 L 55 35 L 47 33 Z"
            fill="#D97706"
          />
        </svg>
      </div>

      {/* Brand Typography - Single Line */}
      <div className="flex items-center gap-2 whitespace-nowrap">
        <div className="flex items-baseline gap-1">
          <span
            className={cn(
              "font-extrabold text-lg sm:text-xl tracking-tight leading-none",
              isDark ? "text-white" : "text-navy-900"
            )}
          >
            GURUJI
          </span>
          <span className="font-extrabold text-lg sm:text-xl tracking-tight leading-none text-royal-600">
            OVERSEAS
          </span>
        </div>
        {showTagline && (
          <span
            className={cn(
              "text-[10px] sm:text-xs tracking-wider uppercase font-semibold leading-none pl-2 border-l border-slate-300 dark:border-slate-700 hidden sm:inline-block whitespace-nowrap",
              isDark ? "text-slate-400" : "text-charcoal-600"
            )}
          >
            Immigration Pvt. Ltd.
          </span>
        )}
      </div>
    </Link>
  );
}
