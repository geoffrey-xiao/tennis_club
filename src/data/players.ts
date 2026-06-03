export type Player = {
  id: string;
  slug: string;
  name: string;
  country: string;
  playingStyle: string;
  strengths: string[];
  weaknesses: string[];
  shortBio: string;
  recentUpdates: string[];
  ranking: number;
  countryCode: string;
};

export const players: Player[] = [
  {
    id: "player-carlos-alcaraz",
    slug: "carlos-alcaraz",
    name: "Carlos Alcaraz",
    country: "Spain",
    playingStyle: "Explosive all-court attacker",
    strengths: ["Net transitions", "Forehand acceleration", "Point creativity"],
    weaknesses: ["Can rush low-percentage attacks", "Occasional dips on second serve"],
    shortBio:
      "A dynamic shotmaker whose speed and variety make him one of the most watchable players in any draw.",
    recentUpdates: ["Working through a demanding run of high-intensity matches."],
    ranking: 2,
    countryCode: "ESP"
  },
  {
    id: "player-jannik-sinner",
    slug: "jannik-sinner",
    name: "Jannik Sinner",
    country: "Italy",
    playingStyle: "Clean-striking baseline controller",
    strengths: ["Backhand depth", "Composure", "First-strike accuracy"],
    weaknesses: ["Can be pulled wide by elite variety", "Net play is selective"],
    shortBio:
      "A precise baseliner who turns neutral rallies into attacking positions with minimal wasted motion.",
    recentUpdates: ["Maintaining a steady rhythm across quick turnaround matches."],
    ranking: 1,
    countryCode: "ITA"
  },
  {
    id: "player-iga-swiatek",
    slug: "iga-swiatek",
    name: "Iga Swiatek",
    country: "Poland",
    playingStyle: "Heavy topspin tempo setter",
    strengths: ["Forehand shape", "Return pressure", "Rally discipline"],
    weaknesses: ["Can be tested by flat pace indoors", "Needs early rhythm on serve"],
    shortBio:
      "A rhythm player who uses spin, court position, and relentless returning to control long stretches.",
    recentUpdates: ["Looking sharp when she establishes court position early."],
    ranking: 1,
    countryCode: "POL"
  },
  {
    id: "player-coco-gauff",
    slug: "coco-gauff",
    name: "Coco Gauff",
    country: "United States",
    playingStyle: "Athletic defender with improving offense",
    strengths: ["Court coverage", "Backhand stability", "Competitive problem solving"],
    weaknesses: ["Forehand timing can fluctuate", "Serve rhythm can decide momentum"],
    shortBio:
      "A resilient competitor who can extend points, absorb pressure, and turn defense into sudden offense.",
    recentUpdates: ["Continuing to refine aggressive patterns behind the serve."],
    ranking: 3,
    countryCode: "USA"
  }
];
