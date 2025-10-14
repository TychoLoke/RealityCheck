import { CTAButton } from "./CTAButton";
import { Container } from "./Container";

interface HeroProps {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  tertiaryCta?: { label: string; href: string };
  tagline?: string;
  eyebrow?: string;
  proofPoints?: string[];
  variant?: "light" | "dark";
}

export function Hero({
  title,
  description,
  primaryCta,
  secondaryCta,
  tertiaryCta,
  tagline,
  eyebrow,
  proofPoints = [],
  variant = "light",
}: HeroProps) {
  const isDark = variant === "dark";

  const palette = isDark
    ? {
        surface:
          "border-white/10 bg-white/5 text-white/80 shadow-[0_80px_160px_-80px_rgba(14,165,233,0.5)]",
        accent: "from-accentBlue/20 via-transparent to-accentTeal/20",
        halo: "bg-white/10",
        badge: "border-white/15 bg-white/10 text-white/70",
        title: "text-white",
        copy: "text-white/80",
        tagline: "text-white/80",
        proof: "text-white/70",
        ring: "ring-white/10",
        proofSurface: "border-white/10 bg-white/10",
        proofFrame: "border-white/15",
      }
    : {
        surface:
          "border-midnight/10 bg-cloud text-midnight shadow-[0_80px_160px_-80px_rgba(5,11,26,0.25)]",
        accent: "from-accentBlue/15 via-transparent to-accentTeal/15",
        halo: "bg-accentBlue/10",
        badge: "border-midnight/10 bg-midnight/5 text-midnight/70",
        title: "text-midnight",
        copy: "text-neutral",
        tagline: "text-midnight/80",
        proof: "text-neutral",
        ring: "ring-midnight/5",
        proofSurface: "border-midnight/10 bg-graphite",
        proofFrame: "border-midnight/5",
      };

  const primaryVariant = isDark ? "primary" : "inverted";
  const secondaryVariant = isDark ? "secondary" : "ghost";

  return (
    <section className="relative isolate px-4 pt-12 sm:px-6 sm:pt-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-white/10 via-white/5 to-transparent" />
      <Container className="relative">
        <div
          className={`relative overflow-hidden rounded-[var(--radius-xl)] border ${palette.surface} ring-1 ring-inset ${palette.ring}`}
        >
          <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${palette.accent} opacity-70`} />
          <div className={`pointer-events-none absolute -top-1/2 left-1/2 h-[520px] w-[140%] -translate-x-1/2 rounded-full blur-3xl ${palette.halo}`} />
          <div className="relative z-10 grid gap-12 px-8 py-14 sm:px-12 sm:py-16 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center">
            <div className="flex flex-col gap-10">
              <div className="space-y-6">
                <span
                  className={`inline-flex w-fit items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] ${palette.badge}`}
                >
                  {eyebrow ?? "Vendor-neutral by design"}
                </span>
                <h1 className={`text-4xl font-semibold sm:text-5xl lg:text-6xl ${palette.title}`}>{title}</h1>
                {tagline ? (
                  <p className={`text-xl font-medium sm:text-2xl ${palette.tagline}`}>{tagline}</p>
                ) : null}
                <p className={`max-w-2xl text-base leading-relaxed sm:text-lg ${palette.copy}`}>{description}</p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <CTAButton href={primaryCta.href} variant={primaryVariant}>
                  {primaryCta.label}
                </CTAButton>
                {secondaryCta ? (
                  <CTAButton
                    href={secondaryCta.href}
                    variant={secondaryVariant}
                    className={isDark ? undefined : "text-midnight/70 hover:text-midnight"}
                  >
                    {secondaryCta.label}
                  </CTAButton>
                ) : null}
                {tertiaryCta ? (
                  <CTAButton
                    href={tertiaryCta.href}
                    variant={secondaryVariant}
                    className={isDark ? undefined : "text-midnight/70 hover:text-midnight"}
                  >
                    {tertiaryCta.label}
                  </CTAButton>
                ) : null}
              </div>
            </div>
            {proofPoints.length ? (
              <aside
                className={`relative overflow-hidden rounded-[32px] border p-8 backdrop-blur lg:p-10 ${palette.proofSurface}`}
              >
                <div className={`pointer-events-none absolute inset-0 rounded-[32px] border ${palette.proofFrame} opacity-40`} />
                <div className="relative z-10 space-y-6">
                  <p className={`text-xs font-semibold uppercase tracking-[0.3em] ${palette.proof}`}>Launch signals</p>
                  <ul className={`space-y-4 text-sm leading-relaxed sm:text-base ${palette.proof}`}>
                    {proofPoints.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-br from-accentBlue via-accentTeal to-white"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
