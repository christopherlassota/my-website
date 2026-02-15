import Experience from "../../Components/Experience/Experience";
import "./About.scss";

const About = () => {
    return (
        <section className="about">
            <h1 className="about__title">About Me</h1>
            <h3 className="about_subtitle">
                Delivering robust, scalable, and user-focused solutions that drive business success
            </h3>
            <Experience />
            <section className="education">
                    <h2 className="education__title">
                        Education
                    </h2>
                <article className="education__card">
                    <div className="education__card-top">
                        <p className="education__logo">
                            MRU
                        </p>
                        <div className="education__information">
                            <h3 className="education__degree">
                                Bachelor's of Science In Cellular and Molecular Biology
                            </h3>
                            <h4 className="education__institute">
                                Mount Royal University
                            </h4>
                            <p className="education__date">2018-2024</p>
                        </div>
                    </div>
                    <p className="education__description">Earned a BSc in Cellular and Molecular Biology with a focus on genetics, biochemistry, and lab research.</p>
                </article>
            </section>
        </section>
    )
}

export default About;
