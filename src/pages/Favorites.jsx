/* eslint-disable react-hooks/exhaustive-deps */
import Loading from "../components/Loading";

import MediaList from "../components/MediaList";
import { useSelector } from "react-redux";
import { selectors as mediaSelectors } from "../state/media";

const Favorites = () => {
  const items = useSelector(mediaSelectors.getMoviesAndTvSeries);

  if (!items?.length) {
    return <Loading>You don't have favorites :( </Loading>;
  }

  return <MediaList items={items} carouselTitle="Your Favorites" />;
};

export default Favorites;
