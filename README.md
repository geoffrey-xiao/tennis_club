# Tennis Club Website

A tennis-focused content and community website for casual tennis fans.

The MVP focuses on:
- Daily Tennis Briefing
- Today’s recommended matches
- Tennis news categories
- Player profile pages
- Beginner tennis learning content
- Newsletter subscription

This product should not be a pure tennis news crawler. It should provide original summaries, curated match recommendations, beginner-friendly explanations, and eventually local tennis community features.

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- MDX or Markdown for content
- Supabase or PostgreSQL later
- Vercel deployment

## MVP Goal

Launch a lightweight content website that validates whether users want to read daily tennis updates and subscribe to a tennis newsletter.

## Important Legal Guideline

Do not copy full articles, copyrighted images, or paid data. Content should be original summaries with source links. Use public data carefully and prefer official sources or licensed APIs.

## Local Development

```bash
npm install
npm run dev
```

Run the production checks with `npm run lint`, `npm run typecheck`, and
`npm run build`.

Set `NEXT_PUBLIC_SITE_URL` to the deployed origin (for example,
`https://tennis.example.com`) so canonical links, Open Graph metadata,
`robots.txt`, and `sitemap.xml` use the production domain.

The newsletter endpoint is intentionally validation-only in this MVP. It does
not persist addresses or send email yet.
