import type { Metadata } from "next";
import { Container } from "../../components/Container";
import { EmailInline } from "../../components/EmailInline";

export const metadata: Metadata = {
  title: "Subscribe",
  description: "Join the Channel OS mailing list for monthly updates and launch news.",
  openGraph: {
    title: "Subscribe to Channel OS",
    description: "Join the Channel OS mailing list for monthly updates and launch news.",
    url: "/subscribe",
    images: [
      {
        url: "/subscribe/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Subscribe to Channel OS",
      },
    ],
  },
};

export default function SubscribePage() {
  return (
    <Container className="flex flex-col items-center gap-8 text-center">
      <h1 className="text-3xl font-semibold text-ink">Join the Channel OS mailing list</h1>
      <p className="max-w-2xl text-base text-ink/70">
        Subscribe for monthly build updates, launch announcements, and Standard release notes. We keep it concise and relevant.
      </p>
      <div className="w-full max-w-xl rounded-2xl border border-slate/60 bg-night/80 p-6 shadow-surface">
        <EmailInline variant="hero" message="We send one update each month." />
      </div>
      <p className="text-xs text-ink/50">We respect your inbox. Privacy details are available in our policy.</p>
    </Container>
  );
}
