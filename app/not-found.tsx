import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-secondary">404 — Page not found</p>
      <h1 className="text-4xl font-semibold text-brand-primary sm:text-5xl">We couldn&apos;t find that page.</h1>
      <p className="max-w-xl text-sm text-brand-secondary">
        Channel OS™ is in build mode. Let&apos;s get you back to the framework or mailing list.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          className="rounded-full bg-[#0B0E1A] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          href="/"
        >
          Go Home
        </Link>
        <Link
          className="rounded-full border border-zinc-200 px-5 py-3 text-sm font-semibold text-brand-primary underline-offset-4 hover:underline"
          href="/standard"
        >
          View Standard
        </Link>
      </div>
    </div>
  );
}
