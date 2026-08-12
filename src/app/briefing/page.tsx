import type { Metadata } from "next";
import Link from "next/link";
import { MatchCard } from "@/components/match-card";
import { todaysBriefing } from "@/data/briefing";
import { matches } from "@/data/matches";
import { players } from "@/data/players";

export const metadata: Metadata = { title: "Tennis Briefing | Tennis Club", description: todaysBriefing.summary, alternates: { canonical: "/briefing" } };

export default function BriefingPage() {
  return <><header className="bg-[#0b3124] text-white"><div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#d7f05c]">June 3, 2026 edition</p><h1 className="mt-3 text-4xl font-black sm:text-5xl">{todaysBriefing.headline}</h1><p className="mt-4 max-w-2xl text-lg leading-8 text-[#d8e5df]">{todaysBriefing.summary}</p></div></header><main className="mx-auto grid max-w-5xl gap-10 px-4 py-10 sm:px-6 sm:py-14"><section className="grid gap-4 md:grid-cols-3">{todaysBriefing.items.map((item) => <article key={item.id} className="rounded-lg border border-[#dfe6dc] bg-white p-5"><p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--primary)]">{item.label}</p><p className="mt-3 leading-7 text-[#52645c]">{item.text}</p></article>)}</section><section><h2 className="text-2xl font-black">Matches to watch</h2><p className="mt-2 text-sm text-[#607068]">Sample editorial schedule from this edition; times are shown in UTC.</p><div className="mt-5 grid gap-4 md:grid-cols-3">{matches.map((match) => <MatchCard key={match.id} match={match} />)}</div></section><section><h2 className="text-2xl font-black">Player updates</h2><div className="mt-5 grid gap-4 sm:grid-cols-2">{players.slice(0, 4).map((player) => <Link key={player.id} href={`/players/${player.slug}`} className="rounded-lg border border-[#dfe6dc] bg-white p-5"><span className="font-black">{player.name}</span><span className="mt-2 block text-sm leading-6 text-[#607068]">{player.recentUpdates[0]}</span></Link>)}</div></section><section className="rounded-lg bg-[#eaf2e5] p-6"><h2 className="text-xl font-black">Sources</h2><p className="mt-2 text-sm leading-6 text-[#52645c]">Briefings use original language and should link to official ATP, WTA, ITF, and tournament sources when publishing live updates.</p></section></main></>;
}
