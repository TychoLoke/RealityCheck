import Link from "next/link";
import { Container } from "../components/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink/60">404 — Page not found</p>
      <h1 className="text-3xl font-semibold text-ink sm:text-4xl">We couldn&apos;t find that page.</h1>
      <p className="max-w-xl text-sm text-ink/70">
        Channel OS is in build mode. Let&apos;s get you back to the Standard preview or the latest journal update.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link className="rounded-full bg-accent px-5 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-night shadow-lg transition hover:bg-accentSoft" href="/">
          Go Home
        </Link>
        <Link className="rounded-full border border-slate/60 px-5 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-ink transition hover:border-accent hover:text-accent" href="/standard">
          View Standard
        </Link>
      </div>
    </Container>
  );
}
