import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Channel OS™ terms",
  description: "Channel OS™ terms of use during build mode including licensing, liability, and contact details.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col gap-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold text-brand-primary md:text-5xl">Terms of use</h1>
        <p className="text-base text-brand-secondary">
          Channel OS™ is in build mode. Access is limited and content may change without notice.
        </p>
      </header>
      <section className="space-y-4 text-base text-brand-secondary">
        <p>
          By accessing ChannelOS.org you agree to use the materials for evaluation and planning only. You may not reuse or redistribute draft content without written permission.
        </p>
        <p>
          Services are provided “as is” during this phase. We disclaim warranties and limit liability to the fullest extent permitted by law.
        </p>
        <p>
          For questions or partnership requests, contact <a href="mailto:hello@channelos.org" className="text-brand-primary underline-offset-4 hover:underline">hello@channelos.org</a>.
        </p>
      </section>
    </div>
  );
}
