import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Featured from "./pages/Featured";
import Products from "./pages/Products";

import styles from "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Featured />} />
        <Route path="/products" elements={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
