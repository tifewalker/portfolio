import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function ContactMe() {
  const form = useRef(null);
  const sectionRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    if (!form.current) { setIsSubmitting(false); return; }

    emailjs
      .sendForm("service_i3gsg8q", "template_k66u0ks", form.current, "S2sEAG-6Jz8gkWo_S")
      .then(
        () => { setSubmitStatus("cmc-success"); form.current.reset(); setIsSubmitting(false); },
        () => { setSubmitStatus("cmc-error"); setIsSubmitting(false); }
      );
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

        #Contact {
          background: #ffffff;
          font-family: 'Space Grotesk', sans-serif;
          border-top: 1px solid rgba(20,33,61,0.08);
        }

        /* ── FORM SECTION ── */
        .cmc-contact--body {
          max-width: 1100px;
          margin: 0 auto;
          padding: 72px 48px;
          box-sizing: border-box;
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 64px;
          align-items: start;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(24px)'};
          transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;
        }

        /* ── LEFT INFO ── */
        .cmc-contact--info {
          position: sticky;
          top: 90px;
        }

        .cmc-cmc-contact--info--headline {
          font-size: clamp(24px, 3vw, 30px);
          font-weight: 700;
          line-height: 1.25;
          color: #14213d;
          margin: 0 0 16px;
        }

        .cmc-cmc-contact--info--headline span {
          color: #1f9d63;
        }

        .cmc-cmc-contact--info--text {
          font-size: 14px;
          line-height: 1.8;
          color: #5b6270;
          margin: 0 0 32px;
          max-width: 340px;
        }

        .cmc-contact--details {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-bottom: 32px;
          border: 1px solid rgba(20,33,61,0.08);
          border-radius: 12px;
          overflow: hidden;
        }

        .cmc-contact--detail--row {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 14px 18px;
          border-bottom: 1px solid rgba(20,33,61,0.06);
          transition: background 0.2s ease;
        }

        .cmc-contact--detail--row:last-child {
          border-bottom: none;
        }

        .cmc-contact--detail--row:hover {
          background: #f7f8fb;
        }

        .cmc-detail--icon--box {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          border: 1px solid rgba(20,33,61,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 14px;
        }

        .cmc-detail--text--col {
          flex: 1;
          min-width: 0;
        }

        .cmc-detail--label {
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(20,33,61,0.4);
          display: block;
          margin-bottom: 2px;
        }

        .cmc-detail--value {
          font-size: 13px;
          color: #14213d;
        }

        .cmc-detail--value a {
          color: #14213d;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .cmc-detail--value a:hover {
          color: #1f9d63;
        }

        .cmc-detail--value.cmc-online {
          color: #1f9d63;
          display: flex;
          align-items: center;
          gap: 7px;
          font-weight: 600;
        }

        .cmc-cmc-online--dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #1f9d63;
          box-shadow: 0 0 0 3px rgba(31,157,99,0.15);
        }

        .cmc-contact--socials {
          display: flex;
          gap: 10px;
        }

        .cmc-contact--social--btn {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          border: 1px solid rgba(20,33,61,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(20,33,61,0.5);
          font-size: 15px;
          text-decoration: none;
          transition: border-color 0.2s ease, color 0.2s ease;
        }

        .cmc-contact--social--btn:hover {
          border-color: #1f9d63;
          color: #1f9d63;
        }

        /* ── RIGHT FORM ── */
        .cmc-cmc-contact--form--wrap {
          background: #ffffff;
          border: 1px solid rgba(20,33,61,0.1);
          border-radius: 16px;
          padding: 36px;
          box-shadow: 0 4px 24px rgba(20,33,61,0.04);
        }

        .cmc-form--section--label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(20,33,61,0.4);
          margin-bottom: 24px;
          display: block;
        }

        .cmc-form--status {
          padding: 14px 18px;
          margin-bottom: 24px;
          border-radius: 10px;
          font-size: 13px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .cmc-form--status.cmc-success {
          background: rgba(31,157,99,0.08);
          border: 1px solid rgba(31,157,99,0.25);
          color: #178a54;
        }

        .cmc-form--status.cmc-error {
          background: rgba(220,50,50,0.06);
          border: 1px solid rgba(220,50,50,0.2);
          color: #c0392b;
        }

        .cmc-cmc-form--status--icon {
          font-size: 16px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .cmc-form--status strong {
          display: block;
          margin-bottom: 2px;
        }

        .cmc-form--status p {
          margin: 0;
          opacity: 0.8;
          font-size: 12px;
        }

        .cmc-contact--form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .cmc-form--row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .cmc-form--group {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .cmc-form--label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(20,33,61,0.5);
          display: flex;
          gap: 4px;
          align-items: center;
        }

        .cmc-form--required {
          color: #1f9d63;
        }

        .cmc-form--input,
        .cmc-form--select,
        .cmc-form--textarea {
          background: #f7f8fb;
          border: 1px solid rgba(20,33,61,0.1);
          border-radius: 8px;
          color: #14213d;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          padding: 11px 14px;
          outline: none;
          transition: border-color 0.2s ease, background 0.2s ease;
          width: 100%;
          box-sizing: border-box;
          appearance: none;
        }

        .cmc-form--input:focus,
        .cmc-form--select:focus,
        .cmc-form--textarea:focus {
          background: #ffffff;
          border-color: #1f9d63;
        }

        .cmc-form--input::placeholder,
        .cmc-form--textarea::placeholder {
          color: rgba(20,33,61,0.3);
        }

        .cmc-form--select {
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 16 16'%3E%3Cpath fill='rgba(20,33,61,0.4)' d='M4.22 6.22a.75.75 0 011.06 0L8 8.94l2.72-2.72a.75.75 0 111.06 1.06l-3.25 3.25a.75.75 0 01-1.06 0L4.22 7.28a.75.75 0 010-1.06z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 36px;
        }

        .cmc-form--textarea {
          resize: vertical;
          min-height: 130px;
          line-height: 1.7;
        }

        .cmc-form--submit--row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          padding-top: 4px;
        }

        .cmc-form--submit--btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #1f9d63;
          color: #ffffff;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 600;
          padding: 13px 28px;
          border-radius: 40px;
          border: none;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.15s ease;
        }

        .cmc-form--submit--btn:hover:not(:disabled) {
          background: #178a54;
          transform: translateY(-1px);
        }

        .cmc-form--submit--btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .cmc-form--clear--btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: rgba(20,33,61,0.45);
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 500;
          padding: 13px 20px;
          border: 1px solid rgba(20,33,61,0.12);
          border-radius: 40px;
          cursor: pointer;
          transition: border-color 0.2s ease, color 0.2s ease;
        }

        .cmc-form--clear--btn:hover {
          border-color: rgba(20,33,61,0.25);
          color: #14213d;
        }

        .cmc-form--note {
          font-size: 12px;
          color: rgba(20,33,61,0.35);
        }

        .cmc-spinner {
          width: 14px;
          height: 14px;
          border: 2px solid rgba(255,255,255,0.4);
          border-top-color: #ffffff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          flex-shrink: 0;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* ── FOOTER — simple, centered, matches Figma ── */
        .cmc-contact--footer {
          border-top: 1px solid rgba(20,33,61,0.08);
          padding: 40px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .cmc-footer--socials {
          display: flex;
          gap: 14px;
        }

        .cmc-footer--social--link {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          border: 1px solid rgba(20,33,61,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(20,33,61,0.5);
          font-size: 15px;
          text-decoration: none;
          transition: border-color 0.2s ease, color 0.2s ease;
        }

        .cmc-footer--social--link:hover {
          border-color: #1f9d63;
          color: #1f9d63;
        }

        .cmc-footer--copy {
          font-size: 12px;
          color: rgba(20,33,61,0.4);
          text-align: center;
        }

        @media (max-width: 900px) {
          .cmc-contact--body {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 56px 24px;
          }
          .cmc-contact--info { position: static; }
          .contact--banner { padding: 48px 24px; }
          .cmc-cmc-contact--form--wrap { padding: 24px 20px; }
          .cmc-form--row { grid-template-columns: 1fr; }
        }

        @media (max-width: 480px) {
          .cmc-form--submit--row {
            flex-direction: column;
            align-items: stretch;
          }
          .cmc-form--submit--row > div {
            flex-direction: column;
          }
          .cmc-form--submit--btn,
          .cmc-form--clear--btn {
            width: 100%;
            justify-content: center;
          }
          .cmc-form--note {
            text-align: center;
          }
        }
      `}</style>

      <section id="Contact" ref={sectionRef}>

        {/* ── BODY: info + form ── */}
        <div className="cmc-contact--body">

          <div className="cmc-contact--info">
            <h2 className="cmc-cmc-contact--info--headline">
              Let's Work <span>Together</span>
            </h2>
            <p className="cmc-cmc-contact--info--text">
              Based in Lagos, Nigeria — working with clients globally. Whether you
              need a CRM or call center implementation, workflow automation, or a
              full-stack build, I'm ready to help.
            </p>

            <div className="cmc-contact--details">
              <div className="cmc-contact--detail--row">
                <div className="cmc-detail--icon--box">✉</div>
                <div className="cmc-detail--text--col">
                  <span className="cmc-detail--label">Email</span>
                  <span className="cmc-detail--value">
                    <a href="mailto:olawuyiboluwatife2@gmail.com">olawuyiboluwatife2@gmail.com</a>
                  </span>
                </div>
              </div>
              <div className="cmc-contact--detail--row">
                <div className="cmc-detail--icon--box">📍</div>
                <div className="cmc-detail--text--col">
                  <span className="cmc-detail--label">Location</span>
                  <span className="cmc-detail--value">Lagos, Nigeria · Remote Worldwide</span>
                </div>
              </div>
              <div className="cmc-contact--detail--row">
                <div className="cmc-detail--icon--box">🕐</div>
                <div className="cmc-detail--text--col">
                  <span className="cmc-detail--label">Response Time</span>
                  <span className="cmc-detail--value">Within 24 hours</span>
                </div>
              </div>
              <div className="cmc-contact--detail--row">
                <div className="cmc-detail--icon--box">⚡</div>
                <div className="cmc-detail--text--col">
                  <span className="cmc-detail--label">Status</span>
                  <span className="cmc-detail--value cmc-online">
                    <span className="cmc-cmc-online--dot"></span>
                    Available for new projects
                  </span>
                </div>
              </div>
            </div>

            <div className="cmc-contact--socials">
              <a href="https://github.com/tifewalker" className="cmc-contact--social--btn" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/olawuyi-boluwatife-3088632b8/" className="cmc-contact--social--btn" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://x.com/tife_d_walker?s=21" className="cmc-contact--social--btn" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>

          <div className="cmc-cmc-contact--form--wrap">
            <span className="cmc-form--section--label">Send a Message</span>

            {submitStatus === "cmc-success" && (
              <div className="cmc-form--status cmc-success">
                <span className="cmc-cmc-form--status--icon">✓</span>
                <div>
                  <strong>Message sent!</strong>
                  <p>I'll get back to you within 24 hours.</p>
                </div>
              </div>
            )}

            {submitStatus === "cmc-error" && (
              <div className="cmc-form--status cmc-error">
                <span className="cmc-cmc-form--status--icon">!</span>
                <div>
                  <strong>Something went wrong.</strong>
                  <p>Please email me directly at olawuyiboluwatife2@gmail.com</p>
                </div>
              </div>
            )}

            <form ref={form} className="cmc-contact--form" onSubmit={sendEmail}>
              <div className="cmc-form--row">
                <div className="cmc-form--group">
                  <label className="cmc-form--label" htmlFor="first-name">
                    First Name <span className="cmc-form--required">*</span>
                  </label>
                  <input type="text" id="first-name" name="first-name" className="cmc-form--input" placeholder="John" required />
                </div>
                <div className="cmc-form--group">
                  <label className="cmc-form--label" htmlFor="last-name">
                    Last Name <span className="cmc-form--required">*</span>
                  </label>
                  <input type="text" id="last-name" name="last-name" className="cmc-form--input" placeholder="Doe" required />
                </div>
              </div>

              <div className="cmc-form--row">
                <div className="cmc-form--group">
                  <label className="cmc-form--label" htmlFor="email">
                    Email <span className="cmc-form--required">*</span>
                  </label>
                  <input type="email" id="email" name="email" className="cmc-form--input" placeholder="john@company.com" required />
                </div>
                <div className="cmc-form--group">
                  <label className="cmc-form--label" htmlFor="phone-number">Phone</label>
                  <input type="tel" id="phone-number" name="phone-number" className="cmc-form--input" placeholder="+1 555 000 0000" />
                </div>
              </div>

              <div className="cmc-form--group">
                <label className="cmc-form--label" htmlFor="choose-topic">
                  Project Type <span className="cmc-form--required">*</span>
                </label>
                <select id="choose-topic" name="choose-topic" className="cmc-form--select" required>
                  <option value="">Select a service…</option>
                  <option value="crm">CRM & Business Systems (Zoho)</option>
                  <option value="callcenter">Call Center Solutions (HoduCC)</option>
                  <option value="automation">Workflow Automation & Integrations</option>
                  <option value="fullstack">Full-Stack Development (MERN)</option>
                  <option value="mobile">Mobile App Development</option>
                  <option value="consulting">Technical Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="cmc-form--group">
                <label className="cmc-form--label" htmlFor="message">
                  Project Details <span className="cmc-form--required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="cmc-form--textarea"
                  placeholder="Tell me about your project — scope, timeline, budget, and any specific requirements…"
                  required
                />
              </div>

              <div className="cmc-form--submit--row">
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button type="submit" className="cmc-form--submit--btn" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <><div className="cmc-spinner"></div> Sending…</>
                    ) : (
                      <>Send Message ↗</>
                    )}
                  </button>
                  <button type="button" className="cmc-form--clear--btn" onClick={() => form.current?.reset()}>
                    Clear
                  </button>
                </div>
                <span className="cmc-form--note">Replies within 24 hrs</span>
              </div>
            </form>
          </div>
        </div>

        {/* ── FOOTER (matches Figma: icons + copyright, nothing else) ── */}
        <div className="cmc-contact--footer">
          <div className="cmc-footer--socials">
            <a href="https://github.com/tifewalker" className="cmc-footer--social--link" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/olawuyi-boluwatife-3088632b8/" className="cmc-footer--social--link" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://x.com/tife_d_walker?s=21" className="cmc-footer--social--link" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <p className="cmc-footer--copy">© {new Date().getFullYear()} Boluwatife Olawuyi. All rights reserved.</p>
        </div>

      </section>
    </>
  );
}