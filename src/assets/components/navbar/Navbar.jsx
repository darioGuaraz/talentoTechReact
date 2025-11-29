import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const logo = "img/headerlogo1.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 912);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 912);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <nav
      className="navbar"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="MIC Live Travel" className="navbar-logo" />
        </Link>

        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div
          id="primary-navigation"
          className={`navbar-links ${isMenuOpen ? "active" : ""}`}
        >
          <Link to="/" onClick={closeMenu} id="aHome">
            Home
          </Link>
          <Link to="/about" onClick={closeMenu}>
            Quienes Somos
          </Link>

          <Link to="/testify" onClick={closeMenu}>
            Testimonios
          </Link>

          <Link to="/contact" onClick={closeMenu}>
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
