import { useEffect, useRef, useState } from "react";

const CERTIFICATIONS = [
  {
    id: 1,
    title: "Google IT Support Professional",
    issuer: "Google / Coursera",
    year: "2023",
    category: "IT & Infrastructure",
    src: "./img/cert1.png",
    color: "#4285F4",
  },
  {
    id: 2,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2022",
    category: "Frontend",
    src: "./img/cert2.png",
    color: "#0A0A23",
  },
  {
    id: 3,
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    year: "2022",
    category: "Frontend",
    src: "./img/cert3.png",
    color: "#0A0A23",
  },
  {
    id: 4,
    title: "WordPress Theme Customisation",
    issuer: "Coursera",
    year: "2023",
    category: "CMS",
    src: "./img/cert4.png",
    color: "#0056D2",
  },
  {
    id: 5,
    title: "React AI Chatbot (ChatGPT / Gemini)",
    issuer: "Udemy",
    year: "2024",
    category: "Frontend",
    src: "./img/cert5.png",
    color: "#A435F0",
  },
  {
    id: 6,
    title: "Cisco Networking Essentials",
    issuer: "Cisco",
    year: "2023",
    category: "IT & Infrastructure",
    src: null,
    color: "#1BA0D7",
  },
  {
    id: 7,
    title: "Zoho CRM Admin Basics",
    issuer: "Zoho",
    year: "2024",
    category: "CRM & Tools",
    src: null,
    color: "#E42527",
  },
  {
    id: 8,
    title: "PHP E-Commerce Development",
    issuer: "Udemy",
    year: "2023",
    category: "Backend",
    src: null,
    color: "#A435F0",
  },
  {
    id: 9,
    title: "CSS / Bootstrap / JavaScript / PHP Stack",
    issuer: "Udemy",
    year: "2022",
    category: "Frontend",
    src: null,
    color: "#A435F0",
  },
  {
    id: 10,
    title: "Excel Essentials & Advanced",
    issuer: "aptLearn",
    year: "2022",
    category: "Tools",
    src: null,
    color: "#217346",
  },
];

const FILTERS = ["All", "Frontend", "Backend", "CMS", "IT & Infrastructure", "CRM & Tools", "Tools"];

const BRANDS = ["React", "Node.js", "WordPress", "Flutter", "MongoDB", "Firebase", "Zoho", "Linux", "Vercel", "Figma"];

