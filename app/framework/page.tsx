import type { Metadata } from "next";
import { TeaserPage } from "../../components/TeaserPage";

export const metadata: Metadata = {
  title: "Framework",
  description: "Preview the Channel OS™ framework launching January 1, 2026.",
};

export default function FrameworkPage() {
  return (
    <TeaserPage
      title="The Channel OS™ Framework"
      description="A living standard for partner motions, metrics, and enablement. The full framework unlocks at launch—here&apos;s how it&apos;s structured."
      sections={[
        {
          title: "Three core layers",
          description: "Each layer feeds the next so partner teams can move from understanding to execution quickly.",
          items: [
            {
              title: "Sense",
              description: "Map your ecosystem, assess partner readiness, and surface actionable insights for leadership.",
            },
            {
              title: "Decide",
              description: "Define plays, assign ownership, and stack-rank opportunities using shared data and templates.",
            },
            {
              title: "Execute",
              description: "Activate partners with enablement kits, co-selling workflows, and measurable success criteria.",
            },
            {
              title: "Improve",
              description: "Review signal dashboards and retros to sharpen the standard every quarter.",
            },
          ],
        },
        {
          title: "What ships on day one",
          description: "We&apos;re finalizing v1 now. Founding members help prioritize the backlog before we freeze the launch build.",
          items: [
            {
              title: "Playbook library",
              description: "Step-by-step guides covering partner activation, co-marketing, and revenue alignment.",
            },
            {
              title: "Maturity model",
              description: "Self-assess partner functions against the standard and uncover your next best move.",
            },
            {
              title: "KPIs & benchmarks",
              description: "Shared definitions and targets so finance, product, and partner teams speak the same language.",
            },
            {
              title: "Templates & tooling",
              description: "Downloadable canvases, scorecards, and dashboards ready to copy into your stack.",
            },
          ],
        },
        {
          title: "Help shape the framework",
          description: "We&apos;re reviewing contributions from channel leaders now.",
          items: [
            {
              title: "Submit a play",
              description: "Share a repeatable partner motion with metrics. We&apos;ll collaborate to standardize it for members.",
            },
            {
              title: "Request coverage",
              description: "Tell us where you need guidance—marketplaces, MSP, alliances, or partner marketing.",
            },
            {
              title: "Join the review board",
              description: "We&apos;re recruiting advisors to maintain the framework every quarter.",
            },
          ],
          note: (
            <>
              Email contributions to{" "}
              <a className="text-brand-primary underline-offset-4 hover:underline" href="mailto:framework@channelos.org">
                framework@channelos.org
              </a>
              .
            </>
          ),
        },
      ]}
    />
  );
}
