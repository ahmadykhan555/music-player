import { StateAction } from "..";
import { SongsStateActions } from "./actions";
import { SongsState } from "./types";

const initialState: SongsState = {
  songs: [],
};

const songsReducer = (
  state: SongsState = initialState,
  action: StateAction
) => {
  switch (action.type) {
    case SongsStateActions.SetSongs: {
      return { ...state, songs: action.payload };
    }

    default:
      return { ...state };
  }
};
export default songsReducer;
