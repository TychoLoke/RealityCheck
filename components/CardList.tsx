import Link from "next/link";

export type CardAction = { label: string; href: string };

export type CardListItem = {
  title: string;
  meta?: string;
  description?: string;
  actions?: CardAction[];
  detail?: string;
};

type CardListProps = {
  items: CardListItem[];
  layout?: "grid" | "stack";
};

export function CardList({ items, layout = "grid" }: CardListProps) {
  const baseClasses =
    "flex flex-col gap-3 rounded-[12px] border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md";

  return (
    <div className={layout === "grid" ? "grid gap-6 md:grid-cols-2" : "flex flex-col gap-4"}>
      {items.map((item) => (
        <article key={item.title} className={baseClasses}>
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-secondary/70">{item.meta}</p>
            <h3 className="text-xl font-semibold text-brand-primary">{item.title}</h3>
            {item.detail && <p className="text-sm text-brand-secondary">{item.detail}</p>}
          </div>
          {item.description && <p className="text-sm text-brand-secondary">{item.description}</p>}
          {item.actions && item.actions.length > 0 && (
            <div className="flex flex-wrap gap-3 pt-2">
              {item.actions.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className="inline-flex items-center justify-center rounded-[12px] border border-brand-secondary/30 px-3 py-2 text-sm font-semibold text-brand-primary transition hover:border-brand-primary"
                >
                  {action.label}
                </Link>
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
