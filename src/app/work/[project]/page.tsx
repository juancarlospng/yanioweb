import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { findProject, projects } from "@/content/projects";

export function generateStaticParams() { return projects.map((project) => ({ project: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ project: string }> }): Promise<Metadata> { const { project: slug } = await params; const project = findProject(slug); return project ? { title: `${project.name} — Selected Work`, description: project.overview, alternates: { canonical: `/work/${project.slug}` } } : {}; }

export default async function Page({ params }: { params: Promise<{ project: string }> }) {
  const { project: slug } = await params;
  const project = findProject(slug);
  if (!project) notFound();
  const homw = project.slug === "homw";
  return <main id="main" className={`case-page case-${project.slug}`}>
    <header className="case-hero container"><Link className="back-link" href="/work">← Selected Work</Link><span className="kicker">{project.category}</span><h1>{project.name}</h1><p>{project.statement}</p></header>
    <section className="case-cover">{homw ? <ResponsiveImage name="homw-overview" alt="HOMW real estate development overview" width={3439} height={1439} priority treatment="product" fullBleed /> : <div className="case-lock-cover"><ResponsiveImage name="lock-main" alt="Lock City campaign portrait" width={1080} height={1920} priority treatment="cinematic" fullBleed /><ResponsiveImage name="lock-bag" alt="Lock City lock-shaped bag" width={1024} height={1536} treatment="natural" /></div>}</section>
    <section className="section"><div className="container case-text"><div><span className="tag">Overview</span><p className="large-copy">{project.overview}</p></div><div className="case-facts"><div><span className="tag">Challenge</span><p>{project.challenge}</p></div><div><span className="tag">Response</span><p>{project.response}</p></div><div><span className="tag">Yanio’s contribution</span><p>{project.contribution}</p></div></div></div></section>
    <section className="case-gallery container">{homw ? <><ResponsiveImage name="homw-explore" alt="HOMW exploration interface" width={2185} height={1302} treatment="product" /><ResponsiveImage name="homw-unit" alt="HOMW unit selection interface" width={2184} height={1302} treatment="product" /></> : <><ResponsiveImage name="lock-process" alt="Lock City product and creative process" width={4032} height={3024} treatment="cinematic" fullBleed /><ResponsiveImage name="lock-main" alt="Lock City campaign" width={1080} height={1920} treatment="cinematic" /></>}</section>
    <section className="case-cta"><div className="container"><span className="kicker light-text">External project</span><h2>Explore the work<br/>in context.</h2><a className="btn light" href={project.externalUrl} target="_blank" rel="noreferrer">{project.externalLabel} ↗</a></div></section>
  </main>;
}
