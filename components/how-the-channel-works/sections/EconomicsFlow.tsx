interface EconomicsData {
  nodes: { id: string; label: string; description: string }[];
  links: { from: string; to: string; value: number; note?: string }[];
}

interface EconomicsFlowProps {
  data: EconomicsData;
}

export function EconomicsFlow({ data }: EconomicsFlowProps) {
  const { nodes, links } = data;
  const maxValue = Math.max(...links.map((link) => link.value));
  const nodeLookup = Object.fromEntries(nodes.map((node) => [node.id, node]));

  return (
    <section className="space-y-6">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-secondary">
          Economics
        </p>
        <h2 className="text-3xl font-semibold text-brand-primary">How value and revenue flow</h2>
        <p className="max-w-3xl text-base text-brand-secondary">
          Track how program spend converts into partner services and, ultimately, customer outcomes.
          Hover to see the leverage each step adds.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        <ul className="space-y-4 rounded-[20px] border border-zinc-200 bg-white p-6 shadow-sm">
          {nodes.map((node) => (
            <li key={node.id} className="space-y-1">
              <p className="text-sm font-semibold text-brand-primary">{node.label}</p>
              <p className="text-sm text-brand-secondary">{node.description}</p>
            </li>
          ))}
        </ul>

        <div className="space-y-4 rounded-[20px] border border-zinc-200 bg-white p-6 shadow-sm">
          {links.map((link) => {
            const from = nodeLookup[link.from]?.label ?? link.from;
            const to = nodeLookup[link.to]?.label ?? link.to;
            const widthPercent = Math.round((link.value / maxValue) * 100);

            return (
              <div key={`${link.from}-${link.to}`} className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2 text-sm font-semibold text-brand-primary">
                  <span>
                    {from} → {to}
                  </span>
                  <span className="rounded-full bg-brand-muted px-3 py-1 text-xs font-semibold text-brand-secondary">
                    Index {link.value}
                  </span>
                </div>
                <div className="relative h-3 w-full overflow-hidden rounded-full bg-brand-muted">
                  <div
                    className="h-full rounded-full bg-brand-primary/80"
                    style={{ width: `${widthPercent}%` }}
                  />
                </div>
                {link.note ? (
                  <p className="text-sm text-brand-secondary">{link.note}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
