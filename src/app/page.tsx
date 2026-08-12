import { ArticlesSection } from "@/components/home/articles-section";
import { BeginnerGuidesSection } from "@/components/home/beginner-guides-section";
import { BriefingSection } from "@/components/home/briefing-section";
import { HomeHero } from "@/components/home/home-hero";
import { MatchesSection } from "@/components/home/matches-section";
import { PlayersSection } from "@/components/home/players-section";
import { NewsletterCta } from "@/components/newsletter-cta";
import { articles, beginnerGuides } from "@/data/articles";
import { matches } from "@/data/matches";
import { players } from "@/data/players";

export default function Home() {
  const latestArticles = articles.slice(3, 8);
  const featuredPlayers = players.slice(0, 4);
  const recommendedMatches = matches.slice(0, 3);

  return (
    <main>
      <HomeHero />
      <BriefingSection />
      <MatchesSection matches={recommendedMatches} />
      <ArticlesSection articles={latestArticles} />
      <PlayersSection players={featuredPlayers} />
      <BeginnerGuidesSection guides={beginnerGuides} />
      <NewsletterCta />
    </main>
  );
}
