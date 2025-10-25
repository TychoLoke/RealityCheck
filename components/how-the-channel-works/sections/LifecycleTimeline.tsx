interface Motion {
  id: string;
  label: string;
  summary?: string;
}

interface LifecycleTimelineProps {
  motions: Motion[];
  activeMotion: string;
  onSelect: (motionId: string) => void;
}

export function LifecycleTimeline({ motions, activeMotion, onSelect }: LifecycleTimelineProps) {
  const active = motions.find((motion) => motion.id === activeMotion) ?? motions[0];

  return (
    <section className="rounded-[12px] border border-[#0B0E1A] bg-[#FFFFFF] px-5 py-5 text-[#0B0E1A] shadow-sm">
      <header className="flex flex-col gap-1">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A93A6]">Lifecycle timeline</p>
        <h2 className="text-lg font-semibold">Eight motions, one rhythm</h2>
        <p className="text-xs text-[#0B0E1A] md:text-sm">
          Tap a step to open the deep dive—good looks like, KPIs, and pitfalls.
        </p>
      </header>

      <ol
        role="tablist"
        aria-label="Lifecycle motions"
        className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4"
      >
        {motions.map((motion, index) => {
          const isActive = motion.id === activeMotion;
          return (
            <li key={motion.id}>
              <button
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`motion-${motion.id}-panel`}
                id={`motion-tab-${motion.id}`}
                onClick={() => onSelect(motion.id)}
                className={`flex h-24 w-full flex-col justify-between rounded-[12px] border px-3 py-2 text-left text-xs transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0B0E1A] ${
                  isActive ? "border-[#0B0E1A] bg-[#0B0E1A] text-[#FFFFFF]" : "border-[#0B0E1A] text-[#0B0E1A]"
                }`}
              >
                <span className="flex items-center gap-2 text-[11px] font-semibold">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-current text-[10px] font-semibold">
                    {index + 1}
                  </span>
                  {motion.label}
                </span>
                <span className={`text-[11px] ${isActive ? "text-[#FFFFFF]" : "text-[#0B0E1A]"}`}>
                  {motion.summary}
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      {active ? (
        <div
          id={`motion-${active.id}-panel`}
          role="tabpanel"
          aria-labelledby={`motion-tab-${active.id}`}
          className="mt-4 rounded-[12px] border border-dashed border-[#0B0E1A] px-4 py-3 text-xs text-[#0B0E1A] md:text-sm"
        >
          <p>{active.summary}</p>
        </div>
      ) : null}
    </section>
  );
}
