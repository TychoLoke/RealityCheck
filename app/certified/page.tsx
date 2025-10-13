import type { Metadata } from "next";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { CTAButton } from "../../components/CTAButton";
import { Embed } from "../../components/Embed";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Certification",
  description:
    "Badges that mean business. Certify people, organizations, and platforms against Channel OS SLAs, process conformance, and skill density.",
};

export default function CertifiedPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="border-b border-white/10 bg-graphite/70 py-16 sm:py-20">
        <Container className="flex flex-col gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-accentTeal">Certified</span>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">Badges that mean business.</h1>
          <p className="max-w-3xl text-base leading-relaxed text-neutral sm:text-lg">
            A badge should tell a story: this person works the way modern channels work. People, organizations, and adapters
            all certify against the same canon, SLAs, and operating habits.
          </p>
          <div className="flex flex-wrap gap-4">
            <CTAButton href="#waitlist">Get certified</CTAButton>
            <CTAButton href="#tracks" variant="secondary">
              Nominate your organization
            </CTAButton>
          </div>
        </Container>
      </section>

      <Section
        id="tracks"
        title="Certification tracks"
        description="Select the pathway that matches your role in the ecosystem."
        columns={3}
      >
        <Card
          title="People"
          description="CCO-F, CCO-S, CCO-T, CCO-R, CCO-G, CCO-L — exams, labs, and peer review to validate modern channel operations."
        />
        <Card
          title="Organizations"
          description="Channel OS Certified (Silver/Gold/Platinum) measured by SLAs, process conformance, and skill density."
        />
        <Card
          title="Platforms & adapters"
          description="Channel OS Compatible — pass the conformance tests; no pay-to-pass."
        />
      </Section>

      <Section
        title="What certification unlocks"
        description="Make excellence visible and auditable across the ecosystem."
        columns={3}
      >
        <Card title="Trust" description="Rebates, settlements, and incentives that finance can attest without a firefight." />
        <Card title="Consistency" description="Shared objects and SLAs keep every handoff explainable and auditable." />
        <Card title="Talent density" description="Certified people, certified orgs, and certified adapters compound into faster wins." />
      </Section>

      <Section id="waitlist" title="Waitlist" description="Signal interest for upcoming certification windows." columns={1}>
        <Embed
          html={process.env.NEXT_PUBLIC_FORMS_CERTIFIED_EMBED}
          title="Certification waitlist form"
          description="Embed your waitlist form via .env.local."
        />
      </Section>
    </div>
  );
}
