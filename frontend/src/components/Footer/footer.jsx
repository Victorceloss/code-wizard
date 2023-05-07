import "./footer.css";
import "./responsive.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentData = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-one">
        <div className="footer-logo">
          <h3 className="footer-title">
            <i className="fa-solid fa-hat-wizard"></i> CodeWizard
          </h3>
          <div className="footer-nav">
            <Link className="footer-link" to={'/'}>Home</Link>
            <Link className="footer-link" to={'/blog'}>Blog</Link>
            <Link className="footer-link" to={'/about'}>About</Link>
          </div>
          <h3 className="footer-copyright">CodeWizard © {currentData}</h3>
        </div>
        <div className="footer-contacts">
          <div className="contact-info">
            <i className="fa-solid fa-phone"></i> +351 123 456 789
          </div>
          <div className="contact-info">
            <a href="mailto:codewizard2023company@gmail.com" className="mail-link">
              <i className="fa-solid fa-envelope"></i> codewizard@gmail.com
            </a>
          </div>
          <div className="contact-info">
            <i className="fa-solid fa-location-dot"></i> Av. Escola dos Fuzileiros Navais 57
          </div>
        </div>
        <div className="footer-about">
          <h3 className="about-title">About Company</h3>
          <p className="about-text">
            With the mission of empowering people with programming skills, 
            CodeWizard is a company committed to offering high-quality and affordable
            courses for everyone. With experienced teachers and an interactive learning
            environment, CodeWizard helps its students acquire the necessary skills to 
            succeed in the programming field.
          </p>
        </div>
      </div>
      <div className="footer-social">
        <Link target="_blank" to={'https://www.instagram.com/victor8g/'} className="social-link">
          <i className="fa-brands fa-instagram"></i>
        </Link>
        <Link target="_blank" to={'https://www.linkedin.com/in/victor-vasconcelos-3a2976253/'} className="social-link">
          <i className="fa-brands fa-linkedin"></i>
        </Link>
        <Link target="_blank" to={'https://github.com/Victorceloss/code-wizard'} className="social-link">
          <i className="fa-brands fa-github"></i>
        </Link>
      </div>
    </footer>
  );
};