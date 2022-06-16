import React from "react";
import Skill from "../components/Skill";
import Title from "../components/Title";
import styles from "./About.module.scss";
import skills from "../static/skills.json";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Title title={'About Me'} />
        <div className={styles.underline} />
      </div>
      {skills.map((skill) => (
        <Skill skill={skill} key={skill.id} />
      ))}
    </div>
  );
};

export default About;
