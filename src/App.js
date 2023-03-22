import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box, Paper } from "@mui/material";

import Featured from "./pages/Featured";
import Products from "./pages/Products";

import styles from "./App.css";

const App = () => {
  return (
    <Box className={styles.pageContent}>
      <Paper className={styles.heading}>
        <h1>Scotty Cameron Reseller</h1>
      </Paper>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Featured />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default App;
