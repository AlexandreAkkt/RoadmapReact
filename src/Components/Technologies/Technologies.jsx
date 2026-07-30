import "./Technologies.css";

function Technologies() {
  return (
    <section id="technologies">
      <div className="container technologies-container">
        <div className="technologies-header">
          <span className="section-subtitle">Tecnologias</span>

          <h2>Tecnologias que fazem parte da minha jornada</h2>

          <p>
            Estas são algumas das tecnologias, linguagens e ferramentas que
            venho estudando e utilizando durante meu processo de aprendizado.
          </p>
        </div>

        <div className="technologies-grid">
          <div className="technology-card">
            <h3>Front-end</h3>

            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>TypeScript</li>
            </ul>
          </div>

          <div className="technology-card">
            <h3>Back-end</h3>

            <ul>
              <li>Java</li>
              <li>C#</li>
              <li>Node.js</li>
              <li>Spring Boot</li>
            </ul>
          </div>

          <div className="technology-card">
            <h3>Banco de Dados</h3>

            <ul>
              <li>MySQL</li>
              <li>SQL Server</li>
            </ul>
          </div>

          <div className="technology-card">
            <h3>Ferramentas</h3>

            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>VS Code</li>
              <li>Vite</li>
              <li>NetBeans</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
