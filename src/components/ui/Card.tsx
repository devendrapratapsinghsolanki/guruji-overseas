import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "subtle" | "navy" | "interactive";
  bordered?: boolean;
}

export function Card({
  className,
  variant = "default",
  bordered = true,
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    default: "bg-white text-charcoal-900 shadow-card",
    subtle: "bg-surface-gray text-charcoal-900 shadow-subtle",
    navy: "bg-navy-900 text-white border-navy-800 shadow-card",
    interactive:
      "bg-white text-charcoal-900 shadow-card card-hover-clean cursor-pointer",
  };

  return (
    <div
      className={cn(
        "rounded-lg transition-colors duration-150",
        bordered && variant !== "navy" ? "border border-border-subtle" : "",
        bordered && variant === "navy" ? "border border-navy-800" : "",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-6 pb-3 flex flex-col space-y-1.5", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "font-sans text-lg font-bold tracking-tight text-current",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-charcoal-600 leading-relaxed", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-6 pt-0 text-current", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
