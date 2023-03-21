import React from "react";
import { Paper } from "@mui/material";

import styles from "./Banner.css";

const Banner = (props) => {
  return (
    <>
      <Paper className={styles.bannerContainer}>
        <img src={props.imageSrc} />
        <Paper className={styles.bannerText}>{props.children}</Paper>
      </Paper>
    </>
  );
};

export default Banner;
