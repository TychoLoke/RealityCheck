import type { Metadata } from "next";
import { TeaserPage } from "../../components/TeaserPage";

export const metadata: Metadata = {
  title: "Terms",
  description: "Channel OS™ preview terms ahead of the January 2026 launch.",
};

export default function TermsPage() {
  return (
    <TeaserPage
      title="Terms of use"
      description="These pre-launch terms outline how we operate during the teaser phase. Full member terms publish at launch."
      sections={[
        {
          title: "What applies today",
          description: "Simple rules while we prepare the full platform.",
          items: [
            {
              title: "Preview access",
              description: "Any early content we share remains confidential and cannot be redistributed without permission.",
            },
            {
              title: "No warranties",
              description: "Content is provided as-is during the build stage. Expect updates as we finalize the Standard.",
            },
            {
              title: "Feedback loop",
              description: "By sending suggestions you grant Channel OS™ the right to use that input to improve the product.",
            },
          ],
        },
        {
          title: "What&apos;s coming",
          description: "At launch we publish member terms, partner agreements, and clear SLAs.",
          items: [
            {
              title: "Membership terms",
              description: "Covers billing, renewals, and cancellation policies.",
            },
            {
              title: "Acceptable use",
              description: "Detailed guardrails for community participation, content sharing, and moderation.",
            },
            {
              title: "Data processing",
              description: "Legal documentation for GDPR, CCPA, and partner data handling.",
            },
          ],
          note: (
            <>
              Legal or compliance questions? Email{" "}
              <a className="text-brand-primary underline-offset-4 hover:underline" href="mailto:legal@channelos.org">
                legal@channelos.org
              </a>
              .
            </>
          ),
        },
      ]}
    />
  );
}
