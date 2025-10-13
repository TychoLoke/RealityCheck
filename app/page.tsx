import type { Metadata } from "next";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { CTAButton } from "../components/CTAButton";
import { Hero } from "../components/Hero";
import { InteractiveFocus } from "../components/InteractiveFocus";
import { JourneyExperience } from "../components/JourneyExperience";
import { Section } from "../components/Section";

export const metadata: Metadata = {
  title: "Channel OS — Where the Channel Learns, Works, and Wins.",
  description:
    "Vendor-neutral operating system for the channel (VDP). Community, open standard, and certifications that unify People, Process, Data, and Tools.",
};

const launchHighlights = [
  {
    title: "Launch-ready framework",
    description:
      "Preview the canonical People • Process • Data • Tools blueprint that ships with Channel OS 1.0 on day one.",
  },
  {
    title: "Operational scorecards",
    description:
      "Public-ready SLAs, metrics, and dashboards that make revenue integrity auditable across every partner motion.",
  },
  {
    title: "Channel community hub",
    description:
      "Live labs, certifications, and governance rituals that keep vendors, distributors, and partners moving together.",
  },
];

const buildWithUs = [
  {
    title: "Channel 101 (live)",
    description:
      "90-minute launch briefings that align leadership on the operating language and how the January rollout will land.",
  },
  {
    title: "Study groups",
    description:
      "Six-week private cohorts guided by operators building the OS—perfect for teams who want to co-design the playbooks.",
  },
  {
    title: "Journal & playbooks",
    description:
      "Weekly drops of frameworks, checklists, and walkthroughs as we finalize the Channel OS standard for launch.",
  },
];

const launchPulse = [
  {
    title: "Launch date",
    description: "January 1, 2026. Channel OS 1.0 goes live for every vendor, distributor, and partner team.",
    detail: "Mark your calendar—public enrollment and certifications open at midnight UTC.",
  },
  {
    title: "Private beta seats",
    description: "Rolling invites through 2025 for operators who want to validate the framework in their stack.",
    detail: "Submit your program profile and we’ll pair you with a working group within a week.",
  },
  {
    title: "Framework completion",
    description: "78% of the core playbooks, adapters, and certification rubrics are already live for preview.",
    detail: "See what’s ready now and what’s shipping in the next working sprints.",
  },
];

const focusAreas = [
  {
    label: "Leadership alignment",
    headline: "Activate the shared operating language",
    description:
      "Kick off with Channel 101 and leadership labs to unite sponsors around the January launch vocabulary and expectations.",
    signals: [
      "Executive briefings and readiness decks ready to circulate",
      "Operating model canvas that maps People • Process • Data • Tools",
      "Role clarity across GTM, service, and partner success teams",
      "30/60/90 onboarding blueprint for new channel leaders",
    ],
    stat: { label: "Teams launched in 90 days", value: "48" },
    action: { label: "Start with Channel 101", href: "/school" },
  },
  {
    label: "Revenue integrity",
    headline: "Wire SLAs into your revenue engine",
    description:
      "Define canonical data, shared RACIs, and incentive guardrails ahead of launch so settlements stop relying on brittle spreadsheets.",
    signals: [
      "Canonical objects for deals, incentives, entitlements, and lineage",
      "Playbooks for demand → deal → delivery → settlement",
      "Partner-ready dashboards that publish attainment and gaps",
      "Audit-ready workflows that reduce integration debt",
    ],
    stat: { label: "SLA accuracy from pilots", value: "99.7%" },
    action: { label: "Explore the Standard", href: "/standard" },
  },
  {
    label: "Enablement loops",
    headline: "Build talent that keeps pace with the channel",
    description:
      "Layer Academy cohorts, live labs, and mentorship so every operator can rehearse and certify the OS habits before go-live.",
    signals: [
      "Weekly OS labs hosted by certified practitioners",
      "Role-based skill matrices and competency scorecards",
      "Study group kits to run inside your own organization",
      "Certification journeys that reinforce on-the-job delivery",
    ],
    stat: { label: "Certified operators", value: "312" },
    action: { label: "Join the Academy", href: "/academy" },
  },
  {
    label: "Platform readiness",
    headline: "Prove compatibility inside your stack",
    description:
      "Use adapters, conformance tests, and API guidelines so platform teams can ship integrations without lock-in on launch day.",
    signals: [
      "Open adapters that snap into CRM/ERP/PSA systems",
      "Compatibility scorecards partners can validate themselves",
      "Sandbox data packs to pressure-test integrations",
      "Launch playbooks for partner marketplaces and listings",
    ],
    stat: { label: "Platforms aligned", value: "23" },
    action: { label: "Review integration kits", href: "/playbooks" },
  },
];

