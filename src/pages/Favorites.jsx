/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { getMostPopularMoviesAndTvSeries } from "../services";

import MediaList from "../components/MediaList";
import { getMediaSummary } from "../utils";

const Favorites = () => {
  const favorites = [];
  const [isLoading, setIsLoading] = useState(true);
  const [favoriteMedia, setFavoriteMedia] = useState();

  const loadItems = async () => {
    const result = await getMostPopularMoviesAndTvSeries();
    const favoriteItems = result.filter(({ id }) => favorites.includes(id));

    setFavoriteMedia(favoriteItems.map(getMediaSummary));
    setIsLoading(false);
  };

  useEffect(() => {
    loadItems();
  }, []);

  if (isLoading) {
    return <Loading>Loading...</Loading>;
  }

  if (!favoriteMedia?.length) {
    return <Loading>You don't have favorites :( </Loading>;
  }

  return <MediaList items={favoriteMedia} title="Favorites" />;
};

export default Favorites;
