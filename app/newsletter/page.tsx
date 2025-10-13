import type { Metadata } from "next";
import { Container } from "../../components/Container";
import { Embed } from "../../components/Embed";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Channel OS Journal",
  description: "Subscribe to research, templates, and cohort announcements from Channel OS.",
};

export default function NewsletterPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="border-b border-white/10 bg-white/5 py-16 sm:py-20">
        <Container className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">Channel OS Journal</h1>
          <p className="max-w-3xl text-base leading-relaxed text-neutral sm:text-lg">
            Research, templates, and cohort announcements.
          </p>
        </Container>
      </section>

      <Section title="Subscribe" description="Add the Channel OS Journal to your inbox." columns={1}>
        <Embed
          html={process.env.NEXT_PUBLIC_SUBSTACK_EMBED}
          title="Substack embed"
          description="Paste the Substack embed snippet in .env.local."
        />
      </Section>
    </div>
  );
}
