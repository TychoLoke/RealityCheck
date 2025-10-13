import type { Metadata } from "next";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { CTAButton } from "../../components/CTAButton";
import { Embed } from "../../components/Embed";
import { Hero } from "../../components/Hero";
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
      <Hero
        eyebrow="Academy"
        title="From “I know the tools” to “I run the channel.”"
        description="Level up from foundations to leadership with 101 → 201 → 301 tracks that match how real channel teams operate."
        primaryCta={{ label: "Join the waitlist", href: "#waitlist" }}
        secondaryCta={{ label: "See the tracks", href: "#tracks" }}
        tertiaryCta={{ label: "Book an intro", href: "#waitlist" }}
        proofPoints={["Sales", "Technical", "Services/Ops", "Leadership"]}
      />

      <Section
        title="Levels"
        description="Each level builds on the previous one to make the operating system muscle memory."
        columns={3}
        cta={{ label: "Download the syllabus", href: "#waitlist", variant: "secondary" }}
      >
        <Card title="101 Foundations" description="Language, handoffs, and the OS layers." />
        <Card title="201 Orchestration" description="End-to-end execution with real artifacts and evidence." />
        <Card title="301 Revenue Integrity & Governance" description="Calculation graphs, lineage, residency, audit pack." />
      </Section>

      <Section
        id="tracks"
        title="Tracks"
        description="Pick the path that matches how you operate."
        columns={3}
        className="bg-graphite/60"
        cta={{ label: "Join the waitlist", href: "#waitlist", variant: "secondary" }}
      >
        {tracks.map((track) => (
          <Card key={track.title} title={track.title} description={track.description} />
        ))}
      </Section>

      <Section
        id="waitlist"
        title="Book an intro session"
        description="Meet the team behind the Academy, explore the curriculum, and map it to your operating goals."
        columns={1}
        cta={{ label: "Get Academy updates", href: "#waitlist", variant: "secondary" }}
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
