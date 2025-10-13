import type { Metadata } from "next";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Embed } from "../../components/Embed";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Apply & Waitlists",
  description: "One form to join Channel OS school cohorts, academy waitlists, council seats, and certification programs.",
};

export default function ApplyPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="border-b border-midnight/10 bg-graphite py-16 sm:py-20">
        <Container className="flex flex-col gap-6">
          <h1 className="text-3xl font-semibold text-midnight sm:text-4xl">Apply & Waitlists</h1>
          <p className="max-w-3xl text-base leading-relaxed text-neutral sm:text-lg">
            Submit one application to express interest in School, Academy, Council, Organization Certification, and Platform Compatibility pathways.
          </p>
        </Container>
      </section>

      <Section title="Pick your pathways" description="Choose one or many options when submitting the form." columns={2}>
        <Card title="Individuals">
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral">
            <li>School (Channel 101 cohorts)</li>
            <li>Academy (role-based tracks)</li>
          </ul>
        </Card>
        <Card title="Organizations">
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral">
            <li>Council participation</li>
            <li>Organization Certification</li>
            <li>Platform Compatibility</li>
          </ul>
        </Card>
      </Section>

      <Section title="Single application" description="Select School, Academy, Council, Organization Certification, or Platform Compatibility inside one form." columns={1}>
        <Embed
          html={process.env.NEXT_PUBLIC_FORMS_APPLY_EMBED}
          title="Channel OS application form"
          description="Embed your consolidated application form via .env.local."
        />
      </Section>
    </div>
  );
}
