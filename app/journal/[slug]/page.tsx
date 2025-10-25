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
    <div className="space-y-10">
      <header className="space-y-6">
        <div className="space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/30 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-secondary">
            Journal preview · {entry.date}
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-brand-primary md:text-5xl">{entry.title}</h1>
          <p className="text-base text-brand-secondary">{entry.summary}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="/join"
            className="inline-flex items-center justify-center rounded-[12px] bg-brand-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#04060d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
          >
            Join the Community
          </a>
          <a
            href="/framework"
            className="inline-flex items-center justify-center rounded-[12px] border border-brand-primary px-5 py-3 text-sm font-semibold text-brand-primary transition hover:bg-brand-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
          >
            Explore the Framework
          </a>
        </div>
      </header>
      <article className="rounded-[20px] border border-zinc-200 bg-white p-8 shadow-sm">
        <MDXContent>
          <EntryComponent />
        </MDXContent>
      </article>
    </div>
  );
}
