import type { MetadataRoute } from "next"; import { site } from "@/content/site"; import { ventures } from "@/content/ventures"; import { projects } from "@/content/projects";
export const dynamic = "force-static";
export default function sitemap():MetadataRoute.Sitemap{const routes=["","/ecosystem","/work","/about","/contact","/privacy",...projects.map(p=>`/work/${p.slug}`),...ventures.map(v=>`/ventures/${v.slug}`)];return routes.map(route=>({url:`${site.url}${route}`,lastModified:new Date(),changeFrequency:route===""?"monthly":"yearly",priority:route===""?1:.7}))}
