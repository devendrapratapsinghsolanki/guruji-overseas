import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  theme?: "light" | "dark";
}

/**
 * Guruji Overseas Brand Logo Component
 * Renders ONLY the official logo image without duplicate text.
 * Fits within ~250px by 75px.
 */
export function Logo({ className, theme = "light" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center select-none group shrink-0", className)}
    >
      <div className="relative w-[180px] sm:w-[220px] md:w-[240px] h-[50px] sm:h-[60px] flex items-center justify-start">
        <Image
          src="/images/guruji-overseas-logo.png"
          alt="Guruji Overseas Official Logo"
          fill
          className="object-contain object-left"
          sizes="(max-width: 768px) 180px, 240px"
          priority
        />
      </div>
    </Link>
  );
}
