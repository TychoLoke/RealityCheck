"use client";

import { useState } from "react";
import { CTAButton } from "./CTAButton";
import { Container } from "./Container";

interface FocusArea {
  label: string;
  headline: string;
  description: string;
  signals: string[];
  stat?: { label: string; value: string };
  action?: { label: string; href: string };
}

interface InteractiveFocusProps {
  areas: FocusArea[];
}

export function InteractiveFocus({ areas }: InteractiveFocusProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeArea = areas[activeIndex];

  return (
    <section className="relative py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/5 via-transparent to-white/5" />
      <Container className="flex flex-col gap-12">
        <div className="max-w-3xl space-y-4 text-white/80">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
            Operating focus
          </span>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Turn the OS into momentum
          </h2>
          <p className="text-base leading-relaxed">
            Explore how Channel OS™ aligns teams around the same habits. Choose a focus area to see the
            operating loops, proof, and outcomes.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {areas.map((area, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={area.label}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  isActive
                    ? "border-white/30 bg-white/15 text-white shadow-[0_12px_30px_-20px_rgba(14,165,233,0.8)]"
                    : "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:text-white"
                }`}
                aria-pressed={isActive}
              >
                {area.label}
              </button>
            );
          })}
        </div>

        <div className="grid gap-10 rounded-[var(--radius-xl)] border border-white/10 bg-white/5 p-8 text-white/80 shadow-[0_40px_120px_-70px_rgba(14,165,233,0.45)] backdrop-blur lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/60">{activeArea.label}</p>
              <h3 className="text-2xl font-semibold text-white sm:text-3xl">{activeArea.headline}</h3>
              <p className="text-base leading-relaxed text-white/80">{activeArea.description}</p>
            </div>
            <ul className="grid gap-3 text-sm leading-relaxed text-white/80 sm:grid-cols-2">
              {activeArea.signals.map((signal) => (
                <li
                  key={signal}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 transition hover:border-white/20"
                >
                  <span aria-hidden="true" className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-gradient-to-br from-accentBlue to-accentTeal" />
                  <span>{signal}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-white/80">
            {activeArea.stat ? (
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">{activeArea.stat.label}</p>
                <p className="text-4xl font-semibold text-white">{activeArea.stat.value}</p>
              </div>
            ) : null}

            <p className="text-sm leading-relaxed">
              Each focus area comes with templates, live labs, and checklists you can apply instantly inside your
              channel program.
            </p>

            {activeArea.action ? (
              <CTAButton href={activeArea.action.href} variant="primary">
                {activeArea.action.label}
              </CTAButton>
            ) : (
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm leading-relaxed">
                Pick a focus to explore its playbooks and recommended next steps.
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