const workStack = [
  {
    title: "People",
    description: "Role maps, skill matrices, and scorecards that follow every operator into the January 2026 rollout.",
  },
  {
    title: "Process",
    description: "Demand → Deal → Delivery → Settlement mapped with clean RACIs ready for certification.",
  },
  {
    title: "Data",
    description: "Canonical objects with SLAs—Deal, Incentive, Inventory, Entitlement, Lineage—finalized for launch.",
  },
  {
    title: "Tools",
    description: "Adapters that snap into CRM/ERP/PSA stacks without lock-in and come pre-tested for go-live.",
  },
];

const slaPromises = [
  { label: "Approval", value: "≤ 48h" },
  { label: "Accuracy", value: "≥ 99.7%" },
  { label: "Freshness", value: "≤ 24h" },
  { label: "Conflict", value: "≤ 7 days" },
];

const winSignals = [
  {
    title: "People badges",
    description: "CCO credentials for every operating lane debut with launch-day ceremonies.",
  },
  {
    title: "Organization certification",
    description: "Scorecards that publish SLA attainment and governance to the market on day one.",
  },
  {
    title: "Platform compatibility",
    description: "Public conformance tests anyone can verify across your entire integration surface.",
  },
];

const communitySnapshot = [
  { title: "Study groups", description: "12 active cohorts pressure-testing the OS before January." },
  { title: "Live sessions", description: "Weekly AMAs, teardowns, and launch labs with practitioners." },
  { title: "Templates", description: "40+ ready-to-use checklists and calculators already in preview." },
  { title: "Badges", description: "Founding Member • Ambassador • Champion pathways open now." },
];

const communitySignals = [
  { label: "Members", value: "1,240" },
  { label: "Study groups run", value: "86" },
  { label: "Certificates issued", value: "312" },
];

const quotes = [
  "“The launch briefings finally aligned our executive sponsors around the same operating promises.”",
  "“We’re co-designing the scorecards now so we hit the ground running on January 1.”",
  "“The adapters in preview saved months of integration work before the OS even ships.”",
];

