import { personalInfo, seo } from "@/data/portfolio";

export function JsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? seo.url;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    alternateName: personalInfo.shortName,
    jobTitle: personalInfo.title,
    email: personalInfo.email,
    url: siteUrl,
    sameAs: [personalInfo.github],
    address: {
      "@type": "PostalAddress",
      addressCountry: "MG",
    },
    knowsAbout: [
      "Fullstack Development",
      "Data Engineering",
      "React",
      "Next.js",
      "Python",
      "Artificial Intelligence",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seo.title,
    description: seo.description,
    url: siteUrl,
    inLanguage: "fr-FR",
    author: {
      "@type": "Person",
      name: personalInfo.shortName,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
