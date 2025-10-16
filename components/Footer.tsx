import Link from "next/link";
import { EmailInline } from "./EmailInline";
import { BrandWordmark } from "./BrandWordmark";

const footerLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/brand-use", label: "Brand use" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex w-full max-w-content flex-col gap-16 px-6 py-16 sm:px-10">
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
          <div className="max-w-xl space-y-4">
            <h2 className="text-2xl font-semibold text-brand-primary">Stay close to the build</h2>
            <p className="text-base text-brand-secondary">
              Monthly notes, launch milestones, and early invitations. It&apos;s the only way to participate while Channel OS™ ships.
            </p>
          </div>
          <div className="mt-6">
            <EmailInline variant="footer" />
          </div>
        </div>
        <div className="flex flex-col gap-6 text-sm text-brand-secondary sm:flex-row sm:items-center sm:justify-between">
          <BrandWordmark className="text-base font-semibold text-brand-primary" />
          <p>2026 is the year of Channel OS.</p>
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
      </div>
    </footer>
  );
}
