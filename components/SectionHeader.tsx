import Link from "next/link";
import clsx from "clsx";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  cta?: { label: string; href: string };
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, description, cta, align = "left" }: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <header className={clsx("space-y-3", alignment)}>
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-secondary">{eyebrow}</p>}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-brand-primary">{title}</h2>
        {description && <p className="text-base text-brand-secondary">{description}</p>}
      </div>
      {cta && (
        <Link
          href={cta.href}
          className="inline-flex items-center justify-center rounded-[12px] bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
        >
          {cta.label}
        </Link>
      )}
    </header>
  );
}
