import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article-card";
import { articles } from "@/data/articles";
import { players } from "@/data/players";

type PlayerPageProps = { params: Promise<{ slug: string }> };

function getPlayer(slug: string) {
  return players.find((player) => player.slug === slug);
}

export function generateStaticParams() {
  return players.map((player) => ({ slug: player.slug }));
}

export async function generateMetadata({ params }: PlayerPageProps): Promise<Metadata> {
  const player = getPlayer((await params).slug);
  if (!player) return { title: "Player Not Found | Tennis Club" };

  return {
    title: `${player.name} Profile | Tennis Club`,
    description: `${player.name}: ${player.playingStyle}, strengths, weaknesses, recent results, and updates.`,
    alternates: { canonical: `/players/${player.slug}` }
  };
}

export default async function PlayerPage({ params }: PlayerPageProps) {
  const player = getPlayer((await params).slug);
  if (!player) notFound();

  const relatedArticles = articles.filter((article) =>
    `${article.title} ${article.summary} ${article.body}`.toLowerCase().includes(player.name.split(" ").at(-1)!.toLowerCase())
  ).slice(0, 3);

  return (
    <>
      <header className="bg-[#0b3124] text-white">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#d7f05c]">Rank #{player.ranking} · {player.countryCode}</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight">{player.name}</h1>
            <p className="mt-4 text-lg font-bold text-[#d8e5df]">{player.playingStyle}</p>
          </div>
          <dl className="grid grid-cols-2 gap-6 rounded-lg bg-white/10 p-5 text-sm">
            <div><dt className="text-white/60">Country</dt><dd className="mt-1 font-black">{player.country}</dd></div>
            <div><dt className="text-white/60">Age</dt><dd className="mt-1 font-black">{player.age}</dd></div>
          </dl>
        </div>
      </header>

      <main className="mx-auto grid max-w-5xl gap-10 px-4 py-10 sm:px-6 sm:py-14">
        <section>
          <h2 className="text-2xl font-black">Player overview</h2>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-[#52645c]">{player.shortBio}</p>
        </section>

        <div className="grid gap-5 md:grid-cols-2">
          <section className="rounded-lg border border-[#dfe6dc] bg-white p-6">
            <h2 className="text-xl font-black">Strengths</h2>
            <ul className="mt-4 grid gap-3 text-[#52645c]">{player.strengths.map((item) => <li key={item}>✓ {item}</li>)}</ul>
          </section>
          <section className="rounded-lg border border-[#dfe6dc] bg-white p-6">
            <h2 className="text-xl font-black">Areas opponents test</h2>
            <ul className="mt-4 grid gap-3 text-[#52645c]">{player.weaknesses.map((item) => <li key={item}>• {item}</li>)}</ul>
          </section>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <section><h2 className="text-xl font-black">Recent results</h2><ul className="mt-4 grid gap-3">{player.recentResults.map((item) => <li key={item} className="border-b border-[#dfe6dc] pb-3">{item}</li>)}</ul></section>
          <section><h2 className="text-xl font-black">Recent updates</h2><ul className="mt-4 grid gap-3">{player.recentUpdates.map((item) => <li key={item} className="border-b border-[#dfe6dc] pb-3">{item}</li>)}</ul></section>
        </div>

        <section>
          <h2 className="text-2xl font-black">Related articles</h2>
          {relatedArticles.length ? (
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{relatedArticles.map((article) => <ArticleCard key={article.id} article={article} compact />)}</div>
          ) : <p className="mt-3 text-[#607068]">More coverage of {player.name} is coming soon.</p>}
        </section>
        <Link href="/players" className="font-black text-[var(--primary)]">← Back to all players</Link>
      </main>
    </>
  );
}
