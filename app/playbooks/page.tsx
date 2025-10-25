import type { Metadata } from "next";
import { TeaserPage } from "../../components/TeaserPage";

export const metadata: Metadata = {
  title: "Playbooks",
  description: "Channel OS™ playbooks unlock at launch with ready-to-run partner motions.",
};

export default function PlaybooksPage() {
  return (
    <TeaserPage
      title="Playbooks"
      description="Every playbook is designed to move from intent to shipped work. Here&apos;s what to expect when we launch."
      sections={[
        {
          title: "Playbook library",
          description: "Built with operators, battle-tested across industries.",
          items: [
            {
              title: "Partner activation",
              description: "Recruitment, onboarding, and enablement workflows with ready-made templates.",
            },
            {
              title: "Co-marketing",
              description: "Campaign briefs, calendar templates, and shared reporting dashboards.",
            },
            {
              title: "Co-selling",
              description: "Opportunity qualification, joint pipeline reviews, and success metrics.",
            },
            {
              title: "Services & success",
              description: "Implementation readiness, partner-led support, and expansion plays.",
            },
          ],
        },
        {
          title: "How we keep them fresh",
          description: "Playbooks evolve with community input.",
          items: [
            {
              title: "Versioning",
              description: "Clear release notes with every update so your team stays aligned.",
            },
            {
              title: "Member contributions",
              description: "Operators submit their own variants and metrics for review.",
            },
            {
              title: "Signals integration",
              description: "Tie playbooks directly to the Channel Standard KPIs.",
            },
          ],
          note: (
            <>
              Want to co-create a playbook? Email{" "}
              <a className="text-brand-primary underline-offset-4 hover:underline" href="mailto:playbooks@channelos.org">
                playbooks@channelos.org
              </a>
              .
            </>
          ),
        },
      ]}
    />
  );
}
