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
  { label: "Begin Channel 101 (Free)", href: "/school" },
  { label: "Explore the Standard v1.0", href: "/standard", variant: "secondary" as const },
  { label: "Introduce us to your council", href: "/council", variant: "ghost" as const },
];

const narrativeBeats: SectionCard[] = [
  {
    title: "Bring the channel around one table.",
    description:
      "We align Vendors, Distributors, and Partners on a shared vocabulary in the first week, so every deck, deal, and dashboard starts with the same nouns.",
  },
  {
    title: "Turn tribal knowledge into plays.",
    description:
      "Operators capture the real steps behind approvals, handoffs, and escalations. The result: documented plays you can teach, rehearse, and certify.",
  },
  {
    title: "Measure trust as a leading indicator.",
    description:
      "Shared scorecards and evidence trails mean finance, compliance, and field teams rely on the same story—and defend it when the audit comes.",
  },
];

const transformationTimeline: SectionCard[] = [
  {
    title: "Day 0 · Map the chaos",
    description:
      "We audit every handoff, tool, and spreadsheet. Pain points stop living in group chats; they surface in a roadmap everyone can see.",
  },
  {
    title: "Week 4 · Plays replace panic",
    description:
      "Playbooks, SLAs, and shared rituals roll out across enablement, distribution, and partner success. Fire drills become rehearsed moments.",
  },
  {
    title: "Quarter 2 · Revenue you can defend",
    description:
      "Rebates reconcile, renewals forecast cleanly, and you can explain every dollar in under five minutes. That’s the operating promise.",
  },
];

const valueStories: SectionCard[] = [
  {
    title: "No more integration IOUs.",
    description:
      "Standard data objects remove bespoke exports and heroic spreadsheets. The ecosystem finally shares one view of the customer journey.",
  },
  {
    title: "Pipeline with provenance.",
    description:
      "Deal, incentive, and entitlement records carry context from source to settlement. Leaders coach the story instead of questioning it.",
  },
  {
    title: "People graduate into operators.",
    description:
      "Talent pipelines grow from school to academy to certified teams. Each cohort scales the culture of operational excellence.",
  },
];

const osLayers: SectionCard[] = [
  { title: "People", description: "Role clarity, certifications, and coaching cadences that keep skill in market." },
  { title: "Process", description: "Joint plays and SLAs that remove the guesswork from every handoff." },
  { title: "Data", description: "Canonical objects, shared definitions, and evidence baked into the workflow." },
  { title: "Tools", description: "Adapters and automations that make your existing stack feel orchestrated, not bolted on." },
];

const standardMoments: SectionCard[] = [
  { title: "Before", description: "Siloed spreadsheets, disputed rebates, and every quarter starts from scratch." },
  { title: "During", description: "Cross-functional rituals, teachable plays, and shared dashboards that update themselves." },
  { title: "After", description: "Explainable deals, auditable incentives, and teams who trust the numbers." },
];

const canonDetails: SectionCard[] = [
  {
    title: "Objects in the Channel Canon",
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
    title: "Operational promises we certify",
    content: [
      "Deal-reg approval ≤ 48h",
      "Rebate accuracy ≥ 99.7%",
      "Sales-out freshness ≤ 24h",
      "Conflict cycle time ≤ 7 days",
    ],
  },
  {
    title: "Rhythms we install",
    content: [
      "Monday: shared pipeline standup",
      "Wednesday: enablement rehearsal",
      "Friday: finance + ops evidence review",
      "Monthly: partner council retrospective",
    ],
  },
];

const principles: SectionCard[] = [
  {
    title: "Vendor-neutral on purpose.",
    description:
      "Community governance keeps Channel OS honest. Standards live in the open so no single player steers the playbook.",
  },
  {
    title: "Evidence before opinion.",
    description:
      "Every recommendation ships with the data model, ritual, and template to run it tomorrow morning.",
  },
  {
    title: "Progress you can narrate.",
    description:
      "Leaders don’t just see metrics—they get the story arcs, the wins, and the next experiment in plain language.",
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
    <div className="flex flex-col gap-12 pb-20">
      <Hero
        eyebrow="Home — start with the story"
        title="Channel OS is how the channel finally runs together"
        tagline="The vendor-neutral operating system for Vendors, Distributors, and Partners."
        description="Every quarter the channel rewrites the same playbook in spreadsheets, DMs, and emergency calls. Channel OS gathers the channel around one shared operating system—language, plays, and data that hold from onboarding to renewal. It isn’t another portal; it’s the way your revenue story finally holds up."
        primaryCta={{ label: "Begin Channel 101 (Free)", href: "/school" }}
        secondaryCta={{ label: "Explore the Standard v1.0", href: "/standard" }}
      />

      <section className="-mt-6">
        <Container className="flex flex-wrap items-center justify-center gap-4 rounded-3xl border border-midnight/10 bg-gradient-to-r from-white via-graphite/70 to-white px-6 py-6 text-sm shadow-card backdrop-blur sm:flex-nowrap">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.24em] text-neutral">
            Choose your opening move
          </p>
          <div className="flex flex-1 flex-wrap justify-center gap-3 sm:justify-end">
            {quickActions.map(({ label, href, variant }) => (
              <CTAButton key={href} href={href} variant={variant}>
                {label}
              </CTAButton>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="relative overflow-hidden rounded-3xl border border-midnight/10 bg-midnight px-8 py-12 text-left text-cloud shadow-card">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_55%)]" />
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-signalAmber">Fieldnotes from the rollout</p>
            <h2 className="text-2xl font-semibold sm:text-3xl">The story teams tell after Channel OS</h2>
            <p className="text-base leading-relaxed text-cloud/80">
              “Day 30, we stopped forwarding screenshots. Day 60, distributors and partners were rehearsing the same plays. Day 90, finance led the meeting and said, ‘We trust these numbers.’”
            </p>
            <p className="text-sm text-cloud/70">
              That’s the bar. Every engagement is designed so leaders can narrate progress in minutes, not pages.
            </p>
          </div>
        </Container>
      </section>

      <Section
        title="How the Channel OS narrative unfolds"
        description="Three beats turn chaos into confidence. Align the language, capture the plays, and prove the progress."
      >
        {narrativeBeats.map((story) => (
          <Card key={story.title} title={story.title} description={story.description} />
        ))}
      </Section>

      <Section
        title="Your first ninety days"
        description="Milestones we commit to—from discovery to defensible revenue."
        className="bg-graphite/60"
      >
        {transformationTimeline.map((moment) => (
          <Card key={moment.title} title={moment.title} description={moment.description} />
        ))}
      </Section>

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
        className="bg-gradient-to-b from-white via-graphite/40 to-white"
      >
        {standardMoments.map((moment) => (
          <Card key={moment.title} title={moment.title} description={moment.description} />
        ))}
      </Section>

      <Section columns={3} title="The canon everyone can trust" className="bg-graphite/30">
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

      <section>
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
