import { PlayerCard } from "@/components/player-card";
import { SectionHeading } from "@/components/section-heading";
import type { Player } from "@/data/players";

type PlayersSectionProps = {
  players: Player[];
};

export function PlayersSection({ players }: PlayersSectionProps) {
  return (
    <section className="bg-[#fbfcfa]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <SectionHeading
          eyebrow="Profiles"
          title="Featured Players"
          description="Quick scouting-style notes for following player form and matchups."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {players.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </div>
    </section>
  );
}
