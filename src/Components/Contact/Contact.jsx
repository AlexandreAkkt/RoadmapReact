import "./Contact.css";

function Contact() {
  return (
    <section id="contact">
      <div className="container contact-container">
        <div className="contact-content">
          <span className="section-subtitle">Contato</span>

          <h2>Vamos conversar?</h2>

          <p>
            Estou em busca da minha primeira oportunidade como desenvolvedor e
            estou sempre aberto para conversar sobre tecnologia, projetos,
            parcerias e novas oportunidades.
          </p>

          <p>Entre em contato pelo e-mail, LinkedIn, GitHub ou WhatsApp.</p>
        </div>

        <div className="contact-links">
          <a href="mailto:alexandreskkt@gmail.com" className="contact-card">
            <span className="contact-title"> E-mail</span>
            <span className="contact-info">alexandreskkt@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/alexandredosanjos/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-title"> LinkedIn</span>
            <span className="contact-info">
              linkedin.com/in/alexandredosanjos
            </span>
          </a>

          <a
            href="https://github.com/AlexandreAkkt"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-title"> GitHub</span>
            <span className="contact-info">github.com/AlexandreAkkt</span>
          </a>

          <a
            href="https://wa.me/5511990036239"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-title"> WhatsApp</span>
            <span className="contact-info">(11) 99003-6239</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
