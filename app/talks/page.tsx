import type { Metadata } from "next";
import { TeaserPage } from "../../components/TeaserPage";

export const metadata: Metadata = {
  title: "Talks",
  description: "Channel OS™ talks return with the January 2026 launch.",
};

export default function TalksPage() {
  return (
    <TeaserPage
      title="Talks"
      description="We&apos;re lining up candid conversations with operators who ship. Here&apos;s what&apos;s coming back with the launch."
      sections={[
        {
          title: "Formats",
          description: "Everything stays short, tactical, and actionable.",
          items: [
            {
              title: "Operator spotlights",
              description: "20-minute interviews with channel leaders unpacking one play that moved the needle.",
            },
            {
              title: "Framework breakdowns",
              description: "Walkthroughs of specific Channel Standard components with examples.",
            },
            {
              title: "Playbook clinics",
              description: "Members bring real scenarios and get live feedback from peers.",
            },
          ],
        },
        {
          title: "Participate",
          description: "We&apos;re recording the next slate now.",
          items: [
            {
              title: "Pitch a session",
              description: (
                <>
                  Have a partner motion to share? Email{" "}
                  <a className="text-brand-primary underline-offset-4 hover:underline" href="mailto:talks@channelos.org">
                    talks@channelos.org
                  </a>{" "}
                  with the outcome and metrics.
                </>
              ),
            },
            {
              title: "Request topics",
              description: "Tell us which challenges you want discussed—co-selling, attribution, enablement, or tooling.",
            },
            {
              title: "Watch on-demand",
              description: "Members get transcripts, audio, and key takeaways for every talk.",
            },
          ],
        },
      ]}
    />
  );
}
