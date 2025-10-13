import Link from "next/link";
import { Container } from "./Container";

const currentYear = new Date().getFullYear();

export function Footer() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@channelos.org";
  const discordUrl = process.env.NEXT_PUBLIC_DISCORD_URL ?? "https://discord.gg/your-invite";

  return (
    <footer className="border-t border-white/10 bg-graphite/70 py-12">
      <Container className="grid gap-8 text-sm text-neutral sm:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-3">
          <p className="text-base font-semibold text-cloud">Channel <span className="text-neutral">OS</span></p>
          <p className="max-w-xs text-sm leading-relaxed text-neutral">
            Vendor-neutral by design. Channel-wide by choice. Learn. Work. Win.
          </p>
          <p className="text-xs text-neutral/80">© {currentYear} Channel OS. All rights reserved.</p>
        </div>
        <div className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-cloud">Simple conversion path</h2>
          <ol className="space-y-1 text-sm leading-relaxed">
            <li>Discover → <Link className="text-accentTeal hover:underline" href="/standard">Read Standard v1.0</Link></li>
            <li>Learn → <Link className="text-accentTeal hover:underline" href="/school">Take Channel 101 (free)</Link></li>
            <li>Apply → <Link className="text-accentTeal hover:underline" href="/apply">Apply to the School or Academy</Link></li>
            <li>Certify → <Link className="text-accentTeal hover:underline" href="/certified">Earn your badge or org certification</Link></li>
            <li>Join → <Link className="text-accentTeal hover:underline" href="/council">Shape the standard with the Council</Link></li>
          </ol>
        </div>
        <div className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-cloud">Stay connected</h2>
          <p>
            Contact us at{" "}
            <a className="text-accentTeal hover:underline" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link className="hover:text-accentTeal" href={discordUrl}>
              Discord
            </Link>
            <Link className="hover:text-accentTeal" href="/newsletter">
              Journal
            </Link>
            <Link className="hover:text-accentTeal" href="/legal">
              Privacy & Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
