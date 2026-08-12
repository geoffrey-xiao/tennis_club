import type { Metadata } from "next";
import { ArticleCard } from "@/components/article-card";
import { beginnerGuides } from "@/data/articles";

export const metadata: Metadata = {
  title: "Learn Tennis | Tennis Club",
  description: "Beginner-friendly tennis guides covering rules, scoring, strokes, serving, and equipment.",
  alternates: { canonical: "/learn" }
};

export default function LearnPage() {
  return (
    <>
      <section className="border-b border-[#d9e3d9] bg-[#0b3124] text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#d7f05c]">Tennis made clearer</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Start with the essentials.</h1>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-[#d8e5df]">Practical explanations for following matches and building your own game.</p>
        </div>
      </section>
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {beginnerGuides.map((guide) => <ArticleCard key={guide.id} article={guide} />)}
        </div>
      </main>
    </>
  );
}
