import "./Contact.css";

const Contact = () => {
    return (
        <section id="contact">
        <p className="contact-text-p1">Get in Touch</p>
        <h1 className="contact-title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src="./assets/email.png"
              alt="Email icon"
              className="icon contact-icon email-icon"
            />
            <p><a href="mailto:waltteriheino@gmail.com">waltteriheino@gmail.com</a></p>
          </div>
          <div className="contact-info-container">
            <img
              src="./assets/linkedin.png"
              alt="LinkedIn icon"
              className="icon contact-icon"
            />
            <p><a href="https://www.linkedin.com/in/waltteri-h-1a28501a5/" target="_blank">LinkedIn</a></p>
          </div>
        </div>
      </section>
    );
}

export default Contact;