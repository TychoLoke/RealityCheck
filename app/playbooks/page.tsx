import type { Metadata } from "next";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { CTAButton } from "../../components/CTAButton";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Playbooks & SOPs",
  description: "Operational playbooks and SOPs for channel orchestration, rebates, and change management.",
};

const playbooks = [
  "Deal-to-Settlement",
  "Distributor Command Center",
  "Rebate Variance",
  "PSA Bridge",
  "Change Management",
];

export default function PlaybooksPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="border-b border-midnight/10 bg-graphite py-16 sm:py-20">
        <Container className="flex flex-col gap-6">
          <h1 className="text-3xl font-semibold text-midnight sm:text-4xl">Playbooks & SOPs</h1>
          <p className="max-w-3xl text-base leading-relaxed text-neutral sm:text-lg">
            Cards (Coming soon): Deal-to-Settlement, Distributor Command Center, Rebate Variance, PSA Bridge, Change Management.
          </p>
        </Container>
      </section>

      <Section title="Coming Soon" description="Preview the first wave of channel playbooks built on the Channel OS standard." columns={3}>
        {playbooks.map((title) => (
          <Card key={title} title={title} description="Coming soon" />
        ))}
      </Section>

      <section className="pb-20">
        <Container className="flex flex-col items-center gap-4 rounded-3xl border border-midnight/10 bg-graphite px-8 py-10 text-center shadow-card">
          <h2 className="text-2xl font-semibold text-midnight">Subscribe for updates</h2>
          <p className="max-w-2xl text-sm text-neutral">
            Get notified when new playbooks and SOPs are released.
          </p>
          <CTAButton href="/newsletter">Subscribe to the Journal</CTAButton>
        </Container>
      </section>
    </div>
  );
}
