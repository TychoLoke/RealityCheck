import type { Metadata } from "next";
import { TeaserPage } from "../../components/TeaserPage";
import { MDXContent } from "../../components/MDXContent";
import { EmailInline } from "../../components/EmailInline";
import StandardPreview, { metadata as standardMetadata } from "../../content/standard/preview.mdx";

export const metadata: Metadata = {
  title: "Channel OS™ Standard",
  description:
    "Preview the Channel OS™ Standard across People, Process, Data, Tools, and Adapters while we build toward launch.",
  openGraph: {
    title: "Channel OS™ Standard",
    description:
      "Preview the Channel OS™ Standard across People, Process, Data, Tools, and Adapters while we build toward launch.",
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

const focusAreas = [
  {
    title: "People",
    description: "Roles, skills, and ownership across partner, revenue, enablement, and product teams.",
  },
  {
    title: "Process",
    description: "End-to-end motions that move partners from recruit to revenue to retention.",
  },
  {
    title: "Data",
    description: "Shared metrics, definitions, and dashboards so every team works from the same truth.",
  },
  {
    title: "Tools",
    description: "System architecture and automation guidance for CRMs, PRMs, marketplaces, and collaboration stacks.",
  },
  {
    title: "Adapters",
    description: "Industry-specific patterns and partner archetypes that tailor the Standard to your context.",
  },
];

const roadmap = [
  {
    title: "Q4 2024",
    description: (
      <ul className="list-disc space-y-1 pl-5 text-sm text-brand-secondary">
        <li>Release adapter blueprints</li>
        <li>Drift monitoring alpha</li>
      </ul>
    ),
  },
  {
    title: "Q1 2025",
    description: (
      <ul className="list-disc space-y-1 pl-5 text-sm text-brand-secondary">
        <li>Certification criteria draft</li>
        <li>Community feedback loop</li>
      </ul>
    ),
  },
  {
    title: "Q2 2025",
    description: (
      <ul className="list-disc space-y-1 pl-5 text-sm text-brand-secondary">
        <li>Pre-launch pilots</li>
        <li>Stabilize baseline library</li>
      </ul>
    ),
  },
  {
    title: "Q3 2025",
    description: (
      <ul className="list-disc space-y-1 pl-5 text-sm text-brand-secondary">
        <li>Documentation freeze</li>
        <li>Onboarding playbook beta</li>
      </ul>
    ),
  },
];

export default function StandardPage() {
  return (
    <TeaserPage
      title="Channel OS™ Standard preview"
      description={
        standardMetadata?.summary ??
        "The Standard aligns partner, revenue, and enablement teams. Here&apos;s how the preview works until we launch."
      }
      sections={[
        {
          title: "Five focus areas",
          description: "These pillars form the backbone of the Standard. Each will ship with detailed guidance, templates, and KPIs.",
          items: focusAreas,
        },
        {
          title: "Road to launch",
          description: "Quarterly drops keep the Standard moving toward the January 2026 release.",
          items: roadmap,
        },
        {
          title: "How to contribute",
          description: "Founding members get to shape the Standard before it locks.",
          items: [
            {
              title: "Join review sessions",
              description: "Monthly calls where we walk through new modules and collect feedback.",
            },
            {
              title: "Submit templates",
              description: "Share spreadsheets, canvases, and playbooks that deserve to be standardized.",
            },
            {
              title: "Highlight gaps",
              description: "Tell us where partner teams still struggle so we can prioritize coverage.",
            },
          ],
          note: (
            <>
              Interested in joining the reviewer cohort? Email{" "}
              <a className="text-brand-primary underline-offset-4 hover:underline" href="mailto:standard@channelos.org">
                standard@channelos.org
              </a>
              .
            </>
          ),
        },
      ]}
    >
      <article className="rounded-[20px] border border-zinc-200 bg-white p-8 shadow-sm">
        <MDXContent>
          <StandardPreview />
        </MDXContent>
      </article>
      <div className="rounded-[16px] border border-zinc-200 bg-white p-6 shadow-sm">
        <EmailInline variant="mid" message="Get release notes and change logs as the Standard ships." />
      </div>
    </TeaserPage>
  );
}
