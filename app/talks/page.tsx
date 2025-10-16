import type { Metadata } from "next";
import Script from "next/script";
import { Hero } from "../../components/Hero";
import { Card } from "../../components/Card";
import { EpisodeCard } from "../../components/EpisodeCard";
import { EmailInline } from "../../components/EmailInline";

export const metadata: Metadata = {
  title: "Channel OS™ Talks",
  description: "Channel OS™ Talks shares neutral conversations with channel leaders. Join the mailing list to hear the first episodes.",
  openGraph: {
    title: "Channel OS™ Talks",
    description: "Channel OS™ Talks shares neutral conversations with channel leaders. Join the mailing list to hear the first episodes.",
    url: "/talks",
    images: [
      {
        url: "/talks/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Channel OS™ Talks",
      },
    ],
  },
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

const platforms = ["Spotify", "Apple Podcasts", "YouTube", "RSS"];

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
      <Hero
        title="Channel OS™ Talks — Conversations with channel leaders."
        subtitle="Neutral discussions to shape, learn, and expand the channel with knowledge and people."
        primaryAction={{ label: "Join the Mailing List", href: "#talks-mailing-list" }}
      >
        <div className="space-y-6">
          <div className="flex flex-wrap gap-3">
            {platforms.map((platform) => (
              <button
                key={platform}
                type="button"
                disabled
                aria-disabled
                className="inline-flex items-center gap-2 rounded-full border border-dashed border-zinc-300 bg-zinc-50 px-4 py-2 text-sm font-semibold text-brand-secondary"
              >
                <span>{platform}</span>
                <span className="text-xs uppercase tracking-[0.18em]">Soon</span>
              </button>
            ))}
          </div>
          <div id="talks-mailing-list" className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <EmailInline variant="hero" message="Episodes drop to the mailing list before platforms open." />
          </div>
        </div>
      </Hero>

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
