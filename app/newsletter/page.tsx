import type { Metadata } from "next";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Embed } from "../../components/Embed";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Channel OS Journal — Practical posts with templates",
  description:
    "Short, useful, repeatable insights for operators across Vendors, Distributors, and Partners.",
};

const starterPosts = [
  "Integration Debt: the hidden channel tax (and how to remove it)",
  "The 48-Hour Rule: designing a deal-reg SLA teams can actually meet",
  "Rebate Accuracy 99.7%: what it looks like in the real world",
];

export default function JournalPage() {
  return (
    <div className="flex flex-col gap-16 pb-24 text-graphite">
      <section className="border-b border-graphite/15 bg-gradient-to-b from-midnight via-[#101a31] to-midnight py-16 sm:py-20">
        <Container className="flex flex-col gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral">Journal</span>
          <h1 className="text-3xl font-semibold sm:text-4xl">Channel OS Journal</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-neutral sm:text-xl">
            Short, useful, repeatable. Every post ends with a template or checklist.
          </p>
        </Container>
      </section>

      <Section title="Editorial stance" description="Trust is earned week by week." columns={2}>
        <Card title="Principles">
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral">
            <li>Precise over hype.</li>
            <li>Teacher energy over sales spin.</li>
            <li>Outcome-first over feature lists.</li>
            <li>Inclusive: always name students, switchers, and practitioners.</li>
          </ul>
        </Card>
        <Card title="Starter posts">
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral">
            {starterPosts.map((post) => (
              <li key={post}>{post}</li>
            ))}
          </ul>
        </Card>
      </Section>

      <Section title="Subscribe" description="Add the Channel OS Journal to your inbox." columns={1}>
        <Embed
          html={process.env.NEXT_PUBLIC_SUBSTACK_EMBED}
          title="Journal subscription form"
          description="Paste the Substack embed snippet in .env.local."
        />
      </Section>
    </div>
  );
}
