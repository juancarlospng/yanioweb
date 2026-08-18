export type Venture = {
  slug: "homw" | "lock-city" | "blueether";
  name: string;
  category: string;
  tagline: string;
  description: string;
  role: string;
  strategicFunction: string;
  status: string;
  opportunity: string;
  externalUrl?: string;
};

export const ventures: Venture[] = [
  { slug: "homw", name: "HOMW", category: "Real Estate Technology", tagline: "Digital sales infrastructure for real estate.", description: "An interactive platform that turns complex developments into clear, immersive buying experiences.", role: "Concept, product strategy, business architecture and creative direction.", strategicFunction: "Technology & commercial infrastructure", status: "Scaling", opportunity: "Open to developers and strategic partners.", externalUrl: "https://woehm.com/" },
  { slug: "lock-city", name: "LOCK CITY", category: "Culture & Fashion", tagline: "Identity made tangible.", description: "A cultural fashion project translating belonging, symbolism and community into objects and experiences.", role: "Founder, brand architecture and creative direction.", strategicFunction: "Culture, identity & community", status: "Developing", opportunity: "Open to selected collaborations.", externalUrl: "https://lockcityclothes.com/" },
  { slug: "blueether", name: "BLUEETHER", category: "Strategic Intelligence & Systems", tagline: "Organizing complexity. Protecting the vision.", description: "The strategic intelligence and systems layer connecting ventures, knowledge and long-term opportunity.", role: "Founder and ecosystem architecture.", strategicFunction: "Intelligence, governance & systems", status: "Building", opportunity: "Open to selected strategic relationships." },
];

export const featuredVentures = ventures;
