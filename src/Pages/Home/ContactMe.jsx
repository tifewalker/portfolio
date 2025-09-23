import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const form = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeTab, setActiveTab] = useState('contact');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (!form.current) {
      console.error("Form ref not attached properly!");
      setIsSubmitting(false);
      return;
    }

    emailjs
      .sendForm(
        "service_i3gsg8q",
        "template_k66u0ks",
        form.current,
        "S2sEAG-6Jz8gkWo_S"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitStatus('success');
          form.current.reset();
          setIsSubmitting(false);
        },
        (error) => {
          console.log(error.text);
          setSubmitStatus('error');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="Contact" className="contact--section">
      {/* GitHub-style header */}
      <div className="contact--header">
        <div className="contact--navigation">
          <div className="contact--nav--tabs">
            <button 
              className={`contact--tab ${activeTab === 'contact' ? 'active' : ''}`}
              onClick={() => setActiveTab('contact')}
            >
              <svg className="tab--icon" viewBox="0 0 16 16" width="16" height="16">
                <path fillRule="evenodd" d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z"/>
              </svg>
              New Message
            </button>
            <button 
              className={`contact--tab ${activeTab === 'info' ? 'active' : ''}`}
              onClick={() => setActiveTab('info')}
            >
              <svg className="tab--icon" viewBox="0 0 16 16" width="16" height="16">
                <path fillRule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0114.25 13H8.06l-2.573 2.573A1.458 1.458 0 013 14.543V13H1.75A1.75 1.75 0 010 11.25V1.75zm1.75-.25a.25.25 0 00-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h6.5a.25.25 0 00.25-.25v-9.5a.25.25 0 00-.25-.25H1.75z"/>
              </svg>
              Contact Info
            </button>
          </div>
        </div>

        <div className="contact--title--section">
          <div className="contact--badge">
            <svg viewBox="0 0 16 16" width="16" height="16">
              <path fillRule="evenodd" d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75z"/>
            </svg>
            Get In Touch
          </div>
          <h2 className="contact--heading">Let's Build Something Amazing Together</h2>
          <p className="contact--description">
            Ready to discuss your next project? I'm here to help bring your ideas to life with clean code and creative solutions.
          </p>
        </div>
      </div>

      {/* Contact Form Tab */}
      {activeTab === 'contact' && (
        <div className="contact--form--section">
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="status--message success">
              <svg viewBox="0 0 16 16" width="16" height="16">
                <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/>
              </svg>
              <div className="status--content">
                <strong>Message sent successfully!</strong>
                <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="status--message error">
              <svg viewBox="0 0 16 16" width="16" height="16">
                <path fillRule="evenodd" d="M11.383 13.644A1.03 1.03 0 0110.36 15H5.64a1.03 1.03 0 01-1.024-1.356l2.36-8.228A3.047 3.047 0 018.96.356a3.047 3.047 0 011.984 5.06l-2.36 8.228zm-5.08-1.356h3.394l2.36-8.228a1.547 1.547 0 00-1.008-2.572 1.547 1.547 0 00-1.008 2.572l-2.36 8.228z"/>
              </svg>
              <div className="status--content">
                <strong>Something went wrong!</strong>
                <p>Please try again or contact me directly via email.</p>
              </div>
            </div>
          )}

          <form ref={form} className="contact--form" onSubmit={sendEmail}>
            {/* Form Header */}
            <div className="form--header">
              <div className="form--title">
                <svg className="form--icon" viewBox="0 0 16 16" width="20" height="20">
                  <path fillRule="evenodd" d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75z"/>
                </svg>
                <h3>Create New Message</h3>
              </div>
              <div className="form--meta">
                <span className="assignee--info">
                  <svg viewBox="0 0 16 16" width="14" height="14">
                    <path fillRule="evenodd" d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zM8 9a5 5 0 00-4.546 2.916A5.986 5.986 0 008 14a5.986 5.986 0 004.546-2.084A5 5 0 008 9z"/>
                  </svg>
                  Assigned to: Boluwatife Olawuyi
                </span>
              </div>
            </div>

            {/* Form Content */}
            <div className="form--body">
              <div className="form--row">
                <div className="form--group">
                  <label htmlFor="first-name" className="form--label">
                    <span>First Name</span>
                    <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form--input"
                    name="first-name"
                    id="first-name"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="form--group">
                  <label htmlFor="last-name" className="form--label">
                    <span>Last Name</span>
                    <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form--input"
                    name="last-name"
                    id="last-name"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div className="form--row">
                <div className="form--group">
                  <label htmlFor="email" className="form--label">
                    <span>Email Address</span>
                    <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    className="form--input"
                    name="email"
                    id="email"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div className="form--group">
                  <label htmlFor="phone-number" className="form--label">
                    <span>Phone Number</span>
                  </label>
                  <input
                    type="tel"
                    className="form--input"
                    name="phone-number"
                    id="phone-number"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="form--group">
                <label htmlFor="choose-topic" className="form--label">
                  <span>Project Type</span>
                  <span className="required">*</span>
                </label>
                <div className="select--wrapper">
                  <select
                    name="choose-topic"
                    id="choose-topic"
                    className="form--select"
                    required
                  >
                    <option value="">Select a service...</option>
                    <option value="wordpress">WordPress Development</option>
                    <option value="mern">MERN Stack Development</option>
                    <option value="react">React Development</option>
                    <option value="design">Graphics Designing</option>
                    <option value="consulting">Technical Consulting</option>
                    <option value="other">Other</option>
                  </select>
                  <svg className="select--icon" viewBox="0 0 16 16" width="16" height="16">
                    <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 011.06 0L8 8.94l2.72-2.72a.75.75 0 111.06 1.06l-3.25 3.25a.75.75 0 01-1.06 0L4.22 7.28a.75.75 0 010-1.06z"/>
                  </svg>
                </div>
              </div>

              <div className="form--group">
                <label htmlFor="message" className="form--label">
                  <span>Project Details</span>
                  <span className="required">*</span>
                </label>
                <div className="textarea--wrapper">
                  <textarea
                    className="form--textarea"
                    id="message"
                    name="message"
                    rows="8"
                    placeholder="Tell me about your project requirements, timeline, budget, and any specific features you need..."
                    required
                  />
                  <div className="textarea--footer">
                    <div className="textarea--help">
                      <svg viewBox="0 0 16 16" width="12" height="12">
                        <path fillRule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0114.25 13H8.06l-2.573 2.573A1.458 1.458 0 013 14.543V13H1.75A1.75 1.75 0 010 11.25V1.75z"/>
                      </svg>
                      <span>Be as detailed as possible for better assistance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Footer */}
            <div className="form--footer">
              <div className="form--actions">
                <button
                  type="submit"
                  className="btn--primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading--spinner"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 16 16" width="16" height="16">
                        <path fillRule="evenodd" d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75z"/>
                      </svg>
                      <span>Send Message</span>
                    </>
                  )}
                </button>
                <button type="button" className="btn--secondary" onClick={() => form.current?.reset()}>
                  <svg viewBox="0 0 16 16" width="16" height="16">
                    <path fillRule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"/>
                  </svg>
                  Clear
                </button>
              </div>
              <div className="form--note">
                <svg viewBox="0 0 16 16" width="14" height="14">
                  <path fillRule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm6.5-.25A.75.75 0 017.25 7h1a.75.75 0 01.75.75v2.75h.25a.75.75 0 010 1.5h-2a.75.75 0 010-1.5h.25v-2h-.25a.75.75 0 01-.75-.75zM8 6a1 1 0 100-2 1 1 0 000 2z"/>
                </svg>
                <span>I typically respond within 24 hours</span>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Contact Info Tab */}
      {activeTab === 'info' && (
        <div className="contact--info--section">
          <div className="contact--info--grid">
            {/* Contact Methods */}
            <div className="contact--info--card">
              <div className="info--card--header">
                <svg className="info--icon" viewBox="0 0 16 16" width="24" height="24">
                  <path fillRule="evenodd" d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75z"/>
                </svg>
                <h3>Email</h3>
              </div>
              <p className="info--content">olawuyiboluwatife@gmail.com</p>
              <a href="mailto:olawuyiboluwatife2@gmail.com" className="info--link">
                <svg viewBox="0 0 16 16" width="14" height="14">
                  <path fillRule="evenodd" d="M10.604 1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1z"/>
                </svg>
                Send Email
              </a>
            </div>

            <div className="contact--info--card">
              <div className="info--card--header">
                <svg className="info--icon" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
                </svg>
                <h3>LinkedIn</h3>
              </div>
              <p className="info--content">Professional networking</p>
              <a href="https://www.linkedin.com/in/olawuyi-boluwatife-3088632b8/" className="info--link" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 16 16" width="14" height="14">
                  <path fillRule="evenodd" d="M10.604 1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1z"/>
                </svg>
                Connect
              </a>
            </div>

            <div className="contact--info--card">
              <div className="info--card--header">
                <svg className="info--icon" viewBox="0 0 16 16" width="24" height="24">
                  <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                <h3>GitHub</h3>
              </div>
              <p className="info--content">View my code repositories</p>
              <a href="https://github.com/tifewalker" className="info--link" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 16 16" width="14" height="14">
                  <path fillRule="evenodd" d="M10.604 1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1z"/>
                </svg>
                View Profile
              </a>
            </div>

            <div className="contact--info--card">
              <div className="info--card--header">
                <svg className="info--icon" viewBox="0 0 16 16" width="24" height="24">
                  <path fillRule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.5 4.75a.75.75 0 00-1.5 0v3.5a.75.75 0 00.471.696l2.5 1a.75.75 0 00.557-1.392L8.5 7.742V4.75z"/>
                </svg>
                <h3>Response Time</h3>
              </div>
              <p className="info--content">Usually within 24 hours</p>
              <div className="response--status">
                <span className="status--dot online"></span>
                <span>Available for new projects</span>
              </div>
            </div>
          </div>

          {/* Availability Calendar */}
          <div className="availability--section">
            <h3>Current Availability</h3>
            <div className="availability--grid">
              <div className="availability--item">
                <div className="availability--day">Mon</div>
                <div className="availability--status available">Available</div>
              </div>
              <div className="availability--item">
                <div className="availability--day">Tue</div>
                <div className="availability--status available">Available</div>
              </div>
              <div className="availability--item">
                <div className="availability--day">Wed</div>
               <div className="availability--status available">Available</div>
              </div>
              <div className="availability--item">
                <div className="availability--day">Thu</div>
                <div className="availability--status available">Available</div>
              </div>
              <div className="availability--item">
                <div className="availability--day">Fri</div>
                <div className="availability--status available">Available</div>
              </div>
            </div>
            <p className="availability--note">
              <svg viewBox="0 0 16 16" width="14" height="14">
                <path fillRule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm6.5-.25A.75.75 0 017.25 7h1a.75.75 0 01.75.75v2.75h.25a.75.75 0 010 1.5h-2a.75.75 0 010-1.5h.25v-2h-.25a.75.75 0 01-.75-.75zM8 6a1 1 0 100-2 1 1 0 000 2z"/>
              </svg>
              Times shown in your local timezone
            </p>
          </div>
        </div>
      )}
    </section>
  );
}