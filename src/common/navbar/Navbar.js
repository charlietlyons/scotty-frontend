import React, { useCallback } from "react";
import { NavLink } from "react-router-dom";
import ThemedButton from "../Button";

import styles from "./Navbar.css";

const Navbar = () => {
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
    <nav>
      <ThemedButton>
        <NavLink to="/" className={setClassName}>
          Featured
        </NavLink>
      </ThemedButton>
      <ThemedButton>
        <NavLink to="/products" className={setClassName}>
          Products
        </NavLink>
      </ThemedButton>
    </nav>
  );
};

export default Navbar;
