import React from "react";
import NavButton from "./NavButton";
import AppBar from "@mui/material/AppBar";

import styles from "./Navbar.css";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      className={styles.navBar}
      sx={{
        color: "text.secondary",
        bgcolor: "secondary.main",
      }}
    >
      <NavButton to="/">Featured</NavButton>
      <NavButton to="/products">Products</NavButton>
      <NavButton to="/faq">FAQ</NavButton>
    </AppBar>
  );
};

export default Navbar;
