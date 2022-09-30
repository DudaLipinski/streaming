/* eslint-disable react-hooks/exhaustive-deps */
import Loading from "../components/Loading";

import MediaList from "../components/MediaList/MediaList";
import useMovies from "../hooks/useMovies";
import useSearchable from "../hooks/useSearchable";

const Movies = () => {
  const movies = useMovies();
  const filteredMovies = useSearchable(movies);

  if (!movies?.length) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <MediaList items={filteredMovies} carouselTitle="Most popular Movies" />
  );
};

export default Movies;
