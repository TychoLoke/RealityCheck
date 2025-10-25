"use client";

import { FormEvent, useId, useState } from "react";

export function JoinForm() {
  const emailId = useId();
  const nameId = useId();
  const consentId = useId();
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [consent, setConsent] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email || !consent || status !== "idle") return;
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus("success");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-live="polite">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor={emailId} className="text-sm font-medium text-brand-primary">
            Email
          </label>
          <input
            id={emailId}
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            autoComplete="email"
            className="w-full rounded-[12px] border border-zinc-200 px-4 py-3 text-sm text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
            placeholder="name@company.com"
            disabled={status === "success"}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor={nameId} className="text-sm font-medium text-brand-primary">
            First name <span className="text-brand-secondary">(optional)</span>
          </label>
          <input
            id={nameId}
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            className="w-full rounded-[12px] border border-zinc-200 px-4 py-3 text-sm text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
            placeholder="Alex"
            disabled={status === "success"}
          />
        </div>
      </div>
      <div className="flex items-start gap-3 text-sm text-brand-secondary">
        <input
          id={consentId}
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          required
          className="mt-1 h-4 w-4 rounded border border-zinc-200"
          disabled={status === "success"}
        />
        <label htmlFor={consentId}>I agree to receive the monthly build notes.</label>
      </div>
      <button
        type="submit"
        disabled={!consent || status !== "idle"}
        className="inline-flex items-center justify-center rounded-[12px] bg-brand-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
      >
        {status === "success" ? "Sent" : status === "submitting" ? "Sending" : "Join"}
      </button>
      {status === "success" && <p className="text-sm font-medium text-brand-primary">You’re in—welcome.</p>}
    </form>
  );
}
