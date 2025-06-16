import Experience from "../../Components/Experience/Experience";
import "./About.scss";

const About = () => {
    return (
        <section className="about">
            <h1 className="about__title">About Me</h1>
            <h3 className="about_subtitle">
                Delievering robust, scale-able, and user-focused solutions that drive buisness success
            </h3>
            < Experience />
        </section>
    )
}

export default About;