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
    <section
      id="lifecycle"
      className="space-y-6 rounded-[20px] border border-[#0B0E1A]/10 bg-[#FFFFFF] px-6 py-8 text-[#0B0E1A] shadow-sm shadow-[#0B0E1A]/5 md:px-8"
    >
      <header className="space-y-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8A93A6]">Lifecycle timeline</p>
        <h2 className="text-2xl font-semibold">Eight motions, one rhythm</h2>
        <p className="text-sm leading-relaxed text-[#1D2333]/80">
          Follow the flow from spark to expansion. Every step builds on the last—select a motion to read the quick brief, then
          open the drawer for the deeper play-by-play.
        </p>
      </header>

      <ol
        role="tablist"
        aria-label="Lifecycle motions"
        className="grid grid-cols-2 gap-3 md:grid-cols-4"
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
                className={`flex h-28 w-full flex-col justify-between rounded-[14px] border px-3 py-3 text-left text-xs transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0B0E1A] ${
                  isActive
                    ? "border-[#0B0E1A] bg-[#0B0E1A] text-[#FFFFFF] shadow-lg shadow-[#0B0E1A]/25"
                    : "border-[#0B0E1A]/30 bg-[#F9FAFE] text-[#0B0E1A] hover:border-[#0B0E1A]/50"
                }`}
              >
                <span className="flex items-center gap-2 text-[11px] font-semibold">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-current text-[10px] font-semibold">
                    {index + 1}
                  </span>
                  {motion.label}
                </span>
                <span className={`text-[11px] leading-snug ${isActive ? "text-[#FFFFFF]" : "text-[#1D2333]/80"}`}>
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
          className="rounded-[16px] border border-dashed border-[#0B0E1A]/40 bg-[#F9FAFE] px-4 py-4 text-sm leading-relaxed text-[#1D2333]"
        >
          <p>{active.summary}</p>
        </div>
      ) : null}
    </section>
  );
}
