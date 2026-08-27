import { useState, useEffect, useRef } from "react";

const TECHNOLOGIES = [
  { name: "Zoho CRM",   src: "./img/tech/zoho.png" },
  { name: "React",      src: "./img/tech/react.png" },
  { name: "Node.js",    src: "./img/tech/node.png" },
  { name: "MongoDB",    src: "./img/tech/mongodb.png" },
  { name: "TypeScript", src: "./img/tech/typescript.png" },
  { name: "Next.js",    src: "./img/tech/nextjs.jpg" },
  { name: "Flutter",    src: "./img/tech/flutter.png" },
  { name: "Express.js", src: "./img/tech/express.jpg" },
  { name: "Tailwind",   src: "./img/tech/tailwind.png" },
  { name: "MySQL",      src: "./img/tech/mysql.png" },
  { name: "Firebase",   src: "./img/tech/firebase.png" },
  { name: "Git",        src: "./img/tech/git.png" },
  { name: "Ubuntu",     src: "./img/tech/ubuntu.png" },
  { name: "WordPress",  src: "./img/tech/wordpress.png" },
];

export default function Technologies() {
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

  // Duplicate the list so the scroll loop is seamless
  const loopList = [...TECHNOLOGIES, ...TECHNOLOGIES];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&display=swap');

        #technologies {
          background: #ffffff;
          padding: 64px 0;
          font-family: 'Space Grotesk', sans-serif;
          border-top: 1px solid rgba(20,33,61,0.06);
          overflow: hidden;
        }

        .tech--inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
          box-sizing: border-box;
        }

        /* Eyebrow */
        .tech--eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 40px;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(16px)'};
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .tech--eyebrow--icon {
          width: 18px;
          height: 18px;
          border: 1px solid rgba(20,33,61,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .tech--eyebrow--icon::after {
          content: '';
          width: 6px;
          height: 6px;
          background: #1f9d63;
          display: block;
        }

        .tech--eyebrow--text {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(20,33,61,0.5);
        }

        /* Marquee track */
        .tech--marquee--wrap {
          position: relative;
          width: 100%;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0,
            #000 64px,
            #000 calc(100% - 64px),
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0,
            #000 64px,
            #000 calc(100% - 64px),
            transparent 100%
          );
        }

        .tech--marquee--track {
          display: flex;
          align-items: center;
          width: max-content;
          gap: 64px;
          animation: tech-scroll 28s linear infinite;
        }

        .tech--marquee--wrap:hover .tech--marquee--track {
          animation-play-state: paused;
        }

        @keyframes tech-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .tech--logo--cell {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .tech--logo--img {
          width: 34px;
          height: 34px;
          object-fit: contain;
          display: block;
          filter: grayscale(35%) opacity(0.75);
          transition: filter 0.25s ease, transform 0.25s ease;
        }

        .tech--logo--cell:hover .tech--logo--img {
          filter: grayscale(0%) opacity(1);
          transform: translateY(-2px);
        }

        .tech--logo--name {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: rgba(20,33,61,0.4);
          white-space: nowrap;
          transition: color 0.2s ease;
        }

        .tech--logo--cell:hover .tech--logo--name {
          color: #14213d;
        }

        @media (max-width: 900px) {
          .tech--inner { padding: 0 24px; }
        }

        @media (max-width: 480px) {
          .tech--marquee--track {
            gap: 40px;
            animation-duration: 22s;
          }
          .tech--logo--img {
            width: 28px;
            height: 28px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .tech--marquee--track {
            animation: none;
          }
        }
      `}</style>

      <section id="technologies" ref={sectionRef}>

        <div className="tech--marquee--wrap">
          <div className="tech--marquee--track">
            {loopList.map((tech, i) => (
              <div key={`${tech.name}-${i}`} className="tech--logo--cell">
                <img src={tech.src} alt={tech.name} className="tech--logo--img" />
                <span className="tech--logo--name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}