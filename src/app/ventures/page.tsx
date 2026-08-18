import type { Metadata } from "next";
import Link from "next/link";
import { ventures } from "@/content/ventures";

export const metadata: Metadata = { title: "Ventures", description: "The Yanio Concepción Jr. venture ecosystem.", alternates: { canonical: "/ecosystem" } };
export default function Page() { return <main id="main"><header className="page-hero container"><span className="kicker">Venture Architecture</span><h1>Three ventures.<br/><em>One direction.</em></h1><p className="lead">Explore the connected layers of the ecosystem.</p></header><section className="section"><div className="container venture-link-list">{ventures.map((venture, index) => <Link key={venture.slug} href={`/ecosystem#${venture.slug}`}><span>0{index + 1}</span><h2>{venture.name}</h2><p>{venture.category}</p><b>↗</b></Link>)}</div></section></main>; }
