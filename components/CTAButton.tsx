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
    "bg-graphite text-midnight shadow-lg shadow-midnight/40 transition hover:bg-graphite/90 focus-visible:outline-graphite",
  secondary:
    "border border-neutral/60 text-neutral hover:border-neutral focus-visible:outline-neutral",
  ghost:
    "text-neutral hover:text-graphite focus-visible:outline-neutral",
  inverted:
    "border border-graphite/40 text-graphite hover:bg-graphite/10 focus-visible:outline-graphite",
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
