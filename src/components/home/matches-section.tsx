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
            eyebrow="Watch list"
            title="Today's Recommended Matches"
            description="Original, placeholder match recommendations ranked by watchability."
          />
          <Link href="/news" className="hidden text-sm font-black text-[#0b3124] sm:block">
            View full schedule ›
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
