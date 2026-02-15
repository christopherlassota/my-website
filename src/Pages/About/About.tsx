import Experience from "../../Components/Experience/Experience";
import "./About.scss";
import { education } from "../../data/education";
import Skills from "../../Components/Skills/Skills";

const About = () => {
    return (
        <section className="about">
            <h1 className="about__title">About Me</h1>
            <h3 className="about__subtitle">
                Delivering robust, scalable, and user-focused solutions that drive business success
            </h3>
            <Experience />
            <section className="education">
                    <h2 className="education__title">
                        Education
                    </h2>
                {education.map((item) => (
                    <article key={item.id} className="education__card">
                        <div className="education__card-top">
                            <p className="education__logo">
                                {item.logo}
                            </p>
                            <div className="education__information">
                                <h3 className="education__degree">
                                    {item.degree}
                                </h3>
                                <h4 className="education__institute">
                                    {item.school}
                                </h4>
                                <p className="education__date">{item.dates}</p>
                            </div>
                        </div>
                        <p className="education__description">{item.description}</p>
                    </article>
                ))}
            </section>
            <Skills />
        </section>
    )
}

export default About;
