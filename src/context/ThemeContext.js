import React from "react";

const ThemeContext = React.createContext({
  // TODO: add light, dark, contrastText properties
  // TODO: integrate as much CSS as possible into the theme
  palette: {
    background: {
      default: "#2a0e0e",
    },
    text: {
      primary: "#dfdede",
    },
    primary: {
      //used to represent primary interface elements for a user. It's the color displayed most frequently across your app's screens and components.
      main: "#2a0e0e",
    },
    secondary: {
      //used to represent secondary interface elements for a user. It provides more ways to accent and distinguish your product. Having it is optional.
      main: "#410b12",
    },
    error: {
      //used to represent interface elements that the user should be made aware of.
      main: "#ff0000",
    },
    warning: {
      //used to represent potentially dangerous actions or important messages.
      main: "#ff0000",
    },
    info: {
      //present information to the user that is neutral and not necessarily important.
      main: "#2a0e0e34",
    },
    success: {
      //used to indicate the successful completion of an action that user triggered.
      main: "#00ff00",
    },
  },
});

export default ThemeContext;
