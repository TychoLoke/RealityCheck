import type { Metadata } from "next";
import { CardList } from "../../components/CardList";
import { SectionHeader } from "../../components/SectionHeader";
import { playbooks } from "../../lib/content";

export const metadata: Metadata = {
  title: "Playbooks",
  description: "Templates that move work from plan to done.",
};

export default function PlaybooksPage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-brand-primary">Playbooks</h1>
        <p className="max-w-2xl text-base text-brand-secondary">Templates that move work from plan to done.</p>
      </section>

      <section className="space-y-6">
        <SectionHeader title="Library" description="Each entry notes difficulty, time to ship, and tags." />
        <CardList
          items={playbooks.map((playbook) => ({
            title: playbook.title,
            description: playbook.summary,
            detail: `${playbook.difficulty} · ${playbook.timeToShip} · ${playbook.tags.join(", ")}`,
            actions: playbook.downloads ? [{ label: playbook.downloads, href: "https://example.com" }] : undefined,
          }))}
        />
      </section>
    </div>
  );
}
