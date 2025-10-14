import { ReactNode } from "react";
import { Container } from "./Container";
import { CTAButton } from "./CTAButton";

interface SectionProps {
  title: string;
  description?: string;
  id?: string;
  children: ReactNode;
  eyebrow?: string;
  columns?: 1 | 2 | 3 | 4;
  className?: string;
  cta?: { label: string; href: string; variant?: "primary" | "secondary" | "ghost" | "inverted" };
  variant?: "default" | "inverted";
}

const columnsClassMap: Record<NonNullable<SectionProps["columns"]>, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
};

export function Section({
  title,
  description,
  id,
  children,
  eyebrow,
  columns = 3,
  className = "",
  cta,
  variant = "default",
}: SectionProps) {
  const gridClasses = columnsClassMap[columns];
  const isInverted = variant === "inverted";

  const palette = isInverted
    ? {
        container:
          "border-white/20 bg-midnight text-white shadow-[0_70px_160px_-70px_rgba(11,14,26,0.75)]",
        eyebrow: "text-white/60",
        title: "text-white",
        description: "text-white/75",
        frame: "border-white/20",
        accent: "from-accentTeal/20 via-transparent to-accentBlue/10",
        halo: "bg-white/10",
        badge: "border-white/20 bg-white/10",
        ring: "ring-white/10",
      }
    : {
        container:
          "border-midnight/10 bg-cloud text-midnight shadow-[0_60px_140px_-70px_rgba(11,14,26,0.18)]",
        eyebrow: "text-midnight/60",
        title: "text-midnight",
        description: "text-neutral",
        frame: "border-midnight/10",
        accent: "from-accentBlue/10 via-transparent to-accentTeal/5",
        halo: "bg-accentBlue/10",
        badge: "border-midnight/10 bg-midnight/5",
        ring: "ring-midnight/5",
      };

  return (
    <section id={id} className={`relative isolate px-4 sm:px-6 ${className}`}>
      <Container className="relative">
        <div
          className={`group relative overflow-hidden rounded-[var(--radius-xl)] border ${palette.container} ring-1 ring-inset ${palette.ring}`}
        >
          <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${palette.accent} opacity-60`} />
          <div
            className={`pointer-events-none absolute -top-1/3 left-1/2 h-72 w-[120%] -translate-x-1/2 rounded-full blur-3xl ${palette.halo}`}
          />
          <div className={`relative z-10 flex flex-col gap-12 px-6 py-12 sm:px-12 sm:py-16 lg:px-16`}>
            <header className="max-w-3xl space-y-5">
              {eyebrow ? (
                <span
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] ${palette.eyebrow} ${palette.badge}`}
                >
                  {eyebrow}
                </span>
              ) : null}
              <div className="space-y-4">
                <h2 className={`text-3xl font-semibold sm:text-4xl lg:text-5xl ${palette.title}`}>{title}</h2>
                {description ? (
                  <p className={`text-base leading-relaxed sm:text-lg ${palette.description}`}>{description}</p>
                ) : null}
              </div>
            </header>
            <div className={`grid gap-10 sm:gap-12 ${gridClasses}`}>{children}</div>
            {cta ? (
              <div className="flex flex-wrap items-center gap-4">
                <CTAButton href={cta.href} variant={cta.variant ?? (isInverted ? "inverted" : "primary")}>
                  {cta.label}
                </CTAButton>
              </div>
            ) : null}
          </div>
          <div className={`pointer-events-none absolute inset-0 rounded-[var(--radius-xl)] border ${palette.frame} opacity-40`} />
        </div>
      </Container>
    </section>
  );
}
