// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
//   },
// };

import { mostPopularMovies } from "./__mocks__/mostPopularMovies";
import { mostPopularTvSeries } from "./__mocks__/mostPopularTvSeries";

export const getMostPopularMovies = async () => {
  return mostPopularMovies;
  // const res = await fetch(
  //   "https://imdb8.p.rapidapi.com/title/get-most-popular-movies",
  //   options
  // );
  // return res.json();
};

export const getMostPopularTvSeries = async () => {
  return mostPopularTvSeries;
  // const res = await fetch(
  //   "https://imdb8.p.rapidapi.com/title/get-most-popular-tv-shows",
  //   options
  // );
  // return res.json();
};

//Most popular movies
// fetch(
//   "https://imdb8.p.rapidapi.com/title/get-most-popular-movies",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// Most popular tv series
// fetch(
//   "https://imdb8.p.rapidapi.com/title/get-most-popular-tv-shows",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// find
// fetch(
//   "https://imdb8.p.rapidapi.com/title/v2/find?title=game%20of&limit=20&sortArg=moviemeter%2Casc",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
