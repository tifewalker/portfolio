import { useEffect } from "react";
import { Link } from "react-router-dom";
import ArticleShell from "./ArticleShell";
import SEO from "../../components/SEO";
import { ARTICLES, formatDate } from "../../data/articles";
import { BASE_URL } from "../../utils/schema";

const DESCRIPTION =
  "Practical notes from implementing CRM, contact centre, AI automation and business systems for real companies, by Boluwatife Olawuyi.";

export default function ArticlesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ArticleShell>
      <SEO
        title="Articles | Boluwatife Olawuyi"
        description={DESCRIPTION}
        canonical={`${BASE_URL}/articles`}
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Articles by Boluwatife Olawuyi",
          url: `${BASE_URL}/articles`,
          description: DESCRIPTION,
        }}
      />

      <div className="ar--wrap">
        <div className="ar--intro">
          <h1 className="ar--headline">Articles</h1>

          <p className="ar--lead">
            Practical notes from implementing CRM, contact centre and
            automation systems for real businesses.
          </p>
        </div>

        <div className="ar--list">
          {ARTICLES.map((article) => (
            <Link
              key={article.slug}
              to={`/articles/${article.slug}`}
              className="ar--item"
            >
              <div className="ar--item--meta">
                <strong>{article.category}</strong>
                <span>{formatDate(article.date)}</span>
                <span>{article.readMinutes} min read</span>
              </div>

              <div>
                <h2>{article.title}</h2>
                <p>{article.excerpt}</p>
                <span className="ar--item--cta">Read the article</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </ArticleShell>
  );
}
