import "./Footer.scss";
import { BsGithub, BsLinkedin, BsInstagram, BsYoutube } from "react-icons/bs";
import { IconContext } from "react-icons";

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
              <BsGithub />
            </li>
            <li className="footer__icon">
              <BsLinkedin />
            </li>
            <li className="footer__icon">
              <BsInstagram />
            </li>
            <li className="footer__icon">
              <BsYoutube />
            </li>
          </IconContext.Provider>
        </ul>
      </section>
      <section className="footer__right">
        <h4 className="footer__title">Quick Links</h4>
        <ul className="footer__quicklink-list">
          <li className="footer__quicklink">Home</li>
          <li className="footer__quicklink">About</li>
          <li className="footer__quicklink">Projects</li>
          <li className="footer__quicklink">Connect</li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
