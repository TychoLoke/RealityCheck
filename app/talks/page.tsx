import type { Metadata } from "next";
import Link from "next/link";
import { CardList } from "../../components/CardList";
import { SectionHeader } from "../../components/SectionHeader";
import { talks } from "../../lib/content";

export const metadata: Metadata = {
  title: "Talks",
  description: "Real conversations with people who ship.",
};

export default function TalksPage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-brand-primary">Talks</h1>
        <p className="max-w-2xl text-base text-brand-secondary">Real conversations with people who ship.</p>
      </section>

      <section className="space-y-6">
        <SectionHeader title="Latest" description="Episode cards with links to listen, watch, and read." />
        <CardList
          items={talks.map((talk) => ({
            title: talk.title,
            description: talk.insight,
            detail: talk.guests,
            actions: [
              { label: "Listen / Watch", href: talk.episodeUrl },
              talk.transcriptUrl ? { label: "Transcript", href: talk.transcriptUrl } : undefined,
            ].filter(Boolean) as { label: string; href: string }[],
          }))}
        />
      </section>

      <Link
        href="/join"
        className="inline-flex w-fit items-center justify-center rounded-[12px] bg-brand-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
      >
        Subscribe
      </Link>
    </div>
  );
}
