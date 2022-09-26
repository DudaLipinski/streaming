import { combineReducers } from "redux";
import { reducer as favorites } from "./favorites";

export default combineReducers({
  favorites,
});
