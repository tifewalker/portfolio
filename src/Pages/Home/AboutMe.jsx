import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const EXPERIENCE = [
  {
    role: "Application Engineer",
    company: "Creastech Limited",
    location: "Lagos, Nigeria",
    period: "Jan 2024 – Present",
    current: true,
    points: [
      "Built 5+ React/Next.js apps with 40% faster load times",
      "Developed 10+ WordPress sites for retail, education & healthcare clients",
      "Implemented Zoho CRM automation, reducing manual data entry by 40%",
      "Managed Linux servers, VMware/Hyper-V environments for 50+ users",
      "Configured Synology NAS & Veeam backup; optimised SQL queries by 60%",
    ],
  },
  {
    role: "Freelance WordPress & Frontend Developer",
    company: "Self-employed",
    location: "Remote",
    period: "Jun 2022 – Present",
    current: true,
    points: [
      "Delivered 20+ custom WordPress and React websites for SMEs",
      "Integrated payment gateways, analytics & CRM APIs for clients",
      "Maintained 98% uptime through ongoing support & optimisation",
    ],
  },
  {
    role: "Web Designer & Blogger",
    company: "A-Tech Solution",
    location: "Ikeja, Lagos",
    period: "Jan 2022 – Jul 2022",
    current: false,
    points: [
      "Built SEO-optimised business websites, increasing organic traffic by 45%",
      "Created blog content attracting 5,000+ monthly visitors",
    ],
  },
  {
    role: "Computer Instructor",
    company: "Hoptec Services",
    location: "Lagos, Nigeria",
    period: "Nov 2021 – Mar 2022",
    current: false,
    points: [
      "Trained 200+ students in Microsoft Office & IT fundamentals",
      "85% of students achieved proficiency certification",
    ],
  },
];
const EDUCATION = [
  {
    degree: "BSc Software Engineering (Ongoing)",
    school: "Miva Open University",
    year: "2027",
    badge: "In Progress"
  },
  {
    degree: "HND Computer Science",
    school: "Lagos State Polytechnic",
    year: "2023",
    badge: "HND"
  },
  {
    degree: "SSCE — WAEC",
    school: "Government Christian Secondary School",
    year: "2018",
    badge: "SSCE"
  },
];

