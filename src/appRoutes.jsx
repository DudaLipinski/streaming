import { Routes, Route } from "react-router-dom";
import Content from "./components/Content";

const appRoutes = () => {
  return (
    <Routes>
      <Route path="/:type" element={<Content />}></Route>
    </Routes>
  );
};

export default appRoutes;
