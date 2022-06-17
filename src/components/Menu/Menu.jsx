import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Menu.module.scss";

const Menu = ({ setDropDownMenu }) => {
  const navigate = useNavigate();

  const onNavigate = (location) => {
    navigate(location);
    setDropDownMenu(false);
  };

  return (
    <>
      <div className={styles.dimmer} onClick={() => setDropDownMenu(false)} />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.menubar}>
            <ul onClick={() => onNavigate("/")}>HOME</ul>
            <hr />
            <ul onClick={() => onNavigate("/about")}>ABOUT</ul>
            <hr />
            <ul onClick={() => onNavigate("/project")}>PROJECT</ul>
            <hr />
            <ul onClick={() => onNavigate("/contact")}>CONTACT</ul>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
