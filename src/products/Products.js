import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import backendClient from "../client/backendClient";
import FakeProduct from "../common/FakeProduct"
import useMediaQuery from '@mui/material/useMediaQuery';

import ProductCard from "./ProductCard";

const Products = () => {
  const [productInfo, setProductInfo] = useState([FakeProduct]);
  const matches = useMediaQuery('(max-width:975px)');

  useEffect(() => {
    backendClient.getProducts(setProductInfo);
  }, [setProductInfo]);

  return (
    <Grid
      container
      sx={{
        flexDirection: matches ? "column" : "row",
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
