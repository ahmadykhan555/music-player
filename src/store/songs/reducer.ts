import { StateAction } from "..";
import { SongsStateActions } from "./actions";
import { SongsState } from "./types";

const initialState: SongsState = {
  songs: [],
};

const songsReducer = (
  state = initialState,
  action: StateAction
): SongsState => {
  switch (action.type) {
    case SongsStateActions.SetSongs: {
      return { ...state, songs: action.payload };
    }

    case SongsStateActions.SetPlayingNow: {
      return { ...state, playingNow: action.payload };
    }

    case SongsStateActions.SetPlayerState: {
      return { ...state, playerState: action.payload };
    }

    default:
      return { ...state };
  }
};
export default songsReducer;
