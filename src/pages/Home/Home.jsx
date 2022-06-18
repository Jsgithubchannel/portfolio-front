import React from "react";
import styles from "./Home.module.scss";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.paragraph}>
        <h1>
          Jisu Hong,
          <br />
          Software developer
        </h1>
        <div className={styles.underline} />
        <p>
          Hello! 👋 My name is Jisu Hong <br />
          and I’m a Software developer based in South Korea.
          <br />I values cooperation and communication.
        </p>
      </div>
      <img src="assets/real_me.jpeg" alt="my pic" />
      <div className={styles.links}>
        <a
          href="https://github.com/Jsgithubchannel"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          href="https://breathtaking-life.tistory.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
        <a
          href="https://www.linkedin.com/in/jisu-hong-7a9683226/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Home;
