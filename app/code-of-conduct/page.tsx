import type { Metadata } from "next";
import { TeaserPage } from "../../components/TeaserPage";

export const metadata: Metadata = {
  title: "Code of Conduct",
  description:
    "Channel OS™ is setting the tone for a practical, respectful community ahead of the January 2026 launch.",
};

export default function CodeOfConductPage() {
  return (
    <TeaserPage
      title="Code of Conduct"
      description="Everyone joins Channel OS™ to work, learn, and build. These principles guide how we show up before day one and beyond."
      sections={[
        {
          title: "Core expectations",
          description:
            "We keep the conversation vendor-neutral, inclusive, and focused on tangible partner outcomes.",
          items: [
            {
              title: "Respect first",
              description: "Listen actively. Debate ideas, not people. Give credit when you reuse or remix shared work.",
            },
            {
              title: "Keep it practical",
              description: "Share tactics, metrics, and processes that others can apply. Skip pitches and speculation.",
            },
            {
              title: "Protect data",
              description: "Only post assets and metrics you have permission to share. Redact sensitive partner information.",
            },
            {
              title: "Be accountable",
              description: "Report issues quickly so moderators can step in. Repeated violations result in removal.",
            },
          ],
        },
        {
          title: "Enforcement in the teaser phase",
          description:
            "We start moderation before launch to keep early programs safe and focused.",
          items: [
            {
              title: "Intake",
              description: "All founding members agree to the code when they RSVP. Access can be paused if standards slip.",
            },
            {
              title: "Incident response",
              description: "Email conduct@channelos.org with context and links. We respond within two business days.",
            },
            {
              title: "Escalation",
              description: "Serious violations move to a review board of community advisors before reinstatement is considered.",
            },
          ],
          note: (
            <>
              Need to clarify a scenario? Contact{" "}
              <a className="text-brand-primary underline-offset-4 hover:underline" href="mailto:conduct@channelos.org">
                conduct@channelos.org
              </a>
              .
            </>
          ),
        },
      ]}
    />
  );
}
