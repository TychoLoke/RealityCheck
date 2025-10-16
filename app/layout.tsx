import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { EmailCaptureProvider } from "../components/EmailCaptureProvider";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap", variable: "--font-sans" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://channelos.org";
const enableAnalytics = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true";

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Channel OS™",
  url: siteUrl,
  description: "Channel OS™ — The neutral framework for the IT channel.",
};

const eventLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Channel OS™ launch",
  eventStatus: "https://schema.org/EventScheduled",
  startDate: "2026-01-01",
  endDate: "2026-01-01",
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  url: siteUrl,
  organizer: {
    "@type": "Organization",
    name: "Channel OS™",
    url: siteUrl,
  },
  description: "2026 is the year of Channel OS. Join the mailing list for updates.",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Channel OS™ — The neutral framework for the IT channel",
    template: "%s | Channel OS™",
  },
  description: "Channel OS™ is a neutral framework for the IT channel. Join the mailing list to follow the build toward 2026.",
  openGraph: {
    title: "Channel OS™ — The neutral framework for the IT channel",
    description: "Channel OS™ is a neutral framework for the IT channel. Join the mailing list to follow the build toward 2026.",
    url: siteUrl,
    siteName: "Channel OS™",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Channel OS™ — The neutral framework for the IT channel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Channel OS™ — The neutral framework for the IT channel",
    description: "Channel OS™ is a neutral framework for the IT channel. Join the mailing list to follow the build toward 2026.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable}>
      <body className="bg-brand-bg text-brand-primary">
        <EmailCaptureProvider>
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <Navbar />
          <main id="main-content" className="mx-auto w-full max-w-content px-6 py-16 sm:px-10">
            {children}
          </main>
          <Footer />
        </EmailCaptureProvider>
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
