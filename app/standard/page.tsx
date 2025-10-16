import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "../../components/Container";
import { EmailInline } from "../../components/EmailInline";
import { MDXContent } from "../../components/MDXContent";
import StandardPreview, { metadata as standardMetadata } from "../../content/standard/preview.mdx";

export const metadata: Metadata = {
  title: "Standard",
  description: "Preview the Channel OS Standard across People, Process, Data, Tools, and Adapters.",
  openGraph: {
    title: "Channel OS Standard",
    description: "Preview the Channel OS Standard across People, Process, Data, Tools, and Adapters.",
    url: "/standard",
    images: [
      {
        url: "/standard/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Channel OS Standard preview",
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
    <Container className="flex flex-col gap-16">
      <header className="space-y-6">
        <h1 className="text-3xl font-semibold text-ink">Channel OS Standard preview</h1>
        <p className="text-lg text-ink/80">{standardMetadata?.summary ?? "Preview what ships first."}</p>
        <div className="flex flex-wrap gap-3">
          {sections.map((section) => (
            <Link key={section.id} href={`#${section.id}`} className="rounded-full border border-slate/60 bg-night/80 px-4 py-2 text-sm text-ink/80 transition hover:text-ink">
              {section.label}
            </Link>
          ))}
        </div>
        <div className="rounded-2xl border border-warning/50 bg-night/70 p-4 text-sm text-warning">
          Preview only — detailed documentation arrives with each quarterly release.
        </div>
      </header>

      <section className="grid gap-6 rounded-2xl border border-slate/60 bg-night/80 p-8 shadow-surface md:grid-cols-[1fr_1fr]">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-ink">Mini roadmap</h2>
          <p className="text-sm text-ink/70">Quarterly drops keep the Standard moving toward the 2026 launch.</p>
        </div>
        <ul className="space-y-4">
          {roadmap.map((entry) => (
            <li key={entry.quarter} className="rounded-2xl border border-slate/60 bg-slate/40 p-4 text-sm text-ink/80">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink/50">{entry.quarter}</p>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                {entry.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <article className="rounded-2xl border border-slate/60 bg-night/80 p-8 shadow-surface">
        <MDXContent>
          <StandardPreview />
        </MDXContent>
      </article>

      <div className="rounded-2xl border border-slate/60 bg-night/80 p-6">
        <EmailInline variant="mid" message="Get release notes" />
      </div>
    </Container>
  );
}
