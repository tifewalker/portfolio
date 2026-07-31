import { useState, useEffect, useRef } from 'react';

// ── Project data ──────────────────────────────────────────────
// Replace `src` with a real screenshot path (e.g. "./img/portfolio/africa-prudential.png")
// once you have one. Until then, `visual` renders an abstract mockup matching each category.
const PROJECTS = [
  {
    title: "Africa Prudential — Unified CRM & Support",
    tag: "CRM & Automation",
    year: "2024",
    visual: "crm",
    src: null,
    description:
      "Unified social media, WhatsApp, live chat, and email into one Zoho CRM Plus system — with automated departmental routing, webhook integrations, and a single cross-channel analytics dashboard replacing what used to be a fragmented, multi-app workflow.",
  },
  {
    title: "ASHA Microfinance Bank — CRM & Call Center Setup",
    tag: "Call Center + CRM",
    year: "2024",
    visual: "callcenter",
    src: null,
    description:
      "Implemented Zoho CRM Plus alongside a full HoduCC call center setup, including IVR configuration, and connected the call center directly into CRM Plus — so agents handle calls from within the same CRM instead of switching between separate systems.",
  },
  {
    title: "XPay — Payment & Transaction Management System",
    tag: "Lead Engineer · Web + Mobile",
    year: "2023",
    visual: "payments",
    src: null,
    description:
      "Led development of XPay end-to-end — both the web platform and the Flutter mobile app — replacing fragmented, manual payment handling with one centralized system. Built real-time transaction tracking (pending/successful/failed), automated validation workflows, webhook-based integrations with internal business tools, and reporting dashboards for transaction volume and payment status — giving the business a single source of truth instead of manual reconciliation.",
  },
  {
    title: "KONECT Worksuite — Full-Stack CRM & Business Platform",
    tag: "Team Lead · MERN Stack",
    year: "2024 – Present",
    visual: "crm",
    src: null,
    description:
      "Leading development of KONECT Worksuite — an in-house, multi-module business platform covering CRM, Help Desk, Live Chat & Voice (SalesIQ), Email Campaigns, Project Management, Invoices, Workflows, and Analytics, built on the MERN stack. Designed to be leaner and more tightly integrated than existing multi-module SaaS platforms, targeting the Nigerian SME market first, priced in Naira, with a roadmap to expand across Africa and internationally.",
  },
  {
    title: "SecureLoan — Loan Processing & Risk Management System",
    tag: "Full-Stack · Lead Engineer",
    year: "2023",
    visual: "loan",
    src: null,
    description:
      "Designed and built SecureLoan to replace manual, spreadsheet-and-email-based loan processing with a centralized system — rule-based approval workflows, a borrower verification layer, end-to-end lifecycle tracking from application through disbursement to repayment, and dashboards for loan volume, approval rates, and risk indicators. Turned an inconsistent, error-prone process into one with standardized decisions and full visibility at every stage.",
  },
];

export default function MyPortfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
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
        }

        .project--visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
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

        .project--year {
          font-size: 12px;
          color: rgba(20,33,61,0.4);
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
          margin: 0;
          max-width: 560px;
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

        @media (max-width: 800px) {
          .portfolio--inner { padding: 0 24px; }
          .project--row {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 32px 0;
          }
          .project--visual { aspect-ratio: 16/9; }
        }

        @media (max-width: 480px) {
          #MyPortfolio { padding: 56px 0; }
          .portfolio--headline { margin-bottom: 32px; }
          .project--title { font-size: 17px; }
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
                <div className="project--visual">
                  {item.src ? (
                    <img src={item.src} alt={item.title} />
                  ) : (
                    <DashboardMock kind={item.visual} />
                  )}
                </div>
                <div>
                  <div className="project--meta--row">
                    <span className="project--tag">{item.tag}</span>
                    <span className="project--year">{item.year}</span>
                  </div>
                  <h3 className="project--title">{item.title}</h3>
                  <p className="project--desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
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