import { useState, useEffect, useRef } from "react";

const SERVICES = [
  {
    number: "01",
    title: "CRM & Business Systems",
    tech: ["Zoho CRM Plus", "Zoho Desk", "SalesIQ", "Zoho Analytics"],
    description:
      "End-to-end CRM implementation — ticketing automation, live chat, departmental routing, and unified analytics dashboards that give teams real operational visibility.",
  },
  {
    number: "02",
    title: "Call Center Solutions",
    tech: ["HoduCC", "SIP/VoIP", "Call Routing", "Reporting"],
    description:
      "Full contact center setup — queues, agents, campaigns, and disposition frameworks, configured and tuned for real support and sales operations.",
  },
  {
    number: "03",
    title: "Workflow Automation",
    tech: ["Webhooks", "REST APIs", "Third-Party Integrations"],
    description:
      "Connecting systems so data moves on its own — automated handoffs between CRM, internal tools, and third-party platforms, removing manual re-entry.",
  },
  {
    number: "04",
    title: "Full-Stack Development",
    tech: ["React", "Node.js", "MongoDB", "TypeScript"],
    description:
      "Custom web applications built end-to-end with the MERN stack — from database design to polished, production-ready interfaces.",
  },
  {
    number: "05",
    title: "API & Systems Integration",
    tech: ["REST", "GraphQL", "OAuth", "Cloud Deployment"],
    description:
      "Linking the software you already use to the software you need — authentication, data sync, and integrations built to be reliable in production.",
  },
];

