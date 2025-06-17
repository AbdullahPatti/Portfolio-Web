import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-link">Abdullah.</Link>
      </div>
      <ul className="navbar-menu">
        <li><Link to="/about">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/Socials">Socials</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
