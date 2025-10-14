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
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variantStyles: Record<NonNullable<CTAButtonProps["variant"]>, string> = {
  primary:
    "bg-midnight text-white shadow-lg shadow-midnight/40 transition hover:bg-midnight/90 focus-visible:outline-midnight",
  secondary:
    "border border-midnight/10 bg-white/80 text-midnight shadow-sm hover:border-midnight/20 focus-visible:outline-midnight",
  ghost:
    "text-midnight/70 hover:text-midnight focus-visible:outline-midnight/50",
  inverted:
    "border border-white/30 text-white hover:bg-white/10 focus-visible:outline-white",
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
