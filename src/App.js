import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box, Paper, ThemeProvider, StyledEngineProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./common/navbar/Navbar";
import { loadPrimaryTheme } from "./common/util/LoadThemeHelper";

import Featured from "./pages/Featured";
import Products from "./pages/Products";

import styles from "./App.css";

const App = () => {
  const theme = loadPrimaryTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={styles.pageContent}>
        <Paper className={styles.heading} sx={{
          color: "text.primary",
          bgcolor: "background.default",
        }}>
          <h1>Scotty Cameron Reseller</h1>
        </Paper>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Featured />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
};

export default App;
