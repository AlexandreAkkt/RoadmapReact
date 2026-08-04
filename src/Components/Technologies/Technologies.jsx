import "./Technologies.css";

function Technologies() {
  // Lista das tecnologias exibidas na seção
  const technologies = [
    {
      name: "Java",
      icon: "☕",
      description: "Linguagem para desenvolvimento backend",
    },
    {
      name: "C#",
      icon: "🔷",
      description: "Linguagem para desenvolvimento backend",
    },
    {
      name: ".NET",
      icon: "⚙️",
      description: "Framework para aplicações robustas",
    },
    {
      name: "React",
      icon: "⚛️",
      description: "Biblioteca para interfaces modernas",
    },
    {
      name: "JavaScript",
      icon: "🟨",
      description: "Linguagem para desenvolvimento web",
    },
    {
      name: "TypeScript",
      icon: "🔵",
      description: "JavaScript com tipagem estática",
    },
    {
      name: "HTML",
      icon: "📄",
      description: "Estrutura das páginas web",
    },
    {
      name: "CSS",
      icon: "🎨",
      description: "Estilização de interfaces",
    },
    {
      name: "GitHub",
      icon: "🐙",
      description: "Hospedagem de projetos Git",
    },
    {
      name: "MySQL",
      icon: "🗄️",
      description: "Banco de dados relacional",
    },
    {
      name: "SQL Server",
      icon: "💾",
      description: "Banco de dados Microsoft",
    },
  ];

  return (
    <section id="technologies">
      <div className="container">
        {/* Título e descrição da seção */}
        <div className="technologies-header">
          <span className="section-subtitle">Tecnologias</span>

          <h2>Tecnologias que fazem parte da minha jornada</h2>

          <p>
            Algumas das linguagens, frameworks e ferramentas que utilizo nos
            meus estudos e projetos.
          </p>
        </div>

        {/* Grid com os cards das tecnologias */}
        <div className="technologies-grid">
          {technologies.map((tech) => (
            <div className="technology-card" key={tech.name}>
              <div className="technology-icon">{tech.icon}</div>

              <h3>{tech.name}</h3>

              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
