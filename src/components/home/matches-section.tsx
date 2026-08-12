import Link from "next/link";
import { MatchCard } from "@/components/match-card";
import { SectionHeading } from "@/components/section-heading";
import type { Match } from "@/data/matches";

type MatchesSectionProps = {
  matches: Match[];
};

export function MatchesSection({ matches }: MatchesSectionProps) {
  return (
    <section className="bg-[#fbfcfa]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Sample watch list"
            title="Recommended Matches"
            description="Editorial match examples ranked by watchability. Live schedules are planned for a future release."
          />
          <Link href="/news" className="hidden text-sm font-black text-[#0b3124] sm:block">
            Browse match previews ›
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </div>
    </section>
  );
}
