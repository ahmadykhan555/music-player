import "@testing-library/jest-dom/extend-expect";
import { screen, render, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { getSongs } from "../api/music";
import MusicPlayer from "../components/MusicPlayer/MusicPlayer";
import { Song } from "../models/song";
import store from "../store";
import { setPlayingNow } from "../store/songs/actions";

afterEach(() => cleanup());
const MUSIC_PLAYER_ID = "app-music-player";

const ConnectMusicPlayer = () => (
  <Provider store={store}>
    <MusicPlayer />
  </Provider>
);

const loadSongInState = () => {
  return new Promise<Song>(async (resolve) => {
    const songs = await getSongs();
    const selectedSong = songs[0];
    store.dispatch(setPlayingNow(selectedSong));
    resolve(selectedSong);
  });
};

test("music player should render without crashing", async () => {
  await render(<ConnectMusicPlayer />);
  expect(screen.getByTestId(MUSIC_PLAYER_ID)).toBeDefined();
});

test("music player loads selected song without crashing", async () => {
  await render(<ConnectMusicPlayer />);
  const selectedSong = await loadSongInState();
  const audioPlayer = document.getElementsByTagName("audio")[0];
  expect(audioPlayer.src).toEqual(selectedSong.music_file_path);
});
