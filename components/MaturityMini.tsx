const maturityLevels = [
  { level: "L1", description: "Ad-hoc tasks, limited visibility" },
  { level: "L2", description: "Documented processes with gaps" },
  { level: "L3", description: "Measured operations across partners" },
  { level: "L4", description: "Automated governance with feedback loops" },
];

export function MaturityMini() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-brand-primary">Maturity quick view</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {maturityLevels.map((item) => (
          <div key={item.level} className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
            <p className="text-sm font-semibold text-brand-primary">{item.level}</p>
            <p className="mt-1 text-sm text-brand-secondary">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
