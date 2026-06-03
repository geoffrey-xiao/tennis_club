import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { todaysBriefing } from "@/data/briefing";

export function BriefingSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mb-5 flex items-center justify-between gap-4">
        <SectionHeading eyebrow="Today" title="Today's Tennis Briefing" description={todaysBriefing.summary} />
        <Link href="/news" className="hidden text-sm font-black text-[#0b3124] sm:block">
          View all ›
        </Link>
      </div>
      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.8fr_0.8fr_0.8fr]">
        <article className="overflow-hidden rounded-lg border border-[#dfe6dc] bg-white shadow-[0_12px_30px_rgba(21,38,30,0.08)]">
          <div className="relative h-44 bg-gradient-to-br from-[#6c4f35] via-[#d4d0c4] to-[#14382c]">
            <span className="absolute left-3 top-3 rounded-full bg-[#159655] px-3 py-1 text-[10px] font-black uppercase text-white">
              Top story
            </span>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-black tracking-normal">{todaysBriefing.headline}</h2>
            <p className="mt-2 text-sm leading-6 text-[#607068]">{todaysBriefing.items[0].text}</p>
            <p className="mt-4 text-xs font-bold text-[#7b8981]">Roland Garros · 2 min read</p>
          </div>
        </article>
        <article className="rounded-lg border border-[#dfe6dc] bg-white p-5 shadow-[0_12px_30px_rgba(21,38,30,0.08)]">
          <h2 className="text-xl font-black tracking-normal">{todaysBriefing.headline}</h2>
          <div className="mt-4 grid gap-3">
            {todaysBriefing.items.map((item) => (
              <div key={item.id} className="border-b border-[#edf1eb] pb-3 last:border-0 last:pb-0">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--primary)]">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">{item.text}</p>
              </div>
            ))}
          </div>
        </article>
        <article className="rounded-lg border border-[#dfe6dc] bg-white p-5 shadow-[0_12px_30px_rgba(21,38,30,0.08)]">
          <h3 className="text-sm font-black uppercase tracking-[0.12em] text-[#0b3124]">Player updates</h3>
          <div className="mt-4 grid gap-4 text-sm">
            <p><span className="font-black">Jannik Sinner</span><br /><span className="text-[#607068]">Back to No. 1 in the latest mock rankings.</span></p>
            <p><span className="font-black">Iga Swiatek</span><br /><span className="text-[#607068]">Extends a strong clay-court rhythm.</span></p>
            <p><span className="font-black">Coco Gauff</span><br /><span className="text-[#607068]">Eyes a confident week on return games.</span></p>
          </div>
        </article>
        <article className="rounded-lg border border-[#dfe6dc] bg-white p-5 shadow-[0_12px_30px_rgba(21,38,30,0.08)]">
          <h3 className="text-sm font-black uppercase tracking-[0.12em] text-[#0b3124]">From our sources</h3>
          <div className="mt-4 grid gap-4 text-sm">
            {["ATP Tour", "WTA Tour", "Tennis TV", "The Tennis Letter"].map((source) => (
              <p key={source} className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-md bg-[#edf2ec] text-xs font-black">{source[0]}</span>
                <span><span className="font-black">{source}</span><br /><span className="text-[#607068]">Placeholder source</span></span>
              </p>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
