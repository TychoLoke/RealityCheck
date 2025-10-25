import type { Metadata } from "next";
import Link from "next/link";
import { CardList } from "../../components/CardList";
import { SectionHeader } from "../../components/SectionHeader";
import { getPastEvents, getUpcomingEvents } from "../../lib/content";

export const metadata: Metadata = {
  title: "Events",
  description: "Learn in the open. Join live; watch replays.",
};

export default function EventsPage() {
  const upcoming = getUpcomingEvents();
  const past = getPastEvents();

  return (
    <div className="flex flex-col gap-16">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-brand-primary">Events</h1>
        <p className="max-w-2xl text-base text-brand-secondary">Learn in the open. Join live; watch replays.</p>
      </section>

      <section className="space-y-6">
        <SectionHeader title="Upcoming" description="RSVP and build with the community." />
        {upcoming.length > 0 ? (
          <CardList
            items={upcoming.map((event) => ({
              title: event.title,
              meta: `${new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(event.date))} · ${event.time}`,
              description: event.value,
              detail: `${event.format} · ${event.location}`,
              actions: [{ label: "RSVP", href: event.rsvpUrl }],
            }))}
          />
        ) : (
          <p className="text-sm text-brand-secondary">New sessions will be posted soon.</p>
        )}
      </section>

      <section className="space-y-6">
        <SectionHeader title="Past" description="Replays, slides, and notes." />
        {past.length > 0 ? (
          <CardList
            items={past.map((event) => ({
              title: event.title,
              meta: `${new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(event.date))} · ${event.time}`,
              description: event.value,
              detail: `${event.format} · ${event.location}`,
              actions: [
                event.replayUrl ? { label: "Replay", href: event.replayUrl } : undefined,
                event.slidesUrl ? { label: "Slides", href: event.slidesUrl } : undefined,
                event.notesUrl ? { label: "Notes", href: event.notesUrl } : undefined,
              ].filter(Boolean) as { label: string; href: string }[],
            }))}
          />
        ) : (
          <p className="text-sm text-brand-secondary">Replays will appear here.</p>
        )}
      </section>

      <aside className="rounded-[16px] border border-dashed border-brand-secondary/40 p-6 text-sm text-brand-secondary">
        <p className="font-semibold text-brand-primary">Host an event</p>
        <p className="mt-2">Have a pattern to share? Volunteer through the contribute form.</p>
        <Link
          href="/community"
          className="mt-4 inline-flex items-center justify-center rounded-[12px] border border-brand-secondary/40 px-4 py-2 text-sm font-semibold text-brand-primary transition hover:border-brand-primary"
        >
          Go to form
        </Link>
      </aside>
    </div>
  );
}
