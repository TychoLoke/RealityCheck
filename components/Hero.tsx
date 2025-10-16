import Link from "next/link";
import { ReactNode } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  primaryAction: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  children?: ReactNode;
}

export function Hero({ title, subtitle, primaryAction, secondaryAction, children }: HeroProps) {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm sm:p-12">
      <div className="space-y-6">
        <h1 className="text-4xl font-semibold text-brand-primary md:text-5xl">{title}</h1>
        <p className="text-lg text-brand-secondary md:text-xl">{subtitle}</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          {primaryAction.href ? (
            <Link
              href={primaryAction.href}
              role="button"
              className="inline-flex items-center justify-center rounded-full bg-[#0B0E1A] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
            >
              {primaryAction.label}
            </Link>
          ) : (
            <button
              type="button"
              onClick={primaryAction.onClick}
              className="inline-flex items-center justify-center rounded-full bg-[#0B0E1A] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
            >
              {primaryAction.label}
            </button>
          )}
          {secondaryAction ? (
            <Link
              href={secondaryAction.href}
              className="text-sm font-semibold text-brand-primary underline-offset-4 transition hover:underline"
            >
              {secondaryAction.label}
            </Link>
          ) : null}
        </div>
      </div>
      {children ? <div className="mt-8">{children}</div> : null}
    </section>
  );
}
