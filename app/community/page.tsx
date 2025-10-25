import type { Metadata } from "next";
import Link from "next/link";
import { FormMinimal } from "../../components/FormMinimal";
import { JoinStrip } from "../../components/JoinStrip";
import { SectionHeader } from "../../components/SectionHeader";
import { ValueTrio } from "../../components/ValueTrio";

export const metadata: Metadata = {
  title: "Community",
  description: "Join the Channel OS™ community to learn, share patterns, and ship faster.",
};

export default function CommunityPage() {
  return (
    <div className="flex flex-col gap-20">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold text-brand-primary">Join the Channel OS™ Community</h1>
        <p className="max-w-2xl text-base text-brand-secondary">
          Practitioner-first space for MSPs, vendors, distributors, marketplaces, and ISVs to build the channel together.
        </p>
      </section>

      <section className="space-y-8">
        <SectionHeader title="What you’ll find" />
        <ValueTrio
          items={[
            { title: "Meetups & Office Hours", description: "Quarterly, recorded, always action-oriented." },
            { title: "Practice Library", description: "Concise playbooks and checklists you can deploy." },
            { title: "Talks & Debriefs", description: "Unfiltered conversations with builders." },
          ]}
        />
      </section>

      <section id="contribute" className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-6">
          <SectionHeader title="Contribute" description="Speak, write, or mentor." />
          <FormMinimal
            title="Raise your hand"
            description="Share how you’d like to contribute. We read every submission."
            fields={[
              { name: "name", label: "Name", required: true, placeholder: "Alex Taylor" },
              { name: "role", label: "Role", required: true, placeholder: "Channel Lead, MSP" },
              { name: "topic", label: "Topic", required: true, placeholder: "Partner scorecards" },
              { name: "links", label: "Links", placeholder: "Site, LinkedIn, recordings" },
              { name: "message", label: "Message", type: "textarea", required: true, placeholder: "What should we cover?" },
            ]}
            submitLabel="Send"
            successMessage="Thanks—we’ll reach out."
          />
        </div>
        <aside className="space-y-6 rounded-[16px] border border-zinc-200 bg-brand-muted p-6">
          <h2 className="text-xl font-semibold text-brand-primary">Code of Conduct</h2>
          <ul className="space-y-3 text-sm text-brand-secondary">
            <li>Be respectful.</li>
            <li>Share evidence.</li>
            <li>No vendor spamming.</li>
          </ul>
          <Link
            href="/code-of-conduct"
            className="inline-flex items-center justify-center rounded-[12px] border border-brand-secondary/40 px-4 py-2 text-sm font-semibold text-brand-primary transition hover:border-brand-primary"
          >
            Full policy
          </Link>
        </aside>
      </section>

      <JoinStrip title="Join the mailing list" description="Monthly build notes and community invites." successMessage="You’re in." />
    </div>
  );
}
