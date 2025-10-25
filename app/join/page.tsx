import type { Metadata } from "next";
import { TeaserPage } from "../../components/TeaserPage";
import { EmailInline } from "../../components/EmailInline";

export const metadata: Metadata = {
  title: "Join",
  description: "Join the Channel OS™ launch list and secure founding member updates before January 2026.",
};

export default function JoinPage() {
  return (
    <TeaserPage
      title="Join the Community"
      description="Founding memberships open January 1, 2026. Share your email and focus areas to secure early updates."
      sections={[
        {
          title: "What you receive now",
          description: "We&apos;re sending concise prep notes until the doors open.",
          items: [
            {
              title: "Monthly build logs",
              description: "Follow the roadmap as we finish the Standard, tooling, and launch programming.",
            },
            {
              title: "Founding perks",
              description: "Locked-in pricing, limited-run workshops, and first access to new templates.",
            },
            {
              title: "Launch checklist",
              description: "Step-by-step guide to get your team ready for January onboarding.",
            },
          ],
        },
        {
          title: "How to prepare",
          description: "A few quick steps now will help you capture value immediately after launch.",
          items: [
            {
              title: "Align stakeholders",
              description: "Loop in partner, revenue, and enablement leads so everyone gets the updates.",
            },
            {
              title: "Collect questions",
              description: "Send us the scenarios you want solved—co-selling, marketplaces, alliances, MSP, or services.",
            },
            {
              title: "Plan onboarding",
              description: "Reserve time in early January for your team to join the kickoff labs.",
            },
          ],
        },
      ]}
    >
      <section className="rounded-[16px] border border-zinc-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-brand-primary">Stay in the loop</h2>
        <p className="mt-2 text-base text-brand-secondary">
          Drop your email to receive the monthly launch digest and invites to preview sessions.
        </p>
        <div className="mt-6">
          <EmailInline variant="wide" message="We&apos;ll send the next update soon." />
        </div>
      </section>
    </TeaserPage>
  );
}
