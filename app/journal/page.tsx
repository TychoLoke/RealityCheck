import type { Metadata } from "next";
import { TeaserPage } from "../../components/TeaserPage";
import { PostCard } from "../../components/PostCard";
import { EmailInline } from "../../components/EmailInline";
import { journalEntries } from "../../lib/journal";

export const metadata: Metadata = {
  title: "Channel OS™ Journal",
  description: "Follow build updates and launch prep for Channel OS™ ahead of January 1, 2026.",
  openGraph: {
    title: "Channel OS™ Journal",
    description: "Follow build updates and launch prep for Channel OS™ ahead of January 1, 2026.",
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
    <TeaserPage
      title="Channel OS™ Journal"
      description="Short, practical notes from the build. We release a new entry each month as we approach launch."
      sections={[
        {
          title: "What we publish now",
          description: "These entries keep you in the loop while the platform finishes baking.",
          items: [
            {
              title: "Build logs",
              description: "Snapshot progress on the Standard, tooling, and programs in under five minutes of reading.",
            },
            {
              title: "Signals",
              description: "Highlight partner metrics we&apos;re tracking so you can benchmark your own ecosystem.",
            },
            {
              title: "Calls for input",
              description: "We regularly ask for feedback on templates, frameworks, and event topics.",
            },
          ],
        },
        {
          title: "After launch",
          description: "Members unlock richer reporting and collaboration formats.",
          items: [
            {
              title: "Interactive dashboards",
              description: "Filter roadmap progress by track, persona, or maturity stage.",
            },
            {
              title: "Member spotlights",
              description: "See how peers adapt the Standard across industries with real metrics.",
            },
            {
              title: "Release notes",
              description: "Detailed changelog for new playbooks, trainings, and community programs.",
            },
          ],
        },
      ]}
    >
      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-brand-primary">Latest entries</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {journalEntries.map((entry) => (
              <PostCard
                key={entry.slug}
                slug={entry.slug}
                title={entry.title}
                summary={entry.summary}
                date={entry.date}
              />
            ))}
          </div>
        </div>
        <aside className="space-y-6">
          <div className="rounded-[16px] border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-brand-primary">Get the digest</h3>
            <p className="mt-2 text-sm text-brand-secondary">
              Monthly email with new entries, launch milestones, and upcoming sessions.
            </p>
            <div className="mt-4">
              <EmailInline variant="mid" message="We&apos;ll only email when there&apos;s something to ship." />
            </div>
          </div>
        </aside>
      </div>
    </TeaserPage>
  );
}
