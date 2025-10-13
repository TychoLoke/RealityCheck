import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const baseTitle = "Channel OS — The vendor-neutral operating system for the channel (VDP)";
const baseDescription =
  "Channel OS is the vendor-neutral operating system for the channel (VDP), standardizing people, skills, processes, data, and tools across Vendors, Distributors, and Partners.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://channelos.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: baseTitle,
    template: "%s | Channel OS",
  },
  description: baseDescription,
  openGraph: {
    title: baseTitle,
    description: baseDescription,
    url: siteUrl,
    siteName: "Channel OS",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Channel OS — The vendor-neutral operating system for the channel (VDP)",
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
    <html lang="en" className="bg-midnight text-white">
      <body className={`${inter.className} flex min-h-screen flex-col bg-midnight text-white`}>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
