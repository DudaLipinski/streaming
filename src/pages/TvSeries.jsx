/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Loading from "../components/Loading";
import { getMostPopularTvSeries } from "../services";

import MediaList from "../components/MediaList/MediaList";
import { getMediaSummary } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import {
  selectors as mediaSelectors,
  actions as mediaActions,
} from "../state/media";

const TvSeries = () => {
  const dispatch = useDispatch();
  const tvSeries = useSelector(mediaSelectors.getTvSeries);

  const loadTvSeries = async () => {
    if (tvSeries.length > 0) {
      return;
    }

    const mostPopularTvSeries = await getMostPopularTvSeries();
    const listTvSeries = mostPopularTvSeries.map(getMediaSummary);

    dispatch(mediaActions.setTvSeries(listTvSeries));
  };

  useEffect(() => {
    loadTvSeries();
  }, []);

  if (!tvSeries?.length) {
    return <Loading>Loading...</Loading>;
  }

  return <MediaList items={tvSeries} carouselTitle="Most popular Tv Series" />;
};

export default TvSeries;
