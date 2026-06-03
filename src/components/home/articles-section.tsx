import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { SectionHeading } from "@/components/section-heading";
import type { Article } from "@/data/articles";

type ArticlesSectionProps = {
  articles: Article[];
};

export function ArticlesSection({ articles }: ArticlesSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Read"
          title="Latest Articles"
          description="Copyright-safe tennis context written in original language."
        />
        <Link href="/news" className="text-sm font-black text-[var(--primary)]">
          View all articles
        </Link>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
