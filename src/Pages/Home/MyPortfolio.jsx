import { useState, useEffect, useRef } from 'react';

// ── Main project data ──────────────────────────────────────────
const PROJECTS = [
 {
    title: "A Nigerian Financial Services Company — Unified CRM & Support",
    tag: "CRM & Automation",
    visual: "crm",
    src: "/img/zohocrmplus.png",
    link: null,
    description:
      "Unified social media, WhatsApp, live chat, and email into one Zoho CRM Plus system — with automated departmental routing, webhook integrations, and a single cross-channel analytics dashboard replacing what used to be a fragmented, multi-app workflow.",
  },
  {
    title: "A Nigerian Microfinance Bank — CRM & Call Center Setup",
    tag: "Call Center + CRM",
    visual: "callcenter",
    src: "/img/incoming-call-crm-2021-12.png",
    link: null,
    description:
      "Implemented Zoho CRM Plus alongside a full HoduCC call center setup, including IVR configuration, and connected the call center directly into CRM Plus — so agents handle calls from within the same CRM instead of switching between separate systems.",
  },
  {
    title: "XPay — Payment & Transaction Management System",
    tag: "Lead Engineer · Web + Mobile",
    visual: "payments",
    src: "/img/xpay-flyer1.png",
    link: "https://app.xpay.ng/",
    playStoreLink: null,
    description:
      "Led development of XPay end-to-end — both the web platform and the Flutter mobile app — replacing fragmented, manual payment handling with one centralized system. Built real-time transaction tracking (pending/successful/failed), automated validation workflows, webhook-based integrations with internal business tools, and reporting dashboards for transaction volume and payment status — giving the business a single source of truth instead of manual reconciliation.",
  },
  {
    title: "KONECT Worksuite — Full-Stack CRM & Business Platform",
    tag: "Team Lead · MERN Stack",
    visual: "crm",
    src: "/img/konect_showcase_v3.png",
    link: "https://konect-crm-client.onrender.com/",
    description:
      "Leading development of KONECT Worksuite — an in-house, multi-module business platform covering CRM, Help Desk, Live Chat & Voice (SalesIQ), Email Campaigns, Project Management, Invoices, Workflows, and Analytics, built on the MERN stack. Designed to be leaner and more tightly integrated than existing multi-module SaaS platforms, targeting the Nigerian SME market first, priced in Naira, with a roadmap to expand across Africa and internationally.",
  },
  {
    title: "SecureLoan — Loan Processing & Risk Management System",
    tag: "Full-Stack · Lead Engineer",
    visual: "loan",
    src: "/img/secureloan.png",
    link: "https://secure-loan-web.onrender.com/",
    description:
      "Designed and built SecureLoan to replace manual, spreadsheet-and-email-based loan processing with a centralized system — rule-based approval workflows, a borrower verification layer, end-to-end lifecycle tracking from application through disbursement to repayment, and dashboards for loan volume, approval rates, and risk indicators. Turned an inconsistent, error-prone process into one with standardized decisions and full visibility at every stage.",
  },
];

// ── Website projects (horizontal scroll strip) ──────────────────
// ── Website projects (horizontal scroll strip) ──────────────────
const WEBSITE_PROJECTS = [
  { title: "Gate Gold Fitness", thumb: "/img/placeholder-image.webp", src: "/img/placeholder-image.webp", link: "https://gategoldfitness.com" },
  { title: "Creastech", thumb: "/img/placeholder-image-3.jpg", src: "/img/placeholder-image-3.jpg", link: "https://creastech.com/" },
  { title: "Frictionless Lubricants", thumb: "/img/placeholder-image-2.jpg", src: "/img/placeholder-image-2.jpg", link: "https://frictionlesslubricants.com/" },
  { title: "Website Project 4", thumb: "/img/placeholder-image-4.jpg", src: "/img/placeholder-image-4.jpg", link: null },
];

