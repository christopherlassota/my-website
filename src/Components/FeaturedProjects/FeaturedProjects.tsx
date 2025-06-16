import "./FeaturedProjects.scss";

const FeaturedProjects = () => {
  return (
    <section className="featuredprojects">
      <h1 className="featuredprojects__title">Featured Projects</h1>
      <h2 className="featuredprojects__subtitle">
        A selection of my projects that showcase my expertise and passion for
        development
      </h2>
      <article className="featuredprojects__card">
        <div className="featuredprojects__image"></div>
        <h3 className="featuredprojects__card-title">InStock</h3>
        <p className="featuredprojects__card-description">
          Bandsite was one of my first projects, I learned how to use flexbox to
          great effect
        </p>
        <ul className="featuredprojects__taglist">
            <li className="featuredprojects__tag">Javascript</li>
            <li className="featuredprojects__tag">HTML</li>
            <li className="featuredprojects__tag">CSS</li>
        </ul>
      </article>
      <article className="featuredprojects__card">
        <div className="featuredprojects__image"></div>
        <h3 className="featuredprojects__card-title">InStock</h3>
        <p className="featuredprojects__card-description">
          Bandsite was one of my first projects, I learned how to use flexbox to
          great effect
        </p>
        <ul className="featuredprojects__taglist">
            <li className="featuredprojects__tag">Javascript</li>
            <li className="featuredprojects__tag">HTML</li>
            <li className="featuredprojects__tag">CSS</li>
        </ul>
      </article>
    </section>
  );
};

export default FeaturedProjects;
