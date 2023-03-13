import React, { useCallback } from "react";
import { Button } from "@mui/material";
import backendClient from "./client/backendClient";

const App = () => {

  const getProductInfo = useCallback(() => {
    backendClient.getProductInfo();
  });

  return (
    <div>
      <h1>Scotty Cameron Reseller</h1>
      <Button onClick={getProductInfo} variant="contained" disableElevation color="success" size="large">
        Get product information
      </Button>
    </div>
  );
};

export default App;
