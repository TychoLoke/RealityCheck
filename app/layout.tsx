import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { EmailCaptureProvider } from "../components/EmailCaptureProvider";

const headingFont = Inter({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-heading",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://channelos.org";
const enableAnalytics = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true";

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Channel OS™",
  url: siteUrl,
  description: "Vendor-neutral community and framework for the channel.",
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
  description: "Join the Channel OS™ community to learn, standardize, and ship together.",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Channel OS™ — Where the Channel Learns, Works, and Wins.",
    template: "%s | Channel OS™",
  },
  description: "Vendor-neutral community and framework for the channel.",
  openGraph: {
    title: "Channel OS™ — Community & Framework for the Channel",
    description: "Learn together. Standardize what works. Ship faster.",
    url: siteUrl,
    siteName: "Channel OS™",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Channel OS™ — Community & Framework for the Channel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Channel OS™ — Community & Framework for the Channel",
    description: "Learn together. Standardize what works. Ship faster.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={headingFont.variable}>
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
