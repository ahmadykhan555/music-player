import { Song } from "../../models/song";
import { PlayerStates, SongsStateActions } from "./types";

export const setSongs = (songs: Song[]) => ({
  type: SongsStateActions.SetSongs,
  payload: [...songs],
});

export const setPlayingNow = (song: Song) => ({
  type: SongsStateActions.SetPlayingNow,
  payload: song,
});

export const setPlayerState = (playerState: PlayerStates) => ({
  type: SongsStateActions.SetPlayerState,
  payload: playerState,
});
