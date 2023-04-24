import React from "react";

import { Grid, Card, CardContent, CardMedia, Typography, Paper } from "@mui/material";

import styles from "../App.css";

const ProductCard = (props) => {
    const { id, name, image_url, price, quantity, size, sku } = props.product;

    return (
        <Grid key={id} item xs={4}>
            <Card sx={{
                flexDirection: "row",
                borderRadius: "10px",
            }}>
                <CardMedia component="img" image={image_url} sx={{
                    height: "100%",
                    color: "secondary.primary",
                }} />
                <h2>{name}</h2>
                <h3>${price}</h3>
                { size !== "N/A" && <h3>{size}</h3>}
            </Card>
        </Grid>
    );
};

export default ProductCard;