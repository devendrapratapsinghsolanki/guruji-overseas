import React from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant =
  | "navy"
  | "royal"
  | "amber"
  | "neutral"
  | "outline";

export type BadgeSize = "sm" | "md";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  navy: "bg-navy-50 text-navy-900 border border-navy-200/80 font-semibold",
  royal: "bg-royal-50 text-royal-700 border border-blue-200 font-semibold",
  amber: "bg-amber-50 text-amber-800 border border-amber-200 font-semibold",
  neutral: "bg-slate-100 text-charcoal-700 border border-slate-200 font-medium",
  outline: "bg-transparent text-charcoal-700 border border-slate-300 font-medium",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "text-[11px] px-2.5 py-0.5 rounded gap-1",
  md: "text-xs px-3 py-1 rounded gap-1.5",
};

export function Badge({
  className,
  variant = "navy",
  size = "md",
  icon,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center tracking-wide uppercase transition-colors select-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
