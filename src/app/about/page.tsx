import type { Metadata } from "next";

export const metadata: Metadata = { title: "About | Tennis Club", description: "Why Tennis Club creates concise, original, beginner-friendly tennis coverage.", alternates: { canonical: "/about" } };

export default function AboutPage() {
  return <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16"><p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--primary)]">About us</p><h1 className="mt-3 text-4xl font-black sm:text-5xl">A clearer way to follow tennis.</h1><div className="mt-8 grid gap-6 text-lg leading-8 text-[#52645c]"><p>Tennis Club is a lightweight daily hub for fans who want useful context without a wall of scores or betting noise.</p><p>We publish original summaries, curated match recommendations, player notes, and beginner guides. We link to sources for factual context and do not reproduce copyrighted reporting.</p><p>Future versions may help local players find courts, partners, coaches, and events. The current MVP focuses on making the professional game easier to follow.</p></div></main>;
}
