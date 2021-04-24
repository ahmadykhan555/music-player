import { Song } from "../../models/song";

export const setSongs = (songs: Song[]) => ({
  type: SongsStateActions.SetSongs,
  payload: [...songs],
});

export enum SongsStateActions {
  SetSongs = "Set-Songs",
}
