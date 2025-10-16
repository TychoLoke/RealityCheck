import type { Metadata } from "next";
import { ValueChainDiagram } from "../../components/ValueChainDiagram";
import { Card } from "../../components/Card";
import { EmailInline } from "../../components/EmailInline";

export const metadata: Metadata = {
  title: "What is the Channel?",
  description: "Understand how the IT channel works and where Channel OS™ fits across suppliers, vendors, distributors, partners, and customers.",
  openGraph: {
    title: "What is the Channel?",
    description: "Understand how the IT channel works and where Channel OS™ fits across suppliers, vendors, distributors, partners, and customers.",
    url: "/the-channel",
    images: [
      {
        url: "/the-channel/opengraph-image",
        width: 1200,
        height: 630,
        alt: "What is the Channel?",
      },
    ],
  },
};

export default function TheChannelPage() {
  return (
    <div className="flex flex-col gap-16">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold text-brand-primary md:text-5xl">What is the Channel and how does it work?</h1>
        <p className="text-base text-brand-secondary">
          Channel OS™ traces how suppliers create technology, vendors package and program it, distributors and aggregators scale it, partners operate it, and customers rely on it for outcomes.
        </p>
      </header>

      <ValueChainDiagram />

      <section className="grid gap-6 md:grid-cols-2">
        <Card className="space-y-3">
          <h2 className="text-2xl font-semibold text-brand-primary">Knowledge flows</h2>
          <p className="text-base text-brand-secondary">
            Enablement, certifications, and shared language align every stop on the channel so launches land consistently.
          </p>
        </Card>
        <Card className="space-y-3">
          <h2 className="text-2xl font-semibold text-brand-primary">Commercial flows</h2>
          <p className="text-base text-brand-secondary">
            Deal registration, incentives, and renewals move through agreements, approvals, and baselines to keep revenue predictable.
          </p>
        </Card>
        <Card className="space-y-3">
          <h2 className="text-2xl font-semibold text-brand-primary">Operational flows</h2>
          <p className="text-base text-brand-secondary">
            Provisioning, baselines, and compliance checks make outcomes measurable for customers and auditable for every partner.
          </p>
        </Card>
      </section>

      <Card className="space-y-4">
        <h2 className="text-2xl font-semibold text-brand-primary">How Channel OS™ fits</h2>
        <p className="text-base text-brand-secondary">
          Channel OS™ connects People, Process, Data, and Tools with adapters into CRM, ERP, PSA, and marketplace systems.
        </p>
        <p className="text-base text-brand-secondary">
          Strategy, operations, enablement, and platform layers keep each flow measurable so channel teams publish approvals ≤48 hours, maintain baselines, and detect drift.
        </p>
      </Card>

      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-brand-primary">Join the Channel OS™ mailing list</h2>
        <p className="mt-2 text-base text-brand-secondary">
          Monthly build notes, launch milestones, and invitations to community sessions.
        </p>
        <div className="mt-6">
          <EmailInline variant="mid" message="Be first to see how the framework codifies every flow." />
        </div>
      </div>
    </div>
  );
}
