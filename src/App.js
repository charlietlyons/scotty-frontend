import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box, Paper, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./common/navbar/Navbar";
import { loadPrimaryTheme } from "./common/util/LoadThemeHelper";

import DataLoadingSpinner from "./common/DataLoadingSpinner";
import Featured from "./featured/Featured";
const Products = React.lazy(() => import("./products/Products"));
const ProductDetails = React.lazy(() =>
  import("./product-details/ProductDetails")
);

import styles from "./App.css";

const App = () => {
  const theme = loadPrimaryTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={styles.pageContent}>
        <Paper
          className={styles.heading}
          sx={{
            color: "text.primary",
            bgcolor: "background.default",
          }}
        >
          <h1>Scotty Cameron Reseller</h1>
        </Paper>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Featured />} />
            <Route
              path="/products"
              element={
                <Suspense fallback={<DataLoadingSpinner />}>
                  <Products />
                </Suspense>
              }
            />
            <Route
              path="/products/:id"
              element={
                <Suspense fallback={<DataLoadingSpinner />}>
                  <ProductDetails />
                </Suspense>
              }
            />
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
};

export default App;
