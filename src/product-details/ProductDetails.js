import React, { useState } from "react";
import { useParams } from "react-router-dom";
import backendClient from "../client/backendClient";

const ProductDetails = () => {
  const { id } = useParams();
  const { productInfo, setProductInfo } = useState([]);

  console.log(backendClient.getProductDetailsById(id, setProductInfo));
  return <>{productInfo}</>;
};

export default ProductDetails;
