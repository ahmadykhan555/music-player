import songsState from "./songs/reducer";
import { combineReducers } from "redux";

// add more state slices here
const reducer = combineReducers({ songsState });
export type AppState = ReturnType<typeof reducer>;
export default reducer;
