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
  },
  {
    id: "term-advantage",
    term: "Advantage",
    slug: "advantage",
    definition: "The point won immediately after deuce, putting a player one point from winning the game.",
    beginnerTip: "If the player with advantage loses the next point, the score returns to deuce."
  },
  {
    id: "term-baseline",
    term: "Baseline",
    slug: "baseline",
    definition: "The line at each end of the court, parallel to the net.",
    beginnerTip: "A baseline player prefers building points from the back of the court."
  },
  {
    id: "term-serve-volley",
    term: "Serve and Volley",
    slug: "serve-and-volley",
    definition: "A tactic where the server follows the serve toward the net to play the next ball as a volley.",
    beginnerTip: "Watch the returner's passing-shot target when the server moves forward."
  },
  {
    id: "term-unforced-error",
    term: "Unforced Error",
    slug: "unforced-error",
    definition: "A mistake on a shot the player was reasonably expected to make without overwhelming pressure.",
    beginnerTip: "The label involves judgment, so official totals can vary between statisticians."
  },
  {
    id: "term-winner",
    term: "Winner",
    slug: "winner",
    definition: "A successful shot the opponent cannot touch before its second bounce.",
    beginnerTip: "Winners show attacking success, but they make more sense alongside error totals."
  }
];
