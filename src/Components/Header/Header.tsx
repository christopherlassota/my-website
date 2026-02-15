import "./Header.scss";
import { BsList } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { IconContext } from "react-icons";


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
            <li className="header__nav-link">Home</li>
            <li className="header__nav-link">About</li>
            <li className="header__nav-link">Projects</li>
            <li className="header__nav-link">Contact</li>
        </ul>
      </nav>
      <div className="header__contact">
        <IconContext.Provider value={{color: "white", size:"24px"}}>
            <BsEnvelope />
        </IconContext.Provider>
        <p className="header__contact-text">
            Let's Talk
        </p>
      </div>
    </section>
  );
};

export default Header;
