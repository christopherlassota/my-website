import "./Experience.scss";
import { BsCheck2Circle, BsAward } from "react-icons/bs";
import { IconContext } from "react-icons";

const Experience = () => {
    return (
        <section className="experience">
            <h2 className="experience__title">Professional Experience</h2>
            <article className="experience__card">
                <div className="experience__header">
                <h3 className="experience__title">English Second Language Teacher</h3>
                <p className="experience__date">May 2024 - Aug 2024</p>
                <h4 className="experience__company">Suppaphanya School</h4>
                <h5 className="experience__location">Chiang Rai, Thailand</h5>
                </div>
                <ul className="experience__list">
                    <p className="experience__subtitle">
                        Key Responsibilities:
                    </p>
                    <IconContext.Provider value={{ color: "red", size: "24px" }}>
                    <li className="experience__item">
                        <BsCheck2Circle /><p className="experience__text">Planning and delivering engaging english lessons tailored to students' varying proficiency levels and learning styles</p>
                    </li>
                    <li className="experience__item">
                        <BsCheck2Circle /><p className="experience__text">Planning and delivering engaging english lessons tailored to students' varying proficiency levels and learning styles</p>
                    </li>
                    <li className="experience__item">
                        <BsCheck2Circle /><p className="experience__text">Planning and delivering engaging english lessons tailored to students' varying proficiency levels and learning styles</p>
                    </li>
                    </IconContext.Provider>
                </ul>
                <ul className="experience__list">
                    <p className="experience__subtitle">
                        Achievements:
                    </p>
                    <IconContext.Provider value={{ color: "yellow", size: "24px" }}>
                    <li className="experience__item">
                        <BsAward /><p className="experience__text">Planning and delivering engaging english lessons tailored to students' varying proficiency levels and learning styles</p>
                    </li>
                    <li className="experience__item">
                        <BsAward /><p className="experience__text">Planning and delivering engaging english lessons tailored to students' varying proficiency levels and learning styles</p>
                    </li>
                    <li className="experience__item">
                        <BsAward /><p className="experience__text">Planning and delivering engaging english lessons tailored to students' varying proficiency levels and learning styles</p>
                    </li>
                    </IconContext.Provider>
                </ul>
            </article>
        </section>
    )
}

export default Experience;