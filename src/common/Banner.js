import React from "react";
import { Paper } from "@mui/material";

import testImage from "../../public/test-putter.webp";
import styles from "./Banner.css";

const Banner = () => {
  return (
    <>
      <Paper className={styles.bannerContainer}>
        <img src={testImage} />
        <Paper className={styles.bannerText}>Content</Paper>
      </Paper>
    </>
  );
};

export default Banner;
