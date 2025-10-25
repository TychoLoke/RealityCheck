import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "../../components/SectionHeader";

export const metadata: Metadata = {
  title: "Framework",
  description: "The Channel OS™ framework keeps the channel aligned on people, process, platform, and performance.",
};

const layers = [
  {
    title: "People",
    description: "Roles, accountability, cadence.",
  },
  {
    title: "Process",
    description: "Baselines, handoffs, reviews.",
  },
  {
    title: "Platform",
    description: "Tooling mapped to outcomes.",
  },
  {
    title: "Performance",
    description: "KPIs, feedback, iterations.",
  },
];

export default function FrameworkPage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold text-brand-primary">The Channel OS™ Framework</h1>
        <p className="max-w-2xl text-base text-brand-secondary">Neutral · Practical · Community-first.</p>
      </section>

      <section className="space-y-6">
        <SectionHeader title="Principles" />
        <ul className="grid gap-4 sm:grid-cols-3">
          {["Neutral", "Practical", "Community-first"].map((principle) => (
            <li key={principle} className="rounded-[12px] border border-zinc-200 bg-white p-6 text-center text-sm font-semibold text-brand-primary">
              {principle}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <SectionHeader title="Layers" description="Work through each layer to align teams and partners." />
        <div className="grid gap-6 md:grid-cols-2">
          {layers.map((layer) => (
            <article key={layer.title} className="space-y-2 rounded-[16px] border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-brand-primary">{layer.title}</h2>
              <p className="text-sm text-brand-secondary">{layer.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-[16px] border border-zinc-200 bg-brand-muted p-6">
        <h2 className="text-2xl font-bold text-brand-primary">Using the framework</h2>
        <ol className="list-decimal space-y-2 pl-6 text-base text-brand-secondary">
          <li>Map your current state.</li>
          <li>Pick one outcome.</li>
          <li>Run a 30-day sprint with a playbook.</li>
          <li>Review, publish, repeat.</li>
        </ol>
      </section>

      <div className="flex flex-wrap gap-3 text-sm text-brand-secondary">
        <Link href="/playbooks" className="inline-flex items-center justify-center rounded-[12px] border border-brand-secondary/40 px-4 py-2 font-semibold text-brand-primary transition hover:border-brand-primary">
          Explore Playbooks
        </Link>
        <Link href="/community" className="inline-flex items-center justify-center rounded-[12px] border border-brand-secondary/40 px-4 py-2 font-semibold text-brand-primary transition hover:border-brand-primary">
          Join the community
        </Link>
      </div>
    </div>
  );
}
