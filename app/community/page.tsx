import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "../../components/Hero";
import { EmailInline } from "../../components/EmailInline";
import { Card } from "../../components/Card";

export const metadata: Metadata = {
  title: "Channel OS™ community",
  description: "Join the Channel OS™ community mailing list for vendor-neutral operator circles, study groups, and office hours.",
};

const teasers = [
  {
    title: "Operator circles",
    description: "Small groups of channel operators benchmarking frameworks and maturity levels together.",
  },
  {
    title: "Study groups",
    description: "Focused sessions to practice governance, approvals, and baseline management patterns.",
  },
  {
    title: "Office hours",
    description: "Live conversations to work through adapters, tooling, and practical rollouts.",
  },
];

export default function CommunityPage() {
  return (
    <div className="flex flex-col gap-16">
      <Hero
        title="Channel OS™ Community"
        subtitle="A vendor-neutral, sales-neutral environment for operators to learn together."
        primaryAction={{ label: "Join the Mailing List", href: "#community-mailing-list" }}
      >
        <div id="community-mailing-list" className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <EmailInline variant="hero" message="Mailing list is live now — events open as they’re scheduled." />
        </div>
      </Hero>

      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-brand-primary">Live now</h2>
        <p className="text-base text-brand-secondary">
          Today the community is the mailing list. It&apos;s how you&apos;ll get invitations to every Channel OS™ session.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {teasers.map((teaser) => (
            <Card key={teaser.title}>
              <h3 className="text-xl font-semibold text-brand-primary">{teaser.title}</h3>
              <p className="mt-2 text-sm text-brand-secondary">{teaser.description}</p>
              <p className="mt-4 text-sm font-semibold text-brand-primary">Notify me at launch →</p>
            </Card>
          ))}
        </div>
        <Link href="/the-channel" className="text-brand-primary underline-offset-4 hover:underline">
          What is the Channel?
        </Link>
      </section>
    </div>
  );
}
