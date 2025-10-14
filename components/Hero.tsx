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
          "border-white/20 bg-midnight text-white shadow-[0_90px_180px_-100px_rgba(11,14,26,0.75)]",
        accent: "from-accentTeal/20 via-transparent to-accentBlue/15",
        halo: "bg-white/10",
        badge: "border-white/20 bg-white/10 text-white/70",
        title: "text-white",
        copy: "text-white/80",
        tagline: "text-white/80",
        proof: "text-white/75",
        ring: "ring-white/10",
        proofSurface: "border-white/20 bg-white/10",
        proofFrame: "border-white/20",
        figure: "border-white/15 bg-white/10",
        figureText: "text-white/80",
        mediaBackground: "bg-white/10",
      }
    : {
        surface:
          "border-midnight/10 bg-cloud text-midnight shadow-[0_90px_180px_-100px_rgba(11,14,26,0.18)]",
        accent: "from-accentBlue/15 via-transparent to-accentTeal/10",
        halo: "bg-accentBlue/10",
        badge: "border-midnight/10 bg-midnight/5 text-midnight/70",
        title: "text-midnight",
        copy: "text-neutral",
        tagline: "text-midnight/80",
        proof: "text-neutral",
        ring: "ring-midnight/5",
        proofSurface: "border-midnight/10 bg-graphite",
        proofFrame: "border-midnight/10",
        figure: "border-midnight/10 bg-graphite",
        figureText: "text-neutral",
        mediaBackground: "bg-cloud",
      };

  const primaryVariant = isDark ? "inverted" : "primary";
  const secondaryVariant = isDark ? "ghost" : "secondary";

  return (
    <section className="relative isolate px-4 pt-12 sm:px-6 sm:pt-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-white/10 via-white/5 to-transparent" />
      <Container className="relative">
        <div className={`relative overflow-hidden rounded-[var(--radius-xl)] border ${palette.surface} ring-1 ring-inset ${palette.ring}`}>
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
                  <CTAButton href={secondaryCta.href} variant={secondaryVariant}>
                    {secondaryCta.label}
                  </CTAButton>
                ) : null}
                {tertiaryCta ? (
                  <CTAButton href={tertiaryCta.href} variant={secondaryVariant}>
                    {tertiaryCta.label}
                  </CTAButton>
                ) : null}
              </div>

              {proofPoints.length ? (
                <ul className={`grid gap-3 rounded-3xl border px-6 py-5 text-sm leading-relaxed sm:grid-cols-2 ${palette.proofSurface}`}>
                  {proofPoints.map((point) => (
                    <li key={point} className={`flex items-start gap-3 ${palette.proof}`}>
                      <span
                        aria-hidden="true"
                        className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-gradient-to-br from-accentBlue to-accentTeal"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <figure
              className={`relative flex h-full w-full flex-col justify-between gap-6 overflow-hidden rounded-[32px] border p-8 text-sm ${palette.figure} ${palette.figureText}`}
            >
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.3em]">Visual placement</p>
                <p className="leading-relaxed">
                  Upload a hero image sized <strong>1280 × 1280px</strong> (square) or a looping mp4. Replace this panel with your
                  media component.
                </p>
              </div>
              <div
                className={`flex flex-1 items-center justify-center rounded-2xl border border-dashed border-current/40 ${palette.mediaBackground} text-center text-xs leading-relaxed`}
              >
                Drop artwork here
                <br />
                Suggested safe area: keep focal point within 960 × 960px.
              </div>
              <p className="text-xs leading-relaxed">
                TIP: On mobile the media stacks below the text. Use imagery with centered focus.
              </p>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}
