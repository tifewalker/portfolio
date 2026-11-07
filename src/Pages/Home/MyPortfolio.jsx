import { useState, useEffect, useRef } from "react";
import { scroller } from "react-scroll";
import { responsive, thumbnail } from "../../utils/images";

/*
  Case study content.
  Each section has a title and a list of blocks:
    - a string renders as a paragraph
    - an array of strings renders as a ruled list
    - { items: [{ title, text }] } renders as titled entries
*/
const CASE_STUDIES = {
  crm: {
    headline:
      "Unifying customer communication through an omnichannel CRM platform",
    meta: [
      ["Industry", "Financial services"],
      [
        "Project type",
        "CRM implementation, customer experience, systems integration",
      ],
      ["Platform", "Zoho CRM Plus"],
      ["My role", "Business analyst and application implementation specialist"],
    ],
    stats: [
      { value: "5", label: "communication channels integrated" },
      { value: "3", label: "departments or teams supported" },
      { value: "10,000", label: "customer interactions a month, approximately" },
      { value: "5", label: "applications consolidated" },
    ],
    sections: [
      {
        title: "The challenge",
        blocks: [
          "A financial services organisation was managing customer interactions across multiple communication channels and internal departments. Customer conversations were spread across separate platforms, making it difficult for support teams to maintain context, track enquiries, and provide consistent service.",
          "The fragmented setup created several operational challenges:",
          [
            "Customer conversations were distributed across different communication channels.",
            "Teams had limited visibility into customer interaction history.",
            "Enquiries needed to reach the appropriate departments, creating coordination challenges.",
            "Monitoring response times and service-level performance was difficult.",
            "Reporting across communication channels and departments lacked a unified view.",
            "Managing customer interactions across multiple applications increased operational complexity.",
          ],
          "The organisation needed a centralised customer engagement environment that would bring communication channels, customer information, and support operations together.",
        ],
      },
      {
        title: "My approach",
        blocks: [
          "I approached the implementation by first understanding how customer interactions moved through the organisation.",
          "This involved analysing existing communication processes, identifying the teams responsible for handling enquiries, understanding departmental responsibilities, and defining how conversations should be assigned, tracked, and resolved.",
          "I then translated these operational requirements into a solution using Zoho CRM Plus. The implementation focused on:",
          [
            "Mapping customer communication workflows across channels.",
            "Defining departmental routing and responsibility structures.",
            "Establishing how customer records and interaction histories should be managed.",
            "Identifying integration requirements between communication platforms and CRM.",
            "Configuring service-level workflows and reporting requirements.",
            "Supporting implementation, testing, and process validation.",
          ],
        ],
      },
      {
        title: "The solution",
        blocks: [
          "I worked on delivering a unified customer-service platform using Zoho CRM Plus, integrating five communication channels into a centralised customer engagement environment. The solution included:",
          {
            items: [
              {
                title: "Centralised customer communication",
                text: "Integrated customer communication channels, including WhatsApp, social media, live chat, and email, into a more unified support environment.",
              },
              {
                title: "Automated departmental routing",
                text: "Implemented routing workflows to direct customer enquiries to the appropriate departments and support teams based on operational requirements.",
              },
              {
                title: "CRM and customer interaction management",
                text: "Enabled teams to manage customer information and interactions within a more structured environment, improving visibility across customer conversations.",
              },
              {
                title: "Service-level management",
                text: "Configured SLA policies and related workflows to support response-time monitoring and more consistent service delivery.",
              },
              {
                title: "Integration and data flow",
                text: "Worked with integration mechanisms, including webhooks, to support communication between connected systems.",
              },
              {
                title: "Reporting and performance visibility",
                text: "Implemented reporting and analytics capabilities to help monitor customer interactions, channel activity, and departmental support performance.",
              },
            ],
          },
        ],
      },
    ],
    result: [
      "The implementation established a more centralised customer-service operation, bringing communication channels and departmental workflows into a connected environment.",
      "Teams gained a more structured way to manage customer conversations, route enquiries, monitor service performance, and access customer interaction information.",
      "The project demonstrated how CRM implementation and systems integration can help financial services organisations improve customer engagement while simplifying fragmented support operations.",
    ],
    skills: [
      "Zoho CRM Plus",
      "Omnichannel Integration",
      "Business Analysis",
      "Workflow Automation",
      "Webhooks",
      "Customer Experience Systems",
      "SLA Management",
      "Requirements Documentation",
      "System Implementation",
    ],
  },

  callcentre: {
    headline:
      "Connecting call centre operations with CRM for a microfinance bank",
    meta: [
      ["Industry", "Financial services, microfinance"],
      [
        "Project type",
        "CRM implementation, contact centre integration, workflow improvement",
      ],
      ["Platforms", "Zoho CRM Plus, HoduCC"],
      ["My role", "Business analyst and application implementation specialist"],
    ],
    stats: [
      { value: "10", label: "call centre agents supported" },
      { value: "10", label: "call centre seats configured" },
      { value: "2", label: "core platforms integrated: Zoho CRM Plus and HoduCC" },
    ],
    sections: [
      {
        title: "The challenge",
        blocks: [
          "A microfinance bank needed a more connected approach to managing customer relationships and call centre operations. Its customer management activities and telephone support operations needed better integration. Without a unified workflow, agents had limited ability to connect customer records with call activities and maintain a consistent view of customer interactions.",
          "The key challenges included:",
          [
            "Separating customer relationship information from call centre activities.",
            "Limited integration between customer records and telephone interactions.",
            "The need for a more structured approach to inbound customer calls.",
            "Difficulty maintaining consistent customer context during support interactions.",
            "The need for better visibility into call centre activities and agent operations.",
          ],
          "The organisation needed a solution that connected its CRM environment with its contact centre infrastructure.",
        ],
      },
      {
        title: "My approach",
        blocks: [
          "I approached the project by examining how agents handled customer calls and how customer information was managed within the existing business systems.",
          "The objective was to connect the call centre workflow with the CRM environment so that customer-facing teams could work with more relevant information during interactions. The implementation involved:",
          [
            "Understanding the bank's customer support and call-handling processes.",
            "Identifying the integration requirements between the CRM and contact centre.",
            "Mapping how inbound calls should be handled through the IVR and call centre.",
            "Defining how call activities should connect with customer records.",
            "Supporting the configuration and validation of the integrated solution.",
          ],
        ],
      },
      {
        title: "The solution",
        blocks: [
          "I worked on implementing an integrated customer relationship and call centre environment using Zoho CRM Plus and HoduCC. The solution brought customer management and telephone support operations closer together.",
          {
            items: [
              {
                title: "CRM implementation",
                text: "Configured Zoho CRM Plus to provide a structured environment for managing customer information and relationship activities.",
              },
              {
                title: "Contact centre integration",
                text: "Integrated HoduCC call centre operations with the CRM environment, connecting telephone support activities with customer management workflows.",
              },
              {
                title: "IVR and call handling",
                text: "Supported the implementation of IVR and call-handling workflows to organise inbound customer calls and improve how enquiries reached support agents.",
              },
              {
                title: "CRM-connected calling",
                text: "Connected call centre activity with CRM processes, helping agents work with customer information as part of their support interactions.",
              },
              {
                title: "Agent and operational support",
                text: "Supported the setup of the contact centre environment for a team of 10 agents across 10 call centre seats.",
              },
            ],
          },
        ],
      },
    ],
    result: [
      "The implementation connected customer relationship management with call centre operations, providing a more coordinated environment for customer support.",
      "Agents could work within a more connected process for handling calls and customer information, while the organisation gained a structured foundation for managing customer interactions across its CRM and contact centre systems.",
    ],
    skills: [
      "Zoho CRM Plus",
      "HoduCC",
      "Contact Centre Integration",
      "IVR",
      "CRM Implementation",
      "Systems Integration",
      "Business Process Analysis",
      "Customer Support Operations",
      "Requirements Gathering",
      "Application Support",
    ],
  },
};

