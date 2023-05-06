import { useState } from "react";

import "./header.css";
import "./responsive.css";
import { Link } from "react-router-dom";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="header-component">
      <header className="header">
        <h1 className="header-title">
          <i className="fa-solid fa-hat-wizard"></i> CodeWizard
        </h1>
        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          <Link className="nav-link" to={'/'} onClick={toggleMenu}>Home</Link>
          <Link className="nav-link" to={'/blog'} onClick={toggleMenu}>Blog</Link>
          <Link className="nav-link" to={'/'} onClick={toggleMenu}>About</Link>
        </nav>
        <div className="header-buttons">
          <button className="buttons-login">Sign In</button>
          <button className="buttons-register">Sign Up</button>
        </div>
        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="icon-line"></div>
            <div className="icon-line"></div>
            <div className="icon-line"></div>
          </div>
      </header>
    </div>
  );
};