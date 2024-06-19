import "./app.scss";
import Hero from "./components/Hero/Hero";
import Service from "./components/Service/Service";
import Contact from "./components/contact/contact";
import Cursor from "./components/cursor/Cursor";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/portfolio";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="HomePage">
        <Navbar />
        <Hero />
      </section>
      <section id="Service">
        <Parallax type="service" />
      </section>
      <section>
        <Service />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact></Contact>
      </section>
    </div>
  );
};

export default App;
