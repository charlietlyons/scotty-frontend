import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./common/navbar/Navbar";
import { loadPrimaryTheme } from "./common/util/LoadThemeHelper";
import DataLoadingSpinner from "./common/DataLoadingSpinner";
import Featured from "./featured/Featured";
import Header from "./header/Header";
import Cart from "./cart/Cart";
import store from "./store/store";
import { Provider } from "react-redux";

const FAQ = React.lazy(() => import("./faq/FAQ"));
const Products = React.lazy(() => import("./products/Products"));
const ProductDetails = React.lazy(() =>
  import("./product-details/ProductDetails")
);

const pageContentStyles = {
  minWidth: "100%",
  minHeight: "100vh",
  borderRadius: "15px",
};

const App = () => {
  const theme = loadPrimaryTheme();

  return (
    <Provider store={store}>
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
            <Route
              path="/faq"
              element={
                <Suspense fallback={<DataLoadingSpinner />}>
                  <FAQ />
                </Suspense>
              }
            />
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
    </Provider>
  );
};

export default App;
