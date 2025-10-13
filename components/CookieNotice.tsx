"use client";

import { useEffect, useState } from "react";
import { CTAButton } from "./CTAButton";

const STORAGE_KEY = "channelos-cookie-consent";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (!stored) {
      setVisible(true);
    }
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-[min(90vw,28rem)] -translate-x-1/2 rounded-3xl border border-midnight/10 bg-cloud p-5 text-midnight shadow-[0_24px_64px_-48px_rgba(12,15,27,0.2)] backdrop-blur">
      <p className="text-sm leading-relaxed text-neutral">
        We use minimal, privacy-friendly analytics and necessary cookies to run the site. No tracking ads.
      </p>
      <CTAButton
        href="#"
        className="mt-4 w-full justify-center"
        onClick={(event) => {
          event.preventDefault();
          window.localStorage.setItem(STORAGE_KEY, "accepted");
          setVisible(false);
        }}
      >
        Continue to accept
      </CTAButton>
    </div>
  );
}
