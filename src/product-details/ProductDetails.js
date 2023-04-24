import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import backendClient from "../client/backendClient";

const ProductDetails = () => {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    backendClient.getProductDetailsById(id, (data) => {
      setProductInfo(data)
    });
  }, [setProductInfo]);

  return <div>
      <h1>Product: {productInfo.name}</h1>
      <h2>Price: {productInfo.price}</h2>
      <h2>Size: {productInfo.size}</h2>
      <h2>Quantity: {productInfo.quantity}</h2>
      <h2>Image URL: {productInfo.image_url}</h2>
      <p>Description: {productInfo.description}</p>
    </div>;
};

export default ProductDetails;
