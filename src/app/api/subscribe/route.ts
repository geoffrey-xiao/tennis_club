import { NextResponse } from "next/server";
import { players } from "@/data/players";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const playerNames = new Set(players.map((player) => player.name));

type SubscriptionRequest = {
  email?: unknown;
  favoritePlayer?: unknown;
  consent?: unknown;
  website?: unknown;
};

function json(message: string, status: number) {
  return NextResponse.json(
    { message },
    { status, headers: { "Cache-Control": "no-store" } }
  );
}

export async function POST(request: Request) {
  let body: SubscriptionRequest;

  try {
    body = (await request.json()) as SubscriptionRequest;
  } catch {
    return json("Send a valid JSON request.", 400);
  }

  if (typeof body.website === "string" && body.website.trim()) {
    return json("We could not process this subscription.", 400);
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const favoritePlayer =
    typeof body.favoritePlayer === "string" ? body.favoritePlayer.trim() : "";

  if (email.length > 254 || !emailPattern.test(email)) {
    return json("Enter a valid email address.", 400);
  }
  if (body.consent !== true) {
    return json("Consent is required to subscribe.", 400);
  }
  if (favoritePlayer && !playerNames.has(favoritePlayer)) {
    return json("Choose a favorite player from the list.", 400);
  }

  // MVP endpoint: validation only. Replace this response with durable storage
  // before describing subscriptions as saved or sending live newsletters.
  return json("Thanks! Your details passed the newsletter preview form.", 201);
}
