export const site = {
  name: "Yanio Concepción Jr.",
  title: "Yanio Concepción Jr. — Founder & Ecosystem Architect",
  description: "Building ventures at the intersection of technology, culture and strategic infrastructure.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.yanioconcepcionjr.com",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "yanconcep@gmail.com",
  location: "Based in Switzerland. Building globally.",
} as const;

export const currentFocus = [
  { venture: "HOMW", status: "Scaling", field: "Real Estate Technology", opportunity: "Open to developers and strategic partners." },
  { venture: "BLUEETHER", status: "Building", field: "Strategic Intelligence & Systems", opportunity: "Open to selected strategic relationships." },
  { venture: "LOCK CITY", status: "Developing", field: "Culture & Fashion", opportunity: "Open to selected collaborations." },
] as const;
