import "./Header.css";

function Header() {
  return (
    <header id="header">
      <div className="container">
        <a href="#hero" className="logo">
          &lt;AHA/&gt;
        </a>

        <nav>
          <ul className="menu">
            <li>
              <a href="#hero">Início</a>
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
      </div>
    </header>
  );
}

export default Header;
