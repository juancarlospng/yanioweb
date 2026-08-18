import Link from "next/link";
import { navigation } from "@/content/navigation";
import { site } from "@/content/site";

export function Footer() {
  return <footer className="footer"><div className="container">
    <div className="footer-top">
      <div><Link className="brand footer-brand" href="/"><span>YC</span><strong>YANIO CONCEPCIÓN JR.</strong></Link><p>Founder & Ecosystem Architect</p></div>
      <div className="footer-nav">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}<Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link></div>
      <a className="footer-email" href={`mailto:${site.email}`}>{site.email} ↗</a>
    </div>
    <div className="copyright"><span>© {new Date().getFullYear()} Yanio Concepción Jr.</span><span>Switzerland · Global outlook</span></div>
  </div></footer>;
}
