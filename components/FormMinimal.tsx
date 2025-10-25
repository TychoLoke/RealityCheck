"use client";

import { FormEvent, ReactNode, useId, useState } from "react";

type Field = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
};

type FormMinimalProps = {
  title: string;
  description?: string;
  fields: Field[];
  submitLabel?: string;
  successMessage?: string;
  footer?: ReactNode;
};

export function FormMinimal({
  title,
  description,
  fields,
  submitLabel = "Submit",
  successMessage = "Thanks, we’ll reply soon.",
  footer,
}: FormMinimalProps) {
  const generatedId = useId();
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status !== "idle") return;
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus("success");
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit} aria-live="polite">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-brand-primary">{title}</h1>
        {description && <p className="text-base text-brand-secondary">{description}</p>}
      </div>
      <div className="space-y-4">
        {fields.map((field, index) => (
          <div key={field.name} className="space-y-2">
            <label htmlFor={`${generatedId}-${index}`} className="text-sm font-medium text-brand-primary">
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={`${generatedId}-${index}`}
                name={field.name}
                required={field.required}
                placeholder={field.placeholder}
                disabled={status === "success"}
                rows={4}
                className="w-full rounded-[12px] border border-zinc-200 px-4 py-3 text-sm text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
              />
            ) : (
              <input
                id={`${generatedId}-${index}`}
                name={field.name}
                type={field.type ?? "text"}
                required={field.required}
                placeholder={field.placeholder}
                disabled={status === "success"}
                className="w-full rounded-[12px] border border-zinc-200 px-4 py-3 text-sm text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
              />
            )}
          </div>
        ))}
      </div>
      <button
        type="submit"
        disabled={status !== "idle"}
        className="inline-flex items-center justify-center rounded-[12px] bg-brand-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
      >
        {status === "success" ? "Sent" : status === "submitting" ? "Sending" : submitLabel}
      </button>
      {status === "success" && <p className="text-sm font-medium text-brand-primary">{successMessage}</p>}
      {footer}
    </form>
  );
}
