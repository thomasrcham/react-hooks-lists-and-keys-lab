import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item" key={name}>
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((item) => {
          return <span id={item} key={item}>{item}</span>
        })}
      </div>
    </div>
  );
}

export default ProjectItem;
