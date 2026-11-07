# SEO setup

Live domain: **https://www.olawuyiboluwatife.com** (the bare domain redirects to www,
so every canonical URL, the sitemap and structured data use www).

## How it works

| Piece | Where | What it does |
|---|---|---|
| Site details | `src/utils/schema.js` | Domain, homepage title and description, LinkedIn URL, Person / WebSite / BlogPosting structured data. Change these in one place. |
| Per-page tags in the browser | `src/components/SEO.jsx` | Each page renders `<SEO />` with its own title, description, canonical URL, social preview tags and JSON-LD. |
| Per-page tags at build time | `scripts/build-seo.mjs` | Runs after `react-scripts build`. Writes `sitemap.xml` and static HTML for `/articles` and every article, so link previews (WhatsApp, LinkedIn, X) and crawlers that do not run JavaScript see the right title, description, image and article text. |
| Defaults | `public/index.html` | Homepage tags, used as the template for the build step. |
| Crawling | `public/robots.txt` | Allows everything and points to the sitemap. |
| Preview image | `public/img/og-image.jpg` | 1200 x 630, the size WhatsApp, LinkedIn and X expect. |

## Publishing an article

1. Add a file in `src/data/articles/` (copy the existing one).
2. Import it in `src/data/articles/index.js` and add it to `ALL`.
3. Deploy. The articles page, sitemap, prerendered page and structured data update by themselves.

Keep `excerpt` under about 160 characters where you can; it becomes the Google snippet.

## Still to do (needs your accounts)

1. **Google Search Console**: add `https://www.olawuyiboluwatife.com`, verify it
   (paste the meta tag where `public/index.html` says so, or use DNS), then submit
   `https://www.olawuyiboluwatife.com/sitemap.xml`.
2. **Bing Webmaster Tools**: import the site from Search Console.
3. Check how link previews look after deploying:
   https://www.linkedin.com/post-inspector/ and https://developers.facebook.com/tools/debug/
4. Validate structured data: https://search.google.com/test/rich-results
