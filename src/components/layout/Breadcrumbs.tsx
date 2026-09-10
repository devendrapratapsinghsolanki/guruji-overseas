import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  theme?: "light" | "dark";
}

export function Breadcrumbs({
  items,
  className = "",
  theme = "light",
}: BreadcrumbsProps) {
  const isDark = theme === "dark";

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center space-x-1.5 text-xs ${
        isDark ? "text-slate-300" : "text-slate-500"
      } ${className}`}
    >
      <Link
        href="/"
        className={`inline-flex items-center gap-1 transition-colors hover:text-amber-400 ${
          isDark ? "text-slate-300 hover:text-white" : "text-slate-500 hover:text-navy-900"
        }`}
      >
        <Home className="w-3.5 h-3.5" />
        <span className="sr-only">Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight
              className={`w-3.5 h-3.5 shrink-0 ${
                isDark ? "text-slate-500" : "text-slate-400"
              }`}
            />
            {isLast || !item.href ? (
              <span
                className={`font-semibold truncate max-w-[200px] sm:max-w-none ${
                  isDark ? "text-amber-400" : "text-navy-950"
                }`}
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className={`hover:underline truncate max-w-[150px] sm:max-w-none transition-colors ${
                  isDark
                    ? "text-slate-300 hover:text-white"
                    : "text-slate-600 hover:text-navy-900"
                }`}
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
