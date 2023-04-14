import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import backendClient from "../client/backendClient";

import styles from "../App.css";
import ProductCard from "./ProductCard";

const Products = () => {
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    backendClient.getProducts(setProductInfo);
  }, [setProductInfo]);

  return (
    <Grid
      container
      className={styles.bannerGallery}
      sx={{
        width: "70%",
        margin: "auto",
        paddingTop: "10px",
      }}
      spacing={5}
      // TODO: full study material grid
    >
      {productInfo &&
        productInfo.map((product) => {
          return <ProductCard imageSrc={product.image_url} product={product} />;
        })}
    </Grid>
  );
};

export default Products;
