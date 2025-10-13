import type { Metadata } from "next";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Embed } from "../../components/Embed";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Channel OS Council",
  description:
    "A balanced Vendor-Distributor-Partner council with academia to steward the Channel OS standard through public RFCs.",
};

export default function CouncilPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="border-b border-white/10 bg-white/5 py-16 sm:py-20">
        <Container className="flex flex-col gap-6">
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">Channel OS Council</h1>
          <p className="max-w-3xl text-base leading-relaxed text-neutral sm:text-lg">
            Charter: balanced V-D-P + academia; one org = one vote; public RFCs.
          </p>
        </Container>
      </section>

      <Section title="Council Charter" description="Principles that keep the Channel OS standard open and accountable." columns={1}>
        <Card title="Representation">
          <p className="text-sm leading-relaxed text-neutral">
            Balanced seats across Vendors, Distributors, Partners, and academia. Each organization has a single vote to keep the
            council vendor-neutral.
          </p>
        </Card>
        <Card title="Governance">
          <p className="text-sm leading-relaxed text-neutral">
            Public RFCs with transparent voting and documented rationales. Meeting notes and outcomes are published to the
            community.
          </p>
        </Card>
      </Section>

      <Section title="Apply" description="Nominate your organization to take part in the Channel OS Council." columns={1}>
        <Embed
          html={process.env.NEXT_PUBLIC_FORMS_COUNCIL_EMBED}
          title="Council application form"
          description="Paste your council application embed snippet into .env.local."
        />
      </Section>
    </div>
  );
}
