import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { CTAButton } from "../components/CTAButton";
import { Hero } from "../components/Hero";
import { InteractiveFocus } from "../components/InteractiveFocus";
import { JourneyExperience } from "../components/JourneyExperience";
import { Section } from "../components/Section";
import { SurfaceNote } from "../components/SurfaceNote";

export const metadata: Metadata = {
  title: "Channel OS™ — Where the Channel Learns, Works, and Wins.",
  description:
    "Channel OS™ is the vendor-neutral operating system for the channel (VDP). Community, open standard, and certifications that unify People, Process, Data, and Tools.",
};

const launchHighlights = [
  {
    title: "Unified operating blueprint",
    description:
      "Channel OS™ 1.0 packages the People • Process • Data • Tools model so every partner motion stays accountable.",
  },
  {
    title: "Verified performance scorecards",
    description:
      "Publish-ready SLAs and dashboards translate operating promises into measurable revenue integrity across teams.",
  },
  {
    title: "Governed community rituals",
    description:
      "Council sessions, contributor workflows, and certification ceremonies keep the ecosystem aligned post-launch.",
  },
];

const buildWithUs = [
  {
    title: "Academy briefings",
    description:
      "Live 90-minute orientations that unite leadership on the language, governance, and launch expectations.",
  },
  {
    title: "Operator working groups",
    description:
      "Invite-only cohorts that co-design scorecards, integrations, and readiness playbooks ahead of January.",
  },
  {
    title: "Journal & implementation kits",
    description:
      "Weekly documentation drops—framework updates, checklists, and walkthroughs—for teams building in public.",
  },
];

const launchPulse = [
  {
    title: "Launch milestone",
    description: "January 1, 2026 — Channel OS™ 1.0 becomes publicly available to the entire channel.",
    detail: "Certification windows, scorecard publishing, and live onboarding open at 00:00 UTC.",
  },
  {
    title: "Private beta",
    description: "Invite waves continue through 2025 for teams validating the framework inside their stack.",
    detail: "Submit your program profile for placement into an operator working group within seven days.",
  },
  {
    title: "Framework readiness",
    description: "Core playbooks, adapters, and certification rubrics are 80% complete and accessible for preview.",
    detail: "Track completion status and upcoming drops inside the Journal and working group hub.",
  },
];

const focusAreas = [
  {
    label: "Leadership alignment",
    headline: "Establish a shared operating language",
    description:
      "Academy briefings align executive sponsors on the governance model, launch cadence, and decision rights ahead of January.",
    signals: [
      "Executive-ready decks covering the operating blueprint",
      "Governance charters that clarify ownership across functions",
      "Change-management plans for GTM, success, and finance teams",
      "30/60/90-day ramp plan for incoming channel leaders",
    ],
    stat: { label: "Leaders briefed", value: "160+" },
    action: { label: "Book an Academy briefing", href: "/academy" },
  },
  {
    label: "Revenue integrity",
    headline: "Wire SLAs into every revenue motion",
    description:
      "The Standard defines canonical data, RACIs, and incentive guardrails so settlements stop relying on brittle spreadsheets.",
    signals: [
      "Canonical objects for deals, incentives, entitlements, and lineage",
      "Playbooks mapping demand → deal → delivery → settlement",
      "Partner-facing dashboards for attainment, gaps, and remediation",
      "Audit-ready workflows that reduce integration debt from day one",
    ],
    stat: { label: "SLA accuracy in pilots", value: "99.7%" },
    action: { label: "Explore the Standard", href: "/standard" },
  },
  {
    label: "Enablement loops",
    headline: "Develop talent that scales with the ecosystem",
    description:
      "Academy cohorts, live labs, and mentorship ensure every operator can rehearse and certify the OS habits before go-live.",
    signals: [
      "Weekly labs hosted by certified practitioners",
      "Role-based competency scorecards with renewal cycles",
      "Study group kits to run inside your organization",
      "Certification journeys tied to production deliverables",
    ],
    stat: { label: "Certified operators", value: "312" },
    action: { label: "Join the Academy", href: "/academy" },
  },
  {
    label: "Platform readiness",
    headline: "Prove compatibility before the broadcast",
    description:
      "Adapters, conformance tests, and API guidelines help platform teams ship integrations without lock-in on launch day.",
    signals: [
      "Open adapters for CRM, ERP, and PSA stacks",
      "Compatibility scorecards partners can self-validate",
      "Sandbox data packs for integration stress testing",
      "Launch playbooks for marketplaces and listings",
    ],
    stat: { label: "Platforms aligned", value: "23" },
    action: { label: "Review integration kits", href: "/playbooks" },
  },
];

