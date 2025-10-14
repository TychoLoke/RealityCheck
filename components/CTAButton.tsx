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
    "bg-midnight text-white shadow-[0_18px_40px_-28px_rgba(11,14,26,0.9)] hover:bg-midnight/90 hover:shadow-[0_26px_60px_-30px_rgba(11,14,26,0.75)] focus-visible:outline-midnight",
  secondary:
    "border border-midnight/20 bg-cloud text-midnight shadow-sm hover:border-midnight/40 hover:bg-midnight/5 focus-visible:outline-midnight",
  ghost:
    "text-midnight/70 hover:text-midnight focus-visible:outline-midnight/50",
  inverted:
    "border border-white/20 bg-white/10 text-white hover:border-white/40 focus-visible:outline-white",
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
