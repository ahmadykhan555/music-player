import songsState from "./songs/reducer";
import { combineReducers } from "redux";

const reducer = combineReducers({ songsState });
export type AppState = ReturnType<typeof reducer>;
export default reducer;
