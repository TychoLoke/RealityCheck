import type { Metadata } from "next";
import { EmailInline } from "../../components/EmailInline";

export const metadata: Metadata = {
  title: "Subscribe to Channel OS™",
  description: "Join the Channel OS™ mailing list for monthly updates, launch news, and early access invitations.",
  openGraph: {
    title: "Subscribe to Channel OS™",
    description: "Join the Channel OS™ mailing list for monthly updates, launch news, and early access invitations.",
    url: "/subscribe",
    images: [
      {
        url: "/subscribe/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Subscribe to Channel OS™",
      },
    ],
  },
};

export default function SubscribePage() {
  return (
    <div className="flex flex-col items-center gap-8 text-center">
      <h1 className="text-4xl font-semibold text-brand-primary md:text-5xl">Join the Channel OS™ mailing list</h1>
      <p className="max-w-2xl text-base text-brand-secondary">
        Monthly build updates, launch announcements, and Standard previews. We keep it concise and focused on operators.
      </p>
      <div className="w-full max-w-xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <EmailInline variant="hero" message="We send one update each month." />
      </div>
      <p className="text-xs text-brand-secondary">We respect your inbox. Privacy details are available in our policy.</p>
    </div>
  );
}
