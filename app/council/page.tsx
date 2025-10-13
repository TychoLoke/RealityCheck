import type { Metadata } from "next";
import { Card } from "../../components/Card";
import { Embed } from "../../components/Embed";
import { Hero } from "../../components/Hero";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Channel OS Council — One ecosystem, one table",
  description:
    "Balanced V-D-P governance, public RFCs, versioned releases, neutral by design.",
};

export default function CouncilPage() {
  return (
    <div className="flex flex-col gap-16 pb-24 text-midnight">
      <Hero
        eyebrow="Council"
        title="One ecosystem, one table."
        description="Balanced V-D-P governance keeps Channel OS neutral, transparent, and accountable."
        primaryCta={{ label: "Read the charter", href: "#charter" }}
        secondaryCta={{ label: "Apply to the Council", href: "#apply" }}
        tertiaryCta={{ label: "Submit an RFC", href: "#apply" }}
        proofPoints={["Balanced seats", "One org = one vote", "Public RFCs"]}
      />

      <Section
        id="charter"
        title="Governance in practice"
        description="Checks and balances that keep Channel OS neutral, open, and accountable."
        columns={2}
        cta={{ label: "Download the charter", href: "#apply", variant: "primary" }}
      >
        <Card title="Representation" description="Balanced seats across Vendors, Distributors, Partners/MSPs, and academia." />
        <Card title="One org = one vote" description="No single company controls the roadmap or the certifications." />
        <Card title="Public RFCs" description="Anyone can propose changes. Every version ships with commentary and audit trails." />
        <Card title="Transparency" description="Meeting notes, SLA stewardship, and certification oversight are published to the community." />
      </Section>

      <Section
        id="apply"
        title="Apply or submit an RFC"
        description="Tell us how you want to contribute to the Council."
        columns={1}
        cta={{ label: "Book an intro", href: "#apply", variant: "primary" }}
      >
        <Embed
          html={process.env.NEXT_PUBLIC_FORMS_COUNCIL_EMBED}
          title="Council application or RFC form"
          description="Embed your form via .env.local to collect nominations and proposals."
        />
      </Section>
    </div>
  );
}
