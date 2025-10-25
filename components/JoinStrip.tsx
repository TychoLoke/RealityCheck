"use client";

import clsx from "clsx";
import { FormEvent, useId, useState } from "react";

type JoinStripProps = {
  title: string;
  description?: string;
  variant?: "light" | "dark";
  ctaLabel?: string;
  successMessage?: string;
};

export function JoinStrip({
  title,
  description,
  variant = "light",
  ctaLabel = "Join",
  successMessage = "You’re in.",
}: JoinStripProps) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const generatedId = useId();

  const isDark = variant === "dark";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email || !consent || status !== "idle") return;
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus("success");
  }

  return (
    <section
      className={clsx(
        "rounded-[16px] border border-zinc-200 p-8",
        isDark ? "bg-brand-primary text-white" : "bg-brand-muted text-brand-primary"
      )}
    >
      <form className="space-y-4" onSubmit={handleSubmit} aria-live="polite">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">{title}</h2>
          {description && (
            <p className={clsx("text-sm", isDark ? "text-white/80" : "text-brand-secondary")}>{description}</p>
          )}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="sr-only" htmlFor={`${generatedId}-email`}>
            Email
          </label>
          <input
            id={`${generatedId}-email`}
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            autoComplete="email"
            className={clsx(
              "flex-1 rounded-[12px] border px-4 py-3 text-sm",
              isDark ? "bg-white text-brand-primary" : "bg-white text-brand-primary"
            )}
            placeholder="name@company.com"
            disabled={status === "success"}
          />
          <button
            type="submit"
            disabled={!consent || status !== "idle"}
            className={clsx(
              "inline-flex items-center justify-center rounded-[12px] px-4 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
              isDark
                ? "bg-white text-brand-primary focus-visible:outline-white"
                : "bg-brand-primary text-white focus-visible:outline-brand-primary",
              !consent || status !== "idle" ? "opacity-60" : "hover:opacity-90"
            )}
          >
            {status === "success" ? "Sent" : status === "submitting" ? "Sending" : ctaLabel}
          </button>
        </div>
        <div className="flex items-start gap-2 text-xs">
          <input
            id={`${generatedId}-consent`}
            type="checkbox"
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
            className="mt-1 h-4 w-4 rounded border"
            required
            disabled={status === "success"}
          />
          <label htmlFor={`${generatedId}-consent`} className={clsx(isDark ? "text-white/80" : "text-brand-secondary")}> 
            I agree to receive the monthly build notes.
          </label>
        </div>
        {status === "success" && <p className="text-sm font-medium">{successMessage}</p>}
      </form>
    </section>
  );
}
