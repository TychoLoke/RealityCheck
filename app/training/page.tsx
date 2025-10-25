import type { Metadata } from "next";
import Link from "next/link";
import { CardList } from "../../components/CardList";
import { JoinStrip } from "../../components/JoinStrip";
import { SectionHeader } from "../../components/SectionHeader";
import { trainingTracks } from "../../lib/content";

export const metadata: Metadata = {
  title: "Training",
  description: "Compact programs that convert knowledge to execution.",
};

export default function TrainingPage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-brand-primary">Training</h1>
        <p className="max-w-2xl text-base text-brand-secondary">Compact programs that convert knowledge to execution.</p>
      </section>

      <section className="space-y-6">
        <SectionHeader title="Tracks" description="Teaser modules and cadence." />
        <CardList
          layout="grid"
          items={trainingTracks.map((track) => ({
            title: track.title,
            description: track.outline,
            detail: `${track.duration} · ${track.sessions}`,
            actions: [{ label: "View framework", href: "/framework" }],
          }))}
        />
      </section>

      <section className="space-y-4 rounded-[16px] border border-zinc-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-brand-primary">Outcomes</h2>
        <p className="text-base text-brand-secondary">Each module ships with a checklist and KPI.</p>
      </section>

      <JoinStrip
        title="Join the waitlist"
        description="Cohorts open in waves. Add your email to get the next seat."
        successMessage="You’re in."
        ctaLabel="Join"
      />

      <div className="flex flex-wrap gap-3 text-sm text-brand-secondary">
        <Link href="/playbooks" className="underline-offset-4 hover:underline">
          Explore playbooks
        </Link>
        <span aria-hidden className="hidden h-1 w-1 rounded-full bg-brand-secondary/40 sm:inline" />
        <Link href="/talks" className="underline-offset-4 hover:underline">
          Hear from operators
        </Link>
      </div>
    </div>
  );
}
