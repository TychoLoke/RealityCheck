interface SystemDiagramProps {
  pillars: string[];
  adapters: string[];
}

export function SystemDiagram({ pillars, adapters }: SystemDiagramProps) {
  return (
    <section className="space-y-6">
      <div className="rounded-2xl border border-slate/60 bg-slate/40 p-6 shadow-surface">
        <h2 className="text-xl font-semibold text-ink">System snapshot</h2>
        <p className="mt-2 text-sm text-ink/70">Four pillars power the shared operating system.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div key={pillar} className="flex flex-col gap-2 rounded-2xl border border-slate/60 bg-night/80 p-4 text-ink">
              <span className="text-sm uppercase tracking-[0.24em] text-ink/60">Pillar</span>
              <span className="text-lg font-semibold">{pillar}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-slate/60 bg-night/70 px-4 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-ink/70">
        <span className="text-ink">Adapters</span>
        {adapters.map((adapter) => (
          <span key={adapter} className="rounded-full border border-slate/50 bg-slate/40 px-3 py-1 text-ink/80">
            {adapter}
          </span>
        ))}
      </div>
    </section>
  );
}
