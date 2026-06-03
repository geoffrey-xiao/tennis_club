import Link from "next/link";
import type { Article } from "@/data/articles";

type ArticleCardProps = {
  article: Article;
  compact?: boolean;
};

const categoryStyles: Record<Article["category"], string> = {
  ATP: "bg-[#12a257] text-white",
  WTA: "bg-[#7d4be7] text-white",
  "Grand Slam": "bg-[#245bd6] text-white",
  "Match Preview": "bg-[#f4e400] text-[#17220d]",
  "Match Review": "bg-[#f4e400] text-[#17220d]",
  Gear: "bg-[#d7f05c] text-[#17220d]",
  Beginner: "bg-[#1f6f43] text-white"
};

const visualStyles: Record<Article["category"], string> = {
  ATP: "from-[#0c3b2d] via-[#176440] to-[#76a164]",
  WTA: "from-[#2f4f31] via-[#5f7d47] to-[#e5eef0]",
  "Grand Slam": "from-[#244a31] via-[#cc8c3d] to-[#173a2b]",
  "Match Preview": "from-[#8d4e1d] via-[#d99543] to-[#f4d164]",
  "Match Review": "from-[#1d2f27] via-[#7d6546] to-[#c8a35f]",
  Gear: "from-[#244a31] via-[#6c8f48] to-[#d8e8c8]",
  Beginner: "from-[#2f6f36] via-[#477a44] to-[#b9cf8b]"
};

export function ArticleCard({ article, compact = false }: ArticleCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-[#dfe6dc] bg-white shadow-[0_12px_30px_rgba(21,38,30,0.08)]">
      <div className={`relative h-28 bg-gradient-to-br ${visualStyles[article.category]}`}>
        <span
          className={`absolute left-3 top-3 rounded px-2 py-1 text-[10px] font-black uppercase ${categoryStyles[article.category]}`}
        >
          {article.category}
        </span>
        <div className="absolute bottom-3 right-3 h-8 w-8 rounded-full border-4 border-white/70 bg-[#e7ff26]" />
      </div>
      <div className="p-4">
        <h3 className="text-base font-black leading-tight tracking-normal">
          <Link href={`/news/${article.slug}`} className="hover:text-[var(--primary)]">
            {article.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-5 text-[#607068]">
          {compact ? article.summary.slice(0, 82) + "..." : article.summary}
        </p>
        <time className="mt-3 block text-xs font-bold text-[#6b7a72]" dateTime={article.publishedAt}>
          {compact ? "5 min read" : "2 min read"}
        </time>
      </div>
    </article>
  );
}
