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
    large: "26px",
    big: "34px",
    bigTitle: "60px",
  },
  centralizer: {
    mobilePadding: "0 30px",
    tabletPadding: "0 60px",
    desktopPadding: "0 80px",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
