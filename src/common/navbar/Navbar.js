import React, { useCallback } from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

import styles from "./Navbar.css"

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

    return <nav>
            <Button>
                <NavLink to="/" className={setClassName}>Featured</NavLink>
            </Button>
            <Button>
                <NavLink to="/products" className={setClassName}>Products</NavLink>
            </Button>
        </nav>;
};

export default Navbar;
