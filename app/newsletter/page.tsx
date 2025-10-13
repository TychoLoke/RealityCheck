import type { Metadata } from "next";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Embed } from "../../components/Embed";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Channel OS Journal",
  description:
    "Subscribe to the Channel OS Journal for weekly templates, checklists, and stories that keep the ecosystem aligned.",
};

const series = [
  "Integration Debt: the hidden channel tax (and how to remove it).",
  "The 48-Hour Rule: designing a deal-reg SLA teams can actually meet.",
  "Rebate Accuracy 99.7%: what it looks like in the real world.",
  "From Classroom to Channel: how we build job-ready talent in 6 weeks.",
];

export default function NewsletterPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="border-b border-midnight/10 bg-graphite py-16 sm:py-20">
        <Container className="flex flex-col gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-accentTeal">Journal</span>
          <h1 className="text-3xl font-semibold text-midnight sm:text-4xl">Channel OS Journal</h1>
          <p className="max-w-3xl text-base leading-relaxed text-neutral sm:text-lg">
            Short, practical, repeatable. Every post ends with a template or checklist you can drop straight into your operating system.
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
        <Card title="Series starters">
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral">
            {series.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
      </Section>

      <Section title="Subscribe" description="Add the Channel OS Journal to your inbox." columns={1}>
        <Embed
          html={process.env.NEXT_PUBLIC_SUBSTACK_EMBED}
          title="Substack embed"
          description="Paste the Substack embed snippet in .env.local."
        />
      </Section>
    </div>
  );
}
