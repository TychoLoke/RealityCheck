import Link from "next/link";
import { Container } from "./Container";

const currentYear = new Date().getFullYear();

export function Footer() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@channelos.org";
  const discordUrl = process.env.NEXT_PUBLIC_DISCORD_URL ?? "https://discord.gg/your-invite";

  return (
    <footer className="border-t border-white/10 bg-black/40 py-12">
      <Container className="flex flex-col gap-8 text-sm text-neutral sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-white">© {currentYear} Channel OS. All rights reserved.</p>
          <p>
            Contact us at{" "}
            <a className="text-accentTeal hover:underline" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link className="hover:text-accentTeal" href={discordUrl}>
            Discord
          </Link>
          <Link className="hover:text-accentTeal" href="/newsletter">
            Newsletter
          </Link>
          <Link className="hover:text-accentTeal" href="/legal">
            Privacy & Terms
          </Link>
        </div>
      </Container>
    </footer>
  );
}
