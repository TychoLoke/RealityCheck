interface WhatsLiveNextProps {
  liveItems: string[];
  nextItems: string[];
}

export function WhatsLiveNext({ liveItems, nextItems }: WhatsLiveNextProps) {
  return (
    <section className="grid gap-6 rounded-2xl border border-slate/60 bg-slate/40 p-6 shadow-surface md:grid-cols-2">
      <div>
        <h3 className="text-lg font-semibold text-ink">What&apos;s live</h3>
        <ul className="mt-4 space-y-2 text-sm text-ink/80">
          {liveItems.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-success" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-ink">What&apos;s next</h3>
        <ul className="mt-4 space-y-2 text-sm text-ink/80">
          {nextItems.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-warning" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
