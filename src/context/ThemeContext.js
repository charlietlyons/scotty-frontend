import React from "react";

const ThemeContext = React.createContext({
  typography: {
    fontFamily: "Roboto",
  },
  // TODO: add light, dark, contrastText properties
  palette: {
    background: {
      default: "#40000e",
    },
    text: {
      primary: "#170506",
      secondary: "#fffbff",
      disabled: "#797879",
    },
    primary: {
      main: "#40000e",
      light: "#66333e",
      dark: "#2c0009",
    },
    secondary: {
      light: "#7e3f42",
      main: "#5e0f13",
      dark: "#410a0d",
    },
    // error: {
    //   //used to represent interface elements that the user should be made aware of.
    //   main: "#ff0000",
    // },
    // warning: {
    //   //used to represent potentially dangerous actions or important messages.
    //   main: "#ff0000",
    // },
    // info: {
    //   //present information to the user that is neutral and not necessarily important.
    //   main: "#2a0e0e34",
    // },
    // success: {
    //   //used to indicate the successful completion of an action that user triggered.
    //   main: "#00ff00",
    // },
  },
});

export default ThemeContext;
