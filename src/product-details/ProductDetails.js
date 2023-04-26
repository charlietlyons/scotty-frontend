import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import backendClient from "../client/backendClient";
import { Typography, CardMedia, Box, ButtonGroup, TextField, Button, Divider } from "@mui/material";
import DataLoadingSpinner from "../common/DataLoadingSpinner";
import PageBody from "../common/PageBody";


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
    <PageBody>
      <Box sx={{display: "flex", flexDirection: "row", padding: "25px 0"}}>
        <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
          {productInfo.image_url &&<CardMedia
            component="img"
            image={productInfo.image_url}
            sx={{
              padding: "10px",
            }}
          ></CardMedia>}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h3">{productInfo.name}</Typography>
          <Typography variant="h3">${productInfo.price}</Typography>
          <Typography variant="h3">Size: {productInfo.size} | Quantity: {productInfo.quantity}</Typography>
          <Typography variant="p">
            Description: {productInfo.description}
          </Typography>
        </Box>
      </Box>
      <Divider />
      <ButtonGroup fullWidth sx={{ paddingBottom: "50px"}}>
          <TextField id="quantity" label="Quantity" variant="filled" />
          <Button variant="contained" color="primary">Add to Cart</Button>
          <Button variant="contained" color="secondary">Buy Now</Button>
        </ButtonGroup>
    </PageBody>
  ) || <DataLoadingSpinner />;
};

export default ProductDetails;
