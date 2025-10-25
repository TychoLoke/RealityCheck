import type { Metadata } from "next";
import { TeaserPage } from "../../components/TeaserPage";

export const metadata: Metadata = {
  title: "Training",
  description: "Channel OS™ training paths launch January 1, 2026 with fast, measurable programs for partner teams.",
};

export default function TrainingPage() {
  return (
    <TeaserPage
      title="Training"
      description="We&apos;re designing compact, outcome-driven modules that turn the Channel Standard into daily execution. Here&apos;s a look at what&apos;s coming."
      sections={[
        {
          title: "Core tracks",
          description: "Each course is cohort-based with repeatable exercises and scorecards.",
          items: [
            {
              title: "Partner activation",
              description: "Onboard faster with messaging kits, enablement plans, and certification paths.",
            },
            {
              title: "Co-selling",
              description: "Build joint pipeline with opportunity qualification frameworks and revenue dashboards.",
            },
            {
              title: "Marketplace ops",
              description: "Optimize listing, merchandising, and attach motions with weekly operating rituals.",
            },
            {
              title: "Ecosystem strategy",
              description: "Align leadership around partner contribution, investment, and headcount planning.",
            },
          ],
        },
        {
          title: "How we deliver",
          description: "Training is built for busy operators—no fluff, just structure and accountability.",
          items: [
            {
              title: "Live labs",
              description: "Work through assignments together with facilitators and peer feedback.",
            },
            {
              title: "Scorecards",
              description: "Measure adoption and impact weekly with simple dashboards.",
            },
            {
              title: "Templates",
              description: "Copy-ready documents and playbooks you can adapt to your stack immediately.",
            },
            {
              title: "Office hours",
              description: "Drop-in sessions with subject-matter experts to unblock your team.",
            },
          ],
        },
        {
          title: "Reserve a seat",
          description: "Founding members can pre-select tracks ahead of launch.",
          items: [
            {
              title: "Nominate team members",
              description: "Tell us who should attend each track so we can hold spots.",
            },
            {
              title: "Share constraints",
              description: "Flag time zones, schedule conflicts, or certification requirements now.",
            },
            {
              title: "Request custom sessions",
              description: (
                <>
                  Need a private workshop? Email{" "}
                  <a className="text-brand-primary underline-offset-4 hover:underline" href="mailto:training@channelos.org">
                    training@channelos.org
                  </a>
                  .
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
