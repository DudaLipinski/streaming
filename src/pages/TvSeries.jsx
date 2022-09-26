/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { getMostPopularTvSeries } from "../services";

import MediaList from "../components/MediaList";
import { getMediaSummary } from "../utils";

const TvSeries = () => {
  const [tvSeries, setTvSeries] = useState();

  const loadItems = async () => {
    const mostPopularTvSeries = await getMostPopularTvSeries();
    setTvSeries(mostPopularTvSeries.map(getMediaSummary));
  };

  useEffect(() => {
    loadItems();
  }, []);

  if (!tvSeries?.length) {
    return <Loading>Loading...</Loading>;
  }

  return <MediaList items={tvSeries} title="Tv Series" />;
};

export default TvSeries;
