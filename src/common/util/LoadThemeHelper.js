import { useContext } from "react";
import { createTheme } from "@mui/material/styles";
import ThemeContext from "../../context/ThemeContext";

export function loadPrimaryTheme() {
  const themeContext = useContext(ThemeContext);
  return createTheme(themeContext);
}
