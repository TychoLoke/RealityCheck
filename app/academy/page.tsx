import type { Metadata } from "next";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { CTAButton } from "../../components/CTAButton";
import { Embed } from "../../components/Embed";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Channel OS Academy",
  description:
    "Turn practitioners into operators. Progress through 101, 201, and 301 levels across sales, technical, services, finance, marketing, and leadership tracks.",
};

const roleTracks = [
  { title: "Sales", description: "Co-selling, co-marketing, and partner enablement orchestration." },
  { title: "Technical (SE/Architect)", description: "Solution design, integrations, and lifecycle adoption playbooks." },
  { title: "Services/Ops", description: "PSA, MSP, and managed services coordination across the channel." },
  { title: "Finance/RevOps", description: "Rebates, incentives, forecasting, and revenue integrity." },
  { title: "Marketing", description: "Joint campaigns, MDF, and demand motions built on shared data." },
  { title: "Leadership", description: "Governance, talent strategy, and executive alignment on SLAs." },
];

export default function AcademyPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="border-b border-white/10 bg-graphite/70 py-16 sm:py-20">
        <Container className="flex flex-col gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-accentTeal">Academy</span>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">From “I know the tools” to “I run the channel.”</h1>
          <p className="max-w-3xl text-base leading-relaxed text-neutral sm:text-lg">
            Great operators don’t memorize platforms—they master systems. The Academy levels move practitioners from shared
            language to orchestration to financial integrity and governance.
          </p>
          <div className="flex flex-wrap gap-4">
            <CTAButton href="#waitlist" ariaLabel="Academy waitlist">
              Join the Academy waitlist
            </CTAButton>
            <CTAButton href="#levels" variant="secondary">
              See the 201/301 curricula
            </CTAButton>
          </div>
        </Container>
      </section>

      <Section
        id="levels"
        title="Levels"
        description="Every cohort builds on the last: shared language, orchestrated execution, and audit-ready integrity."
        columns={3}
      >
        <Card title="101 Foundations" description="Common language, clean handoffs." />
        <Card title="201 Orchestration" description="End-to-end flow: demand → deal → delivery → settlement." />
        <Card title="301 Financial Integrity & Governance" description="Calculation graphs, lineage, residency, audit artifacts." />
      </Section>

      <Section title="Role tracks" description="Pick the track that maps to how you operate in the channel." columns={3}>
        {roleTracks.map((track) => (
          <Card key={track.title} title={track.title} description={track.description} />
        ))}
      </Section>

      <Section
        title="Certifications"
        description="Badges that prove you can run the channel the modern way."
        columns={2}
      >
        <Card title="People" description="CCO-F, CCO-S, CCO-T, CCO-R, CCO-G, CCO-L — validated through exams, labs, and peer reviews." />
        <Card title="Organizations & adapters" description="Channel OS Certified tiers and Channel OS Compatible status benchmark SLAs, process conformance, and interoperability." />
      </Section>

      <Section id="waitlist" title="Waitlist" description="Reserve a seat for the next Academy intake." columns={1}>
        <Embed
          html={process.env.NEXT_PUBLIC_FORMS_ACADEMY_EMBED}
          title="Academy waitlist form"
          description="Add your Microsoft Forms or Tally embed to .env.local to enable signups."
        />
      </Section>
    </div>
  );
}
