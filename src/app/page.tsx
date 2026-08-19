import Link from "next/link";
import { BlueetherVisual } from "@/components/blueether/BlueetherVisual";
import { ContactForm } from "@/components/contact/ContactForm";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { Reveal, Stagger } from "@/components/ui/Reveal";
import { currentFocus, site } from "@/content/site";

export default function Home() {
  const schema = { "@context": "https://schema.org", "@type": "Person", name: site.name, url: site.url, jobTitle: "Founder & Ecosystem Architect", address: { "@type": "PostalAddress", addressCountry: "CH" } };
  return <main id="main">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

    <section className="hero-v2">
      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal><span className="eyebrow"><i />Founder & Ecosystem Architect</span></Reveal>
          <Reveal><h1>Yanio<br/><span>Concepción Jr.</span></h1></Reveal>
          <Reveal><p className="hero-thesis">Building ventures at the intersection of technology, culture and strategic infrastructure.</p></Reveal>
          <Reveal><div className="actions"><Link className="btn primary" href="#ecosystem">Explore Ecosystem <span>↘</span></Link><Link className="btn" href="#opportunity">Discuss Opportunity <span>↗</span></Link></div></Reveal>
        </div>
        <Reveal className="hero-portrait-wrap">
          <ResponsiveImage name="founder-portrait" alt="Yanio Concepción Jr. in a studio portrait" width={1066} height={1600} priority treatment="cinematic" fullBleed />
          <div className="hero-glass-note"><span>Based in Switzerland</span><span>Building globally</span></div>
        </Reveal>
      </div>
      <div className="container hero-foot"><span>Vision → Systems → Ventures</span><span>Scroll to explore</span></div>
    </section>

    <section className="section ecosystem-section" id="ecosystem">
      <div className="container">
        <Reveal><div className="section-heading"><div><span className="kicker">01 · Ecosystem</span><h2>Three ventures.<br/>Different layers.<br/><em>One direction.</em></h2></div><p>Technology creates new possibilities. Culture creates meaning. Strategic systems connect both into durable value.</p></div></Reveal>
        <Stagger className="ecosystem-grid">
          <Link className="venture-panel venture-homw" href="/ecosystem#homw">
            <div className="venture-copy"><span className="tag">Real Estate Technology</span><h3>HOMW</h3><p>Digital sales infrastructure designed to make complex developments clear, immersive and easier to decide.</p><span className="text-link">Explore venture ↗</span></div>
            <ResponsiveImage name="homw-hero" alt="HOMW interactive real estate development visualization" width={1935} height={812} treatment="product" />
          </Link>
          <Link className="venture-panel venture-lock" href="/ecosystem#lock-city">
            <ResponsiveImage name="lock-main" alt="Lock City fashion campaign" width={1080} height={1920} treatment="cinematic" />
            <div className="venture-copy"><span className="tag">Culture & Fashion</span><h3>LOCK CITY</h3><p>Identity, belonging and symbolism translated into a cultural fashion project.</p><span className="text-link">Explore venture ↗</span></div>
          </Link>
          <Link className="venture-panel venture-blueether" href="/ecosystem#blueether"><BlueetherVisual compact/><div className="venture-copy"><span className="tag">Strategic Intelligence & Systems</span><h3>BLUEETHER</h3><p>The connective layer organizing knowledge, ventures and long-term opportunity.</p><span className="text-link">Explore venture ↗</span></div></Link>
        </Stagger>
      </div>
    </section>

    <section className="section work-section" id="work">
      <div className="container">
        <Reveal><div className="section-heading compact-heading"><div><span className="kicker">02 · Selected Work</span><h2>Strategy made<br/><em>visible.</em></h2></div><p>Selected work where positioning, product thinking and creative direction become tangible systems.</p></div></Reveal>
        <article className="work-story homw-story">
          <Reveal><div className="story-intro"><span className="story-number">01</span><div><span className="tag">Product Strategy · Digital Experience</span><h3>HOMW</h3><p>Reframing how premium real estate is presented, explored and understood.</p><Link className="text-link" href="/work/homw">View case study ↗</Link></div></div></Reveal>
          <div className="homw-gallery">
            <Reveal className="gallery-main"><ResponsiveImage name="homw-overview" alt="HOMW three-dimensional development overview" width={3439} height={1439} treatment="product" fullBleed /></Reveal>
            <Reveal className="gallery-ui"><ResponsiveImage name="homw-explore" alt="HOMW property exploration interface" width={2185} height={1302} treatment="product" /></Reveal>
            <Reveal className="gallery-detail"><ResponsiveImage name="homw-unit" alt="HOMW unit selection interface" width={2184} height={1302} treatment="product" /></Reveal>
          </div>
        </article>
        <article className="work-story lock-story">
          <Reveal><div className="story-intro"><span className="story-number">02</span><div><span className="tag">Brand Architecture · Culture</span><h3>LOCK CITY</h3><p>Turning a symbol into a distinctive language of product, identity and belonging.</p><Link className="text-link" href="/work/lock-city">View case study ↗</Link></div></div></Reveal>
          <div className="lock-gallery"><Reveal><ResponsiveImage name="lock-main" alt="Lock City campaign portrait" width={1080} height={1920} treatment="cinematic" /></Reveal><Reveal><ResponsiveImage name="lock-bag" alt="Lock City lock-shaped bag" width={1024} height={1536} treatment="natural" /></Reveal><Reveal className="lock-process"><ResponsiveImage name="lock-process" alt="Lock City product and creative process" width={4032} height={3024} treatment="cinematic" fullBleed /></Reveal></div>
        </article>
      </div>
    </section>

    <section className="section advantage-section">
      <div className="container"><Reveal><span className="kicker light-text">03 · Founder Advantage</span></Reveal><div className="advantage-frame">
        <ResponsiveImage name="founder-advantage" alt="Yanio Concepción Jr. directing a studio production" width={5120} height={3258} treatment="cinematic" fullBleed />
        <div className="advantage-overlay"><h2>Where different worlds<br/><em>become one system.</em></h2><div className="advantage-list"><span>Culture <b>×</b> Technology</span><span>Strategy <b>×</b> Creative Direction</span><span>Business <b>×</b> Community</span></div><p>The advantage is not a single discipline. It is the ability to connect perspectives that rarely share the same room.</p></div>
      </div></div>
    </section>

    <section className="section focus-section">
      <div className="container"><Reveal><div className="section-heading compact-heading"><div><span className="kicker">04 · Current Focus</span><h2>Building now.</h2></div><p>Selective priorities. Clear stages. Relationships built around strategic alignment.</p></div></Reveal>
        <div className="focus-table">{currentFocus.map((item, index) => <Reveal key={item.venture}><article><span className="focus-index">0{index + 1}</span><h3>{item.venture}</h3><span className="status"><i />{item.status}</span><p>{item.field}</p><p className="focus-open">{item.opportunity}</p></article></Reveal>)}</div>
      </div>
    </section>

    <section className="section about-section" id="about">
      <div className="container about-grid"><Reveal className="about-image"><ResponsiveImage name="founder-editorial" alt="Editorial black and white portrait of Yanio Concepción Jr." width={5120} height={3414} treatment="cinematic" fullBleed /></Reveal><Reveal className="about-copy"><span className="kicker">05 · About</span><h2>Vision into<br/><em>structure.</em></h2><p className="large-copy">Yanio Concepción Jr. is a multidisciplinary founder and ecosystem architect building ventures across technology, culture and strategic infrastructure.</p><p>His work connects product thinking, creative direction and long-term business architecture—giving each venture a clear identity while strengthening the system around it.</p><Link className="text-link" href="/about">More about Yanio ↗</Link></Reveal></div>
    </section>

    <section className="section opportunity-section" id="opportunity">
      <div className="container opportunity-grid"><Reveal><span className="kicker light-text">06 · Strategic Opportunity</span><h2>Build the right<br/>opportunity.<br/><em>Together.</em></h2><p>Open to conversations with investors, developers, operators and strategic partners working on ambitious, long-term opportunities.</p></Reveal><Reveal><ContactForm /></Reveal></div>
    </section>
  </main>;
}
