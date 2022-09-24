import React from "react";
import Theme from "./css/Theme";
import GlobalStyles from "./css/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";
import Content from "./components/Content";

const App = () => {
  return (
    <Theme>
      <GlobalStyles />
      <BrowserRouter>
        <div className="App">
          <Menu />
          <Content></Content>
        </div>
      </BrowserRouter>
    </Theme>
  );
};

export default App;
