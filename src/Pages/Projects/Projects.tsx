import "./Projects.scss";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <section className="projects">
      <h1 className="projects__title">Projects</h1>
      <p className="projects__subtitle">
        Selected work that highlights my approach to design, engineering, and
        collaboration.
      </p>
      <div className="projects__grid">
        {projects.map((project) => (
          <article key={project.id} className="projects__card">
            <div
              className="projects__image"
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>
            <h3 className="projects__card-title">{project.title}</h3>
            <p className="projects__card-description">{project.description}</p>
            <ul className="projects__taglist">
              {project.tags.map((tag) => (
                <li key={`${project.id}-${tag}`} className="projects__tag">
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
