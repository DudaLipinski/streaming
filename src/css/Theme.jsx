import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    black: "#000000",
    white: "#ffffff",
    blue: "#24A3FF",
    grey: "#676571",
  },
  fontSizes: {
    small: "16px",
    medium: "22px",
    large: "20px",
  },
  centralizer: {
    medium: "0 80px",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
