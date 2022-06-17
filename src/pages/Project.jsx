import React, { useCallback, useEffect, useState } from "react";
import styles from "./Project.module.scss";
import Title from "../components/Title";
import { getProject } from "../services/projectService";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const loadProjectsFromServer = useCallback(async () => {
    getProject().then((response) => {
      setProjects(response);
    });
  }, []);
  useEffect(() => {
    loadProjectsFromServer();
  }, [loadProjectsFromServer]);
  return (
    <div className={styles.container}>
      <Title title={"Project"} />
      <div className={styles.wrapper}>
        {projects.map((project) => {
          return (
            <img
              src={`http://localhost:8000${project.photo}`}
              alt="project_screenshot"
              key={project.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Project;
