import type { Metadata } from "next";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { CTAButton } from "../../components/CTAButton";
import { Embed } from "../../components/Embed";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Channel OS Academy — From tools to operating",
  description: "101 → 201 → 301 pathways for Sales, Technical, Services/Ops, Finance/RevOps, Marketing, Leadership.",
};

const tracks = [
  { title: "Sales", description: "Turn co-sell chaos into an orchestrated playbook." },
  { title: "Technical (SE/Architect)", description: "Design integrations and adoption motions that stick." },
  { title: "Services/Ops", description: "Run delivery, MSP, and PSA workflows with shared data." },
  { title: "Finance/RevOps", description: "Rebates, incentives, forecasting, and revenue integrity." },
  { title: "Marketing", description: "Map MDF, demand, and partner campaigns to measurable outcomes." },
  { title: "Leadership", description: "Governance, talent density, and operating cadences that scale." },
];

export default function AcademyPage() {
  return (
    <div className="flex flex-col gap-16 pb-24">
      <section className="border-b border-midnight/10 bg-graphite py-16 sm:py-20">
        <Container className="flex flex-col gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral">Academy</span>
          <h1 className="text-3xl font-semibold text-midnight sm:text-4xl">From “I know the tools” to “I run the channel.”</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-neutral sm:text-xl">
            Operators don’t memorize platforms—they master systems. 101 → 201 → 301 maps directly to how high-performing teams run: demand → deal → delivery → settlement, with governance that holds up in audits.
          </p>
          <div className="flex flex-wrap gap-4">
            <CTAButton href="#waitlist">Join the Academy waitlist</CTAButton>
            <CTAButton href="#tracks" variant="secondary">
              See the tracks
            </CTAButton>
            <CTAButton href="#waitlist" variant="ghost">
              Book an intro session
            </CTAButton>
          </div>
        </Container>
      </section>

      <Section title="Levels" description="Each level builds on the previous one to make the operating system muscle memory." columns={3}>
        <Card title="101 Foundations" description="Language, handoffs, and the OS layers." />
        <Card title="201 Orchestration" description="End-to-end execution with real artifacts and evidence." />
        <Card title="301 Revenue Integrity & Governance" description="Calculation graphs, lineage, residency, audit pack." />
      </Section>

      <Section id="tracks" title="Tracks" description="Pick the path that matches how you operate." columns={3} className="bg-graphite/60">
        {tracks.map((track) => (
          <Card key={track.title} title={track.title} description={track.description} />
        ))}
      </Section>

      <Section
        id="waitlist"
        title="Book an intro session"
        description="Meet the team behind the Academy, explore the curriculum, and map it to your operating goals."
        columns={1}
      >
        <Embed
          html={process.env.NEXT_PUBLIC_FORMS_ACADEMY_EMBED}
          title="Academy intro or waitlist form"
          description="Drop in your booking or waitlist embed via .env.local."
        />
      </Section>
    </div>
  );
}
