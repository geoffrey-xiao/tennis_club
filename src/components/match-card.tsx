import type { Match } from "@/data/matches";

type MatchCardProps = {
  match: Match;
};

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export function MatchCard({ match }: MatchCardProps) {
  return (
    <article className="rounded-lg border border-[#dfe6dc] bg-white p-5 shadow-[0_12px_30px_rgba(21,38,30,0.08)]">
      <div className="flex items-center justify-between gap-4 text-xs font-bold text-[#63756d]">
        <span className="rounded-full bg-[#159655] px-2 py-1 text-[10px] font-black text-white">ATP</span>
        <span>
          {match.tournament} - {match.round}
        </span>
      </div>
      <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-center">
        <div className="grid justify-items-center gap-2">
          <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#dbe6dc] to-[#f7f9f4] text-sm font-black text-[#0b3124]">
            {initials(match.playerA)}
          </div>
          <p className="text-sm font-black leading-tight">{match.playerA}</p>
        </div>
        <div>
          <time className="block text-2xl font-black leading-none" dateTime={match.startTime}>
            {new Intl.DateTimeFormat("en", {
              hour: "numeric",
              minute: "2-digit",
              hour12: false,
              hourCycle: "h23"
            }).format(new Date(match.startTime))}
          </time>
          <p className="mt-1 text-[10px] font-bold uppercase text-[#6b7a72]">Today</p>
          <span className="mt-3 inline-grid h-8 w-8 place-items-center rounded-full bg-[#edf2ec] text-xs font-black">
            vs
          </span>
        </div>
        <div className="grid justify-items-center gap-2">
          <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#dbe6dc] to-[#f7f9f4] text-sm font-black text-[#0b3124]">
            {initials(match.playerB)}
          </div>
          <p className="text-sm font-black leading-tight">{match.playerB}</p>
        </div>
      </div>
      <p className="mt-5 text-sm leading-5 text-[#52645c]">
        <span className="font-black text-[#10241d]">Why watch: </span>
        {match.reasonToWatch}
      </p>
      <div className="mt-4 flex items-center justify-between border-t border-[#edf1eb] pt-3 text-sm font-bold">
        <span>Match Preview</span>
        <span aria-hidden="true">›</span>
      </div>
    </article>
  );
}