const journeySteps = [
  {
    label: "Now",
    headline: "Preview the Channel OS™ framework",
    description:
      "Tour the canonical data model, process library, and operating promises as v1.0 locks for launch.",
    takeaway: "Book an Academy briefing so sponsors align on the governance model before January 1, 2026.",
    action: { label: "Book an Academy briefing", href: "/academy" },
  },
  {
    label: "Q2 2025",
    headline: "Enter private beta build cycles",
    description:
      "Partner with practitioners to validate scorecards, integrations, and enablement loops inside your stack.",
    takeaway: "Beta partners receive dedicated working-group support and co-branded launch stories.",
    action: { label: "Apply for beta access", href: "/apply" },
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
    headline: "Launch Channel OS™ with the community",
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
    takeaway: "Contributors influence the 2026 roadmap and earn spotlight features across the Channel OS™ journal.",
    action: { label: "Lead a working group", href: "/community" },
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 pb-28 text-midnight sm:gap-24 sm:pb-36">
      <Hero
        eyebrow="Launches January 1, 2026"
        title="Channel OS™ launches January 1, 2026"
        tagline="The modern operating system for the global channel."
        description="We’re finalizing the shared blueprint, certifications, and governance rituals with operators across the ecosystem. Join the founding waitlist to help shape the release."
        primaryCta={{ label: "Join the founding waitlist", href: "/community" }}
        secondaryCta={{ label: "Review the Standard", href: "/standard" }}
        tertiaryCta={{ label: "Book an Academy briefing", href: "/academy" }}
        proofPoints={[
          "Enterprise pilots underway",
          "Canonical framework in preview",
          "Certification day-one ready",
          "Governed community programs",
          "Launch broadcast week",
        ]}
      />

      <SurfaceNote>
        <div className="flex flex-col gap-3">
          <p>
            Channel OS™ is an open, vendor-neutral framework. You may describe interoperability (“compatible with Channel OS™”) but may not imply affiliation or use the name in product titles without permission.
          </p>
          <Link
            className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.28em] text-midnight/60 transition hover:text-midnight"
            href="/trademark"
          >
            Read Trademark &amp; Brand Use →
          </Link>
        </div>
      </SurfaceNote>

      <section>
        <Container className="relative grid gap-10 overflow-hidden rounded-[var(--radius-xl)] border border-midnight/10 bg-cloud px-8 py-12 text-midnight shadow-[0_48px_140px_-80px_rgba(11,14,26,0.22)]">
          <span className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(60,76,255,0.12),transparent_65%)]" />
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-midnight/60">Launch status</p>
            <h2 className="text-2xl font-semibold sm:text-3xl">We go live on January 1, 2026</h2>
            <p className="max-w-3xl text-base leading-relaxed text-neutral sm:text-lg">
              Channel OS™ is in active build with operators across the network. Review the critical milestones and secure your
              place in the launch communications.
            </p>
            <CTAButton href="/community" variant="primary">
              Get launch updates
            </CTAButton>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {launchPulse.map((item) => (
              <Card key={item.title} title={item.title} description={item.description}>
                <p className="mt-3 text-xs uppercase tracking-[0.28em] text-midnight/50">What to know</p>
                <p className="mt-1 text-sm leading-relaxed text-neutral">{item.detail}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <Section
        eyebrow="Launch day unlocks"
        title="What you’ll step into on January 1"
        description="Channel OS™ 1.0 ships with the core framework, scorecards, and community rituals ready for every operator."
        cta={{ label: "See the launch framework", href: "/standard", variant: "primary" }}
      >
        {launchHighlights.map((item) => (
          <Card key={item.title} title={item.title} description={item.description} />
        ))}
      </Section>

      <Section
        eyebrow="Build with us now"
        title="Partner with the operator network"
        description="Join the programs that keep you close to the Academy, working groups, and implementation guidance ahead of January."
        cta={{ label: "Secure your founding seat", href: "/community" }}
      >
        {buildWithUs.map((offer) => (
          <Card key={offer.title} title={offer.title} description={offer.description} />
        ))}
      </Section>

      <InteractiveFocus areas={focusAreas} />

      <JourneyExperience
        steps={journeySteps}
        eyebrow="Launch roadmap"
        title="Your path to January 1, 2026"
        description="We’re pacing toward launch with clear touchpoints for operators, leaders, and platform teams. Track what’s ready today and what’s next as we approach the reveal."
        successHeading="Keep momentum by"
        successPoints={[
          "Booking an Academy briefing to align sponsors on the launch plan.",
          "Submitting your beta profile so we can slot you into the right working group.",
          "Building your readiness playbook with the rehearsal kits and adapters in preview.",
        ]}
      />

      <Container className="grid gap-8 rounded-[var(--radius-xl)] border border-midnight/10 bg-cloud px-8 py-12 shadow-[0_48px_140px_-80px_rgba(11,14,26,0.18)] lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-midnight/60">Media guide</p>
          <h2 className="text-3xl font-semibold">Plan supporting imagery</h2>
          <p className="text-base leading-relaxed text-neutral">
            Reserve these slots for campaign photography, team shots, or product visuals. Each block keeps the GTIA-inspired
            layout balanced with generous white space.
          </p>
          <ul className="space-y-3 text-sm text-neutral">
            <li>• Home hero media: 1280 × 1280px image or looping mp4 (center focus).</li>
            <li>• Launch status gallery (below): three 960 × 640px landscape images.</li>
            <li>• Journey section (optional): 1200 × 900px illustration positioned behind the roadmap cards.</li>
          </ul>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[1, 2, 3].map((slot) => (
            <div
              key={slot}
              className="flex aspect-[4/3] items-center justify-center rounded-3xl border border-dashed border-midnight/20 bg-graphite text-xs font-medium uppercase tracking-[0.28em] text-midnight/50"
            >
              960 × 640 slot {slot}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
