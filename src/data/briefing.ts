export type BriefingItem = {
  id: string;
  label: string;
  text: string;
};

export const todaysBriefing = {
  publishedAt: "2026-06-03T08:00:00.000Z",
  headline: "Serve, return, and momentum",
  summary:
    "A short original briefing for fans who want the shape of the day before choosing what to watch.",
  items: [
    {
      id: "briefing-top-story",
      label: "Top story",
      text: "A balanced slate gives fans one tactical baseline matchup, one high-tempo serving duel, and several beginner-friendly storylines."
    },
    {
      id: "briefing-watch",
      label: "What to watch",
      text: "Return games should reveal the day early. Players creating second-serve pressure are best positioned to control the afternoon."
    },
    {
      id: "briefing-opinion",
      label: "One-sentence opinion",
      text: "Today rewards patient viewers because the most interesting matches may build slowly."
    }
  ] satisfies BriefingItem[]
};
