"use client";

import { useMemo, useState } from "react";
import { CTAButton } from "./CTAButton";
import { Container } from "./Container";

interface JourneyStep {
  label: string;
  headline: string;
  description: string;
  takeaway: string;
  action: { label: string; href: string };
}

interface JourneyExperienceProps {
  steps: JourneyStep[];
  eyebrow?: string;
  title?: string;
  description?: string;
  successHeading?: string;
  successPoints?: string[];
  variant?: "default" | "inverted";
}

export function JourneyExperience({
  steps,
  eyebrow = "Channel OS™ journey",
  title = "Plot your path from discover to contribute",
  description =
    "Every stage of the operating system comes with guidance, templates, and community touchpoints. Click through the steps to see what unlocks next.",
  successHeading = "What success looks like:",
  successPoints = [
    "Shared vocabulary and playbooks across the channel network.",
    "Auditable SLAs and metrics that keep partners accountable.",
    "Certification signals that travel with people, teams, and platforms.",
  ],
  variant = "default",
}: JourneyExperienceProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = steps[activeIndex];
  const progress = useMemo(() => ((activeIndex + 1) / steps.length) * 100, [activeIndex, steps.length]);
  const isInverted = variant === "inverted";
  const sectionBackground = "relative py-16 sm:py-20";
  const palette = isInverted
    ? {
        eyebrow: "text-sm font-semibold uppercase tracking-[0.3em] text-midnight/60",
        title: "text-2xl font-semibold text-midnight sm:text-3xl",
        description: "text-base leading-relaxed text-neutral",
        focusOutline: "focus-visible:outline-midnight",
        stepActive: "border-midnight bg-cloud text-midnight shadow-sm",
        stepInactive:
          "border-midnight/20 bg-white/70 text-midnight/70 hover:border-midnight/40 hover:text-midnight",
        panel:
          "rounded-[var(--radius-xl)] border border-midnight/10 bg-cloud p-8 text-midnight shadow-[0_40px_120px_-70px_rgba(5,11,26,0.3)]",
        label: "text-sm font-semibold uppercase tracking-[0.28em] text-neutral",
        copy: "text-base leading-relaxed text-neutral",
        takeaway:
          "rounded-2xl border border-midnight/10 bg-graphite/80 p-5 text-sm leading-relaxed text-neutral",
        ctaVariant: "inverted" as const,
        progressTrack: "bg-midnight/10",
        progressBar: "bg-midnight",
        progressText: "text-sm font-medium text-neutral",
        successWrapper:
          "flex flex-col justify-between gap-6 rounded-[var(--radius-xl)] border border-midnight/10 bg-graphite/80 p-6 text-neutral",
        successHeading: "text-sm font-semibold text-midnight",
        successDot: "mt-1 h-2 w-2 flex-none rounded-full bg-midnight/60",
        sectionText: "text-midnight",
      }
    : {
        eyebrow: "text-sm font-semibold uppercase tracking-[0.3em] text-white/60",
        title: "text-2xl font-semibold text-white sm:text-3xl",
        description: "text-base leading-relaxed text-white/80",
        focusOutline: "focus-visible:outline-white",
        stepActive:
          "border-white/30 bg-white/15 text-white shadow-[0_12px_30px_-20px_rgba(14,165,233,0.7)]",
        stepInactive:
          "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:text-white",
        panel:
          "rounded-[var(--radius-xl)] border border-white/10 bg-white/5 p-8 text-white shadow-[0_40px_120px_-70px_rgba(14,165,233,0.45)] backdrop-blur",
        label: "text-sm font-semibold uppercase tracking-[0.28em] text-white/60",
        copy: "text-base leading-relaxed text-white/80",
        takeaway:
          "rounded-2xl border border-white/10 bg-white/10 p-5 text-sm leading-relaxed text-white/80",
        ctaVariant: "primary" as const,
        progressTrack: "bg-white/10",
        progressBar: "bg-white",
        progressText: "text-sm font-medium text-white/70",
        successWrapper:
          "flex flex-col justify-between gap-6 rounded-[var(--radius-xl)] border border-white/10 bg-white/10 p-6 text-white/80 backdrop-blur",
        successHeading: "text-sm font-semibold text-white",
        successDot: "mt-1 h-2 w-2 flex-none rounded-full bg-gradient-to-br from-accentBlue to-accentTeal",
        sectionText: "text-white",
      };
  const focusOutline = palette.focusOutline;
  const stepButtonBase =
    "flex items-center gap-3 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const stepButtonActive = palette.stepActive;
  const stepButtonInactive = palette.stepInactive;
  const panelBackground = palette.panel;
  const labelClasses = palette.label;
  const headlineClasses = isInverted
    ? "text-2xl font-semibold text-midnight sm:text-3xl"
    : "text-2xl font-semibold text-white sm:text-3xl";
  const copyClasses = palette.copy;
  const takeawayClasses = palette.takeaway;
  const ctaVariant = palette.ctaVariant;
  const progressTrackClasses = palette.progressTrack;
  const progressBarClasses = palette.progressBar;
  const progressTextClasses = palette.progressText;
  const successWrapperClasses = palette.successWrapper;
  const successEyebrowClasses = isInverted
    ? "text-xs font-semibold uppercase tracking-[0.3em] text-neutral"
    : "text-xs font-semibold uppercase tracking-[0.3em] text-white/60";
  const successHeadingClasses = palette.successHeading;
  const successBodyClasses = isInverted
    ? "space-y-3 text-sm leading-relaxed text-neutral"
    : "space-y-3 text-sm leading-relaxed text-white/80";
  const successBulletClasses = "flex items-start gap-2";
  const successDotClasses = palette.successDot;

  return (
    <section className={sectionBackground}>
      <Container className={`flex flex-col gap-10 ${palette.sectionText}`}>
        <div className="max-w-3xl space-y-4">
          <span className={palette.eyebrow}>{eyebrow}</span>
          <h2 className={palette.title}>{title}</h2>
          <p className={palette.description}>{description}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {steps.map((step, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={step.label}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`${stepButtonBase} ${focusOutline} ${
                  isActive ? stepButtonActive : stepButtonInactive
                }`}
                aria-pressed={isActive}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-current text-[0.65rem]">
                  {index + 1}
                </span>
                {step.label}
              </button>
            );
          })}
        </div>

        <div className={`relative overflow-hidden ${panelBackground}`}>
          <span className="pointer-events-none absolute inset-x-8 top-0 h-1 rounded-full bg-gradient-to-r from-neutral via-graphite to-midnight" />
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className={labelClasses}>{activeStep.label}</p>
                <h3 className={headlineClasses}>{activeStep.headline}</h3>
                <p className={copyClasses}>{activeStep.description}</p>
              </div>
              <div className={takeawayClasses}>{activeStep.takeaway}</div>
              <CTAButton href={activeStep.action.href} variant={ctaVariant}>
                {activeStep.action.label}
              </CTAButton>
            </div>

            <div className={successWrapperClasses}>
              <div>
                <p className={successEyebrowClasses}>Progress</p>
                <div className={`mt-3 h-2 w-full overflow-hidden rounded-full ${progressTrackClasses}`}>
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${progressBarClasses}`}
                    style={{ width: `${progress}%` }}
                    aria-hidden="true"
                  />
                </div>
                <p className={`mt-3 ${progressTextClasses}`}>
                  {activeIndex + 1} of {steps.length} phases
                </p>
              </div>

              <div className={successBodyClasses}>
                <p className={successHeadingClasses}>{successHeading}</p>
                <ul className="space-y-2">
                  {successPoints.map((point) => (
                    <li key={point} className={successBulletClasses}>
                      <span aria-hidden="true" className={successDotClasses} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
