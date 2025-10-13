import type { Metadata } from "next";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Privacy & Terms — Plain language",
  description:
    "How we handle your data and your rights. Minimal collection, no selling, EU-friendly.",
};

export default function LegalPage() {
  return (
    <div className="flex flex-col gap-16 pb-24 text-graphite">
      <section className="border-b border-graphite/15 bg-gradient-to-b from-midnight via-[#101a31] to-midnight py-16 sm:py-20">
        <Container className="flex flex-col gap-6">
          <h1 className="text-3xl font-semibold sm:text-4xl">Privacy & Terms (summary)</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-neutral sm:text-xl">
            We collect only what we need to run the community and courses (name, email, role, and your form responses). We never sell your data. You can unsubscribe or request deletion at any time. Course data may be used (anonymized) to improve the Standard. Hosting and processing are EU-friendly. For questions, contact hello@channelos.org.
          </p>
        </Container>
      </section>

      <Section title="Your controls" description="Straightforward ways to manage your data." columns={2}>
        <Card title="Access & deletion" description="Email hello@channelos.org to request exports or deletion. We respond within 7 days." />
        <Card title="Unsubscribe" description="Every message includes a one-click opt-out. Certification notices still arrive if required." />
      </Section>
    </div>
  );
}
