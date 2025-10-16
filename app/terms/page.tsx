import type { Metadata } from "next";
import { Container } from "../../components/Container";

export const metadata: Metadata = {
  title: "Terms",
  description: "Channel OS terms of use during build mode.",
};

export default function TermsPage() {
  return (
    <Container className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-ink">Terms of use</h1>
        <p className="text-base text-ink/70">Channel OS is in build mode. Access is limited and content may change without notice.</p>
      </header>
      <section className="space-y-4 text-sm text-ink/70">
        <p>
          By accessing ChannelOS.org you agree to use the materials for evaluation and planning only. You may not reuse or
          redistribute draft content without permission.
        </p>
        <p>
          Services are provided “as is” during this phase. We disclaim warranties and limit liability to the fullest extent
          permitted by law.
        </p>
        <p>
          For questions or partnership requests, reach us at <a href="mailto:hello@channelos.org" className="text-accent">hello@channelos.org</a>.
        </p>
      </section>
    </Container>
  );
}
