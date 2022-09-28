import Theme from "./css/Theme";
import GlobalStyles from "./css/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import AppRoutes from "./AppRoutes";
import { Provider } from "react-redux";
import state from "./state";

const App = () => {
  return (
    <Theme>
      <GlobalStyles />
      <Provider store={state}>
        <BrowserRouter>
          <Menu />
          <AppRoutes />
        </BrowserRouter>
      </Provider>
    </Theme>
  );
};

export default App;
