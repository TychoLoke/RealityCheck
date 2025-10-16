import type { Metadata } from "next";
import { Container } from "../../components/Container";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Channel OS handles data during build mode.",
};

export default function PrivacyPage() {
  return (
    <Container className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-ink">Privacy policy</h1>
        <p className="text-base text-ink/70">We collect only what we need to send updates and operate the launch program.</p>
      </header>
      <section className="space-y-4 text-sm text-ink/70">
        <p>
          We store your name, email, role, and the form responses you share with us. Data lives in encrypted systems with
          restricted access. We do not sell or rent personal data.
        </p>
        <p>
          You can request deletion or an export at any time by emailing <a href="mailto:hello@channelos.org" className="text-accent">hello@channelos.org</a>.
          We aim to respond within seven days.
        </p>
        <p>
          Cookies are limited to essential site functionality. Analytics is disabled by default until we launch.
        </p>
      </section>
    </Container>
  );
}
