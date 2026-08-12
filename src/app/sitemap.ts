import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { players } from "@/data/players";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = ["", "/briefing", "/news", "/players", "/learn", "/glossary", "/subscribe", "/about", "/legal/content-policy"];
  return [
    ...staticPaths.map((path) => ({ url: new URL(path || "/", siteUrl).toString(), lastModified: now, changeFrequency: path === "" || path === "/briefing" || path === "/news" ? "daily" as const : "monthly" as const })),
    ...articles.map((article) => ({ url: new URL(`/news/${article.slug}`, siteUrl).toString(), lastModified: new Date(article.publishedAt), changeFrequency: "monthly" as const })),
    ...players.map((player) => ({ url: new URL(`/players/${player.slug}`, siteUrl).toString(), lastModified: now, changeFrequency: "weekly" as const }))
  ];
}
