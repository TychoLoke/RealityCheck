import type { Metadata } from "next";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { CTAButton } from "../../components/CTAButton";
import { Embed } from "../../components/Embed";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Channel OS Certifications — People, organizations, platforms",
  description:
    "Badges that mean business. Org certifications by SLA performance. Platform compatibility via public tests.",
};

const peopleBadges = [
  "CCO-F (Foundations)",
  "CCO-S (Sales)",
  "CCO-T (Technical)",
  "CCO-R (Revenue Integrity)",
  "CCO-G (Governance)",
  "CCO-L (Leadership)",
];

export default function CertifiedPage() {
  return (
    <div className="flex flex-col gap-16 pb-24">
      <section className="border-b border-midnight/10 bg-graphite py-16 sm:py-20">
        <Container className="flex flex-col gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral">Certified</span>
          <h1 className="text-3xl font-semibold text-midnight sm:text-4xl">Badges that mean business.</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-neutral sm:text-xl">
            We certify how you work—not what you bought. People earn CCO badges; organizations earn Silver/Gold/Platinum by living the SLAs; platforms earn “Channel OS Compatible” by passing conformance tests.
          </p>
          <div className="flex flex-wrap gap-4">
            <CTAButton href="#waitlist">Get certified</CTAButton>
            <CTAButton href="#organizations" variant="secondary">
              Nominate your organization
            </CTAButton>
            <CTAButton href="#platforms" variant="ghost">
              See compatibility criteria
            </CTAButton>
          </div>
        </Container>
      </section>

      <Section title="People badges" description="Operators prove the work through exams, labs, and peer review." columns={3}>
        <Card title="Badge roster">
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral">
            {peopleBadges.map((badge) => (
              <li key={badge}>{badge}</li>
            ))}
          </ul>
        </Card>
        <Card title="What it proves" description="You can run the channel the modern way: clean handoffs, auditable data, explainable revenue." />
        <Card title="How it happens" description="Assessments blend scenario design, labs, and community endorsement." />
      </Section>

      <Section
        id="organizations"
        title="Organization certification"
        description="Measured by SLA performance, process conformance, and skill density."
        columns={2}
        className="bg-graphite/60"
      >
        <Card title="Silver → Gold → Platinum" description="Scorecards publish SLA attainment, process coverage, and certified talent ratios." />
        <Card title="Evidence pack" description="Dual-run results, lineage proofs, and governance cadences show the work."></Card>
      </Section>

      <Section
        id="platforms"
        title="Platform compatibility"
        description="Public conformance tests; multiple stacks can qualify; no pay-to-pass."
        columns={2}
      >
        <Card title="Reference adapters" description="CRM, ERP, PSA, and incentive adapters that align to the canonical objects." />
        <Card title="Test once, publish results" description="Pass the public tests and share your badge. Operators can trust the integration before they buy." />
      </Section>

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
