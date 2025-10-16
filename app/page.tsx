import type { Metadata } from "next";
import { Container } from "../components/Container";
import { Hero } from "../components/Hero";
import { StatusBar } from "../components/StatusBar";
import { EmailInline } from "../components/EmailInline";
import { SystemDiagram } from "../components/SystemDiagram";
import { OutcomeChips } from "../components/OutcomeChips";
import { WhatsLiveNext } from "../components/WhatsLiveNext";
import { FAQ } from "../components/FAQ";

export const metadata: Metadata = {
  title: "Home",
  description: "Channel OS is building a shared operating system for the IT channel. Join the mailing list for updates.",
};

const statusCopy = {
  status: "Building",
  launchDate: "1 Jan 2026",
  nextUpdate: "Monthly via email",
};

const pillars = ["People", "Process", "Data", "Tools"];
const adapters = ["CRM", "ERP", "PSA"];

const outcomes = ["Publish approvals ≤48 h", "Multi-tenant baselines", "Drift detection enabled"];

const faqItems = [
  { question: "What is ChannelOS?", answer: "A shared standard and practical playbooks for the IT channel." },
  { question: "What’s available today?", answer: "This site, a Standard preview, and the mailing list." },
  { question: "When do you launch?", answer: "1 January 2026." },
  { question: "How will I get updates?", answer: "Monthly via email." },
  { question: "Can I contribute or partner?", answer: "Join the list; we’ll invite early collaborators." },
];

export default function HomePage() {
  return (
    <Container className="flex flex-col gap-16">
      <Hero
        title="Channel OS — A shared operating system for the IT channel."
        subtitle="We’re building a clear standard, common language, and practical playbooks for operators."
        primaryCta={{ label: "Join the Mailing List", href: "#mailing-list-hero" }}
        secondaryHref="/standard"
        secondaryLabel="Preview the Standard"
      >
        <StatusBar {...statusCopy} />
        <div id="mailing-list-hero" className="rounded-2xl border border-slate/60 bg-night/80 p-6">
          <EmailInline variant="hero" />
        </div>
      </Hero>

      <SystemDiagram pillars={pillars} adapters={adapters} />

      <OutcomeChips items={outcomes} />

      <WhatsLiveNext
        liveItems={["Website", "Standard preview", "Mailing list"]}
        nextItems={["Channel 101", "Certifications preview", "Community space"]}
      />

      <div className="rounded-2xl border border-slate/60 bg-night/80 p-6">
        <EmailInline variant="mid" />
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-ink">Micro-FAQ</h2>
        <FAQ items={faqItems} />
      </section>
    </Container>
  );
}
