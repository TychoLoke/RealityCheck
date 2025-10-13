import type { Metadata } from "next";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Embed } from "../../components/Embed";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Apply & Waitlists — Join the community, cohorts, and certifications",
  description: "Tell us where you want to start and we’ll guide you to the right program.",
};

const individualFields = [
  "Full name",
  "Email",
  "Location (City, Country)",
  "Current role",
  "Interest (Community / School / Academy / Certification)",
  "What outcome do you want in 90 days?",
];

const organizationFields = [
  "Company",
  "Website",
  "Contact name/email",
  "Organization type (Vendor / Distributor / Partner/MSP / ISV / Other)",
  "Interest (Org Certification / Champions / Council)",
  "Which SLA is your top focus?",
];

export default function ApplyPage() {
  return (
    <div className="flex flex-col gap-16 pb-24">
      <section className="border-b border-midnight/10 bg-graphite py-16 sm:py-20">
        <Container className="flex flex-col gap-6">
          <h1 className="text-3xl font-semibold text-midnight sm:text-4xl">Apply & Waitlists</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-neutral sm:text-xl">
            Tell us where you want to start—Community, School, Academy, Certification, Council—and we’ll guide you to the next session or cohort.
          </p>
        </Container>
      </section>

      <Section title="Individual fields" description="We keep it simple—tell us who you are and how you want to grow." columns={2}>
        <Card title="Required info">
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral">
            {individualFields.map((field) => (
              <li key={field}>{field}</li>
            ))}
          </ul>
        </Card>
        <Card title="Why it matters" description="We map you to the study group, cohort, or certification path that matches your goals." />
      </Section>

      <Section title="Organization fields" description="Signal how your company wants to participate." columns={2} className="bg-graphite/60">
        <Card title="What we ask">
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral">
            {organizationFields.map((field) => (
              <li key={field}>{field}</li>
            ))}
          </ul>
        </Card>
        <Card title="What you get" description="We connect you to Champions programs, Council seats, or certification briefings based on your focus SLA." />
      </Section>

      <Section title="One form" description="Apply once; we’ll route you to the right onboarding flow." columns={1}>
        <Embed
          html={process.env.NEXT_PUBLIC_FORMS_APPLY_EMBED}
          title="Channel OS application form"
          description="Add the embed code in .env.local to start collecting submissions."
        />
        <Card title="Thank-you message">
          You’re in. Check your inbox for next steps—pick a study group, start Channel 101, and say hello in the community.
        </Card>
      </Section>
    </div>
  );
}
