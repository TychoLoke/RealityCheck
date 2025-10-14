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
    <div className="fixed bottom-4 left-1/2 z-50 w-[min(90vw,28rem)] -translate-x-1/2 rounded-[var(--radius-xl)] border border-white/10 bg-white/10 p-5 text-white shadow-[0_32px_120px_-70px_rgba(14,165,233,0.45)] backdrop-blur">
      <p className="text-sm leading-relaxed text-white/80">
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
