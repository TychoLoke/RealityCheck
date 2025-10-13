import type { Metadata } from "next";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { CTAButton } from "../../components/CTAButton";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Channel OS Community — Learn together, work together, win together.",
  description: "Study groups, live sessions, templates, and badges. Vendor-neutral, tool-agnostic, open.",
};

const communityOffers = [
  {
    title: "Study groups (6 weeks)",
    description: "Orchestration, revenue integrity, governance, and careers led by operators who work across Vendors, Distributors, and Partners.",
  },
  {
    title: "Live sessions",
    description: "AMAs, teardowns, and office hours with operators across V-D-P so you see the work behind the slides.",
  },
  {
    title: "Templates & playbooks",
    description: "Copy-ready checklists you can use tomorrow to unblock approvals, rebates, and co-sell motions.",
  },
  {
    title: "Recognition",
    description: "Founding Member, Ambassador, and Champion badges that make contribution visible.",
  },
  {
    title: "Opportunities",
    description: "Jobs board, cohort projects, and case spotlights that match talent to real operating gaps.",
  },
];

const programs = [
  {
    title: "Founding Members",
    description: "First 200 members. Early badge, directory listing, and priority invites to workshops and pilots.",
  },
  {
    title: "Ambassadors",
    description: "Host one session per month to earn the Ambassador badge and Channel OS Summit stage slots.",
  },
  {
    title: "Champions",
    description: "Org leads who run an internal study group and earn Champion status for their company.",
  },
  {
    title: "Local chapters",
    description: "Starting in Deurne—meetups and pop-up workshops that bring the playbooks into the room.",
  },
];

const guidelines = [
  "Be vendor-neutral",
  "Be useful",
  "Be respectful",
  "Credit sources",
  "Protect data",
  "Keep it practical",
];

export default function CommunityPage() {
  return (
    <div className="flex flex-col gap-16 pb-24">
      <section className="border-b border-midnight/10 bg-graphite py-16 sm:py-20">
        <Container className="flex flex-col gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral">Community</span>
          <h1 className="text-3xl font-semibold text-midnight sm:text-4xl">The Channel OS Community</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-neutral sm:text-xl">
            Learn together, work together, win together. Channel OS brings the channel into one shared practice with people who run the plays every day.
          </p>
          <div className="flex flex-wrap gap-4">
            <CTAButton href="/apply">Join the Community</CTAButton>
            <CTAButton href="#sessions" variant="secondary">
              See upcoming sessions
            </CTAButton>
            <CTAButton href="#programs" variant="ghost">
              Become an Ambassador
            </CTAButton>
          </div>
        </Container>
      </section>

      <Section
        title="What you get"
        description="Everything connects back to the operating system we share across Vendors, Distributors, and Partners."
        columns={3}
      >
        {communityOffers.map((item) => (
          <Card key={item.title} title={item.title} description={item.description} />
        ))}
      </Section>

      <Section
        id="programs"
        title="Programs"
        description="Pick the lane that matches how you want to contribute to the network."
        columns={2}
        className="bg-graphite/60"
      >
        {programs.map((program) => (
          <Card key={program.title} title={program.title} description={program.description} />
        ))}
      </Section>

      <section>
        <Container className="grid gap-8 rounded-3xl border border-midnight/10 bg-white px-8 py-12 shadow-card md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-neutral">How we work</p>
            <h2 className="mt-4 text-2xl font-semibold text-midnight">Vendor-neutral, tool-agnostic, and open.</h2>
            <p className="mt-4 text-base leading-relaxed text-neutral">
              We hold ourselves to practical SLAs: approval ≤ 48h, accuracy ≥ 99.7%, freshness ≤ 24h, conflict ≤ 7 days. Every session, template, and cohort is built to make those numbers real.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-neutral">Join flow</p>
            <ol className="mt-4 space-y-3 text-sm leading-relaxed text-neutral">
              <li><strong className="text-midnight">Apply</strong> → tell us how you operate in the channel.</li>
              <li><strong className="text-midnight">Welcome email</strong> → receive your access guide.</li>
              <li><strong className="text-midnight">Pick a study group</strong> → match your lowest score to the right path.</li>
              <li><strong className="text-midnight">Attend your first live</strong> → meet the operators behind the playbooks.</li>
              <li><strong className="text-midnight">Earn your first badge</strong> → make your contribution visible.</li>
            </ol>
          </div>
        </Container>
      </section>

      <section id="sessions">
        <Container className="flex flex-col items-center gap-6 rounded-3xl border border-midnight/10 bg-midnight px-8 py-12 text-center text-cloud shadow-card">
          <h2 className="text-2xl font-semibold sm:text-3xl">Ready to plug into the network?</h2>
          <p className="max-w-2xl text-base text-cloud/80">
            Apply, pick your study group, and you’ll have your first live session scheduled within the week.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton href="/apply">Join the Community</CTAButton>
            <CTAButton href="/academy" variant="secondary">
              Explore the Academy
            </CTAButton>
          </div>
        </Container>
      </section>

      <Section title="Community guidelines" description="We keep it practical and respectful so everyone can work in the open." columns={2}>
        <Card title="How to show up">
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral">
            {guidelines.slice(0, 3).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
        <Card title="How we protect the network">
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral">
            {guidelines.slice(3).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
      </Section>
    </div>
  );
}
