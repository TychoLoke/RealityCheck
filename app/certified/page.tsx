import type { Metadata } from "next";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Embed } from "../../components/Embed";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Certification",
  description:
    "Channel OS certification for people, organizations, and platforms. Validate against SLAs, process conformance, and skill density.",
};

export default function CertifiedPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="border-b border-white/10 bg-white/5 py-16 sm:py-20">
        <Container className="flex flex-col gap-6">
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">Certification</h1>
          <p className="max-w-3xl text-base leading-relaxed text-neutral sm:text-lg">
            People: exams + practical labs; portable, vendor-neutral badges.
          </p>
          <p className="max-w-3xl text-base leading-relaxed text-neutral sm:text-lg">
            Organizations: Channel OS Certified (Silver/Gold/Platinum) measured against SLAs, process conformance, and skill density.
          </p>
          <p className="max-w-3xl text-base leading-relaxed text-neutral sm:text-lg">
            Platforms/Adapters: Channel OS Compatible — pass conformance tests.
          </p>
        </Container>
      </section>

      <Section title="Certification Tracks" description="Select the pathway that matches your role in the ecosystem." columns={3}>
        <Card
          title="People"
          description="Exams and practical labs verify capabilities. Earn portable, vendor-neutral badges recognized across the Channel OS network."
        />
        <Card
          title="Organizations"
          description="Channel OS Certified tiers (Silver/Gold/Platinum) confirm SLAs, process conformance, and team skill density."
        />
        <Card
          title="Platforms & Adapters"
          description="Channel OS Compatible status requires passing conformance tests and maintaining interoperability with canonical objects."
        />
      </Section>

      <Section title="Waitlist" description="Signal interest for upcoming certification windows." columns={1}>
        <Embed
          html={process.env.NEXT_PUBLIC_FORMS_CERTIFIED_EMBED}
          title="Certification waitlist form"
          description="Embed your waitlist form via .env.local."
        />
      </Section>
    </div>
  );
}
