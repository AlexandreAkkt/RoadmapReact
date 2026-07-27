import "./App.css";

import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Journey from "./Components/Journey/Journey";
import Technologies from "./Components/Technologies/Technologies";
import Roadmap from "./Components/Roadmap/Roadmap";
import Projects from "./Components/Projects/Projects";
import GitHub from "./Components/GitHub/GitHub";
import Certificates from "./Components/Certificates/Certificates";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Journey />
      <Technologies />
      <Roadmap />
      <Projects />
      <GitHub />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
