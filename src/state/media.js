const SET_MOVIES = "SET_MOVIES";
const SET_TV_SERIES = "SET_TV_SERIES";

const INITIAL_STATE = { movies: [], tvSeries: [] };

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, movies: action.payload };
    case SET_TV_SERIES:
      return { ...state, tvSeries: action.payload };
    default:
      return state;
  }
};

export const actions = {
  setMovies: (listMovies) => ({ type: SET_MOVIES, payload: listMovies }),
  setTvSeries: (listTvSeries) => ({
    type: SET_TV_SERIES,
    payload: listTvSeries,
  }),
};

export const selectors = {
  getMovies: (state) => state.media.movies,
  getTvSeries: (state) => state.media.tvSeries,
  getMoviesAndTvSeries: (state) => state.media,
};
