import type { Metadata } from "next";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { CTAButton } from "../../components/CTAButton";
import { Embed } from "../../components/Embed";
import { Hero } from "../../components/Hero";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Channel OS™ Certifications — People, organizations, platforms",
  description:
    "Channel OS™ certifications deliver badges that mean business. Org tiers are measured by SLA performance and platform compatibility via public tests.",
};

const peopleBadges = [
  "CCO-F (Foundations)",
  "CCO-S (Sales)",
  "CCO-T (Technical)",
  "CCO-R (Revenue Integrity)",
  "CCO-G (Governance)",
  "CCO-L (Leadership)",
];

const slaPledge = [
  { label: "Approval", value: "≤ 48h" },
  { label: "Accuracy", value: "≥ 99.7%" },
  { label: "Freshness", value: "≤ 24h" },
  { label: "Conflict", value: "≤ 7 days" },
];

const successMetric = {
  title: "Case: Atlas Networks",
  metric: "Rebate disputes ↓ 62%",
  detail: "Certified as Gold in 2023 after dual-running incentives across CRM + ERP stack.",
};

export default function CertifiedPage() {
  return (
    <div className="flex flex-col gap-16 pb-24 text-midnight">
      <Hero
        eyebrow="Certified"
        title="Badges that mean business."
        description="People, organizations, and platforms prove they run the Channel OS™ playbook—and publish the evidence."
        primaryCta={{ label: "Start your certification", href: "#waitlist" }}
        secondaryCta={{ label: "Nominate your organization", href: "#organizations" }}
        tertiaryCta={{ label: "See compatibility criteria", href: "#platforms" }}
        proofPoints={["People badges", "Org certification", "Platform compatibility"]}
      />

      <Section
        title="People badges"
        description="Operators prove the work through exams, labs, and peer review."
        columns={3}
        cta={{ label: "View exam guide", href: "#waitlist", variant: "primary" }}
      >
        <Card title="Badge roster">
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral">
            {peopleBadges.map((badge) => (
              <li key={badge}>{badge}</li>
            ))}
          </ul>
        </Card>
        <Card title="What it proves" description="Operators run the Channel OS™ plays with evidence—handoffs, data lineage, and revenue integrity." />
        <Card title="How it happens" description="Scenario-based exams, lab submissions, and peer endorsements inside the community." />
      </Section>

      <Section
        id="organizations"
        title="Organization certification"
        description="Measured by SLA performance, process conformance, and skill density."
        columns={2}
        className="bg-graphite"
        cta={{ label: "Download the org scorecard", href: "#waitlist", variant: "primary" }}
      >
        <Card title="Silver → Gold → Platinum" description="Scorecards publish SLA attainment, process coverage, and certified talent ratios." />
        <Card title="Evidence pack" description="Dual-run results, lineage proofs, and governance cadences show the work." />
      </Section>

      <Section
        id="platforms"
        title="Platform compatibility"
        description="Public conformance tests; multiple stacks can qualify; no pay-to-pass."
        columns={2}
        cta={{ label: "Access the test suite", href: "#waitlist", variant: "primary" }}
      >
        <Card title="Reference adapters" description="CRM, ERP, PSA, and incentive adapters that align to the canonical objects." />
        <Card title="Test once, publish results" description="Pass the public tests and share your badge. Operators can trust the integration before they buy." />
      </Section>

      <Container className="-mt-6 max-w-3xl rounded-2xl border border-midnight/10 bg-cloud px-6 py-4 text-sm text-neutral shadow-sm">
        “Channel OS™ Certified” and “Channel OS™ Compatible” are controlled names. Use requires passing criteria and written
        confirmation under the Trademark & Brand Use Policy.
      </Container>

      <section>
        <Container className="grid gap-8 rounded-3xl border border-midnight/10 bg-graphite px-8 py-12 shadow-[0_24px_64px_-48px_rgba(12,15,27,0.2)] md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral">SLA pledge</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {slaPledge.map((item) => (
                <div key={item.label} className="rounded-2xl border border-midnight/10 bg-graphite/80 p-4 text-center text-midnight">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral">{item.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-midnight">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <Card title={successMetric.title}>
            <p className="text-2xl font-semibold text-midnight">{successMetric.metric}</p>
            <p className="mt-3 text-sm text-neutral">{successMetric.detail}</p>
          </Card>
        </Container>
      </section>

      <Section id="waitlist" title="Get started" description="Tell us who you are and which badge or certification you’re targeting." columns={1}>
        <Embed
          html={process.env.NEXT_PUBLIC_FORMS_CERTIFIED_EMBED}
          title="Certification interest form"
          description="Embed your waitlist or application form in .env.local."
        />
      </Section>
    </div>
  );
}
