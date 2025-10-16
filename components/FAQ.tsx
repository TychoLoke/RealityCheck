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
    <div className="space-y-3">
      {items.map((item, index) => (
        <Disclosure key={item.question} item={item} defaultOpen={index === 0} />
      ))}
    </div>
  );
}

function Disclosure({ item, defaultOpen }: { item: FAQItem; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(Boolean(defaultOpen));

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left text-base font-semibold text-brand-primary"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        {item.question}
        <span aria-hidden className="text-brand-secondary">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="mt-3 text-sm text-brand-secondary">{item.answer}</p>}
    </div>
  );
}
