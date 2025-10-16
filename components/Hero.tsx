import Link from "next/link";
import { ReactNode } from "react";
interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta: {
    label: string;
    href?: string;
  };
  secondaryHref: string;
  secondaryLabel: string;
  children?: ReactNode;
}

export function Hero({ title, subtitle, primaryCta, secondaryHref, secondaryLabel, children }: HeroProps) {
  return (
    <section className="flex flex-col gap-8 rounded-2xl border border-slate/60 bg-gradient-to-br from-slate/60 via-night to-night p-8 shadow-surface sm:p-12">
      <div className="space-y-6">
        <p className="inline-flex items-center rounded-full border border-slate/60 bg-night px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-ink/60">
          Build Mode
        </p>
        <h1 className="text-3xl font-semibold text-ink sm:text-5xl">{title}</h1>
        <p className="text-lg text-ink/80 sm:text-xl">{subtitle}</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href={primaryCta.href ?? "#mailing-list"}
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-night shadow-lg transition hover:bg-accentSoft"
          >
            {primaryCta.label}
          </Link>
          <Link href={secondaryHref} className="text-sm font-semibold text-ink/70 transition hover:text-ink">
            {secondaryLabel}
          </Link>
        </div>
      </div>
      {children}
    </section>
  );
}
