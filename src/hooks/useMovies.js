import { useEffect } from "react";
import { getMostPopularMovies } from "../services";
import { useDispatch, useSelector } from "react-redux";
import {
  selectors as mediaSelectors,
  actions as mediaActions,
} from "../state/media";

import { getMediaSummary } from "../utils";

const useMovies = () => {
  const dispatch = useDispatch();

  const movies = useSelector(mediaSelectors.getMovies);

  const loadMovies = async () => {
    const mostPopularMovies = await getMostPopularMovies();
    const listMovies = mostPopularMovies.map(getMediaSummary);

    dispatch(mediaActions.setMovies(listMovies));
  };

  useEffect(() => {
    if (movies?.length) {
      return;
    }

    loadMovies();
  }, []);

  return movies;
};

export default useMovies;
