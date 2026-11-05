import { useState, useEffect } from "react";

// Main project data
const PROJECTS = [
  {
    title: "A Nigerian Financial Services Company: Unified CRM and Support",
    tag: "CRM and automation",
    src: "/img/zohocrmplus.png",
    link: null,
    description:
      "Unified social media, WhatsApp, live chat, and email into one Zoho CRM Plus system, with automated departmental routing, webhook integrations, and a single cross-channel analytics dashboard replacing what used to be a fragmented, multi-app workflow.",
  },
  {
    title: "A Nigerian Microfinance Bank: CRM and Call Center Setup",
    tag: "Call center and CRM",
    src: "/img/incoming-call-crm-2021-12.png",
    link: null,
    description:
      "Implemented Zoho CRM Plus alongside a full HoduCC call center setup, including IVR configuration, and connected the call center directly into CRM Plus, so agents handle calls from within the same CRM instead of switching between separate systems.",
  },
  {
    title: "XPay: Payment and Transaction Management System",
    tag: "Lead engineer, web and mobile",
    src: "/img/xpay-flyer1.png",
    link: "https://app.xpay.ng/",
    playStoreLink: null,
    description:
      "Led development of XPay end to end, covering both the web platform and the Flutter mobile app, replacing fragmented, manual payment handling with one centralized system. Built real-time transaction tracking (pending, successful, failed), automated validation workflows, webhook-based integrations with internal business tools, and reporting dashboards for transaction volume and payment status, giving the business a single source of truth instead of manual reconciliation.",
  },
  {
    title: "KONECT Worksuite: Full-Stack CRM and Business Platform",
    tag: "Founder, MERN stack",
    src: "/img/konect_showcase_v3.png",
    link: "https://konectworksuite.com/",
  description:
  "Founded and engineered KONECT Worksuite, an AI-powered customer support and business engagement platform built to help businesses manage customer relationships, automate support operations, and deliver faster, more intelligent customer experiences. Beyond traditional CRM functionality, KONECT brings customer conversations from WhatsApp and social channels into a unified support environment, where AI-powered agents can understand customer enquiries, draw on organisational knowledge, generate relevant responses, and handle real customer interactions. I designed and developed the platform's backend, application architecture, integrations, and AI agent workflows, including deploying AI models on AWS and bringing the customer-facing AI agent into production. The platform also brings together CRM, Help Desk, Live Chat, Email Campaigns, Projects, Invoicing, Workflows, and Analytics in one integrated solution, with a focus on making intelligent customer engagement more accessible to businesses.",
    },  {
    title: "SecureLoan: Loan Processing and Risk Management System",
    tag: "Full stack, lead engineer",
    src: "/img/secureloan.png",
    link: "https://secure-loan-web.onrender.com/",
    description:
      "Designed and built SecureLoan to replace manual, spreadsheet-and-email-based loan processing with a centralized system: rule-based approval workflows, a borrower verification layer, end-to-end lifecycle tracking from application through disbursement to repayment, and dashboards for loan volume, approval rates, and risk indicators. It turned an inconsistent, error-prone process into one with standardized decisions and full visibility at every stage.",
  },
];

// Website projects (horizontal scroll strip)
const WEBSITE_PROJECTS = [
  {
    title: "Gate Gold Fitness",
    thumb: "/img/placeholder-image.webp",
    src: "/img/placeholder-image.webp",
    link: "https://gategoldfitness.com",
  },
  {
    title: "Creastech",
    thumb: "/img/placeholder-image-1.webp",
    src: "/img/placeholder-image-1.webp",
    link: "https://creastech.com/",
  },
  {
    title: "Frictionless Lubricants",
    thumb: "/img/placeholder-image-2.jpg",
    src: "/img/placeholder-image-2.jpg",
    link: "https://frictionlesslubricants.com/",
  },
  {
    title: "JoMabel Healthcare Foundation",
    thumb: "/img/placeholder-image-4.jpg",
    src: "/img/placeholder-image-4.jpg",
    link: "https://jomabelhf.org/",
  },
];

