import Link from "next/link";

export function HomeHero() {
  return (
    <section className="overflow-hidden bg-[#062b23] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[0.92fr_1.08fr] md:items-center lg:py-20">
        <div className="relative z-10">
          <h1 className="max-w-2xl text-5xl font-black leading-[1.05] tracking-normal sm:text-6xl xl:text-7xl">
            Your Daily <span className="text-[#f4f100]">Tennis</span> Briefing
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/82 sm:text-lg">
            Daily tennis news, match picks, player updates, and beginner-friendly guides delivered fast so you are always in the know.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/news"
              className="accent-link-text inline-flex min-h-12 items-center justify-center rounded-lg bg-[#f4f100] px-6 text-sm font-black shadow-[0_12px_28px_rgba(244,241,0,0.25)]"
            >
              Read Today&apos;s Briefing
            </Link>
            <Link
              href="/subscribe"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-[#f4f100] px-6 text-sm font-black text-white"
            >
              Subscribe
            </Link>
          </div>
        </div>

        <div className="relative min-h-80 md:min-h-[420px] lg:min-h-[440px]">
          <div className="absolute inset-0 -skew-x-12 rounded-lg bg-[#123c31] opacity-80" />
          <div className="absolute inset-y-0 right-0 w-[78%] rounded-lg bg-gradient-to-br from-[#d7ddd4] via-[#627168] to-[#10261f]" />
          <div className="absolute inset-8 rounded-lg border-2 border-white/15" />
          <div className="absolute right-4 top-12 text-right text-6xl font-black italic leading-[0.9] text-white/10 sm:text-7xl">
            GAME
            <br />
            SET
            <br />
            MATCH
          </div>
          <div className="absolute bottom-0 left-[18%] h-64 w-52 rounded-t-full bg-gradient-to-b from-[#f1f3ef] to-[#0e392c] shadow-2xl sm:h-80 sm:w-64">
            <div className="absolute left-1/2 top-10 h-20 w-20 -translate-x-1/2 rounded-full bg-[#c99b72]" />
            <div className="absolute left-8 right-8 top-32 h-24 rounded-t-[40px] bg-[repeating-linear-gradient(135deg,#e9efe6_0_8px,#6c8f73_8px_14px)]" />
            <div className="absolute right-[-70px] top-20 h-28 w-28 rounded-full border-[10px] border-[#d5de62]" />
            <div className="absolute right-[-14px] top-40 h-28 w-3 rotate-[-28deg] rounded-full bg-[#d5de62]" />
          </div>
        </div>
      </div>
    </section>
  );
}
