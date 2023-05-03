import React, { useState } from "react";
import PageBody from "../common/PageBody";
import { Typography, Card, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const CardStyle = {
  margin: "10px",
  textAlign: "center",
};

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);  

  return (
    <PageBody>
      <Typography variant="h2">Cart</Typography>
      <Stack>
        {cart.map((item) => {
          return <Card sx={CardStyle}>{item.name}</Card>;
        })}
      </Stack>
    </PageBody>
  );
};

export default Cart;
