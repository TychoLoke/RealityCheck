"use client";

import { FormEvent, useId, useState } from "react";
import clsx from "clsx";

const copyByVariant = {
  hero: "Get monthly build updates and early launch info.",
  mid: "Be first to see the framework artifacts as they ship.",
  footer: "No spam. One-click unsubscribe.",
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
      <label htmlFor={`${generatedId}-${variant}`} className="text-sm font-medium text-brand-secondary">
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
          className="flex-1 rounded-full border border-zinc-200 bg-white px-4 py-3 text-base text-brand-primary placeholder:text-brand-secondary/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
          placeholder="name@company.com"
        />
        <button
          type="submit"
          disabled={status !== "idle"}
          className={clsx(
            "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary",
            status === "idle"
              ? "bg-[#0B0E1A] text-white hover:opacity-90"
              : "bg-brand-secondary/30 text-brand-secondary"
          )}
        >
          {status === "success" ? "Added" : status === "submitting" ? "Sending" : "Join"}
        </button>
      </div>
      {status === "success" && (
        <p className="text-sm text-emerald-600">Success! Check your inbox for the next update.</p>
      )}
    </form>
  );
}
