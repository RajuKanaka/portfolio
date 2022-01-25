import "./Projects.css";
import ProjectsData from "../../Projects_data/ProjectData";
import Project from "../Project/Project";
const Projects = () => {
  return (
    <div id="projects" className="p-main">
      <p className="title">PROJECTS</p>
      {ProjectsData.map(({ name, desc, link, source, image }, key) => {
        return (
          <Project
            key={key}
            name={name}
            desc={desc}
            link={link}
            source={source}
            image={image}
          />
        );
      })}
    </div>
  );
};

export default Projects;
