import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  theme?: "light" | "dark";
  isScrolled?: boolean;
  variant?: "header" | "footer";
}

/**
 * Guruji Overseas Brand Logo Component
 * Standalone clean corporate logo with compact header height and custom footer sizing.
 */
export function Logo({
  className,
  theme = "light",
  isScrolled = false,
  variant = "header",
}: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center cursor-pointer select-none group shrink-0 transition-opacity hover:opacity-95",
        className
      )}
      aria-label="Guruji Overseas Home"
    >
      {variant === "footer" ? (
        <div className="relative w-[190px] sm:w-[220px] flex items-center justify-start cursor-pointer">
          <Image
            src="/guruji-overseas-logo-transparent.png"
            alt="Guruji Overseas"
            width={250}
            height={100}
            className="w-full h-auto max-h-[58px] object-contain object-left cursor-pointer [filter:drop-shadow(0_1px_1px_rgba(255,255,255,0.65))]"
            priority
          />
        </div>
      ) : (
        <div
          className={cn(
            "relative flex items-center justify-start cursor-pointer transition-all duration-200",
            isScrolled
              ? "w-[155px] sm:w-[180px] md:w-[195px]"
              : "w-[175px] sm:w-[205px] md:w-[220px]"
          )}
        >
          <Image
            src="/guruji-overseas-logo-transparent.png"
            alt="Guruji Overseas"
            width={250}
            height={100}
            className={cn(
              "w-full h-auto object-contain object-left cursor-pointer transition-all duration-200",
              isScrolled ? "max-h-[38px] sm:max-h-[42px]" : "max-h-[44px] sm:max-h-[48px]"
            )}
            sizes="(max-width: 640px) 175px, (max-width: 768px) 205px, 220px"
            priority
          />
        </div>
      )}
    </Link>
  );
}
