import Theme from "./css/Theme";
import GlobalStyles from "./css/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";
import Routes from "./appRoutes";

const App = () => {
  return (
    <Theme>
      <GlobalStyles />
      <BrowserRouter>
        <div className="App">
          <Menu />
          <Routes />
        </div>
      </BrowserRouter>
    </Theme>
  );
};

export default App;
