import { combineReducers } from "redux";
import { reducer as favorites } from "./favorites";
import { reducer as media } from "./media";

export default combineReducers({
  favorites,
  media,
});
