import React, { useState, useEffect, useCallback } from "react";
import { Box, Grid, Paper, Button } from "@mui/material";
import Banner from "../common/Banner";
import backendClient from "../client/backendClient";

import styles from "../App.css";

const Products = () => {
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    backendClient.getProductInfo(setProductInfo);
  }, [setProductInfo]);

  const getProductInfo = useCallback(() => {
    return backendClient.getProductInfo();
  });

  return (
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
  );
};

export default Products;
