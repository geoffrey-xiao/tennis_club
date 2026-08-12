import Link from "next/link";

export function NewsletterCta() {
  return (
    <section className="relative overflow-hidden bg-[#062b23] text-white">
      <div className="absolute inset-0 opacity-25">
        <div className="absolute -left-12 top-8 h-40 w-40 rounded-full border border-white/30" />
        <div className="absolute right-16 top-8 h-24 w-24 rounded-full bg-[#d7f05c]" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-white/20" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-5 px-4 py-10 sm:px-6 md:grid-cols-[1fr_1fr] md:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d7f05c]">Newsletter</p>
          <h2 className="mt-2 text-3xl font-black tracking-normal sm:text-4xl">
            Get Your Daily Tennis Briefing
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/78 sm:text-base">
            News, match picks, player updates and guides delivered every morning.
          </p>
        </div>
        <div className="flex md:justify-end">
          <Link
            href="/subscribe"
            className="accent-link-text inline-flex min-h-12 items-center justify-center rounded-md bg-[#f4f100] px-5 text-sm font-black"
          >
            Get Daily Updates ›
          </Link>
        </div>
      </div>
    </section>
  );
}
