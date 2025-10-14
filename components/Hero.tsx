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
          "border-white/10 bg-[linear-gradient(150deg,rgba(15,21,40,0.95),rgba(10,14,29,0.98))]",
        accent: "from-sunrise-amber/25 via-transparent to-aqua-teal/20",
        halo: "bg-white/15",
        badge: "border-white/20 bg-white/10 text-white/80",
        title: "text-white",
        copy: "text-white/80",
        tagline: "text-white/85",
        proof: "text-white/70",
        ring: "ring-white/10",
        proofSurface: "border-white/12 bg-white/5",
        proofFrame: "border-white/15",
      }
    : {
        surface:
          "border-midnight/10 bg-[linear-gradient(150deg,rgba(255,255,255,0.96),rgba(236,242,255,0.92))]",
        accent: "from-electric-indigo/20 via-transparent to-aqua-teal/15",
        halo: "bg-white/70",
        badge: "border-midnight/10 bg-white/80 text-midnight/70",
        title: "text-midnight",
        copy: "text-midnight/70",
        tagline: "text-midnight/80",
        proof: "text-midnight/60",
        ring: "ring-midnight/5",
        proofSurface: "border-midnight/10 bg-white/80",
        proofFrame: "border-white/60",
      };

  const primaryButtonClasses = isDark
    ? "bg-white text-midnight shadow-[0_28px_72px_-48px_rgba(255,255,255,0.6)] hover:bg-white/90"
    : "shadow-[0_28px_72px_-48px_rgba(79,70,229,0.55)] hover:shadow-[0_32px_96px_-56px_rgba(79,70,229,0.6)]";

  const ghostVariant = isDark ? "inverted" : "ghost";

  return (
    <section className="relative isolate px-4 pt-12 sm:px-6 sm:pt-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-white via-white/70 to-transparent" />
      <Container className="relative">
        <div
          className={`relative overflow-hidden rounded-[48px] border ${palette.surface} shadow-[0_80px_200px_-80px_rgba(12,15,27,0.45)] ring-1 ring-inset ${palette.ring}`}
        >
          <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${palette.accent} opacity-70`} />
          <div className={`pointer-events-none absolute -top-1/2 left-1/2 h-[520px] w-[140%] -translate-x-1/2 rounded-full blur-3xl ${palette.halo}`} />
          <div className="relative z-10 grid gap-12 px-8 py-14 sm:px-12 sm:py-16 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center">
            <div className="flex flex-col gap-8">
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
                <CTAButton href={primaryCta.href} className={primaryButtonClasses}>
                  {primaryCta.label}
                </CTAButton>
                {secondaryCta ? (
                  <CTAButton href={secondaryCta.href} variant={ghostVariant}>
                    {secondaryCta.label}
                  </CTAButton>
                ) : null}
                {tertiaryCta ? (
                  <CTAButton href={tertiaryCta.href} variant={ghostVariant}>
                    {tertiaryCta.label}
                  </CTAButton>
                ) : null}
              </div>
            </div>
            {proofPoints.length ? (
              <aside
                className={`relative overflow-hidden rounded-[32px] border p-8 backdrop-blur-sm lg:p-10 ${palette.proofSurface}`}
              >
                <div className={`pointer-events-none absolute inset-0 rounded-[32px] border ${palette.proofFrame} opacity-40`} />
                <div className="relative z-10 space-y-6">
                  <p className={`text-xs font-semibold uppercase tracking-[0.3em] ${palette.proof}`}>Launch signals</p>
                  <ul className={`space-y-4 text-sm leading-relaxed sm:text-base ${palette.proof}`}>
                    {proofPoints.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-1 inline-flex h-2 w-2 rounded-full bg-gradient-to-br from-sunrise-amber to-aqua-teal"
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
