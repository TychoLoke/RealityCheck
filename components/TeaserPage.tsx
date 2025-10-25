import type { ReactNode } from "react";
import clsx from "clsx";

interface TeaserCta {
  label: string;
  href: string;
  variant?: "primary" | "ghost";
}

interface TeaserItem {
  title: string;
  description: ReactNode;
}

interface TeaserSection {
  eyebrow?: string;
  title: string;
  description: string;
  items?: TeaserItem[];
  note?: ReactNode;
}

interface TeaserPageProps {
  pretitle?: string;
  title: string;
  description: string;
  ctas?: TeaserCta[];
  sections?: TeaserSection[];
  children?: ReactNode;
}

const baseButtonClasses =
  "inline-flex items-center justify-center rounded-[12px] px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

function getCtaClassNames(variant: "primary" | "ghost" = "primary") {
  if (variant === "ghost") {
    return clsx(
      baseButtonClasses,
      "border border-brand-primary text-brand-primary focus-visible:outline-brand-primary hover:bg-brand-muted"
    );
  }
  return clsx(
    baseButtonClasses,
    "bg-brand-primary text-white shadow-sm focus-visible:outline-brand-primary hover:bg-[#04060d]"
  );
}

export function TeaserPage({
  pretitle = "Launching January 1, 2026",
  title,
  description,
  ctas = [
    { label: "Join the Community", href: "/join" },
    { label: "Explore the Framework", href: "/framework", variant: "ghost" },
  ],
  sections = [],
  children,
}: TeaserPageProps) {
  return (
    <div className="space-y-20">
      <header className="space-y-8">
        {pretitle ? (
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/30 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-secondary">
            {pretitle}
          </p>
        ) : null}
        <div className="space-y-5">
          <h1 className="text-4xl font-semibold leading-tight text-brand-primary md:text-5xl">{title}</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-brand-secondary">{description}</p>
        </div>
        {ctas.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {ctas.map((cta) => (
              <a key={cta.href} href={cta.href} className={getCtaClassNames(cta.variant)}>
                {cta.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {sections.length > 0 && (
        <div className="space-y-14">
          {sections.map((section) => (
            <section
              key={section.title}
              className="space-y-6 rounded-[24px] border border-zinc-200/60 bg-white p-10 shadow-sm shadow-brand-primary/5"
            >
              <div className="space-y-4">
                {section.eyebrow ? (
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-secondary">
                    {section.eyebrow}
                  </p>
                ) : null}
                <h2 className="text-2xl font-semibold text-brand-primary">{section.title}</h2>
                <p className="text-base leading-relaxed text-brand-secondary">{section.description}</p>
              </div>
              {section.items && section.items.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2">
                  {section.items.map((item) => (
                    <div key={item.title} className="space-y-3 rounded-[16px] border border-zinc-200 bg-brand-muted/60 p-6">
                      <p className="text-base font-semibold text-brand-primary">{item.title}</p>
                      <p className="text-sm leading-relaxed text-brand-secondary">{item.description}</p>
                    </div>
                  ))}
                </div>
              ) : null}
              {section.note ? (
                <p className="text-sm leading-relaxed text-brand-secondary/80">{section.note}</p>
              ) : null}
            </section>
          ))}
        </div>
      )}

      {children}
    </div>
  );
}
