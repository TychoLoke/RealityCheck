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
    "bg-accentBlue text-white shadow-lg shadow-midnight/25 hover:bg-midnight/90 focus-visible:outline-midnight",
  secondary:
    "border border-neutral text-neutral hover:bg-neutral/10 focus-visible:outline-neutral",
  ghost:
    "text-midnight hover:text-neutral focus-visible:outline-neutral",
  inverted:
    "border border-white/40 text-white hover:bg-white/10 focus-visible:outline-white",
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
