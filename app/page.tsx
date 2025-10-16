import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "../components/Hero";
import { StatusBar } from "../components/StatusBar";
import { EmailInline } from "../components/EmailInline";
import { SystemDiagram } from "../components/SystemDiagram";
import { MaturityMini } from "../components/MaturityMini";
import { OutcomeChips } from "../components/OutcomeChips";
import { FAQ } from "../components/FAQ";
import { Card } from "../components/Card";

export const metadata: Metadata = {
  title: "Channel OS™ home",
  description: "Channel OS™ is the neutral framework for the IT channel. Follow the build and join the mailing list for the 2026 launch.",
};

const outcomes = ["Publish approvals ≤48 h", "Multi-tenant baselines", "Drift detection enabled"];

const faqItems = [
  {
    question: "What is Channel OS™?",
    answer: "Channel OS™ is a shared framework and language for how the IT channel operates across people, process, data, tools, and adapters.",
  },
  {
    question: "What’s available today?",
    answer: "Build updates, the framework outline, and a mailing list for early releases.",
  },
  {
    question: "When do you launch?",
    answer: "Public launch is scheduled for 1 January 2026.",
  },
  {
    question: "How do I get updates?",
    answer: "Join the mailing list for monthly notes and invitations.",
  },
  {
    question: "Can I participate?",
    answer: "Yes. Join the list and we’ll reach out about operator circles and study groups.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20">
      <Hero
        title="Channel OS™ — The neutral framework for the IT channel."
        subtitle="A shared language and practical patterns to build, operate, and scale channel excellence."
        primaryAction={{ label: "Join the Mailing List", href: "#mailing-list-hero" }}
        secondaryAction={{ label: "Explore the Framework", href: "#framework" }}
      >
        <div className="space-y-6">
          <StatusBar status="Building" launchDate="1 Jan 2026" cadence="Monthly via email" />
          <div id="mailing-list-hero" className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <EmailInline variant="hero" message="Join monthly email updates while Channel OS™ is in build mode." />
          </div>
        </div>
      </Hero>

      <section id="framework" className="space-y-12">
        <SystemDiagram />
        <MaturityMini />
        <OutcomeChips items={outcomes} />
        <div className="flex flex-col gap-3 text-sm text-brand-primary sm:flex-row sm:items-center">
          <Link href="/standard" className="underline-offset-4 hover:underline">
            Read the Standard preview
          </Link>
          <span aria-hidden className="hidden h-1 w-1 rounded-full bg-brand-secondary/40 sm:inline" />
          <Link href="/the-channel" className="underline-offset-4 hover:underline">
            What is the Channel?
          </Link>
        </div>
      </section>

      <Card className="bg-zinc-50">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-brand-primary">Stay close as we ship the artifacts</h2>
          <p className="text-base text-brand-secondary">
            The mailing list is the single action while the portal is under construction. Expect monthly notes until launch.
          </p>
        </div>
        <div className="mt-6">
          <EmailInline variant="mid" message="Get the Standard preview and every milestone in your inbox." />
        </div>
      </Card>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-brand-primary">Micro-FAQ</h2>
        <FAQ items={faqItems} />
      </section>
    </div>
  );
}
