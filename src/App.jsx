import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';

import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Socials from './Pages/Socials';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Socials />
        <Contact />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
