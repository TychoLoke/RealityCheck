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
    <div className="flex flex-col gap-32 pb-16">
      <section className="space-y-16 rounded-[40px] bg-brand-muted p-10 sm:p-16 lg:p-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/30 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-secondary">
          <span className="inline-flex h-2 w-2 rounded-full bg-[#2BB673]" aria-hidden />
          Launching January 1, 2026
        </div>
        <div className="space-y-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-secondary">Channel OS™</p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-brand-primary sm:text-6xl">
            A home for the channel to design what comes next.
          </h1>
          <div className="max-w-3xl space-y-6 text-base leading-relaxed text-brand-secondary sm:text-lg">
            <p>
              The hallway conversations, late night decks, and whispered best practices deserve a brighter stage. Channel OS™ is where operators, architects, and partners turn the fragments of today’s channel work into a living operating system.
            </p>
            <p>
              We’re building it in the open with people already in the trenches—codifying the rituals that work, cutting what doesn’t, and telling the story of the channel’s next era together.
            </p>
            <p>
              Follow along as the framework, playbooks, and community rooms take shape. Every milestone is shared in the build notes and pressure-tested with founding members before it lands in the library.
            </p>
          </div>
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

      <section className="space-y-14">
        <header className="space-y-5">
          <h2 className="text-3xl font-semibold text-brand-primary sm:text-4xl">What opens in January</h2>
          <p className="max-w-2xl text-base leading-relaxed text-brand-secondary sm:text-lg">
            Three launch pillars give the community room to learn, work, and tell a stronger story together. Every artifact is shaped with founding members before it lands in the library.
          </p>
        </header>
        <ValueTrio
          items={[
            {
              title: "Community Rooms",
              description:
                "Topic-led circles for MSP, vendor, distributor, marketplace, and ISV teams. Every room has facilitation, shared context, and a clear reason to ship together.",
              icon: "Room",
            },
            {
              title: "Channel Framework",
              description:
                "A shared operating model with scorecards, rituals, and benchmarks that map to the real decisions channel leaders make every week.",
              icon: "Model",
            },
            {
              title: "Playbook Library",
              description:
                "Practical guides and templates that turn partner strategy, enablement, and co-selling into repeatable moments of truth your team can run immediately.",
              icon: "Library",
            },
          ]}
        />
      </section>

      <section className="grid gap-12 rounded-[32px] border border-zinc-200/60 bg-white p-10 shadow-md shadow-brand-primary/10 lg:grid-cols-[1.2fr_1fr] lg:p-16">
        <div className="space-y-10">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold text-brand-primary sm:text-4xl">Road to launch</h2>
            <p className="text-base leading-relaxed text-brand-secondary sm:text-lg">
              Help shape the build. Early members test the framework, name the first playbooks, and set the norms that guide the community. Each milestone adds another layer to the story we’ll tell on launch day.
            </p>
          </div>
          <ol className="space-y-8">
            {[
              {
                title: "November–December 2025",
                detail:
                  "Founding cohort curates the launch backlog, shares their operating gaps, and votes on the first release themes.",
              },
              {
                title: "January 1, 2026",
                detail:
                  "Channel OS™ platform opens. Access the framework, step into community rooms, and start working the playbooks in real time.",
              },
              {
                title: "Q1 2026",
                detail:
                  "Live enablement sessions, partner benchmarks, and new playbooks drop on a monthly cadence with member stories highlighting the wins.",
              },
            ].map((item) => (
              <li key={item.title} className="rounded-[20px] border border-brand-muted bg-brand-muted/60 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-secondary">{item.title}</p>
                <p className="mt-4 text-base leading-relaxed text-brand-primary">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="space-y-7 rounded-[24px] bg-brand-muted p-8 lg:p-10">
          <h3 className="text-2xl font-semibold text-brand-primary">Stay in the loop</h3>
          <p className="text-sm leading-relaxed text-brand-secondary">
            Monthly build notes track milestones, share early frameworks, and invite you to private feedback sessions. It’s the easiest way to keep pace with the story as it unfolds.
          </p>
          <JoinStrip title="Get the monthly build notes." successMessage="You’re in." />
        </div>
      </section>

      <section className="space-y-10">
        <h2 className="text-3xl font-semibold text-brand-primary sm:text-4xl">Why Channel OS™</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Built with operators",
              body:
                "Every artifact is co-authored by channel practitioners doing the work today. We capture the nuance and context that rarely make it into glossy PDFs.",
            },
            {
              title: "Neutral ground",
              body:
                "No vendor spin. Just patterns that help the entire ecosystem deliver stronger outcomes and give customers a clearer path to value.",
            },
            {
              title: "Execution ready",
              body:
                "Playbooks, cadences, and scorecards are formatted to drop straight into your stack so your team can get moving without another six-week translation project.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="space-y-4 rounded-[20px] border border-zinc-200/60 bg-white p-7 shadow-sm shadow-brand-primary/5"
            >
              <h3 className="text-xl font-semibold text-brand-primary">{item.title}</h3>
              <p className="text-sm leading-relaxed text-brand-secondary">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
