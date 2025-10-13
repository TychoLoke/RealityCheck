import type { Metadata } from "next";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { CTAButton } from "../components/CTAButton";
import { Hero } from "../components/Hero";
import { Section } from "../components/Section";

export const metadata: Metadata = {
  title: "Home",
  description:
    "The vendor-neutral operating system for the channel (VDP). Standardizing people, skills, processes, and data for Vendors, Distributors, and Partners.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      <Hero
        title="The vendor-neutral operating system for the channel (VDP)"
        description="People • Skills • Processes • Data — standardized and certified."
        primaryCta={{ label: "Start Channel 101 (Free)", href: "/school" }}
        secondaryCta={{ label: "Read the Standard v1.0", href: "/standard" }}
      />

      <Section title="Value for the ecosystem" description="Reduce risk, increase trust, and unlock shared growth for Vendors, Distributors, and Partners.">
        <Card
          title="Reduce Integration Debt"
          description="One language for Vendors, Distributors, and Partners."
        />
        <Card
          title="Improve Financial Integrity"
          description="Attestable rebates and settlements."
        />
        <Card
          title="Build Talent Pipelines"
          description="School → Academy → Certified organizations."
        />
      </Section>

      <Section title="The OS Layers" description="Four interoperable layers keep the channel synchronized from talent development to financial controls." columns={2}>
        <Card
          title="People"
          description="Roles, competencies, and verified skills aligned across the ecosystem."
        />
        <Card
          title="Process"
          description="Playbooks and standard operating procedures to orchestrate every motion."
        />
        <Card
          title="Data"
          description="Canonical objects and shared metrics for decision-making and compliance."
        />
        <Card
          title="Tools"
          description="Adapters and automation to keep platforms, marketplaces, and PSA/ERP data in sync."
        />
      </Section>

      <Section title="Get Involved" description="Choose the pathway that fits your role in the channel." columns={3}>
        <Card title="Apply to the School" description="Join Channel 101 cohorts and launch your career.">
          <CTAButton href="/school" variant="secondary">
            Explore the School
          </CTAButton>
        </Card>
        <Card title="Join the Council" description="Co-create the standard with a balanced V-D-P community.">
          <CTAButton href="/council" variant="secondary">
            Visit the Council
          </CTAButton>
        </Card>
        <Card title="Get Certified" description="Validate people, organizations, and platforms against Channel OS SLAs.">
          <CTAButton href="/certified" variant="secondary">
            View Certification Paths
          </CTAButton>
        </Card>
      </Section>

      <section className="pb-20">
        <Container className="rounded-3xl bg-white/5 px-8 py-12 text-center shadow-card">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Stay close to the movement</h2>
          <p className="mt-4 text-base text-neutral">
            Get the Channel OS Journal in your inbox: research, templates, and cohort announcements.
          </p>
          <div className="mt-6 flex justify-center">
            <CTAButton href="/newsletter">Sign up for the Journal</CTAButton>
          </div>
        </Container>
      </section>
    </div>
  );
}
