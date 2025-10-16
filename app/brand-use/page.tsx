import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Channel OS™ brand use",
  description: "Guidelines for descriptive use of Channel OS™. Learn how to reference the initiative and request permission.",
};

export default function BrandUsePage() {
  return (
    <div className="flex flex-col gap-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold text-brand-primary md:text-5xl">Channel OS™ brand use</h1>
        <p className="text-base text-brand-secondary">
          Use Guide: permitted descriptive references, no implied affiliation, and how to request permission.
        </p>
      </header>

      <section className="space-y-6 text-base text-brand-secondary">
        <div>
          <h2 className="text-2xl font-semibold text-brand-primary">Permitted descriptive use</h2>
          <p className="mt-2">
            You may reference Channel OS™ to describe the framework, link to ChannelOS.org, or share that you are following the build.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-brand-primary">No implied affiliation</h2>
          <p className="mt-2">
            Please do not use the Channel OS™ wordmark, logo concepts, or naming in a way that suggests sponsorship, partnership, or endorsement without written consent.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-brand-primary">Request permission</h2>
          <p className="mt-2">
            For press, partnerships, or asset requests, email <a className="text-brand-primary underline-offset-4 hover:underline" href="mailto:press@channelos.org">press@channelos.org</a> with your intended use.
          </p>
        </div>
      </section>
    </div>
  );
}
