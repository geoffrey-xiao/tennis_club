import type { Metadata } from "next";
import { PlayerCard } from "@/components/player-card";
import { players } from "@/data/players";

export const metadata: Metadata = {
  title: "Tennis Players | Tennis Club",
  description: "Explore beginner-friendly profiles, strengths, playing styles, and recent updates for leading tennis players.",
  alternates: { canonical: "/players" }
};

export default function PlayersPage() {
  return (
    <>
      <section className="border-b border-[#d9e3d9] bg-[#0b3124] text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#d7f05c]">Player guide</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Know the player behind the score.</h1>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-[#d8e5df]">
            Quick scouting notes, recent form, and plain-language playing-style breakdowns.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {players.map((player) => <PlayerCard key={player.id} player={player} />)}
        </div>
      </section>
    </>
  );
}
