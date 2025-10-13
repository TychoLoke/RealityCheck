import type { Metadata } from "next";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { CTAButton } from "../../components/CTAButton";
import { Embed } from "../../components/Embed";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Channel OS Council",
  description:
    "One ecosystem, one table. Balanced seats for Vendors, Distributors, Partners/MSPs, and academia stewarding the Channel OS standard.",
};

export default function CouncilPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="border-b border-midnight/10 bg-graphite py-16 sm:py-20">
        <Container className="flex flex-col gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-accentTeal">Council</span>
          <h1 className="text-3xl font-semibold text-midnight sm:text-4xl">One ecosystem, one table.</h1>
          <p className="max-w-3xl text-base leading-relaxed text-neutral sm:text-lg">
            The Council keeps Channel OS vendor-neutral and future-ready. Balanced seats for Vendors, Distributors, Partners/MSPs,
            and academia. One org = one vote. Public RFCs. Transparent releases. The standard belongs to the channel, not a company.
          </p>
          <div className="flex flex-wrap gap-4">
            <CTAButton href="#charter">Read the charter</CTAButton>
            <CTAButton href="#apply" variant="secondary">
              Apply to join
            </CTAButton>
          </div>
        </Container>
      </section>

      <Section
        id="charter"
        title="Charter"
        description="Principles that keep the Channel OS standard open and accountable."
        columns={2}
      >
        <Card title="Representation" description="Balanced seats across Vendors, Distributors, Partners/MSPs, and academia. One org = one vote." />
        <Card title="Governance" description="Public RFCs with transparent releases. Meeting notes and outcomes are published to the community." />
        <Card title="Neutrality" description="Vendor-neutral by design. Community-driven by choice. Versioned in the open. No tool favoritism—ever." />
        <Card title="Accountability" description="SLA stewardship, certification oversight, and version management anchored in public feedback." />
      </Section>

      <Section id="apply" title="Apply" description="Nominate your organization to take part in the Channel OS Council." columns={1}>
        <Embed
          html={process.env.NEXT_PUBLIC_FORMS_COUNCIL_EMBED}
          title="Council application form"
          description="Paste your council application embed snippet into .env.local."
        />
      </Section>
    </div>
  );
}
