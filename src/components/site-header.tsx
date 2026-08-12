"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News" },
  { href: "/players", label: "Players" },
  { href: "/learn", label: "Learn" },
  { href: "/glossary", label: "Glossary" }
];

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-[#e7ece4] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <span className="relative grid h-8 w-8 place-items-center rounded-full bg-[#a6df22] text-sm font-black text-[#0b3124]">
            <span className="absolute h-7 w-px rotate-12 rounded-full bg-white/80" />
            <span className="sr-only">Tennis Club</span>
          </span>
          <span className="text-xl font-black tracking-normal text-[#12251d]">
            Tennis Club
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              className={cn(
                "border-b-2 border-transparent px-1 py-2 text-sm font-bold text-[#1c2e27] transition hover:border-[#2e7c50]",
                isActive(pathname, item.href) &&
                  "border-[#2e7c50] text-[#0b3124]"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/subscribe"
          className="primary-link-text hidden min-h-10 items-center justify-center rounded-md bg-[#062b23] px-5 text-sm font-black shadow-sm md:inline-flex"
        >
          Subscribe
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border)] bg-white text-xl font-bold md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span aria-hidden="true">{isOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {isOpen ? (
        <nav id="mobile-navigation" className="border-t border-[var(--border)] bg-white px-4 py-3 md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-6xl gap-2">
            {[...navigation, { href: "/subscribe", label: "Subscribe" }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "rounded-md px-3 py-3 text-sm font-semibold text-[var(--muted-foreground)]",
                  isActive(pathname, item.href) && "primary-link-text bg-[var(--primary)]"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
