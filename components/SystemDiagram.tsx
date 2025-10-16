import { Card } from "./Card";

const tiles = [
  {
    title: "People",
    description: "Roles, responsibilities, and competencies across the channel team.",
  },
  {
    title: "Process",
    description: "Governance, approvals, baselines, and drift control cycles.",
  },
  {
    title: "Data",
    description: "Classification, lineage, integrity, and retention standards.",
  },
  {
    title: "Tools",
    description: "Platforms, automation, and observability that keep work flowing.",
  },
  {
    title: "Adapters",
    description: "CRM • ERP • PSA • Marketplace integrations to existing systems.",
  },
];

export function SystemDiagram() {
  return (
    <section className="space-y-8">
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-brand-primary">Channel OS™ structure</h2>
        <p className="text-base text-brand-secondary">
          The framework is organised around five pillars that map to every operator&apos;s daily reality.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {tiles.map((tile) => (
            <Card key={tile.title} className="flex flex-col gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-secondary">{tile.title}</p>
              <p className="text-base text-brand-primary">{tile.description}</p>
            </Card>
          ))}
        </div>
      </div>
      <div className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 px-6 py-4 text-sm font-semibold text-brand-secondary">
        Strategy • Operations • Enablement • Platform
      </div>
    </section>
  );
}
