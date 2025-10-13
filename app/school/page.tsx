import type { Metadata } from "next";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { CTAButton } from "../../components/CTAButton";
import { Embed } from "../../components/Embed";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Channel OS School",
  description:
    "Free Channel 101 plus traineeship pathways for students and career-switchers across MBO/HBO/University tracks.",
};

const videoEmbeds = [
  process.env.NEXT_PUBLIC_YOUTUBE_101_VIDEO_1,
  process.env.NEXT_PUBLIC_YOUTUBE_101_VIDEO_2,
  process.env.NEXT_PUBLIC_YOUTUBE_101_VIDEO_3,
];

export default function SchoolPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="border-b border-white/10 bg-white/5 py-16 sm:py-20">
        <Container className="flex flex-col gap-6">
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">Channel OS School (Students & Career-Switchers)</h1>
          <p className="max-w-3xl text-base leading-relaxed text-neutral sm:text-lg">
            Free Channel 101 + traineeship pathways (MBO/HBO/Universities).
          </p>
        </Container>
      </section>

      <Section title="Channel 101 (Free) videos" description="Start with a shared foundation across the channel ecosystem." columns={3}>
        {videoEmbeds.map((embed, index) => (
          <Embed key={index} html={embed} title={`Channel 101 Video ${index + 1}`} />
        ))}
      </Section>

      <Section title="Apply to Cohort" description="Secure your spot in the next intake and unlock a structured traineeship." columns={1}>
        <Embed
          html={process.env.NEXT_PUBLIC_FORMS_SCHOOL_EMBED}
          title="School application form"
          description="Paste the Microsoft Forms or Tally embed code into .env.local."
        />
      </Section>

      <Section title="Outcomes" description="Earn proof of capability and transition into roles with leading Vendors, Distributors, and Partners." columns={3}>
        <Card title="CCO-F badge" description="Graduate Channel 101 with an assessed foundation in channel operations." />
        <Card title="Portfolio" description="Ship live channel artifacts—playbooks, data maps, and automation exercises." />
        <Card title="Internship & apprenticeship" description="Matching across V-D-P organizations committed to the Channel OS standard." />
      </Section>

      <section className="pb-20">
        <Container className="flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-black/40 px-8 py-10 text-center shadow-card">
          <h2 className="text-2xl font-semibold text-white">Join the community on Discord</h2>
          <p className="max-w-2xl text-sm text-neutral">
            Connect with peers, mentors, and Channel OS coaches before your cohort begins.
          </p>
          <CTAButton href={process.env.NEXT_PUBLIC_DISCORD_URL ?? "https://discord.gg/your-invite"}>
            Enter the Discord
          </CTAButton>
        </Container>
      </section>
    </div>
  );
}
