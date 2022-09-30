/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { getMostPopularTvSeries } from "../services";

import { getMediaSummary } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import {
  selectors as mediaSelectors,
  actions as mediaActions,
} from "../state/media";

const useTvSeries = () => {
  const dispatch = useDispatch();
  const tvSeries = useSelector(mediaSelectors.getTvSeries);

  const loadTvSeries = async () => {
    const mostPopularTvSeries = await getMostPopularTvSeries();
    const listTvSeries = mostPopularTvSeries.map(getMediaSummary);

    dispatch(mediaActions.setTvSeries(listTvSeries));
  };

  useEffect(() => {
    if (tvSeries?.length) {
      return;
    }

    loadTvSeries();
  }, []);

  return tvSeries;
};

export default useTvSeries;
