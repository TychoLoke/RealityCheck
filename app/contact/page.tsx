import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Channel OS™",
  description: "Reach the Channel OS™ initiative during build mode across general, partnerships, and press inboxes.",
};

const contactChannels = [
  { label: "General", email: "hello@channelos.org", note: "Questions about the framework or mailing list." },
  { label: "Partnerships", email: "partners@channelos.org", note: "Collaborations for pilots or content." },
  { label: "Press", email: "press@channelos.org", note: "Request statements or brand assets." },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold text-brand-primary md:text-5xl">Contact Channel OS™</h1>
        <p className="text-base text-brand-secondary">We reply within a week while the team is focused on build mode.</p>
      </header>
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {contactChannels.map((channel) => (
          <div key={channel.email} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-secondary">{channel.label}</p>
            <a
              href={`mailto:${channel.email}`}
              className="mt-3 block text-lg font-semibold text-brand-primary underline-offset-4 hover:underline"
            >
              {channel.email}
            </a>
            <p className="mt-2 text-sm text-brand-secondary">{channel.note}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
