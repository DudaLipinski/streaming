const ADD_FAVORITE = "ADD_FAVORITE";
const REMOVE_FAVORITE = "REMOVE_FAVORITE";

const INITIAL_STATE = [];

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, action.payload];
    case REMOVE_FAVORITE:
      return state.filter((id) => id !== action.payload);
    default:
      return state;
  }
};

export const actions = {
  addFavorite: (itemId) => ({ type: ADD_FAVORITE, payload: itemId }),
  removeFavorite: (itemId) => ({ type: REMOVE_FAVORITE, payload: itemId }),
};

export const selectors = {
  getFavorites: (state) => state.favorites,
};
