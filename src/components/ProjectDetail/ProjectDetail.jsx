import React from "react";
import styles from "./ProjectDetail.module.scss";
import { useLocation } from "react-router-dom";

const ProjectDetail = () => {
  const { state } = useLocation();
  const [
    // eslint-disable-next-line
    id,
    title,
    start_date,
    end_date,
    desc,
    qualifications,
    achievements,
    // eslint-disable-next-line
    created_at,
    // eslint-disable-next-line
    updated_at,
    photo,
  ] = Object.values(state);

  // MyUnit doesn't have achievements.
  let achievementsList = [];
  if (achievements.length) {
    achievementsList = achievements.split("-");
    achievementsList.shift();
  }
  const qualificationsList = qualifications.split("- ");
  qualificationsList.shift();
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <p>
        {start_date}-{end_date}
      </p>
      <p>{desc}</p>
      {achievementsList.length > 0 && <h2>Achievements</h2>}
      {achievementsList.length > 0 &&
        achievementsList.map((achievement, idx) => (
          <ul key={idx}>- {achievement}</ul>
        ))}
      <h2>Qualifications</h2>
      {qualificationsList.map((qualification, idx) => (
        <ul key={idx}>- {qualification}</ul>
      ))}
      <img
        src={`${process.env.REACT_APP_HTTP_PROXY}${photo}`}
        alt="project_screenshot"
      />
    </div>
  );
};

export default ProjectDetail;
