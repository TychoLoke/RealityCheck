"use client";

import { useEffect } from "react";
import { EmailInline } from "./EmailInline";

interface EmailModalProps {
  open: boolean;
  onClose: () => void;
}

export function EmailModal({ open, onClose }: EmailModalProps) {
  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    if (open) {
      document.addEventListener("keydown", handleKeydown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeydown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-10" role="dialog" aria-modal="true">
      <div className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-xl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-brand-primary">Join the Channel OS™ list</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-brand-secondary transition hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="mt-2 text-base text-brand-secondary">
          Monthly build notes, launch milestones, and invitations to early sessions.
        </p>
        <div className="mt-6">
          <EmailInline variant="mid" />
        </div>
      </div>
    </div>
  );
}
