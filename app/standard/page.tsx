import type { Metadata } from "next";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { CTAButton } from "../../components/CTAButton";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Channel OS Standard v1.0 — People • Process • Data • Tools",
  description:
    "A vendor-neutral framework with canonical objects and practical SLAs: approval ≤ 48h, accuracy ≥ 99.7%, freshness ≤ 24h, conflict ≤ 7 days.",
};

const layers = [
  {
    title: "People",
    description: "Role maps, skill matrices, observable behaviors, and credentials that travel across employers.",
  },
  {
    title: "Process",
    description: "Demand → Deal Registration → Co-sell → Delivery → Rebate/Settlement → Success/Renew, with clear RACIs and handoffs.",
  },
  {
    title: "Data",
    description: "Canonical objects—Partner, Program, Deal, Incentive, Inventory, Entitlement, Ticket, Invoice, Renewal, Lineage, AccessPolicy.",
  },
  {
    title: "Tools",
    description: "Reference adapters (CRM/ERP/PSA), sandboxes, dual-run kits—no lock-in.",
  },
];

const beforeAfter = [
  { title: "Before", description: "Exports, email threads, finger-pointing." },
  { title: "After", description: "Shared objects, visible approvals, measurable SLAs, faster settlement." },
];

const slas = [
  "Deal-reg approval ≤ 48h",
  "Rebate accuracy ≥ 99.7%",
  "Sales-out freshness ≤ 24h",
  "Conflict cycle time ≤ 7 days",
];

const selfAssessmentQuestions = [
  "Role clarity: shared RACI for Demand→Settlement?",
  "Deal-reg SLA: ≤ 48h approval with audit trails?",
  "Rebate accuracy: ≥ 99.7% with variance reports?",
  "Data freshness: sales-out ≤ 24h for incentives/forecasting?",
  "Conflict latency: resolution ≤ 7 days with root-cause notes?",
  "Canonical objects: Deal, Incentive, Inventory, Lineage used across tools?",
  "Training & certification: 101/201 complete; credentials maintained?",
  "Dual-run capability: parallel calcs + reconciled deltas?",
];

export default function StandardPage() {
  return (
    <div className="flex flex-col gap-16 pb-24">
      <section className="border-b border-midnight/10 bg-graphite py-16 sm:py-20">
        <Container className="flex flex-col gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral">Standard v1.0</span>
          <h1 className="text-3xl font-semibold text-midnight sm:text-4xl">Channel OS Standard v1.0</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-neutral sm:text-xl">
            A vendor-neutral framework that turns channel ambition into repeatable outcomes. It unites people, process, and data so your tools finally make sense.
          </p>
          <div className="flex flex-wrap gap-4">
            <CTAButton href="#download">Download v1.0</CTAButton>
            <CTAButton href="#assessment" variant="secondary">
              Take the self-assessment
            </CTAButton>
            <CTAButton href="/community" variant="ghost">
              Join a study group
            </CTAButton>
          </div>
        </Container>
      </section>

      <Section
        title="The four layers"
        description="Every layer reinforces the others so the channel can scale without losing signal."
        columns={2}
      >
        {layers.map((layer) => (
          <Card key={layer.title} title={layer.title} description={layer.description} />
        ))}
      </Section>

      <Section
        title="SLAs we teach & certify"
        description="Performance metrics that every certified team commits to."
        columns={2}
        className="bg-graphite/60"
      >
        <Card title="Operational guardrails">
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral">
            {slas.map((sla) => (
              <li key={sla}>{sla}</li>
            ))}
          </ul>
        </Card>
        <Card title="What it feels like after Channel OS">
          <p>
            Approvals arrive on time. Rebates reconcile without debate. Sales-out data powers forecasting. Conflicts resolve with evidence, not guesswork.
          </p>
        </Card>
      </Section>

      <Section title="Before / After" description="One canon turns firefighting into operating." columns={2}>
        {beforeAfter.map((item) => (
          <Card key={item.title} title={item.title} description={item.description} />
        ))}
      </Section>

      <Section
        title="Conformance path"
        description="Self-assessment → study group to close gaps → lab evidence → audit → org certification (Silver/Gold/Platinum). Platform compatibility via public tests—no pay-to-pass."
        columns={3}
      >
        <Card title="Self-assess" description="Score your maturity and find the gaps." />
        <Card title="Prove it" description="Run the labs, capture evidence, and dual-run where needed." />
        <Card title="Certify" description="Audit the work, publish the scorecard, and earn your tier." />
      </Section>

      <Section
        title="Governance"
        description="Balanced Council across V-D-P and academia. Public RFCs. Versioned releases. Neutral trademark policy."
        columns={2}
      >
        <Card title="Council oversight" description="One org = one vote. Releases are transparent and versioned." />
        <Card title="Open roadmap" description="Anyone can propose changes via RFCs; the community stewards the canon." />
      </Section>

      <section id="download">
        <Container className="flex flex-col gap-6 rounded-3xl border border-midnight/10 bg-white px-8 py-12 shadow-card sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-midnight">Download Channel OS Standard v1.0</h2>
            <p className="max-w-xl text-sm text-neutral">
              Get the complete reference, including canonical data objects, RACIs, and adapter blueprints.
            </p>
          </div>
          <CTAButton href="#" ariaLabel="Download the Channel OS Standard v1.0 PDF">
            Download v1.0
          </CTAButton>
        </Container>
      </section>

      <section id="assessment">
        <Container className="flex flex-col gap-8 rounded-3xl border border-midnight/10 bg-midnight px-8 py-12 text-cloud shadow-card">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cloud/70">Self-assessment</p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Score each item 0–2</h2>
            <p className="mt-3 max-w-2xl text-base text-cloud/80">
              0 = not in place, 1 = partial, 2 = consistent. You’ll get a simple profile and the right study group to join next.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {selfAssessmentQuestions.map((question) => (
              <Card key={question} title={question} className="!border-cloud/20 !bg-cloud/5 !text-cloud">
                <p className="text-sm text-cloud/80">Score: 0 · 1 · 2</p>
              </Card>
            ))}
          </div>
          <div className="grid gap-4 text-sm sm:grid-cols-3">
            <Card title="0–6" description="Foundations to build" className="!bg-cloud/5 !text-cloud !border-cloud/20" />
            <Card title="7–12" description="Operationalizing" className="!bg-cloud/5 !text-cloud !border-cloud/20" />
            <Card title="13–16" description="Channel OS-Ready" className="!bg-cloud/5 !text-cloud !border-cloud/20" />
          </div>
          <CTAButton href="/community" variant="secondary" className="self-start">
            Join the community study group that matches your lowest area
          </CTAButton>
        </Container>
      </section>
    </div>
  );
}
