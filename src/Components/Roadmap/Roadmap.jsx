import "./Roadmap.css";

function Roadmap() {
  return (
    /* Início da seção Roadmap */
    <section id="roadmap">
      {/* Container centraliza todo o conteúdo da seção */}
      <div className="container roadmap-container">
        <div className="roadmap-header">
          <span className="section-subtitle">Roadmap</span>

          <h2>Minha trilha de aprendizado</h2>

          <p>
            Este roadmap representa as etapas que venho seguindo para evoluir no
            desenvolvimento web e construir projetos cada vez mais completos.
          </p>
        </div>

        <div className="roadmap-list">
          <div className="roadmap-item">
            <span className="roadmap-number">01</span>

            <div>
              <h3>Fundamentos da Web</h3>

              <p>
                HTML, CSS, responsividade, Flexbox, Grid e criação de páginas
                modernas.
              </p>
            </div>
          </div>

          <div className="roadmap-item">
            <span className="roadmap-number">02</span>

            <div>
              <h3>JavaScript</h3>

              <p>
                Variáveis, funções, arrays, objetos, DOM, eventos, promises,
                fetch e async/await.
              </p>
            </div>
          </div>

          <div className="roadmap-item">
            <span className="roadmap-number">03</span>

            <div>
              <h3>React</h3>

              <p>
                Componentes, JSX, props, state, hooks, formulários, rotas e
                consumo de APIs.
              </p>
            </div>
          </div>

          {/* Etapa 04 */}
          <div className="roadmap-item">
            <span className="roadmap-number">04</span>

            <div>
              <h3>Git e GitHub</h3>

              <p>
                Versionamento de código, commits, branches, pull, push, merge e
                organização de repositórios.
              </p>
            </div>
          </div>

          {/* Etapa 05 */}
          <div className="roadmap-item">
            <span className="roadmap-number">05</span>

            <div>
              <h3>Back-end e Banco de Dados</h3>

              <p>
                Java, C#, Node.js, APIs REST, SQL, MySQL, SQLite e integração
                entre front-end e back-end.
              </p>
            </div>
          </div>

          {/* Etapa 06 */}
          <div className="roadmap-item">
            <span className="roadmap-number">06</span>

            <div>
              <h3>Projetos e Deploy</h3>

              <p>
                Desenvolvimento de projetos completos, boas práticas,
                documentação e publicação das aplicações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
