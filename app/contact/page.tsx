import type { Metadata } from "next";
import { TeaserPage } from "../../components/TeaserPage";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach the Channel OS™ team before the January 2026 community launch.",
};

export default function ContactPage() {
  return (
    <TeaserPage
      title="Contact Channel OS™"
      description="Need early access details, press resources, or partnership info? Choose the path that fits and we&apos;ll respond within two business days."
      sections={[
        {
          title: "Talk to the core team",
          description: "Direct inboxes for the most common requests while we finish the launch build.",
          items: [
            {
              title: "General inquiries",
              description: (
                <>
                  Email{" "}
                  <a className="text-brand-primary underline-offset-4 hover:underline" href="mailto:hello@channelos.org">
                    hello@channelos.org
                  </a>{" "}
                  for membership questions, billing, or roadmap suggestions.
                </>
              ),
            },
            {
              title: "Press & speaking",
              description: (
                <>
                  Request interviews or statements at{" "}
                  <a className="text-brand-primary underline-offset-4 hover:underline" href="mailto:press@channelos.org">
                    press@channelos.org
                  </a>
                  .
                </>
              ),
            },
            {
              title: "Partnerships",
              description: (
                <>
                  Share alliance ideas or integrations via{" "}
                  <a className="text-brand-primary underline-offset-4 hover:underline" href="mailto:partners@channelos.org">
                    partners@channelos.org
                  </a>
                  .
                </>
              ),
            },
            {
              title: "Conduct & safety",
              description: (
                <>
                  Report issues privately at{" "}
                  <a className="text-brand-primary underline-offset-4 hover:underline" href="mailto:conduct@channelos.org">
                    conduct@channelos.org
                  </a>
                  .
                </>
              ),
            },
          ],
        },
        {
          title: "Prep your questions",
          description: "Here&apos;s what helps us move quickly while we&apos;re still in teaser mode.",
          items: [
            {
              title: "Context",
              description: "Share your role, company, and what you&apos;re trying to solve with Channel OS™.",
            },
            {
              title: "Timing",
              description: "Let us know if you have a deadline or event tied to the request.",
            },
            {
              title: "Attachments",
              description: "Send docs or decks as links only. We&apos;ll provide a secure folder if needed.",
            },
          ],
        },
      ]}
    />
  );
}
