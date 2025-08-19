import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/" className="logo-link">Abdullah.</a>
      </div>
      <ul className="navbar-menu">
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Accomplishments</a></li>
        <li><a href="#socials">Socials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
