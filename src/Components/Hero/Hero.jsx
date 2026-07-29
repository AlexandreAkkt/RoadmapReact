import "./Hero.css";

function Hero() {
  return (
    <section id="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <span className="hero-subtitle">Roadmap de Estudos</span>

          <h1>
            Aprendendo React na prática, construindo projetos reais e evoluindo
            como desenvolvedor.
          </h1>

          <p>
            Este projeto documenta toda a minha jornada de aprendizado, desde os
            conceitos fundamentais até aplicações completas em React, sempre
            utilizando boas práticas e tecnologias modernas.
          </p>

          <div className="hero-buttons">
            <a href="#roadmap" className="primary-button">
              Ver Roadmap
            </a>

            <a
              href="https://github.com/AlexandreAkkt"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-card">
          <span className="card-label">Tecnologias</span>

          <h2>Em desenvolvimento</h2>

          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Git & GitHub</li>
            <li>React</li>
            <li>Vite</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
