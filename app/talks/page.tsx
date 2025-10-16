import type { Metadata } from "next";
import Script from "next/script";
import { Card } from "../../components/Card";
import { EpisodeCard } from "../../components/EpisodeCard";
import { EmailInline } from "../../components/EmailInline";

export const metadata: Metadata = {
  title: "Channel OS™ Talks",
  description: "Channel OS™ Talks shares neutral conversations with channel leaders. Join the mailing list to hear the first episodes.",
};

const episodes = [
  {
    title: "Foundations of Channel OS™",
    guest: "Tycho Löke",
    summary: "Why a neutral framework matters and how operators will shape the build.",
    runtime: "Runtime: 42 min",
  },
  {
    title: "Baseline management in practice",
    guest: "Guest TBA",
    summary: "Operators discuss keeping baselines healthy across multi-tenant environments.",
    runtime: "Runtime: 38 min",
  },
  {
    title: "Adapters and shared data",
    guest: "Guest TBA",
    summary: "A look at how CRM, ERP, PSA, and marketplaces plug into Channel OS™.",
    runtime: "Runtime: 44 min",
  },
];

const podcastLd = {
  "@context": "https://schema.org",
  "@type": "PodcastSeries",
  name: "Channel OS™ Talks",
  url: "https://channelos.org/talks",
  description: "Channel OS™ Talks — Conversations with channel leaders.",
  publisher: {
    "@type": "Organization",
    name: "Channel OS™",
  },
};

export default function TalksPage() {
  return (
    <div className="flex flex-col gap-16">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold text-brand-primary md:text-5xl">Channel OS™ Talks — Conversations with channel leaders.</h1>
        <p className="text-base text-brand-secondary">
          Neutral discussions to shape, learn, and expand the channel with knowledge and people.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-brand-primary">Season zero preview</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {episodes.map((episode) => (
            <EpisodeCard key={episode.title} {...episode} />
          ))}
        </div>
      </section>

      <Card className="space-y-4 bg-zinc-50">
        <h2 className="text-2xl font-semibold text-brand-primary">Join the mailing list for the premiere</h2>
        <p className="text-base text-brand-secondary">
          Streaming platforms and transcripts go live at launch. Mailing list subscribers hear it first.
        </p>
        <div className="mt-4">
          <EmailInline variant="mid" />
        </div>
      </Card>

      <Script id="channelos-talks-jsonld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(podcastLd)}
      </Script>
    </div>
  );
}
