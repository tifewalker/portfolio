import { useRef, useState } from "react";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/tifewalker" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/olawuyi-boluwatife-3088632b8/",
  },
  { label: "Instagram", href: "https://www.instagram.com/im_tifewalker" },
  { label: "X", href: "https://x.com/tife_d_walker?s=21" },
];

export default function ContactMe() {
  const form = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (!form.current) {
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(form.current);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        setSubmitStatus("success");
        form.current.reset();
      } else {
        console.error("Web3Forms send failed:", result);
        setSubmitStatus("error");
      }
    } catch (err) {
      console.error("Web3Forms network error:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=IBM+Plex+Sans:wght@400;500;600&display=swap');

        #Contact {
          --ink: #0e1a2b;
          --muted: #566074;
          --paper: #f3f5f8;
          --line: #d5dbe5;
          --coral: #ff5a47;
          background: var(--ink);
          color: #ffffff;
          font-family: 'IBM Plex Sans', sans-serif;
          padding: 100px 0 0;
        }

        #Contact *,
        #Contact *::before,
        #Contact *::after { box-sizing: border-box; }

        #Contact .ct--inner {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 48px;
        }

        #Contact .ct--headline {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: clamp(38px, 6vw, 84px);
          line-height: 0.98;
          font-weight: 800;
          letter-spacing: -0.045em;
          max-width: 900px;
          margin: 0 0 72px;
        }

        #Contact .ct--grid {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: 72px;
          align-items: start;
          padding-bottom: 96px;
        }

        /* Left column */
        #Contact .ct--text {
          font-size: 17px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.75);
          max-width: 440px;
          margin: 0 0 40px;
        }

        #Contact .ct--details {
          margin: 0;
          padding: 0;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        #Contact .ct--detail {
          display: grid;
          grid-template-columns: 130px minmax(0, 1fr);
          gap: 16px;
          padding: 18px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        #Contact .ct--detail dt {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
        }

        #Contact .ct--detail dd {
          margin: 0;
          font-size: 16px;
          font-weight: 500;
          overflow-wrap: anywhere;
        }

        #Contact .ct--detail a {
          color: #ffffff;
          text-decoration: none;
          border-bottom: 2px solid var(--coral);
          transition: border-color 0.2s ease;
        }

        #Contact .ct--detail a:hover { border-bottom-color: #ffffff; }

        #Contact .ct--available {
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        #Contact .ct--available::before {
          content: "";
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #3ecf8e;
          flex-shrink: 0;
        }

        /* Form panel */
        #Contact .ct--panel {
          background: #ffffff;
          color: var(--ink);
          border-radius: 4px;
          padding: 40px;
        }

        #Contact .ct--panel--title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 26px;
          font-weight: 800;
          letter-spacing: -0.03em;
          margin: 0 0 26px;
        }

        #Contact .ct--status {
          padding: 14px 16px;
          margin-bottom: 24px;
          border-radius: 4px;
          font-size: 14px;
          line-height: 1.5;
          border-left: 4px solid;
        }

        #Contact .ct--status strong { display: block; }

        #Contact .ct--status p { margin: 2px 0 0; }

        #Contact .ct--status.success {
          background: #e8f6ef;
          border-left-color: #1f9d63;
          color: #14663f;
        }

        #Contact .ct--status.error {
          background: #fdecea;
          border-left-color: #d6382a;
          color: #9c2419;
        }

        #Contact .ct--form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        #Contact .ct--row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        #Contact .ct--group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        #Contact .ct--label {
          font-size: 14px;
          font-weight: 600;
        }

        #Contact .ct--optional {
          font-weight: 400;
          color: var(--muted);
        }

        #Contact .ct--input,
        #Contact .ct--select,
        #Contact .ct--textarea {
          width: 100%;
          background: var(--paper);
          border: 1px solid var(--line);
          border-radius: 4px;
          color: var(--ink);
          font-family: inherit;
          font-size: 15px;
          padding: 13px 14px;
          outline: none;
          appearance: none;
          transition: border-color 0.2s ease, background 0.2s ease;
        }

        #Contact .ct--input:focus,
        #Contact .ct--select:focus,
        #Contact .ct--textarea:focus {
          background: #ffffff;
          border-color: var(--ink);
          box-shadow: 0 0 0 3px rgba(255, 90, 71, 0.35);
        }

        #Contact .ct--input::placeholder,
        #Contact .ct--textarea::placeholder { color: #8b94a6; }

        #Contact .ct--select {
          cursor: pointer;
          padding-right: 40px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 16 16'%3E%3Cpath fill='%230e1a2b' d='M4.22 6.22a.75.75 0 011.06 0L8 8.94l2.72-2.72a.75.75 0 111.06 1.06l-3.25 3.25a.75.75 0 01-1.06 0L4.22 7.28a.75.75 0 010-1.06z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
        }

        #Contact .ct--textarea {
          resize: vertical;
          min-height: 140px;
          line-height: 1.65;
        }

        #Contact .ct--actions {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
          padding-top: 4px;
        }

        #Contact .ct--submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-width: 170px;
          background: var(--coral);
          color: #ffffff;
          font-family: inherit;
          font-size: 15px;
          font-weight: 600;
          padding: 15px 28px;
          border: 2px solid var(--coral);
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        #Contact .ct--submit:hover:not(:disabled) {
          background: #e84634;
          border-color: #e84634;
          transform: translateY(-2px);
        }

        #Contact .ct--submit:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        #Contact .ct--clear {
          background: transparent;
          color: var(--muted);
          font-family: inherit;
          font-size: 15px;
          font-weight: 500;
          padding: 15px 4px;
          border: 0;
          border-bottom: 2px solid transparent;
          cursor: pointer;
          transition: color 0.2s ease, border-color 0.2s ease;
        }

        #Contact .ct--clear:hover {
          color: var(--ink);
          border-bottom-color: var(--coral);
        }

        #Contact .ct--spinner {
          width: 15px;
          height: 15px;
          border: 2px solid rgba(255, 255, 255, 0.4);
          border-top-color: #ffffff;
          border-radius: 50%;
          animation: ctSpin 0.7s linear infinite;
          flex-shrink: 0;
        }

        @keyframes ctSpin { to { transform: rotate(360deg); } }

        #Contact a:focus-visible,
        #Contact button:focus-visible {
          outline: 3px solid var(--coral);
          outline-offset: 3px;
        }

        /* Footer */
        #Contact .ct--footer {
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding: 28px 0 36px;
        }

        #Contact .ct--footer--inner {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }

        #Contact .ct--copy {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
        }

        #Contact .ct--socials {
          display: flex;
          gap: 28px;
          flex-wrap: wrap;
        }

        #Contact .ct--socials a {
          font-size: 15px;
          font-weight: 500;
          color: #ffffff;
          text-decoration: none;
          padding-bottom: 3px;
          border-bottom: 2px solid transparent;
          transition: border-color 0.2s ease;
        }

        #Contact .ct--socials a:hover { border-bottom-color: var(--coral); }

        /* Tablet */
        @media (max-width: 900px) {
          #Contact { padding-top: 76px; }
          #Contact .ct--inner,
          #Contact .ct--footer--inner { padding: 0 28px; }
          #Contact .ct--headline { margin-bottom: 48px; }

          #Contact .ct--grid {
            grid-template-columns: 1fr;
            gap: 48px;
            padding-bottom: 72px;
          }
        }

        /* Mobile */
        @media (max-width: 520px) {
          #Contact { padding-top: 56px; }
          #Contact .ct--inner,
          #Contact .ct--footer--inner { padding: 0 20px; }
          #Contact .ct--text { font-size: 16px; }
          #Contact .ct--detail { grid-template-columns: 1fr; gap: 4px; }
          #Contact .ct--panel { padding: 26px 20px; }
          #Contact .ct--row { grid-template-columns: 1fr; }
          #Contact .ct--actions { flex-direction: column; align-items: stretch; gap: 8px; }
          #Contact .ct--submit { width: 100%; }
          #Contact .ct--clear { text-align: center; }
        }

        @media (prefers-reduced-motion: reduce) {
          #Contact *,
          #Contact *::before,
          #Contact *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <section id="Contact" aria-labelledby="contact-heading">
        <div className="ct--inner">
          <h2 id="contact-heading" className="ct--headline">
            Have a system that needs fixing? Tell me about it.
          </h2>

          <div className="ct--grid">
            {/* Left: details */}
            <div>
              <p className="ct--text">
                Based in Lagos, Nigeria, and working with clients globally.
                Whether you need a CRM or call center implementation, workflow
                automation, or a full-stack build, I'm ready to help.
              </p>

              <dl className="ct--details">
                <div className="ct--detail">
                  <dt>Email</dt>
                  <dd>
                    <a href="mailto:olawuyiboluwatife2@gmail.com">
                      olawuyiboluwatife2@gmail.com
                    </a>
                  </dd>
                </div>

                <div className="ct--detail">
                  <dt>Location</dt>
                  <dd>Lagos, Nigeria. Remote worldwide.</dd>
                </div>

                <div className="ct--detail">
                  <dt>Response time</dt>
                  <dd>Within 24 hours</dd>
                </div>

                <div className="ct--detail">
                  <dt>Status</dt>
                  <dd>
                    <span className="ct--available">
                      Available for new projects
                    </span>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Right: form */}
            <div className="ct--panel">
              <h3 className="ct--panel--title">Send a message</h3>

              <div aria-live="polite">
                {submitStatus === "success" && (
                  <div className="ct--status success">
                    <strong>Message sent.</strong>
                    <p>I'll get back to you within 24 hours.</p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="ct--status error">
                    <strong>Something went wrong.</strong>
                    <p>
                      Please email me directly at
                      olawuyiboluwatife2@gmail.com
                    </p>
                  </div>
                )}
              </div>

              <form ref={form} className="ct--form" onSubmit={sendEmail}>
                <input
                  type="hidden"
                  name="access_key"
                  value="e8a5aacc-845f-454b-a837-22109e82be00"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="New message from portfolio site"
                />
                <input
                  type="checkbox"
                  name="botcheck"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="ct--row">
                  <div className="ct--group">
                    <label className="ct--label" htmlFor="first-name">
                      First name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      className="ct--input"
                      placeholder="John"
                      required
                    />
                  </div>

                  <div className="ct--group">
                    <label className="ct--label" htmlFor="last-name">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      className="ct--input"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="ct--row">
                  <div className="ct--group">
                    <label className="ct--label" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="ct--input"
                      placeholder="john@company.com"
                      required
                    />
                  </div>

                  <div className="ct--group">
                    <label className="ct--label" htmlFor="phone-number">
                      Phone <span className="ct--optional">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone-number"
                      name="phone-number"
                      className="ct--input"
                      placeholder="+1 555 000 0000"
                    />
                  </div>
                </div>

                <div className="ct--group">
                  <label className="ct--label" htmlFor="choose-topic">
                    What do you need help with?
                  </label>
                  <select
                    id="choose-topic"
                    name="choose-topic"
                    className="ct--select"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Choose a service
                    </option>
                    <option value="crm">CRM and Business Systems (Zoho)</option>
                    <option value="callcenter">Call Center Solutions (HoduCC)</option>
                    <option value="automation">Workflow Automation and Integrations</option>
                    <option value="fullstack">Full-Stack Development (MERN)</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="consulting">Technical Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="ct--group">
                  <label className="ct--label" htmlFor="message">
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="ct--textarea"
                    placeholder="Tell me about your project: scope, timeline, budget and any specific requirements."
                    required
                  />
                </div>

                <div className="ct--actions">
                  <button
                    type="submit"
                    className="ct--submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="ct--spinner" aria-hidden="true" />
                        Sending
                      </>
                    ) : (
                      "Send message"
                    )}
                  </button>

                  <button
                    type="button"
                    className="ct--clear"
                    onClick={() => form.current?.reset()}
                  >
                    Clear form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="ct--footer">
          <div className="ct--footer--inner">
            <p className="ct--copy">
              © {new Date().getFullYear()} Boluwatife Olawuyi. All rights
              reserved.
            </p>

            <nav className="ct--socials" aria-label="Social links">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}