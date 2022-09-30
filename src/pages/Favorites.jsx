/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Loading from "../components/Loading";

import MediaList from "../components/MediaList/MediaList";
import { useSelector } from "react-redux";
import { selectors as favoritesSelectors } from "../state/favorites";
import useMovies from "../hooks/useMovies";
import useTvSeries from "../hooks/useTvSeries";
import useSearchable from "../hooks/useSearchable";

const Favorites = () => {
  const movies = useMovies();
  const tvSeries = useTvSeries();

  const favorites = useSelector(favoritesSelectors.getFavorites);

  const [favoriteItems, setFavoriteItems] = useState([]);
  const filteredFavoriteItems = useSearchable(favoriteItems);

  const filterFavoriteItems = () => {
    const moviesAndTvSeries = [...movies, ...tvSeries];

    setFavoriteItems(
      moviesAndTvSeries.filter(({ id }) => favorites.includes(id))
    );
  };

  useEffect(() => {
    if (!favorites?.length || !movies?.length || !tvSeries?.length) {
      return;
    }

    filterFavoriteItems();
  }, [favorites, movies, tvSeries]);

  if (!favoriteItems?.length) {
    return <Loading>You don't have favorites :( </Loading>;
  }

  if (!movies?.length || !tvSeries?.length) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <MediaList items={filteredFavoriteItems} carouselTitle="Your Favorites" />
  );
};

export default Favorites;
