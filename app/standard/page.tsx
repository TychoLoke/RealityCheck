import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { CTAButton } from "../../components/CTAButton";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Channel OS Standard v1.0",
  description:
    "A vendor-neutral framework for the channel that unites people, skills, processes, data, and tools across Vendors, Distributors, and Partners.",
};

export default function StandardPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="border-b border-white/10 bg-white/5 py-16 sm:py-20">
        <Container className="flex flex-col gap-6">
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">Channel OS Standard v1.0</h1>
          <p className="max-w-3xl text-base leading-relaxed text-neutral sm:text-lg">
            A vendor-neutral framework for the channel that unites people, skills, processes, data, and tools across Vendors,
            Distributors, and Partners.
          </p>
        </Container>
      </section>

      <Section title="The Four Layers" description="A layered stack ensures interoperability from human expertise to platform automation." columns={2}>
        <Card title="People" description="Shared roles, competencies, and credentials anchor every engagement." />
        <Card title="Process" description="Documented motions and SLAs that orchestrate vendor, distributor, and partner collaboration." />
        <Card title="Data" description="Canonical objects and telemetry enable reconciliation and reporting across systems." />
        <Card title="Tools" description="Adapters and automation map workflows into CRMs, PRMs, ERPs, and PSAs." />
      </Section>

      <Section title="Canonical Objects" description="Standardized data contracts that ensure clarity and accountability across every transaction." columns={2}>
        <Card title="Objects">
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral">
            <li>Partner</li>
            <li>Program</li>
            <li>Deal</li>
            <li>Incentive</li>
            <li>Inventory</li>
            <li>Entitlement</li>
            <li>Ticket</li>
            <li>Invoice</li>
            <li>Renewal</li>
            <li>Lineage</li>
            <li>AccessPolicy</li>
          </ul>
        </Card>
        <Card title="Core SLAs">
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral">
            <li>Deal-registration approval ≤ 48 hours</li>
            <li>Rebate accuracy ≥ 99.7%</li>
            <li>Sales-out data freshness ≤ 24 hours</li>
            <li>Conflict cycle time ≤ 7 days</li>
          </ul>
        </Card>
      </Section>

      <Section title="Conformance & Versioning" description="Participation keeps the standard trustworthy and continuously improving." columns={2}>
        <Card title="Conformance">
          <p className="text-sm leading-relaxed text-neutral">
            Use the Channel OS conformance checklist to benchmark readiness across people, process, data, and tools. Submit your
            results to start the certification workflow.
          </p>
          <CTAButton href="/apply" variant="secondary" className="mt-4 w-fit">
            View the checklist
          </CTAButton>
        </Card>
        <Card title="Versioning">
          <p className="text-sm leading-relaxed text-neutral">
            Public RFCs guide updates to the standard. v1.0 will evolve with community feedback and adoption metrics. Review
            proposals and share input through the Council.
          </p>
          <Link className="mt-4 inline-flex text-sm font-semibold text-accentTeal" href="/council">
            Join the RFC discussions →
          </Link>
        </Card>
      </Section>

      <section className="pb-20">
        <Container className="flex flex-col items-start gap-6 rounded-3xl border border-white/10 bg-black/40 px-8 py-10 shadow-card sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">Download the Channel OS Standard v1.0</h2>
            <p className="mt-3 max-w-2xl text-sm text-neutral">
              Access the PDF reference manual and align your organization with the canonical model for channel excellence.
            </p>
          </div>
          <CTAButton href="#" ariaLabel="Download the v1.0 PDF">
            Download the v1.0 PDF
          </CTAButton>
        </Container>
      </section>
    </div>
  );
}
