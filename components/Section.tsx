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
  const titleClass = isInverted ? "text-graphite" : "text-midnight";
  const descriptionClass = "text-neutral";
  const eyebrowClass = "text-neutral";
  const containerTextClass = isInverted ? "text-graphite" : "text-midnight";

  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <Container className={`flex flex-col gap-10 ${containerTextClass}`}>
        <div className="max-w-3xl">
          {eyebrow ? (
            <span className={`text-sm font-semibold uppercase tracking-wide ${eyebrowClass}`}>{eyebrow}</span>
          ) : null}
          <h2 className={`mt-2 text-2xl font-semibold sm:text-3xl ${titleClass}`}>{title}</h2>
          {description ? (
            <p className={`mt-4 text-base leading-relaxed ${descriptionClass}`}>{description}</p>
          ) : null}
        </div>
        <div className={`grid gap-6 ${gridClasses}`}>{children}</div>
        {cta ? (
          <div>
            <CTAButton href={cta.href} variant={cta.variant ?? (isInverted ? "inverted" : "primary")}>
              {cta.label}
            </CTAButton>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
