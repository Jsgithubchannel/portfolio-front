import React, { useCallback, useEffect, useState } from "react";
import styles from "./Project.module.scss";
import Title from "../../components/Title/Title";
import { getProject } from "../../services/projectService";
import { useNavigate } from "react-router-dom";

const Project = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [hoverId, setHoverId] = useState(0);
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
        {projects.map((project) => (
          <div key={project.id} className={styles.imgContainer}>
            {project.id === hoverId && (
              <p className={styles.title}>{project.title}</p>
            )}
            <img
              src={`http://localhost:8000${project.photo}`}
              alt="project_screenshot"
              onMouseEnter={() => setHoverId(project.id)}
              onMouseLeave={() => setHoverId(0)}
              onClick={() =>
                navigate(`/project/${project.id}`, { state: project })
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
