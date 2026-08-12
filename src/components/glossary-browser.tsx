"use client";

import { useMemo, useState } from "react";
import type { GlossaryTerm } from "@/data/glossary";

export function GlossaryBrowser({ terms }: { terms: GlossaryTerm[] }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return terms;
    return terms.filter((item) =>
      `${item.term} ${item.definition} ${item.beginnerTip}`.toLowerCase().includes(normalized)
    );
  }, [query, terms]);

  return (
    <div>
      <label htmlFor="glossary-search" className="text-sm font-black">Search tennis terms</label>
      <input
        id="glossary-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Try “break point” or “baseline”"
        className="mt-2 min-h-12 w-full rounded-lg border border-[#bdcbbc] bg-white px-4 outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[#1f6f43]/20"
      />
      <p className="mt-3 text-sm text-[#607068]" aria-live="polite">{results.length} {results.length === 1 ? "term" : "terms"}</p>
      {results.length ? (
        <dl className="mt-6 grid gap-4 md:grid-cols-2">
          {results.map((item) => (
            <div key={item.id} id={item.slug} className="rounded-lg border border-[#dfe6dc] bg-white p-6 shadow-[0_10px_24px_rgba(21,38,30,0.06)]">
              <dt className="text-xl font-black">{item.term}</dt>
              <dd className="mt-3 leading-7 text-[#52645c]">{item.definition}</dd>
              <dd className="mt-4 rounded-md bg-[#eef5e9] p-3 text-sm leading-6 text-[#31542b]"><strong>Beginner tip:</strong> {item.beginnerTip}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <div className="mt-6 rounded-lg border border-dashed border-[#bdcbbc] bg-white px-6 py-12 text-center">
          <p className="font-black">No matching terms</p>
          <p className="mt-2 text-sm text-[#607068]">Try a broader tennis word.</p>
        </div>
      )}
    </div>
  );
}
