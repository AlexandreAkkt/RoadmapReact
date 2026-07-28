import "./Hero.css";

function Hero() {
  return (
    <section id="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <span className="hero-subtitle">Meu roadmap de estudos</span>

          <h1>Aprendendo React na prática e construindo projetos reais</h1>

          <p>
            Este projeto registra minha evolução nos estudos de React,
            JavaScript, componentes, estilização, Git e desenvolvimento
            Front-end.
          </p>

          <div className="hero-buttons">
            <a href="#roadmap" className="primary-button">
              Ver roadmap
            </a>

            <a
              href="https://github.com/AlexandreAkkt"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              Ver GitHub
            </a>
          </div>
        </div>

        <div className="hero-card">
          <span className="card-label">Roadmap React</span>

          <h2>Tecnologias em estudo</h2>

          <ul>
            <li>✓ HTML</li>
            <li>✓ CSS</li>
            <li>✓ JavaScript</li>
            <li>✓ Git e GitHub</li>
            <li>✓ React</li>
            <li>✓ Vite</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
