import React, { useCallback } from "react";
import { Paper, Box, Grid } from "@mui/material";
import backendClient from "./client/backendClient";
import Banner from "./common/Banner";

import styles from "./App.css";

const App = () => {
  const getProductInfo = useCallback(() => {
    backendClient.getProductInfo();
  });

  return (
    <div>
      <Box className={styles.pageContent}>
        <Paper className={styles.heading}>
          <h1>Scotty Cameron Reseller</h1>
        </Paper>
        <Grid
          container
          className={styles.bannerGallery}
          columns={{ xs: 4, sm: 8, md: 12 }}
          // TODO: full study material grid
        >
          <Grid item xs={4}>
            <Banner />
          </Grid>
          <Grid item xs={4}>
            <Banner />
          </Grid>
          <Grid item xs={4}>
            <Banner />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default App;
