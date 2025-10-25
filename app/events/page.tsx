import type { Metadata } from "next";
import { TeaserPage } from "../../components/TeaserPage";

export const metadata: Metadata = {
  title: "Events",
  description: "Channel OS™ live sessions restart with the January 2026 launch. Preview the formats we&apos;re lining up.",
};

export default function EventsPage() {
  return (
    <TeaserPage
      title="Channel OS™ Events"
      description="We&apos;re curating a calendar of tactical sessions to accelerate partner work. Here&apos;s what to expect once the community opens."
      sections={[
        {
          title: "Launch week schedule",
          description: "Founding members get first access to these programs.",
          items: [
            {
              title: "Live frameworks",
              description: "Deep dives on the Channel Standard, including flows, KPIs, and rollout plans for your org.",
            },
            {
              title: "Operator labs",
              description: "Hands-on working sessions where we build partner scorecards, GTM briefs, and enablement kits together.",
            },
            {
              title: "Signals briefings",
              description: "Quarterly benchmark reviews covering partner-sourced pipeline, activation, and retention metrics.",
            },
            {
              title: "Community roundtables",
              description: "Small group discussions on marketplaces, co-selling, and integrations moderated by Channel OS™ advisors.",
            },
          ],
        },
        {
          title: "How to participate",
          description: "We&apos;re finalizing the agenda now. Help us prioritize the formats you need most.",
          items: [
            {
              title: "Suggest a topic",
              description: (
                <>
                  Tell us which partner motions you want featured by emailing{" "}
                  <a className="text-brand-primary underline-offset-4 hover:underline" href="mailto:events@channelos.org">
                    events@channelos.org
                  </a>
                  .
                </>
              ),
            },
            {
              title: "Volunteer speakers",
              description: (
                <>
                  We&apos;re curating three-minute lightning talks. Nominate yourself or a teammate to share a play by emailing{" "}
                  <a className="text-brand-primary underline-offset-4 hover:underline" href="mailto:events@channelos.org">
                    events@channelos.org
                  </a>
                  .
                </>
              ),
            },
            {
              title: "On-demand replays",
              description: "Every session is recorded and captioned. Members can revisit templates and key takeaways on demand.",
            },
          ],
          note: (
            <>
              Want to co-host or sponsor a program? Email{" "}
              <a className="text-brand-primary underline-offset-4 hover:underline" href="mailto:events@channelos.org">
                events@channelos.org
              </a>
              .
            </>
          ),
        },
      ]}
    />
  );
}
