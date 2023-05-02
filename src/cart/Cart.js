import React, { useState } from "react";
import PageBody from "../common/PageBody";
import { Typography, Card, Stack } from "@mui/material";

const CardStyle = {
  margin: "10px",
  textAlign: "center",
};

const Cart = () => {
  // TODO: Implement Cart Context
  const [state, setState] = useState({
    cart: [{ name: "item 1" }, { name: "item 2" }, { name: "item 3" }],
  });

  return (
    <PageBody>
      <Typography variant="h2">Cart</Typography>
      <Stack>
        {state.cart.map((item) => {
          return <Card sx={CardStyle}>{item.name}</Card>;
        })}
      </Stack>
    </PageBody>
  );
};

export default Cart;
