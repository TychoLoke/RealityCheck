import type { Metadata } from "next";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { CTAButton } from "../../components/CTAButton";
import { Embed } from "../../components/Embed";
import { Hero } from "../../components/Hero";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Channel 101 — Start your channel career",
  description:
    "Learn the V-D-P map, the end-to-end flow, and earn the CCO-F badge. Free to start.",
};

const modules = [
  { title: "The channel map", description: "Vendors, Distributors, Partners in practice." },
  { title: "The flow", description: "Demand → deal → delivery → settlement." },
  { title: "Careers & skills", description: "What employers actually hire for." },
];

const outcomes = [
  { title: "A clear path", description: "Know how to navigate roles, plays, and next steps." },
  { title: "A portfolio piece", description: "Ship a practical artifact that proves you can operate." },
  { title: "Apprenticeship invite", description: "Earn the CCO-F badge and unlock apprenticeships." },
];

const highlights = [
  { label: "Time", value: "≈ 90 minutes" },
  { label: "Format", value: "Video + guided template" },
  { label: "Badge", value: "CCO-F Foundations" },
];

const faqs = [
  { question: "Is 101 really free?", answer: "Yes." },
  { question: "How long is it?", answer: "~90 minutes total." },
  { question: "Do I get a certificate?", answer: "Yes, CCO-F after passing a short quiz." },
];

const videoEmbeds = [
  process.env.NEXT_PUBLIC_YOUTUBE_101_VIDEO_1,
  process.env.NEXT_PUBLIC_YOUTUBE_101_VIDEO_2,
  process.env.NEXT_PUBLIC_YOUTUBE_101_VIDEO_3,
];

export default function SchoolPage() {
  return (
    <div className="flex flex-col gap-16 pb-24 text-midnight">
      <Hero
        eyebrow="School"
        title="Start where careers begin: Channel 101"
        description="Learn the V-D-P map, practice the end-to-end flow, and earn the CCO-F badge."
        primaryCta={{ label: "Watch Channel 101", href: "#watch" }}
        secondaryCta={{ label: "Apply to the next cohort", href: "/apply" }}
        tertiaryCta={{ label: "Join the Community", href: "/community" }}
        proofPoints={["90-minute format", "Guided project", "CCO-F badge"]}
      />

      <section>
        <Container className="grid gap-4 rounded-3xl border border-midnight/10 bg-graphite px-8 py-10 shadow-[0_24px_64px_-48px_rgba(12,15,27,0.2)] sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.label} className="rounded-2xl border border-midnight/10 bg-graphite/80 p-5 text-center text-midnight">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral">{item.label}</p>
              <p className="mt-2 text-xl font-semibold text-midnight">{item.value}</p>
            </div>
          ))}
        </Container>
      </section>

      <Section
        title="What you’ll learn"
        description="Three modules that make the channel legible."
        columns={3}
        cta={{ label: "Start Channel 101", href: "#watch", variant: "primary" }}
      >
        {modules.map((module) => (
          <Card key={module.title} title={module.title} description={module.description} />
        ))}
      </Section>

      <Section
        title="Outcomes"
        description="Everything points to a job-ready operating habit."
        columns={3}
        cta={{ label: "See certification path", href: "/certified", variant: "primary" }}
      >
        {outcomes.map((outcome) => (
          <Card key={outcome.title} title={outcome.title} description={outcome.description} />
        ))}
      </Section>

      <Section
        id="watch"
        title="Channel 101 (Free)"
        description="Watch the core lessons, then join a live study group to practice with peers."
        columns={3}
        className="bg-graphite"
        cta={{ label: "Join a study group", href: "/community", variant: "primary" }}
      >
        {videoEmbeds.map((embed, index) => (
          <Embed key={index} html={embed} title={`Channel 101 Video ${index + 1}`} />
        ))}
      </Section>

      <Section
        title="FAQ"
        description="Quick answers for new operators."
        columns={3}
        cta={{ label: "Ask in the community", href: "/community", variant: "primary" }}
      >
        {faqs.map((faq) => (
          <Card key={faq.question} title={faq.question} description={faq.answer} />
        ))}
      </Section>

      <Section
        title="Apply"
        description="Tell us where you’re starting and we’ll match you to the next cohort."
        columns={1}
        cta={{ label: "Book an intro", href: "/apply", variant: "primary" }}
      >
        <Embed
          html={process.env.NEXT_PUBLIC_FORMS_SCHOOL_EMBED}
          title="Channel 101 application form"
          description="Add the embed code to .env.local to collect applications."
        />
      </Section>
    </div>
  );
}
