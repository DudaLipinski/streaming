import { combineReducers } from "redux";
import { reducer as favorites } from "./favorites";
import { reducer as media } from "./media";
import { reducer as search } from "./search";

export default combineReducers({
  favorites,
  media,
  search,
});
