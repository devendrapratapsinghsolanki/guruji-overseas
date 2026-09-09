import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  theme?: "light" | "dark";
  showTagline?: boolean;
}

/**
 * Guruji Overseas Brand Logo Component
 * Uses the official company logo uploaded by the client.
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
      className={cn("inline-flex items-center gap-2.5 select-none group shrink-0", className)}
    >
      {/* Official Company Logo Graphic */}
      <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0 flex items-center justify-center">
        <Image
          src="/images/logo.png"
          alt="Guruji Overseas Official Logo"
          width={44}
          height={44}
          className="object-contain w-auto h-auto max-w-full max-h-full"
          priority
        />
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
              "text-[10px] sm:text-xs tracking-wider uppercase font-semibold leading-none pl-2 border-l border-slate-300 dark:border-slate-700 hidden md:inline-block whitespace-nowrap",
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
