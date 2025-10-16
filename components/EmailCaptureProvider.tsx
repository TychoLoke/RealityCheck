"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { EmailModal } from "./EmailModal";

type EmailCaptureContextValue = {
  open: () => void;
  close: () => void;
};

const EmailCaptureContext = createContext<EmailCaptureContextValue | undefined>(undefined);

export function EmailCaptureProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <EmailCaptureContext.Provider value={{ open: () => setIsOpen(true), close: () => setIsOpen(false) }}>
      {children}
      <EmailModal open={isOpen} onClose={() => setIsOpen(false)} />
    </EmailCaptureContext.Provider>
  );
}

export function useEmailCapture() {
  const context = useContext(EmailCaptureContext);
  if (!context) {
    throw new Error("useEmailCapture must be used within EmailCaptureProvider");
  }
  return context;
}