// Main project data
const PROJECTS = [
  {
    title: "A Nigerian Financial Services Company: Unified CRM and Support",
    tag: "CRM and automation",
    src: "/img/optimized/zohocrmplus.webp",
    link: null,
    caseStudy: "crm",
    description:
      "Unified social media, WhatsApp, live chat, and email into one Zoho CRM Plus system, with automated departmental routing, webhook integrations, and a single cross-channel analytics dashboard replacing what used to be a fragmented, multi-app workflow.",
  },
  {
    title: "A Nigerian Microfinance Bank: CRM and Call Center Setup",
    tag: "Call center and CRM",
    src: "/img/optimized/incoming-call-crm.webp",
    link: null,
    caseStudy: "callcentre",
    description:
      "Implemented Zoho CRM Plus alongside a full HoduCC call center setup, including IVR configuration, and connected the call center directly into CRM Plus, so agents handle calls from within the same CRM instead of switching between separate systems.",
  },
  {
    title: "XPay: Payment and Transaction Management System",
    tag: "Lead engineer, web and mobile",
    src: "/img/optimized/xpay.webp",
    link: "https://app.xpay.ng/",
    playStoreLink: null,
    description:
      "Led development of XPay end to end, covering both the web platform and the Flutter mobile app, replacing fragmented, manual payment handling with one centralized system. Built real-time transaction tracking (pending, successful, failed), automated validation workflows, webhook-based integrations with internal business tools, and reporting dashboards for transaction volume and payment status, giving the business a single source of truth instead of manual reconciliation.",
  },
  {
    title: "KONECT Worksuite: Full-Stack CRM and Business Platform",
    tag: "Founder, MERN stack",
    src: "/img/optimized/konect.webp",
    link: "https://konectworksuite.com/",
    description:
      "Founded and built KONECT Worksuite from the ground up. It is a multi-module business platform covering CRM, Help Desk, Live Chat and Voice (SalesIQ), Email Campaigns, Project Management, Invoices, Workflows, and Analytics, built on the MERN stack. Designed to be leaner and more tightly integrated than existing multi-module SaaS platforms, targeting the Nigerian SME market first, priced in Naira, with a roadmap to expand across Africa and internationally.",
  },
  {
    title: "SecureLoan: Loan Processing and Risk Management System",
    tag: "Full stack, lead engineer",
    src: "/img/optimized/secureloan.webp",
    link: "https://secure-loan-web.onrender.com/",
    description:
      "Designed and built SecureLoan to replace manual, spreadsheet-and-email-based loan processing with a centralized system: rule-based approval workflows, a borrower verification layer, end-to-end lifecycle tracking from application through disbursement to repayment, and dashboards for loan volume, approval rates, and risk indicators. It turned an inconsistent, error-prone process into one with standardized decisions and full visibility at every stage.",
  },
];

