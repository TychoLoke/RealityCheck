interface OutcomeChipsProps {
  items: string[];
}

export function OutcomeChips({ items }: OutcomeChipsProps) {
  return (
    <div className="rounded-2xl border border-slate/60 bg-night/70 p-6 shadow-surface">
      <h2 className="text-xl font-semibold text-ink">Intended outcomes</h2>
      <div className="mt-4 flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="inline-flex items-center rounded-full border border-slate/60 bg-slate/40 px-4 py-2 text-sm font-medium text-ink"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
