import type { Metadata } from "next";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { CTAButton } from "../components/CTAButton";
import { Hero } from "../components/Hero";
import { Section } from "../components/Section";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Channel OS is the vendor-neutral operating system for the channel. It standardizes how Vendors, Distributors, and Partners learn, work, and measure success.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      <Hero
        eyebrow="Home — the story people meet first"
        title="The vendor-neutral operating system for the channel (VDP)"
        tagline="Where the Channel Learns, Works, and Wins."
        description="Most channels run on exports, emails, and best guesses. Vendors, distributors, and partners all move fast—yet rarely move together. Channel OS is the calm in that chaos: a shared language, a set of habits, and a school that turns people into practitioners. It’s not “another tool.” It’s the way the channel runs—so everyone learns faster, works cleaner, and wins more often."
        primaryCta={{ label: "Start Channel 101 (Free)", href: "/school" }}
        secondaryCta={{ label: "Read the Standard v1.0", href: "/standard" }}
      />

      <section className="-mt-6">
        <Container className="flex flex-wrap items-center justify-center gap-4 rounded-3xl border border-white/10 bg-graphite/80 px-6 py-6 text-sm shadow-card sm:flex-nowrap">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.24em] text-neutral">
            Start · Read · Join
          </p>
          <div className="flex flex-1 flex-wrap justify-center gap-3 sm:justify-end">
            <CTAButton href="/school">Start Channel 101 (Free)</CTAButton>
            <CTAButton href="/standard" variant="secondary">
              Read the Standard v1.0
            </CTAButton>
            <CTAButton href="/council" variant="ghost" className="text-neutral hover:text-accentTeal">
              Join the Council
            </CTAButton>
          </div>
        </Container>
      </section>

      <Section
        title="Value, told through the work"
        description="Stories from the channel edge. Every card is a habit we teach and certify."
      >
        <Card
          title="Reduce integration debt."
          description="Stop paying a hidden tax on every deal. We standardize the words, workflows, and data that keep V-D-P aligned."
        />
        <Card
          title="Improve revenue integrity."
          description="Accuracy isn’t a nice-to-have; it’s trust. We teach and certify the habits that make rebates and settlements attestable."
        />
        <Card
          title="Build talent pipelines."
          description="The channel thrives when people do. School → Academy → Certified orgs—your ecosystem gets stronger with every cohort."
        />
      </Section>

      <Section
        title="The OS layers (as a journey)"
        description="Channel ambition becomes repeatable when people, process, data, and tools move together."
        columns={2}
      >
        <Card
          title="People"
          description="Skills that stick, roles that click, paths that grow."
        />
        <Card
          title="Process"
          description="From demand to settlement, no dropped threads."
        />
        <Card
          title="Data"
          description="One canon of objects, one truth everyone can share."
        />
        <Card
          title="Tools"
          description="Adapters, not lock-ins; your stack, made coherent."
        />
      </Section>

      <Section
        eyebrow="Standard v1.0 — the “why” and the “how”"
        title="Channel ambition, made repeatable"
        description="Channel OS is a vendor-neutral framework that turns channel ambition into repeatable outcomes. It unites people, process, and data so your tools finally make sense."
        columns={3}
      >
        <Card title="Before">
          Sales wins a deal; services can’t see it; finance disputes the numbers.
        </Card>
        <Card title="During">
          Clear roles, shared objects, visible handoffs, tracked SLAs.
        </Card>
        <Card title="After">
          Every deal and rebate is explainable—once, correctly, auditable.
        </Card>
      </Section>

      <Section columns={2} title="The canon everyone can trust">
        <Card title="Objects">
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral">
            <li>Partner</li>
            <li>Program</li>
            <li>Deal</li>
            <li>Incentive</li>
            <li>Inventory</li>
            <li>Entitlement</li>
            <li>Ticket</li>
            <li>Invoice</li>
            <li>Renewal</li>
            <li>Lineage</li>
            <li>Access Policy</li>
          </ul>
        </Card>
        <Card title="SLAs we teach & certify">
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral">
            <li>Deal-reg approval ≤ 48h</li>
            <li>Rebate accuracy ≥ 99.7%</li>
            <li>Sales-out freshness ≤ 24h</li>
            <li>Conflict cycle time ≤ 7 days</li>
          </ul>
        </Card>
      </Section>

      <Section columns={3} title="Principles that keep us honest">
        <Card title="The pledge" description="Vendor-neutral by design. Community-driven by choice. Versioned in the open. No tool favoritism—ever." />
        <Card title="Every deal, every rebate—explained." description="We obsess over explainability so compliance, finance, and operations never fight the data again." />
        <Card title="Stop guessing. Start operating." description="Channel OS replaces folklore with shared language, practiced habits, and accountability you can audit." />
      </Section>

      <Section columns={3} title="Next steps" description="Pick the move that unlocks your next win.">
        <Card title="Download Standard v1.0" description="The reference manual for people, process, and data alignment.">
          <CTAButton href="/standard" variant="secondary">
            Download the Standard v1.0
          </CTAButton>
        </Card>
        <Card title="Take the 5-minute self-assessment" description="Score your org across people, process, data, and tools to see where to start.">
          <CTAButton href="/apply" variant="secondary">
            Start the assessment
          </CTAButton>
        </Card>
        <Card title="Join the Academy waitlist" description="Level practitioners into operators with the 201 and 301 curricula.">
          <CTAButton href="/academy" variant="secondary">
            Join the waitlist
          </CTAButton>
        </Card>
      </Section>

      <section className="pb-20">
        <Container className="rounded-3xl border border-white/10 bg-graphite/70 px-8 py-12 text-center shadow-card">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Journal — earn trust, week by week</h2>
          <p className="mt-4 text-base text-neutral">
            Short, practical, and repeatable. Every post ends with a template or checklist.
          </p>
          <div className="mt-6 flex justify-center">
            <CTAButton href="/newsletter">Sign up for the Journal</CTAButton>
          </div>
        </Container>
      </section>
    </div>
  );
}
