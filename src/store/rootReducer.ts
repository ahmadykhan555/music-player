import songsState from "./songs/reducer";
import { combineReducers } from "redux";

const reducer = combineReducers({ songsState });
export default reducer;
