import type { Metadata } from "next";
import { FormMinimal } from "../../components/FormMinimal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach Channel OS™ for partnerships, press, speaking, or community ideas.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold text-brand-primary">Contact</h1>
        <p className="max-w-2xl text-base text-brand-secondary">
          Partnerships, press, speaking, and community ideas all land here.
        </p>
      </header>
      <FormMinimal
        title="Send a note"
        description="We respond within a few days."
        fields={[
          { name: "name", label: "Name", required: true, placeholder: "Alex Taylor" },
          { name: "email", label: "Email", type: "email", required: true, placeholder: "name@company.com" },
          { name: "subject", label: "Subject", required: true, placeholder: "Partnership inquiry" },
          { name: "message", label: "Message", type: "textarea", required: true, placeholder: "Let us know how we can help." },
        ]}
        submitLabel="Send"
        successMessage="Thanks—we’ll reply soon."
        footer={
          <ul className="space-y-1 text-sm text-brand-secondary">
            <li>Use cases: partnerships, press, speaking, community ideas.</li>
          </ul>
        }
      />
    </div>
  );
}
