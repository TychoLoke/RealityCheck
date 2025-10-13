import type { Metadata } from "next";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { CTAButton } from "../components/CTAButton";
import { Hero } from "../components/Hero";
import { Section } from "../components/Section";

export const metadata: Metadata = {
  title: "Channel OS — Where the Channel Learns, Works, and Wins.",
  description:
    "Vendor-neutral operating system for the channel (VDP). Community, open standard, and certifications that unify People, Process, Data, and Tools.",
};

const valuePillars = [
  {
    title: "Learn together.",
    description: "Study groups, Channel 101, and role paths that map to real jobs in the channel.",
  },
  {
    title: "Work the same way.",
    description: "Shared playbooks and practical SLAs—fewer disputes, faster approvals, accurate rebates.",
  },
  {
    title: "Win as a network.",
    description: "Badges for people, certifications for orgs, and a community that opens doors.",
  },
];

const osLayers = [
  { title: "People", description: "Skills that stick." },
  { title: "Process", description: "Clean handoffs." },
  { title: "Data", description: "One canon." },
  { title: "Tools", description: "Adapters, not lock-ins." },
];

const proofStrip = [
  "Vendor-neutral",
  "Open standard",
  "School & Academy",
  "Certifications",
  "Global community",
];

const slaPromises = [
  { label: "Approval", value: "≤ 48h" },
  { label: "Accuracy", value: "≥ 99.7%" },
  { label: "Freshness", value: "≤ 24h" },
  { label: "Conflict", value: "≤ 7 days" },
];

const journeyBand = [
  "Discover",
  "Learn",
  "Join",
  "Practice",
  "Certify",
  "Contribute",
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 pb-24">
      <Hero
        eyebrow="Channel OS"
        title="The vendor-neutral operating system for the channel (VDP)"
        tagline="Where the Channel Learns, Works, and Wins."
        description="Channel OS turns channel chaos into a community of practice. Vendors, Distributors, and Partners learn the same language, run the same plays, and certify the same habits."
        primaryCta={{ label: "Start Channel 101 (Free)", href: "/school" }}
        secondaryCta={{ label: "Join the Community", href: "/community" }}
        tertiaryCta={{ label: "Read the Standard v1.0", href: "/standard" }}
      />

      <section>
        <Container className="relative overflow-hidden rounded-3xl border border-midnight/10 bg-white px-8 py-12 shadow-card">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(11,14,26,0.08),transparent_55%)]" />
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral">Opening story</p>
            <h2 className="text-2xl font-semibold text-midnight sm:text-3xl">
              Most channels move fast—but rarely together.
            </h2>
            <p className="max-w-4xl text-base leading-relaxed text-neutral sm:text-lg">
              Channel OS turns that chaos into a community of practice. We learn the same language (People • Process • Data • Tools), work the same plays, and certify the habits that keep Vendors, Distributors, and Partners in sync. It’s not another tool. It’s a way of working—open, neutral, and shared.
            </p>
          </div>
        </Container>
      </section>

      <Section
        eyebrow="Value pillars"
        title="Learn together. Work the same way. Win as a network."
        description="The operating system spans how the channel learns, runs, and proves impact."
      >
        {valuePillars.map((pillar) => (
          <Card key={pillar.title} title={pillar.title} description={pillar.description} />
        ))}
      </Section>

      <Section
        eyebrow="OS layers"
        title="Every layer speaks the same language"
        description="People • Process • Data • Tools — each with a clear operating promise."
        columns={4}
        className="bg-graphite/60"
      >
        {osLayers.map((layer) => (
          <Card key={layer.title} title={layer.title} description={layer.description} />
        ))}
      </Section>

      <section>
        <Container className="rounded-3xl border border-midnight/10 bg-midnight px-6 py-8 text-cloud shadow-card">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold uppercase tracking-[0.26em]">
            {proofStrip.map((item) => (
              <span key={item} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-cloud" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="grid gap-6 rounded-3xl border border-midnight/10 bg-white px-8 py-12 shadow-card sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-neutral">SLAs we teach & certify</p>
          </div>
          {slaPromises.map((item) => (
            <div key={item.label} className="flex flex-col gap-2 rounded-2xl bg-graphite/80 px-6 py-6 text-midnight">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral">{item.label}</span>
              <span className="text-3xl font-semibold text-midnight">{item.value}</span>
            </div>
          ))}
        </Container>
      </section>

      <section>
        <Container className="flex flex-col gap-6 rounded-3xl border border-midnight/10 bg-white px-8 py-12 text-center shadow-card">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral">Channel OS journey</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold uppercase tracking-[0.3em] text-midnight">
            {journeyBand.map((step, index) => (
              <div key={step} className="flex items-center gap-3">
                <span>{step}</span>
                {index < journeyBand.length - 1 ? (
                  <span aria-hidden="true" className="text-neutral">
                    →
                  </span>
                ) : null}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <CTAButton href="/standard" variant="secondary">
              Discover the Standard v1.0
            </CTAButton>
            <CTAButton href="/community">Join the Community</CTAButton>
          </div>
        </Container>
      </section>
    </div>
  );
}
