import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ArticleShell from "./ArticleShell";
import SEO from "../../components/SEO";
import { getArticle, getRelatedArticles, formatDate } from "../../data/articles";
import { getArticleSchema, BASE_URL } from "../../utils/schema";
import { responsive } from "../../utils/images";

const toId = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

function renderFormattedText(text) {
  if (!text || typeof text !== "string") return text;
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const [, label, href] = match;
    if (href.startsWith("/")) {
      parts.push(
        <Link key={match.index} to={href} className="ar--inline-link">
          {label}
        </Link>
      );
    } else {
      parts.push(
        <a
          key={match.index}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="ar--inline-link"
        >
          {label}
        </a>
      );
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts.length ? parts : text;
}

function renderItem(item) {
  if (typeof item === "string") return renderFormattedText(item);

  const lead = item.lead
    ? item.lead.endsWith(".")
      ? item.lead
      : `${item.lead}:`
    : "";

  return (
    <span>
      {lead && <strong>{lead} </strong>}
      {renderFormattedText(item.text)}
    </span>
  );
}

// Hides itself if the image fails to load, so a broken link never shows
function Figure({ figure, eager = false }) {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <figure className="ar--figure">
      <img
        {...responsive(
          figure.src,
          eager ? "(max-width: 1120px) 100vw, 1080px" : "(max-width: 900px) 100vw, 720px"
        )}
        alt={figure.alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        referrerPolicy="no-referrer"
        onError={() => setFailed(true)}
      />
      <figcaption>
        {figure.caption}
        {figure.credit && (
          <span className="ar--figure--credit">
            {" "}
            Source:{" "}
            <a href={figure.creditUrl} target="_blank" rel="noreferrer">
              {figure.credit}
            </a>
          </span>
        )}
      </figcaption>
    </figure>
  );
}

function Block({ block }) {
  switch (block.type) {
    case "figure":
      return <Figure figure={block} />;

    case "p":
      return <p>{renderFormattedText(block.text)}</p>;

    case "h2":
      return <h2 id={toId(block.text)}>{block.text}</h2>;

    case "h3":
      return <h3>{block.text}</h3>;

    case "pull":
      return <p className="ar--pull">{renderFormattedText(block.text)}</p>;

    case "ul":
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>{renderItem(item)}</li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol>
          {block.items.map((item, i) => (
            <li key={i}>{renderItem(item)}</li>
          ))}
        </ol>
      );

    case "table":
      return (
        <div className="ar--table--wrap">
          <table className="ar--table">
            <thead>
              <tr>
                {block.head.map((cell) => (
                  <th key={cell}>{cell}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{renderFormattedText(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    default:
      return null;
  }
}

export default function ArticlePage() {
  const { slug } = useParams();
  const article = getArticle(slug);
  const [activeId, setActiveId] = useState(null);

  const headings = useMemo(
    () =>
      article
        ? article.blocks
            .filter((b) => b.type === "h2")
            .map((b) => ({ id: toId(b.text), text: b.text }))
        : [],
    [article]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Highlight the section currently being read
  useEffect(() => {
    if (!headings.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "0px 0px -70% 0px" }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (!article) {
    return (
      <ArticleShell>
        <SEO
          title="Article not found | Boluwatife Olawuyi"
          description="The requested article does not exist or has moved."
          canonical={`${BASE_URL}/articles`}
          robots="noindex, follow"
        />
        <div className="ar--wrap ar--missing">
          <h1 className="ar--headline">Not found.</h1>
          <p>That article does not exist, or it has moved.</p>
          <Link to="/articles" className="ar--btn">
            See all articles
          </Link>
        </div>
      </ArticleShell>
    );
  }

  const relatedArticles = getRelatedArticles(article.slug, 2);

  return (
    <ArticleShell>
      <SEO
        title={article.seoTitle || `${article.title} | Boluwatife Olawuyi`}
        description={article.seoDescription || article.excerpt}
        canonical={`${BASE_URL}/articles/${article.slug}`}
        ogType="article"
        ogImage={absoluteUrl(article.shareImage || article.cover?.src)}
        schema={getArticleSchema(article)}
      />

      <article className="ar--wrap">
        <Link to="/articles" className="ar--back">
          All articles
        </Link>

        <p className="ar--category">{article.category}</p>

        <h1 className="ar--title">{article.title}</h1>

        <p className="ar--byline">
          <span>{article.author}</span>
          <span>{formatDate(article.date)}</span>
          <span>{article.readMinutes} min read</span>
        </p>

        {article.cover && (
          <div className="ar--cover">
            <Figure figure={article.cover} eager />
          </div>
        )}

        <div className="ar--layout">
          <nav className="ar--toc" aria-label="In this article">
            <p className="ar--toc--title">In this article</p>

            <ol>
              {headings.map((heading) => (
                <li key={heading.id}>
                  <a
                    href={`#${heading.id}`}
                    className={activeId === heading.id ? "active" : ""}
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="ar--body">
            {article.blocks.map((block, i) => (
              <Block block={block} key={i} />
            ))}

            {relatedArticles.length > 0 && (
              <section className="ar--more" aria-labelledby="ar-more-title">
                <h3 id="ar-more-title">Keep reading</h3>
                {relatedArticles.map((rel) => (
                  <Link
                    to={`/articles/${rel.slug}`}
                    key={rel.slug}
                    className="ar--more--item"
                  >
                    <span className="ar--more--cat">{rel.category}</span>
                    <strong>{rel.title}</strong>
                  </Link>
                ))}
              </section>
            )}

            <aside className="ar--cta">
              <h3>Need a support system that actually works?</h3>
              <p>
                I design and implement CRM, contact centre and automation
                systems for businesses that are tired of scattered
                conversations.
              </p>

              <div className="ar--cta--actions">
                <a
                  href="mailto:olawuyiboluwatife2@gmail.com"
                  className="ar--btn"
                >
                  Email me
                </a>

                <Link to="/articles" className="ar--cta--link">
                  Back to all articles
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </ArticleShell>
  );
}

function absoluteUrl(src) {
  if (!src) return `${BASE_URL}/img/og-image.jpg`;
  return src.startsWith("http") ? src : `${BASE_URL}${src}`;
}
