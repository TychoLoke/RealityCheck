import Link from "next/link";
import { ReactNode } from "react";

interface CTAButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variantStyles: Record<NonNullable<CTAButtonProps["variant"]>, string> = {
  primary:
    "bg-accentBlue text-white shadow-lg shadow-accentBlue/40 hover:bg-accentBlue/90 focus-visible:outline-accentTeal",
  secondary:
    "border border-accentTeal text-accentTeal hover:bg-accentTeal/10 focus-visible:outline-accentTeal",
  ghost:
    "text-white hover:text-accentTeal focus-visible:outline-accentTeal",
};

export function CTAButton({
  href,
  variant = "primary",
  children,
  className = "",
  ariaLabel,
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
}
