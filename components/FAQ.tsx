"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <Disclosure key={item.question} item={item} defaultOpen={index === 0} />
      ))}
    </div>
  );
}

function Disclosure({ item, defaultOpen }: { item: FAQItem; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(Boolean(defaultOpen));

  return (
    <div className="rounded-2xl border border-slate/60 bg-night/70 p-5">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left text-base font-semibold text-ink"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        {item.question}
        <span aria-hidden className="text-ink/60">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && <p className="mt-3 text-sm text-ink/70">{item.answer}</p>}
    </div>
  );
}
