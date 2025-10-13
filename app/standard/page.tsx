import type { Metadata } from "next";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { CTAButton } from "../../components/CTAButton";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Channel OS Standard v1.0",
  description:
    "Channel OS Standard v1.0 unites people, process, and data so tools finally make sense across Vendors, Distributors, and Partners.",
};

export default function StandardPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="border-b border-midnight/10 bg-graphite py-16 sm:py-20">
        <Container className="flex flex-col gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-accentTeal">Standard v1.0</span>
          <h1 className="text-3xl font-semibold text-midnight sm:text-4xl">The “why” and the “how” of the channel</h1>
          <p className="max-w-3xl text-base leading-relaxed text-neutral sm:text-lg">
            Channel OS is a vendor-neutral framework that turns channel ambition into repeatable outcomes. It unites people,
            process, and data so your tools finally make sense.
          </p>
          <p className="max-w-3xl text-base leading-relaxed text-neutral sm:text-lg">
            Before: Sales wins a deal; services can’t see it; finance disputes the numbers. During: Clear roles, shared objects,
            visible handoffs, tracked SLAs. After: Every deal and rebate is explainable—once, correctly, auditable.
          </p>
        </Container>
      </section>

      <Section
        title="OS layers as a journey"
        description="People → Process → Data → Tools. Layered so every handoff is visible, every SLA is owned, every object is shared."
        columns={2}
      >
        <Card title="People" description="Skills that stick, roles that click, paths that grow." />
        <Card title="Process" description="Demand to settlement without dropped threads." />
        <Card title="Data" description="A canon of objects: Partner, Program, Deal, Incentive, Inventory, Entitlement, Ticket, Invoice, Renewal, Lineage, Access Policy." />
        <Card title="Tools" description="Adapters, not lock-ins; your stack made coherent." />
      </Section>

      <Section title="Scenes from the standard" description="What changes once Channel OS is in place." columns={3}>
        <Card title="Before">
          Sales wins a deal; services can’t see it; finance disputes the numbers.
        </Card>
        <Card title="During">
          Clear roles, shared objects, visible handoffs, tracked SLAs.
        </Card>
        <Card title="After">
          Every deal and rebate is explainable—once, correctly, auditable.
        </Card>
      </Section>

      <Section title="Canon & SLAs" description="Plain English, so every team knows what “good” looks like." columns={2}>
        <Card title="Canon of objects">
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral">
            <li>Partner • Program • Deal • Incentive</li>
            <li>Inventory • Entitlement • Ticket • Invoice</li>
            <li>Renewal • Lineage • Access Policy</li>
          </ul>
        </Card>
        <Card title="SLAs we teach & certify">
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral">
            <li>Deal-reg approval ≤ 48h</li>
            <li>Rebate accuracy ≥ 99.7%</li>
            <li>Sales-out freshness ≤ 24h</li>
            <li>Conflict cycle time ≤ 7 days</li>
          </ul>
        </Card>
      </Section>

      <Section columns={3} title="Principles">
        <Card title="The pledge" description="Vendor-neutral by design. Community-driven by choice. Versioned in the open. No tool favoritism—ever." />
        <Card title="Governance" description="One org = one vote. Public RFCs. Transparent releases. The standard belongs to the channel, not a company." />
        <Card title="Assurance" description="Deal-reg approval ≤ 48h, rebate accuracy ≥ 99.7%, sales-out freshness ≤ 24h, conflict cycle time ≤ 7 days." />
      </Section>

      <section className="pb-20">
        <Container className="flex flex-col items-start gap-6 rounded-3xl border border-midnight/10 bg-white px-8 py-10 shadow-card sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-midnight">Download the Channel OS Standard v1.0</h2>
            <p className="mt-3 max-w-2xl text-sm text-neutral">
              Access the PDF reference manual and align your organization with the canonical model for channel excellence.
            </p>
          </div>
          <CTAButton href="#" ariaLabel="Download the v1.0 PDF">
            Download the v1.0 PDF
          </CTAButton>
        </Container>
      </section>
    </div>
  );
}
