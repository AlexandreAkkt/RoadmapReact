import "./GitHub.css";

function GitHub() {
  return (
    <section id="github">
      <div className="container github-container">
        <div className="github-content">
          <span className="section-subtitle">GitHub</span>

          <h2>Acompanhe meus projetos</h2>

          <p>
            No meu GitHub compartilho projetos desenvolvidos durante meus
            estudos, exercícios práticos e minha evolução como desenvolvedor.
          </p>

          <a
            href="https://github.com/AlexandreAkkt"
            target="_blank"
            rel="noreferrer"
            className="github-button"
          >
            Acessar meu GitHub
          </a>
        </div>

        <div className="github-card">
          <div className="github-profile">
            <div className="github-avatar">AHA</div>

            <div>
              <h3>Alexandre Anjos</h3>
              <span>@AlexandreAkkt</span>
            </div>
          </div>

          <p>
            Estudante de Ciência da Computação, desenvolvendo projetos com
            React, JavaScript, Java, C# e outras tecnologias.
          </p>

          <div className="github-projects">
            <span>Roadmap React</span>
            <span>Site Neuropsicopedagogia</span>
            <span>Projetos Java</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GitHub;
