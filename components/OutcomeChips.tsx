interface OutcomeChipsProps {
  items: string[];
}

export function OutcomeChips({ items }: OutcomeChipsProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-brand-primary">Outcomes we are targeting</h2>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-brand-primary shadow-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
