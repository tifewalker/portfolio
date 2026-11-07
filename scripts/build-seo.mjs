/*
  SEO BUILD STEP (runs automatically after `react-scripts build`)

  1. Writes sitemap.xml (public/ and build/).
  2. Writes a static HTML file for /articles and every article, each with its
     own title, description, canonical URL, social preview tags and JSON-LD.
     Link previews (WhatsApp, LinkedIn, X) and non-JS crawlers read these.
     The article text is included too, so the page is readable before
     JavaScript loads; React replaces it as soon as the app starts.

  To add an article you never need to touch this file.
*/

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const buildDir = path.join(rootDir, "build");

const { ARTICLES, formatDate } = await import("../src/data/articles/index.js");
const {
  BASE_URL,
  HOME_TITLE,
  HOME_DESCRIPTION,
  getPersonSchema,
  getWebSiteSchema,
  getArticleSchema,
} = await import("../src/utils/schema.js");

const DEFAULT_IMAGE = `${BASE_URL}/img/og-image.jpg`;

const esc = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const absolute = (src) =>
  !src ? DEFAULT_IMAGE : src.startsWith("http") ? src : `${BASE_URL}${src}`;

// Turns [label](/path) into a link, escaping everything else
const inline = (text) =>
  esc(text).replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

/* ---------------- Sitemap ---------------- */

const latest = ARTICLES[0]?.date || new Date().toISOString().slice(0, 10);

const urls = [
  { loc: `${BASE_URL}/`, lastmod: latest, priority: "1.0" },
  { loc: `${BASE_URL}/articles`, lastmod: latest, priority: "0.8" },
  ...ARTICLES.map((a) => ({
    loc: `${BASE_URL}/articles/${a.slug}`,
    lastmod: a.updatedDate || a.date,
    priority: "0.7",
  })),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(rootDir, "public", "sitemap.xml"), sitemap);
console.log(`sitemap.xml: ${urls.length} URLs`);

if (!fs.existsSync(path.join(buildDir, "index.html"))) {
  console.log("No build found. Run `npm run build` to prerender pages.");
  process.exit(0);
}

fs.writeFileSync(path.join(buildDir, "sitemap.xml"), sitemap);

/* ---------------- Prerendering ---------------- */

const template = fs.readFileSync(path.join(buildDir, "index.html"), "utf8");

function setTag(html, pattern, tag) {
  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace("</head>", `${tag}</head>`);
}

