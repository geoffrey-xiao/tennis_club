# Codex Development Tasks

## Task 1: Initialize Project

Create a Next.js TypeScript project with:

- App Router
- Tailwind CSS
- ESLint
- Basic folder structure
- shadcn/ui-compatible setup
- Responsive layout

Acceptance criteria:

- App runs locally with `npm run dev`
- Home page renders without errors
- TypeScript has no errors

## Task 2: Build Site Layout

Create:

- Header
- Footer
- Navigation
- Mobile menu
- Main layout wrapper

Navigation items:

- Home
- News
- Players
- Learn
- Glossary
- Subscribe

Acceptance criteria:

- Layout works on desktop and mobile
- Active navigation state is visible
- Footer includes copyright and legal note

## Task 3: Create Static Content Data

Create static mock data files:

- `src/data/articles.ts`
- `src/data/players.ts`
- `src/data/matches.ts`
- `src/data/glossary.ts`

Each article should include:

- id
- slug
- title
- category
- summary
- body
- sources
- publishedAt
- author
- tags

Each player should include:

- id
- slug
- name
- country
- playingStyle
- strengths
- weaknesses
- shortBio
- recentUpdates

Each match should include:

- id
- tournament
- round
- playerA
- playerB
- startTime
- reasonToWatch
- watchScore

Acceptance criteria:

- Data is strongly typed
- Pages consume the mock data
- No hardcoded repeated content inside components

## Task 4: Build Home Page

Home page sections:

1. Hero
2. Today’s Tennis Briefing
3. Today’s Recommended Matches
4. Latest Articles
5. Featured Players
6. Beginner Guides
7. Newsletter CTA

Acceptance criteria:

- Uses reusable components
- Fully responsive
- Looks good on mobile
- Has clear CTAs

## Task 5: Build News Pages

Create:

- `/news`
- `/news/[slug]`
- Category filtering

Acceptance criteria:

- News list shows article cards
- Article detail page shows title, summary, body, tags, sources
- Source links are visible
- Copyright-safe note appears near sources

## Task 6: Build Player Pages

Create:

- `/players`
- `/players/[slug]`

Acceptance criteria:

- Player listing page shows player cards
- Player detail page shows profile, playing style, strengths, weaknesses, updates
- Related articles section exists

## Task 7: Build Learn and Glossary Pages

Create:

- `/learn`
- `/glossary`

Acceptance criteria:

- Learn page shows beginner guides
- Glossary page shows searchable terms
- Terms have clear beginner-friendly explanations

## Task 8: Build Newsletter Page

Create:

- `/subscribe`

Newsletter form fields:

- Email
- Favorite player optional
- Consent checkbox

MVP behavior:

- Validate email
- Show success message
- Use mock API route first

Acceptance criteria:

- Form validation works
- Consent is required
- No real email integration needed yet

## Task 9: Add SEO

Add:

- Metadata for all main pages
- Dynamic metadata for article pages
- Dynamic metadata for player pages
- Sitemap
- Robots.txt

Acceptance criteria:

- Each page has unique metadata
- Sitemap includes static and dynamic pages

## Task 10: Add Legal Content Policy Page

Create:

- `/legal/content-policy`

Content should explain:

- Original summaries
- Source attribution
- No copyrighted article reproduction
- No unauthorized image use
- User-generated content rules for future community features

Acceptance criteria:

- Footer links to this page
- Page content is clear and professional