export default function MyPortfolio() {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=IBM+Plex+Sans:wght@400;500;600&display=swap');

        #MyPortfolio,
        .pf--lightbox {
          --ink: #0e1a2b;
          --muted: #566074;
          --paper: #f3f5f8;
          --line: #d5dbe5;
          --coral: #ff5a47;
          --navy: #16294a;
          font-family: 'IBM Plex Sans', sans-serif;
        }

        #MyPortfolio {
          background: var(--paper);
          color: var(--ink);
          padding: 100px 0;
        }

        #MyPortfolio *,
        #MyPortfolio *::before,
        #MyPortfolio *::after,
        .pf--lightbox *,
        .pf--lightbox *::before,
        .pf--lightbox *::after { box-sizing: border-box; }

        #MyPortfolio .pf--inner {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 48px;
        }

        /* Intro */
        #MyPortfolio .pf--intro {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
          gap: 64px;
          align-items: end;
          margin-bottom: 72px;
        }

        #MyPortfolio .pf--headline {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: clamp(36px, 5vw, 68px);
          line-height: 1;
          font-weight: 800;
          letter-spacing: -0.045em;
          margin: 0;
        }

        #MyPortfolio .pf--lead {
          font-size: 16px;
          line-height: 1.75;
          color: var(--muted);
          margin: 0;
          max-width: 400px;
        }

        /* Project list */
        #MyPortfolio .pf--list {
          display: flex;
          flex-direction: column;
          gap: 88px;
        }

        #MyPortfolio .pf--row {
          display: grid;
          grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.75fr);
          gap: 56px;
          align-items: center;
        }

        #MyPortfolio .pf--row.flip .pf--visual { order: 2; }

        #MyPortfolio .pf--row.flip {
          grid-template-columns: minmax(0, 0.75fr) minmax(0, 1.25fr);
        }

        #MyPortfolio .pf--row.flip .pf--visual { grid-column: 2; }
        #MyPortfolio .pf--row.flip .pf--text { grid-column: 1; grid-row: 1; }

        #MyPortfolio .pf--visual {
          display: block;
          width: 100%;
          padding: 0;
          border: 1px solid var(--line);
          border-radius: 4px;
          background: #ffffff;
          overflow: hidden;
          cursor: zoom-in;
          aspect-ratio: 4 / 3;
        }

        #MyPortfolio .pf--visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }

        #MyPortfolio .pf--visual--empty {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          background: var(--navy);
          color: #ffffff;
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 22px;
          font-weight: 700;
          padding: 24px;
          text-align: center;
        }

        #MyPortfolio .pf--tag {
          font-size: 15px;
          font-weight: 600;
          color: var(--coral);
          margin: 0 0 14px;
        }

        #MyPortfolio .pf--title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: clamp(24px, 2.6vw, 34px);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 1.12;
          margin: 0 0 18px;
        }

        #MyPortfolio .pf--desc {
          font-size: 15.5px;
          line-height: 1.75;
          color: var(--muted);
          margin: 0 0 26px;
        }

        #MyPortfolio .pf--links {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        #MyPortfolio .pf--btn,
        .pf--lightbox .pf--btn {
          display: inline-block;
          font-family: inherit;
          font-size: 15px;
          font-weight: 600;
          color: #ffffff;
          background: var(--coral);
          border: 2px solid var(--coral);
          border-radius: 4px;
          padding: 13px 24px;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        #MyPortfolio .pf--btn:hover,
        .pf--lightbox .pf--btn:hover {
          background: #e84634;
          border-color: #e84634;
          color: #ffffff;
          transform: translateY(-2px);
        }

        #MyPortfolio .pf--private {
          font-size: 14px;
          color: var(--muted);
          margin: 0;
        }

        #MyPortfolio .pf--visual:focus-visible,
        #MyPortfolio .pf--site:focus-visible,
        #MyPortfolio a:focus-visible,
        .pf--lightbox a:focus-visible,
        .pf--lightbox button:focus-visible {
          outline: 3px solid var(--coral);
          outline-offset: 3px;
        }

        /* Websites */
        #MyPortfolio .pf--sites {
          margin-top: 110px;
          padding-top: 36px;
          border-top: 2px solid var(--ink);
        }

        #MyPortfolio .pf--sites--head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }

        #MyPortfolio .pf--sites--title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: clamp(26px, 3vw, 38px);
          font-weight: 800;
          letter-spacing: -0.04em;
          margin: 0;
        }

        #MyPortfolio .pf--sites--note {
          font-size: 15px;
          color: var(--muted);
          margin: 0;
        }

        #MyPortfolio .pf--sites--scroll {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          padding-bottom: 14px;
          scroll-snap-type: x proximity;
          -webkit-overflow-scrolling: touch;
        }

        #MyPortfolio .pf--sites--scroll::-webkit-scrollbar { height: 6px; }

        #MyPortfolio .pf--sites--scroll::-webkit-scrollbar-thumb {
          background: var(--line);
          border-radius: 10px;
        }

        #MyPortfolio .pf--site {
          flex: 0 0 auto;
          width: 300px;
          padding: 0;
          border: 0;
          background: transparent;
          text-align: left;
          font-family: inherit;
          color: inherit;
          cursor: zoom-in;
          scroll-snap-align: start;
        }

        #MyPortfolio .pf--site--img {
          display: block;
          aspect-ratio: 16 / 10;
          border: 1px solid var(--line);
          border-radius: 4px;
          overflow: hidden;
          background: #ffffff;
          margin-bottom: 14px;
        }

        #MyPortfolio .pf--site--img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        #MyPortfolio .pf--site--name {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 19px;
          font-weight: 700;
          letter-spacing: -0.02em;
          border-bottom: 2px solid transparent;
          transition: border-color 0.2s ease;
        }

        #MyPortfolio .pf--site:hover .pf--site--name {
          border-bottom-color: var(--coral);
        }

        /* Lightbox */
        .pf--lightbox {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 72px 40px 40px;
          background: rgba(14, 26, 43, 0.92);
          cursor: zoom-out;
        }

        .pf--lightbox--content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
          cursor: default;
        }

        .pf--lightbox--img {
          max-width: 90vw;
          max-height: 76vh;
          border-radius: 4px;
          object-fit: contain;
          background: #ffffff;
        }

        .pf--lightbox--title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          text-align: center;
        }

        .pf--lightbox--close {
          position: absolute;
          top: 20px;
          right: 28px;
          font-family: inherit;
          font-size: 15px;
          font-weight: 600;
          color: #ffffff;
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.5);
          border-radius: 4px;
          padding: 9px 18px;
          cursor: pointer;
          transition: background 0.2s ease, border-color 0.2s ease;
        }

        .pf--lightbox--close:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: #ffffff;
        }

        /* Tablet */
        @media (max-width: 900px) {
          #MyPortfolio { padding: 76px 0; }
          #MyPortfolio .pf--inner { padding: 0 28px; }

          #MyPortfolio .pf--intro {
            grid-template-columns: 1fr;
            gap: 24px;
            margin-bottom: 52px;
          }

          #MyPortfolio .pf--list { gap: 64px; }

          #MyPortfolio .pf--row,
          #MyPortfolio .pf--row.flip {
            grid-template-columns: 1fr;
            gap: 26px;
          }

          #MyPortfolio .pf--row.flip .pf--visual,
          #MyPortfolio .pf--row.flip .pf--text {
            grid-column: auto;
            grid-row: auto;
            order: 0;
          }

          #MyPortfolio .pf--sites { margin-top: 80px; }
        }

        /* Mobile */
        @media (max-width: 520px) {
          #MyPortfolio { padding: 56px 0; }
          #MyPortfolio .pf--inner { padding: 0 20px; }
          #MyPortfolio .pf--desc { font-size: 15px; }
          #MyPortfolio .pf--btn { display: block; text-align: center; width: 100%; }
          #MyPortfolio .pf--site { width: 240px; }
          .pf--lightbox { padding: 68px 16px 24px; }
          .pf--lightbox--close { right: 16px; }
        }

        @media (prefers-reduced-motion: reduce) {
          #MyPortfolio *,
          .pf--lightbox * {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <section id="MyPortfolio" aria-labelledby="portfolio-heading">
        <div className="pf--inner">
          {/* Intro */}
          <div className="pf--intro">
            <h2 id="portfolio-heading" className="pf--headline">
              Work I have shipped.
            </h2>

            <p className="pf--lead">
              Systems built for real teams, from CRM rollouts to payment
              platforms. Click any image to see it larger.
            </p>
          </div>

          {/* Projects */}
          <div className="pf--list">
            {PROJECTS.map((item, i) => (
              <article
                className={`pf--row ${i % 2 === 1 ? "flip" : ""}`}
                key={item.title}
              >
                <button
                  type="button"
                  className="pf--visual"
                  aria-label={`Enlarge image: ${item.title}`}
                  onClick={() =>
                    item.src &&
                    setLightbox({
                      src: item.src,
                      title: item.title,
                      link: item.link,
                    })
                  }
                >
                  {item.src ? (
                    <img
                      src={item.src}
                      alt={item.title}
                      loading={i === 0 ? "eager" : "lazy"}
                      decoding="async"
                    />
                  ) : (
                    <span className="pf--visual--empty">{item.title}</span>
                  )}
                </button>

                <div className="pf--text">
                  <p className="pf--tag">{item.tag}</p>

                  <h3 className="pf--title">{item.title}</h3>

                  <p className="pf--desc">{item.description}</p>

                  <div className="pf--links">
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="pf--btn"
                      >
                        View live
                      </a>
                    )}

                    {item.playStoreLink && (
                      <a
                        href={item.playStoreLink}
                        target="_blank"
                        rel="noreferrer"
                        className="pf--btn"
                      >
                        Google Play
                      </a>
                    )}

                    {!item.link && (
                      <p className="pf--private">
                        Private client implementation, no public link available.
                      </p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Website projects */}
          <div className="pf--sites">
            <div className="pf--sites--head">
              <h3 className="pf--sites--title">Websites I have built</h3>
              <p className="pf--sites--note">
                Tap a thumbnail to see it larger.
              </p>
            </div>

            <div className="pf--sites--scroll">
              {WEBSITE_PROJECTS.map((site) => (
                <button
                  type="button"
                  className="pf--site"
                  key={site.title}
                  aria-label={`Enlarge image: ${site.title}`}
                  onClick={() =>
                    setLightbox({
                      src: site.src,
                      title: site.title,
                      link: site.link,
                    })
                  }
                >
                  <span className="pf--site--img">
                    <img
                      src={site.thumb}
                      alt={site.title}
                      loading="lazy"
                      decoding="async"
                    />
                  </span>

                  <span className="pf--site--name">{site.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox, shared by project images and website thumbnails */}
      {lightbox && (
        <div
          className="pf--lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="pf--lightbox--close"
            onClick={() => setLightbox(null)}
          >
            Close
          </button>

          <div
            className="pf--lightbox--content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="pf--lightbox--img"
            />

            <p className="pf--lightbox--title">{lightbox.title}</p>

            {lightbox.link && (
              <a
                href={lightbox.link}
                target="_blank"
                rel="noreferrer"
                className="pf--btn"
              >
                Visit site
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
}