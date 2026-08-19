import type { Metadata } from "next";
import Link from "next/link";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { projects } from "@/content/projects";

export const metadata: Metadata = { title: "Selected Work", description: "Selected product strategy, brand architecture and creative direction by Yanio Concepción Jr.", alternates: { canonical: "/work" } };

export default function Page() {
  return <main id="main">
    <header className="page-hero container"><span className="kicker">Selected Work</span><h1>Strategy made<br/><em>visible.</em></h1><p className="lead">Two selected projects showing how positioning, product thinking and creative direction become tangible systems.</p></header>
    <section className="work-index section"><div className="container">
      <Link className="work-index-card" href="/work/homw"><div><span className="tag">01 · {projects[0].category}</span><h2>HOMW</h2><p>{projects[0].statement}</p><span className="text-link">View case study ↗</span></div><ResponsiveImage name="homw-overview" alt="HOMW real estate development experience" width={3439} height={1439} treatment="product" fullBleed /></Link>
      <Link className="work-index-card is-dark" href="/work/lock-city"><div><span className="tag">02 · {projects[1].category}</span><h2>LOCK CITY</h2><p>{projects[1].statement}</p><span className="text-link">View case study ↗</span></div><ResponsiveImage name="lock-process" alt="Lock City product and creative process" width={4032} height={3024} treatment="cinematic" fullBleed /></Link>
    </div></section>
  </main>;
}
