"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import { Container } from "./Container";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/standard", label: "Standard" },
  { href: "/journal", label: "Journal" },
  { href: "/subscribe", label: "Subscribe" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate/40 bg-night/90 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-[0.3em] uppercase text-ink/70">
          <span
            aria-hidden
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accentSoft text-xs font-bold text-night shadow-lg"
          >
            OS
          </span>
          <span className="hidden sm:inline text-ink">Channel OS</span>
          <span className="sr-only">Channel OS home</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-ink/70 md:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "rounded-full px-3 py-1 transition-colors",
                  isActive ? "bg-slate/60 text-ink" : "hover:text-ink"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex items-center justify-center rounded-full border border-slate/60 p-2 text-ink/70 transition hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
          aria-controls="mobile-nav"
          aria-expanded={open}
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
            {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </Container>
      <div className={clsx("md:hidden border-t border-slate/60 transition-[max-height] duration-300 overflow-hidden", open ? "max-h-64" : "max-h-0")}
        id="mobile-nav"
      >
        <Container className="py-4">
          <nav className="flex flex-col gap-2 text-sm text-ink/80" aria-label="Mobile navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "rounded-2xl px-3 py-2 transition-colors",
                    isActive ? "bg-slate/60 text-ink" : "hover:bg-slate/40 hover:text-ink"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </Container>
      </div>
    </header>
  );
}
