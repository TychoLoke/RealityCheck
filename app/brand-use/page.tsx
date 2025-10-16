import type { Metadata } from "next";
import { Container } from "../../components/Container";

export const metadata: Metadata = {
  title: "Trademark",
  description: "Guidelines for referencing Channel OS while we build.",
};

export default function BrandUsePage() {
  return (
    <Container className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-ink">Brand & trademark use</h1>
        <p className="text-base text-ink/70">Use the Channel OS name and marks to reference the project accurately.</p>
      </header>
      <section className="space-y-4 text-sm text-ink/70">
        <p>
          You may describe your participation in the build-mode program or link to ChannelOS.org. Please avoid using the
          Channel OS logo or implying endorsement without written approval.
        </p>
        <p>
          “Channel OS” and “ChannelOS.org” are trademarks of Channel OS. We reserve all rights and may update these guidelines as
          we approach launch.
        </p>
        <p>
          Need a press quote or brand asset? Email <a href="mailto:press@channelos.org" className="text-accent">press@channelos.org</a>.
        </p>
      </section>
    </Container>
  );
}
