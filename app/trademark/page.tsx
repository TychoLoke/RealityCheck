import type { Metadata } from "next";
import { CTAButton } from "../../components/CTAButton";
import { Container } from "../../components/Container";
import { Hero } from "../../components/Hero";

export const metadata: Metadata = {
  title: "Channel OS™ Trademark & Brand Use",
  description:
    "Guidelines for referencing the Channel OS™ name, badges, and assets while keeping the ecosystem fair and clear.",
};

const sections = [
  {
    title: "What we own",
    items: [
      "The word mark “Channel OS™”.",
      "Our logos and badges, including Channel OS™ Certified and Channel OS™ Compatible.",
    ],
  },
  {
    title: "Permitted descriptive use (no permission needed)",
    items: [
      "Text like “compatible with Channel OS™” or “aligns with the Channel OS™ standard” to describe interoperability or methodology.",
      "Factual references to our content (e.g., citing the Standard v1.0) with a link.",
    ],
  },
  {
    title: "Prohibited uses",
    items: [
      "Using Channel OS™ in a product or company name, domain, or handle.",
      "Any wording that implies partnership, endorsement, or certification without a written grant.",
      "Visuals that resemble our logo/badges or could confuse users.",
    ],
  },
  {
    title: "Certification & badges",
    items: [
      "People: “Channel OS™ Certified” (e.g., CCO-F).",
      "Organizations: “Channel OS™ Certified” (Silver/Gold/Platinum).",
      "Platforms: “Channel OS™ Compatible”.",
      "Use of these names and badges is only permitted after passing published criteria and receiving written confirmation.",
    ],
  },
  {
    title: "How to request permission",
    items: [
      "Email hello@channelos.org with your organization name, intended use, mockups (if any), and timeframe.",
    ],
  },
  {
    title: "Reporting misuse",
    items: [
      "If you see confusing or misleading use of Channel OS™, please email hello@channelos.org with a link and screenshots.",
    ],
  },
  {
    title: "Timestamping our standard",
    items: [
      "We timestamp major releases to create a public, immutable record.",
      "Channel OS™ Standard v1.0 archived link: https://archive.org/details/channel-os-standard-v1-0",
      "Verification hash (PDF): 8f4c2d1a9b3e5f70",
    ],
  },
  {
    title: "Status",
    items: [
      "Channel OS™ is used under common-law rights pending registration. We will update this page upon registration.",
    ],
  },
];

export default function TrademarkPage() {
  return (
    <div className="flex flex-col gap-20 pb-28 text-midnight sm:gap-24 sm:pb-36">
      <Hero
        eyebrow="Trademark"
        title="Trademark & Brand Use"
        description="Channel OS™ is the vendor-neutral operating system for the channel. This page explains how you may reference our name and logo while keeping the community fair and clear."
        primaryCta={{ label: "Request permission", href: "mailto:hello@channelos.org" }}
        secondaryCta={{ label: "Review the Standard", href: "/standard" }}
        proofPoints={["Neutral", "Evidence-first", "Versioned"]}
      />

      <Container className="flex flex-col gap-12">
        {sections.map((section) => (
          <section key={section.title} className="space-y-4">
            <h2 className="text-2xl font-semibold sm:text-3xl">{section.title}</h2>
            <ul className="list-disc space-y-3 pl-5 text-base leading-relaxed text-neutral">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}

        <p className="text-base leading-relaxed text-neutral">
          Thank you for helping keep the Channel OS™ ecosystem clear, fair, and vendor-neutral.
        </p>

        <CTAButton href="mailto:hello@channelos.org" className="self-start">
          Request permission
        </CTAButton>
      </Container>
    </div>
  );
}
