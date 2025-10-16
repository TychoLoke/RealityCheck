import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { EmailInline } from "../../components/EmailInline";
import { SubscribeButton } from "../../components/SubscribeButton";

export const metadata: Metadata = {
  title: "About Channel OS™",
  description: "Channel OS™ is an independent initiative by Tycho Löke. Learn the purpose, approach, and how to stay in touch.",
  openGraph: {
    title: "About Channel OS™",
    description: "Channel OS™ is an independent initiative by Tycho Löke. Learn the purpose, approach, and how to stay in touch.",
    url: "/about",
    images: [
      {
        url: "/about/opengraph-image",
        width: 1200,
        height: 630,
        alt: "About Channel OS™",
      },
    ],
  },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Channel OS™",
  url: "https://channelos.org",
  founder: {
    "@type": "Person",
    name: "Tycho Löke",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold text-brand-primary md:text-5xl">About Channel OS™</h1>
        <p className="text-base text-brand-secondary">
          Channel OS™ is an independent initiative by Tycho Löke.
        </p>
      </header>

      <section className="space-y-6 text-base text-brand-secondary">
        <div>
          <h2 className="text-2xl font-semibold text-brand-primary">Purpose</h2>
          <p className="mt-2">
            Build a vendor-neutral, sales-neutral framework for how the channel learns, collaborates, and operates.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-brand-primary">Approach</h2>
          <p className="mt-2">
            Channel OS™ spans People, Process, Data, and Tools, with adapters into CRM, ERP, PSA, and marketplace systems.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-brand-primary">Contact</h2>
          <div className="mt-2 space-y-3">
            <p>
              Reach out via the <Link href="/contact" className="text-brand-primary underline-offset-4 hover:underline">contact form</Link> or join the mailing list for updates.
            </p>
            <SubscribeButton className="border-transparent bg-[#0B0E1A] text-white hover:opacity-90">Join the Mailing List</SubscribeButton>
          </div>
        </div>
      </section>

      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-brand-primary">Stay in the loop</h2>
        <p className="mt-2 text-base text-brand-secondary">Monthly build notes and invitations land in the mailing list first.</p>
        <div className="mt-6">
          <EmailInline variant="mid" />
        </div>
      </div>

      <Script id="channelos-about-jsonld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(organizationLd)}
      </Script>
    </div>
  );
}
