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
        title: "text-graphite",
        description: "text-graphite/75",
        eyebrow: "text-graphite/70",
        content: "text-graphite",
        badge: "border-white/15 bg-white/5",
        border: "border-white/12",
        surface:
          "bg-[linear-gradient(140deg,rgba(18,24,46,0.94),rgba(10,14,29,0.98))] backdrop-blur-xl",
        shadow: "shadow-[0_72px_160px_-64px_rgba(2,6,17,0.8)]",
        accent: "from-sunrise-amber/25 via-transparent to-aqua-teal/20",
        halo: "bg-white/10",
        ring: "ring-white/10",
        frame: "border-white/15",
      }
    : {
        title: "text-midnight",
        description: "text-midnight/70",
        eyebrow: "text-midnight/60",
        content: "text-midnight",
        badge: "border-midnight/10 bg-white/70",
        border: "border-midnight/10",
        surface:
          "bg-[linear-gradient(140deg,rgba(255,255,255,0.96),rgba(236,242,255,0.92))] backdrop-blur-lg",
        shadow: "shadow-[0_72px_160px_-64px_rgba(12,15,27,0.4)]",
        accent: "from-electric-indigo/20 via-transparent to-aqua-teal/15",
        halo: "bg-white/70",
        ring: "ring-midnight/5",
        frame: "border-white/60",
      };

  return (
    <section
      id={id}
      className={`relative isolate px-4 sm:px-6 ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-midnight/15 to-transparent" />
      <div className="pointer-events-none absolute inset-x-10 bottom-[-80px] h-40 rounded-[48px] bg-gradient-to-t from-midnight/10 via-midnight/5 to-transparent blur-2xl" />
      <Container className="relative">
        <div
          className={`group relative overflow-hidden rounded-[42px] border ${palette.border} ${palette.surface} ${palette.shadow} ring-1 ring-inset ${palette.ring}`}
        >
          <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${palette.accent} opacity-60`} />
          <div
            className={`pointer-events-none absolute -top-1/3 left-1/2 h-80 w-[130%] -translate-x-1/2 rounded-full blur-3xl ${palette.halo}`}
          />
          <div
            className={`relative z-10 flex flex-col gap-12 px-6 py-12 sm:px-12 sm:py-16 lg:px-16 ${palette.content}`}
          >
            <header className="max-w-3xl space-y-5">
              {eyebrow ? (
                <span
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] ${palette.eyebrow} ${palette.badge}`}
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
          <div className={`pointer-events-none absolute inset-0 rounded-[42px] border ${palette.frame} opacity-40`} />
        </div>
      </Container>
    </section>
  );
}
