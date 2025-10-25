import type { Metadata } from "next";
import { TeaserPage } from "../../components/TeaserPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Channel OS™ is a vendor-neutral community, standard, and training program preparing for a January 1, 2026 launch.",
};

export default function AboutPage() {
  return (
    <TeaserPage
      title="About Channel OS™"
      description="We&apos;re assembling a vendor-neutral operating system for channel teams. The community, standard, and training tracks open January 1, 2026."
      sections={[
        {
          title: "What we&apos;re building",
          description:
            "Every track is designed to move partner teams from learning to execution without fluff.",
          items: [
            {
              title: "Community",
              description: "Private forums, live labs, and templates where practitioners compare playbooks in real time.",
            },
            {
              title: "Channel Standard",
              description: "A living specification of partner roles, flows, and KPIs that keeps everyone aligned.",
            },
            {
              title: "Training",
              description: "Compact courses with repeatable exercises and scorecards to measure partner impact.",
            },
            {
              title: "Playbooks",
              description: "Ready-to-run checklists that turn the Standard into execution guides for every channel function.",
            },
          ],
        },
        {
          title: "Who is behind it",
          description:
            "Channel OS™ is led by Tycho Löke with a roster of advisors from partner, rev ops, and enablement teams.",
          items: [
            {
              title: "Neutral by design",
              description: "No vendor sales pitches—only practical guidance sourced from operators who run channel programs daily.",
            },
            {
              title: "Community first",
              description: "Members shape the roadmap, vote on templates, and co-author new modules as the Standard matures.",
            },
          ],
          note: (
            <>
              Want to collaborate or share input? Email{" "}
              <a className="text-brand-primary underline-offset-4 hover:underline" href="mailto:hello@channelos.org">
                hello@channelos.org
              </a>{" "}
              with your focus area.
            </>
          ),
        },
      ]}
    />
  );
}
