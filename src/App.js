import React, { Suspense, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box, ThemeProvider} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./common/navbar/Navbar";
import { loadPrimaryTheme } from "./common/util/LoadThemeHelper";
import DataLoadingSpinner from "./common/DataLoadingSpinner";
import Featured from "./featured/Featured";
import Header from "./header/Header";
import Cart from "./cart/Cart";
import CartContext from "./context/CartContext";

const Products = React.lazy(() => import("./products/Products"));
const ProductDetails = React.lazy(() =>
  import("./product-details/ProductDetails")
);

const pageContentStyles = {
  minWidth: "100%",
  minHeight: "100vh",
  borderRadius: "15px"
}

const App = () => {
  const theme = loadPrimaryTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={pageContentStyles}>
        <BrowserRouter>
          <Header />
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
            <Route
              path="/cart/"
              element={
                <Suspense fallback={<DataLoadingSpinner />}>
                  <Cart />
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
