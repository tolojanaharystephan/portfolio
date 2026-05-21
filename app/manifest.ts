import type { MetadataRoute } from "next";
import { seo, personalInfo } from "@/data/portfolio";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: seo.title,
    short_name: personalInfo.shortName,
    description: seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#0891b2",
    lang: "fr",
  };
}
