"use client";

import { FormEvent, useId, useState } from "react";
import clsx from "clsx";

const copyByVariant = {
  hero: "Get monthly build updates and early launch info.",
  mid: "Be first to see the Standard as it ships.",
  footer: "No spam. One-click unsubscribe."
} as const;

type EmailInlineVariant = keyof typeof copyByVariant;

interface EmailInlineProps {
  variant: EmailInlineVariant;
  onSubmit?: (email: string) => Promise<void> | void;
  message?: string;
}

export function EmailInline({ variant, onSubmit, message }: EmailInlineProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const generatedId = useId();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email || status === "submitting") return;

    setStatus("submitting");
    try {
      await onSubmit?.(email);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setStatus("success");
    } catch (error) {
      console.error("Email capture stub", error);
      setStatus("idle");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3" aria-live="polite">
      <label htmlFor={`${generatedId}-${variant}`} className="text-sm font-medium text-ink/80">
        {message ?? copyByVariant[variant]}
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id={`${generatedId}-${variant}`}
          type="email"
          name="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={status === "success"}
          className="flex-1 rounded-full border border-slate/60 bg-night px-4 py-3 text-base text-ink placeholder:text-ink/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          placeholder="name@company.com"
        />
        <button
          type="submit"
          disabled={status !== "idle"}
          className={clsx(
            "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.28em] transition",
            status === "idle"
              ? "bg-accent text-night hover:bg-accentSoft"
              : "bg-slate/60 text-ink/70"
          )}
        >
          {status === "success" ? "Added" : status === "submitting" ? "Sending" : "Join"}
        </button>
      </div>
      {status === "success" && (
        <p className="text-sm text-success">Success! Check your inbox for the next update.</p>
      )}
    </form>
  );
}
