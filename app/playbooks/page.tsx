import type { Metadata } from "next";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { CTAButton } from "../../components/CTAButton";
import { Hero } from "../../components/Hero";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Channel OS™ Playbooks & SOPs",
  description:
    "Operational Channel OS™ playbooks and SOPs for orchestration, rebates, and change management.",
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
    <div className="flex flex-col gap-20 pb-28 text-midnight sm:gap-24 sm:pb-36">
      <Hero
        eyebrow="Playbooks"
        title="Playbooks & SOPs"
        description="Preview the first wave of channel playbooks built on the Channel OS™ standard."
        primaryCta={{ label: "Subscribe for updates", href: "#updates" }}
        secondaryCta={{ label: "Review the Standard", href: "/standard" }}
        proofPoints={["Deal-to-Settlement", "Distributor Command Center", "Change Management"]}
      />

      <Section title="Coming soon" description="Preview the first wave of channel playbooks built on the Channel OS™ standard." columns={3}>
        {playbooks.map((title) => (
          <Card key={title} title={title} description="Coming soon" />
        ))}
      </Section>

      <section id="updates">
        <Container className="flex flex-col items-center gap-4 rounded-[var(--radius-xl)] border border-midnight/10 bg-cloud px-8 py-10 text-center text-midnight shadow-[0_32px_96px_-60px_rgba(11,14,26,0.2)]">
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
