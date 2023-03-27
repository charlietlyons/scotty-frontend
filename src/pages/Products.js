import React, { useState, useEffect, useCallback } from "react";
import { Grid } from "@mui/material";
import Banner from "../common/banner/Banner";
import backendClient from "../client/backendClient";

import styles from "../App.css";

const Products = () => {;
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    backendClient.getProductInfo(setProductInfo);
  }, [setProductInfo]);

  return (
      <Grid
        container
        className={styles.bannerGallery}
        columns={{ xs: 4, sm: 8, md: 12 }}
        // TODO: full study material grid
      >
        {productInfo && productInfo.map((product) => {
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
