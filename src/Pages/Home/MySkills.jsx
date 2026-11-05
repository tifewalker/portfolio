import { useState } from "react";

const SERVICES = [
  {
    title: "AI Engineering and Agent Development",
    tech: [
      "LLM Integration",
      "AI Agents",
      "Knowledge Bases",
      "AWS Deployment",
      "Backend Workflows",
    ],
    description:
      "Building practical AI systems that do more than generate responses. I develop and integrate AI agents, connect them to business data and backend services, deploy models, and create workflows that can support real customer interactions. My experience includes deploying an AI agent that operates in production and handles customer conversations.",
  },
  {
    title: "CRM and Business Systems",
    tech: [
      "Zoho CRM Plus",
      "Zoho Desk",
      "SalesIQ",
      "Zoho Analytics",
      "Zoho Finance",
    ],
    description:
      "Implementing and improving business systems that help teams manage customers, sales, support and daily operations. From CRM configuration and ticketing workflows to customer communication, reporting and finance applications, I focus on making systems work around actual business processes.",
  },
  {
    title: "Workflow Automation",
    tech: [
      "Webhooks",
      "REST APIs",
      "Business Process Automation",
      "System Integration",
    ],
    description:
      "Reducing repetitive work by connecting applications and automating how information moves between them. I design workflows that handle data exchange, notifications, customer processes and operational handoffs, helping businesses spend less time on manual tasks.",
  },
  {
    title: "AI-Powered Applications",
    tech: [
      "LLM APIs",
      "Node.js",
      "React",
      "AI Integration",
      "Backend Services",
    ],
    description:
      "Integrating artificial intelligence into software products and business applications. This includes intelligent assistants, customer-facing AI features, information retrieval and automated processing, with the backend services and integrations needed to make these capabilities useful.",
  },
  {
    title: "Full-Stack and Application Development",
    tech: ["React", "Node.js", "TypeScript", "MongoDB", "SQL", "Flutter"],
    description:
      "Developing applications from the backend to the user interface. I work across application architecture, database design, server-side logic, API development and responsive interfaces to build software around specific operational and customer needs.",
  },
  {
    title: "API and Systems Integration",
    tech: ["REST", "GraphQL", "OAuth", "Webhooks", "Cloud Deployment"],
    description:
      "Making different software platforms communicate reliably. I build integrations that connect business applications, synchronise information, handle authentication and support dependable data exchange between internal systems and third-party services.",
  },
  {
    title: "Business Analysis and Solution Design",
    tech: [
      "Requirements Gathering",
      "Process Mapping",
      "BRD / FRD",
      "User Stories",
      "UAT",
    ],
    description:
      "Understanding the business problem before choosing or building a solution. I work with stakeholders to gather requirements, analyse existing processes, identify gaps, document functional expectations and translate business needs into practical technical deliverables.",
  },
  {
    title: "Contact Centre and Customer Experience Systems",
    tech: ["HoduCC", "SIP / VoIP", "Call Routing", "IVR", "Reporting"],
    description:
      "Configuring contact centre environments for customer support and sales operations. My experience includes call routing, agent and queue configuration, IVR workflows, campaign setup and reporting, alongside integrations with CRM and customer management platforms.",
  },
];

const CORE_TECHNOLOGIES = [
  "Zoho CRM Plus",
  "Node.js",
  "React",
  "REST APIs",
  "Webhooks",
  "MongoDB",
  "AWS",
  "AI Agent Development",
  "HoduCC",
  "TypeScript",
];

const STATS = [
  { value: "5+", label: "years of experience" },
  { value: "Production", label: "AI agent experience" },
  { value: "End to end", label: "application delivery" },
];

