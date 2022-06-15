import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.scss";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { CSSTransition } from "react-transition-group";
import Menu from "./Menu";

const Navbar = () => {
  const [showButton, setShowButton] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const { width } = useWindowDimensions();

  const onClick = () => {
    setDropDownMenu(true);
  };

  useEffect(() => {
    if (width > 1024) {
      setShowMenu(true);
      setShowButton(false);
    } else {
      setShowMenu(false);
      setShowButton(true);
    }
  }, [width]);

  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.logo}>Jisu Hong</span>
        {showMenu && (
          <div className={styles.menu}>
            <ul>HOME</ul>
            <ul>ABOUT</ul>
            <ul>PROJECT</ul>
            <ul>CONTACT</ul>
          </div>
        )}

        {showButton && (
          <FontAwesomeIcon
            icon={faBars}
            className={styles.barIcon}
            onClick={onClick}
          />
        )}
      </div>
      <CSSTransition
        in={dropDownMenu}
        timeout={300}
        classNames={{
          enter: styles.enter,
          enterActive: styles.enterActive,
          exit: styles.exit,
          exitActive: styles.exitActive,
        }}
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <div>
          <Menu setDropDownMenu={setDropDownMenu} />
        </div>
      </CSSTransition>
    </nav>
  );
};

export default Navbar;
