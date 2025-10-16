import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Channel OS™ privacy",
  description: "Understand how Channel OS™ handles personal data during build mode and mailing list operations.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col gap-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold text-brand-primary md:text-5xl">Privacy policy</h1>
        <p className="text-base text-brand-secondary">
          We collect only what we need to send updates and operate the launch program.
        </p>
      </header>
      <section className="space-y-4 text-base text-brand-secondary">
        <p>
          Channel OS™ stores your name, email, role, and any form responses you share. Data lives in encrypted systems with restricted access. We do not sell or rent personal data.
        </p>
        <p>
          You can request deletion or an export at any time by emailing <a href="mailto:hello@channelos.org" className="text-brand-primary underline-offset-4 hover:underline">hello@channelos.org</a>. We aim to respond within seven days.
        </p>
        <p>
          Cookies are limited to essential site functionality. Analytics remains disabled until launch unless you opt in later.
        </p>
      </section>
    </div>
  );
}
