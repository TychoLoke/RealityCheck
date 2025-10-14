import Link from "next/link";
import { Container } from "./Container";

const currentYear = new Date().getFullYear();

export function Footer() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@channelos.org";
  const discordUrl = process.env.NEXT_PUBLIC_DISCORD_URL ?? "https://discord.gg/your-invite";

  return (
    <footer className="mt-24 border-t border-midnight/10 bg-cloud/95 py-12">
      <Container className="grid gap-10 text-sm text-neutral md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5">
          <p className="text-base font-semibold text-midnight">
            Channel <span className="text-midnight/60">OS™</span>
          </p>
          <p className="max-w-xs text-sm leading-relaxed">
            The vendor-neutral operating system for the channel. Built with operators so every launch is accountable from day
            one.
          </p>
          <div className="space-y-2 text-xs text-neutral/70">
            <p className="uppercase tracking-[0.3em] text-midnight/50">Launches January 1, 2026</p>
            <p>Anchored in Deurne. Serving the global channel.</p>
            <p>
              © {currentYear} Channel OS™. All rights reserved. Channel OS™ is a trademark used under common law pending
              registration.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-midnight/60">Platform</h2>
          <div className="grid gap-2 text-sm">
            <Link className="text-midnight transition hover:text-midnight/60" href="/standard">
              Standard v1.0
            </Link>
            <Link className="text-midnight transition hover:text-midnight/60" href="/playbooks">
              Playbooks & Kits
            </Link>
            <Link className="text-midnight transition hover:text-midnight/60" href="/council">
              Channel Council
            </Link>
            <Link className="text-midnight transition hover:text-midnight/60" href="/apply">
              Apply for private beta
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-midnight/60">Programs</h2>
          <div className="grid gap-2 text-sm">
            <Link className="text-midnight transition hover:text-midnight/60" href="/community">
              Community membership
            </Link>
            <Link className="text-midnight transition hover:text-midnight/60" href="/academy">
              Academy & Channel 101
            </Link>
            <Link className="text-midnight transition hover:text-midnight/60" href="/certified">
              Certification paths
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-midnight/60">Resources</h2>
          <div className="grid gap-2 text-sm">
            <a className="text-midnight transition hover:text-midnight/60" href={`mailto:${contactEmail}`}>
              Contact {contactEmail}
            </a>
            <Link className="text-midnight transition hover:text-midnight/60" href={discordUrl}>
              Discord community
            </Link>
            <Link className="text-midnight transition hover:text-midnight/60" href="/newsletter">
              Journal
            </Link>
            <Link className="text-midnight transition hover:text-midnight/60" href="/legal">
              Privacy & Terms
            </Link>
            <Link className="text-midnight transition hover:text-midnight/60" href="/trademark">
              Trademark & Brand Use
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
