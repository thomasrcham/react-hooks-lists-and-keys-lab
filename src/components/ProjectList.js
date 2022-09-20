import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{
        projects.map((item) => {
          return <ProjectItem
            name={item.name}
            about={item.about}
            technologies={item.technologies}
            key={item.id} />
        }
        )}</div>
    </div>
  );
}

export default ProjectList;
