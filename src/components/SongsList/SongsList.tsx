import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { likeSong } from "../../api/music";
import { Song } from "../../models/song";
import { AppState } from "../../store/rootReducer";
import { setPlayerState, setPlayingNow } from "../../store/songs/actions";
import { PlayerStates } from "../../store/songs/types";
import {
  getFromLocalStorage,
  LocalStorageKeys,
  saveInLocalStorage,
} from "../../utility/localStorage";
import SongListItem from "../SongListItem/SongListItem";
import "./SongsList.scss";

interface OwnProps extends PropsFromRedux {}
const SongsList: React.FC<OwnProps> = ({ songs, dispatch }) => {
  const list = getFromLocalStorage(LocalStorageKeys.LikedSongsList) || {};
  const handleSongItemClicked = (songState: PlayerStates, song: Song) => {
    songState === PlayerStates.Paused ? pauseSong() : playSong(song);
  };

  const handleSongLiked = async (liked: boolean, songId: string) => {
    saveInLocalStorage(LocalStorageKeys.LikedSongsList, {
      ...list,
      [songId]: liked,
    });
    if (liked) {
      await likeSong(songId);
    }
  };

  const pauseSong = () => dispatch(setPlayerState(PlayerStates.Paused));
  const playSong = (song: Song) => {
    dispatch(setPlayingNow(song));
    dispatch(setPlayerState(PlayerStates.Playing));
  };

  return (
    <div className='songs-list-component'>
      {songs.length > 0 ? (
        songs.map((song) => (
          <SongListItem
            key={song.id}
            song={song}
            onSongItemClicked={handleSongItemClicked}
            onSongLiked={handleSongLiked}
            songLiked={list[song.id]}
          />
        ))
      ) : (
        <p>No songs yet</p>
      )}
    </div>
  );
};
const mapStateToProps = (state: AppState) => ({
  songs: state.songsState.songs,
});
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(SongsList);
