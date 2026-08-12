"use client";

import { FormEvent, useState } from "react";
import type { Player } from "@/data/players";

export function SubscriptionForm({ players }: { players: Player[] }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.get("email"),
          favoritePlayer: data.get("favoritePlayer") || undefined,
          consent: data.get("consent") === "on",
          website: data.get("website")
        })
      });
      const result = (await response.json()) as { message: string };
      setMessage(result.message);
      setStatus(response.ok ? "success" : "error");
      if (response.ok) form.reset();
    } catch {
      setMessage("We could not save your subscription. Please try again.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-xl border border-[#dfe6dc] bg-white p-6 shadow-[0_14px_36px_rgba(21,38,30,0.08)] sm:p-8">
      <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-black">Email address</label>
        <input id="email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" className="mt-2 min-h-12 w-full rounded-md border border-[#bdcbbc] px-4 outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[#1f6f43]/20" />
      </div>
      <div>
        <label htmlFor="favorite-player" className="text-sm font-black">Favorite player <span className="font-normal text-[#607068]">(optional)</span></label>
        <select id="favorite-player" name="favoritePlayer" defaultValue="" className="mt-2 min-h-12 w-full rounded-md border border-[#bdcbbc] bg-white px-4">
          <option value="">No preference</option>
          {players.map((player) => <option key={player.id} value={player.name}>{player.name}</option>)}
        </select>
      </div>
      <label className="flex items-start gap-3 text-sm leading-6 text-[#52645c]">
        <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 accent-[var(--primary)]" />
        <span>I agree to receive the Tennis Club newsletter and can unsubscribe at any time.</span>
      </label>
      <button type="submit" disabled={status === "loading"} className="primary-link-text min-h-12 rounded-md bg-[#0b3124] px-5 text-sm font-black disabled:opacity-60">
        {status === "loading" ? "Subscribing…" : "Subscribe to the briefing"}
      </button>
      {message ? <p role={status === "error" ? "alert" : "status"} className={`rounded-md p-3 text-sm font-bold ${status === "success" ? "bg-[#e1f4d8] text-[#285027]" : "bg-[#fee7e2] text-[#7d2d21]"}`}>{message}</p> : null}
    </form>
  );
}
