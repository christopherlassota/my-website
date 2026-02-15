import "./Skills.scss";
import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="skills__title">Skills</h2>
      <div className="skills__grid">
        {skills.map((group) => (
          <article key={group.id} className="skills__card">
            <h3 className="skills__card-title">{group.title}</h3>
            <ul className="skills__list">
              {group.skills.map((skill) => (
                <li key={`${group.id}-${skill}`} className="skills__tag">
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
