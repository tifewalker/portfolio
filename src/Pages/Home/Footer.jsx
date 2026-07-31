import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@400;500;600&display=swap');

        .footer--container {
          background: #0a0a08;
          border-top: 1px solid rgba(255,255,255,0.06);
          font-family: 'Space Grotesk', sans-serif;
        }

        /* Main footer row */
        .footer--main--row {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 48px;
          display: grid;
          grid-template-columns: 220px 1fr auto;
          gap: 64px;
          align-items: start;
          box-sizing: border-box;
        }

        /* Logo + tagline */
        .footer--brand--col {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .footer--logo--mark {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 22px;
          letter-spacing: 0.1em;
          color: #ffffff;
        }

        .footer--tagline {
          font-size: 12px;
          line-height: 1.7;
          color: rgba(255,255,255,0.3);
          max-width: 180px;
        }

        .footer--availability {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #f0c830;
          margin-top: 4px;
        }

        .footer--avail--dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #f0c830;
          box-shadow: 0 0 0 2px rgba(240,200,48,0.2);
          flex-shrink: 0;
        }

        /* Nav columns */
        .footer--nav--cols {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .footer--nav--col h4 {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          margin: 0 0 16px;
        }

        .footer--nav--col ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer--link {
          font-size: 13px;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          cursor: pointer;
          transition: color 0.2s ease;
          display: block;
        }

        .footer--link:hover {
          color: rgba(255,255,255,0.8);
        }

        .footer--link--active {
          color: #f0c830 !important;
        }

        /* Social col */
        .footer--social--col {
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: flex-end;
        }

        .footer--social--col h4 {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          margin: 0;
        }

        .footer--social--icons {
          display: flex;
          gap: 8px;
        }

        .footer--social--icon {
          width: 36px;
          height: 36px;
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.3);
          font-size: 14px;
          text-decoration: none;
          transition: border-color 0.2s ease, color 0.2s ease;
        }

        .footer--social--icon:hover {
          border-color: #f0c830;
          color: #f0c830;
        }

        .footer--contact--link {
          font-size: 12px;
          color: rgba(255,255,255,0.3);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer--contact--link:hover {
          color: rgba(255,255,255,0.6);
        }

        /* Bottom bar */
        .footer--bottom--bar {
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 18px 48px;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          box-sizing: border-box;
        }

        .footer--copyright {
          font-size: 12px;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.04em;
        }

        .footer--bottom--right {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .footer--version {
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.15);
        }

        .footer--made-with {
          font-size: 11px;
          color: rgba(255,255,255,0.15);
          letter-spacing: 0.04em;
        }

        .footer--made-with span {
          color: #f0c830;
        }

        @media (max-width: 900px) {
          .footer--main--row {
            grid-template-columns: 1fr;
            gap: 36px;
            padding: 36px 24px;
          }
          .footer--nav--cols {
            grid-template-columns: repeat(2, 1fr);
          }
          .footer--social--col {
            align-items: flex-start;
          }
          .footer--bottom--bar {
            padding: 16px 24px;
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }

        @media (max-width: 480px) {
          .footer--nav--cols {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <footer className="footer--container">
        <div className="footer--main--row">

          {/* Brand */}
          <div className="footer--brand--col">
            <span className="footer--logo--mark">PortFoliyo</span>
            <p className="footer--tagline">
              Building modern web experiences for clients worldwide.
            </p>
            <div className="footer--availability">
              <div className="footer--avail--dot"></div>
              Available for work
            </div>
          </div>

          {/* Nav columns */}
          <div className="footer--nav--cols">
            <div className="footer--nav--col">
              <h4>Navigate</h4>
              <ul>
                <li>
                  <Link to="heroSection" spy smooth offset={-70} duration={500} className="footer--link" activeClass="footer--link--active">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="AboutMe" spy smooth offset={-70} duration={500} className="footer--link" activeClass="footer--link--active">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="MyPortfolio" spy smooth offset={-70} duration={500} className="footer--link" activeClass="footer--link--active">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="Contact" spy smooth offset={-70} duration={500} className="footer--link" activeClass="footer--link--active">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer--nav--col">
              <h4>Services</h4>
              <ul>
                <li><span className="footer--link">MERN Stack Dev</span></li>
                <li><span className="footer--link">React Development</span></li>
                <li><span className="footer--link">WordPress Dev</span></li>
                <li><span className="footer--link">UI/UX Design</span></li>
              </ul>
            </div>

            <div className="footer--nav--col">
              <h4>More</h4>
              <ul>
                <li>
                  <Link to="testimonial" spy smooth offset={-70} duration={500} className="footer--link" activeClass="footer--link--active">
                    Certifications
                  </Link>
                </li>
                <li>
                  <Link to="mySkills" spy smooth offset={-70} duration={500} className="footer--link" activeClass="footer--link--active">
                    Skills
                  </Link>
                </li>
                <li>
                  <a href="https://github.com/tifewalker" target="_blank" rel="noreferrer" className="footer--link">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="./img/my resume.pdf" target="_blank" rel="noreferrer" className="footer--link">
                    Download CV
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social */}
          <div className="footer--social--col">
            <h4>Connect</h4>
            <div className="footer--social--icons">
              <a href="https://github.com/tifewalker" target="_blank" rel="noreferrer" className="footer--social--icon" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/olawuyi-boluwatife-3088632b8/" target="_blank" rel="noreferrer" className="footer--social--icon" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://x.com/tife_d_walker?s=21" target="_blank" rel="noreferrer" className="footer--social--icon" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://wa.me/2349154110883" target="_blank" rel="noreferrer" className="footer--social--icon" aria-label="WhatsApp">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
            <a href="mailto:olawuyiboluwatife2@gmail.com" className="footer--contact--link">
              olawuyiboluwatife2@gmail.com
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer--bottom--bar">
          <span className="footer--copyright">
            © {currentYear} Boluwatife Olawuyi · All rights reserved
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;