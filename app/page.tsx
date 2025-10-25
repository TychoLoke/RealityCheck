import type { Metadata } from "next";
import Link from "next/link";
import { JoinStrip } from "../components/JoinStrip";
import { ValueTrio } from "../components/ValueTrio";

export const metadata: Metadata = {
  title: "Channel OS™",
  description: "Vendor-neutral community and framework for the channel.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24">
      <section className="space-y-12 rounded-2xl bg-brand-muted p-10 sm:p-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/30 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-secondary">
          <span className="inline-flex h-2 w-2 rounded-full bg-[#2BB673]" aria-hidden />
          Launching January 1, 2026
        </div>
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-secondary">Channel OS™</p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-brand-primary">
            Build the channel operating system with the people who run it.
          </h1>
          <p className="max-w-2xl text-lg text-brand-secondary">
            We’re creating a vendor-neutral home for operators, architects, and partners to co-design the frameworks, tools, and playbooks the channel needs next.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/join"
            className="inline-flex items-center justify-center rounded-[12px] bg-brand-primary px-5 py-3 text-sm font-semibold text-white transition hover:shadow-lg hover:shadow-brand-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
          >
            Join the Community
          </Link>
          <Link
            href="/framework"
            className="inline-flex items-center justify-center rounded-[12px] border border-brand-primary px-5 py-3 text-sm font-semibold text-brand-primary transition hover:bg-brand-primary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
          >
            Explore the Framework
          </Link>
        </div>
      </section>

      <section className="space-y-10">
        <header className="space-y-3">
          <h2 className="text-3xl font-semibold text-brand-primary">What opens in January</h2>
          <p className="max-w-2xl text-base text-brand-secondary">
            Three pillars ship with launch. Each is designed to standardize how the channel collaborates, builds, and proves value.
          </p>
        </header>
        <ValueTrio
          items={[
            {
              title: "Community Rooms",
              description: "Topic-led circles for MSP, vendor, distributor, marketplace, and ISV teams to work in the open.",
            },
            {
              title: "Channel Framework",
              description: "A shared operating model with scorecards, rituals, and benchmarks your team can implement day one.",
            },
            {
              title: "Playbook Library",
              description: "Practical guides and templates that turn partner strategy, enablement, and co-selling into repeatable motion.",
            },
          ]}
        />
      </section>

      <section className="grid gap-12 rounded-2xl border border-zinc-200 bg-white p-10 shadow-sm lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-brand-primary">Road to launch</h2>
          <p className="text-base text-brand-secondary">
            Help shape the build. Early members test the framework, name the first playbooks, and set the norms that guide the community.
          </p>
          <ol className="space-y-6">
            {[
              {
                title: "November–December 2025",
                detail: "Founding cohort curates the launch backlog and votes on the first release themes.",
              },
              {
                title: "January 1, 2026",
                detail: "Channel OS™ platform opens. Access the framework, join community rooms, and start working the playbooks.",
              },
              {
                title: "Q1 2026",
                detail: "Live enablement sessions, partner benchmarks, and new playbooks drop on a monthly cadence.",
              },
            ].map((item) => (
              <li key={item.title} className="rounded-[14px] border border-brand-muted bg-brand-muted/60 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-secondary">{item.title}</p>
                <p className="mt-2 text-base text-brand-primary">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="space-y-6 rounded-[16px] bg-brand-muted p-8">
          <h3 className="text-2xl font-semibold text-brand-primary">Stay in the loop</h3>
          <p className="text-sm text-brand-secondary">
            Monthly build notes track milestones, share early frameworks, and invite you to private feedback sessions.
          </p>
          <JoinStrip title="Get the monthly build notes." successMessage="You’re in." />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-brand-primary">Why Channel OS™</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Built with operators",
              body: "Every artifact is co-authored by channel practitioners doing the work today.",
            },
            {
              title: "Neutral ground",
              body: "No vendor spin. Just patterns that help the entire ecosystem deliver stronger outcomes.",
            },
            {
              title: "Execution ready",
              body: "Playbooks, cadences, and scorecards are formatted to drop into your existing stack.",
            },
          ].map((item) => (
            <div key={item.title} className="space-y-3 rounded-[14px] border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-brand-primary">{item.title}</h3>
              <p className="text-sm text-brand-secondary">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
