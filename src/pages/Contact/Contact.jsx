import React from "react";
import Title from "../../components/Title/Title";
import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileCode } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faBlogger,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className={styles.container}>
      <Title title={"Contact"} />
      <div className={styles.wrapper}>
        <img src="assets/memoji.png" alt="memoji" />
        <div className={styles.email}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          <p>mnijisu@gmail.com</p>
        </div>
        <div className={styles.icons}>
          <a
            href="https://github.com/Jsgithubchannel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          </a>
          <a
            href="https://breathtaking-life.tistory.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faBlogger} className={styles.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/jisu-hong-7a9683226/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
          </a>
        </div>
        <div className={styles.portfolio}>
          <a
            href="https://false-fiber-1fa.notion.site/Jisu-Hong-98b527681b4642b2a310b2e6cda8edae"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFileCode} className={styles.icon} />
            <p>Portfolio (ENG)</p>
          </a>

          <a
            href="https://false-fiber-1fa.notion.site/Hong-Jisu-a2039581a034497b91deb6c6ddaec3e7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFileCode} className={styles.icon} />
            <p>Portfolio (KOR)</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
