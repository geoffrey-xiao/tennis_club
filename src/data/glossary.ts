export type GlossaryTerm = {
  id: string;
  term: string;
  slug: string;
  definition: string;
  beginnerTip: string;
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: "term-ace",
    term: "Ace",
    slug: "ace",
    definition: "A serve that lands in and is not touched by the returner.",
    beginnerTip: "Aces are easiest to understand as clean serve winners."
  },
  {
    id: "term-double-fault",
    term: "Double Fault",
    slug: "double-fault",
    definition: "Two missed serves in a row, giving the point to the returner.",
    beginnerTip: "Watch how players change pace or target after a first-serve miss."
  },
  {
    id: "term-break-point",
    term: "Break Point",
    slug: "break-point",
    definition: "A point where the returner can win the game on the server's serve.",
    beginnerTip: "Break points are pressure moments because service games are expected to be protected."
  },
  {
    id: "term-deuce",
    term: "Deuce",
    slug: "deuce",
    definition: "A tied game score after both players reach at least 40.",
    beginnerTip: "From deuce, a player needs two points in a row to win the game."
  },
  {
    id: "term-tiebreak",
    term: "Tiebreak",
    slug: "tiebreak",
    definition: "A special game used to decide a set when the score reaches a set-specific tie.",
    beginnerTip: "Tiebreaks make every mini-run feel important because the margin is small."
  }
];
