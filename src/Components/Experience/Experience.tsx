import "./Experience.scss";
import { BsCheck2Circle, BsAward } from "react-icons/bs";
import { IconContext } from "react-icons";
import { experience } from "../../data/experience";

const Experience = () => {
    return (
        <section className="experience">
            <h2 className="experience__title">Professional Experience</h2>
            {experience.map((entry) => (
                <article key={entry.id} className="experience__card">
                    <div className="experience__header">
                        <h3 className="experience__title">{entry.role}</h3>
                        <p className="experience__date">{entry.dates}</p>
                        <h4 className="experience__company">{entry.company}</h4>
                        <h5 className="experience__location">{entry.location}</h5>
                    </div>
                    <div className="experience__section">
                        <h4 className="experience__subtitle">Key Responsibilities</h4>
                        <ul className="experience__list">
                            <IconContext.Provider value={{ color: "red", size: "24px" }}>
                                {entry.responsibilities.map((item, index) => (
                                    <li key={`${entry.id}-resp-${index}`} className="experience__item">
                                        <BsCheck2Circle />
                                        <p className="experience__text">{item}</p>
                                    </li>
                                ))}
                            </IconContext.Provider>
                        </ul>
                    </div>
                    <div className="experience__section">
                        <h4 className="experience__subtitle">Achievements</h4>
                        <ul className="experience__list">
                            <IconContext.Provider value={{ color: "yellow", size: "24px" }}>
                                {entry.achievements.map((item, index) => (
                                    <li key={`${entry.id}-ach-${index}`} className="experience__item">
                                        <BsAward />
                                        <p className="experience__text">{item}</p>
                                    </li>
                                ))}
                            </IconContext.Provider>
                        </ul>
                    </div>
                </article>
            ))}
        </section>
    )
}

export default Experience;