export default function Testimonial() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered = activeFilter === "All"
    ? CERTIFICATIONS
    : CERTIFICATIONS.filter(c => c.category === activeFilter);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@300;400;500;600&display=swap');

        #testimonial {
          background: #0d0d0b;
          padding: 100px 0;
          font-family: 'Space Grotesk', sans-serif;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .cert--inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
          box-sizing: border-box;
        }

        /* Eyebrow */
        .cert--eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 48px;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(16px)'};
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .cert--eyebrow--icon {
          width: 20px;
          height: 20px;
          border: 1px solid rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cert--eyebrow--icon::after {
          content: '';
          width: 6px;
          height: 6px;
          background: #f0c830;
          display: block;
        }

        .cert--eyebrow--text {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }

        /* Header */
        .cert--header--row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 48px;
          flex-wrap: wrap;
          gap: 24px;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(20px)'};
          transition: opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s;
        }

        .cert--headline {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(40px, 5vw, 60px);
          line-height: 1.0;
          letter-spacing: 0.03em;
          color: #ffffff;
          margin: 0;
        }

        .cert--headline span { color: #f0c830; }

        .cert--subtext {
          font-size: 14px;
          line-height: 1.75;
          color: rgba(255,255,255,0.45);
          max-width: 340px;
          margin: 0;
          text-align: right;
        }

        /* Stats row */
        .cert--stats--row {
          display: flex;
          gap: 0;
          margin-bottom: 48px;
          border: 1px solid rgba(255,255,255,0.07);
          opacity: ${isVisible ? 1 : 0};
          transition: opacity 0.7s ease 0.15s;
        }

        .cert--stat {
          flex: 1;
          padding: 20px 24px;
          border-right: 1px solid rgba(255,255,255,0.07);
        }

        .cert--stat:last-child { border-right: none; }

        .cert--stat--number {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 36px;
          color: #f0c830;
          line-height: 1;
          display: block;
          margin-bottom: 4px;
        }

        .cert--stat--label {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }

        /* Filter tabs */
        .cert--filters {
          display: flex;
          gap: 0;
          margin-bottom: 40px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          overflow-x: auto;
          opacity: ${isVisible ? 1 : 0};
          transition: opacity 0.7s ease 0.2s;
        }

        .cert--filter--btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          padding: 10px 20px 10px 0;
          margin-right: 24px;
          margin-bottom: -1px;
          cursor: pointer;
          white-space: nowrap;
          transition: color 0.2s ease, border-color 0.2s ease;
        }

        .cert--filter--btn:hover { color: rgba(255,255,255,0.65); }

        .cert--filter--btn.active {
          color: #f0c830;
          border-bottom-color: #f0c830;
        }

        /* Certs grid */
        .certs--grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 3px;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(24px)'};
          transition: opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s;
        }

        /* Cert card */
        .cert--card {
          background: #111110;
          border: 1px solid rgba(255,255,255,0.06);
          overflow: hidden;
          transition: border-color 0.25s ease;
        }

        .cert--card:hover {
          border-color: rgba(240,200,48,0.25);
        }

        /* Card with image */
        .cert--img--wrap {
          position: relative;
          aspect-ratio: 4/3;
          overflow: hidden;
          background: #1a1a14;
        }

        .cert--img--wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease, filter 0.4s ease;
          filter: grayscale(10%);
        }

        .cert--card:hover .cert--img--wrap img {
          transform: scale(1.04);
          filter: grayscale(0%) brightness(0.75);
        }

        .cert--img--overlay {
          position: absolute;
          inset: 0;
          background: rgba(13,13,11,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .cert--card:hover .cert--img--overlay { opacity: 1; }

        .cert--view--btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          background: #f0c830;
          color: #0d0d0b;
          padding: 9px 18px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s ease;
        }

        .cert--view--btn:hover {
          background: #f7d84a;
          color: #0d0d0b;
          text-decoration: none;
        }

        /* Placeholder card — no image */
        .cert--placeholder {
          aspect-ratio: 4/3;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 24px;
          position: relative;
          overflow: hidden;
        }

        .cert--placeholder::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #1a1a14 0%, #111110 100%);
        }

        .cert--placeholder--logo {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 20px;
          letter-spacing: 0.05em;
          position: relative;
          z-index: 1;
          flex-shrink: 0;
        }

        .cert--placeholder--issuer {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 28px;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.08);
          position: relative;
          z-index: 1;
          text-align: center;
        }

        /* Card body */
        .cert--card--body {
          padding: 16px 18px;
        }

        .cert--verified--row {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 8px;
        }

        .cert--verified--dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #f0c830;
          flex-shrink: 0;
        }

        .cert--verified--text {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #f0c830;
        }

        .cert--category--tag {
          margin-left: auto;
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 2px 7px;
        }

        .cert--title {
          font-size: 14px;
          font-weight: 500;
          color: rgba(255,255,255,0.85);
          margin: 0 0 5px;
          line-height: 1.4;
        }

        .cert--meta {
          font-size: 12px;
          color: rgba(255,255,255,0.3);
          margin: 0;
        }

        /* Brand strip */
        .brand--strip {
          margin-top: 80px;
          padding-top: 40px;
          border-top: 1px solid rgba(255,255,255,0.07);
          opacity: ${isVisible ? 1 : 0};
          transition: opacity 0.8s ease 0.5s;
        }

        .brand--strip--label {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          text-align: center;
          margin-bottom: 28px;
        }

        .brand--strip--logos {
          display: flex;
          gap: 40px;
          justify-content: center;
          flex-wrap: wrap;
          align-items: center;
        }

        .brand--logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.12);
          transition: color 0.2s ease;
          cursor: default;
        }

        .brand--logo:hover { color: rgba(255,255,255,0.4); }

        @media (max-width: 900px) {
          .cert--inner { padding: 0 24px; }
          .certs--grid { grid-template-columns: repeat(2, 1fr); }
          .cert--stats--row { flex-wrap: wrap; }
          .cert--stat { min-width: 120px; }
        }

        @media (max-width: 500px) {
          .certs--grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="testimonial" ref={sectionRef}>
        <div className="cert--inner">

          {/* Eyebrow */}
          <div className="cert--eyebrow">
            <div className="cert--eyebrow--icon"></div>
            <span className="cert--eyebrow--text">Professional Development</span>
          </div>

          {/* Header */}
          <div className="cert--header--row">
            <div>
              <h2 className="cert--headline">
                Certifications &<br />
                <span>Credentials</span>
              </h2>
            </div>
            <p className="cert--subtext">
              Professional certifications that validate my technical 
              expertise across development, infrastructure and tools.
            </p>
          </div>

          {/* Stats */}
          <div className="cert--stats--row">
            <div className="cert--stat">
              <span className="cert--stat--number">10</span>
              <span className="cert--stat--label">Certifications</span>
            </div>
            <div className="cert--stat">
              <span className="cert--stat--number">6</span>
              <span className="cert--stat--label">Platforms</span>
            </div>
            <div className="cert--stat">
              <span className="cert--stat--number">3+</span>
              <span className="cert--stat--label">Years Learning</span>
            </div>
            <div className="cert--stat">
              <span className="cert--stat--number">2024</span>
              <span className="cert--stat--label">Latest Achievement</span>
            </div>
          </div>

          {/* Filters */}
          <div className="cert--filters">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`cert--filter--btn ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Certs grid */}
          <div className="certs--grid">
            {filtered.map((cert) => (
              <div key={cert.id} className="cert--card">
                {cert.src ? (
                  <div className="cert--img--wrap">
                    <img src={cert.src} alt={cert.title} />
                    <div className="cert--img--overlay">
                      <a
                        href={cert.src}
                        target="_blank"
                        rel="noreferrer"
                        className="cert--view--btn"
                      >
                        View ↗
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="cert--placeholder">
                    <div
                      className="cert--placeholder--logo"
                      style={{
                        background: `${cert.color}20`,
                        border: `1px solid ${cert.color}40`,
                        color: cert.color,
                      }}
                    >
                      {cert.issuer.slice(0, 2).toUpperCase()}
                    </div>
                    <span className="cert--placeholder--issuer">{cert.issuer}</span>
                  </div>
                )}

                <div className="cert--card--body">
                  <div className="cert--verified--row">
                    <div className="cert--verified--dot"></div>
                    <span className="cert--verified--text">Verified</span>
                    <span className="cert--category--tag">{cert.category}</span>
                  </div>
                  <p className="cert--title">{cert.title}</p>
                  <p className="cert--meta">{cert.issuer} · {cert.year}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Brand strip */}
          <div className="brand--strip">
            <p className="brand--strip--label">Technologies & platforms I work with</p>
            <div className="brand--strip--logos">
              {BRANDS.map(b => (
                <span key={b} className="brand--logo">{b}</span>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}