export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("experience");
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
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@300;400;500;600&display=swap');

        #AboutMe {
          background: #0d0d0b;
          padding: 100px 0;
          font-family: 'Space Grotesk', sans-serif;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .about--inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
          box-sizing: border-box;
        }

        /* Eyebrow */
        .about--eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 64px;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(16px)'};
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .about--eyebrow--icon {
          width: 20px;
          height: 20px;
          border: 1px solid rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about--eyebrow--icon::after {
          content: '';
          width: 6px;
          height: 6px;
          background: #f0c830;
          display: block;
        }

        .about--eyebrow--text {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }

        /* Main two-column grid */
        .about--grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 72px;
          align-items: start;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(24px)'};
          transition: opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s;
        }

        /* ── LEFT COLUMN ── */

        .about--headline {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(38px, 4.5vw, 56px);
          line-height: 1.0;
          letter-spacing: 0.03em;
          color: #ffffff;
          margin: 0 0 8px;
        }

        .about--subheadline {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(28px, 3vw, 40px);
          line-height: 1.0;
          letter-spacing: 0.03em;
          color: #f0c830;
          margin: 0 0 28px;
        }

        .about--bio {
          font-size: 15px;
          line-height: 1.85;
          color: rgba(255,255,255,0.55);
          margin: 0 0 40px;
          max-width: 560px;
        }

        /* Resume button */
        .about--resume--btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #f0c830;
          color: #0d0d0b;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 12px 22px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
          box-sizing: border-box;
          transition: background 0.2s ease;
          margin-bottom: 52px;
        }

        .about--resume--btn:hover {
          background: #f7d84a;
          color: #0d0d0b;
          text-decoration: none;
        }

        /* Section toggle tabs */
        .about--tabs {
          display: flex;
          gap: 0;
          margin-bottom: 36px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .about--tab {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          padding: 10px 20px 10px 0;
          margin-right: 24px;
          cursor: pointer;
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          margin-bottom: -1px;
          transition: color 0.2s ease, border-color 0.2s ease;
        }

        .about--tab.active {
          color: #f0c830;
          border-bottom-color: #f0c830;
        }

        /* Timeline */
        .timeline {
          position: relative;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 7px;
          top: 8px;
          bottom: 8px;
          width: 1px;
          background: rgba(255,255,255,0.08);
        }

        .timeline--entry {
          display: flex;
          gap: 24px;
          margin-bottom: 36px;
          position: relative;
        }

        .timeline--entry:last-child {
          margin-bottom: 0;
        }

        .timeline--dot {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.15);
          background: #0d0d0b;
          flex-shrink: 0;
          margin-top: 4px;
          position: relative;
          z-index: 1;
          transition: border-color 0.2s ease;
        }

        .timeline--entry.current .timeline--dot {
          border-color: #f0c830;
          background: #f0c830;
          box-shadow: 0 0 0 3px rgba(240,200,48,0.15);
        }

        .timeline--body {
          flex: 1;
          padding-bottom: 4px;
        }

        .timeline--role {
          font-size: 16px;
          font-weight: 500;
          color: #ffffff;
          margin: 0 0 4px;
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .current--badge {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #f0c830;
          background: rgba(240,200,48,0.1);
          border: 1px solid rgba(240,200,48,0.25);
          padding: 2px 8px;
        }

        .timeline--meta {
          font-size: 13px;
          color: rgba(255,255,255,0.35);
          margin: 0 0 12px;
        }

        .timeline--meta span {
          color: rgba(255,255,255,0.5);
        }

        .timeline--points {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .timeline--points li {
          font-size: 13px;
          line-height: 1.7;
          color: rgba(255,255,255,0.45);
          padding-left: 14px;
          position: relative;
          margin-bottom: 4px;
        }

        .timeline--points li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: rgba(255,255,255,0.2);
        }

        /* Education cards */
        .edu--list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .edu--card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          border: 1px solid rgba(255,255,255,0.07);
          transition: border-color 0.2s ease;
        }

        .edu--card:hover {
          border-color: rgba(240,200,48,0.2);
        }

        .edu--left {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .edu--degree {
          font-size: 14px;
          font-weight: 500;
          color: rgba(255,255,255,0.8);
        }

        .edu--school {
          font-size: 12px;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.04em;
        }

        .edu--right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
        }

        .edu--year {
          font-size: 12px;
          color: rgba(255,255,255,0.3);
        }

        .edu--badge {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #f0c830;
          background: rgba(240,200,48,0.08);
          border: 1px solid rgba(240,200,48,0.2);
          padding: 2px 8px;
        }

        /* ── RIGHT COLUMN (Sidebar) ── */

        .about--sidebar {
          position: sticky;
          top: 90px;
        }

        .about--photo--frame {
          width: 100%;
          aspect-ratio: 3/4;
          overflow: hidden;
          background: #1a1a14;
          margin-bottom: 24px;
          position: relative;
        }

        .about--photo--frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }

        .about--name--tag {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(13,13,11,0.88);
          padding: 14px 16px;
          backdrop-filter: blur(4px);
        }

        .about--name--tag h3 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: #ffffff;
          margin: 0 0 2px;
        }

        .about--name--tag p {
          font-size: 12px;
          color: rgba(255,255,255,0.4);
          margin: 0;
          letter-spacing: 0.04em;
        }

        /* Contact details */
        .about--contact--list {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-bottom: 20px;
          border: 1px solid rgba(255,255,255,0.07);
        }

        .contact--row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 11px 16px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .contact--row:last-child {
          border-bottom: none;
        }

        .contact--key {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }

        .contact--val {
          font-size: 13px;
          color: rgba(255,255,255,0.65);
          text-align: right;
        }

        .contact--val.highlight {
          color: #f0c830;
        }

        /* Social row */
        .about--social--row {
          display: flex;
          gap: 12px;
        }

        .about--social--link {
          width: 36px;
          height: 36px;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.4);
          font-size: 15px;
          text-decoration: none;
          transition: border-color 0.2s ease, color 0.2s ease;
        }

        .about--social--link:hover {
          border-color: #f0c830;
          color: #f0c830;
        }

        @media (max-width: 900px) {
          .about--grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .about--sidebar {
            position: static;
          }
          .about--photo--frame {
            aspect-ratio: 4/3;
            max-height: 320px;
          }
          .about--inner {
            padding: 0 24px;
          }
          .about--resume--btn {
            width: 100%;
            max-width: 320px;
          }
        }

        @media (max-width: 480px) {
          .about--inner {
            padding: 0 20px;
          }
          .about--resume--btn {
            width: 100%;
            max-width: none;
            font-size: 12px;
            padding: 13px 18px;
            margin-bottom: 40px;
          }
        }
      `}</style>

      <section id="AboutMe" ref={sectionRef}>
        <div className="about--inner">

          {/* Eyebrow */}
          <div className="about--eyebrow">
            <div className="about--eyebrow--icon"></div>
            <span className="about--eyebrow--text">About Me</span>
          </div>

          <div className="about--grid">

            {/* ── LEFT ── */}
            <div className="about--left">
              <h2 className="about--headline">Passionate & Lead</h2>
              <h2 className="about--subheadline">Product Developer</h2>

             <p className="about--bio">
  I'm <strong style={{color:'#fff',fontWeight:500}}>Boluwatife Olawuyi</strong>, 
  a frontend & full-stack developer with 3+ years of experience building scalable 
  web applications and mobile apps for 30+ clients. Specialised in{" "}
  <strong style={{color:'#fff',fontWeight:500}}>React, Next.js, WordPress</strong>{" "}
  and <strong style={{color:'#fff',fontWeight:500}}>Flutter</strong>. Experienced 
  in Linux administration, REST APIs, and Zoho CRM automation.
</p>

              <a
                href="./img/my resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="about--resume--btn"
              >
                Download CV ↓
              </a>

              {/* Tabs */}
              <div className="about--tabs">
                <button
                  className={`about--tab ${activeSection === "experience" ? "active" : ""}`}
                  onClick={() => setActiveSection("experience")}
                >
                  Experience
                </button>
                <button
                  className={`about--tab ${activeSection === "education" ? "active" : ""}`}
                  onClick={() => setActiveSection("education")}
                >
                  Education
                </button>
              </div>

              {/* Experience Timeline */}
              {activeSection === "experience" && (
                <div className="timeline">
                  {EXPERIENCE.map((item, i) => (
                    <div key={i} className={`timeline--entry ${item.current ? "current" : ""}`}>
                      <div className="timeline--dot"></div>
                      <div className="timeline--body">
                        <div className="timeline--role">
                          {item.role}
                          {item.current && <span className="current--badge">Current</span>}
                        </div>
                        <p className="timeline--meta">
                          <span>{item.company}</span> · {item.location} · {item.period}
                        </p>
                        <ul className="timeline--points">
                          {item.points.map((pt, j) => <li key={j}>{pt}</li>)}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Education */}
              {activeSection === "education" && (
                <div className="edu--list">
                  {EDUCATION.map((item, i) => (
                    <div key={i} className="edu--card">
                      <div className="edu--left">
                        <span className="edu--degree">{item.degree}</span>
                        <span className="edu--school">{item.school}</span>
                      </div>
                      <div className="edu--right">
                        <span className="edu--year">{item.year}</span>
                        <span className="edu--badge">{item.badge}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* ── RIGHT SIDEBAR ── */}
            <div className="about--sidebar">
              <div className="about--photo--frame">
                <img src="./img/about-me.jpg" alt="Boluwatife Olawuyi" />
                <div className="about--name--tag">
                  <h3>Boluwatife Olawuyi</h3>
                  <p>Application Engineer · Lagos, NG</p>
                </div>
              </div>

              <div className="about--contact--list">
                <div className="contact--row">
  <span className="contact--key">Email</span>
  <span className="contact--val">Olawuyiboluwatife2@gmail.com</span>
</div>
<div className="contact--row">
  <span className="contact--key">Location</span>
  <span className="contact--val">Lagos, Nigeria</span>
</div>
<div className="contact--row">
  <span className="contact--key">Timezone</span>
  <span className="contact--val">UTC +1</span>
</div>
<div className="contact--row">
  <span className="contact--key">Languages</span>
  <span className="contact--val">English, Yoruba, German (A1)</span>
</div>
<div className="contact--row">
  <span className="contact--key">Status</span>
  <span className="contact--val highlight">Open to opportunities</span>
</div>
              </div>

              <div className="about--social--row">
                <a href="https://github.com/tifewalker" className="about--social--link" aria-label="GitHub">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/olawuyi-boluwatife-3088632b8/" className="about--social--link" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://x.com/tife_d_walker?s=21" className="about--social--link" aria-label="Twitter">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}