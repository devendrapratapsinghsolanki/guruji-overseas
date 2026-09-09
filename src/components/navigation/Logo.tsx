import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  theme?: "light" | "dark";
  isScrolled?: boolean;
}

/**
 * Guruji Overseas Brand Logo Component
 * Renders the official corporate logo with expanded width and crisp proportions.
 */
export function Logo({ className, theme = "light", isScrolled = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center cursor-pointer select-none group shrink-0 transition-opacity hover:opacity-95",
        theme === "dark" && "bg-white/95 rounded-lg px-3 py-1.5 shadow-sm",
        className
      )}
      aria-label="Guruji Overseas Home"
    >
      <div
        className={cn(
          "relative flex items-center justify-start cursor-pointer transition-all duration-200",
          isScrolled
            ? "w-[200px] sm:w-[230px] md:w-[250px]"
            : "w-[220px] sm:w-[260px] md:w-[280px]"
        )}
      >
        <Image
          src="/guruji-overseas-logo.png"
          alt="Guruji Overseas"
          width={280}
          height={112}
          className="w-full h-auto max-h-[82px] object-contain object-left cursor-pointer"
          sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, 280px"
          priority
        />
      </div>
    </Link>
  );
}
