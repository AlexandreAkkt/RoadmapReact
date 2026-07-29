import "./About.css";

function About() {
  return (
    <section id="about">
      <div className="container about-container">
        <div className="about-content">
          <span className="section-subtitle">Sobre o projeto</span>

          <h2>Meu caminho no desenvolvimento</h2>

          <p>
            Este projeto foi criado para registrar minha evolução nos estudos de
            desenvolvimento web, principalmente com React.
          </p>

          <p>
            Aqui compartilho as tecnologias que estou aprendendo, projetos
            desenvolvidos, desafios enfrentados e os próximos passos da minha
            jornada profissional.
          </p>
        </div>

        <div className="about-card">
          <h3>Objetivos atuais</h3>

          <ul>
            <li>Aprimorar meus conhecimentos em React</li>
            <li>Desenvolver projetos práticos</li>
            <li>Aprender boas práticas de programação</li>
            <li>Construir um portfólio profissional</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
