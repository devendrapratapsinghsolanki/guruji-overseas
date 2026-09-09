import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export type ButtonVariant =
  | "primary"
  | "royal"
  | "amber"
  | "outline"
  | "secondary"
  | "ghost";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-navy-900 text-white hover:bg-navy-850 active:bg-navy-950 border border-navy-800 shadow-subtle",
  royal:
    "bg-royal-600 text-white hover:bg-royal-700 active:bg-royal-800 shadow-subtle",
  amber:
    "bg-amber-600 text-white hover:bg-amber-700 active:bg-amber-800 font-semibold shadow-subtle",
  outline:
    "bg-transparent text-navy-900 border border-slate-300 hover:border-navy-800 hover:bg-slate-50 active:bg-slate-100",
  secondary:
    "bg-slate-100 text-charcoal-900 hover:bg-slate-200 active:bg-slate-300 border border-slate-200",
  ghost:
    "bg-transparent text-charcoal-700 hover:text-navy-900 hover:bg-slate-100 active:bg-slate-200",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-xs px-3.5 py-2 rounded-md gap-1.5 font-medium",
  md: "text-sm px-4.5 py-2.5 rounded-md gap-2 font-medium",
  lg: "text-base px-6 py-3 rounded-md gap-2.5 font-semibold",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      href,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      "inline-flex items-center justify-center transition-colors duration-150 cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-navy-800 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const content = (
      <>
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin text-current" />
        ) : (
          leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span className="inline-flex shrink-0">{rightIcon}</span>
        )}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          target={target}
          rel={rel}
          className={baseClasses}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={baseClasses}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
