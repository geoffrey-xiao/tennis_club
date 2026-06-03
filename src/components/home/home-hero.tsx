import Link from "next/link";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#062b23] text-white">
      <div
        className="absolute inset-0 bg-cover bg-[68%_center] opacity-80 md:hidden"
        style={{ backgroundImage: "url('/images/tennis-hero.png')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 right-0 hidden w-full bg-right bg-no-repeat opacity-80 md:block"
        style={{
          backgroundImage: "url('/images/tennis-hero.png')",
          backgroundSize: "auto 100%"
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#062b23] via-[#062b23]/82 to-[#062b23]/8" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#062b23]/24 via-transparent to-transparent" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 md:min-h-[500px] md:grid-cols-[0.86fr_1.14fr] md:items-center md:py-0 lg:px-10">
        <div className="relative z-10 max-w-[620px] md:-mt-4">
          <h1 className="max-w-2xl text-5xl font-black leading-[1.04] tracking-normal sm:text-6xl xl:text-7xl">
            Your Daily <span className="text-[#f4f100]">Tennis</span> Briefing
          </h1>
          <p className="mt-6 max-w-[520px] text-base leading-7 text-white/82 sm:text-lg">
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

        <div className="relative hidden min-h-80 md:block md:min-h-[420px] lg:min-h-[440px]">
          <div className="absolute bottom-8 right-4 text-right text-6xl font-black italic leading-[0.9] text-white/12 sm:text-7xl lg:bottom-10">
            GAME
            <br />
            SET
            <br />
            MATCH
          </div>
        </div>
      </div>
    </section>
  );
}