export default function MySkills() {
  const [openIndex, setOpenIndex] = useState(0);
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

        #mySkills {
          background: #f7f8fb;
          padding: 80px 0;
          font-family: 'Space Grotesk', sans-serif;
        }

        .skills--inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
          box-sizing: border-box;
        }

        /* Section label */
        .skills--eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 48px;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(16px)'};
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .skills--eyebrow--icon {
          width: 18px;
          height: 18px;
          border: 1px solid rgba(20,33,61,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skills--eyebrow--icon::after {
          content: '';
          width: 6px;
          height: 6px;
          background: #1f9d63;
          display: block;
        }

        .skills--eyebrow--text {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(20,33,61,0.5);
        }

        /* Two-column layout */
        .skills--layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }

        /* Left: Impact statement */
        .skills--statement {
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(24px)'};
          transition: opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s;
          position: sticky;
          top: 100px;
        }

        .skills--headline {
          font-size: clamp(28px, 3.6vw, 38px);
          font-weight: 700;
          line-height: 1.25;
          color: #14213d;
          margin: 0 0 20px;
        }

        .skills--headline span {
          color: #1f9d63;
        }

        .skills--lead {
          font-size: 15px;
          line-height: 1.8;
          color: #5b6270;
          margin: 0 0 36px;
          max-width: 400px;
        }

        /* Tech stack pills */
        .skills--stack--label {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(20,33,61,0.4);
          margin-bottom: 14px;
        }

        .skills--tech--pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 36px;
        }

        .tech--pill {
          font-size: 12px;
          font-weight: 500;
          color: #14213d;
          background: #ffffff;
          border: 1px solid rgba(20,33,61,0.12);
          padding: 5px 12px;
          transition: border-color 0.2s ease, color 0.2s ease;
        }

        .tech--pill:hover {
          border-color: #1f9d63;
          color: #1f9d63;
        }

        /* CTA */
        .skills--cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #1f9d63;
          color: #ffffff;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 600;
          padding: 13px 26px;
          border-radius: 40px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.15s ease;
        }

        .skills--cta:hover {
          background: #178a54;
          color: #ffffff;
          text-decoration: none;
          transform: translateY(-1px);
        }

        .skills--cta--arrow {
          font-size: 16px;
          line-height: 1;
        }

        /* Right: Accordion */
        .skills--accordion {
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(24px)'};
          transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;
        }

        .accordion--item {
          border-top: 1px solid rgba(20,33,61,0.1);
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .accordion--item:last-child {
          border-bottom: 1px solid rgba(20,33,61,0.1);
        }

        .accordion--header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 4px;
          gap: 16px;
        }

        .accordion--left {
          display: flex;
          align-items: center;
          gap: 18px;
          min-width: 0;
        }

        .accordion--number {
          font-size: 12px;
          font-weight: 600;
          color: rgba(20,33,61,0.3);
          min-width: 22px;
          flex-shrink: 0;
        }

        .accordion--title {
          font-size: 16px;
          font-weight: 600;
          color: #14213d;
          transition: color 0.2s ease;
          letter-spacing: 0.01em;
        }

        .accordion--item.open .accordion--title {
          color: #1f9d63;
        }

        .accordion--toggle {
          width: 26px;
          height: 26px;
          border: 1px solid rgba(20,33,61,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
          font-size: 16px;
          color: rgba(20,33,61,0.5);
          line-height: 1;
        }

        .accordion--item.open .accordion--toggle {
          background: #1f9d63;
          border-color: #1f9d63;
          color: #ffffff;
        }

        .accordion--body {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease, padding 0.35s ease;
          padding: 0 4px 0 40px;
        }

        .accordion--item.open .accordion--body {
          max-height: 220px;
          padding: 0 4px 22px 40px;
        }

        .accordion--description {
          font-size: 14px;
          line-height: 1.75;
          color: #5b6270;
          margin: 0 0 14px;
          max-width: 440px;
        }

        .accordion--tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .accordion--tag {
          font-size: 11px;
          font-weight: 600;
          color: #1f9d63;
          background: rgba(31,157,99,0.08);
          border: 1px solid rgba(31,157,99,0.2);
          padding: 3px 10px;
        }

        /* Bottom stats strip */
        .skills--stats--strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(20,33,61,0.08);
          margin-top: 64px;
          border-radius: 12px;
          overflow: hidden;
          opacity: ${isVisible ? 1 : 0};
          transition: opacity 0.8s ease 0.4s;
        }

        .strip--stat {
          background: #ffffff;
          padding: 28px 24px;
          text-align: center;
        }

        .strip--number {
          font-size: 34px;
          font-weight: 700;
          color: #1f9d63;
          line-height: 1;
          display: block;
        }

        .strip--label {
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(20,33,61,0.45);
          margin-top: 8px;
          display: block;
        }

        /* Tablet */
        @media (max-width: 900px) {
          .skills--layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .skills--statement {
            position: static;
          }
          .skills--inner {
            padding: 0 32px;
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          #mySkills {
            padding: 56px 0;
          }
          .skills--inner {
            padding: 0 20px;
          }
          .skills--eyebrow {
            margin-bottom: 32px;
          }
          .skills--headline {
            font-size: 26px;
          }
          .skills--lead {
            max-width: 100%;
          }
          .skills--cta {
            width: 100%;
            justify-content: center;
          }
          .accordion--title {
            font-size: 14px;
          }
          .accordion--body {
            padding-left: 0;
          }
          .accordion--item.open .accordion--body {
            padding-left: 0;
          }
          .accordion--description {
            max-width: 100%;
          }
          .skills--stats--strip {
            grid-template-columns: 1fr;
          }
          .strip--number {
            font-size: 28px;
          }
        }
      `}</style>

      <section id="mySkills" ref={sectionRef}>
        <div className="skills--inner">

          {/* Eyebrow */}
          <div className="skills--eyebrow">
            <div className="skills--eyebrow--icon"></div>
            <span className="skills--eyebrow--text">What I Do</span>
          </div>

          <div className="skills--layout">

            {/* Left: Statement */}
            <div className="skills--statement">
              <h2 className="skills--headline">
                Building systems that <span>run the business</span>, not just the interface
              </h2>
              <p className="skills--lead">
                From CRM and call center platforms to custom full-stack applications —
                I design and implement the systems businesses actually run on, then
                connect them so they work together.
              </p>

              <p className="skills--stack--label">Core Technologies</p>
              <div className="skills--tech--pills">
                {["Zoho CRM Plus", "HoduCC", "React", "Node.js", "MongoDB", "Webhooks", "TypeScript"].map(t => (
                  <span key={t} className="tech--pill">{t}</span>
                ))}
              </div>

              <a href="#Contact" className="skills--cta">
                Start a Project
                <span className="skills--cta--arrow">↗</span>
              </a>
            </div>

            {/* Right: Accordion */}
            <div className="skills--accordion">
              {SERVICES.map((service, index) => (
                <div
                  key={index}
                  className={`accordion--item ${openIndex === index ? "open" : ""}`}
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  <div className="accordion--header">
                    <div className="accordion--left">
                      <span className="accordion--number">{service.number}</span>
                      <span className="accordion--title">{service.title}</span>
                    </div>
                    <div className="accordion--toggle">
                      {openIndex === index ? "−" : "+"}
                    </div>
                  </div>
                  <div className="accordion--body">
                    <p className="accordion--description">{service.description}</p>
                    <div className="accordion--tags">
                      {service.tech.map(t => (
                        <span key={t} className="accordion--tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Stats strip */}
          <div className="skills--stats--strip">
            <div className="strip--stat">
              <span className="strip--number">20+</span>
              <span className="strip--label">Projects Delivered</span>
            </div>
            <div className="strip--stat">
              <span className="strip--number">30+</span>
              <span className="strip--label">Clients Served</span>
            </div>
            <div className="strip--stat">
              <span className="strip--number">3+</span>
              <span className="strip--label">Years Experience</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}