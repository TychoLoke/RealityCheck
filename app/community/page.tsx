import type { Metadata } from "next";
import { TeaserPage } from "../../components/TeaserPage";

export const metadata: Metadata = {
  title: "Community",
  description:
    "The Channel OS™ community opens January 1, 2026. Preview the founding experience and request early updates.",
};

export default function CommunityPage() {
  return (
    <TeaserPage
      title="Join the Channel OS™ Community"
      description="We&apos;re building a practitioner space for partner, revenue, and enablement teams. Preview what members unlock when doors open."
      sections={[
        {
          title: "Founding member experience",
          description:
            "Every program is built to move fast: clear prompts, curated peers, and repeatable outputs.",
          items: [
            {
              title: "Private forums",
              description: "Topical rooms for partner strategy, ops, enablement, and alliances moderated by experienced hosts.",
            },
            {
              title: "Live working sessions",
              description: "Weekly labs where we tear down partner motions, co-build assets, and measure progress together.",
            },
            {
              title: "Shared library",
              description: "Download-ready templates, calculators, and decision trees sourced from operators who ship.",
            },
            {
              title: "Signals & benchmarks",
              description: "Quarterly reporting on partner-sourced pipeline, activation rates, and ecosystem health.",
            },
          ],
        },
        {
          title: "How to get ready",
          description:
            "We open applications in mid-December. In the meantime you can prep your team and secure a spot.",
          items: [
            {
              title: "RSVP for launch week",
              description: "Join the interest list to lock in founding-rate pricing and receive the onboarding timeline.",
            },
            {
              title: "Nominate peers",
              description: "Invite cross-functional partners you want in the room—alliances, rev ops, enablement, and CS.",
            },
            {
              title: "Submit focus areas",
              description: "Tell us which partner motions you need first: co-selling, marketplace, MSP, or tech alliances.",
            },
            {
              title: "Review the code of conduct",
              description: "Alignment upfront keeps the conversation tactical and respectful from day one.",
            },
          ],
        },
      ]}
    />
  );
}
