import React from "react";
import { Grid, Card, CardMedia, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const { id, name, image_url, price, quantity, size, sku, description } = props.product;
  const navigate = useNavigate();

  return (
    <Grid
      key={id}
      item
      xs={4}
      onClick={() => {
        navigate(`/products/${id}`, {
          state: {
            id: id,
            name: name,
            image_url: image_url,
            price: price,
            quantity: quantity,
            size: size,
            sku: sku,
            description: description
          }
        });
      }}
    >
      <Card
        sx={{
          flexDirection: "row",
        }}
      >
        <CardMedia
          component="img"
          image={image_url}
          sx={{
            height: "100%",
            color: "secondary.primary",
            padding: "10px",
          }}
        ></CardMedia>
        <Paper
          sx={{
            color: "text.secondary",
            textAlign: "center",
            padding: "10px",
          }}
        >
          <Typography variant="p" color="text.primary">{name}</Typography>
        </Paper>
        <Paper
          sx={{
            color: "text.secondary",
            textAlign: "center",
            padding: "10px",
          }}
        >
          <Typography variant="p" color="text.primary">${price}</Typography>
        </Paper>
        {size !== "N/A" && (
          <Paper
            sx={{
              color: "text.secondary",
              textAlign: "center",
              padding: "10px",
            }}
          >
            <Typography variant="p" color="text.primary">{size}</Typography>
          </Paper>
        )}
      </Card>
    </Grid>
  );
};

export default ProductCard;
