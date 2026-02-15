import "./Header.scss";
import { BsList } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <section className="header">
      <div className="header__logo">
        <p className="header__logo-text">CL</p>
      </div>
      <nav className="header__navigation">
        <div className="header__waffle">
          <IconContext.Provider value={{ color: "white", size: "24px" }}>
            <BsList />
          </IconContext.Provider>
        </div>
        <ul className="header__nav-list">
            <li>
              <Link className="header__nav-link" to="/">Home</Link>
            </li>
            <li>
              <Link className="header__nav-link" to="/about">About</Link>
            </li>
            <li>
              <Link className="header__nav-link" to="/projects">Projects</Link>
            </li>
            <li>
              <Link className="header__nav-link" to="/contact">Contact</Link>
            </li>
        </ul>
      </nav>
      <Link className="header__contact" to="/contact">
        <IconContext.Provider value={{color: "white", size:"24px"}}>
            <BsEnvelope />
        </IconContext.Provider>
        <p className="header__contact-text">
            Let's Talk
        </p>
      </Link>
    </section>
  );
};

export default Header;
