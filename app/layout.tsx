import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap", variable: "--font-sans" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://channelos.org";
const enableAnalytics = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true";

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Channel OS",
  url: siteUrl,
  slogan: "A shared operating system for the IT channel",
  sameAs: [siteUrl],
};

const eventLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Channel OS Launch",
  eventStatus: "https://schema.org/EventScheduled",
  startDate: "2026-01-01",
  endDate: "2026-01-01",
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  url: siteUrl,
  organizer: {
    "@type": "Organization",
    name: "Channel OS",
    url: siteUrl,
  },
  description: "2026 is the year of Channel OS. Join the mailing list for updates.",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Channel OS — Operating system for the IT channel",
    template: "%s | Channel OS",
  },
  description: "Channel OS is a shared operating system for the IT channel. Join the mailing list and preview the Standard.",
  openGraph: {
    title: "Channel OS — Operating system for the IT channel",
    description: "Channel OS is a shared operating system for the IT channel. Join the mailing list and preview the Standard.",
    url: siteUrl,
    siteName: "Channel OS",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Channel OS — Operating system for the IT channel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Channel OS — Operating system for the IT channel",
    description: "Channel OS is a shared operating system for the IT channel. Join the mailing list and preview the Standard.",
  },
  alternates: {
    types: {
      "application/rss+xml": `${siteUrl}/journal.xml`,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${sans.variable}`}>
      <body className="min-h-screen bg-night text-ink font-sans">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Header />
        <main id="main-content" className="relative flex min-h-[calc(100vh-200px)] flex-col gap-16 py-16">
          {children}
        </main>
        <Footer />
        <Script id="channelos-org-jsonld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify([organizationLd, eventLd])}
        </Script>
        {enableAnalytics && (
          <Script id="analytics-stub" strategy="afterInteractive">
            {"window.channelosAnalyticsEnabled = true;"}
          </Script>
        )}
      </body>
    </html>
  );
}
