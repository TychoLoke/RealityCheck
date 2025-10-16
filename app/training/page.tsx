import type { Metadata } from "next";
import Script from "next/script";
import { Hero } from "../../components/Hero";
import { EmailInline } from "../../components/EmailInline";
import { Card } from "../../components/Card";
import { SubscribeButton } from "../../components/SubscribeButton";

export const metadata: Metadata = {
  title: "Channel OS™ training",
  description: "Preview Channel 101 and notify me for Channel OS™ training tracks focused on operators and practitioners.",
};

const outcomes = [
  "Understand the channel value chain and key roles",
  "Learn Channel OS™ pillars and layers",
  "Map your org to the maturity model",
  "Identify quick wins in governance and enablement",
  "Know next steps: Playbooks & Talks",
];

const outline = [
  { slot: "0–10", topic: "Channel landscape & value chain" },
  { slot: "10–35", topic: "Pillars & layers" },
  { slot: "35–55", topic: "Maturity model & use cases" },
  { slot: "55–80", topic: "Baseline pattern walkthrough" },
  { slot: "80–90", topic: "Q&A, next steps" },
];

const tracks = [
  {
    title: "Practitioner track",
    description: "Deep dives into governance, approvals, and baseline execution.",
  },
  {
    title: "Operator track",
    description: "Strategic sessions for channel leaders aligning people, process, and data.",
  },
];

const courseLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Channel 101",
  description: "Channel 101 — A 90-minute introduction to the Channel OS™ framework.",
  provider: {
    "@type": "Organization",
    name: "Channel OS™",
    sameAs: "https://channelos.org",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
    courseWorkload: "PT1H30M",
  },
};

const eventLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Channel 101 Preview",
  eventStatus: "https://schema.org/EventScheduled",
  startDate: "2026-01-15T16:00:00Z",
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  organizer: {
    "@type": "Organization",
    name: "Channel OS™",
    url: "https://channelos.org",
  },
  description: "Placeholder event for the next Channel 101 session. Dates will be confirmed via email.",
};

export default function TrainingPage() {
  return (
    <div className="flex flex-col gap-16">
      <Hero
        title="Channel OS™ Training"
        subtitle="Channel 101 — A 90-minute introduction to the channel framework."
        primaryAction={{ label: "Join the Mailing List", href: "#training-mailing-list" }}
      >
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <EmailInline
            variant="hero"
            message="Channel 101 notifications go to the mailing list first. Seats are limited per cohort."
          />
        </div>
      </Hero>

      <Card className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-brand-primary">Learning outcomes</h2>
          <ul className="mt-4 space-y-2 text-base text-brand-secondary">
            {outcomes.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-brand-primary">Outline</h3>
          <ul className="mt-3 space-y-2 text-sm text-brand-secondary">
            {outline.map((entry) => (
              <li key={entry.slot} className="flex items-start justify-between gap-4">
                <span className="font-semibold text-brand-primary">{entry.slot}</span>
                <span className="flex-1 text-right md:text-left">{entry.topic}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-brand-secondary">Seat cap: 25 (notify me when registration opens)</p>
          <SubscribeButton className="bg-[#0B0E1A] text-white hover:opacity-90">
            Notify me
          </SubscribeButton>
        </div>
      </Card>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-brand-primary">Tracks in development</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {tracks.map((track) => (
            <Card key={track.title} className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-brand-primary">{track.title}</h3>
                <p className="mt-2 text-sm text-brand-secondary">{track.description}</p>
              </div>
              <SubscribeButton>Notify me</SubscribeButton>
            </Card>
          ))}
        </div>
      </section>

      <div id="training-mailing-list" className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <EmailInline variant="mid" message="Get course dates, prep materials, and pre-reading links." />
      </div>

      <Script id="channelos-training-jsonld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify([courseLd, eventLd])}
      </Script>
    </div>
  );
}
