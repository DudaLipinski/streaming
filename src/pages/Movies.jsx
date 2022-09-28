/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Loading from "../components/Loading";
import { getMostPopularMovies } from "../services";
import { useDispatch, useSelector } from "react-redux";
import {
  selectors as mediaSelectors,
  actions as mediaActions,
} from "../state/media";

import MediaList from "../components/MediaList/MediaList";
import { getMediaSummary } from "../utils";

const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(mediaSelectors.getMovies);

  const loadMovies = async () => {
    if (movies.length > 0) {
      return;
    }

    const mostPopularMovies = await getMostPopularMovies();
    const listMovies = mostPopularMovies.map(getMediaSummary);

    dispatch(mediaActions.setMovies(listMovies));
  };

  useEffect(() => {
    loadMovies();
  }, []);

  if (!movies?.length) {
    return <Loading>Loading...</Loading>;
  }

  return <MediaList items={movies} carouselTitle="Most popular Movies" />;
};

export default Movies;
