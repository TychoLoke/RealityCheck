"use client";

import { ReactNode } from "react";
import clsx from "clsx";
import { useEmailCapture } from "./EmailCaptureProvider";

export function SubscribeButton({ className, children }: { className?: string; children: ReactNode }) {
  const { open } = useEmailCapture();

  return (
    <button
      type="button"
      onClick={() => open()}
      className={clsx(
        "rounded-full border border-zinc-200 px-4 py-2 text-sm font-semibold text-brand-primary transition hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary",
        className,
      )}
    >
      {children}
    </button>
  );
}
