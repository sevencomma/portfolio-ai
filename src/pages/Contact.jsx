// src/pages/Contact.jsx
import {
  contactSummary,
  contactDetail,
  socialLinks,
  contactAiNote,
} from "../data/contact";

function Contact() {
  return (
    <div className="page contact-page">
      <section className="section">
        <h2>Contact</h2>
        <p>{contactSummary}</p>

        <ul>
          <li>
            <strong>GitHub</strong> :{" "}
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              {socialLinks.github}
            </a>
          </li>
          <li>
            <strong>Email</strong> :{" "}
            <a href={`mailto:${socialLinks.email}`}>{socialLinks.email}</a>
          </li>
        </ul>

        <p className="contact-note" style={{ marginTop: 12 }}>
          {contactDetail}
        </p>
        <p className="contact-note small" style={{ marginTop: 8 }}>
          {contactAiNote}
        </p>
      </section>
    </div>
  );
}

export default Contact;
