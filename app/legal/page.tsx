import type { Metadata } from "next";
import { Card } from "../../components/Card";
import { Hero } from "../../components/Hero";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Privacy & Terms — Plain language",
  description:
    "How Channel OS™ handles your data and rights. Minimal collection, no selling, EU-friendly.",
};

export default function LegalPage() {
  return (
    <div className="flex flex-col gap-20 pb-28 text-white sm:gap-24 sm:pb-36">
      <Hero
        eyebrow="Legal"
        title="Privacy & Terms (summary)"
        description="We collect only what we need to run the community and courses—name, email, role, and your form responses. We never sell your data and you can unsubscribe or request deletion at any time."
        primaryCta={{ label: "Contact legal", href: "mailto:hello@channelos.org" }}
        secondaryCta={{ label: "Apply for access", href: "/apply" }}
        proofPoints={["Minimal collection", "No selling", "EU-friendly"]}
        variant="dark"
      />

      <Section title="Your controls" description="Straightforward ways to manage your data." columns={2}>
        <Card title="Access & deletion" description="Email hello@channelos.org to request exports or deletion. We respond within 7 days." />
        <Card title="Unsubscribe" description="Every message includes a one-click opt-out. Certification notices still arrive if required." />
      </Section>
    </div>
  );
}
