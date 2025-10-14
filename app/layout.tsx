import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ActionBand } from "../components/ActionBand";
import { CookieNotice } from "../components/CookieNotice";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap", variable: "--font-sans" });

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
    <html lang="en" className={`${sans.variable} bg-transparent text-graphite`}>
      <body className="font-sans relative flex min-h-screen flex-col bg-transparent text-graphite antialiased">
        <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
          <div className="absolute inset-0 bg-soft-grid opacity-30" />
          <div className="absolute inset-x-[-30%] top-[-45%] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.22),transparent_70%)] blur-3xl" />
          <div className="absolute inset-x-[15%] bottom-[-55%] h-[620px] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.2),transparent_70%)] blur-3xl" />
          <div className="absolute left-1/2 top-[35%] h-[480px] w-[60vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.18),transparent_70%)] blur-3xl" />
        </div>
        <Header />
        <ActionBand />
        <main id="main-content" className="relative flex-1">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-midnight/30 via-midnight/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-midnight/30 via-midnight/10 to-transparent" />
            <div className="absolute inset-x-[8%] top-1/3 h-[320px] rounded-[48px] bg-[radial-gradient(circle,rgba(37,99,235,0.18),transparent_70%)] blur-2xl" />
          </div>
          <div className="relative flex flex-col gap-20 pb-28 pt-10 sm:gap-24 sm:pb-36">
            {children}
          </div>
        </main>
        <Footer />
        <CookieNotice />
      </body>
    </html>
  );
}
