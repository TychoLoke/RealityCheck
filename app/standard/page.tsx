import type { Metadata } from "next";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { CTAButton } from "../../components/CTAButton";
import { Hero } from "../../components/Hero";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Channel OS Standard v1.0 — People • Process • Data • Tools",
  description:
    "A vendor-neutral framework with canonical objects and practical SLAs: approval ≤ 48h, accuracy ≥ 99.7%, freshness ≤ 24h, conflict ≤ 7 days.",
};

const beforeAfter = [
  { title: "Before", description: "Exports, email threads, finger-pointing." },
  { title: "After", description: "Shared objects, visible approvals, measurable SLAs, faster settlement." },
];

const layerDetails = [
  {
    title: "People",
    promise: "Skills stay verified.",
    objects: ["Role map", "Skill matrix", "CCO badges"],
    sla: "Certification currency ≤ 12 months",
  },
  {
    title: "Process",
    promise: "Handoffs stay clean.",
    objects: ["Demand → Deal", "Co-sell → Delivery", "Settlement playbooks"],
    sla: "Deal-reg approval ≤ 48h",
  },
  {
    title: "Data",
    promise: "Numbers stay trusted.",
    objects: ["Deal", "Incentive", "Inventory", "Lineage"],
    sla: "Sales-out freshness ≤ 24h",
  },
  {
    title: "Tools",
    promise: "Stacks stay open.",
    objects: ["CRM adapters", "ERP bridges", "PSA kits"],
    sla: "Dual-run variance ≤ 0.3%",
  },
];

const slaPledge = [
  { label: "Approval", value: "≤ 48h" },
  { label: "Accuracy", value: "≥ 99.7%" },
  { label: "Freshness", value: "≤ 24h" },
  { label: "Conflict", value: "≤ 7 days" },
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
      <Hero
        eyebrow="Standard v1.0"
        title="Channel OS Standard v1.0"
        description="The open, vendor-neutral framework that keeps channel teams honest to the same SLAs."
        primaryCta={{ label: "Download v1.0", href: "#download" }}
        secondaryCta={{ label: "Take the self-assessment", href: "#assessment" }}
        tertiaryCta={{ label: "Join a study group", href: "/community" }}
        proofPoints={["Canonical objects", "Practical SLAs", "Versioned releases"]}
      />

      <Section
        title="The four layers"
        description="Every layer reinforces the others so the channel can scale without losing signal."
        columns={2}
        cta={{ label: "Browse the full schema", href: "#download", variant: "secondary" }}
      >
        {layerDetails.map((layer) => (
          <Card key={layer.title} title={layer.title}>
            <p className="text-sm font-semibold text-midnight">{layer.promise}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral">
              {layer.objects.map((object) => (
                <li key={object}>{object}</li>
              ))}
            </ul>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.28em] text-neutral">SLA → {layer.sla}</p>
          </Card>
        ))}
      </Section>

      <Section
        title="Transformation"
        description="Before the OS you negotiate every handoff. After, you certify the proof."
        columns={2}
        cta={{ label: "Share this with your leadership", href: "/certified", variant: "secondary" }}
      >
        {beforeAfter.map((item) => (
          <Card key={item.title} title={item.title} description={item.description} />
        ))}
      </Section>

      <section>
        <Container className="flex flex-col gap-6 rounded-3xl border border-midnight/10 bg-midnight px-8 py-12 text-cloud shadow-card">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cloud/80">SLA pledge</p>
          <div className="grid gap-4 sm:grid-cols-4">
            {slaPledge.map((item) => (
              <div key={item.label} className="rounded-2xl border border-cloud/10 bg-cloud/10 px-5 py-4 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cloud/70">{item.label}</p>
                <p className="mt-2 text-2xl font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
          <CTAButton href="/certified" variant="secondary" className="self-start">
            See how certifications enforce the pledge
          </CTAButton>
        </Container>
      </section>

      <Section
        title="Conformance path"
        description="Self-assessment → study group to close gaps → lab evidence → audit → org certification. Platform compatibility via public tests—no pay-to-pass."
        columns={3}
        cta={{ label: "Get certified", href: "/certified" }}
      >
        <Card title="Self-assess" description="Score your maturity and find the gaps." />
        <Card title="Prove it" description="Run the labs, capture evidence, and dual-run where needed." />
        <Card title="Certify" description="Audit the work, publish the scorecard, and earn your tier." />
      </Section>

      <Section
        title="Governance"
        description="Balanced Council across V-D-P and academia. Public RFCs. Versioned releases. Neutral trademark policy."
        columns={2}
        cta={{ label: "Apply to the Council", href: "/council", variant: "secondary" }}
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
