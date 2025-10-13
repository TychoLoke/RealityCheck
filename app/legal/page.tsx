import type { Metadata } from "next";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Privacy & Terms",
  description: "Plain language privacy and terms overview for Channel OS.",
};

export default function LegalPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="border-b border-midnight/10 bg-graphite py-16 sm:py-20">
        <Container className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold text-midnight sm:text-4xl">Privacy & Terms (Plain Language)</h1>
        </Container>
      </section>

      <Section title="Our commitments" description="We keep privacy simple and transparent." columns={1}>
        <Card title="What we collect">
          <p className="text-sm leading-relaxed text-neutral">
            Email addresses, names, and role information submitted on forms. We do not sell or share your data with advertisers.
          </p>
        </Card>
        <Card title="How we use it">
          <p className="text-sm leading-relaxed text-neutral">
            Updates about education programs, certification milestones, and community governance. You can unsubscribe at any time.
          </p>
        </Card>
        <Card title="Your rights">
          <p className="text-sm leading-relaxed text-neutral">
            We respect GDPR. Request exports or deletion by emailing <a className="text-accentTeal" href="mailto:hello@channelos.org">hello@channelos.org</a>.
          </p>
        </Card>
        <Card title="Where data lives">
          <p className="text-sm leading-relaxed text-neutral">
            EU-hosted providers when available; otherwise, we select vendors that meet equivalent safeguards.
          </p>
        </Card>
        <Card title="Unsubscribes">
          <p className="text-sm leading-relaxed text-neutral">
            Every email includes a one-click unsubscribe. Removing yourself from one list does not block certification status notifications.
          </p>
        </Card>
      </Section>
    </div>
  );
}
