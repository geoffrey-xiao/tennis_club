import type { Metadata } from "next";

export const metadata: Metadata = { title: "Content Policy | Tennis Club", description: "How Tennis Club handles original reporting, attribution, media, data, and future user submissions.", alternates: { canonical: "/legal/content-policy" } };

const sections = [
  ["News and commentary", "We publish original summaries and commentary, and may reference public facts such as scores and schedules. We do not copy full articles, translate another publisher’s reporting wholesale, scrape paywalled content, or present another outlet’s work as our own."],
  ["Sources", "Relevant official or reputable sources are linked near each article. A source link provides attribution and additional context; it does not imply sponsorship or endorsement."],
  ["Images and video", "We use self-created, licensed, royalty-free, or public-domain visuals. We do not scrape tournament photography or reupload match footage. Official video may be embedded only when the platform permits it."],
  ["Data", "Public facts and properly attributed official data may be used. Paid databases and restricted statistical feeds are not republished without permission."],
  ["Future community content", "Users will be required to own what they upload and avoid copyrighted match footage. Tennis Club may remove content that infringes rights or violates community rules."],
  ["Questions and corrections", "Rights holders and readers may contact the site team to request a correction or raise a content concern. Credible notices will be reviewed promptly."]
] as const;

export default function ContentPolicyPage() {
  return <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16"><p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--primary)]">Legal</p><h1 className="mt-3 text-4xl font-black sm:text-5xl">Content policy</h1><p className="mt-5 text-lg leading-8 text-[#52645c]">Tennis Club is committed to useful, original, and copyright-safe tennis coverage.</p><div className="mt-10 grid gap-5">{sections.map(([title, body]) => <section key={title} className="rounded-lg border border-[#dfe6dc] bg-white p-6"><h2 className="text-xl font-black">{title}</h2><p className="mt-3 leading-7 text-[#52645c]">{body}</p></section>)}</div></main>;
}
