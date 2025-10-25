import clsx from "clsx";

interface Motion {
  id: string;
  label: string;
  summary?: string;
  goodLooksLike?: string[];
  kpis?: string[];
  pitfalls?: string[];
}

interface LifecycleTimelineProps {
  motions: Motion[];
  selectedMotion: string;
  onSelect: (motionId: string) => void;
}

export function LifecycleTimeline({ motions, selectedMotion, onSelect }: LifecycleTimelineProps) {
  const activeMotion =
    motions.find((motion) => motion.id === selectedMotion) ?? motions[0] ?? ({} as Motion);

  return (
    <section className="space-y-8">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-secondary">
          Lifecycle
        </p>
        <h2 className="text-3xl font-semibold text-brand-primary">Eight motions to land value</h2>
        <p className="max-w-3xl text-base text-brand-secondary">
          Each motion stacks to deliver adoption, retention, and expansion. Click a stage to see what
          good looks like, KPIs to watch, and pitfalls to avoid.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="overflow-x-auto">
          <ol className="flex min-w-full gap-4 rounded-[20px] border border-zinc-200 bg-white p-6 shadow-sm">
            {motions.map((motion, index) => {
              const isActive = motion.id === activeMotion.id;
              return (
                <li key={motion.id} className="flex min-w-[140px] flex-1 flex-col items-center text-center">
                  <button
                    type="button"
                    onClick={() => onSelect(motion.id)}
                    className={clsx(
                      "flex h-full w-full flex-col items-center gap-3 rounded-[16px] border px-4 py-5 transition",
                      isActive
                        ? "border-brand-primary bg-brand-primary text-white shadow-md"
                        : "border-zinc-200 bg-brand-muted/60 text-brand-primary hover:border-brand-primary"
                    )}
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-current text-sm font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-wide">{motion.label}</span>
                    <span
                      className={clsx(
                        "text-xs",
                        isActive ? "text-white/80" : "text-brand-secondary"
                      )}
                    >
                      {motion.summary}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        <aside className="space-y-6 rounded-[20px] border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-secondary">Motion</p>
            <h3 className="text-2xl font-semibold text-brand-primary">{activeMotion.label}</h3>
            <p className="text-sm text-brand-secondary">{activeMotion.summary}</p>
          </div>

          <div className="space-y-4">
            <DetailList title="What good looks like" items={activeMotion.goodLooksLike ?? []} />
            <DetailList title="KPIs" items={activeMotion.kpis ?? []} />
            <DetailList title="Pitfalls" items={activeMotion.pitfalls ?? []} variant="danger" />
          </div>
        </aside>
      </div>
    </section>
  );
}

function DetailList({
  title,
  items,
  variant = "default",
}: {
  title: string;
  items: string[];
  variant?: "default" | "danger";
}) {
  if (!items.length) return null;

  return (
    <div className="space-y-2">
      <p
        className={clsx(
          "text-xs font-semibold uppercase tracking-wide",
          variant === "danger" ? "text-red-600" : "text-brand-secondary"
        )}
      >
        {title}
      </p>
      <ul className="space-y-1 text-sm text-brand-primary/80">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span
              aria-hidden
              className={clsx(
                "mt-2 h-1.5 w-1.5 flex-none rounded-full",
                variant === "danger" ? "bg-red-500" : "bg-brand-primary"
              )}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
