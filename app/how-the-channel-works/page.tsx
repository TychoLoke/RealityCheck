import type { Metadata } from "next";
import { PageContent } from "@/components/how-the-channel-works/PageContent";

export const metadata: Metadata = {
  title: "How the Channel Works",
  description:
    "See how vendors, distributors, partners, marketplaces, and customers create value together across eight motions.",
};

export default function HowTheChannelWorksPage() {
  return <PageContent />;
}
