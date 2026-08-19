export type Project = {
  slug: "homw" | "lock-city";
  name: string;
  category: string;
  statement: string;
  overview: string;
  challenge: string;
  response: string;
  contribution: string;
  externalUrl: string;
  externalLabel: string;
};

export const projects: Project[] = [
  { slug: "homw", name: "HOMW", category: "Product Strategy / Real Estate Technology", statement: "Making real estate easier to experience, understand and decide.", overview: "HOMW is a digital sales environment for property developments, combining spatial storytelling, project intelligence and premium presentation.", challenge: "Traditional sales material fragments the buyer journey across plans, renders and disconnected documents.", response: "A unified interactive interface gives each project, building, unit and amenity a clear place within one coherent experience.", contribution: "Concept, positioning, product strategy, business architecture and creative direction.", externalUrl: "https://woehm.com/", externalLabel: "Visit HOMW" },
  { slug: "lock-city", name: "LOCK CITY", category: "Brand Architecture / Culture & Fashion", statement: "A symbol of belonging, built into product and culture.", overview: "LOCK CITY is a cultural fashion project exploring how identity becomes tangible through symbols, objects and shared experiences.", challenge: "Create a brand world that feels authored and culturally specific without depending on conventional fashion codes.", response: "A lock becomes the central visual language: a recognizable object, a protective metaphor and a mark of membership.", contribution: "Founder vision, brand architecture, product narrative and creative direction.", externalUrl: "https://lockcityclothes.com/", externalLabel: "Visit Lock City" },
];

export function findProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
