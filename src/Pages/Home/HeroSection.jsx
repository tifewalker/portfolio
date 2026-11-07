import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

export default function HeroSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=IBM+Plex+Sans:wght@400;500;600&display=swap');

        #heroSection {
          --ink: #0e1a2b;
          --muted: #566074;
          --paper: #f3f5f8;
          --line: #d5dbe5;
          --coral: #ff5a47;
          --navy: #16294a;
          background: var(--paper);
          font-family: 'IBM Plex Sans', sans-serif;
          color: var(--ink);
          width: 100%;
          overflow: hidden;
        }

        #heroSection * { box-sizing: border-box; }

        /* Navigation */
        #heroSection .hero--nav {
          max-width: 1240px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 28px 48px 0;
        }

        #heroSection .hero--logo {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: 20px;
          letter-spacing: -0.03em;
        }

        #heroSection .hero--nav--links {
          display: flex;
          gap: 36px;
        }

        #heroSection .hero--nav--links a {
          font-size: 14px;
          font-weight: 500;
          color: var(--ink);
          text-decoration: none;
          cursor: pointer;
          padding-bottom: 3px;
          border-bottom: 2px solid transparent;
          transition: border-color 0.2s ease;
        }

        #heroSection .hero--nav--links a:hover { border-bottom-color: var(--coral); }

        /* Main grid */
        #heroSection .hero--body {
          max-width: 1240px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.75fr);
          gap: 64px;
          align-items: end;
          padding: 72px 48px 56px;
        }

        #heroSection .hero--status {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 500;
          color: var(--muted);
          margin: 0 0 26px;
        }

        #heroSection .hero--status::before {
          content: "";
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #1f9d63;
        }

        #heroSection .hero--heading {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: clamp(42px, 6vw, 84px);
          line-height: 0.98;
          font-weight: 800;
          letter-spacing: -0.045em;
          margin: 0 0 32px;
        }

        #heroSection .hero--heading .hero--name {
          display: block;
          font-size: 0.34em;
          font-weight: 500;
          letter-spacing: -0.01em;
          color: var(--muted);
          margin-bottom: 18px;
        }

        #heroSection .hero--description {
          font-size: 17px;
          line-height: 1.7;
          color: var(--muted);
          max-width: 560px;
          margin: 0 0 18px;
        }

        #heroSection .hero--description strong {
          color: var(--ink);
          font-weight: 600;
        }

        /* Buttons */
        #heroSection .hero--cta--row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 14px;
          margin-top: 34px;
        }

        #heroSection .hero--cta,
        #heroSection .hero--cta--ghost,
        #heroSection .hero--cta--link {
          font-family: inherit;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
          transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
        }

        #heroSection .hero--cta {
          background: var(--coral);
          color: #fff;
          padding: 16px 28px;
          border-radius: 4px;
          border: 2px solid var(--coral);
        }

        #heroSection .hero--cta:hover { background: #e84634; border-color: #e84634; transform: translateY(-2px); }

        #heroSection .hero--cta--ghost {
          color: var(--ink);
          padding: 16px 28px;
          border-radius: 4px;
          border: 2px solid var(--ink);
        }

        #heroSection .hero--cta--ghost:hover { background: var(--ink); color: #fff; transform: translateY(-2px); }

        #heroSection .hero--cta--link {
          color: var(--ink);
          padding: 16px 6px;
          border-bottom: 2px solid transparent;
        }

        #heroSection .hero--cta--link:hover { border-bottom-color: var(--coral); }

        #heroSection a:focus-visible {
          outline: 3px solid var(--navy);
          outline-offset: 4px;
        }

        /* Photo */
        #heroSection .hero--photo--wrap {
          position: relative;
          padding: 0 22px 22px 0;
        }

        #heroSection .hero--photo--wrap::before {
          content: "";
          position: absolute;
          right: 0;
          bottom: 0;
          width: 86%;
          height: 86%;
          background: var(--navy);
          border-radius: 4px;
        }

        #heroSection .hero--photo--frame {
          position: relative;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          border-radius: 4px;
          background: #dfe4ec;
        }

        #heroSection .hero--photo--frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }

        #heroSection .hero--photo--caption {
          position: absolute;
          left: -28px;
          bottom: 52px;
          background: var(--ink);
          color: #fff;
          padding: 14px 18px;
          border-radius: 4px;
          font-size: 13px;
          line-height: 1.4;
          max-width: 210px;
        }

        #heroSection .hero--photo--caption strong {
          display: block;
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 16px;
          margin-bottom: 2px;
        }

        /* Workflow rail */
        #heroSection .hero--rail--wrap {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 48px 90px;
        }

        #heroSection .hero--rail--title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 22px;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin: 0 0 34px;
        }

        #heroSection .hero--rail {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        #heroSection .hero--rail::before {
          content: "";
          position: absolute;
          top: 13px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--line);
        }

        #heroSection .hero--rail--pulse {
          position: absolute;
          top: 6px;
          left: 0;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--coral);
          animation: heroPulse 3.2s cubic-bezier(.6,.05,.3,1) 0.4s forwards;
          opacity: 0;
        }

        @keyframes heroPulse {
          0% { left: 0; opacity: 1; }
          92% { opacity: 1; }
          100% { left: calc(75% + 7px); opacity: 0; }
        }

        #heroSection .hero--rail li {
          position: relative;
          padding-top: 44px;
        }

        #heroSection .hero--rail li::before {
          content: "";
          position: absolute;
          top: 6px;
          left: 0;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--paper);
          border: 2px solid var(--line);
          animation: heroNode 0.4s ease forwards;
          animation-delay: calc(0.4s + var(--i) * 0.97s);
        }

        @keyframes heroNode {
          to { background: var(--navy); border-color: var(--navy); }
        }

        #heroSection .hero--rail h3 {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 20px;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin: 0 0 8px;
        }

        #heroSection .hero--rail p {
          font-size: 15px;
          line-height: 1.6;
          color: var(--muted);
          margin: 0;
          max-width: 250px;
        }

        /* Tablet */
        @media (max-width: 900px) {
          #heroSection .hero--nav { padding: 22px 28px 0; }

          #heroSection .hero--body {
            grid-template-columns: 1fr;
            gap: 56px;
            padding: 48px 28px 48px;
          }

          #heroSection .hero--photo--wrap {
            max-width: 380px;
            margin-left: 12px;
          }

          #heroSection .hero--rail--wrap { padding: 0 28px 72px; }

          #heroSection .hero--rail {
            grid-template-columns: 1fr;
            gap: 30px;
            padding-left: 40px;
          }

          #heroSection .hero--rail::before {
            top: 8px;
            bottom: 8px;
            left: 7px;
            right: auto;
            width: 2px;
            height: auto;
          }

          #heroSection .hero--rail--pulse { display: none; }

          #heroSection .hero--rail li { padding-top: 0; }

          #heroSection .hero--rail li::before {
            top: 2px;
            left: -40px;
          }
        }

        /* Mobile */
        @media (max-width: 520px) {
          #heroSection .hero--nav { padding: 18px 20px 0; }
          #heroSection .hero--nav--links { gap: 20px; }
          #heroSection .hero--nav--links a { font-size: 13px; }
          #heroSection .hero--body { padding: 36px 20px 40px; }
          #heroSection .hero--description { font-size: 16px; }
          #heroSection .hero--cta--row { flex-direction: column; align-items: stretch; }
          #heroSection .hero--cta,
          #heroSection .hero--cta--ghost { text-align: center; }
          #heroSection .hero--cta--link { text-align: center; }
          #heroSection .hero--photo--caption { left: -8px; max-width: 180px; }
          #heroSection .hero--rail--wrap { padding: 0 20px 60px; }
        }

        @media (prefers-reduced-motion: reduce) {
          #heroSection * {
            animation: none !important;
            transition: none !important;
            scroll-behavior: auto !important;
          }
          #heroSection .hero--rail li::before {
            background: var(--navy);
            border-color: var(--navy);
          }
          #heroSection .hero--rail--pulse { display: none; }
        }
      `}</style>

      <section id="heroSection" aria-labelledby="hero-heading">
        {/* Navigation */}
        <nav className="hero--nav" aria-label="Main navigation">
          <span className="hero--logo">Boluwatife Olawuyi</span>

          <div className="hero--nav--links">
            <Link to="MyPortfolio" spy smooth offset={-70} duration={500}>
              Works
            </Link>
            <RouterLink to="/articles">Articles</RouterLink>
            <Link to="Contact" spy smooth offset={-70} duration={500}>
              Contact
            </Link>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="hero--body">
          <div className="hero--content">
            <p className="hero--status">Application engineer, open to new projects</p>

            <h1 id="hero-heading" className="hero--heading">
              <span className="hero--name">Hi, I'm Boluwatife Olawuyi.</span>
              I build the systems that keep a business running.
            </h1>

            <p className="hero--description">
              CRM platforms, API integrations, AI agents and automated
              workflows that remove manual work and fix real operational
              problems. I have 5+ years experience across application engineering,
              backend development and business process automation.
            </p>

            <p className="hero--description">
              I am also the founder of <strong>KONECT Worksuite</strong>,
              where I build AI-enabled business software and customer-facing
              AI agent workflows that run in production.
            </p>

            <div className="hero--cta--row">
              <Link
                to="Contact"
                spy
                smooth
                offset={-70}
                duration={500}
                className="hero--cta"
              >
                Let's work together
              </Link>

              <Link
                to="MyPortfolio"
                spy
                smooth
                offset={-70}
                duration={500}
                className="hero--cta--ghost"
              >
                See case studies
              </Link>

              <a
                href="/img/BoluwatifeOlawuyi_CV.pdf"
                download="BoluwatifeOlawuyi_CV.pdf"
                className="hero--cta--link"
              >
                Download resume
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="hero--photo--wrap">
            <div className="hero--photo--frame">
              <img
                src="/img/hero_img.jpeg"
                alt="Boluwatife Olawuyi, Application Engineer, System Analyst and AI Automation Specialist"
                width="927"
                height="1058"
                fetchPriority="high"
              />
            </div>

            <div className="hero--photo--caption">
              <strong>Building. Integrating. Automating.</strong>
              Application and AI solutions
            </div>
          </div>
        </div>

        {/* Workflow rail */}
        <div className="hero--rail--wrap">
          <h2 className="hero--rail--title">How I work, from first contact to final report</h2>

          <ol className="hero--rail">
            <span className="hero--rail--pulse" aria-hidden="true" />

            <li style={{ "--i": 0 }}>
              <h3>Connect</h3>
              <p>API integrations that pull your tools and data into one place.</p>
            </li>
            <li style={{ "--i": 1 }}>
              <h3>Structure</h3>
              <p>CRM implementation shaped around how your team really sells and supports.</p>
            </li>
            <li style={{ "--i": 2 }}>
              <h3>Automate</h3>
              <p>Workflow automation and AI agents that handle the repetitive work.</p>
            </li>
            <li style={{ "--i": 3 }}>
              <h3>Ship</h3>
              <p>Backend development and cloud deployment that stays stable under load.</p>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}