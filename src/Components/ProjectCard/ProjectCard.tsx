import "./ProjectCard.scss";

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  description: string;
  tags: string[];
}

const ProjectCard = ({
  title,
  imageUrl,
  description,
  tags,
}: ProjectCardProps) => {
  return (
    <article className="projectcard">
      <h2 className="projectcard__title">{title}</h2>
      <div
        className="projectcard__picture"
        style={{
          backgroundImage: `url(${ imageUrl })`,
        }}
      >
        <div className="projectcard__description">
          <p className="projectcard__description-text">{description}</p>
        </div>
      </div>
      <ul className="projectcard__taglist">
        {tags.map((tag, index) => (
          <li className="projectcard__tag" key={index}>
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ProjectCard;
