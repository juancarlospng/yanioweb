import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Discuss a Strategic Opportunity", description: "Contact Yanio Concepción Jr. about a strategic opportunity.", alternates: { canonical: "/contact" } };

export default function Page() {
  return <main id="main"><section className="opportunity-section contact-page"><div className="container opportunity-grid"><div><span className="kicker light-text">Strategic Contact</span><h1>Start the right<br/><em>conversation.</em></h1><p>For investors, developers, operators and strategic partners working on ambitious, long-term opportunities.</p><a className="direct-mail" href={`mailto:${site.email}`}>{site.email} ↗</a></div><ContactForm /></div></section></main>;
}
