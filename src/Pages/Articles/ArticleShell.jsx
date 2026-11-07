import { Link } from "react-router-dom";

export default function ArticleShell({ children }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=IBM+Plex+Sans:wght@400;500;600&display=swap');

        #articleShell {
          --ink: #0e1a2b;
          --muted: #566074;
          --paper: #f3f5f8;
          --line: #d5dbe5;
          --coral: #ff5a47;
          --navy: #16294a;
          background: var(--paper);
          color: var(--ink);
          font-family: 'IBM Plex Sans', sans-serif;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        #articleShell *,
        #articleShell *::before,
        #articleShell *::after { box-sizing: border-box; }

        #articleShell main { flex: 1; }

        #articleShell a:focus-visible,
        #articleShell button:focus-visible {
          outline: 3px solid var(--coral);
          outline-offset: 3px;
        }

        /* Header */
        #articleShell .ar--header--inner {
          max-width: 1240px;
          margin: 0 auto;
          padding: 28px 48px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        #articleShell .ar--logo {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: 20px;
          letter-spacing: -0.03em;
          color: var(--ink);
          text-decoration: none;
        }

        #articleShell .ar--nav { display: flex; gap: 36px; }

        #articleShell .ar--nav a {
          font-size: 14px;
          font-weight: 500;
          color: var(--ink);
          text-decoration: none;
          padding-bottom: 3px;
          border-bottom: 2px solid transparent;
          transition: border-color 0.2s ease;
        }

        #articleShell .ar--nav a:hover,
        #articleShell .ar--nav a[aria-current="page"] {
          border-bottom-color: var(--coral);
        }

        /* Shared layout */
        #articleShell .ar--wrap {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 48px;
        }

        /* Article list page */
        #articleShell .ar--intro {
          padding: 80px 0 64px;
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
          gap: 64px;
          align-items: end;
        }

        #articleShell .ar--headline {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: clamp(42px, 7vw, 96px);
          line-height: 0.95;
          font-weight: 800;
          letter-spacing: -0.05em;
          margin: 0;
        }

        #articleShell .ar--lead {
          font-size: 17px;
          line-height: 1.7;
          color: var(--muted);
          margin: 0;
          max-width: 420px;
        }

        #articleShell .ar--list {
          border-top: 2px solid var(--ink);
          margin-bottom: 96px;
        }

        #articleShell .ar--item {
          display: grid;
          grid-template-columns: 220px minmax(0, 1fr);
          gap: 48px;
          padding: 40px 0;
          border-bottom: 1px solid var(--line);
          color: inherit;
          text-decoration: none;
        }

        #articleShell .ar--item--meta {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 15px;
          color: var(--muted);
        }

        #articleShell .ar--item--meta strong {
          color: var(--coral);
          font-weight: 600;
        }

        #articleShell .ar--item h2 {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: clamp(26px, 3.2vw, 44px);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.08;
          margin: 0 0 16px;
          max-width: 820px;
          transition: transform 0.25s ease;
        }

        #articleShell .ar--item:hover h2 { transform: translateX(8px); }

        #articleShell .ar--item p {
          font-size: 17px;
          line-height: 1.7;
          color: var(--muted);
          margin: 0 0 20px;
          max-width: 680px;
        }

        #articleShell .ar--item--cta {
          font-size: 15px;
          font-weight: 600;
          border-bottom: 2px solid var(--coral);
          padding-bottom: 3px;
        }

        /* Article page */
        #articleShell .ar--back {
          display: inline-block;
          margin-top: 56px;
          font-size: 15px;
          font-weight: 600;
          color: var(--ink);
          text-decoration: none;
          border-bottom: 2px solid var(--coral);
          padding-bottom: 3px;
        }

        #articleShell .ar--category {
          font-size: 15px;
          font-weight: 600;
          color: var(--coral);
          margin: 44px 0 16px;
        }

        #articleShell .ar--title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: clamp(34px, 5.4vw, 72px);
          line-height: 1;
          font-weight: 800;
          letter-spacing: -0.045em;
          max-width: 980px;
          margin: 0 0 32px;
        }

        #articleShell .ar--byline {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 28px;
          font-size: 15px;
          color: var(--muted);
          padding-bottom: 40px;
          margin: 0;
        }

        #articleShell .ar--layout {
          display: grid;
          grid-template-columns: 240px minmax(0, 720px);
          justify-content: center;
          gap: 72px;
          padding: 48px 0 88px;
          border-top: 2px solid var(--ink);
        }

        #articleShell .ar--toc {
          position: sticky;
          top: 32px;
          align-self: start;
          max-height: calc(100vh - 64px);
          overflow-y: auto;
        }

        #articleShell .ar--toc--title {
          font-size: 14px;
          font-weight: 600;
          color: var(--muted);
          margin: 0 0 14px;
        }

        #articleShell .ar--toc ol {
          list-style: none;
          margin: 0;
          padding: 0;
          border-left: 1px solid var(--line);
        }

        #articleShell .ar--toc a {
          display: block;
          padding: 8px 0 8px 16px;
          margin-left: -1px;
          border-left: 3px solid transparent;
          font-size: 15px;
          line-height: 1.4;
          color: var(--muted);
          text-decoration: none;
          transition: color 0.2s ease, border-color 0.2s ease;
        }

        #articleShell .ar--toc a:hover { color: var(--ink); }

        #articleShell .ar--toc a.active {
          color: var(--ink);
          font-weight: 600;
          border-left-color: var(--coral);
        }

        /* Article body */
        #articleShell .ar--body p {
          font-size: 18px;
          line-height: 1.8;
          color: #2b3648;
          margin: 0 0 22px;
        }

        #articleShell .ar--body h2 {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: clamp(28px, 3.4vw, 40px);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.1;
          margin: 72px 0 24px;
          scroll-margin-top: 28px;
        }

        #articleShell .ar--body > h2:first-child { margin-top: 0; }

        #articleShell .ar--body h3 {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 24px;
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.2;
          margin: 44px 0 16px;
        }

        #articleShell .ar--body ul,
        #articleShell .ar--body ol {
          list-style: none;
          margin: 0 0 28px;
          padding: 0;
          border-top: 1px solid var(--line);
        }

        #articleShell .ar--body li {
          font-size: 17px;
          line-height: 1.65;
          color: #2b3648;
          padding: 14px 0;
          border-bottom: 1px solid var(--line);
        }

        #articleShell .ar--body li strong {
          color: var(--ink);
          font-weight: 600;
        }

        #articleShell .ar--body ol { counter-reset: step; }

        #articleShell .ar--body ol li {
          counter-increment: step;
          display: grid;
          grid-template-columns: 40px minmax(0, 1fr);
          gap: 8px;
        }

        #articleShell .ar--body ol li::before {
          content: counter(step);
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: 19px;
          color: var(--coral);
        }

        #articleShell .ar--pull {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: clamp(26px, 3.2vw, 38px);
          font-weight: 700;
          letter-spacing: -0.035em;
          line-height: 1.2;
          margin: 44px 0;
          padding-left: 28px;
          border-left: 5px solid var(--coral);
        }

        /* Images */
        #articleShell .ar--figure { margin: 12px 0 40px; }

        #articleShell .ar--figure img {
          display: block;
          width: 100%;
          height: auto;
          border: 1px solid var(--line);
          border-radius: 4px;
          background: #ffffff;
        }

        #articleShell .ar--figure figcaption {
          font-size: 15px;
          line-height: 1.6;
          color: var(--muted);
          margin-top: 12px;
          padding-left: 14px;
          border-left: 3px solid var(--coral);
        }

        #articleShell .ar--figure--credit { font-size: 13px; }

        #articleShell .ar--figure--credit a {
          color: var(--muted);
          text-decoration: underline;
        }

        #articleShell .ar--cover { max-width: 1080px; }
        #articleShell .ar--cover .ar--figure { margin: 0 0 48px; }

        #articleShell .ar--table--wrap {
          overflow-x: auto;
          margin: 8px 0 32px;
        }

        #articleShell .ar--table {
          width: 100%;
          min-width: 560px;
          border-collapse: collapse;
          font-size: 16px;
          line-height: 1.55;
        }

        #articleShell .ar--table th {
          text-align: left;
          font-weight: 600;
          padding: 12px 16px 12px 0;
          border-bottom: 2px solid var(--ink);
        }

        #articleShell .ar--table td {
          padding: 14px 16px 14px 0;
          border-bottom: 1px solid var(--line);
          color: #2b3648;
          vertical-align: top;
        }

        #articleShell .ar--table td:first-child {
          font-weight: 600;
          color: var(--ink);
        }

        /* End of article call to action */
        #articleShell .ar--cta {
          background: var(--navy);
          color: #ffffff;
          border-radius: 4px;
          padding: 40px;
          margin-top: 72px;
        }

        #articleShell .ar--cta h3 {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 1.15;
          margin: 0 0 12px;
        }

        #articleShell .ar--body .ar--cta p {
          color: rgba(255, 255, 255, 0.82);
          font-size: 17px;
          margin: 0 0 24px;
        }

        #articleShell .ar--cta--actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        #articleShell .ar--btn {
          display: inline-block;
          background: var(--coral);
          color: #ffffff;
          font-size: 15px;
          font-weight: 600;
          padding: 14px 26px;
          border: 2px solid var(--coral);
          border-radius: 4px;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        #articleShell .ar--btn:hover {
          background: #e84634;
          border-color: #e84634;
          transform: translateY(-2px);
        }

        #articleShell .ar--cta--link {
          color: #ffffff;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          border-bottom: 2px solid var(--coral);
          padding-bottom: 3px;
        }

        /* Not found */
        #articleShell .ar--missing { padding: 96px 0 120px; }

        #articleShell .ar--missing p {
          font-size: 17px;
          color: var(--muted);
          margin: 0 0 24px;
        }

        /* Footer */
        #articleShell .ar--footer {
          background: var(--ink);
          color: rgba(255, 255, 255, 0.7);
        }

        #articleShell .ar--footer--inner {
          max-width: 1240px;
          margin: 0 auto;
          padding: 28px 48px 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          font-size: 14px;
        }

        #articleShell .ar--footer p { margin: 0; }

        #articleShell .ar--footer a {
          color: #ffffff;
          font-weight: 500;
          text-decoration: none;
          border-bottom: 2px solid var(--coral);
          padding-bottom: 2px;
        }

        /* Tablet */
        @media (max-width: 900px) {
          #articleShell .ar--header--inner { padding: 22px 28px 0; }
          #articleShell .ar--wrap { padding: 0 28px; }
          #articleShell .ar--footer--inner { padding: 24px 28px 28px; }

          #articleShell .ar--intro {
            grid-template-columns: 1fr;
            gap: 24px;
            padding: 56px 0 44px;
          }

          #articleShell .ar--item {
            grid-template-columns: 1fr;
            gap: 14px;
            padding: 32px 0;
          }

          #articleShell .ar--item--meta { flex-direction: row; gap: 16px; }

          #articleShell .ar--layout {
            grid-template-columns: minmax(0, 1fr);
            padding-top: 36px;
          }

          #articleShell .ar--toc { display: none; }
        }

        /* Mobile */
        @media (max-width: 520px) {
          #articleShell .ar--header--inner { padding: 18px 20px 0; }
          #articleShell .ar--nav { gap: 22px; }
          #articleShell .ar--nav a { font-size: 13px; }
          #articleShell .ar--logo { font-size: 17px; }
          #articleShell .ar--wrap { padding: 0 20px; }
          #articleShell .ar--footer--inner { padding: 22px 20px 26px; }
          #articleShell .ar--back { margin-top: 36px; }
          #articleShell .ar--category { margin-top: 32px; }
          #articleShell .ar--body p { font-size: 17px; }
          #articleShell .ar--body h2 { margin-top: 56px; }
          #articleShell .ar--cta { padding: 28px 22px; }
          #articleShell .ar--btn { display: block; text-align: center; width: 100%; }
        }

        /* Links inside article text */
        #articleShell .ar--inline-link {
          color: var(--ink);
          font-weight: 600;
          text-decoration: underline;
          text-decoration-color: var(--coral);
          text-decoration-thickness: 2px;
          text-underline-offset: 3px;
        }

        /* Keep reading */
        #articleShell .ar--more {
          margin-top: 72px;
          border-top: 2px solid var(--ink);
        }

        #articleShell .ar--more h3 {
          font-size: 14px;
          font-weight: 600;
          color: var(--muted);
          margin: 18px 0 4px;
        }

        #articleShell .ar--more--item {
          display: block;
          padding: 18px 0;
          border-bottom: 1px solid var(--line);
          color: var(--ink);
          text-decoration: none;
        }

        #articleShell .ar--more--cat {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: var(--coral);
          margin-bottom: 6px;
        }

        #articleShell .ar--more--item strong {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 22px;
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.2;
          transition: color 0.2s ease;
        }

        #articleShell .ar--more--item:hover strong { color: var(--coral); }

        @media (prefers-reduced-motion: reduce) {
          #articleShell *,
          #articleShell *::before,
          #articleShell *::after { transition-duration: 0.01ms !important; }
        }
      `}</style>

      <div id="articleShell">
        <header>
          <div className="ar--header--inner">
            <Link to="/" className="ar--logo">
              Boluwatife Olawuyi
            </Link>

            <nav className="ar--nav" aria-label="Main navigation">
              <Link to="/">Home</Link>
              <Link to="/articles">Articles</Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="ar--footer">
          <div className="ar--footer--inner">
            <p>
              © {new Date().getFullYear()} Boluwatife Olawuyi. All rights
              reserved.
            </p>
            <a href="mailto:olawuyiboluwatife2@gmail.com">
              olawuyiboluwatife2@gmail.com
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}