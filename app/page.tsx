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

const howItHelps = [
  { title: "Reduce integration debt", description: "One canonical data model ties your stack together." },
  { title: "Improve revenue integrity", description: "Shared SLAs remove guesswork from rebates and settlements." },
  { title: "Build talent pipelines", description: "Channel 101 → Academy → Certifications keeps skills moving." },
];

const learnOffers = [
  { title: "Channel 101", description: "90-minute primer with a job-ready project and the CCO-F badge." },
  { title: "Study groups", description: "Six-week live cohorts guided by operators who run V-D-P every day." },
  { title: "Journal & playbooks", description: "Actionable templates, checklists, and walkthroughs shipped weekly." },
];

const workStack = [
  { title: "People", description: "Role maps, skill matrices, and scorecards that travel across employers." },
  { title: "Process", description: "Demand → Deal → Delivery → Settlement mapped with clean RACIs." },
  { title: "Data", description: "Canonical objects with SLAs: Deal, Incentive, Inventory, Entitlement, Lineage." },
  { title: "Tools", description: "Adapters that snap into CRM/ERP/PSA stacks without lock-in." },
];

const slaPromises = [
  { label: "Approval", value: "≤ 48h" },
  { label: "Accuracy", value: "≥ 99.7%" },
  { label: "Freshness", value: "≤ 24h" },
  { label: "Conflict", value: "≤ 7 days" },
];

const winSignals = [
  { title: "People badges", description: "CCO credentials for every operating lane." },
  { title: "Organization certification", description: "Scorecards that publish SLA attainment and governance." },
  { title: "Platform compatibility", description: "Public conformance tests anyone can verify." },
];

const communitySnapshot = [
  { title: "Study groups", description: "12 active cohorts across time zones." },
  { title: "Live sessions", description: "Weekly AMAs, teardowns, and OS labs." },
  { title: "Templates", description: "40+ ready-to-use checklists and calculators." },
  { title: "Badges", description: "Founding Member • Ambassador • Champion." },
];

const communitySignals = [
  { label: "Members", value: "1,240" },
  { label: "Study groups run", value: "86" },
  { label: "Certificates issued", value: "312" },
];

const quotes = [
  "“We stopped arguing over spreadsheets and started measuring the work.”",
  "“Channel 101 finally gave our new hires a common language.”",
  "“Platform teams now know exactly what ‘compatible’ means.”",
];

const journeyBand = ["Discover", "Learn", "Join", "Practice", "Certify", "Contribute"];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 pb-24">
      <Hero
        eyebrow="Channel OS"
        title="Channel OS is the vendor-neutral operating system for the channel"
        tagline="Where the Channel Learns, Works, and Wins."
        description="Less friction. More integrity. A community, open framework, and certifications that keep Vendors, Distributors, and Partners in sync."
        primaryCta={{ label: "Start Channel 101 (Free)", href: "/school" }}
        secondaryCta={{ label: "Join the Community", href: "/community" }}
        tertiaryCta={{ label: "Read the Standard v1.0", href: "/standard" }}
        proofPoints={["Vendor-neutral", "Open framework", "School & Academy", "Certifications", "Community"]}
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
            <CTAButton href="/community" variant="secondary">
              See how the community runs it
            </CTAButton>
          </div>
        </Container>
      </section>

      <Section
        eyebrow="How it helps"
        title="One OS. Three immediate wins."
        description="Start with the problems every channel team feels—then use Channel OS to close the gaps."
        cta={{ label: "Start Channel 101", href: "/school", variant: "secondary" }}
      >
        {howItHelps.map((item) => (
          <Card key={item.title} title={item.title} description={item.description} />
        ))}
      </Section>

      <Section
        eyebrow="Learn"
        title="Learn together"
        description="Create shared language faster than turnover can break it."
        cta={{ label: "Join a study group", href: "/community", variant: "secondary" }}
      >
        {learnOffers.map((offer) => (
          <Card key={offer.title} title={offer.title} description={offer.description} />
        ))}
      </Section>

      <section>
        <Container className="flex flex-col gap-6 rounded-3xl border border-midnight/10 bg-white px-8 py-12 shadow-card">
          <div className="grid gap-4 md:grid-cols-4">
            {workStack.map((layer) => (
              <Card key={layer.title} title={layer.title} description={layer.description} className="!bg-graphite/60 !border-transparent" />
            ))}
          </div>
          <CTAButton href="/standard" variant="secondary">
            Read the Standard v1.0
          </CTAButton>
        </Container>
      </section>

      <Section
        eyebrow="Work"
        title="Work the same way"
        description="Operating promises become SLAs you can measure."
        columns={4}
        className="bg-graphite/60"
        cta={{ label: "Explore the Standard", href: "/standard", variant: "secondary" }}
      >
        {slaPromises.map((item) => (
          <Card key={item.label} title={item.label}>
            <p className="text-2xl font-semibold text-midnight">{item.value}</p>
            <p className="mt-2 text-sm text-neutral">Certified teams sign and publish these targets.</p>
          </Card>
        ))}
      </Section>

      <Section
        eyebrow="Win"
        title="Win as a network"
        description="Proof that travels across people, organizations, and platforms."
        cta={{ label: "Get certified", href: "/certified" }}
      >
        {winSignals.map((signal) => (
          <Card key={signal.title} title={signal.title} description={signal.description} />
        ))}
      </Section>

      <Section
        eyebrow="Community snapshot"
        title="A living operating community"
        description="Always-on programs that keep the OS current."
        columns={4}
        className="bg-graphite/60"
        cta={{ label: "Join the Community", href: "/community", variant: "secondary" }}
      >
        {communitySnapshot.map((item) => (
          <Card key={item.title} title={item.title} description={item.description} />
        ))}
      </Section>

      <section>
        <Container className="grid gap-10 rounded-3xl border border-midnight/10 bg-white px-8 py-12 shadow-card md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral">Community signals</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {communitySignals.map((signal) => (
                <div key={signal.label} className="rounded-2xl bg-graphite/60 p-5 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral">{signal.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-midnight">{signal.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral">Voices from the network</p>
            <div className="space-y-3 text-sm leading-relaxed text-neutral">
              {quotes.map((quote) => (
                <p key={quote} className="rounded-2xl border border-midnight/10 bg-graphite/40 p-4 italic text-midnight">
                  {quote}
                </p>
              ))}
            </div>
            <CTAButton href="/community" variant="secondary">
              Add your voice in the community
            </CTAButton>
          </div>
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
          <CTAButton href="/apply">Apply to join Channel OS</CTAButton>
        </Container>
      </section>
    </div>
  );
}
