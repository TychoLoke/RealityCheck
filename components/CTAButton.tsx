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
    "bg-midnight text-graphite shadow-lg shadow-midnight/30 transition hover:bg-midnight/90 focus-visible:outline-midnight",
  secondary:
    "border border-neutral/50 text-neutral hover:border-neutral/70 focus-visible:outline-neutral",
  ghost:
    "text-neutral hover:text-midnight focus-visible:outline-neutral",
  inverted:
    "border border-midnight/20 text-midnight hover:bg-midnight/5 focus-visible:outline-midnight",
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
