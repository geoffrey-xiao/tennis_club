import { ArticleCard } from "@/components/article-card";
import { SectionHeading } from "@/components/section-heading";
import type { Article } from "@/data/articles";

type BeginnerGuidesSectionProps = {
  guides: Article[];
};

export function BeginnerGuidesSection({ guides }: BeginnerGuidesSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <SectionHeading
        eyebrow="Learn"
        title="Beginner Guides"
        description="Simple explainers for rules, tactics, and practice basics."
      />
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {guides.map((article) => (
          <ArticleCard key={article.id} article={article} compact />
        ))}
      </div>
    </section>
  );
}
