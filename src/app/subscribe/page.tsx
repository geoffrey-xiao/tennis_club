import type { Metadata } from "next";
import { SubscriptionForm } from "@/components/subscription-form";
import { players } from "@/data/players";

export const metadata: Metadata = {
  title: "Subscribe | Tennis Club",
  description: "Preview the Tennis Club newsletter signup for match picks, player updates, and beginner guides.",
  alternates: { canonical: "/subscribe" }
};

export default function SubscribePage() {
  return (
    <main className="mx-auto grid max-w-5xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[0.9fr_1.1fr] md:items-start md:py-16">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--primary)]">Daily briefing</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Follow tennis without the noise.</h1>
        <p className="mt-5 text-lg leading-8 text-[#52645c]">Get original summaries, the day’s best match picks, player context, and one useful learning note.</p>
        <p className="mt-4 rounded-md border border-[#cad5cb] bg-white p-4 text-sm leading-6 text-[#52645c]">
          MVP preview: this form validates your details but does not store them or send email yet.
        </p>
        <ul className="mt-6 grid gap-3 font-bold text-[#35463f]"><li>✓ Concise daily context</li><li>✓ No betting content</li><li>✓ Unsubscribe whenever you like</li></ul>
      </div>
      <SubscriptionForm players={players} />
    </main>
  );
}
