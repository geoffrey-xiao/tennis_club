import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#243831] bg-[#101a17] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 md:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <p className="text-2xl font-black">Tennis Club</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-white/75">
            Original tennis summaries, curated match notes, player context, and beginner-friendly learning.
          </p>
          <p className="mt-6 text-xs text-white/45">Copyright 2026 Tennis Club. All rights reserved.</p>
        </div>
        <div className="grid gap-2 text-sm text-white/70">
          <p className="font-black text-white">Explore</p>
          <Link href="/">Home</Link>
          <Link href="/news">News</Link>
          <Link href="/players">Players</Link>
          <Link href="/learn">Learn</Link>
        </div>
        <div className="grid gap-2 text-sm text-white/70">
          <p className="font-black text-white">Resources</p>
          <Link href="/glossary">Glossary</Link>
          <Link href="/subscribe">Subscribe</Link>
          <Link href="/about">About</Link>
        </div>
        <div className="text-sm text-white/70">
          <p className="font-black text-white">Legal</p>
          <p className="mt-2 leading-6">Original commentary only. No unauthorized article, image, or video reproduction.</p>
          <Link href="/legal/content-policy" className="mt-3 inline-block font-bold text-[#e7ff26]">
            Content policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
