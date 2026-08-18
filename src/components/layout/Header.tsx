"use client";

import Link from "next/link";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { navigation } from "@/content/navigation";
import { ReadingProgress } from "./ReadingProgress";

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="header">
    <ReadingProgress />
    <div className="container">
      <nav className="nav" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="Yanio Concepción Jr. — Home"><span>YC</span><strong>YANIO<br/>CONCEPCIÓN JR.</strong></Link>
        <div className="desktop-nav">
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link className="btn btn-small" href="/#opportunity">Discuss an Opportunity</Link>
        </div>
        <div className="nav-tools">
          <LanguageSwitcher />
          <button className="menu-button" aria-expanded={open} aria-controls="mobile-menu" aria-label="Menu" onClick={() => setOpen(!open)}>Menu</button>
        </div>
      </nav>
      {open && <div id="mobile-menu" className="mobile-panel">
        {navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
        <Link className="btn primary" href="/#opportunity" onClick={() => setOpen(false)}>Discuss an Opportunity</Link>
      </div>}
    </div>
  </header>;
}
