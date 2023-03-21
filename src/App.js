import React, { useCallback, useState, useEffect } from "react";
import { Paper, Box, Grid, Button } from "@mui/material";
import backendClient from "./client/backendClient";
import Banner from "./common/Banner";

import styles from "./App.css";

const App = () => {
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    backendClient.getProductInfo(setProductInfo);
  }, [setProductInfo]);

  const getProductInfo = useCallback(() => {
    return backendClient.getProductInfo();
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
          {productInfo.map((product) => {
            return (
              <Grid item xs={4}>
                <Banner imageSrc={product.image_url}>{product.name}</Banner>
              </Grid>
            );
          })}
        </Grid>
        <Button onClick={getProductInfo}>Inventory</Button>
      </Box>
    </div>
  );
};

export default App;
