import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ActionBand } from "../components/ActionBand";
import { CookieNotice } from "../components/CookieNotice";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const baseTitle = "Channel OS™ — The vendor-neutral operating system for the channel (VDP)";
const baseDescription =
  "Channel OS™ is the vendor-neutral operating system for the channel (VDP), standardizing people, skills, processes, data, and tools across Vendors, Distributors, and Partners.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://channelos.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: baseTitle,
    template: "%s | Channel OS™",
  },
  description: baseDescription,
  openGraph: {
    title: baseTitle,
    description: baseDescription,
    url: siteUrl,
    siteName: "Channel OS™",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Channel OS™ — The vendor-neutral operating system for the channel (VDP)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: baseTitle,
    description: baseDescription,
  },
  icons: {
    icon: [
      { url: "/icon", type: "image/png" },
      { url: "/icon?format=ico", type: "image/x-icon" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-transparent text-midnight">
      <body
        className={`${inter.className} relative flex min-h-screen flex-col bg-transparent text-midnight antialiased`}
      >
        <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
          <div className="absolute inset-0 bg-soft-grid opacity-40 mask-faded-edge" />
          <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-white via-white/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-[-20%] h-[520px] bg-gradient-to-t from-white via-white/70 to-transparent" />
          <div className="absolute left-1/2 top-[10%] h-[520px] w-[70vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.18),transparent_70%)] blur-3xl" />
          <div className="absolute right-[12%] top-[45%] h-[360px] w-[40vw] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.24),transparent_70%)] blur-3xl" />
        </div>
        <Header />
        <ActionBand />
        <main id="main-content" className="relative flex-1">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-white via-white/60 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white via-white/60 to-transparent" />
            <div className="absolute inset-x-[10%] top-1/3 h-[320px] rounded-[48px] bg-[radial-gradient(circle,rgba(255,154,31,0.14),transparent_70%)] blur-2xl" />
          </div>
          <div className="relative flex flex-col gap-20 pb-24 pt-6 sm:gap-24 sm:pb-32">
            {children}
          </div>
        </main>
        <Footer />
        <CookieNotice />
      </body>
    </html>
  );
}
