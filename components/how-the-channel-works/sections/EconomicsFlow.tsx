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
    <section
      id="economics"
      className="space-y-6 rounded-[20px] border border-[#0B0E1A]/10 bg-[#FFFFFF] px-6 py-8 text-[#0B0E1A] shadow-sm shadow-[#0B0E1A]/5 md:px-8"
    >
      <header className="space-y-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8A93A6]">Value &amp; economics</p>
        <h2 className="text-2xl font-semibold">Follow the spend to outcomes</h2>
        <p className="text-sm leading-relaxed text-[#1D2333]/80">
          Each bar represents where investment, incentives, and customer value exchange hands. Highlight a flow to see the KPI
          story we&apos;re standardizing with our operators.
        </p>
      </header>

      <div className="flex flex-col gap-3 md:flex-row md:items-end">
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
              className={`flex flex-col justify-between rounded-[14px] border px-4 py-4 text-left text-xs transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0B0E1A] ${
                isActive
                  ? "border-[#0B0E1A] bg-[#0B0E1A] text-[#FFFFFF] shadow-lg shadow-[#0B0E1A]/25"
                  : "border-[#0B0E1A]/30 bg-[#F9FAFE] text-[#0B0E1A] hover:border-[#0B0E1A]/50"
              }`}
              style={{ flexGrow: flexValue, flexBasis: `${widthPercent}%`, minWidth: "96px" }}
            >
              <span className="text-sm font-semibold">{step.from}</span>
              <span className="text-[11px] uppercase tracking-[0.08em]">→</span>
              <span className="text-sm font-semibold">{step.to}</span>
              <span className={`mt-1 text-[11px] ${isActive ? "text-[#FFFFFF]" : "text-[#1D2333]/80"}`}>
                Index {step.value}
              </span>
            </button>
          );
        })}
      </div>

      <p className="rounded-[16px] border border-dashed border-[#0B0E1A]/40 bg-[#F9FAFE] px-4 py-4 text-sm leading-relaxed text-[#1D2333]">
        {highlightedIndex !== null && data[highlightedIndex]?.hint
          ? data[highlightedIndex].hint
          : "Tap a bar to see the KPI focus for that handoff."}
      </p>
    </section>
  );
}
