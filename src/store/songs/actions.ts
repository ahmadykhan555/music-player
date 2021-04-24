import { Song } from "../../models/song";
import { PlayerStates } from "./types";

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

export enum SongsStateActions {
  SetSongs = "Set-songs",
  SetPlayingNow = "Set-playing-now",
  SetPlayerState = "Set-player-state",
}
