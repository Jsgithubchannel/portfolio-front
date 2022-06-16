import React, { useEffect } from "react";
import styles from "./Project.module.scss";
import Title from "../components/Title";
import { getProject } from "../services/projectService";

const Project = () => {
  useEffect(() => {
    const get = async () => {
      getProject().then((response) => {
        console.log(response);
      });
    };
    get();
  }, []);
  return (
    <div className={styles.container}>
      <Title title={"Project"} />
    </div>
  );
};

export default Project;
