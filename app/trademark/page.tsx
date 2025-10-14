import type { Metadata } from "next";
import { CTAButton } from "../../components/CTAButton";
import { Container } from "../../components/Container";

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
    <div className="flex flex-col gap-12 pb-24 text-midnight">
      <section className="border-b border-midnight/10 bg-gradient-to-b from-graphite via-cloud to-cloud py-16 sm:py-20">
        <Container className="flex flex-col gap-6">
          <h1 className="text-3xl font-semibold sm:text-4xl">Trademark & Brand Use</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-neutral sm:text-xl">
            Channel OS™ is the vendor-neutral operating system for the channel. This page explains how you may reference our name and logo while keeping the community fair and clear.
          </p>
        </Container>
      </section>

      <Container className="flex flex-col gap-10">
        {sections.map((section) => (
          <section key={section.title} className="space-y-4">
            <h2 className="text-2xl font-semibold text-midnight sm:text-3xl">{section.title}</h2>
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
          Request Permission
        </CTAButton>
      </Container>
    </div>
  );
}