const journeySteps = [
  {
    label: "Now",
    headline: "Preview the Channel OS framework",
    description:
      "Tour the canonical data model, process library, and operating promises as we lock v1.0 ahead of launch.",
    takeaway: "Join a Channel 101 briefing to align sponsors on what ships January 1, 2026.",
    action: { label: "Reserve a briefing seat", href: "/school" },
  },
  {
    label: "Q2 2025",
    headline: "Enter private beta build cycles",
    description:
      "Pair with practitioners to validate scorecards, integrations, and enablement loops inside your stack.",
    takeaway: "Beta partners receive custom working-group support and co-branded launch stories.",
    action: { label: "Apply for beta access", href: "/community" },
  },
  {
    label: "Q4 2025",
    headline: "Publish your readiness playbook",
    description:
      "Finalize RACIs, configure adapters, and prep internal enablement so your team can certify on day one.",
    takeaway: "Use our rehearsal labs and templates to stress-test every motion before the big reveal.",
    action: { label: "Download rehearsal kits", href: "/playbooks" },
  },
  {
    label: "Jan 1, 2026",
    headline: "Launch Channel OS with the community",
    description:
      "Unlock the certification ceremonies, publish your scorecards, and go live with the shared operating language.",
    takeaway: "Launch week programming showcases founding members and their proof to the entire ecosystem.",
    action: { label: "Join the launch broadcast", href: "/community" },
  },
  {
    label: "Post-launch",
    headline: "Co-create the ongoing roadmap",
    description:
      "Author new guidance, adapters, and governance updates with the operator network.",
    takeaway: "Contributors influence the 2026 roadmap and earn spotlight features across the Channel OS journal.",
    action: { label: "Lead a working group", href: "/apply" },
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 pb-24 text-midnight">
      <Hero
        eyebrow="Launches January 1, 2026"
        title="Channel OS is almost here"
        tagline="The vendor-neutral operating system for the channel arrives New Year’s Day."
        description="We’re finalizing the framework, certifications, and community rituals that keep Vendors, Distributors, and Partners in sync. Join the founding waitlist to shape the launch and claim your spot."
        primaryCta={{ label: "Join the founding waitlist", href: "/community" }}
        secondaryCta={{ label: "Preview the framework", href: "/standard" }}
        tertiaryCta={{ label: "Attend Channel 101 live", href: "/school" }}
        proofPoints={["Vendor-neutral", "Open framework", "Certification day one", "Community-led", "Launch broadcast"]}
        variant="dark"
      />

      <section className="-mt-10">
        <Container className="relative grid gap-10 overflow-hidden rounded-3xl border border-midnight/10 bg-gradient-to-br from-graphite via-cloud to-cloud px-8 py-12 text-midnight shadow-[0_32px_80px_-48px_rgba(12,15,27,0.25)]">
          <span className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(138,147,166,0.18),transparent_65%)]" />
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral">Launch status</p>
            <h2 className="text-2xl font-semibold sm:text-3xl">We go live on January 1, 2026</h2>
            <p className="max-w-3xl text-base leading-relaxed text-neutral sm:text-lg">
              The OS is in active build with our community of operators. Explore the milestones below, then claim your seat so you’re part of the countdown and launch broadcast.
            </p>
            <CTAButton href="/community">
              Get launch updates
            </CTAButton>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {launchPulse.map((item) => (
              <Card key={item.title} title={item.title} description={item.description} variant="inverted">
                <p className="mt-3 text-xs uppercase tracking-[0.28em] text-midnight/60">What to know</p>
                <p className="mt-1 text-sm leading-relaxed text-midnight/80">{item.detail}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <Section
        eyebrow="Launch day unlocks"
        title="What you’ll step into on January 1"
        description="Channel OS 1.0 ships with the core framework, scorecards, and community rituals ready for every operator."
        cta={{ label: "See the launch framework", href: "/standard", variant: "primary" }}
        className="bg-graphite text-midnight"
        variant="inverted"
      >
        {launchHighlights.map((item) => (
          <Card key={item.title} title={item.title} description={item.description} variant="inverted" />
        ))}
      </Section>

      <Section
        eyebrow="Build with us now"
        title="Help shape the launch"
        description="We’re already rehearsing the plays. Join the founding programs that keep you close to the build."
        cta={{ label: "Secure your founding seat", href: "/community" }}
      >
        {buildWithUs.map((offer) => (
          <Card key={offer.title} title={offer.title} description={offer.description} />
        ))}
      </Section>

      <InteractiveFocus areas={focusAreas} />

      <section>
        <Container className="flex flex-col gap-6 rounded-3xl border border-graphite/20 bg-gradient-to-br from-midnight/80 via-[#101a31] to-midnight/80 px-8 py-12 shadow-[0_24px_64px_-48px_rgba(6,9,18,0.85)]">
          <div className="grid gap-4 md:grid-cols-4">
            {workStack.map((layer) => (
              <Card key={layer.title} title={layer.title} description={layer.description} />
            ))}
          </div>
          <CTAButton href="/standard" variant="primary">
            Read the Standard v1.0
          </CTAButton>
        </Container>
      </section>

      <Section
        eyebrow="Work"
        title="Work the same way"
        description="Operating promises become SLAs you can measure."
        columns={4}
        className="bg-gradient-to-r from-graphite via-cloud to-cloud"
        cta={{ label: "Explore the Standard", href: "/standard", variant: "primary" }}
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
        className="bg-gradient-to-r from-graphite via-cloud to-cloud"
        cta={{ label: "Join the Community", href: "/community", variant: "primary" }}
      >
        {communitySnapshot.map((item) => (
          <Card key={item.title} title={item.title} description={item.description} />
        ))}
      </Section>

      <section>
        <Container className="grid gap-10 rounded-3xl border border-midnight/10 bg-gradient-to-br from-graphite via-cloud to-cloud px-8 py-12 shadow-[0_24px_64px_-48px_rgba(12,15,27,0.25)] md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral">Community signals</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {communitySignals.map((signal) => (
                <div key={signal.label} className="rounded-2xl border border-midnight/10 bg-graphite/80 p-5 text-center text-midnight">
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
                <p key={quote} className="rounded-2xl border border-midnight/10 bg-graphite/80 p-4 italic text-midnight">
                  {quote}
                </p>
              ))}
            </div>
            <CTAButton href="/community" variant="primary">
              Add your voice in the community
            </CTAButton>
          </div>
        </Container>
      </section>

      <JourneyExperience
        steps={journeySteps}
        variant="inverted"
        eyebrow="Launch roadmap"
        title="Your path to January 1, 2026"
        description="We’re pacing toward launch with clear touchpoints for operators, leaders, and platform teams. Track what’s ready today and what to expect as we approach the big reveal."
        successHeading="Keep momentum by"
        successPoints={[
          "Booking your Channel 101 briefing to align sponsors on the launch plan.",
          "Submitting your beta profile so we can slot you into the right working group.",
          "Building your readiness playbook with the rehearsal kits and adapters in preview.",
        ]}
      />
    </div>
  );
}