function render({ title, description, canonical, image, type, schema, body, noscript = "" }) {
  let html = template;
  const meta = (attr, key, value) => {
    const re = new RegExp(`<meta[^>]+${attr}="${key}"[^>]*>`, "i");
    html = setTag(html, re, `<meta ${attr}="${key}" content="${esc(value)}"/>`);
  };

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${esc(title)}</title>`);
  meta("name", "description", description);
  html = setTag(
    html,
    /<link[^>]+rel="canonical"[^>]*>/i,
    `<link rel="canonical" href="${canonical}"/>`
  );
  meta("property", "og:type", type);
  meta("property", "og:url", canonical);
  meta("property", "og:title", title);
  meta("property", "og:description", description);
  meta("property", "og:image", image);
  meta("name", "twitter:title", title);
  meta("name", "twitter:description", description);
  meta("name", "twitter:image", image);

  // Only one JSON-LD block per page. The id matches the one the SEO
  // component updates, so the app replaces it instead of adding a copy.
  html = setTag(
    html,
    /<script[^>]+application\/ld\+json[^>]*>[\s\S]*?<\/script>/i,
    `<script type="application/ld+json" id="seo-jsonld">${JSON.stringify(
      schema
    ).replace(/</g, "\\u003c")}</script>`
  );

  // The template's <noscript> holds homepage text. Swap in this page's own.
  html = html.replace(/<noscript>[\s\S]*?<\/noscript>/, noscript ? `<noscript>${noscript}</noscript>` : "");

  if (body) {
    html = html.replace(
      /<div id="root"><\/div>/,
      `<div id="root"><div style="max-width:720px;margin:0 auto;padding:32px 20px;font:17px/1.7 sans-serif;color:#0e1a2b">${body}</div></div>`
    );
  }

  return html;
}

function write(route, html) {
  const dir = path.join(buildDir, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
  console.log(`prerendered /${route}`);
}

// Plain-HTML version of the homepage for tools that do not run JavaScript.
// Keep it in step with the hero and portfolio sections.
function homeText() {
  const projects = [
    ["A Nigerian financial services company: unified CRM and support", "WhatsApp, social media, live chat and email unified in Zoho CRM Plus, with departmental routing, webhook integrations and cross-channel reporting."],
    ["A Nigerian microfinance bank: CRM and call centre setup", "Zoho CRM Plus with a HoduCC call centre, IVR and CRM-connected calling, so agents handle calls inside the CRM."],
    ["XPay: payment and transaction management", "Web platform and Flutter app with real-time transaction tracking, automated validation, webhooks and reporting."],
    ["KONECT Worksuite: CRM and business platform", "CRM, Help Desk, Live Chat, Campaigns, Projects, Invoicing, Workflows and Analytics, with AI customer support agents in production."],
    ["SecureLoan: loan processing and risk management", "Rule-based approvals, borrower verification, lifecycle tracking and risk dashboards replacing spreadsheet-based lending."],
  ];
  return `<div style="max-width:720px;margin:0 auto;padding:32px 20px;font:17px/1.7 sans-serif">
<h1>Hi, I'm Boluwatife Olawuyi. I build the systems that keep a business running.</h1>
<p>Application Engineer in Lagos, Nigeria. CRM platforms, API integrations, AI agents and automated workflows that remove manual work and fix real operational problems, with 5+ years across application engineering, backend development and business process automation.</p>
<p>Founder of <a href="https://konectworksuite.com/">KONECT Worksuite</a>.</p>
<h2>Selected work</h2>
${projects.map(([t, d]) => `<h3>${esc(t)}</h3><p>${esc(d)}</p>`).join("")}
<h2>Articles</h2>
<ul>${ARTICLES.map((a) => `<li><a href="/articles/${a.slug}">${esc(a.title)}</a></li>`).join("")}</ul>
<h2>Contact</h2>
<p><a href="mailto:olawuyiboluwatife2@gmail.com">olawuyiboluwatife2@gmail.com</a> · <a href="/img/BoluwatifeOlawuyi_CV.pdf">Download CV</a></p>
</div>`;
}

// Home: correct head tags only. The page itself is rendered by React.
fs.writeFileSync(
  path.join(buildDir, "index.html"),
  render({
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    canonical: `${BASE_URL}/`,
    image: DEFAULT_IMAGE,
    type: "website",
    schema: [getPersonSchema(), getWebSiteSchema()],
    noscript: homeText(),
  })
);
console.log("prerendered /");

// Articles list
const listDescription =
  "Practical notes from implementing CRM, contact centre, AI automation and business systems for real companies, by Boluwatife Olawuyi.";

write(
  "articles",
  render({
    title: "Articles | Boluwatife Olawuyi",
    description: listDescription,
    canonical: `${BASE_URL}/articles`,
    image: DEFAULT_IMAGE,
    type: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Articles by Boluwatife Olawuyi",
      url: `${BASE_URL}/articles`,
      description: listDescription,
    },
    body: `<p><a href="/">Boluwatife Olawuyi</a></p><h1>Articles</h1>${ARTICLES.map(
      (a) =>
        `<h2><a href="/articles/${a.slug}">${esc(a.title)}</a></h2><p>${esc(
          a.excerpt
        )}</p>`
    ).join("")}`,
  })
);

// Each article
const item = (i) =>
  typeof i === "string"
    ? `<li>${inline(i)}</li>`
    : `<li><strong>${esc(i.lead)}:</strong> ${inline(i.text)}</li>`;

const blockHtml = (b) => {
  switch (b.type) {
    case "p":
      return `<p>${inline(b.text)}</p>`;
    case "pull":
      return `<blockquote>${inline(b.text)}</blockquote>`;
    case "h2":
    case "h3":
      return `<${b.type}>${esc(b.text)}</${b.type}>`;
    case "ul":
    case "ol":
      return `<${b.type}>${b.items.map(item).join("")}</${b.type}>`;
    case "table":
      return `<table><tr>${b.head
        .map((c) => `<th>${esc(c)}</th>`)
        .join("")}</tr>${b.rows
        .map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`)
        .join("")}</table>`;
    default:
      return ""; // images are left to the app so they are not downloaded twice
  }
};

for (const article of ARTICLES) {
  write(
    `articles/${article.slug}`,
    render({
      title: article.seoTitle || `${article.title} | Boluwatife Olawuyi`,
      description: article.seoDescription || article.excerpt,
      canonical: `${BASE_URL}/articles/${article.slug}`,
      image: absolute(article.shareImage || article.cover?.src),
      type: "article",
      schema: getArticleSchema(article),
      body: `<p><a href="/articles">All articles</a></p><h1>${esc(
        article.title
      )}</h1><p>${esc(article.author)} · ${formatDate(article.date)} · ${
        article.readMinutes
      } min read</p>${article.blocks.map(blockHtml).join("")}`,
    })
  );
}

console.log("SEO build complete.");
