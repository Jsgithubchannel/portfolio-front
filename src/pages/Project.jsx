import React from "react";
import styles from "./Project.module.scss";
import Title from "../components/Title";

const Project = () => {
  return (
    <div className={styles.container}>
      <Title title={'Project'} />
    </div>
  );
};

export default Project;
