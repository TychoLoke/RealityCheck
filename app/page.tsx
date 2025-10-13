import type { Metadata } from "next";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { CTAButton } from "../components/CTAButton";
import { Hero } from "../components/Hero";
import { Section } from "../components/Section";

type SectionCard = {
  title: string;
  description?: string;
  content?: string[];
  cta?: {
    href: string;
    label: string;
    variant?: "primary" | "secondary" | "ghost";
  };
};

export const metadata: Metadata = {
  title: "Home",
  description:
    "Channel OS is the vendor-neutral operating system for the channel. It standardizes how Vendors, Distributors, and Partners learn, work, and measure success.",
};

const quickActions = [
  { label: "Start Channel 101 (Free)", href: "/school" },
  { label: "Read the Standard v1.0", href: "/standard", variant: "secondary" as const },
  { label: "Join the Council", href: "/council", variant: "ghost" as const },
];

const valueStories: SectionCard[] = [
  {
    title: "Reduce integration debt.",
    description:
      "Stop paying a hidden tax on every deal. We standardize the words, workflows, and data that keep V-D-P aligned.",
  },
  {
    title: "Improve revenue integrity.",
    description:
      "Accuracy isn’t a nice-to-have; it’s trust. We teach and certify the habits that make rebates and settlements attestable.",
  },
  {
    title: "Build talent pipelines.",
    description:
      "The channel thrives when people do. School → Academy → Certified orgs—your ecosystem gets stronger with every cohort.",
  },
];

const osLayers: SectionCard[] = [
  { title: "People", description: "Skills that stick, roles that click, paths that grow." },
  { title: "Process", description: "From demand to settlement, no dropped threads." },
  { title: "Data", description: "One canon of objects, one truth everyone can share." },
  { title: "Tools", description: "Adapters, not lock-ins; your stack, made coherent." },
];

const standardMoments: SectionCard[] = [
  { title: "Before", description: "Sales wins a deal; services can’t see it; finance disputes the numbers." },
  { title: "During", description: "Clear roles, shared objects, visible handoffs, tracked SLAs." },
  { title: "After", description: "Every deal and rebate is explainable—once, correctly, auditable." },
];

const canonDetails: SectionCard[] = [
  {
    title: "Objects",
    content: [
      "Partner",
      "Program",
      "Deal",
      "Incentive",
      "Inventory",
      "Entitlement",
      "Ticket",
      "Invoice",
      "Renewal",
      "Lineage",
      "Access Policy",
    ],
  },
  {
    title: "SLAs we teach & certify",
    content: [
      "Deal-reg approval ≤ 48h",
      "Rebate accuracy ≥ 99.7%",
      "Sales-out freshness ≤ 24h",
      "Conflict cycle time ≤ 7 days",
    ],
  },
];

const principles: SectionCard[] = [
  {
    title: "The pledge",
    description:
      "Vendor-neutral by design. Community-driven by choice. Versioned in the open. No tool favoritism—ever.",
  },
  {
    title: "Every deal, every rebate—explained.",
    description:
      "We obsess over explainability so compliance, finance, and operations never fight the data again.",
  },
  {
    title: "Stop guessing. Start operating.",
    description:
      "Channel OS replaces folklore with shared language, practiced habits, and accountability you can audit.",
  },
];

const nextSteps: SectionCard[] = [
  {
    title: "Download Standard v1.0",
    description: "The reference manual for people, process, and data alignment.",
    cta: { href: "/standard", label: "Download the Standard v1.0", variant: "secondary" },
  },
  {
    title: "Take the 5-minute self-assessment",
    description: "Score your org across people, process, data, and tools to see where to start.",
    cta: { href: "/apply", label: "Start the assessment", variant: "secondary" },
  },
  {
    title: "Join the Academy waitlist",
    description: "Level practitioners into operators with the 201 and 301 curricula.",
    cta: { href: "/academy", label: "Join the waitlist", variant: "secondary" },
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      <Hero
        eyebrow="Home — the story people meet first"
        title="The vendor-neutral operating system for the channel (VDP)"
        tagline="Where the Channel Learns, Works, and Wins."
        description="Most channels run on exports, emails, and best guesses. Vendors, distributors, and partners all move fast—yet rarely move together. Channel OS is the calm in that chaos: a shared language, a set of habits, and a school that turns people into practitioners. It’s not “another tool.” It’s the way the channel runs—so everyone learns faster, works cleaner, and wins more often."
        primaryCta={{ label: "Start Channel 101 (Free)", href: "/school" }}
        secondaryCta={{ label: "Read the Standard v1.0", href: "/standard" }}
      />

      <section className="-mt-6">
        <Container className="flex flex-wrap items-center justify-center gap-4 rounded-3xl border border-midnight/10 bg-white px-6 py-6 text-sm shadow-card sm:flex-nowrap">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.24em] text-neutral">
            Start · Read · Join
          </p>
          <div className="flex flex-1 flex-wrap justify-center gap-3 sm:justify-end">
            {quickActions.map(({ label, href, variant }) => (
              <CTAButton
                key={href}
                href={href}
                variant={variant}
              >
                {label}
              </CTAButton>
            ))}
          </div>
        </Container>
      </section>

      <Section
        title="Value, told through the work"
        description="Stories from the channel edge. Every card is a habit we teach and certify."
      >
        {valueStories.map((story) => (
          <Card key={story.title} title={story.title} description={story.description} />
        ))}
      </Section>

      <Section
        title="The OS layers (as a journey)"
        description="Channel ambition becomes repeatable when people, process, data, and tools move together."
        columns={2}
      >
        {osLayers.map((layer) => (
          <Card key={layer.title} title={layer.title} description={layer.description} />
        ))}
      </Section>

      <Section
        eyebrow="Standard v1.0 — the “why” and the “how”"
        title="Channel ambition, made repeatable"
        description="Channel OS is a vendor-neutral framework that turns channel ambition into repeatable outcomes. It unites people, process, and data so your tools finally make sense."
        columns={3}
      >
        {standardMoments.map((moment) => (
          <Card key={moment.title} title={moment.title} description={moment.description} />
        ))}
      </Section>

      <Section columns={2} title="The canon everyone can trust">
        {canonDetails.map((item) => (
          <Card key={item.title} title={item.title}>
            <ul className="list-disc space-y-2 pl-5 text-sm text-neutral">
              {item.content?.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </Card>
        ))}
      </Section>

      <Section columns={3} title="Principles that keep us honest">
        {principles.map((principle) => (
          <Card key={principle.title} title={principle.title} description={principle.description} />
        ))}
      </Section>

      <Section columns={3} title="Next steps" description="Pick the move that unlocks your next win.">
        {nextSteps.map(({ title, description, cta }) => (
          <Card key={title} title={title} description={description}>
            {cta ? (
              <CTAButton href={cta.href} variant={cta.variant}>
                {cta.label}
              </CTAButton>
            ) : null}
          </Card>
        ))}
      </Section>

      <section className="pb-20">
        <Container className="rounded-3xl border border-midnight/10 bg-graphite px-8 py-12 text-center shadow-card">
          <h2 className="text-2xl font-semibold text-midnight sm:text-3xl">Journal — earn trust, week by week</h2>
          <p className="mt-4 text-base text-neutral">
            Short, practical, and repeatable. Every post ends with a template or checklist.
          </p>
          <div className="mt-6 flex justify-center">
            <CTAButton href="/newsletter">Sign up for the Journal</CTAButton>
          </div>
        </Container>
      </section>
    </div>
  );
}
