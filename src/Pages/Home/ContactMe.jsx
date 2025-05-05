import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const form = useRef(null); // Initialize ref

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) {
      console.error("Form ref not attached properly!");
      return;
    }

    emailjs.sendForm('service_i3gsg8q', 'template_k66u0ks', form.current, 'S2sEAG-6Jz8gkWo_S')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        alert('An error occurred, please try again.');
      });
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit.
        </p>
      </div>

      {/* 👉 Attach ref={form} here */}
      <form ref={form} className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="tel"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>

        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choose a service</span>
          <select name="choose-topic" id="choose-topic" className="contact--input text-md">
            <option>WordPress Development</option>
            <option>MERN Stack Development</option>
            <option>React Development</option>
            <option>Graphics Designing</option>
          </select>
        </label>

        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="6"
            placeholder="Type your message..."
          />
        </label>

        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>

        <div>
          <button className="btn btn-primary contact--form--btn" onClick={sendEmail}>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
