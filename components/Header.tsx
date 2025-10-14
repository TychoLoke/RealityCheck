"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CTAButton } from "./CTAButton";
import { Container } from "./Container";

const navItems = [
  { href: "/standard", label: "Standard" },
  { href: "/community", label: "Community" },
  { href: "/academy", label: "Academy" },
  { href: "/certified", label: "Certified" },
  { href: "/council", label: "Council" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 mb-6 pt-6">
      <Container className="relative">
        <div className="relative flex items-center justify-between gap-4 overflow-hidden rounded-full border border-midnight/10 bg-cloud/90 px-4 py-3 shadow-[0_20px_60px_-45px_rgba(11,14,26,0.5)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 rounded-full border border-midnight/5 opacity-40" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accentTeal/10 via-transparent to-accentBlue/10" />
          <Link
            href="/"
            className="relative z-10 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-midnight/70"
            aria-label="Channel OS™ home"
          >
            <span className="sr-only">Channel OS™ logo — Where the Channel Learns, Works, and Wins.</span>
            <span
              aria-hidden="true"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-midnight via-accentBlue to-accentTeal text-xs font-bold text-white shadow-[0_10px_25px_-15px_rgba(11,14,26,0.6)]"
            >
              OS
            </span>
            <span className="hidden text-midnight sm:inline">
              Channel <span className="text-midnight/60">OS™</span>
            </span>
          </Link>
          <nav aria-label="Primary" className="relative z-10 hidden items-center gap-6 text-sm font-medium text-midnight/70 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-1 transition-colors duration-150 ${
                  pathname === item.href
                    ? "bg-midnight/5 text-midnight shadow-sm"
                    : "hover:text-midnight"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <CTAButton href="/apply" variant="secondary" className="text-xs uppercase tracking-[0.32em]">
              Apply
            </CTAButton>
          </nav>
          <div className="relative z-10 flex items-center gap-3 lg:hidden">
            <CTAButton href="/apply" variant="secondary" className="hidden text-[0.65rem] uppercase tracking-[0.28em] sm:inline-flex">
              Apply
            </CTAButton>
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-full border border-midnight/15 p-2 text-midnight/70 transition hover:text-midnight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-midnight"
              aria-controls="mobile-nav"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Toggle navigation</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </Container>
      <div
        id="mobile-nav"
        className={`${
          isOpen ? "max-h-screen" : "max-h-0"
        } mx-4 overflow-hidden pt-3 transition-[max-height] duration-300 ease-out lg:hidden`}
      >
        <div className="rounded-3xl border border-midnight/10 bg-cloud/95 px-4 py-5 shadow-[0_24px_60px_-45px_rgba(11,14,26,0.4)] backdrop-blur-xl">
          <nav className="flex flex-col gap-3 text-sm font-medium text-midnight/80">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-2xl px-3 py-2 transition ${
                  pathname === item.href
                    ? "bg-midnight/5 text-midnight"
                    : "hover:bg-midnight/5 hover:text-midnight"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-5">
            <CTAButton href="/apply" variant="primary" className="w-full justify-center text-xs uppercase tracking-[0.32em]">
              Apply to launch with us
            </CTAButton>
          </div>
        </div>
      </div>
    </header>
  );
}
