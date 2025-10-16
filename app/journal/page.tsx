import type { Metadata } from "next";
import { PostCard } from "../../components/PostCard";
import { EmailInline } from "../../components/EmailInline";
import { journalEntries } from "../../lib/journal";

export const metadata: Metadata = {
  title: "Channel OS™ Journal",
  description: "Track Channel OS™ build notes and monthly updates.",
  openGraph: {
    title: "Channel OS™ Journal",
    description: "Track Channel OS™ build notes and monthly updates.",
    url: "/journal",
    images: [
      {
        url: "/journal/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Channel OS™ Journal",
      },
    ],
  },
};

export default function JournalPage() {
  return (
    <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
      <section className="space-y-6">
        <header className="space-y-3">
          <h1 className="text-4xl font-semibold text-brand-primary md:text-5xl">Channel OS™ Journal</h1>
          <p className="text-base text-brand-secondary">Build-mode entries that track the Standard and launch prep.</p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {journalEntries.map((entry) => (
            <PostCard key={entry.slug} slug={entry.slug} title={entry.title} summary={entry.summary} date={entry.date} />
          ))}
        </div>
      </section>
      <aside className="space-y-6">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-brand-primary">Join the Mailing List</h2>
          <p className="mt-2 text-sm text-brand-secondary">Monthly journal digests, launch news, and release notes.</p>
          <div className="mt-4">
            <EmailInline variant="mid" message="Get monthly build updates." />
          </div>
        </div>
      </aside>
    </div>
  );
}
