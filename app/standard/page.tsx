import type { Metadata } from "next";
import Link from "next/link";
import { EmailInline } from "../../components/EmailInline";
import { MDXContent } from "../../components/MDXContent";
import StandardPreview, { metadata as standardMetadata } from "../../content/standard/preview.mdx";

export const metadata: Metadata = {
  title: "Channel OS™ Standard",
  description: "Preview the Channel OS™ Standard across People, Process, Data, Tools, and Adapters while we build toward launch.",
  openGraph: {
    title: "Channel OS™ Standard",
    description: "Preview the Channel OS™ Standard across People, Process, Data, Tools, and Adapters while we build toward launch.",
    url: "/standard",
    images: [
      {
        url: "/standard/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Channel OS™ Standard preview",
      },
    ],
  },
};

const sections = [
  { id: "people", label: "People" },
  { id: "process", label: "Process" },
  { id: "data", label: "Data" },
  { id: "tools", label: "Tools" },
  { id: "adapters", label: "Adapters" },
];

const roadmap = [
  {
    quarter: "Q3 2024",
    items: ["Publish v0.2 profiles", "Invite founding reviewers"],
  },
  {
    quarter: "Q4 2024",
    items: ["Release adapter blueprints", "Drift monitoring alpha"],
  },
  {
    quarter: "Q1 2025",
    items: ["Certification criteria draft", "Community feedback loop"],
  },
  {
    quarter: "Q2 2025",
    items: ["Pre-launch pilots", "Stabilize baseline library"],
  },
];

export default function StandardPage() {
  return (
    <div className="flex flex-col gap-16">
      <header className="space-y-6">
        <h1 className="text-4xl font-semibold text-brand-primary md:text-5xl">Channel OS™ Standard preview</h1>
        <p className="text-lg text-brand-secondary">{standardMetadata?.summary ?? "Preview what ships first."}</p>
        <div className="flex flex-wrap gap-3">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-brand-primary underline-offset-4 hover:underline"
            >
              {section.label}
            </Link>
          ))}
        </div>
        <div className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-4 text-sm text-brand-secondary">
          Preview only — detailed documentation arrives with each quarterly release.
        </div>
      </header>

      <section className="grid gap-6 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm md:grid-cols-[1fr_1fr]">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-brand-primary">Mini roadmap</h2>
          <p className="text-base text-brand-secondary">Quarterly drops keep the Standard moving toward the 2026 launch.</p>
        </div>
        <ul className="space-y-4">
          {roadmap.map((entry) => (
            <li key={entry.quarter} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-brand-secondary">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-secondary">{entry.quarter}</p>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                {entry.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <article className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
        <MDXContent>
          <StandardPreview />
        </MDXContent>
      </article>

      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <EmailInline variant="mid" message="Get release notes and change logs as the Standard ships." />
      </div>
    </div>
  );
}
