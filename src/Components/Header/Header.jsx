import "./Header.css";

function Header() {
  return (
    <Header>
      <div className="container">
        <h2>Roadmap React</h2>

        <nav>
          <ul>
            <li>
              <a href="home">Início</a>
            </li>

            <li>
              <a href="about">Sobre</a>
            </li>

            <li>
              <a href="Technologies"> Tecnologias</a>
            </li>
          </ul>
        </nav>
      </div>
    </Header>
  );
}

export default Header;
