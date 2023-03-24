import React from "react";
import Button from "@mui/material/Button";
import { loadPrimaryTheme } from "./util/LoadThemeHelper";
import { ThemeProvider } from "@emotion/react";

const ThemedButton = (props) => {
  const theme = loadPrimaryTheme();
  return (
    <ThemeProvider theme={theme}>
      <Button color="primary" variant="outlined">
        {props.children}
      </Button>
    </ThemeProvider>
  );
};

export default ThemedButton;
