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
  recentResults: string[];
  age: number;
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
    recentResults: ["Won in three sets at the Riverside Open", "Reached the North Coast final"],
    age: 23,
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
    recentResults: ["Won the Harbor Cup", "Reached the Riverside Open semifinal"],
    age: 24,
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
    recentResults: ["Won the Clay Court Classic", "Reached the Harbor Cup quarterfinal"],
    age: 25,
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
    recentResults: ["Reached the Riverside Open final", "Won two matches at the Harbor Cup"],
    age: 22,
    ranking: 3,
    countryCode: "USA"
  },
  {
    id: "player-novak-djokovic",
    slug: "novak-djokovic",
    name: "Novak Djokovic",
    country: "Serbia",
    playingStyle: "Elastic counterpunching all-court player",
    strengths: ["Return of serve", "Backhand control", "Pressure management"],
    weaknesses: ["Can start slowly", "Short recovery windows require careful scheduling"],
    shortBio:
      "An exceptionally complete competitor whose return quality and balance let him solve almost any matchup.",
    recentUpdates: ["Managing his schedule while sharpening his first-strike patterns."],
    recentResults: ["Reached the North Coast semifinal", "Won a deciding-set tiebreak at the Harbor Cup"],
    age: 39,
    ranking: 5,
    countryCode: "SRB"
  },
  {
    id: "player-aryna-sabalenka",
    slug: "aryna-sabalenka",
    name: "Aryna Sabalenka",
    country: "Belarus",
    playingStyle: "First-strike power baseliner",
    strengths: ["Serve power", "Backhand acceleration", "Taking time away"],
    weaknesses: ["High-risk patterns can leak errors", "Touch is used selectively"],
    shortBio:
      "A forceful ball-striker who can control matches quickly when her serve and return land together.",
    recentUpdates: ["Finding confident return positions against strong first serves."],
    recentResults: ["Won the North Coast Championships", "Reached the Clay Court Classic semifinal"],
    age: 28,
    ranking: 2,
    countryCode: "BLR"
  },
  {
    id: "player-naomi-osaka",
    slug: "naomi-osaka",
    name: "Naomi Osaka",
    country: "Japan",
    playingStyle: "Aggressive hard-court shotmaker",
    strengths: ["First serve", "Backhand pace", "Early ball striking"],
    weaknesses: ["Defensive transitions", "Heavy topspin can disrupt contact height"],
    shortBio:
      "A clean, powerful striker whose best tennis is built around decisive serving and early court position.",
    recentUpdates: ["Building match volume and looking increasingly comfortable in long exchanges."],
    recentResults: ["Reached the Riverside Open quarterfinal", "Won an opening-round match at the Harbor Cup"],
    age: 28,
    ranking: 18,
    countryCode: "JPN"
  },
  {
    id: "player-daniil-medvedev",
    slug: "daniil-medvedev",
    name: "Daniil Medvedev",
    country: "Russia",
    playingStyle: "Deep-position counterpuncher",
    strengths: ["Court coverage", "Flat backhand", "Tactical disruption"],
    weaknesses: ["Front-court finishing", "Slow surfaces can blunt his serve"],
    shortBio:
      "An unconventional problem-solver who changes rally geometry with deep positioning and flat, accurate replies.",
    recentUpdates: ["Experimenting with a more forward return position on second serves."],
    recentResults: ["Reached the Harbor Cup semifinal", "Won two straight matches at the Riverside Open"],
    age: 30,
    ranking: 11,
    countryCode: "RUS"
  }
];
