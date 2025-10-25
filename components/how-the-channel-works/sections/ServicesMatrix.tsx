interface ServicesMatrixData {
  offers: { id: string; label: string }[];
  motions: { id: string; label: string }[];
  plays: Record<string, Record<string, string>>;
}

interface ServicesMatrixProps {
  data: ServicesMatrixData;
}

export function ServicesMatrix({ data }: ServicesMatrixProps) {
  const { offers, motions, plays } = data;

  return (
    <section className="space-y-6">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-secondary">
          Attach services
        </p>
        <h2 className="text-3xl font-semibold text-brand-primary">Attach services matrix</h2>
        <p className="max-w-3xl text-base text-brand-secondary">
          Map offers to motions to build complete plays. Each cell showcases an attachable service
          that reinforces customer outcomes and margin.
        </p>
      </header>

      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0 rounded-[20px] border border-zinc-200 bg-white shadow-sm">
          <thead>
            <tr>
              <th className="sticky left-0 z-10 bg-white px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-brand-secondary">
                Offer × Motion
              </th>
              {motions.map((motion) => (
                <th
                  key={motion.id}
                  className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-brand-secondary"
                >
                  {motion.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {offers.map((offer, rowIndex) => (
              <tr key={offer.id} className={rowIndex % 2 === 0 ? "bg-brand-muted/40" : "bg-white"}>
                <th className="sticky left-0 z-10 border-t border-zinc-200 bg-inherit px-4 py-4 text-left text-sm font-semibold text-brand-primary">
                  {offer.label}
                </th>
                {motions.map((motion) => (
                  <td key={`${offer.id}-${motion.id}`} className="border-t border-zinc-200 px-4 py-4 align-top">
                    <p className="text-sm text-brand-primary/80">{plays[offer.id]?.[motion.id]}</p>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
