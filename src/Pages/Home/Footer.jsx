import { Link } from "react-scroll";
import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer--container">
      {/* Footer Main Content */}
      <div className="footer--main">
        {/* Brand Section */}
        <div className="footer--brand">
          <div className="footer--logo">
            <div className="logo--avatar">
              <span>BO</span>
            </div>
            <div className="logo--info">
              <h3>Boluwatife Olawuyi</h3>
              <p>Full-Stack Developer</p>
            </div>
          </div>
          <p className="footer--description">
            Building modern web applications with clean code and creative solutions. 
            Always excited to take on new challenges and collaborate on innovative projects.
          </p>
          <div className="footer--stats">
            <div className="footer--stat">
              <span className="stat--number">50+</span>
              <span className="stat--label">Projects</span>
            </div>
            <div className="footer--stat">
              <span className="stat--number">3+</span>
              <span className="stat--label">Years Exp</span>
            </div>
            <div className="footer--stat">
              <span className="stat--number">100%</span>
              <span className="stat--label">Client Satisfaction</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer--links--section">
          <div className="footer--links--group">
            <h4 className="footer--links--title">
              <svg viewBox="0 0 16 16" width="16" height="16">
                <path fillRule="evenodd" d="M1.5 2.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v8.5a.25.25 0 01-.25.25h-12.5a.25.25 0 01-.25-.25v-8.5zM1.75 2a1.75 1.75 0 00-1.75 1.75v8.5c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75z"/>
              </svg>
              Navigation
            </h4>
            <ul className="footer--links--list">
              <li>
                <Link
                  activeClass="footer--link--active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="heroSection"
                  className="footer--link"
                >
                  <svg viewBox="0 0 16 16" width="14" height="14">
                    <path fillRule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm6.5-.25A.75.75 0 017.25 7h1a.75.75 0 01.75.75v2.75h.25a.75.75 0 010 1.5h-2a.75.75 0 010-1.5h.25v-2h-.25a.75.75 0 01-.75-.75zM8 6a1 1 0 100-2 1 1 0 000 2z"/>
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass="footer--link--active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="MyPortfolio"
                  className="footer--link"
                >
                  <svg viewBox="0 0 16 16" width="14" height="14">
                    <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 10.5v-8z"/>
                  </svg>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  activeClass="footer--link--active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="AboutMe"
                  className="footer--link"
                >
                  <svg viewBox="0 0 16 16" width="14" height="14">
                    <path fillRule="evenodd" d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zM8 9a5 5 0 00-4.546 2.916A5.986 5.986 0 008 14a5.986 5.986 0 004.546-2.084A5 5 0 008 9z"/>
                  </svg>
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  activeClass="footer--link--active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="Contact"
                  className="footer--link"
                >
                  <svg viewBox="0 0 16 16" width="14" height="14">
                    <path fillRule="evenodd" d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75z"/>
                  </svg>
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  activeClass="footer--link--active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="testimonial"
                  className="footer--link"
                >
                  <svg viewBox="0 0 16 16" width="14" height="14">
                    <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/>
                  </svg>
                  Certifications
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer--links--group">
            <h4 className="footer--links--title">
              <svg viewBox="0 0 16 16" width="16" height="16">
                <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              Projects
            </h4>
            <ul className="footer--links--list">
              <li>
                <a href="https://github.com/tifewalker" target="_blank" rel="noreferrer" className="footer--link">
                  <svg viewBox="0 0 16 16" width="14" height="14">
                    <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 10.5v-8z"/>
                  </svg>
                  All Repositories
                </a>
              </li>
              <li>
                <a href="#" className="footer--link">
                  <svg viewBox="0 0 16 16" width="14" height="14">
                    <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/>
                  </svg>
                  Featured Work
                </a>
              </li>
              <li>
                <a href="#" className="footer--link">
                  <svg viewBox="0 0 16 16" width="14" height="14">
                    <path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25V5.372a2.25 2.25 0 10-1.5 0v.878A.75.75 0 0110.25 7H5.75a.75.75 0 01-.75-.75V5.372z"/>
                  </svg>
                  Open Source
                </a>
              </li>
              <li>
                <a href="#" className="footer--link">
                  <svg viewBox="0 0 16 16" width="14" height="14">
                    <path fillRule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.5 4.75a.75.75 0 00-1.5 0v3.5a.75.75 0 00.471.696l2.5 1a.75.75 0 00.557-1.392L8.5 7.742V4.75z"/>
                  </svg>
                  Latest Updates
                </a>
              </li>
            </ul>
          </div>

          <div className="footer--links--group">
            <h4 className="footer--links--title">
              <svg viewBox="0 0 16 16" width="16" height="16">
                <path fillRule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0114.25 13H8.06l-2.573 2.573A1.458 1.458 0 013 14.543V13H1.75A1.75 1.75 0 010 11.25V1.75z"/>
              </svg>
              Services
            </h4>
            <ul className="footer--links--list">
              <li>
                <span className="footer--link">
                  <svg viewBox="0 0 16 16" width="14" height="14">
                    <path fillRule="evenodd" d="M4 7a1 1 0 011-1h6a1 1 0 110 2H5a1 1 0 01-1-1zM4 10a1 1 0 011-1h3a1 1 0 110 2H5a1 1 0 01-1-1z"/>
                  </svg>
                  Web Development
                </span>
              </li>
              <li>
                <span className="footer--link">
                  <svg viewBox="0 0 16 16" width="14" height="14">
                    <path fillRule="evenodd" d="M4 7a1 1 0 011-1h6a1 1 0 110 2H5a1 1 0 01-1-1zM4 10a1 1 0 011-1h3a1 1 0 110 2H5a1 1 0 01-1-1z"/>
                  </svg>
                  React Development
                </span>
              </li>
              <li>
                <span className="footer--link">
                  <svg viewBox="0 0 16 16" width="14" height="14">
                    <path fillRule="evenodd" d="M4 7a1 1 0 011-1h6a1 1 0 110 2H5a1 1 0 01-1-1zM4 10a1 1 0 011-1h3a1 1 0 110 2H5a1 1 0 01-1-1z"/>
                  </svg>
                  MERN Stack
                </span>
              </li>
              <li>
                <span className="footer--link">
                  <svg viewBox="0 0 16 16" width="14" height="14">
                    <path fillRule="evenodd" d="M4 7a1 1 0 011-1h6a1 1 0 110 2H5a1 1 0 01-1-1zM4 10a1 1 0 011-1h3a1 1 0 110 2H5a1 1 0 01-1-1z"/>
                  </svg>
                  UI/UX Design
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="footer--social--section">
          <h4 className="footer--social--title">
            <svg viewBox="0 0 16 16" width="16" height="16">
              <path fillRule="evenodd" d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zM8 9a5 5 0 00-4.546 2.916A5.986 5.986 0 008 14a5.986 5.986 0 004.546-2.084A5 5 0 008 9z"/>
            </svg>
            Connect
          </h4>
          <div className="footer--social--links">
            <a
              href="https://x.com/Tife_d_walker"
              className="footer--social--link twitter"
              target="_blank"
              rel="noreferrer"
              title="Follow on X (Twitter)"
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/olawuyi-boluwatife-3088632b8/"
              className="footer--social--link linkedin"
              target="_blank"
              rel="noreferrer"
              title="Connect on LinkedIn"
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://wa.me/2349154110883"
              className="footer--social--link whatsapp"
              target="_blank"
              rel="noreferrer"
              title="Message on WhatsApp"
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488"/>
              </svg>
            </a>
            <a
              href="https://github.com/tifewalker"
              className="footer--social--link github"
              target="_blank"
              rel="noreferrer"
              title="View GitHub Profile"
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
          
          <div className="footer--contact--info">
            <div className="contact--item">
              <svg viewBox="0 0 16 16" width="14" height="14">
                <path fillRule="evenodd" d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75z"/>
              </svg>
              <span>olawuyiboluwatife2@gmail.com</span>
            </div>
            <div className="contact--item">
              <svg viewBox="0 0 16 16" width="14" height="14">
                <path fillRule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.5 4.75a.75.75 0 00-1.5 0v3.5a.75.75 0 00.471.696l2.5 1a.75.75 0 00.557-1.392L8.5 7.742V4.75z"/>
              </svg>
              <span>Available for projects</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer--bottom">
        <div className="footer--bottom--content">
          <div className="footer--copyright">
            <svg viewBox="0 0 16 16" width="16" height="16">
              <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 4.42 3.58 8 8 8 4.42 0 8-3.58 8-8 0-4.42-3.58-8-8-8zm0 1.5c3.59 0 6.5 2.91 6.5 6.5 0 3.59-2.91 6.5-6.5 6.5C4.41 14.5 1.5 11.59 1.5 8c0-3.59 2.91-6.5 6.5-6.5zm-.75 2.75c-.41 0-.75.34-.75.75v.56c-.44.02-.83.13-1.14.33l-.28-.48c-.20-.35-.65-.47-1-.27-.35.20-.47.65-.27 1l.28.48c-.25.3-.4.68-.4 1.1 0 .83.67 1.5 1.5 1.5h1c.28 0 .5.22.5.5s-.22.5-.5.5h-1.5c-.41 0-.75.34-.75.75s.34.75.75.75h.5v.56c0 .41.34.75.75.75s.75-.34.75-.75v-.56c.44-.02.83-.13 1.14-.33l.28.48c.20.35.65.47 1 .27.35-.20.47-.65.27-1l-.28-.48c.25-.3.4-.68.4-1.1 0-.83-.67-1.5-1.5-1.5h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-.5v-.56c0-.41-.34-.75-.75-.75z"/>
            </svg>
            <span>© {currentYear} Boluwatife Olawuyi. All rights reserved.</span>
          </div>
          
          <div className="footer--meta">
            <span className="footer--version">
              <svg viewBox="0 0 16 16" width="14" height="14">
                <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/>
              </svg>
              Portfolio v2.0
            </span>
            <div className="footer--status">
              <span className="status--dot online"></span>
              <span>Open for opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;