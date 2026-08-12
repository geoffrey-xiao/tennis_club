import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = (await request.json()) as { email?: unknown; favoritePlayer?: unknown; consent?: unknown };
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

  if (!emailPattern.test(email)) return NextResponse.json({ message: "Enter a valid email address." }, { status: 400 });
  if (body.consent !== true) return NextResponse.json({ message: "Consent is required to subscribe." }, { status: 400 });

  return NextResponse.json({ message: "You’re subscribed! Watch your inbox for the next briefing.", subscription: { email, favoritePlayer: typeof body.favoritePlayer === "string" ? body.favoritePlayer : null } }, { status: 201 });
}
