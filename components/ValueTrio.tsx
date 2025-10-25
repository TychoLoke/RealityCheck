import type { ReactNode } from "react";

type ValueTrioItem = {
  title: string;
  description: string;
  icon?: ReactNode;
};

type ValueTrioProps = {
  items: ValueTrioItem[];
};

export function ValueTrio({ items }: ValueTrioProps) {
  return (
    <div className="grid gap-6 rounded-[32px] border border-zinc-200/60 bg-brand-muted/80 p-6 sm:grid-cols-3 sm:gap-8 sm:p-12">
      {items.map((item) => (
        <div
          key={item.title}
          className="flex h-full flex-col justify-between gap-4 rounded-[20px] bg-white p-8 shadow-sm shadow-brand-primary/5"
        >
          <div className="space-y-4 text-brand-primary">
            <div className="inline-flex items-center gap-3 text-brand-secondary">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-[12px] bg-brand-muted text-xs font-semibold uppercase tracking-[0.18em]">
                {item.icon ?? "•"}
              </span>
              <h3 className="text-lg font-semibold text-brand-primary">{item.title}</h3>
            </div>
            <p className="text-sm leading-relaxed text-brand-secondary">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
