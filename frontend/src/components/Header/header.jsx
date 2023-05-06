import "./header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header-component">
      <header className="header">
        <h1 className="header-title">
          <i className="fa-solid fa-hat-wizard"></i> CodeWizard
        </h1>
        <nav className="header-nav">
          <Link className="nav-link" to={'/'}>Home</Link>
          <Link className="nav-link" to={'/'}>Blog</Link>
          <Link className="nav-link" to={'/'}>About</Link>
        </nav>
        <div className="header-buttons">
          <button className="buttons-login">Sign In</button>
          <button className="buttons-register">Sign Up</button>
        </div>
      </header>
    </div>
  );
};