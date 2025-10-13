"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CTAButton } from "./CTAButton";
import { Container } from "./Container";

const navItems = [
  { href: "/standard", label: "Standard" },
  { href: "/school", label: "School" },
  { href: "/academy", label: "Academy" },
  { href: "/playbooks", label: "Playbooks" },
  { href: "/certified", label: "Certified" },
  { href: "/council", label: "Council" },
  { href: "/newsletter", label: "Journal" },
  { href: "/legal", label: "Legal" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-midnight/80 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center gap-3 text-lg font-semibold text-white"
          aria-label="Channel OS home"
        >
          <span
            aria-hidden="true"
            className="inline-flex h-3.5 w-3.5 rotate-45 items-center justify-center rounded-sm bg-white"
          />
          <span>
            Channel <span className="text-neutral">OS</span>
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-8 text-sm font-medium text-neutral lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition hover:text-accentTeal ${
                pathname === item.href ? "text-cloud" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          <CTAButton href="/apply" variant="secondary" className="text-sm font-semibold">
            Apply
          </CTAButton>
        </nav>
        <div className="flex items-center gap-3 lg:hidden">
          <CTAButton href="/apply" variant="secondary" className="hidden text-xs font-semibold sm:inline-flex">
            Apply
          </CTAButton>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex items-center rounded-full border border-white/30 p-2 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accentTeal"
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
      </Container>
      <div
        id="mobile-nav"
        className={`${
          isOpen ? "max-h-screen border-b border-white/10" : "max-h-0"
        } overflow-hidden bg-midnight transition-[max-height] duration-300 ease-out lg:hidden`}
      >
        <Container className="flex flex-col gap-4 py-4 text-sm font-medium text-neutral">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-accentTeal ${
                pathname === item.href ? "bg-white/5 text-cloud" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          <CTAButton href="/apply" variant="primary" className="justify-center text-sm font-semibold">
            Apply
          </CTAButton>
        </Container>
      </div>
    </header>
  );
}
