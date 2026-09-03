import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

        #heroSection {
          background: #ffffff;
          font-family: 'Space Grotesk', sans-serif;
        }

        /* Nav — sits in normal flow, no fixed position, no dark background */
        .hero--nav {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 40px;
          padding: 28px 48px 0;
        }

        .hero--nav a {
          font-size: 15px;
          font-weight: 500;
          color: #14213d;
          text-decoration: none;
          cursor: pointer;
        }

        .hero--nav a:hover {
          color: #ff6b5e;
        }

        /* Hero body */
        .hero--body {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 420px;
          align-items: center;
          gap: 48px;
          padding: 72px 48px 96px;
        }

        .hero--heading {
          font-size: clamp(34px, 4.2vw, 48px);
          line-height: 1.25;
          font-weight: 700;
          color: #14213d;
          margin: 0 0 24px;
        }

        .hero--heading span {
          display: block;
        }

        .hero--description {
          font-size: 16px;
          line-height: 1.7;
          color: #5b6270;
          max-width: 460px;
          margin: 0 0 36px;
        }

        .hero--cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #ff6b5e;
          color: #ffffff;
          font-size: 15px;
          font-weight: 600;
          padding: 14px 30px;
          border-radius: 40px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
          box-sizing: border-box;
          transition: background 0.2s ease, transform 0.15s ease;
        }

        .hero--cta:hover {
          background: #ff5445;
          transform: translateY(-1px);
          color: #ffffff;
          text-decoration: none;
        }

        .hero--photo--wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .hero--photo--glow {
          width: 340px;
          height: 340px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,107,94,0.10) 0%, rgba(20,33,61,0.04) 70%, transparent 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero--photo--frame {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          overflow: hidden;
          background: #eef0f4;
        }

        .hero--photo--frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }

        @media (max-width: 860px) {
          .hero--body {
            grid-template-columns: 1fr;
            text-align: center;
            padding-top: 40px;
          }

          .hero--description {
            margin-left: auto;
            margin-right: auto;
          }

          .hero--photo--wrap {
            order: -1;
          }

          .hero--nav {
            justify-content: center;
            gap: 28px;
            padding: 20px 24px 0;
          }

          .hero--cta {
            width: 100%;
            max-width: 320px;
            margin: 0 auto;
          }
        }

        @media (max-width: 480px) {
          .hero--body {
            padding: 32px 20px 56px;
            gap: 32px;
          }

          .hero--photo--glow {
            width: 220px;
            height: 220px;
          }

          .hero--photo--frame {
            width: 180px;
            height: 180px;
          }

          .hero--cta {
            width: 100%;
            max-width: none;
            font-size: 14px;
            padding: 13px 20px;
          }

          .hero--nav {
            padding: 16px 16px 0;
            gap: 20px;
          }

          .hero--nav a {
            font-size: 13px;
          }
        }
      `}</style>

      <section id="heroSection">
        <nav className="hero--nav">
          <Link to="MyPortfolio" spy smooth offset={-70} duration={500}>Works</Link>
          <Link to="AboutME" spy smooth offset={-70} duration={500}>About</Link>
          <Link to="Contact" spy smooth offset={-70} duration={500}>Contact</Link>
        </nav>

        <div className="hero--body">
          <div className="hero--content">
            <h1 className="hero--heading">
              <span>Hi, I'm Boluwatife,</span>
              <span>Application Engineer</span>
            </h1>

            <p className="hero--description">
              I design and implement business systems, including CRM platforms, call center solutions, and workflow automation, alongside building custom full-stack applications using the MERN stack. founded KONECT Worksuite, a multi-module SaaS platform for African SMEs.
            </p>

            <a
              href="/img/Boluwatife_Olawuyi_ApplicationEngineer_CV.pdf"
              download="Boluwatife_Olawuyi_ApplicationEngineer_CV.pdf"
              className="hero--cta"
            >
              Download Resume
            </a>
          </div>

          <div className="hero--photo--wrap">
            <div className="hero--photo--glow">
              <div className="hero--photo--frame">
                <img src="./img/hero_img.jpeg" alt="Boluwatife Olawuyi" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}