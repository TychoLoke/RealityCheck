import Link from "next/link";

export function Hero() {
  return (
    <section className="rounded-[12px] border border-[#0B0E1A] bg-[#FFFFFF] px-6 py-6 text-[#0B0E1A] shadow-sm md:px-8 md:py-7">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A93A6]">Channel OS™ Primer</p>
      <div className="mt-3 space-y-2">
        <h1 className="text-2xl font-semibold md:text-3xl">How the Channel Works</h1>
        <p className="max-w-xl text-sm text-[#0B0E1A] md:text-base">
          Five roles, eight motions, one goal—repeatable customer value.
        </p>
      </div>
      <div className="mt-4">
        <Link
          href="/join"
          className="inline-flex h-11 items-center justify-center rounded-[12px] bg-[#0B0E1A] px-5 text-sm font-semibold text-[#FFFFFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0B0E1A]"
        >
          Join the Community
        </Link>
      </div>
    </section>
  );
}