// Website projects (horizontal scroll strip)
const WEBSITE_PROJECTS = [
  {
    title: "Gate Gold Fitness",
    src: "/img/optimized/gategold.webp",
    link: "https://gategoldfitness.com",
  },
  {
    title: "Creastech",
    src: "/img/optimized/creastech.webp",
    link: "https://creastech.com/",
  },
  {
    title: "Frictionless Lubricants",
    src: "/img/optimized/frictionless.webp",
    link: "https://frictionlesslubricants.com/",
  },
  {
    title: "JoMabel Healthcare Foundation",
    src: "/img/optimized/jomabel.webp",
    link: "https://jomabelhf.org/",
  },
];

function CaseBlock({ block }) {
  if (typeof block === "string") {
    return <p className="cs--p">{block}</p>;
  }

  if (Array.isArray(block)) {
    return (
      <ul className="cs--list">
        {block.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    );
  }

  return (
    <div className="cs--entries">
      {block.items.map((item) => (
        <div className="cs--entry" key={item.title}>
          <h4>{item.title}</h4>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default function MyPortfolio() {
  const [lightbox, setLightbox] = useState(null);
  const [caseKey, setCaseKey] = useState(null);
  const closeRef = useRef(null);
  const triggerRef = useRef(null);

  const activeCase = caseKey ? CASE_STUDIES[caseKey] : null;

  const closeCase = () => {
    setCaseKey(null);
    if (triggerRef.current) triggerRef.current.focus();
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setLightbox(null);
        if (caseKey) closeCase();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [caseKey]);

  // Lock page scroll while the case study is open
  useEffect(() => {
    if (!caseKey) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    if (closeRef.current) closeRef.current.focus();

    return () => {
      document.body.style.overflow = previous;
    };
  }, [caseKey]);

  const goToContact = () => {
    setCaseKey(null);
    setTimeout(() => {
      scroller.scrollTo("Contact", {
        smooth: true,
        offset: -70,
        duration: 500,
      });
    }, 50);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=IBM+Plex+Sans:wght@400;500;600&display=swap');

        #MyPortfolio,
        .pf--lightbox,
        .pf--cs {
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
        .pf--lightbox *::after,
        .pf--cs *,
        .pf--cs *::before,
        .pf--cs *::after { box-sizing: border-box; }

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
          max-width: 420px;
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
        .pf--lightbox .pf--btn,
        .pf--cs .pf--btn {
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
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        #MyPortfolio .pf--btn:hover,
        .pf--lightbox .pf--btn:hover,
        .pf--cs .pf--btn:hover {
          background: #e84634;
          border-color: #e84634;
          color: #ffffff;
          transform: translateY(-2px);
        }

        #MyPortfolio .pf--btn--ghost {
          color: var(--ink);
          background: transparent;
          border-color: var(--ink);
        }

        #MyPortfolio .pf--btn--ghost:hover {
          background: var(--ink);
          border-color: var(--ink);
          color: #ffffff;
        }

        #MyPortfolio .pf--private {
          font-size: 14px;
          color: var(--muted);
          margin: 0;
        }

        #MyPortfolio .pf--visual:focus-visible,
        #MyPortfolio .pf--site:focus-visible,
        #MyPortfolio a:focus-visible,
        #MyPortfolio button:focus-visible,
        .pf--lightbox a:focus-visible,
        .pf--lightbox button:focus-visible,
        .pf--cs a:focus-visible,
        .pf--cs button:focus-visible {
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

        /* Case study reader */
        .pf--cs {
          position: fixed;
          inset: 0;
          z-index: 1100;
          overflow-y: auto;
          background: var(--paper);
          color: var(--ink);
        }

        .pf--cs--bar {
          position: sticky;
          top: 0;
          z-index: 2;
          background: var(--paper);
          border-bottom: 1px solid var(--line);
        }

        .pf--cs--bar--inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 16px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .pf--cs--bar--label {
          font-size: 15px;
          font-weight: 600;
          color: var(--coral);
          margin: 0;
        }

        .pf--cs--close {
          font-family: inherit;
          font-size: 15px;
          font-weight: 600;
          color: var(--ink);
          background: transparent;
          border: 2px solid var(--ink);
          border-radius: 4px;
          padding: 9px 18px;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .pf--cs--close:hover {
          background: var(--ink);
          color: #ffffff;
        }

        .pf--cs--inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 64px 48px 96px;
        }

        .pf--cs--headline {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: clamp(34px, 5.2vw, 70px);
          line-height: 1;
          font-weight: 800;
          letter-spacing: -0.045em;
          max-width: 900px;
          margin: 0 0 56px;
        }

        .pf--cs--meta {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 28px;
          margin: 0 0 56px;
          padding: 24px 0 0;
          border-top: 2px solid var(--ink);
        }

        .pf--cs--meta dt {
          font-size: 14px;
          color: var(--muted);
          margin-bottom: 6px;
        }

        .pf--cs--meta dd {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
        }

        .pf--cs--stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
          margin-bottom: 24px;
          border-top: 1px solid var(--line);
        }

        .pf--cs--stat {
          padding: 28px 24px 8px 0;
        }

        .pf--cs--stat + .pf--cs--stat {
          padding-left: 24px;
          border-left: 1px solid var(--line);
        }

        .pf--cs--stat strong {
          display: block;
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 800;
          letter-spacing: -0.045em;
          line-height: 1;
          margin-bottom: 10px;
        }

        .pf--cs--stat span {
          font-size: 15px;
          line-height: 1.45;
          color: var(--muted);
        }

        .pf--cs--section {
          display: grid;
          grid-template-columns: 240px minmax(0, 1fr);
          gap: 56px;
          padding: 56px 0;
          border-top: 1px solid var(--line);
        }

        .pf--cs--section h3 {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 26px;
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin: 0;
        }

        .pf--cs .cs--p {
          font-size: 17px;
          line-height: 1.75;
          color: #2b3648;
          margin: 0 0 20px;
          max-width: 680px;
        }

        .pf--cs .cs--list {
          list-style: none;
          margin: 0 0 24px;
          padding: 0;
          max-width: 680px;
          border-top: 1px solid var(--line);
        }

        .pf--cs .cs--list li {
          font-size: 16px;
          line-height: 1.6;
          color: #2b3648;
          padding: 13px 0;
          border-bottom: 1px solid var(--line);
        }

        .pf--cs .cs--entries {
          max-width: 680px;
          border-top: 1px solid var(--line);
        }

        .pf--cs .cs--entry {
          padding: 22px 0;
          border-bottom: 1px solid var(--line);
        }

        .pf--cs .cs--entry h4 {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 20px;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin: 0 0 8px;
        }

        .pf--cs .cs--entry p {
          font-size: 16px;
          line-height: 1.7;
          color: var(--muted);
          margin: 0;
        }

        .pf--cs--result {
          background: var(--navy);
          color: #ffffff;
          border-radius: 4px;
          padding: 48px;
          display: grid;
          grid-template-columns: 240px minmax(0, 1fr);
          gap: 56px;
          margin-top: 24px;
        }

        .pf--cs--result h3 {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 26px;
          font-weight: 800;
          letter-spacing: -0.03em;
          margin: 0;
        }

        .pf--cs--result p {
          font-size: 18px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.88);
          margin: 0 0 18px;
          max-width: 680px;
        }

        .pf--cs--result p:last-child { margin-bottom: 0; }

        .pf--cs--skills {
          margin-top: 64px;
        }

        .pf--cs--skills h3 {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 26px;
          font-weight: 800;
          letter-spacing: -0.03em;
          margin: 0 0 18px;
        }

        .pf--cs--skills p {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: clamp(20px, 2.4vw, 30px);
          font-weight: 500;
          line-height: 1.45;
          letter-spacing: -0.02em;
          margin: 0;
          max-width: 900px;
        }

        .pf--cs--actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 18px;
          margin-top: 56px;
        }

        .pf--cs--back {
          font-family: inherit;
          font-size: 15px;
          font-weight: 600;
          color: var(--ink);
          background: transparent;
          border: 0;
          border-bottom: 2px solid var(--coral);
          padding: 8px 2px;
          cursor: pointer;
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
          }

          #MyPortfolio .pf--sites { margin-top: 80px; }

          .pf--cs--bar--inner { padding: 14px 28px; }
          .pf--cs--inner { padding: 48px 28px 72px; }
          .pf--cs--meta { grid-template-columns: repeat(2, minmax(0, 1fr)); }

          .pf--cs--section,
          .pf--cs--result {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .pf--cs--section { padding: 44px 0; }
          .pf--cs--result { padding: 36px 28px; }
        }

        /* Mobile */
        @media (max-width: 520px) {
          #MyPortfolio { padding: 56px 0; }
          #MyPortfolio .pf--inner { padding: 0 20px; }
          #MyPortfolio .pf--desc { font-size: 15px; }

          #MyPortfolio .pf--links { flex-direction: column; align-items: stretch; }
          #MyPortfolio .pf--btn { display: block; text-align: center; width: 100%; }
          #MyPortfolio .pf--private { text-align: center; }
          #MyPortfolio .pf--site { width: 240px; }

          .pf--lightbox { padding: 68px 16px 24px; }
          .pf--lightbox--close { right: 16px; }

          .pf--cs--bar--inner { padding: 12px 20px; }
          .pf--cs--inner { padding: 36px 20px 60px; }
          .pf--cs--meta { grid-template-columns: 1fr; gap: 20px; }
          .pf--cs--stats { grid-template-columns: 1fr 1fr; }

          .pf--cs--stat,
          .pf--cs--stat + .pf--cs--stat {
            padding: 22px 12px 8px 0;
            border-left: 0;
          }

          .pf--cs .cs--p { font-size: 16px; }
          .pf--cs--result p { font-size: 16px; }
          .pf--cs--actions { flex-direction: column; align-items: stretch; }
          .pf--cs .pf--btn { display: block; text-align: center; }
          .pf--cs--back { text-align: center; }
        }

        @media (prefers-reduced-motion: reduce) {
          #MyPortfolio *,
          .pf--lightbox *,
          .pf--cs * {
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
              platforms. Open a case study to see how the work was done, or
              click any image to see it larger.
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
                      {...responsive(
                        item.src,
                        "(max-width: 900px) 100vw, 640px"
                      )}
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
                    {item.caseStudy && (
                      <button
                        type="button"
                        className="pf--btn"
                        onClick={(e) => {
                          triggerRef.current = e.currentTarget;
                          setCaseKey(item.caseStudy);
                        }}
                      >
                        Read the case study
                      </button>
                    )}

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="pf--btn pf--btn--ghost"
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
                        Private client work, so there is no public link.
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
                      src={thumbnail(site.src)}
                      alt=""
                      width={responsive(site.src).width}
                      height={responsive(site.src).height}
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

      {/* Case study reader */}
      {activeCase && (
        <div
          className="pf--cs"
          role="dialog"
          aria-modal="true"
          aria-label={activeCase.headline}
        >
          <div className="pf--cs--bar">
            <div className="pf--cs--bar--inner">
              <p className="pf--cs--bar--label">Case study</p>

              <button
                type="button"
                ref={closeRef}
                className="pf--cs--close"
                onClick={closeCase}
              >
                Close
              </button>
            </div>
          </div>

          <div className="pf--cs--inner">
            <h2 className="pf--cs--headline">{activeCase.headline}</h2>

            <dl className="pf--cs--meta">
              {activeCase.meta.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>

            <div className="pf--cs--stats">
              {activeCase.stats.map((stat) => (
                <div className="pf--cs--stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>

            {activeCase.sections.map((section) => (
              <section className="pf--cs--section" key={section.title}>
                <h3>{section.title}</h3>

                <div>
                  {section.blocks.map((block, index) => (
                    <CaseBlock block={block} key={index} />
                  ))}
                </div>
              </section>
            ))}

            <section className="pf--cs--result">
              <h3>The result</h3>

              <div>
                {activeCase.result.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <div className="pf--cs--skills">
              <h3>Key skills demonstrated</h3>
              <p>{activeCase.skills.join(", ")}.</p>
            </div>

            <div className="pf--cs--actions">
              <button type="button" className="pf--btn" onClick={goToContact}>
                Discuss a similar project
              </button>

              <button type="button" className="pf--cs--back" onClick={closeCase}>
                Back to my work
              </button>
            </div>
          </div>
        </div>
      )}

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