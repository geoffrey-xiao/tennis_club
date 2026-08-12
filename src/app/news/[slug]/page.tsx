import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article-card";
import { articles } from "@/data/articles";
import { siteName, siteUrl } from "@/lib/site";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return { title: "Article Not Found | Tennis Club" };
  }

  return {
    title: `${article.title} | Tennis Club`,
    description: article.summary,
    alternates: { canonical: `/news/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author]
    }
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const publishedDate = new Intl.DateTimeFormat("en", {
    dateStyle: "long",
    timeZone: "UTC"
  }).format(new Date(article.publishedAt));
  const relatedArticles = articles
    .filter(
      (candidate) =>
        candidate.id !== article.id &&
        (candidate.category === article.category ||
          candidate.tags.some((tag) => article.tags.includes(tag)))
    )
    .slice(0, 3);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    datePublished: article.publishedAt,
    author: { "@type": "Organization", name: article.author },
    publisher: { "@type": "Organization", name: siteName },
    mainEntityOfPage: new URL(`/news/${article.slug}`, siteUrl).toString()
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <header className="border-b border-[#d9e3d9] bg-[#0b3124] text-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
          <Link
            href={{ pathname: "/news", query: { category: article.category } }}
            className="text-xs font-black uppercase tracking-[0.18em] text-[#d7f05c]"
          >
            {article.category}
          </Link>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#d8e5df]">
            {article.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1 text-sm text-white/70">
            <span>By {article.author}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={article.publishedAt}>{publishedDate}</time>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-4xl gap-10 px-4 py-10 sm:px-6 sm:py-14">
        <div className="prose prose-lg max-w-none">
          {article.body.split("\n\n").map((paragraph) => (
            <p key={paragraph} className="text-lg leading-8 text-[#35463f]">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex flex-wrap gap-2" aria-label="Article tags">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#e6f0e2] px-3 py-1 text-xs font-bold text-[#31542b]"
            >
              #{tag}
            </span>
          ))}
        </div>

        <section className="rounded-lg border border-[#dfe6dc] bg-white p-6">
          <h2 className="text-xl font-black">Sources and attribution</h2>
          <p className="mt-2 text-sm leading-6 text-[#607068]">
            This article is original Tennis Club commentary. Sources are provided for
            factual context; no source article is reproduced here.
          </p>
          <ul className="mt-4 grid gap-2">
            {article.sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-[var(--primary)] underline decoration-2 underline-offset-4"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {relatedArticles.length > 0 ? (
          <section>
            <h2 className="text-2xl font-black">Related articles</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((relatedArticle) => (
                <ArticleCard key={relatedArticle.id} article={relatedArticle} compact />
              ))}
            </div>
          </section>
        ) : null}

        <Link href="/news" className="font-black text-[var(--primary)]">
          ← Back to all news
        </Link>
      </div>
    </article>
  );
}
