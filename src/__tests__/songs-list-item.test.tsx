import "@testing-library/jest-dom/extend-expect";
import { screen, render, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { getSongs } from "../api/music";
import SongListItem from "../components/SongListItem/SongListItem";
import store from "../store";

afterEach(() => cleanup());

test("renders without crashing", async () => {
  const songs = await getSongs();
  const song = songs[0];
  await render(
    <Provider store={store}>
      <SongListItem
        onSongItemClicked={() => {}}
        onSongLiked={() => {}}
        songLiked
        song={song}
      />
    </Provider>
  );
  const songsListItem = screen.findByTestId(`song-list-item-${song.id}`);
  expect(songsListItem).toBeDefined();
});

test("renders with correct value", async () => {
  const songs = await getSongs();
  const song = songs[0];
  await render(
    <Provider store={store}>
      <SongListItem
        onSongItemClicked={() => {}}
        onSongLiked={() => {}}
        songLiked
        song={song}
      />
    </Provider>
  );
  const songsListItem = await screen.findByTestId(`song-list-item-${song.id}`);
  expect(songsListItem).toHaveTextContent(song.name);
});

test("renders with correct play button state", async () => {
  const songs = await getSongs();
  const song = songs[0];
  const { container } = await render(
    <Provider store={store}>
      <SongListItem
        onSongItemClicked={() => {}}
        onSongLiked={() => {}}
        songLiked
        song={song}
      />
    </Provider>
  );
  const playButton = container.getElementsByClassName(
    "song-list-item__controls--play"
  )[0];
  expect(playButton).toBeDefined();
});

test("renders with correct like button state", async () => {
  const songs = await getSongs();
  const song = songs[0];
  const { container } = await render(
    <Provider store={store}>
      <SongListItem
        onSongItemClicked={() => {}}
        onSongLiked={() => {}}
        songLiked
        song={song}
      />
    </Provider>
  );
  const likeButton = container.getElementsByClassName(
    "song-list-item__controls--like"
  )[0];
  expect(likeButton).not.toBeDefined();
});

test("renders with correct dislike button state", async () => {
  const songs = await getSongs();
  const song = songs[0];
  const { container } = await render(
    <Provider store={store}>
      <SongListItem
        onSongItemClicked={() => {}}
        onSongLiked={() => {}}
        songLiked={false}
        song={song}
      />
    </Provider>
  );
  const dislikeButton = container.getElementsByClassName(
    "song-list-item__controls--dislike"
  )[0];
  expect(dislikeButton).not.toBeDefined();
});
