import ProjectCard from "../ProjectCard/ProjectCard";
import "./Content.scss";

const projectsArray = [
    {
        "title": "InStock",
        "imageUrl": "/images/InStock.png",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus necessitatibus sint non labore magni repudiandae.",
        "tags": ["React", "Typescript", "SCSS"] 
    }
]

const Content = () => {
    return (
        <section className="content">
            {projectsArray.map((project) => (
            <ProjectCard 
            title={project.title}
            imageUrl={project.imageUrl}
            description={project.description}
            tags={project.tags}
            />
            ))}
        </section>
    );
}

export default Content;