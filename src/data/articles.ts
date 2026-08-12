export type ArticleCategory =
  | "ATP"
  | "WTA"
  | "Grand Slam"
  | "Match Preview"
  | "Match Review"
  | "Gear"
  | "Beginner";

export const articleCategories: ArticleCategory[] = [
  "ATP",
  "WTA",
  "Grand Slam",
  "Match Preview",
  "Match Review",
  "Gear",
  "Beginner"
];

export type ArticleSource = {
  label: string;
  url: string;
};

export type Article = {
  id: string;
  slug: string;
  title: string;
  category: ArticleCategory;
  summary: string;
  body: string;
  sources: ArticleSource[];
  publishedAt: string;
  author: string;
  tags: string[];
};

export const articles: Article[] = [
  {
    id: "article-briefing-clay-hard-court",
    slug: "clay-to-hard-court-adjustments",
    title: "Tennis Scoring 101",
    category: "Beginner",
    summary:
      "A plain-language guide to points, games, sets, deuce, advantage, and winning a match.",
    body:
      "Tennis points progress from love to 15, 30, and 40. At 40-40 the score is deuce, and a player generally needs two consecutive points to win the game. Games build a set, and sets decide the match.",
    sources: [{ label: "Official tennis rules reference", url: "https://www.itftennis.com/" }],
    publishedAt: "2026-06-03T08:00:00.000Z",
    author: "Tennis Club Desk",
    tags: ["surfaces", "strategy", "beginner"]
  },
  {
    id: "article-match-preview-pressure",
    slug: "break-point-pressure-preview",
    title: "Alcaraz vs Djokovic: Semi-final Preview",
    category: "Match Preview",
    summary:
      "Three pressure patterns to watch when two aggressive baseliners meet deep in a draw.",
    body:
      "The first serve after a long rally, the return at 30-40, and the first point after a medical timeout can reveal who is reading the match best. A close preview should focus less on reputation and more on which player owns those repeatable moments.",
    sources: [{ label: "Tournament schedule placeholder", url: "https://www.atptour.com/" }],
    publishedAt: "2026-06-03T10:30:00.000Z",
    author: "Tennis Club Desk",
    tags: ["preview", "pressure", "baseline"]
  },
  {
    id: "article-serve-foundation",
    slug: "beginner-serve-foundation",
    title: "Basic Serve Guide",
    category: "Beginner",
    summary:
      "Start with rhythm, contact, and balance before worrying about speed or spin.",
    body:
      "A reliable serve starts with a motion you can repeat. New players should treat toss height, relaxed shoulders, and a balanced finish as the first checkpoints, then add power once contact becomes predictable.",
    sources: [{ label: "Coaching resource placeholder", url: "https://www.usta.com/" }],
    publishedAt: "2026-06-02T14:00:00.000Z",
    author: "Tennis Club Desk",
    tags: ["serve", "learn", "practice"]
  },
  {
    id: "article-player-form-notes",
    slug: "reading-player-form",
    title: "Sinner's Return to No. 1: Consistency Pays Off",
    category: "ATP",
    summary:
      "Recent results matter, but matchup fit, travel load, and surface comfort can matter more.",
    body:
      "A three-match winning streak is useful context, not a full prediction. Form is strongest when it lines up with the player's preferred surface, healthy movement, and a draw that rewards their best patterns.",
    sources: [{ label: "Player profile placeholder", url: "https://www.wtatennis.com/" }],
    publishedAt: "2026-06-01T11:00:00.000Z",
    author: "Tennis Club Desk",
    tags: ["form", "players", "analysis"]
  },
  {
    id: "article-swiatek-clay-control",
    slug: "swiatek-clay-control",
    title: "Swiatek's Clay Court Dominance Continues",
    category: "WTA",
    summary:
      "A concise look at how early court position and heavy spin help a top clay-court player control rallies.",
    body:
      "On clay, patience matters as much as pace. The best rhythm players build pressure with repeatable patterns, forcing opponents to defend wider with each exchange.",
    sources: [{ label: "WTA profile placeholder", url: "https://www.wtatennis.com/" }],
    publishedAt: "2026-06-01T09:00:00.000Z",
    author: "Tennis Club Desk",
    tags: ["wta", "clay", "players"]
  },
  {
    id: "article-grand-slam-watch",
    slug: "grand-slam-watch",
    title: "Roland Garros: 5 Storylines to Watch",
    category: "Grand Slam",
    summary:
      "Five original, high-level angles for following a major tournament without getting lost in the draw.",
    body:
      "A major rewards different kinds of durability: physical recovery, mental reset after long sets, and tactical flexibility when matchups change round by round.",
    sources: [{ label: "Tournament homepage placeholder", url: "https://www.rolandgarros.com/" }],
    publishedAt: "2026-05-31T12:00:00.000Z",
    author: "Tennis Club Desk",
    tags: ["grand-slam", "storylines", "preview"]
  },
  {
    id: "article-racket-choice",
    slug: "how-to-choose-racket",
    title: "How to Choose a Racket",
    category: "Beginner",
    summary:
      "A practical beginner guide to choosing a racket by comfort, control, and consistency before specs.",
    body:
      "New players should start with comfort and repeatable contact. A racket that makes practice feel stable is more useful than one chosen only for power or a favorite player's setup.",
    sources: [{ label: "Equipment guide placeholder", url: "https://www.usta.com/" }],
    publishedAt: "2026-05-30T10:00:00.000Z",
    author: "Tennis Club Desk",
    tags: ["gear", "beginner", "racket"]
  },
  {
    id: "article-break-point-guide",
    slug: "what-is-break-point",
    title: "What Is Break Point?",
    category: "Beginner",
    summary:
      "Learn why break points are the pressure moments that can change a match quickly.",
    body:
      "A break point is a chance for the returner to win a game against serve. It matters because holding serve is usually expected, so converting one can shift the set's momentum.",
    sources: [{ label: "Rules reference placeholder", url: "https://www.itftennis.com/" }],
    publishedAt: "2026-05-29T10:00:00.000Z",
    author: "Tennis Club Desk",
    tags: ["rules", "beginner", "scoring"]
  },
  {
    id: "article-tennis-rules",
    slug: "tennis-rules-for-beginners",
    title: "Tennis Rules for Beginners",
    category: "Beginner",
    summary: "The essential rules for serving, changing ends, calling lines, and winning points.",
    body: "A point begins with a legal serve into the diagonal service box. The ball may bounce once before it is returned, and a shot landing on a line is in. Players change ends at designated game intervals so conditions are shared fairly.",
    sources: [{ label: "ITF Rules of Tennis", url: "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/" }],
    publishedAt: "2026-05-28T10:00:00.000Z",
    author: "Tennis Club Desk",
    tags: ["rules", "beginner", "essentials"]
  },
  {
    id: "article-tiebreak-guide",
    slug: "what-is-a-tiebreak",
    title: "What Is a Tiebreak?",
    category: "Beginner",
    summary: "Understand tiebreak scoring, serving order, and why every mini-break matters.",
    body: "A standard tiebreak is usually played first to seven points with a two-point margin. The first player serves once, then service alternates every two points. Winning a point on the opponent's serve is often called a mini-break.",
    sources: [{ label: "ITF Rules of Tennis", url: "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/" }],
    publishedAt: "2026-05-27T10:00:00.000Z",
    author: "Tennis Club Desk",
    tags: ["rules", "beginner", "tiebreak"]
  },
  {
    id: "article-forehand-guide",
    slug: "basic-forehand-guide",
    title: "Basic Forehand Guide",
    category: "Beginner",
    summary: "Build a repeatable forehand using preparation, spacing, contact, and a balanced finish.",
    body: "Turn your shoulders as the ball travels toward you, create enough space to swing freely, and meet the ball in front of your body. Finish balanced before adding more racket speed.",
    sources: [{ label: "USTA player development resources", url: "https://www.usta.com/en/home/improve.html" }],
    publishedAt: "2026-05-26T10:00:00.000Z",
    author: "Tennis Club Desk",
    tags: ["forehand", "beginner", "practice"]
  },
  {
    id: "article-backhand-guide",
    slug: "basic-backhand-guide",
    title: "Basic Backhand Guide",
    category: "Beginner",
    summary: "Learn the preparation and contact checkpoints shared by reliable backhands.",
    body: "Prepare early, keep your contact comfortably in front, and use your legs to support the swing. Whether you use one hand or two, a stable head and balanced finish make timing easier to repeat.",
    sources: [{ label: "USTA player development resources", url: "https://www.usta.com/en/home/improve.html" }],
    publishedAt: "2026-05-25T10:00:00.000Z",
    author: "Tennis Club Desk",
    tags: ["backhand", "beginner", "practice"]
  }
];

export const beginnerGuides = articles.filter((article) => article.category === "Beginner");
