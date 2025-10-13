import type { Metadata } from "next";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { CTAButton } from "../../components/CTAButton";
import { Embed } from "../../components/Embed";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Channel 101 — Start your channel career",
  description:
    "Learn the V-D-P map, the end-to-end flow, and earn the CCO-F badge. Free to start.",
};

const modules = [
  {
    title: "The channel map",
    description: "Vendors, Distributors, Partners in practice.",
  },
  {
    title: "The flow",
    description: "Demand → deal → delivery → settlement.",
  },
  {
    title: "Careers & skills",
    description: "What employers actually hire for.",
  },
];

const outcomes = [
  { title: "A clear path", description: "Know how to navigate roles, plays, and next steps." },
  { title: "A portfolio piece", description: "Ship a practical artifact that proves you can operate." },
  { title: "Apprenticeship invite", description: "Earn the CCO-F badge and unlock apprenticeships." },
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
    <div className="flex flex-col gap-16 pb-24">
      <section className="border-b border-midnight/10 bg-graphite py-16 sm:py-20">
        <Container className="flex flex-col gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral">School</span>
          <h1 className="text-3xl font-semibold text-midnight sm:text-4xl">Start where careers begin: Channel 101</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-neutral sm:text-xl">
            If “the channel” felt like a maze, this is the map. Learn the V-D-P landscape, practice real scenarios, and earn the CCO-F badge. The community pairs you with peers, study groups, and mentors—so momentum sticks.
          </p>
          <div className="flex flex-wrap gap-4">
            <CTAButton href="#watch">Watch Channel 101</CTAButton>
            <CTAButton href="/apply" variant="secondary">
              Apply to the next cohort
            </CTAButton>
            <CTAButton href="/community" variant="ghost">
              Join the Community
            </CTAButton>
          </div>
        </Container>
      </section>

      <Section title="What you’ll learn" description="Three modules that make the channel legible." columns={3}>
        {modules.map((module) => (
          <Card key={module.title} title={module.title} description={module.description} />
        ))}
      </Section>

      <Section title="Outcomes" description="Everything points to a job-ready operating habit." columns={3}>
        {outcomes.map((outcome) => (
          <Card key={outcome.title} title={outcome.title} description={outcome.description} />
        ))}
      </Section>

      <Section
        id="watch"
        title="Channel 101 (Free)"
        description="Watch the core lessons, then join a live study group to practice with peers."
        columns={3}
        className="bg-graphite/60"
      >
        {videoEmbeds.map((embed, index) => (
          <Embed key={index} html={embed} title={`Channel 101 Video ${index + 1}`} />
        ))}
      </Section>

      <Section title="FAQ" description="Quick answers for new operators." columns={3}>
        {faqs.map((faq) => (
          <Card key={faq.question} title={faq.question} description={faq.answer} />
        ))}
      </Section>

      <Section title="Apply" description="Tell us where you’re starting and we’ll match you to the next cohort." columns={1}>
        <Embed
          html={process.env.NEXT_PUBLIC_FORMS_SCHOOL_EMBED}
          title="Channel 101 application form"
          description="Add the embed code to .env.local to collect applications."
        />
      </Section>
    </div>
  );
}
