import type { ReactNode } from "react";

type QuoteProps = {
  quote: string;
  author: string;
  role?: string;
  logo?: ReactNode;
};

export function Quote({ quote, author, role, logo }: QuoteProps) {
  return (
    <figure className="space-y-4 rounded-[16px] border border-zinc-200 bg-white p-8 shadow-sm">
      <div className="text-3xl font-semibold leading-snug text-brand-primary">“{quote}”</div>
      <figcaption className="flex items-center gap-3 text-sm text-brand-secondary">
        {logo && <span className="text-brand-primary">{logo}</span>}
        <div>
          <p className="font-semibold text-brand-primary">{author}</p>
          {role && <p>{role}</p>}
        </div>
      </figcaption>
    </figure>
  );
}
