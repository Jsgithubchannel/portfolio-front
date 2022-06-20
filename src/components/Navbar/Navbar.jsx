import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { CSSTransition } from "react-transition-group";
import Menu from "../Menu/Menu";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showButton, setShowButton] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const { width } = useWindowDimensions();

  const navigate = useNavigate();

  const onNavigate = (location) => {
    navigate(location);
  };
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
        <span className={styles.logo} onClick={() => onNavigate("/")}>
          Jisu Hong
        </span>
        {showMenu && (
          <div className={styles.menu}>
            <ul onClick={() => onNavigate("/")}>HOME</ul>
            <ul onClick={() => onNavigate("/about")}>ABOUT</ul>
            <ul onClick={() => onNavigate("/project")}>PROJECT</ul>
            <ul onClick={() => onNavigate("/contact")}>CONTACT</ul>
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
