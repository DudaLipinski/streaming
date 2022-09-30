/* eslint-disable react-hooks/exhaustive-deps */
import Loading from "../components/Loading";

import MediaList from "../components/MediaList/MediaList";
import useSearchable from "../hooks/useSearchable";
import useTvSeries from "../hooks/useTvSeries";

const TvSeries = () => {
  const tvSeries = useTvSeries();
  const filteredTvSeries = useSearchable(tvSeries);

  if (!tvSeries?.length) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <MediaList
      items={filteredTvSeries}
      carouselTitle="Most popular Tv Series"
    />
  );
};

export default TvSeries;
