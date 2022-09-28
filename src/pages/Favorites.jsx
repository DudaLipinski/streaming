/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { getMostPopularMoviesAndTvSeries } from "../services";

import MediaList from "../components/MediaList/MediaList";
import { getMediaSummary } from "../utils";
import { useSelector } from "react-redux";
import { selectors as favoritesSelectors } from "../state/favorites";

const Favorites = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const favorites = useSelector(favoritesSelectors.getFavorites);

  const loadItems = async () => {
    const result = await getMostPopularMoviesAndTvSeries();
    const digestedItems = result.map(getMediaSummary);

    setItems(digestedItems);
    setFavoriteItems(digestedItems.filter(({ id }) => favorites.includes(id)));

    setIsLoading(false);
  };

  useEffect(() => {
    loadItems();
  }, []);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    setFavoriteItems(items.filter(({ id }) => favorites.includes(id)));
  }, [favorites]);

  if (isLoading) {
    return <Loading>Loading...</Loading>;
  }

  if (!favoriteItems?.length) {
    return <Loading>You don't have favorites :( </Loading>;
  }

  return <MediaList items={favoriteItems} carouselTitle="Your favorites" />;
};

export default Favorites;
