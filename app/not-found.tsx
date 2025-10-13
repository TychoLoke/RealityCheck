import { Container } from "../components/Container";
import { CTAButton } from "../components/CTAButton";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-gradient-to-b from-midnight via-[#101a31] to-midnight py-20 text-graphite">
      <Container className="flex flex-col items-center gap-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral">404 — Page not found</span>
        <h1 className="text-3xl font-semibold sm:text-4xl">Let’s get you back to the operating system of the channel.</h1>
        <div className="flex flex-wrap justify-center gap-3">
          <CTAButton href="/">Go to Home</CTAButton>
          <CTAButton href="/school">
            Start Channel 101
          </CTAButton>
          <CTAButton href="/standard" variant="ghost">
            Read the Standard v1.0
          </CTAButton>
        </div>
      </Container>
    </main>
  );
}
