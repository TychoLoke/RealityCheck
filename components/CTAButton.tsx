import Link from "next/link";
import { MouseEvent, ReactNode } from "react";

interface CTAButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "ghost" | "inverted";
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variantStyles: Record<NonNullable<CTAButtonProps["variant"]>, string> = {
  primary:
    "bg-gradient-to-r from-accentBlue to-accentTeal text-white shadow-[0_20px_45px_-30px_rgba(14,165,233,0.9)] hover:shadow-[0_28px_60px_-32px_rgba(37,99,235,0.75)] focus-visible:outline-accentBlue",
  secondary:
    "border border-white/10 bg-white/10 text-white/90 backdrop-blur hover:border-white/20 focus-visible:outline-white",
  ghost:
    "text-white/70 hover:text-white focus-visible:outline-white/50",
  inverted:
    "border border-midnight/10 bg-cloud text-midnight shadow-sm hover:border-midnight/20 focus-visible:outline-midnight",
};

export function CTAButton({
  href,
  variant = "primary",
  children,
  className = "",
  ariaLabel,
  onClick,
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
