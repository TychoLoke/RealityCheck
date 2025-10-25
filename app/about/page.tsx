import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Channel OS™ is a community, training, and playbook initiative led by Tycho Löke.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold text-brand-primary">About Channel OS™</h1>
        <p className="max-w-2xl text-base text-brand-secondary">
          Community, training, and playbooks that raise channel performance.
        </p>
      </header>

      <section className="space-y-6 text-base text-brand-secondary">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-brand-primary">What we do</h2>
          <p>Community, training, and playbooks that raise channel performance.</p>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-brand-primary">How we work</h2>
          <p>Neutral, concise, and outcome-driven.</p>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-brand-primary">Who’s behind it</h2>
          <p>Channel OS™ is an initiative by Tycho Löke.</p>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-brand-primary">Contact</h2>
          <p>
            <a href="mailto:hello@channelos.org" className="text-brand-primary underline-offset-4 hover:underline">
              hello@channelos.org
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
