import type { Metadata } from "next";
import { Container } from "../../components/Container";
import { PostCard } from "../../components/PostCard";
import { EmailInline } from "../../components/EmailInline";
import { journalEntries } from "../../lib/journal";

export const metadata: Metadata = {
  title: "Journal",
  description: "Track Channel OS build notes and monthly updates.",
  openGraph: {
    title: "Channel OS Journal",
    description: "Track Channel OS build notes and monthly updates.",
    url: "/journal",
    images: [
      {
        url: "/journal/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Channel OS Journal",
      },
    ],
  },
};

export default function JournalPage() {
  return (
    <Container className="grid gap-12 lg:grid-cols-[2fr_1fr]">
      <section className="space-y-6">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold text-ink">Journal</h1>
          <p className="text-base text-ink/70">Build-mode entries that track the Standard and launch prep.</p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {journalEntries.map((entry) => (
            <PostCard key={entry.slug} slug={entry.slug} title={entry.title} summary={entry.summary} date={entry.date} />
          ))}
        </div>
      </section>
      <aside className="space-y-6">
        <div className="rounded-2xl border border-slate/60 bg-night/80 p-6 shadow-surface">
          <h2 className="text-xl font-semibold text-ink">Join the Mailing List</h2>
          <p className="mt-2 text-sm text-ink/70">Monthly journal digests, launch news, and release notes.</p>
          <div className="mt-4">
            <EmailInline variant="mid" message="Get monthly build updates." />
          </div>
        </div>
      </aside>
    </Container>
  );
}
