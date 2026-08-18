import type { ReactNode } from "react";

// CSS view timelines provide progressive, scroll-linked entrances without
// depending on browser scripting APIs. Unsupported browsers keep content visible.
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string; delay?: number }) {
  return <div className={`reveal-safe ${className}`}>{children}</div>;
}

export function Stagger({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`stagger-safe ${className}`}>{children}</div>;
}
