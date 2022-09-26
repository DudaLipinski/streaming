/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { getMostPopularMovies } from "../services";

import MediaList from "../components/MediaList";
import { getMediaSummary } from "../utils";

const Movies = () => {
  const [movies, setMovies] = useState();

  const loadItems = async () => {
    const mostPopularMovies = await getMostPopularMovies();
    setMovies(mostPopularMovies.map(getMediaSummary));
  };

  useEffect(() => {
    loadItems();
  }, []);

  if (!movies?.length) {
    return <Loading>Loading...</Loading>;
  }

  return <MediaList items={movies} title="Movies" />;
};

export default Movies;
