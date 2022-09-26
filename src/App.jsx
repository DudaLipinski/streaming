import Theme from "./css/Theme";
import GlobalStyles from "./css/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";
import AppRoutes from "./AppRoutes";

const App = () => {
  return (
    <Theme>
      <GlobalStyles />
      <BrowserRouter>
        <div className="App">
          <Menu />
          <AppRoutes />
        </div>
      </BrowserRouter>
    </Theme>
  );
};

export default App;
