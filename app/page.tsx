import type { Metadata } from "next";
import Link from "next/link";
import { JoinStrip } from "../components/JoinStrip";
import { SectionHeader } from "../components/SectionHeader";
import { ValueTrio } from "../components/ValueTrio";
import { getLatestTalk, getNextEvent } from "../lib/content";

export const metadata: Metadata = {
  title: "Channel OS™",
  description: "Vendor-neutral community and framework for the channel.",
};

export default function HomePage() {
  const nextEvent = getNextEvent();
  const latestTalk = getLatestTalk();

  return (
    <div className="flex flex-col gap-20">
      <section className="space-y-8">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-secondary">Channel OS™</p>
          <h1 className="text-4xl font-bold leading-tight text-brand-primary">Where the Channel Learns, Works, and Wins.</h1>
          <p className="max-w-2xl text-lg text-brand-secondary">Vendor-neutral community and framework for the channel.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/join"
            className="inline-flex items-center justify-center rounded-[12px] bg-brand-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
          >
            Join the Community
          </Link>
          <Link
            href="/framework"
            className="inline-flex items-center justify-center rounded-[12px] border border-brand-secondary/40 px-5 py-3 text-sm font-semibold text-brand-primary transition hover:border-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
          >
            Explore the Framework
          </Link>
        </div>
      </section>

      <section className="space-y-10">
        <ValueTrio
          items={[
            { title: "Community", description: "Meet peers, share patterns, ship faster." },
            { title: "Training", description: "Short tracks with outcomes and scorecards." },
            { title: "Playbooks", description: "Templates that move work from plan to done." },
          ]}
        />
      </section>

      <section className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6 rounded-[16px] border border-zinc-200 bg-white p-8 shadow-sm">
          <SectionHeader title="Events" description="Next session" cta={{ label: "View all", href: "/events" }} />
          {nextEvent ? (
            <article className="space-y-3 text-sm text-brand-secondary">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-secondary/70">
                {new Intl.DateTimeFormat("en", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                }).format(new Date(nextEvent.date))}
                {" "}· {nextEvent.time}
              </p>
              <h3 className="text-xl font-semibold text-brand-primary">{nextEvent.title}</h3>
              <p>{nextEvent.value}</p>
              <div className="flex flex-wrap gap-3 pt-2 text-xs font-semibold uppercase tracking-[0.18em]">
                <span className="rounded-[12px] bg-brand-muted px-3 py-1 text-brand-primary">{nextEvent.format}</span>
                <span className="rounded-[12px] bg-brand-muted px-3 py-1 text-brand-primary">{nextEvent.location}</span>
              </div>
              <Link
                href={nextEvent.rsvpUrl}
                className="inline-flex items-center justify-center rounded-[12px] bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
              >
                RSVP
              </Link>
            </article>
          ) : (
            <p className="text-sm text-brand-secondary">New events are loading.</p>
          )}
        </div>
        <div className="space-y-6 rounded-[16px] border border-zinc-200 bg-white p-8 shadow-sm">
          <SectionHeader title="Talks" description="Latest episode" cta={{ label: "Browse talks", href: "/talks" }} />
          {latestTalk ? (
            <article className="space-y-3 text-sm text-brand-secondary">
              <h3 className="text-xl font-semibold text-brand-primary">{latestTalk.title}</h3>
              <p className="text-brand-primary">{latestTalk.guests}</p>
              <p>{latestTalk.insight}</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={latestTalk.episodeUrl}
                  className="inline-flex items-center justify-center rounded-[12px] border border-brand-secondary/40 px-4 py-2 text-sm font-semibold text-brand-primary transition hover:border-brand-primary"
                >
                  Listen / Watch
                </Link>
                {latestTalk.transcriptUrl && (
                  <Link
                    href={latestTalk.transcriptUrl}
                    className="inline-flex items-center justify-center rounded-[12px] border border-brand-secondary/40 px-4 py-2 text-sm font-semibold text-brand-primary transition hover:border-brand-primary"
                  >
                    Transcript
                  </Link>
                )}
              </div>
            </article>
          ) : (
            <p className="text-sm text-brand-secondary">Episodes coming soon.</p>
          )}
        </div>
      </section>

      <JoinStrip title="Get the monthly build notes." successMessage="You’re in." />

      <section className="max-w-3xl space-y-4">
        <h2 className="text-2xl font-bold text-brand-primary">Channel OS™ in one line</h2>
        <p className="text-base text-brand-secondary">
          Channel OS™ brings practitioners across MSPs, vendors, distributors, marketplaces, and ISVs together to learn, standardize, and execute.
        </p>
      </section>
    </div>
  );
}
