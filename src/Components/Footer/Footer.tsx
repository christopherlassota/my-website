import "./Footer.scss";
import { BsGithub, BsLinkedin, BsInstagram, BsYoutube } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__left">
        <h3 className="footer__title">Christopher Lassota</h3>
        <p className="footer__description">
          Full-stack web developer passionate about creating exceptional web
          experiences. Specializing in react.js and modern web technologies
        </p>
        <ul className="footer__icon-list">
          <IconContext.Provider value={{ color: "#5E5E5E", size: "24px" }}>
            <li className="footer__icon">
              <a
                className="footer__icon-link"
                href="https://github.com/christopherlassota"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
              >
                <BsGithub />
              </a>
            </li>
            <li className="footer__icon">
              <a
                className="footer__icon-link"
                href="https://www.linkedin.com/in/christopherlassota/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <BsLinkedin />
              </a>
            </li>
            <li className="footer__icon">
              <a
                className="footer__icon-link"
                href="#"
                aria-label="Instagram profile (add link)"
              >
                <BsInstagram />
              </a>
            </li>
            <li className="footer__icon">
              <a
                className="footer__icon-link"
                href="#"
                aria-label="YouTube profile (add link)"
              >
                <BsYoutube />
              </a>
            </li>
          </IconContext.Provider>
        </ul>
      </section>
      <section className="footer__right">
        <h4 className="footer__title">Quick Links</h4>
        <ul className="footer__quicklink-list">
          <li>
            <Link className="footer__quicklink" to="/">Home</Link>
          </li>
          <li>
            <Link className="footer__quicklink" to="/about">About</Link>
          </li>
          <li>
            <Link className="footer__quicklink" to="/projects">Projects</Link>
          </li>
          <li>
            <Link className="footer__quicklink" to="/contact">Connect</Link>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
