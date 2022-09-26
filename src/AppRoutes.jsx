import { Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import Favorites from "./pages/Favorites";

const appRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Movies />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/tv-series" element={<TvSeries />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};

export default appRoutes;
