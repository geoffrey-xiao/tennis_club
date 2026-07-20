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
      "A plain-language look at how players adjust footwork, serve placement, and shot height when tournaments move between surfaces.",
    body:
      "Surface changes affect timing before they affect tactics. Players who can reset their movement patterns quickly often look calmer in the first two rounds, especially when their serve gives them free points while the rest of the game catches up.",
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
  }
];

export const beginnerGuides = articles.filter((article) => article.category === "Beginner");
