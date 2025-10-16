import type { Metadata } from "next";
import { ValueChainDiagram } from "../../components/ValueChainDiagram";
import { Card } from "../../components/Card";
import { EmailInline } from "../../components/EmailInline";

export const metadata: Metadata = {
  title: "What is the Channel?",
  description: "Understand how the IT channel works and where Channel OS™ fits across suppliers, vendors, distributors, partners, and customers.",
};

export default function TheChannelPage() {
  return (
    <div className="flex flex-col gap-16">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold text-brand-primary md:text-5xl">What is the Channel and how does it work?</h1>
        <p className="text-base text-brand-secondary">
          The channel connects suppliers, vendors, distributors, managed service providers, integrators, and customers.
        </p>
      </header>

      <ValueChainDiagram />

      <Card className="space-y-4">
        <h2 className="text-2xl font-semibold text-brand-primary">How Channel OS™ fits</h2>
        <p className="text-base text-brand-secondary">
          Channel OS™ maps the framework pillars across the value chain and uses adapters to meet existing CRM, ERP, PSA, and marketplace systems where they are.
        </p>
        <p className="text-base text-brand-secondary">
          Strategy, operations, enablement, and platform layers align the people doing the work with the data that proves outcomes.
        </p>
      </Card>

      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-brand-primary">Join the Channel OS™ mailing list</h2>
        <p className="mt-2 text-base text-brand-secondary">
          Monthly build notes, launch milestones, and invitations to community sessions.
        </p>
        <div className="mt-6">
          <EmailInline variant="mid" />
        </div>
      </div>
    </div>
  );
}
