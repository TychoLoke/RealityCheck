interface EconomicsStep {
  from: string;
  to: string;
  value: number;
  hint?: string;
}

interface EconomicsFlowProps {
  data: EconomicsStep[];
  highlightedIndex: number | null;
  onHighlight: (index: number | null) => void;
}

export function EconomicsFlow({ data, highlightedIndex, onHighlight }: EconomicsFlowProps) {
  const maxValue = Math.max(...data.map((step) => step.value), 0) || 1;

  return (
    <section className="rounded-[12px] border border-[#0B0E1A] bg-[#FFFFFF] px-5 py-5 text-[#0B0E1A] shadow-sm">
      <header className="flex flex-col gap-1">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A93A6]">Value &amp; economics</p>
        <h2 className="text-lg font-semibold">Follow the spend to outcomes</h2>
      </header>

      <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-end">
        {data.map((step, index) => {
          const isActive = highlightedIndex === index;
          const flexValue = step.value || 1;
          const widthPercent = (step.value / maxValue) * 100;

          return (
            <button
              key={`${step.from}-${step.to}`}
              type="button"
              aria-pressed={isActive}
              onClick={() => onHighlight(isActive ? null : index)}
              className={`flex flex-col justify-between rounded-[12px] border px-3 py-3 text-left text-xs transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0B0E1A] ${
                isActive ? "border-[#0B0E1A] bg-[#0B0E1A] text-[#FFFFFF]" : "border-[#0B0E1A] text-[#0B0E1A]"
              }`}
              style={{ flexGrow: flexValue, flexBasis: `${widthPercent}%`, minWidth: "96px" }}
            >
              <span className="text-sm font-semibold">{step.from}</span>
              <span className="text-[11px] uppercase tracking-[0.08em]">→</span>
              <span className="text-sm font-semibold">{step.to}</span>
              <span className={`mt-1 text-[11px] ${isActive ? "text-[#FFFFFF]" : "text-[#0B0E1A]"}`}>
                Index {step.value}
              </span>
            </button>
          );
        })}
      </div>

      <p className="mt-4 rounded-[12px] border border-dashed border-[#0B0E1A] px-3 py-3 text-xs text-[#0B0E1A]">
        {highlightedIndex !== null && data[highlightedIndex]?.hint
          ? data[highlightedIndex].hint
          : "Tap a bar to see the KPI focus for that handoff."}
      </p>
    </section>
  );
}
