import { StateAction } from "..";
import { Song } from "../../models/song";
import { SongsStateActions } from "./actions";

interface SongsState {
  songs: Song[];
}

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
