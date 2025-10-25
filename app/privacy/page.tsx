import type { Metadata } from "next";
import { TeaserPage } from "../../components/TeaserPage";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Channel OS™ handles data leading up to the January 2026 launch.",
};

export default function PrivacyPage() {
  return (
    <TeaserPage
      title="Privacy policy"
      description="We take a minimal-data approach—especially in this teaser phase. Here&apos;s how we manage your information before launch."
      sections={[
        {
          title: "What we collect now",
          description: "Only the essentials so we can keep you informed.",
          items: [
            {
              title: "Email & name",
              description: "Used for launch updates and community onboarding communication.",
            },
            {
              title: "Role & focus areas",
              description: "Optional signals that help us prioritize playbooks and sessions.",
            },
            {
              title: "Consent preferences",
              description: "Stored so you control how and when we reach out.",
            },
          ],
        },
        {
          title: "How we protect it",
          description: "Security and respect are non-negotiable.",
          items: [
            {
              title: "Secure storage",
              description: "Data lives in encrypted systems with access limited to the core team.",
            },
            {
              title: "No selling",
              description: "We do not rent, sell, or trade your information—ever.",
            },
            {
              title: "Audit trail",
              description: "We log access and changes so we can trace every interaction with your data.",
            },
          ],
        },
        {
          title: "Your controls",
          description: "You stay in charge of what we keep and how we use it.",
          items: [
            {
              title: "Update or delete",
              description: (
                <>
                  Email{" "}
                  <a className="text-brand-primary underline-offset-4 hover:underline" href="mailto:hello@channelos.org">
                    hello@channelos.org
                  </a>{" "}
                  to change or remove your information. We respond within seven days.
                </>
              ),
            },
            {
              title: "Unsubscribe",
              description: "Every message includes a one-click opt-out.",
            },
            {
              title: "Future updates",
              description: "We&apos;ll publish the full privacy policy alongside the member platform release.",
            },
          ],
        },
      ]}
    />
  );
}
