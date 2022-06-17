import React from "react";
import styles from "./ProjectDetail.module.scss";
import { useLocation } from "react-router-dom";

const ProjectDetail = () => {
  const { state } = useLocation();
  const [
    id,
    title,
    start_date,
    end_date,
    desc,
    achievements,
    qualifications,
    created_at,
    updated_at,
    photo,
  ] = Object.values(state);
  const achievementsList = achievements.split("-");
  achievementsList.shift();
  const qualificationsList = qualifications.split("-");
  qualificationsList.shift();
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <p>
        {start_date}-{end_date}
      </p>
      <p>{desc}</p>

      <h2>Achievements</h2>
      {achievementsList.map((achievement, idx) => (
        <ul key={idx}>- {achievement}</ul>
      ))}
      <h2>Qualifications</h2>
      {qualificationsList.map((qualification, idx) => (
        <ul key={idx}>- {qualification}</ul>
      ))}
      <img src={`http://localhost:8000${photo}`} alt="project_screenshot" />
    </div>
  );
};

export default ProjectDetail;
