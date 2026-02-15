import "./Projects.scss";

const Projects = () => {
  return (
    <section className="projects">
      <h1 className="projects__title">Projects</h1>
      <p className="projects__subtitle">
        Selected work that highlights my approach to design, engineering, and
        collaboration.
      </p>
      <div className="projects__grid">
        <article className="projects__card">
          <h3 className="projects__card-title">Coming Soon</h3>
          <p className="projects__card-description">
            I’m curating a small set of projects with clear outcomes and tech
            stacks. In the meantime, check the featured projects on the home
            page.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Projects;
