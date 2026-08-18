import type { Metadata } from "next";
import Link from "next/link";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";

export const metadata: Metadata = { title: "About", description: "About Yanio Concepción Jr., founder and ecosystem architect based in Switzerland.", alternates: { canonical: "/about" } };

export default function Page() {
  return <main id="main">
    <header className="page-hero container"><span className="kicker">About</span><h1>Vision into<br/><em>structure.</em></h1><p className="lead">Yanio Concepción Jr. is a multidisciplinary founder and ecosystem architect building ventures across technology, culture and strategic infrastructure.</p></header>
    <section className="section"><div className="container about-page-grid"><ResponsiveImage name="founder-editorial" alt="Yanio Concepción Jr. in an editorial portrait" width={5120} height={3414} /><div><span className="kicker">Perspective</span><h2 className="editorial-title">Clarity before scale.</h2><p className="large-copy">His work connects product thinking, creative direction and long-term business architecture.</p><p>Each venture is given its own identity and commercial purpose while contributing capabilities, intelligence or cultural relevance to the wider ecosystem.</p><p>Based in Switzerland with a global outlook, Yanio builds with a focus on coherence, patient execution and relationships shaped by alignment.</p><Link className="btn primary" href="/#opportunity">Discuss an Opportunity ↗</Link></div></div></section>
    <section className="section quote-section"><div className="container"><p>“Talent creates possibility.<br/><em>Structure turns it into results.</em>”</p></div></section>
  </main>;
}
