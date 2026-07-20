import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import {
  articleCategories,
  articles,
  type ArticleCategory
} from "@/data/articles";

export const metadata: Metadata = {
  title: "Tennis News | Tennis Club",
  description:
    "Read original tennis analysis, match previews, tour updates, and beginner-friendly guides.",
  alternates: {
    canonical: "/news"
  }
};

type NewsPageProps = {
  searchParams: Promise<{
    category?: string | string[];
  }>;
};

function getCategory(value: string | string[] | undefined) {
  const category = Array.isArray(value) ? value[0] : value;

  return articleCategories.includes(category as ArticleCategory)
    ? (category as ArticleCategory)
    : undefined;
}

export default async function NewsPage({ searchParams }: NewsPageProps) {
  const params = await searchParams;
  const selectedCategory = getCategory(params.category);
  const filteredArticles = selectedCategory
    ? articles.filter((article) => article.category === selectedCategory)
    : articles;

  return (
    <main>
      <section className="border-b border-[#d9e3d9] bg-[#0b3124] text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#d7f05c]">
            Tennis Club Desk
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
            Tennis news, with the useful parts brought forward.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#d8e5df] sm:text-lg">
            Original analysis, match context, and beginner-friendly explainers
            for following the sport with confidence.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="flex flex-col gap-5 border-b border-[#dfe6dc] pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-(--primary)">
              Browse coverage
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">
              {selectedCategory ?? "All news"}
            </h2>
            <p className="mt-2 text-sm text-[#607068]" aria-live="polite">
              {filteredArticles.length}{" "}
              {filteredArticles.length === 1 ? "article" : "articles"}
            </p>
          </div>

          <nav
            className="flex gap-2 overflow-x-auto pb-1 lg:max-w-3xl lg:flex-wrap lg:justify-end"
            aria-label="News categories"
          >
            <Link
              href="/news"
              aria-current={!selectedCategory ? "page" : undefined}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition ${
                !selectedCategory
                  ? "primary-link-text border-[#0b3124] bg-[#0b3124]"
                  : "border-[#cad5cb] bg-white text-[#35463f] hover:border-[#0b3124]"
              }`}
            >
              All
            </Link>
            {articleCategories.map((category) => {
              const isActive = selectedCategory === category;

              return (
                <Link
                  key={category}
                  href={{ pathname: "/news", query: { category } }}
                  aria-current={isActive ? "page" : undefined}
                  className={`shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition ${
                    isActive
                      ? "primary-link-text border-[#0b3124] bg-[#0b3124]"
                      : "border-[#cad5cb] bg-white text-[#35463f] hover:border-[#0b3124]"
                  }`}
                >
                  {category}
                </Link>
              );
            })}
          </nav>
        </div>

        {filteredArticles.length > 0 ? (
          <div className="mt-8 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-lg border border-dashed border-[#bdcbbc] bg-white px-6 py-16 text-center">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-(--primary)">
              More coverage is coming
            </p>
            <h3 className="mt-3 text-2xl font-black">
              No {selectedCategory} articles yet.
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#607068]">
              Browse all of our latest stories while the desk prepares this
              section.
            </p>
            <Link
              href="/news"
              className="primary-link-text mt-6 inline-flex rounded-md bg-[#0b3124] px-5 py-3 text-sm font-black"
            >
              View all news
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
