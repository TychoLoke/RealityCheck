import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How the Channel Works",
  description: "Understand the channel roles, flows, and incentives.",
};

const roles = ["Vendor", "Distributor", "Marketplace", "MSP/Partner", "ISV"];
const flows = ["Awareness", "Sale", "Delivery", "Success", "Expansion"];
const incentives = ["Recurring value", "Retention", "NRR", "Partner health"];

export default function HowTheChannelWorksPage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold text-brand-primary">Understand the Channel</h1>
        <p className="max-w-3xl text-base text-brand-secondary">Map the ecosystem so every partner knows their role and the path to value.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-brand-primary">Roles</h2>
        <ul className="grid gap-4 sm:grid-cols-3">
          {roles.map((role) => (
            <li key={role} className="rounded-[12px] border border-zinc-200 bg-white p-6 text-center text-sm font-semibold text-brand-primary">
              {role}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-brand-primary">Flows</h2>
        <div className="flex flex-wrap gap-3">
          {flows.map((flow) => (
            <span key={flow} className="rounded-[12px] bg-brand-muted px-4 py-2 text-sm font-semibold text-brand-primary">
              {flow}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-brand-primary">Incentives</h2>
        <ul className="space-y-2 text-base text-brand-secondary">
          {incentives.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-[16px] border border-dashed border-brand-secondary/40 p-6 text-sm text-brand-secondary">
        <p className="font-semibold text-brand-primary">One page, one diagram</p>
        <p className="mt-2">Ecosystem arrows and handoffs coming soon.</p>
      </section>
    </div>
  );
}
