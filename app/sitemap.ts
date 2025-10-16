import type { MetadataRoute } from "next";
import { journalEntries } from "../lib/journal";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://channelos.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/standard", "/journal", "/subscribe", "/privacy", "/terms", "/brand-use", "/contact"].map(
    (path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date().toISOString(),
    }),
  );

  const journalRoutes = journalEntries.map((entry) => ({
    url: `${siteUrl}/journal/${entry.slug}`,
    lastModified: new Date(entry.date).toISOString(),
  }));

  return [...staticRoutes, ...journalRoutes];
}
