import type { Metadata } from "next";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Embed } from "../../components/Embed";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Channel OS Academy",
  description: "Practitioner tracks for sales, technical, services, finance, marketing, and leadership roles in the channel.",
};

const tracks = [
  { title: "Sales", description: "Co-selling, co-marketing, and partner enablement orchestration." },
  { title: "Technical", description: "Solution design, integrations, and lifecycle adoption playbooks." },
  { title: "Services/Ops", description: "PSA, MSP, and managed services coordination across the channel." },
  { title: "Finance/RevOps", description: "Rebates, incentives, forecasting, and revenue integrity." },
  { title: "Marketing", description: "Joint campaigns, MDF, and demand motions built on shared data." },
  { title: "Leadership", description: "Governance, talent strategy, and executive alignment on SLAs." },
];

export default function AcademyPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="border-b border-white/10 bg-white/5 py-16 sm:py-20">
        <Container className="flex flex-col gap-6">
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">Channel OS Academy (Practitioners)</h1>
          <p className="max-w-3xl text-base leading-relaxed text-neutral sm:text-lg">
            Tracks: Sales, Technical, Services/Ops, Finance/RevOps, Marketing, Leadership.
          </p>
        </Container>
      </section>

      <Section title="Tracks" description="Role-based cohorts for every motion in the channel." columns={3}>
        {tracks.map((track) => (
          <Card key={track.title} title={track.title} description={track.description} />
        ))}
      </Section>

      <Section title="Pathways" description="Progression pathways build mastery across every discipline." columns={3}>
        <Card title="101 Foundations" description="Baseline channel fluency and vendor-neutral terminology across roles." />
        <Card title="201 Orchestration" description="Systems integration, joint planning, and lifecycle management across V-D-P." />
        <Card title="301 Financial Integrity & Governance" description="Advanced controls, rebates, and assurance for executive accountability." />
      </Section>

      <Section title="Certifications" description="Earn role-specific credentials recognized across Vendors, Distributors, and Partners." columns={2}>
        <Card title="People Certifications">
          <p className="text-sm leading-relaxed text-neutral">
            CCO-F, CCO-S, CCO-T, CCO-R, CCO-G, CCO-L — validated through exams, labs, and peer reviews to demonstrate channel
            orchestration excellence.
          </p>
        </Card>
        <Card title="Delivery Format">
          <p className="text-sm leading-relaxed text-neutral">
            Live cohorts delivered via Microsoft Teams. Materials and toolkits are provided as editable templates to embed into
            your operating system immediately.
          </p>
        </Card>
      </Section>

      <Section title="Waitlist" description="Reserve a seat for the next Academy intake." columns={1}>
        <Embed
          html={process.env.NEXT_PUBLIC_FORMS_ACADEMY_EMBED}
          title="Academy waitlist form"
          description="Add your Microsoft Forms or Tally embed to .env.local to enable signups."
        />
      </Section>
    </div>
  );
}
