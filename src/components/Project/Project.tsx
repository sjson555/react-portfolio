import React from "react";
import { BsGithub, BsGlobe } from "react-icons/bs";
import "../../styles/Project.css";

const Project = ({
  imgSrc,
  title,
  demo,
  description,
  github,
}: {
  imgSrc: string;
  title: string;
  demo?: string;
  description: string;
  github?: string;
}) => {
  return (
    <div className="project-content">
      <img className="project-image" src={imgSrc} alt={title} />
      <div className="project-divider" />
      <p className="project-title">{title}</p>
      <div className="project-divider" />
      <p className="project-description">{description}</p>
      <div className="project-buttons">
        {github && (
          <a
            className="project-btn"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="project-icon" />
            GitHub
          </a>
        )}
        {demo && (
          <a
            className="project-btn"
            href={demo}
            target="_blank"
            rel="noreferrer"
          >
            <BsGlobe className="project-icon" />
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
