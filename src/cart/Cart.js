import React, { useContext } from "react";
import PageBody from "../common/PageBody";
import { Typography, Card, Stack } from "@mui/material";
import CartContext from "../context/CartContext";

const CardStyle = {
    margin: "10px",
    textAlign: "center",
}

const Cart = () => {
    // TODO: Implement Cart Context

    return <PageBody>
        <Typography variant="h2">Cart</Typography>
        <Stack>
            { state.cart.map((item) => {
                return <Card sx={CardStyle}>{item.name}</Card>
            })}
        </Stack>
    </PageBody>
}

export default Cart;