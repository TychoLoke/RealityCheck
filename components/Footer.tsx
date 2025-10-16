import Link from "next/link";
import { Container } from "./Container";
import { EmailInline } from "./EmailInline";

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/brand-use", label: "Trademark" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate/50 bg-night">
      <Container className="flex flex-col gap-12 py-16">
        <div className="rounded-2xl border border-slate/60 bg-slate/40 p-6 shadow-surface">
          <EmailInline variant="footer" />
        </div>
        <div className="flex flex-col justify-between gap-6 text-sm text-ink/60 sm:flex-row sm:items-center">
          <div className="space-y-2">
            <p className="text-ink font-semibold">Channel OS</p>
            <p>2026 is the year of Channel OS.</p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link className="transition hover:text-ink" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
