import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(index);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="spacer"></div>
      <div className="mainstream">
        <h2 className="contact_header">Contact Me</h2>
        <div className="lines">
          Whether you have an opportunity, a question, or just want to say hi — I’d love to hear from you.
          Let’s connect and make something meaningful together!
        </div>

        <div className="contact-details">
          <ul className="contact-list">
            {[
              {
                label: "Email",
                value: "abdullaharoon.work@gmail.com",
                link: "mailto:abdullaharoon.work@gmail.com",
              },
              {
                label: "Phone Number",
                value: "+92 306 0590604",
              },
              {
                label: "Address",
                value: "Lahore, Punjab, Pakistan",
              },
            ].map((item, index) => (
              <li key={index} className="contact-card">
                <div className="contact-content">
                  <h3 className="email">{item.label}</h3>
                  <div className="etype-wrapper">
                    {item.link ? (
                      <a href={item.link} className="etype-link">
                        <p className="etype" onClick={() => handleCopy(item.value, index)}>
                          {item.value}
                          {copied === index && <span className="copy-tooltip">Copied!</span>}
                        </p>
                      </a>
                    ) : (
                      <p className="etype" onClick={() => handleCopy(item.value, index)}>
                        {item.value}
                        {copied === index && <span className="copy-tooltip">Copied!</span>}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;