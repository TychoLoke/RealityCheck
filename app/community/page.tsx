import type { Metadata } from "next";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { CTAButton } from "../../components/CTAButton";
import { Hero } from "../../components/Hero";
import { Section } from "../../components/Section";
import { SurfaceNote } from "../../components/SurfaceNote";

export const metadata: Metadata = {
  title: "Channel OS™ Community — Learn together, work together, win together.",
  description:
    "The Channel OS™ Community brings study groups, live sessions, templates, and badges together—vendor-neutral, tool-agnostic, open.",
};

const communityOffers = [
  {
    title: "Study groups",
    description: "Six-week cohorts with operators who practice V-D-P handoffs daily.",
  },
  {
    title: "Live sessions",
    description: "Weekly AMAs, teardowns, and Office Hours that unpack the OS in real time.",
  },
  {
    title: "Templates & playbooks",
    description: "Checklists, calculators, and governance packs to plug straight into your org.",
  },
  {
    title: "Recognition",
    description: "Badges for Founding Members, Ambassadors, and Champions—visible progress.",
  },
  {
    title: "Opportunities",
    description: "Jobs, cohort projects, and showcase slots that move careers forward.",
  },
];

const programs = [
  {
    title: "Founding Members",
    badge: "Founding",
    description: "First 200 operators. Early badge, directory listing, pilot invites.",
  },
  {
    title: "Ambassadors",
    badge: "Ambassador",
    description: "Host one session per month. Earn the badge and Summit stage time.",
  },
  {
    title: "Champions",
    badge: "Champion",
    description: "Run an internal study group and represent your org in public scorecards.",
  },
  {
    title: "Local chapters",
    badge: "Deurne pilot",
    description: "Meetups and pop-up workshops starting in Deurne—bring the OS offline.",
  },
];

const sessions = [
  { title: "Revenue Integrity Lab", date: "Apr 18", focus: "Variance reconciliation walk-through" },
  { title: "Partner Onboarding Sprint", date: "Apr 23", focus: "90-day enablement blueprint" },
  { title: "Ambassador Roundtable", date: "Apr 30", focus: "How to run your first study group" },
];

const howWeWork = [
  "Vendor-neutral discussions—no sales pitches.",
  "Evidence-first: approvals ≤ 48h, accuracy ≥ 99.7%, freshness ≤ 24h, conflict ≤ 7 days.",
  "Every session produces a reusable artifact (template, checklist, or decision log).",
];

const joinFlowSteps = [
  "Apply with your operating focus.",
  "Get matched to a study group in under 48 hours.",
  "Attend your first live session and meet your cohort.",
  "Earn your first badge by sharing an artifact.",
];

const guidelines = [
  "Be vendor-neutral",
  "Be useful",
  "Be respectful",
  "Credit sources",
  "Protect data",
  "Keep it practical",
];

export default function CommunityPage() {
  return (
    <div className="flex flex-col gap-20 pb-28 text-white sm:gap-24 sm:pb-36">
      <Hero
        eyebrow="Community"
        title="Where channel operators learn, work, and win together"
        description="Study groups, live sessions, and badges keep the Channel OS™ alive between releases."
        primaryCta={{ label: "Join the Community", href: "/apply" }}
        secondaryCta={{ label: "See upcoming sessions", href: "#sessions" }}
        tertiaryCta={{ label: "Become an Ambassador", href: "#programs" }}
        proofPoints={["Study groups", "Live labs", "Badges"]}
        variant="dark"
      />

      <Section
        title="What you get"
        description="Everything connects back to the operating system we share across Vendors, Distributors, and Partners."
        columns={3}
        cta={{ label: "Apply now", href: "/apply" }}
      >
        {communityOffers.map((item) => (
          <Card key={item.title} title={item.title} description={item.description} />
        ))}
      </Section>

      <Section
        id="programs"
        title="Programs"
        description="Pick the lane that matches how you want to contribute to the network."
        columns={2}
        cta={{ label: "View program guide", href: "/community", variant: "inverted" }}
        variant="inverted"
      >
        {programs.map((program) => (
          <Card key={program.title} title={program.title} variant="inverted">
            <span className="inline-flex items-center rounded-full border border-midnight/10 bg-midnight/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-midnight/70">
              {program.badge}
            </span>
            <p className="mt-3 text-sm leading-relaxed text-neutral">{program.description}</p>
          </Card>
        ))}
      </Section>

      <section id="sessions">
        <Container className="flex flex-col gap-8 rounded-[var(--radius-xl)] border border-white/10 bg-white/5 px-8 py-12 text-white shadow-[0_32px_96px_-60px_rgba(14,165,233,0.45)] backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Upcoming sessions</p>
              <h2 className="mt-2 text-2xl font-semibold">Learn → Work → Win in the next two weeks</h2>
            </div>
            <CTAButton href="/community" variant="primary">
              See all sessions
            </CTAButton>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {sessions.map((session) => (
              <Card key={session.title} title={`${session.date} • ${session.title}`} description={session.focus} />
            ))}
          </div>
        </Container>
      </section>

      <Section
        title="How we work"
        description="Neutral, evidence-first, and accountable to the SLAs we certify."
        columns={1}
        cta={{ label: "Read the Standard v1.0", href: "/standard", variant: "primary" }}
      >
        <Card title="Principles">
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral">
            {howWeWork.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
      </Section>

      <Section
        title="Join flow"
        description="Clear steps so you can plug in without friction."
        columns={1}
        cta={{ label: "Submit your application", href: "/apply", variant: "inverted" }}
        variant="inverted"
      >
        <Card title="Four steps" variant="inverted">
          <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-neutral">
            {joinFlowSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </Card>
      </Section>

      <section>
        <Container className="flex flex-col gap-6 rounded-[var(--radius-xl)] border border-white/10 bg-white/5 px-8 py-12 text-center text-white shadow-[0_32px_96px_-60px_rgba(14,165,233,0.45)] backdrop-blur">
          <h2 className="text-2xl font-semibold sm:text-3xl">Ready to plug into the network?</h2>
          <p className="max-w-2xl text-base text-white/75">
            Apply, pick your study group, and you’ll have your first live session scheduled within the week.
          </p>
          <CTAButton href="/apply">Join the Community</CTAButton>
        </Container>
      </section>

      <Section
        title="Community guidelines"
        description="We keep it practical and respectful so everyone can work in the open."
        columns={2}
        cta={{ label: "Submit a community idea", href: "/community", variant: "primary" }}
      >
        <Card title="How to show up">
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral">
            {guidelines.slice(0, 3).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
        <Card title="How we protect the network">
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral">
            {guidelines.slice(3).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
      </Section>

      <SurfaceNote>
        <p>Official home: channelos.org. Official handles: Channel OS™ (company), Channel OS™ Community, Channel OS™ Academy.</p>
        <p className="mt-2">Channel OS™ is an open, vendor-neutral framework. Describe compatibility; don’t imply affiliation.</p>
      </SurfaceNote>
    </div>
  );
}
