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
    <div className="grid gap-6 rounded-2xl border border-zinc-200 bg-brand-muted p-6 sm:grid-cols-3 sm:p-8">
      {items.map((item) => (
        <div key={item.title} className="space-y-3 rounded-[12px] bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 text-brand-primary">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-[12px] bg-brand-muted text-sm font-semibold">
              {item.icon ?? "•"}
            </span>
            <h3 className="text-lg font-semibold">{item.title}</h3>
          </div>
          <p className="text-sm text-brand-secondary">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
