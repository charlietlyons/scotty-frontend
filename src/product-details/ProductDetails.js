import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import backendClient from "../client/backendClient";
import { Container, Typography, CardMedia, Box } from "@mui/material";
import FakeProduct from "../common/FakeProduct";

const ProductDetails = () => {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState(FakeProduct);

  useEffect(() => {
    backendClient.getProductDetailsById(id, (data) => {
      setProductInfo(data);
    });
  }, [setProductInfo]);

  return (
    <Container sx={{ display: "flex", flexDirection: "row" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="img"
          image={productInfo.image_url}
          sx={{
            width: "100%",
            padding: "10px",
          }}
        ></CardMedia>
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
  );
};

export default ProductDetails;
