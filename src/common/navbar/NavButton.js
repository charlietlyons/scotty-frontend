import React, { useCallback } from "react";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

import styles from "./Navbar.css";

const NavButton = (props) => {
  const { to, sx, variant, children } = props;

  const setClassName = useCallback(({ isActive, isPending }) => {
    if (isPending) {
      return `${styles.pending} ${styles.navLink}`;
    } else if (isActive) {
      return `${styles.active} ${styles.navLink}`;
    } else {
      return styles.navLink;
    }
  }, []);

  return (
    <Button sx={sx} variant={variant}>
      <NavLink to={to} className={setClassName}>
        {children}
      </NavLink>
    </Button>
  );
};

export default NavButton;
