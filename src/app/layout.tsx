import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Archivo, Archivo_Black, IBM_Plex_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LanguageRuntime } from "@/components/i18n/LanguageRuntime";
import { site } from "@/content/site";
import "./globals.css";

const body = Archivo({ variable: "--font-body", subsets: ["latin"] });
const display = Archivo_Black({ variable: "--font-display", subsets: ["latin"], weight: "400" });
const mono = IBM_Plex_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = { metadataBase: new URL(site.url), title: { default: site.title, template: `%s — ${site.name}` }, description: site.description, alternates: { canonical: "/" }, openGraph: { type: "website", locale: "en_US", siteName: site.name, title: site.title, description: site.description }, twitter: { card: "summary_large_image", title: site.title, description: site.description } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${body.variable} ${display.variable} ${mono.variable}`}><LanguageRuntime/><a className="skip-link" href="#main">Skip to content</a><Header />{children}<Footer />{process.env.NEXT_PUBLIC_ENABLE_ANALYTICS !== "false" && <><Analytics /><SpeedInsights /></>}</body></html>;
}
