import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Menu.module.scss";

const Menu = ({ setDropDownMenu }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.dimmer} onClick={() => setDropDownMenu(false)} />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.menubar}>
            <ul onClick={() => navigate("/")}>HOME</ul>
            <hr />
            <ul onClick={() => navigate("/about")}>ABOUT</ul>
            <hr />
            <ul onClick={() => navigate("/project")}>PROJECT</ul>
            <hr />
            <ul onClick={() => navigate("/contact")}>CONTACT</ul>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
