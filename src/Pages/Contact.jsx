import './Contact.css';

function Contact() {
  return (
    <section className='contact' id="contact">
      <h2 className="contact_header">Contact Me</h2>

      <div className="lines">
        Whether you have an opportunity, a question, or just want to say hi — I’d love to hear from you.
        Let’s connect and make something meaningful together!
      </div>

      <h1 className="email">Email</h1>
      <div className="etype-wrapper">
        <p className="etype">khukhi321@gmail.com</p>
      </div>

      <h1 className="email">Phone Number</h1>
      <div className="etype-wrapper">
        <p className="etype">+92 306 0590604</p>
      </div>

      <h1 className="email">Address</h1>
      <div className="etype-wrapper">
        <p className="etype">House#86, Block N1, Izmir Town, Lahore.</p>
      </div>
    </section>
  );
}

export default Contact;
