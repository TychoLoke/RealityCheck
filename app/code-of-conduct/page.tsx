import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code of Conduct",
  description: "Respect. Evidence over hype. No unsolicited selling.",
};

const rules = [
  "Respect fellow members.",
  "Share evidence over hype.",
  "No unsolicited selling.",
  "Assume good intent.",
  "Moderators may remove content that breaks the rules.",
];

export default function CodeOfConductPage() {
  return (
    <div className="flex flex-col gap-8">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold text-brand-primary">Code of Conduct</h1>
        <p className="max-w-2xl text-base text-brand-secondary">
          Respect. Evidence over hype. No unsolicited selling. Assume good intent.
        </p>
      </header>
      <ul className="space-y-3 text-base text-brand-secondary">
        {rules.map((rule) => (
          <li key={rule} className="rounded-[12px] border border-zinc-200 bg-white p-4 text-brand-primary">
            {rule}
          </li>
        ))}
      </ul>
    </div>
  );
}
