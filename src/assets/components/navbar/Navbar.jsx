import React, { useState } from "react";
import "./navbar.css";

const logo = "img/headerlogo1.png";
const logo2 = "img/headerlogo.png";

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
        <a href="#header" className="navbar-logo" onClick={closeMenu}>
          <img
            src={isMobile ? logo2 : isHovered ? logo2 : logo}
            alt="MIC Live Travel"
            className="navbar-logo"
          />
        </a>

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
          <a href="#header" onClick={closeMenu} id="aHome">
            Home
          </a>
          <a href="#about" onClick={closeMenu}>
            Quienes Somos
          </a>

          <a href="#testify" onClick={closeMenu}>
            Testimonios
          </a>
          <a href="#services" onClick={closeMenu}>
            Socios
          </a>
          <a href="#sponsors" onClick={closeMenu}>
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
