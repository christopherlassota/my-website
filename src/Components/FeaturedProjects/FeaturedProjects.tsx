import "./FeaturedProjects.scss";

const FeaturedProjects = () => {
  return (
    <section className="featuredprojects">
      <h2 className="featuredprojects__title">Featured Projects</h2>
      <h3 className="featuredprojects__subtitle">
        A selection of my projects that showcase my expertise and passion for
        development
      </h3>
      <div className="featuredprojects__card-container">
        <article className="featuredprojects__card">
          <div className="featuredprojects__image"></div>
          <h4 className="featuredprojects__card-title">InStock</h4>
          <p className="featuredprojects__card-description">
            Bandsite was one of my first projects, I learned how to use flexbox
            to great effect
          </p>
          <ul className="featuredprojects__taglist">
            <li className="featuredprojects__tag">Javascript</li>
            <li className="featuredprojects__tag">HTML</li>
            <li className="featuredprojects__tag">CSS</li>
          </ul>
        </article>
        <article className="featuredprojects__card">
          <div className="featuredprojects__image"></div>
          <h4 className="featuredprojects__card-title">InStock</h4>
          <p className="featuredprojects__card-description">
            Bandsite was one of my first projects, I learned how to use flexbox
            to great effect
          </p>
          <ul className="featuredprojects__taglist">
            <li className="featuredprojects__tag">Javascript</li>
            <li className="featuredprojects__tag">HTML</li>
            <li className="featuredprojects__tag">CSS</li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default FeaturedProjects;
