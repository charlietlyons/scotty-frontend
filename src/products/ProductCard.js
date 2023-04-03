import React from "react";

import { Grid, Card, CardContent, CardMedia, Typography, Paper } from "@mui/material";

import styles from "../App.css";

const ProductCard = (props) => {
    const { id, name, image_url, price, quantity, size, sku } = props.product;

    return (
        <Grid key={id} item xs={4}>
            <Card sx={{
                flexDirection: "row",
            }}>
                <CardMedia component="img" image={image_url} sx={{
                    height: "100%",
                    color: "secondary.primary",
                    padding: "10px",
                }}></CardMedia>
                <Paper sx={{
                    color: "text.secondary",
                    textAlign: "center",
                    padding: "10px",
                }}>{name}</Paper>
                <Paper sx={{
                    color: "text.secondary",
                    textAlign: "center",
                    padding: "10px",
                }}>${price}</Paper>
                { size !== "N/A" && <Paper sx={{
                    color: "text.secondary",
                    textAlign: "center",
                    padding: "10px",
                }}>{size}</Paper>}
            </Card>
        </Grid>
    );
};

export default ProductCard;