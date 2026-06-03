export type Match = {
  id: string;
  tournament: string;
  round: string;
  playerA: string;
  playerB: string;
  startTime: string;
  reasonToWatch: string;
  watchScore: number;
};

export const matches: Match[] = [
  {
    id: "match-1",
    tournament: "Riverside Open",
    round: "Quarterfinal",
    playerA: "Marta Leone",
    playerB: "Elena Park",
    startTime: "2026-06-03T13:00:00.000Z",
    reasonToWatch:
      "A contrast between first-strike serving and patient baseline construction should make the early games revealing.",
    watchScore: 92
  },
  {
    id: "match-2",
    tournament: "North Coast Championships",
    round: "Round of 16",
    playerA: "Andre Silva",
    playerB: "Tomas Reed",
    startTime: "2026-06-03T16:30:00.000Z",
    reasonToWatch:
      "Both players prefer pace, so return quality and second-serve defense could swing the match quickly.",
    watchScore: 87
  },
  {
    id: "match-3",
    tournament: "Harbor Cup",
    round: "Semifinal",
    playerA: "Nadia Kim",
    playerB: "Sofia Marin",
    startTime: "2026-06-03T19:00:00.000Z",
    reasonToWatch:
      "Kim's compact backhand meets Marin's wide forehand patterns in a matchup built around court geometry.",
    watchScore: 84
  }
];
