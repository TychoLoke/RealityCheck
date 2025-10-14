import Link from "next/link";
import { Container } from "./Container";

const currentYear = new Date().getFullYear();

export function Footer() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@channelos.org";
  const discordUrl = process.env.NEXT_PUBLIC_DISCORD_URL ?? "https://discord.gg/your-invite";

  return (
    <footer className="border-t border-midnight/10 bg-cloud py-12">
      <Container className="grid gap-8 text-sm text-neutral sm:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-3">
          <p className="text-base font-semibold text-midnight">
            Channel <span className="text-neutral">OS™</span>
          </p>
          <p className="max-w-xs text-sm leading-relaxed text-neutral">
            Vendor-neutral by design. Channel-wide by choice. Learn. Work. Win.
          </p>
          <p className="text-xs text-neutral/70">© {currentYear} Channel OS™. All rights reserved.</p>
          <p className="text-xs text-neutral/70">
            Channel OS™ is a trademark used under common law pending registration.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-midnight">The operating journey</h2>
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-neutral">
            {"Discover Learn Join Practice Certify Contribute".split(" ").map((step, index, arr) => (
              <span key={step} className="flex items-center gap-2">
                <span>{step}</span>
                {index < arr.length - 1 ? <span aria-hidden="true">→</span> : null}
              </span>
            ))}
          </div>
          <div className="mt-3 flex flex-col gap-2 text-sm leading-relaxed">
            <Link className="text-midnight hover:text-neutral" href="/standard">
              Read Standard v1.0
            </Link>
            <Link className="text-midnight hover:text-neutral" href="/school">
              Start Channel 101 (free)
            </Link>
            <Link className="text-midnight hover:text-neutral" href="/community">
              Join the Community
            </Link>
            <Link className="text-midnight hover:text-neutral" href="/certified">
              Get certified
            </Link>
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-midnight">Stay connected</h2>
          <p>
            Contact us at{" "}
            <a className="text-midnight hover:text-neutral" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </p>
          <p className="text-xs text-neutral/70">Anchored in Deurne, serving the global channel.</p>
          <div className="flex flex-wrap items-center gap-4 text-midnight">
            <Link className="hover:text-neutral" href={discordUrl}>
              Discord
            </Link>
            <Link className="hover:text-neutral" href="/newsletter">
              Journal
            </Link>
            <Link className="hover:text-neutral" href="/legal">
              Privacy & Terms
            </Link>
            <Link className="hover:text-neutral" href="/trademark">
              Trademark & Brand Use
            </Link>
        </div>
        </div>
      </Container>
    </footer>
  );
}
