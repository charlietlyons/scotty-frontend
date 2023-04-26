import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import backendClient from "../client/backendClient";
import { Container, Typography, CardMedia, Box } from "@mui/material";
import DataLoadingSpinner from "../common/DataLoadingSpinner";

const ProductDetails = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [productInfo, setProductInfo] = useState(state);

  useEffect(() => {
    if(!productInfo) {
      backendClient.getProductDetailsById(id, (data) => {
        setProductInfo(data);
      });
    }
  }, [setProductInfo, id, productInfo]);

  return productInfo && (
    <Container sx={{ display: "flex", flexDirection: "row" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {productInfo.image_url &&<CardMedia
          component="img"
          image={productInfo.image_url}
          sx={{
            width: "100%",
            padding: "10px",
          }}
        ></CardMedia>}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="h2"
          sx={{
            color: "palevioletred",
          }}
        >
          {productInfo.name}
        </Typography>
        <Typography variant="h3">Price: {productInfo.price}</Typography>
        <Typography variant="h3">Size: {productInfo.size}</Typography>
        <Typography variant="h3">Quantity: {productInfo.quantity}</Typography>
        <Typography variant="p">
          Description: {productInfo.description}
        </Typography>
      </Box>
    </Container>
  ) || <DataLoadingSpinner />;
};

export default ProductDetails;
