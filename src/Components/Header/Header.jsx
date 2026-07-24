import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        &lt;AHA/&gt;{/*Representa caractere especial. */}
      </div>

      <nav>{/** NAV serve para indicar que o bloco tem links principais
       * de navegação do site*/}
        
        <ul> {/** Unordered List - lista ordenada */}
          <li>
            <a href="#home">Início</a>
          </li>

          <li>
            <a href="#about">Sobre</a>
          </li>

          <li>
            <a href="#technologies">Tecnologias</a>
          </li>

          <li>
            <a href="#projects">Projetos</a>
          </li>

          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;