// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "61b61662d5mshe5433faa725328ap147ba9jsn953457a4b170",
//     "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
//   },
// };

import { mostPopularMovies, mostPopularTvSeries } from "./mockedData";

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