export default function MyPortfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [lightbox, setLightbox] = useState(null); // { src, title, link }
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

        #MyPortfolio {
          background: #ffffff;
          padding: 80px 0;
          font-family: 'Space Grotesk', sans-serif;
        }

        .portfolio--inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 48px;
          box-sizing: border-box;
        }

        .portfolio--eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(16px)'};
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .portfolio--eyebrow--icon {
          width: 18px;
          height: 18px;
          border: 1px solid rgba(20,33,61,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .portfolio--eyebrow--icon::after {
          content: '';
          width: 6px;
          height: 6px;
          background: #1f9d63;
          display: block;
        }

        .portfolio--eyebrow--text {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(20,33,61,0.5);
        }

        .portfolio--headline {
          font-size: clamp(26px, 3.2vw, 34px);
          font-weight: 700;
          color: #14213d;
          margin: 0 0 48px;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(16px)'};
          transition: opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s;
        }

        /* Project list */
        .portfolio--list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .project--row {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 40px;
          align-items: center;
          padding: 40px 0;
          border-top: 1px solid rgba(20,33,61,0.08);
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(20px)'};
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .portfolio--list .project--row:last-child {
          border-bottom: 1px solid rgba(20,33,61,0.08);
        }

        .project--visual {
          width: 100%;
          aspect-ratio: 4/3;
          border-radius: 14px;
          overflow: hidden;
          background: #f7f8fb;
          position: relative;
          cursor: zoom-in;
        }

        .project--visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          animation: fadeInImg 0.35s ease;
          transition: transform 0.3s ease;
        }

        .project--visual:hover img {
          transform: scale(1.03);
        }

        @keyframes fadeInImg {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .project--meta--row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }

        .project--tag {
          display: inline-flex;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: #ffffff;
          background: #1f9d63;
          padding: 3px 10px;
          border-radius: 20px;
        }

        .project--title {
          font-size: 19px;
          font-weight: 700;
          color: #14213d;
          margin: 0 0 10px;
          line-height: 1.35;
        }

        .project--desc {
          font-size: 14px;
          line-height: 1.75;
          color: #5b6270;
          margin: 0 0 14px;
          max-width: 560px;
        }

        .project--links {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .project--link--btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: #ffffff;
          background: #1f9d63;
          padding: 7px 16px;
          border-radius: 20px;
          text-decoration: none;
          transition: background 0.2s ease;
        }

        .project--link--btn:hover {
          background: #178a54;
          color: #ffffff;
          text-decoration: none;
        }

        .project--private--note {
          font-size: 12px;
          color: rgba(20,33,61,0.4);
          font-style: italic;
        }

        /* ── Abstract dashboard mockups (placeholders) ── */
        .mock { width: 100%; height: 100%; padding: 18px; box-sizing: border-box; }

        .mock--crm { display: flex; flex-direction: column; gap: 8px; }
        .mock--crm .mock-bar { height: 10px; border-radius: 4px; background: rgba(20,33,61,0.08); }
        .mock--crm .mock-bar.accent { background: #1f9d63; }
        .mock--crm .mock-row { display: flex; gap: 8px; margin-top: 10px; }
        .mock--crm .mock-chip {
          flex: 1; height: 54px; border-radius: 8px; background: #ffffff;
          border: 1px solid rgba(20,33,61,0.08);
          display: flex; align-items: flex-end; padding: 6px; gap: 4px;
        }
        .mock--crm .mock-chip span {
          flex: 1; background: rgba(31,157,99,0.35); border-radius: 2px;
        }

        .mock--callcenter { display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 14px; height: 100%; }
        .mock--callcenter .mock-wave { display: flex; align-items: center; gap: 4px; height: 40px; }
        .mock--callcenter .mock-wave span {
          width: 5px; border-radius: 3px; background: #1f9d63;
        }
        .mock--callcenter .mock-label {
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(20,33,61,0.35); font-weight: 600;
        }

        .mock--payments { display: flex; gap: 12px; height: 100%; align-items: center; }
        .mock--payments .mock-panel {
          flex: 1.3; height: 82%; border-radius: 10px; background: #ffffff;
          border: 1px solid rgba(20,33,61,0.08); padding: 10px; box-sizing: border-box;
          display: flex; flex-direction: column; gap: 6px;
        }
        .mock--payments .mock-panel .mock-bar { height: 8px; border-radius: 4px; background: rgba(20,33,61,0.08); }
        .mock--payments .mock-panel .mock-status {
          margin-top: auto; display: flex; gap: 6px;
        }
        .mock--payments .mock-panel .mock-status span {
          flex: 1; height: 22px; border-radius: 6px; background: rgba(31,157,99,0.15);
          border: 1px solid rgba(31,157,99,0.3);
        }
        .mock--payments .mock-phone--mini {
          flex: 1; height: 90%; border-radius: 14px; background: #ffffff;
          border: 3px solid rgba(20,33,61,0.15); padding: 10px 8px; box-sizing: border-box;
          display: flex; flex-direction: column; gap: 6px;
        }
        .mock--payments .mock-phone--mini .mock-pill { height: 6px; border-radius: 3px; background: rgba(20,33,61,0.08); }
        .mock--payments .mock-phone--mini .mock-cta { margin-top: auto; height: 16px; border-radius: 16px; background: #1f9d63; }

        .mock--mobile { display: flex; align-items: center; justify-content: center; height: 100%; }
        .mock--mobile .mock-phone {
          width: 92px; height: 168px; border-radius: 18px; background: #ffffff;
          border: 3px solid rgba(20,33,61,0.15); padding: 12px 10px; box-sizing: border-box;
          display: flex; flex-direction: column; gap: 8px;
        }
        .mock--mobile .mock-phone .mock-pill {
          height: 8px; border-radius: 4px; background: rgba(20,33,61,0.08);
        }
        .mock--mobile .mock-phone .mock-cta {
          margin-top: auto; height: 22px; border-radius: 20px; background: #1f9d63;
        }

        .mock--loan { display: flex; align-items: center; justify-content: center; height: 100%; }
        .mock--loan .mock-circle {
          width: 96px; height: 96px; border-radius: 50%;
          border: 10px solid rgba(20,33,61,0.08);
          border-top-color: #1f9d63;
          border-right-color: #1f9d63;
        }

        /* ── Website projects: horizontal scroll strip ── */
        .websites--section {
          margin-top: 64px;
          padding-top: 48px;
          border-top: 1px solid rgba(20,33,61,0.08);
        }

        .websites--heading {
          font-size: 18px;
          font-weight: 700;
          color: #14213d;
          margin: 0 0 6px;
        }

        .websites--subtext {
          font-size: 13px;
          color: rgba(20,33,61,0.45);
          margin: 0 0 24px;
        }

        .websites--scroll {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          padding-bottom: 8px;
          scroll-snap-type: x proximity;
          -webkit-overflow-scrolling: touch;
        }

        .websites--scroll::-webkit-scrollbar {
          height: 6px;
        }
        .websites--scroll::-webkit-scrollbar-thumb {
          background: rgba(20,33,61,0.15);
          border-radius: 10px;
        }

        .website--card {
          flex: 0 0 auto;
          width: 220px;
          aspect-ratio: 16/10;
          border-radius: 10px;
          overflow: hidden;
          background: #f7f8fb;
          border: 1px solid rgba(20,33,61,0.08);
          cursor: zoom-in;
          scroll-snap-align: start;
          position: relative;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .website--card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(20,33,61,0.1);
        }

        .website--card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          animation: fadeInImg 0.35s ease;
        }

        .website--card--label {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 8px 10px;
          background: linear-gradient(to top, rgba(20,33,61,0.75), transparent);
          color: #ffffff;
          font-size: 12px;
          font-weight: 600;
        }

        /* ── Lightbox ── */
        .lightbox--overlay {
          position: fixed;
          inset: 0;
          background: rgba(20,33,61,0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 40px;
          box-sizing: border-box;
          cursor: zoom-out;
        }

        .lightbox--content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }

        .lightbox--img {
          max-width: 90vw;
          max-height: 85vh;
          border-radius: 10px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
          cursor: default;
          object-fit: contain;
        }

        .lightbox--close {
          position: absolute;
          top: 24px;
          right: 32px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          color: #ffffff;
          border: none;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease;
        }

        .lightbox--close:hover {
          background: rgba(255,255,255,0.28);
        }

        @media (max-width: 800px) {
          .portfolio--inner { padding: 0 24px; }
          .project--row {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 32px 0;
          }
          .project--visual { aspect-ratio: 16/9; }
          .website--card { width: 180px; }
        }

        @media (max-width: 480px) {
          #MyPortfolio { padding: 56px 0; }
          .portfolio--headline { margin-bottom: 32px; }
          .project--title { font-size: 17px; }
          .website--card { width: 160px; }
          .lightbox--overlay { padding: 20px; }
        }
      `}</style>

      <section id="MyPortfolio" ref={sectionRef}>
        <div className="portfolio--inner">

          <div className="portfolio--eyebrow">
            <div className="portfolio--eyebrow--icon"></div>
            <span className="portfolio--eyebrow--text">Featured Work</span>
          </div>

          <h2 className="portfolio--headline">Real systems, real business impact</h2>

          <div className="portfolio--list">
            {PROJECTS.map((item, i) => (
              <div className="project--row" key={i}>
                <div
                  className="project--visual"
                  onClick={() => item.src && setLightbox({ src: item.src, title: item.title, link: item.link })}
                >
                  {item.src ? (
                    <img src={item.src} alt={item.title} loading={i === 0 ? "eager" : "lazy"} decoding="async" />
                  ) : (
                    <DashboardMock kind={item.visual} />
                  )}
                </div>
                <div>
                  <div className="project--meta--row">
                    <span className="project--tag">{item.tag}</span>
                  </div>
                  <h3 className="project--title">{item.title}</h3>
                  <p className="project--desc">{item.description}</p>
                  <div className="project--links">
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noreferrer" className="project--link--btn">
                        View Live ↗
                      </a>
                    )}
                    {item.playStoreLink && (
                      <a href={item.playStoreLink} target="_blank" rel="noreferrer" className="project--link--btn">
                        Google Play ↗
                      </a>
                    )}
                    {!item.link && (
                      <span className="project--private--note">Private client implementation — no public link available</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Website projects — horizontal scroll, tap to enlarge */}
          <div className="websites--section">
            <h3 className="websites--heading">Website Projects</h3>
            <p className="websites--subtext">Tap any thumbnail to see it larger</p>
            <div className="websites--scroll">
              {WEBSITE_PROJECTS.map((site, i) => (
                <div
                  className="website--card"
                  key={i}
                  onClick={() => setLightbox({ src: site.src, title: site.title, link: site.link })}
                >
                  <img src={site.thumb} alt={site.title} loading="lazy" decoding="async" />
                  <div className="website--card--label">{site.title}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox overlay — shared by both project images and website thumbnails */}
      {lightbox && (
        <div className="lightbox--overlay" onClick={() => setLightbox(null)}>
          <button className="lightbox--close" onClick={() => setLightbox(null)} aria-label="Close">✕</button>
          <div className="lightbox--content" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.title} className="lightbox--img" />
            {lightbox.link && (
              <a href={lightbox.link} target="_blank" rel="noreferrer" className="project--link--btn">
                Visit Site ↗
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function DashboardMock({ kind }) {
  if (kind === "crm") {
    return (
      <div className="mock mock--crm">
        <div className="mock-bar" style={{ width: "60%" }}></div>
        <div className="mock-bar accent" style={{ width: "40%" }}></div>
        <div className="mock-row">
          {[0.6, 0.9, 0.4, 0.75].map((h, i) => (
            <div className="mock-chip" key={i}>
              <span style={{ height: `${h * 100}%` }}></span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (kind === "callcenter") {
    return (
      <div className="mock mock--callcenter">
        <div className="mock-wave">
          {[14, 26, 18, 34, 20, 30, 16].map((h, i) => (
            <span key={i} style={{ height: `${h}px` }}></span>
          ))}
        </div>
        <span className="mock-label">Call Routing</span>
      </div>
    );
  }
  if (kind === "payments") {
    return (
      <div className="mock mock--payments">
        <div className="mock-panel">
          <div className="mock-bar" style={{ width: "70%" }}></div>
          <div className="mock-bar" style={{ width: "45%" }}></div>
          <div className="mock-bar" style={{ width: "60%" }}></div>
          <div className="mock-status">
            <span></span><span></span>
          </div>
        </div>
        <div className="mock-phone--mini">
          <div className="mock-pill" style={{ width: "80%" }}></div>
          <div className="mock-pill" style={{ width: "55%" }}></div>
          <div className="mock-cta"></div>
        </div>
      </div>
    );
  }
  if (kind === "mobile") {
    return (
      <div className="mock mock--mobile">
        <div className="mock-phone">
          <div className="mock-pill" style={{ width: "70%" }}></div>
          <div className="mock-pill" style={{ width: "50%" }}></div>
          <div className="mock-pill" style={{ width: "85%" }}></div>
          <div className="mock-cta"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="mock mock--loan">
      <div className="mock-circle"></div>
    </div>
  );
}