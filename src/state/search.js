const UPDATE_SEARCH = "UPDATE_SEARCH";

const INITIAL_STATE = null;

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SEARCH:
      return action.payload;
    default:
      return state;
  }
};

export const actions = {
  updateSearch: (value) => ({ type: UPDATE_SEARCH, payload: value }),
};

export const selectors = {
  getSearch: (state) => state.search,
};
