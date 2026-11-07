/*
  ARTICLE REGISTRY
  To publish a new article:
    1. Add a new file in this folder (copy an existing article file).
    2. Import it below.
    3. Add it to the ALL list.
  The list page, the article page, reading time, sorting, and sitemap generation
  update automatically.
*/

import omnichannelCustomerSupportSystem from "./omnichannel-customer-support-system.js";
import fromBusinessRequirementsToProduction from "./from-business-requirements-to-production.js";

const ALL = [
  omnichannelCustomerSupportSystem,
  fromBusinessRequirementsToProduction,
  // add the next article here
];

function wordsIn(value) {
  return String(value).trim().split(/\s+/).filter(Boolean).length;
}

function countWords(blocks) {
  let total = 0;

  blocks.forEach((block) => {
    if (block.text) total += wordsIn(block.text);

    if (block.items) {
      block.items.forEach((item) => {
        total +=
          typeof item === "string"
            ? wordsIn(item)
            : wordsIn((item.lead || "") + " " + (item.text || ""));
      });
    }

    if (block.head) block.head.forEach((cell) => (total += wordsIn(cell)));
    if (block.rows)
      block.rows.forEach((row) => row.forEach((cell) => (total += wordsIn(cell))));
  });

  return total;
}

// Newest first
export const ARTICLES = ALL.map((article) => ({
  ...article,
  readMinutes: Math.max(1, Math.round(countWords(article.blocks) / 220)),
})).sort((a, b) => b.date.localeCompare(a.date));

export const getArticle = (slug) => ARTICLES.find((a) => a.slug === slug);

export const getRelatedArticles = (currentSlug, limit = 2) =>
  ARTICLES.filter((a) => a.slug !== currentSlug).slice(0, limit);

export const formatDate = (isoDate) =>
  new Date(isoDate + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
