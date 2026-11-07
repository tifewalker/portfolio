/*
  SITE-WIDE SEO DETAILS AND STRUCTURED DATA (JSON-LD)
  Used by the pages (through the SEO component) and by scripts/build-seo.mjs.

  The live site is served on www. The bare domain redirects there, so every
  canonical URL must use www or Google is pointed at a redirect.
*/

export const BASE_URL = "https://www.olawuyiboluwatife.com";

export const HOME_TITLE =
  "Boluwatife Olawuyi | Application Engineer, CRM & AI Automation";

export const HOME_DESCRIPTION =
  "Application Engineer in Lagos. I implement Zoho CRM Plus, contact centre systems and AI automation, and build business applications that keep companies running.";

export const LINKEDIN_URL =
  "https://www.linkedin.com/in/olawuyi-boluwatife-3088632b8/";

export const getPersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/#person`,
  name: "Boluwatife Olawuyi",
  jobTitle: "Application Engineer",
  url: `${BASE_URL}/`,
  image: `${BASE_URL}/img/hero_img.jpeg`,
  email: "mailto:olawuyiboluwatife2@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  sameAs: [
    LINKEDIN_URL,
    "https://github.com/tifewalker",
    "https://x.com/tife_d_walker",
  ],
  knowsAbout: [
    "Application Engineering",
    "CRM Implementation",
    "Zoho CRM Plus",
    "Contact Centre Systems",
    "HoduCC",
    "AI Automation",
    "API Integrations",
    "Business Process Automation",
    "React",
    "Node.js",
    "MongoDB",
  ],
});

export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: `${BASE_URL}/`,
  name: "Boluwatife Olawuyi",
  publisher: { "@id": `${BASE_URL}/#person` },
});

export const getArticleSchema = (article) => {
  const image = article.cover?.src
    ? article.cover.src.startsWith("http")
      ? article.cover.src
      : `${BASE_URL}${article.cover.src}`
    : `${BASE_URL}/img/og-image.jpg`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: `${BASE_URL}/articles/${article.slug}`,
    headline: article.title,
    description: article.excerpt,
    image: [image],
    datePublished: article.date,
    dateModified: article.updatedDate || article.date,
    author: {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: article.author || "Boluwatife Olawuyi",
      url: `${BASE_URL}/`,
    },
    publisher: { "@id": `${BASE_URL}/#person` },
    articleSection: article.category,
    inLanguage: "en-GB",
  };
};
