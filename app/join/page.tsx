import type { Metadata } from "next";
import { JoinForm } from "../../components/JoinForm";

export const metadata: Metadata = {
  title: "Join",
  description: "Monthly digest. New playbooks. Early invites. No spam.",
};

export default function JoinPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold text-brand-primary">Join the Community</h1>
        <p className="max-w-2xl text-base text-brand-secondary">
          Monthly digest. New playbooks. Early invites. No spam.
        </p>
      </header>
      <JoinForm />
    </div>
  );
}
