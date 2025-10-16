import type { Metadata } from "next";
import { Container } from "../../components/Container";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach the Channel OS team during build mode.",
};

const contactChannels = [
  { label: "General", email: "hello@channelos.org", note: "Questions about the Standard or mailing list." },
  { label: "Partnerships", email: "partners@channelos.org", note: "Explore collaborations for pilots or content." },
  { label: "Press", email: "press@channelos.org", note: "Request statements or brand assets." },
];

export default function ContactPage() {
  return (
    <Container className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-ink">Contact Channel OS</h1>
        <p className="text-base text-ink/70">We reply within a week while the team is focused on build mode.</p>
      </header>
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {contactChannels.map((channel) => (
          <div key={channel.email} className="rounded-2xl border border-slate/60 bg-night/80 p-6 shadow-surface">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink/60">{channel.label}</p>
            <a href={`mailto:${channel.email}`} className="mt-3 block text-lg font-semibold text-ink">
              {channel.email}
            </a>
            <p className="mt-2 text-sm text-ink/70">{channel.note}</p>
          </div>
        ))}
      </section>
    </Container>
  );
}
