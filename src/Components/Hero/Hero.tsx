import "./Hero.scss";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { IconContext } from "react-icons";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__picture"></div>
      <h1 className="hero__title">Christopher Lassota</h1>
      <h2 className="hero__subtitle">
        Building Intuitive, User-focused applications
      </h2>
      <p className="hero__summary">
        I recently completed an intensive software development bootcamp, where I
        gained hands-on experience in full-stack development using React,
        Node.js, and SQL. My background includes diverse roles—from teaching
        abroad to working in quality control labs—which shaped my adaptability,
        communication, and problem-solving skills. I’m especially drawn to
        collaborative environments where I can keep learning, contribute to
        meaningful projects, and grow as a developer.
      </p>
      <article className="hero__availability">
        <h3 className="hero__subtitle">Available for new projects</h3>
      </article>
      <article className="hero__actions">
        <div className="hero__buttons">
          <a href="#" className="hero__link">
            <button className="hero__button">Get in Touch</button>
          </a>
          <a href="#" className="hero__link">
            <button className="hero__button">View My Work</button>
          </a>
        </div>
        <div className="hero__icons">
          <IconContext.Provider value={{ color: "#5E5E5E", size: "24px" }}>
            <a href="#" className="hero__link">
              <button className="hero__socials">
                <BsGithub />
                Github
              </button>
            </a>
            <a href="#" className="hero__link">
              <button className="hero__socials">
            <BsLinkedin />
                LinkedIn
              </button>
            </a>
          </IconContext.Provider>
        </div>
      </article>
    </section>
  );
};

export default Hero;
