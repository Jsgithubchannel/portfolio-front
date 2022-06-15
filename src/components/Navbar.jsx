import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.scss";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    width > 1024 ? setShowMenu(true) : setShowMenu(false);
  }, [width]);
  return (
    <div className={styles.container}>
      <span className={styles.logo}>Jisu Hong</span>
      {showMenu ? (
        <div className={styles.menu}>
          <ul>HOME</ul>
          <ul>ABOUT</ul>
          <ul>PROJECT</ul>
          <ul>CONTACT</ul>
        </div>
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          className={styles.barIcon}
          // onClick={() => {
          //   setShowDropDownMenu(true);
          // }}
        />
      )}
    </div>
  );
};

export default Navbar;
