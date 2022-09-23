import React from "react";
import Theme from "./css/Theme";
import GlobalStyles from "./css/GlobalStyles";

const App = () => {
  return (
    <Theme>
      <GlobalStyles />
      <div className="App">
        <h1>hello</h1>
      </div>
    </Theme>
  );
};

export default App;
