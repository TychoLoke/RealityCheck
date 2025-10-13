import type { Metadata } from "next";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { CTAButton } from "../../components/CTAButton";
import { Embed } from "../../components/Embed";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Channel OS Council — One ecosystem, one table",
  description:
    "Balanced V-D-P governance, public RFCs, versioned releases, neutral by design.",
};

export default function CouncilPage() {
  return (
    <div className="flex flex-col gap-16 pb-24">
      <section className="border-b border-midnight/10 bg-graphite py-16 sm:py-20">
        <Container className="flex flex-col gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral">Council</span>
          <h1 className="text-3xl font-semibold text-midnight sm:text-4xl">One ecosystem, one table.</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-neutral sm:text-xl">
            The Council keeps Channel OS vendor-neutral and future-ready. Balanced seats for Vendors, Distributors, Partners/MSPs, and academia. One org = one vote. Public RFCs. Transparent releases. The standard belongs to the community, not a single company.
          </p>
          <div className="flex flex-wrap gap-4">
            <CTAButton href="#charter">Read the charter</CTAButton>
            <CTAButton href="#apply" variant="secondary">
              Apply to the Council
            </CTAButton>
            <CTAButton href="#apply" variant="ghost">
              Submit an RFC
            </CTAButton>
          </div>
        </Container>
      </section>

      <Section
        id="charter"
        title="Governance in practice"
        description="Checks and balances that keep Channel OS neutral, open, and accountable."
        columns={2}
      >
        <Card title="Representation" description="Balanced seats across Vendors, Distributors, Partners/MSPs, and academia." />
        <Card title="One org = one vote" description="No single company controls the roadmap or the certifications." />
        <Card title="Public RFCs" description="Anyone can propose changes. Every version ships with commentary and audit trails." />
        <Card title="Transparency" description="Meeting notes, SLA stewardship, and certification oversight are published to the community." />
      </Section>

      <Section id="apply" title="Apply or submit an RFC" description="Tell us how you want to contribute to the Council." columns={1}>
        <Embed
          html={process.env.NEXT_PUBLIC_FORMS_COUNCIL_EMBED}
          title="Council application or RFC form"
          description="Embed your form via .env.local to collect nominations and proposals."
        />
      </Section>
    </div>
  );
}
