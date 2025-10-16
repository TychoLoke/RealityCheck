import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXContent } from "../../../components/MDXContent";
import { getJournalEntry, journalEntries } from "../../../lib/journal";

interface JournalPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return journalEntries.map((entry) => ({ slug: entry.slug }));
}

export function generateMetadata({ params }: JournalPageProps): Metadata {
  const entry = getJournalEntry(params.slug);
  if (!entry) {
    return {
      title: "Journal entry",
    };
  }
  return {
    title: entry.title,
    description: entry.summary,
    openGraph: {
      title: entry.title,
      description: entry.summary,
      url: `/journal/${entry.slug}`,
      images: [
        {
          url: "/journal/opengraph-image",
          width: 1200,
          height: 630,
          alt: entry.title,
        },
      ],
    },
  };
}

export default function JournalEntryPage({ params }: JournalPageProps) {
  const entry = getJournalEntry(params.slug);

  if (!entry) {
    notFound();
  }

  const EntryComponent = entry.component;

  return (
    <div className="flex flex-col gap-10">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-secondary">{entry.date}</p>
        <h1 className="text-4xl font-semibold text-brand-primary md:text-5xl">{entry.title}</h1>
        <p className="text-base text-brand-secondary">{entry.summary}</p>
      </header>
      <article className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
        <MDXContent>
          <EntryComponent />
        </MDXContent>
      </article>
    </div>
  );
}
