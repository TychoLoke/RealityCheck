import { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  title: string;
  description?: string;
  id?: string;
  children: ReactNode;
  eyebrow?: string;
  columns?: 1 | 2 | 3 | 4;
  className?: string;
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
}: SectionProps) {
  const gridClasses = columnsClassMap[columns];

  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <Container className="flex flex-col gap-8">
        <div className="max-w-3xl">
          {eyebrow ? (
            <span className="text-sm font-semibold uppercase tracking-wide text-accentTeal">{eyebrow}</span>
          ) : null}
          <h2 className="mt-2 text-2xl font-semibold text-midnight sm:text-3xl">{title}</h2>
          {description ? <p className="mt-4 text-base leading-relaxed text-neutral">{description}</p> : null}
        </div>
        <div className={`grid gap-6 ${gridClasses}`}>{children}</div>
      </Container>
    </section>
  );
}
