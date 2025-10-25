import Link from "next/link";

export function Hero() {
  return (
    <section className="space-y-8 rounded-[24px] border border-[#0B0E1A] bg-[#F4F5FB] px-8 py-10 text-[#0B0E1A] shadow-md md:space-y-10 md:px-12 md:py-12">
      <p className="inline-flex items-center gap-2 rounded-full border border-[#0B0E1A]/10 bg-[#FFFFFF] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4D5566]">
        Channel OS™ Primer
      </p>
      <div className="space-y-5">
        <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
          How the channel actually runs—roles, rituals, and value in one place.
        </h1>
        <div className="space-y-4 text-sm leading-relaxed text-[#1D2333] md:text-base">
          <p>
            The channel is a relay. Vendors, distributors, partners, marketplaces, and customers pass the baton through eight
            motions that only work when every role understands what comes next.
          </p>
          <p>
            Use this page to see the map, explore the handoffs, and grab the guidance we&apos;re codifying with operators building
            the next era of indirect go-to-market.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/join"
          className="inline-flex h-11 items-center justify-center rounded-[12px] bg-[#0B0E1A] px-5 text-sm font-semibold text-[#FFFFFF] shadow-sm transition hover:shadow-lg hover:shadow-[#0B0E1A]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0B0E1A]"
        >
          Join the Community
        </Link>
        <Link
          href="/framework"
          className="inline-flex h-11 items-center justify-center rounded-[12px] border border-[#0B0E1A] px-5 text-sm font-semibold text-[#0B0E1A] transition hover:bg-[#0B0E1A]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0B0E1A]"
        >
          Preview the Framework
        </Link>
      </div>
    </section>
  );
}
