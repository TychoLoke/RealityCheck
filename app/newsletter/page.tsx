import type { Metadata } from "next";
import { Card } from "../../components/Card";
import { Embed } from "../../components/Embed";
import { Hero } from "../../components/Hero";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Channel OS™ Journal — Practical posts with templates",
  description:
    "Channel OS™ Journal delivers short, useful, repeatable insights for operators across Vendors, Distributors, and Partners.",
};

const starterPosts = [
  "Integration Debt: the hidden channel tax (and how to remove it)",
  "The 48-Hour Rule: designing a deal-reg SLA teams can actually meet",
  "Rebate Accuracy 99.7%: what it looks like in the real world",
];

export default function JournalPage() {
  return (
    <div className="flex flex-col gap-20 pb-28 text-midnight sm:gap-24 sm:pb-36">
      <Hero
        eyebrow="Journal"
        title="Channel OS™ Journal"
        description="Short, useful, repeatable. Every post ends with a template or checklist."
        primaryCta={{ label: "Subscribe", href: "#subscribe" }}
        secondaryCta={{ label: "Apply to contribute", href: "/community" }}
        proofPoints={["Templates", "Checklists", "Operator stories"]}
      />

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

      <Section id="subscribe" title="Subscribe" description="Add the Channel OS™ Journal to your inbox." columns={1}>
        <Embed
          html={process.env.NEXT_PUBLIC_SUBSTACK_EMBED}
          title="Journal subscription form"
          description="Paste the Substack embed snippet in .env.local."
        />
      </Section>
    </div>
  );
}
