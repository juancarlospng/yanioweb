import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Archivo, Instrument_Serif } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LanguageRuntime } from "@/components/i18n/LanguageRuntime";
import { site } from "@/content/site";
import "./globals.css";
import "./cinematic.css";
import "./typography.css";

const primary = Archivo({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const editorial = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = { metadataBase: new URL(site.url), title: { default: site.title, template: `%s — ${site.name}` }, description: site.description, alternates: { canonical: "/" }, openGraph: { type: "website", locale: "en_US", siteName: site.name, title: site.title, description: site.description }, twitter: { card: "summary_large_image", title: site.title, description: site.description } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${primary.variable} ${editorial.variable}`}><LanguageRuntime/><a className="skip-link" href="#main">Skip to content</a><Header />{children}<Footer />{process.env.NEXT_PUBLIC_ENABLE_ANALYTICS !== "false" && <><Analytics /><SpeedInsights /></>}</body></html>;
}
