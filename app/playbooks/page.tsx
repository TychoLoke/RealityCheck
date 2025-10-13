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
    <div className="flex flex-col gap-12 text-graphite">
      <section className="border-b border-graphite/15 bg-gradient-to-b from-midnight via-[#101a31] to-midnight py-16 sm:py-20">
        <Container className="flex flex-col gap-6">
          <h1 className="text-3xl font-semibold sm:text-4xl">Playbooks & SOPs</h1>
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
        <Container className="flex flex-col items-center gap-4 rounded-3xl border border-graphite/20 bg-midnight/70 px-8 py-10 text-center shadow-[0_24px_64px_-48px_rgba(6,9,18,0.85)]">
          <h2 className="text-2xl font-semibold">Subscribe for updates</h2>
          <p className="max-w-2xl text-sm text-neutral">
            Get notified when new playbooks and SOPs are released.
          </p>
          <CTAButton href="/newsletter">Subscribe to the Journal</CTAButton>
        </Container>
      </section>
    </div>
  );
}
