import type { Metadata } from "next";
import { GlossaryBrowser } from "@/components/glossary-browser";
import { glossaryTerms } from "@/data/glossary";

export const metadata: Metadata = {
  title: "Tennis Glossary | Tennis Club",
  description: "Search clear, beginner-friendly definitions of common tennis terms.",
  alternates: { canonical: "/glossary" }
};

export default function GlossaryPage() {
  const sortedTerms = [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term));
  return (
    <>
      <section className="border-b border-[#d9e3d9] bg-[#0b3124] text-white">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#d7f05c]">Quick reference</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Tennis glossary</h1>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-[#d8e5df]">Understand the language of a match without stopping the action.</p>
        </div>
      </section>
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
        <GlossaryBrowser terms={sortedTerms} />
      </main>
    </>
  );
}
