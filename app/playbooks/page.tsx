import type { Metadata } from "next";
import { Card } from "../../components/Card";
import { SubscribeButton } from "../../components/SubscribeButton";
import * as baselineManagement from "../../content/playbooks/baseline-management.mdx";
import * as governanceApprovals from "../../content/playbooks/governance-approvals.mdx";
import * as dataIntegrity from "../../content/playbooks/data-integrity.mdx";
import * as enablementLoops from "../../content/playbooks/enablement-loops.mdx";
import * as platformReadiness from "../../content/playbooks/platform-readiness.mdx";

const playbooks = [
  baselineManagement,
  governanceApprovals,
  dataIntegrity,
  enablementLoops,
  platformReadiness,
].map((module) => module.metadata);

export const metadata: Metadata = {
  title: "Channel OS™ playbooks",
  description: "Preview the Channel OS™ playbooks covering baselines, governance, data integrity, enablement, and platforms.",
};

export default function PlaybooksPage() {
  return (
    <div className="flex flex-col gap-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold text-brand-primary md:text-5xl">Channel OS™ Playbooks</h1>
        <p className="text-base text-brand-secondary">
          MDX-driven guides will unpack every pillar. Until launch, use the mailing list to follow each release.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {playbooks.map((playbook) => (
          <Card key={playbook.title} className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-brand-primary">{playbook.title}</h2>
              <p className="mt-2 text-sm text-brand-secondary">{playbook.promise}</p>
            </div>
            <span className="inline-flex w-fit items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-secondary">
              Preview soon
            </span>
            <SubscribeButton>Notify me</SubscribeButton>
          </Card>
        ))}
      </div>
    </div>
  );
}
