import { Card } from "./Card";

const flowItems = [
  "Suppliers",
  "Vendors",
  "Distributors/Aggregators",
  "MSPs/VARs/Integrators",
  "Customers",
];

const roleCards = [
  {
    title: "Vendors",
    description: "Product strategy, program design, and ecosystem leadership.",
  },
  {
    title: "Distributors/Aggregators",
    description: "Scale, enablement, billing, incentives, and shared platforms.",
  },
  {
    title: "MSPs/VARs/Integrators",
    description: "Services, outcomes, renewals, and customer lifecycle ownership.",
  },
  {
    title: "ISVs & Marketplaces",
    description: "Extension, specialization, and packaged adapters across the stack.",
  },
];

const flows = [
  {
    label: "Knowledge flows",
    items: ["Enablement", "Certifications", "Shared context"],
  },
  {
    label: "Commercial flows",
    items: ["Deal registration", "Incentives", "Renewals"],
  },
  {
    label: "Operational flows",
    items: ["Provisioning", "Baselines", "Compliance"],
  },
];

export function ValueChainDiagram() {
  return (
    <section className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-brand-primary">
        {flowItems.map((item, index) => (
          <span key={item} className="inline-flex items-center gap-3">
            <span className="rounded-full border border-zinc-200 bg-white px-4 py-2 shadow-sm">{item}</span>
            {index < flowItems.length - 1 ? <span aria-hidden>→</span> : null}
          </span>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {roleCards.map((role) => (
          <Card key={role.title}>
            <h3 className="text-xl font-semibold text-brand-primary">{role.title}</h3>
            <p className="mt-2 text-sm text-brand-secondary">{role.description}</p>
          </Card>
        ))}
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {flows.map((flow) => (
          <Card key={flow.label}>
            <p className="text-sm font-semibold text-brand-secondary uppercase tracking-[0.18em]">{flow.label}</p>
            <ul className="mt-2 space-y-1 text-sm text-brand-secondary">
              {flow.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}
