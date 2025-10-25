"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import { BrandWordmark } from "./BrandWordmark";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/community", label: "Community" },
  { href: "/events", label: "Events" },
  { href: "/training", label: "Training" },
  { href: "/framework", label: "Framework" },
  { href: "/how-the-channel-works", label: "How the Channel Works" },
  { href: "/talks", label: "Talks" },
  { href: "/join", label: "Join" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-content items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="flex items-center gap-3 text-brand-primary">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-[12px] border border-zinc-200 text-sm font-semibold">
            OS
          </span>
          <BrandWordmark className="hidden text-lg font-semibold sm:inline" />
          <span className="sr-only">Channel OS home</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-brand-secondary md:flex" aria-label="Main">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "transition-colors",
                  isActive ? "text-brand-primary" : "hover:text-brand-primary"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/join"
            className="hidden rounded-[12px] border border-zinc-200 px-4 py-2 text-sm font-semibold text-brand-primary transition hover:bg-brand-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary md:inline-flex"
          >
            Join
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex items-center justify-center rounded-[12px] border border-zinc-200 p-2 text-brand-primary transition hover:bg-brand-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary md:hidden"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Toggle menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={clsx(
          "md:hidden",
          isOpen ? "max-h-96 border-b border-zinc-200" : "max-h-0 overflow-hidden"
        )}
      >
        <div className="mx-auto flex w-full max-w-content flex-col gap-2 px-6 pb-6 sm:px-10">
          <nav className="flex flex-col gap-2 text-base text-brand-primary">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={clsx(
                    "rounded-[12px] px-4 py-3 transition",
                    isActive ? "bg-brand-muted" : "hover:bg-brand-muted"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Link
            href="/join"
            onClick={() => setIsOpen(false)}
            className="rounded-[12px] border border-zinc-200 px-4 py-3 text-sm font-semibold text-brand-primary transition hover:bg-brand-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
          >
            Join
          </Link>
        </div>
      </div>
    </header>
  );
}
