import Link from "next/link";
import type { Player } from "@/data/players";

type PlayerCardProps = {
  player: Player;
};

const avatarPositions: Record<string, string> = {
  "carlos-alcaraz": "left top",
  "jannik-sinner": "right top",
  "iga-swiatek": "left bottom",
  "coco-gauff": "right bottom"
};

export function PlayerCard({ player }: PlayerCardProps) {
  const avatarPosition = avatarPositions[player.slug] ?? "left top";

  return (
    <article className="overflow-hidden rounded-lg border border-[#dfe6dc] bg-white shadow-[0_12px_30px_rgba(21,38,30,0.08)]">
      <div className="relative h-32 bg-gradient-to-br from-[#0d392b] via-[#235f3d] to-[#9cb678]">
        <span className="absolute left-3 top-3 grid h-8 w-8 place-items-center rounded-md bg-[#a6df22] text-sm font-black text-[#0b3124]">
          {player.ranking}
        </span>
        <div
          className="absolute bottom-[-24px] right-5 h-20 w-20 rounded-full border-4 border-white bg-[#eaf0e8] bg-cover bg-no-repeat shadow-md"
          style={{
            backgroundImage: "url('/images/player-avatar-sprite.png')",
            backgroundPosition: avatarPosition,
            backgroundSize: "200% 200%"
          }}
          aria-hidden="true"
        />
        <span className="sr-only">{player.name}</span>
      </div>
      <div className="p-4 pt-8">
        <h3 className="font-black tracking-normal">
          <Link href={`/players/${player.slug}`} className="hover:text-[var(--primary)]">
            {player.name}
          </Link>
        </h3>
        <p className="text-xs font-bold text-[#607068]">
          {player.countryCode} - {player.country}
        </p>
        <p className="mt-3 inline-flex rounded-full bg-[#dff2c8] px-3 py-1 text-xs font-bold text-[#31542b]">
          {player.playingStyle}
        </p>
        <div className="mt-4 flex items-center justify-between text-xs">
          <span className="font-bold text-[#607068]">Ranking</span>
          <span className="text-lg font-black">{player.ranking}</span>
        </div>
      </div>
    </article>
  );
}
