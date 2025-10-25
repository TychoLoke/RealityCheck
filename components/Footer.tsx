import Link from "next/link";
import { BrandWordmark } from "./BrandWordmark";

const footerLinks = [
  { href: "/contact", label: "Contact" },
  { href: "/code-of-conduct", label: "Code of Conduct" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/brand-use", label: "Branding" },
  { href: "/join", label: "Newsletter" },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex w-full max-w-content flex-col gap-8 px-6 py-12 sm:px-10">
        <div className="flex flex-col gap-6 text-sm text-brand-secondary sm:flex-row sm:items-center sm:justify-between">
          <BrandWordmark className="text-base font-semibold text-brand-primary" />
          <p className="text-sm text-brand-secondary">Where the Channel learns, works, and wins.</p>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link className="transition hover:text-brand-primary" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="text-xs text-brand-secondary/80">© {new Date().getFullYear()} Channel OS™. All rights reserved.</p>
      </div>
    </footer>
  );
}
