import type { Metadata } from "next";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { CTAButton } from "../../components/CTAButton";
import { Embed } from "../../components/Embed";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Channel OS School",
  description:
    "Channel 101 for students and career-switchers. Learn the map (VDP), ship a portfolio piece, and earn the CCO-F badge.",
};

const videoEmbeds = [
  process.env.NEXT_PUBLIC_YOUTUBE_101_VIDEO_1,
  process.env.NEXT_PUBLIC_YOUTUBE_101_VIDEO_2,
  process.env.NEXT_PUBLIC_YOUTUBE_101_VIDEO_3,
];

export default function SchoolPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="border-b border-midnight/10 bg-graphite py-16 sm:py-20">
        <Container className="flex flex-col gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-accentTeal">School</span>
          <h1 className="text-3xl font-semibold text-midnight sm:text-4xl">Start where careers begin: Channel 101.</h1>
          <p className="max-w-3xl text-base leading-relaxed text-neutral sm:text-lg">
            If you’ve heard “the channel” and pictured a maze, Channel 101 switches on the lights. Students and career-switchers
            learn the map (VDP), test real-world scenarios, and leave with a CCO-F badge that employers recognize. The best part?
            It’s free to start, practical from day one, and built with the companies who will hire you. Channel OS School is
            a global initiative delivered online first so anyone can join. Regional meetups and in-person trainings roll out as cohorts graduate.
          </p>
          <p className="max-w-xl text-sm font-semibold uppercase tracking-[0.24em] text-neutral">
            A clear path · A real portfolio piece · An invite to apprenticeships
          </p>
          <div className="flex flex-wrap gap-4">
            <CTAButton href="/apply">Apply to the global online cohort</CTAButton>
            <CTAButton href="#watch" variant="secondary">
              Watch Channel 101
            </CTAButton>
            <CTAButton href={process.env.NEXT_PUBLIC_DISCORD_URL ?? "https://discord.gg/your-invite"} variant="ghost">
              Join the community
            </CTAButton>
          </div>
        </Container>
      </section>

      <Section
        id="watch"
        title="Channel 101 (Free)"
        description="Watch the core lessons, test yourself against real channel scenarios, and start building your portfolio."
        columns={3}
      >
        {videoEmbeds.map((embed, index) => (
          <Embed key={index} html={embed} title={`Channel 101 Video ${index + 1}`} />
        ))}
      </Section>

      <Section
        title="Outcomes"
        description="Every learner leaves with proof of skill and a path into the ecosystem."
        columns={3}
      >
        <Card title="CCO-F badge" description="Graduate Channel 101 with a vendor-neutral credential recognized by V-D-P employers." />
        <Card title="Portfolio" description="Ship live channel artifacts—playbooks, data maps, and automation exercises." />
        <Card title="Apprenticeships" description="Earn an invite to apprenticeships with Vendors, Distributors, and Partners committed to Channel OS." />
      </Section>

      <Section title="Apply" description="Secure your spot in the next global online cohort." columns={1}>
        <Embed
          html={process.env.NEXT_PUBLIC_FORMS_SCHOOL_EMBED}
          title="School application form"
          description="Paste the Microsoft Forms or Tally embed code into .env.local."
        />
      </Section>

      <section className="pb-20">
        <Container className="flex flex-col items-center gap-4 rounded-3xl border border-midnight/10 bg-graphite px-8 py-10 text-center shadow-card">
          <h2 className="text-2xl font-semibold text-midnight">Learn. Work. Win.</h2>
          <p className="max-w-2xl text-sm text-neutral">
            Channel 101 is built with the companies who will hire you. Join the community to stay close to coaches, alumni, and hiring partners.
          </p>
          <CTAButton href={process.env.NEXT_PUBLIC_DISCORD_URL ?? "https://discord.gg/your-invite"}>
            Join the community
          </CTAButton>
        </Container>
      </section>
    </div>
  );
}
