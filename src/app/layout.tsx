import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteName, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: siteName,
  description: "Daily tennis briefings, match recommendations, player notes, and beginner guides.",
  alternates: { canonical: "/" },
  openGraph: {
    title: siteName,
    description: "Daily tennis context for fans and beginners.",
    siteName,
    type: "website",
    images: [{ url: "/images/tennis-hero.png", alt: "Tennis Club" }]
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: "Daily tennis context for fans and beginners.",
    images: ["/images/tennis-hero.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
          <SiteHeader />
          <div>{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
