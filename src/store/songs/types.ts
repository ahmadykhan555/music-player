import { Song } from "../../models/song";

export enum PlayerStates {
  Playing = "playing",
  Paused = "paused",
}

export interface SongsState {
  songs: Song[];
  playingNow?: Song;
  playerState?: PlayerStates;
}

export enum SongsStateActions {
  SetSongs = "Set-songs",
  SetPlayingNow = "Set-playing-now",
  SetPlayerState = "Set-player-state",
}
