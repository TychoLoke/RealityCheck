import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "../../../components/Container";
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
    <Container className="flex flex-col gap-10">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink/60">{entry.date}</p>
        <h1 className="text-3xl font-semibold text-ink">{entry.title}</h1>
        <p className="text-base text-ink/70">{entry.summary}</p>
      </header>
      <article className="rounded-2xl border border-slate/60 bg-night/80 p-8 shadow-surface">
        <MDXContent>
          <EntryComponent />
        </MDXContent>
      </article>
    </Container>
  );
}