export default function MySkills() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=IBM+Plex+Sans:wght@400;500;600&display=swap');

        #mySkills {
          --ink: #0e1a2b;
          --muted: #566074;
          --paper: #f3f5f8;
          --line: #d5dbe5;
          --coral: #ff5a47;
          --navy: #16294a;
          background: #ffffff;
          padding: 100px 0;
          font-family: 'IBM Plex Sans', sans-serif;
          color: var(--ink);
          overflow: hidden;
        }

        #mySkills *,
        #mySkills *::before,
        #mySkills *::after { box-sizing: border-box; }

        #mySkills .skills--inner {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 48px;
        }

        /* Intro */
        #mySkills .skills--intro {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
          gap: 64px;
          align-items: end;
          margin-bottom: 64px;
        }

        #mySkills .skills--headline {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: clamp(36px, 5vw, 68px);
          line-height: 1;
          font-weight: 800;
          letter-spacing: -0.045em;
          margin: 0;
        }

        #mySkills .skills--lead {
          font-size: 16px;
          line-height: 1.75;
          color: var(--muted);
          margin: 0 0 14px;
          max-width: 440px;
        }

        #mySkills .skills--lead:last-child { margin-bottom: 0; }

        /* Accordion */
        #mySkills .skills--accordion {
          border-top: 2px solid var(--ink);
        }

        #mySkills .accordion--item {
          border-bottom: 1px solid var(--line);
        }

        #mySkills .accordion--item.open {
          background: var(--navy);
          border-bottom-color: var(--navy);
          color: #ffffff;
        }

        #mySkills .accordion--header {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 26px 24px;
          border: 0;
          background: transparent;
          color: inherit;
          text-align: left;
          font-family: inherit;
          cursor: pointer;
        }

        #mySkills .accordion--title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: clamp(20px, 2.4vw, 30px);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.2;
          transition: transform 0.25s ease;
        }

        #mySkills .accordion--header:hover .accordion--title {
          transform: translateX(6px);
        }

        #mySkills .accordion--toggle {
          position: relative;
          width: 22px;
          height: 22px;
          flex-shrink: 0;
        }

        #mySkills .accordion--toggle::before,
        #mySkills .accordion--toggle::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 2px;
          margin-top: -1px;
          background: currentColor;
          transition: transform 0.3s ease, background 0.2s ease;
        }

        #mySkills .accordion--toggle::after { transform: rotate(90deg); }

        #mySkills .accordion--item.open .accordion--toggle::before,
        #mySkills .accordion--item.open .accordion--toggle::after {
          background: var(--coral);
        }

        #mySkills .accordion--item.open .accordion--toggle::after {
          transform: rotate(0deg);
        }

        #mySkills .accordion--body {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.35s ease;
        }

        #mySkills .accordion--item.open .accordion--body {
          grid-template-rows: 1fr;
        }

        #mySkills .accordion--body--inner {
          min-height: 0;
          overflow: hidden;
          display: grid;
          grid-template-columns: minmax(0, 1.3fr) minmax(0, 0.7fr);
          gap: 48px;
          padding: 0 24px;
        }

        #mySkills .accordion--item.open .accordion--body--inner {
          padding-bottom: 34px;
        }

        #mySkills .accordion--description {
          font-size: 16px;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.82);
          margin: 0;
          max-width: 600px;
        }

        #mySkills .accordion--tech {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        #mySkills .accordion--tech li {
          font-size: 14px;
          font-weight: 500;
          padding: 9px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.18);
        }

        #mySkills .accordion--tech li:first-child {
          border-top: 1px solid rgba(255, 255, 255, 0.18);
        }

        /* Core stack */
        #mySkills .skills--stack {
          display: grid;
          grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
          gap: 64px;
          margin-top: 88px;
          align-items: start;
        }

        #mySkills .skills--stack--title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 28px;
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.15;
          margin: 0 0 24px;
        }

        #mySkills .skills--cta {
          display: inline-block;
          background: var(--coral);
          color: #ffffff;
          font-size: 15px;
          font-weight: 600;
          padding: 16px 28px;
          border-radius: 4px;
          border: 2px solid var(--coral);
          text-decoration: none;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        #mySkills .skills--cta:hover {
          background: #e84634;
          border-color: #e84634;
          transform: translateY(-2px);
        }

        #mySkills .skills--stack--list {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: clamp(22px, 2.6vw, 34px);
          font-weight: 500;
          line-height: 1.45;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin: 0;
        }

        /* Stats */
        #mySkills .skills--stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 88px;
          border-top: 2px solid var(--ink);
        }

        #mySkills .stat {
          padding: 28px 24px 0 0;
        }

        #mySkills .stat + .stat {
          padding-left: 28px;
          border-left: 1px solid var(--line);
        }

        #mySkills .stat--value {
          display: block;
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: clamp(30px, 4vw, 56px);
          font-weight: 800;
          letter-spacing: -0.045em;
          line-height: 1;
          margin-bottom: 10px;
        }

        #mySkills .stat--label {
          font-size: 15px;
          color: var(--muted);
        }

        #mySkills a:focus-visible,
        #mySkills .accordion--header:focus-visible {
          outline: 3px solid var(--coral);
          outline-offset: -3px;
        }

        #mySkills .skills--cta:focus-visible { outline-offset: 4px; }

        /* Tablet */
        @media (max-width: 900px) {
          #mySkills { padding: 76px 0; }
          #mySkills .skills--inner { padding: 0 28px; }

          #mySkills .skills--intro,
          #mySkills .skills--stack {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          #mySkills .skills--stack { margin-top: 64px; }

          #mySkills .accordion--body--inner {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          #mySkills .skills--stats { margin-top: 64px; }
        }

        /* Mobile */
        @media (max-width: 560px) {
          #mySkills { padding: 56px 0; }
          #mySkills .skills--inner { padding: 0 20px; }
          #mySkills .skills--intro { margin-bottom: 40px; }
          #mySkills .accordion--header { padding: 20px 16px; }
          #mySkills .accordion--body--inner { padding: 0 16px; }
          #mySkills .accordion--description { font-size: 15px; }
          #mySkills .skills--cta { display: block; text-align: center; }

          #mySkills .skills--stats { grid-template-columns: 1fr; }

          #mySkills .stat,
          #mySkills .stat + .stat {
            padding: 22px 0;
            border-left: 0;
            border-bottom: 1px solid var(--line);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #mySkills *,
          #mySkills *::before,
          #mySkills *::after {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <section id="mySkills" aria-labelledby="skills-heading">
        <div className="skills--inner">
          {/* Intro */}
          <div className="skills--intro">
            <h2 id="skills-heading" className="skills--headline">
              Business problems in, working systems out.
            </h2>

            <div>
              <p className="skills--lead">
                I work across the full process of building business
                technology, from understanding the problem and mapping
                workflows to developing, integrating and deploying
                practical solutions.
              </p>
              <p className="skills--lead">
                My experience spans CRM implementation, business
                applications, backend engineering, API integrations and
                AI-powered automation. I don't just recommend technology.
                I get involved in the technical work that makes it useful
                in real business environments.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="skills--accordion">
            {SERVICES.map((service, index) => {
              const isOpen = openIndex === index;
              const panelId = `skill-service-panel-${index}`;

              return (
                <div
                  key={service.title}
                  className={`accordion--item ${isOpen ? "open" : ""}`}
                >
                  <button
                    type="button"
                    className="accordion--header"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span className="accordion--title">{service.title}</span>
                    <span className="accordion--toggle" aria-hidden="true" />
                  </button>

                  <div
                    id={panelId}
                    className="accordion--body"
                    aria-hidden={!isOpen}
                    inert={!isOpen ? "" : undefined}
                  >
                    <div className="accordion--body--inner">
                      <p className="accordion--description">
                        {service.description}
                      </p>

                      <ul className="accordion--tech">
                        {service.tech.map((technology) => (
                          <li key={technology}>{technology}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Core stack */}
          <div className="skills--stack">
            <div>
              <h3 className="skills--stack--title">
                The tools I reach for most
              </h3>
              <a href="#Contact" className="skills--cta">
                Let's build something
              </a>
            </div>

            <p className="skills--stack--list">
              {CORE_TECHNOLOGIES.join(", ")}.
            </p>
          </div>

          {/* Stats */}
          <div className="skills--stats">
            {STATS.map((stat) => (
              <div className="stat" key={stat.label}>
                <span className="stat--value">{stat.value}</span>
                <span className="stat--label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}