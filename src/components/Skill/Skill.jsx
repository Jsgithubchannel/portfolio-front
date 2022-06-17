import React from "react";
import styles from "./Skill.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faPython,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

const icons = {
  "Front-End": faHtml5,
  "Back-End": faPython,
  Tool: faGitAlt,
};

const Skill = ({ skill }) => {
  return (
    <div className={styles.container}>
      <div className={styles.circle}>
        <FontAwesomeIcon icon={icons[skill.title]} className={styles.icon} />
      </div>
      <h1>{skill.title}</h1>
      {Object.entries(skill.stack).map(([key, val]) => (
        <ul key={key}>{val}</ul>
      ))}
    </div>
  );
};

export default Skill;
