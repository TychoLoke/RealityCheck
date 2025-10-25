import type { Metadata } from "next";
import { TeaserPage } from "../../components/TeaserPage";

export const metadata: Metadata = {
  title: "How the Channel Works",
  description: "Channel OS™ maps the entire channel ecosystem ahead of the January 2026 launch.",
};

export default function HowTheChannelWorksPage() {
  return (
    <TeaserPage
      title="Understand the Channel"
      description="We&apos;re documenting the modern channel end to end—roles, flows, incentives, and metrics. Use this preview to plan your enablement before the full release."
      sections={[
        {
          title: "Ecosystem map",
          description: "The Standard catalogues every contributor so cross-functional teams stay aligned.",
          items: [
            {
              title: "Roles",
              description: "Partner managers, solution engineers, marketplace ops, alliances, enablement, revenue, and CS.",
            },
            {
              title: "Flows",
              description: "Recruit, activate, co-market, co-sell, implement, and expand—with clear ownership and KPIs.",
            },
            {
              title: "Signals",
              description: "Shared dashboards that surface partner health, sourced pipeline, and retention.",
            },
            {
              title: "Support systems",
              description: "Tools, automations, and collateral mapped to each phase so nothing falls through the cracks.",
            },
          ],
        },
        {
          title: "Why it matters now",
          description: "Even in teaser mode you can start aligning teams around the same language.",
          items: [
            {
              title: "Common vocabulary",
              description: "Bring sales, marketing, product, and finance to the same definitions before launch.",
            },
            {
              title: "Partner readiness",
              description: "Audit existing programs to spot gaps in onboarding, incentives, or attribution.",
            },
            {
              title: "Executive briefings",
              description: "Use our one-page overviews to secure sponsorship for the January rollout.",
            },
          ],
          note: (
            <>
              Need an early walkthrough for your leadership team? Email{" "}
              <a className="text-brand-primary underline-offset-4 hover:underline" href="mailto:hello@channelos.org">
                hello@channelos.org
              </a>
              .
            </>
          ),
        },
      ]}
    />
  );
}
