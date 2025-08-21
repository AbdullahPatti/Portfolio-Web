import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';

import Qualification from './Pages/Qualification';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Socials from './Pages/Socials';
import Contact from './Pages/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="qualification">
          <Qualification />
        </section>
        <section id="skills">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="socials">
          <Socials />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;