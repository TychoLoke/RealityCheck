import type { Metadata } from "next";
import { TeaserPage } from "../../components/TeaserPage";

export const metadata: Metadata = {
  title: "Brand use",
  description:
    "Channel OS™ brand guidance ships with the public launch on January 1, 2026. Use these preview notes to prepare.",
};

export default function BrandUsePage() {
  return (
    <TeaserPage
      title="Channel OS™ brand use"
      description="Full brand assets publish with the community launch. Until then, use these guardrails when referencing Channel OS™."
      sections={[
        {
          title: "What&apos;s available now",
          description:
            "Use text references only until the asset kit is live. The Channel OS™ wordmark appears in Ink (#0B0E1A) on Paper backgrounds.",
          items: [
            {
              title: "Approved references",
              description: "Channel OS™ (with the trademark). Avoid abbreviations or stylized alternates.",
            },
            {
              title: "Backgrounds",
              description: "Paper (#FFFFFF) or Ink (#0B0E1A) only. Keep the mark clear of patterns, photography, or gradients.",
            },
            {
              title: "Tone",
              description: "Neutral and practical. Focus copy on community value, not speculative roadmap promises.",
            },
            {
              title: "Request assets",
              description: "Need the logo for press or partnership decks? Email press@channelos.org to request early approval.",
            },
          ],
        },
        {
          title: "What arrives in January",
          description:
            "At launch we release vector files, dark-mode treatments, slide templates, and example partner placements.",
          items: [
            {
              title: "Download kit",
              description: "Wordmark, logomark, favicon, and social avatars in SVG and PNG.",
            },
            {
              title: "Usage playbook",
              description: "Clear do/don&apos;t examples covering spacing, typography, and co-branding scenarios.",
            },
            {
              title: "Press library",
              description: "Launch story, leadership bios, and screenshots for media use.",
            },
            {
              title: "Community badge",
              description: "Opt-in badge for members that links back to their Channel OS™ profile or chapter page.",
            },
          ],
          note: (
            <>
              Questions before then? Contact{" "}
              <a className="text-brand-primary underline-offset-4 hover:underline" href="mailto:press@channelos.org">
                press@channelos.org
              </a>
              .
            </>
          ),
        },
      ]}
    />
  );
}
